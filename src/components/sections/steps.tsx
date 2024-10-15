import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle, DollarSign, UserPlus } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";

export default function Steps() {
  return (
    <MaxWidthWrapper>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get Started in 3 Easy Steps
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Making money online has never been easier than with Gain Plus.
            </p>
          </div>
          <div className="grid gap-8 py-12 md:grid-cols-3">
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-lg font-bold">1. Sign Up</h3>
                <p className="text-sm text-gray-500">
                  Create your Gain Plus account by providing your basic
                  information. It only takes a few minutes to join our community
                  of earners.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-lg font-bold">2. Pay Sign-Up Fee</h3>
                <p className="text-sm text-gray-500">
                  Make a one-time payment of the sign-up fee to activate your
                  account. This fee helps us maintain the platform and provide
                  you with earning opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                {/* <CheckCircle className="mb-4 h-12 w-12 text-primary" /> */}
                <h3 className="mb-2 text-lg font-bold">3. Start Earning</h3>
                <p className="text-sm text-gray-500">
                  Once your account is activated, dive into micro-tasks, play
                  games, enter raffles, or join investment pools. Start earning
                  money right away!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
