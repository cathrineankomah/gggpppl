import InvestmentsPage from "@/components/dashboard/investment-page";
import UnderDevelopment from "@/components/dashboard/under-development";
import { env } from "@/env";
import React from "react";

export const runtime = 'edge';
export default function InvestmentPage() {
  if (env.NODE_ENV == "development") {
    return (
      <div >
        <UnderDevelopment />
      </div>
    );
  }
  return (
    <div>
      <InvestmentsPage />
    </div>
  );
}
