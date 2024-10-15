import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Gamepad2, Gift, PiggyBank } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full bg-gray-100">
      <section className="mx-auto max-w-5xl bg-gray-100 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Earn More with Gain Plus
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover multiple ways to boost your income and have fun while
                doing it!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Banknote className="h-8 w-8" />
                <CardTitle>Micro Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                Complete quick online tasks and earn money instantly. From
                surveys to data entry, there&apos;s always an opportunity to
                increase your earnings.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Gamepad2 className="h-8 w-8" />
                <CardTitle>Play & Earn Games</CardTitle>
              </CardHeader>
              <CardContent>
                Turn your gaming skills into real money. Participate in various
                games and competitions to win cash prizes while having fun.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Gift className="h-8 w-8" />
                <CardTitle>Exciting Raffles</CardTitle>
              </CardHeader>
              <CardContent>
                Enter our regular raffles for a chance to win big! From cash
                prizes to the latest electronic gadgets like phones and laptops,
                there&apos;s always something exciting to look forward to.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <PiggyBank className="h-8 w-8" />
                <CardTitle>Investment Pools</CardTitle>
              </CardHeader>
              <CardContent>
                Grow your earnings by participating in our investment pools.
                Join forces with other members to access higher-yield
                opportunities and potentially multiply your income.
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="mt-8">
              Start Earning Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
