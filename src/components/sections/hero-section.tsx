import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Gift, PiggyBank, Target } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">Earn Money.</span> Have Fun.
                  Gain Plus.
                </h1>
                <p className="max-w-[600px]">
                  Complete micro-tasks, play games, win raffles, and invest your
                  earnings. Join thousands making money online with Gain Plus.
                </p>
              </div>
              <Link href={"/sign-up"}>
                <Button size={"lg"}>
                  Start Earning Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex flex-col gap-4  sm:flex-row">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <span>Tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-green-500" />
                  <span>Games</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-500" />
                  <span>Raffles</span>
                </div>
                <div className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-green-500" />
                  <span>Invest</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full lg:h-[600px]">
                <Image
                  src="/image.png"
                  alt="Gain Plus App Interface"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
