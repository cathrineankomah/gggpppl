import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { type WebhookEvent } from '@clerk/nextjs/server';
import { env } from '@/env';
import { activities, users } from '@/server/db/schema';
import { db } from '@/server/db';
import { eq } from 'drizzle-orm';
import { customAlphabet } from 'nanoid'

export const runtime = 'edge';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = env.CLERK_WEBHOOK_SECRET;

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const nanoid = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    7,
  )

  const eventType = evt.type;
  switch (eventType) {
    case 'user.created': {
      await db
        .insert(users)
        .values({
          id: evt.data.id,
          email: evt?.data?.email_addresses[0]?.email_address ?? '',
          name: `${evt?.data?.first_name} ${evt?.data?.last_name}`,
          referralCode: nanoid(),
        })
        .onConflictDoUpdate({
          target: users.id,
          set: {
            email: evt?.data?.email_addresses[0]?.email_address,
            name: `${evt?.data?.first_name} ${evt?.data?.last_name}`,
          },
        });
        await db.insert(activities).values({
          userId: evt.data.id,
          type: 'user',
          action: 'User created',
          details: '',
        })
      console.log('User created', evt.data.id);
      return new Response('success', { status: 200 });
    }
    case 'user.updated': {
      await db
        .update(users)
        .set({
          email: evt?.data?.email_addresses[0]?.email_address,
          name: `${evt?.data?.first_name} ${evt?.data?.last_name}`,
        })
        .where(eq(users.id, evt.data.id));
      console.log('User updated', evt.data.id);
      return new Response('success', { status: 200 });
    }
    case 'user.deleted': {
      await db
        .update(users)
        .set({
          isDeleted: true,
        })
        .where(eq(users.id, evt.data.id+""));
      return new Response('success', { status: 200 });
    }
    default: {
      console.error('Unknown event type:', eventType);
    }
  }
}