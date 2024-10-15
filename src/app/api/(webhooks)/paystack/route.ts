import { headers } from 'next/headers';
import { env } from '@/env';
import { db } from '@/server/db';
import {  users, activities } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
export const runtime = 'edge';

interface Data {
  status: string;
  reference: string;
  amount: number;
  currency: string;
  id: string;
  customer: {
    email: string;
    id: number;
  };
}
interface WebhookEvent {
  event: string;
  data: Data;
}

export async function POST(req: Request) {
  const secret = env.PAYSTACK_SECRET_KEY;


  const signature = headers().get('x-paystack-signature');
  console.log(signature);

  if (1 == 1) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const event = (await req.json()) as WebhookEvent;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const data = event.data;
    const email = data.customer.email;
    const date: Date = new Date();
    date.setDate(date.getDate() + 30);

    console.log(data);

    if (event.event === 'charge.success') {
      const validAmounts = [20000, 30000]; 
      if (!validAmounts.includes(data.amount)) {
        console.log(`Invalid amount: ${data.amount}`);
        return new Response('success', { status: 200 });
      }
      const  user = await db.query.users.findFirst({
        where: eq(users.email, email)
      })

      await db.insert(activities).values({
        userId: user?.id ?? '',
        type: 'transaction',
        action: 'Payment of ' + data.amount / 100 + ' ' + data.currency + ' received',
        details: '',
      })

      console.log('charge.success');
      await db
        .update(users)
        .set({
          activated: true,
        })
        .where(eq(users.email, email));
       await db.insert(activities).values({
        userId: user?.id ?? '',
        type: 'user',
        action: 'Account activated',
        details: '',
      })
      return new Response('success', { status: 200 });
    }
  }
}   