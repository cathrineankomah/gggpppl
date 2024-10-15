'use client';
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { buttonVariants } from '@/components/ui/button';
import { env } from '@/env';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

const publicKey = env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

export function PaySubscriptionButton({ amount }: { amount: number }) {
    const { user } = useUser();
    const router = useRouter();
  
    const componentProps = {
      email: user?.emailAddresses[0]?.emailAddress + '',
      amount: amount * 100,
      currency: 'GHS',
      publicKey,
      text: 'Pay Now & Activate',
      onSuccess: () => {
        router.refresh();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        toast.success('Payment Successful');
      },
      onError: () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        toast.error('Something went wrong. Please try again.');
      },
    };
  
    return (
      <div>
        {!user ? (
          <div>Loading ...</div>
        ) : (
          <PaystackButton className={buttonVariants({  className: 'w-full' })} {...componentProps}  />
        )}
      </div>
    );
  }
  