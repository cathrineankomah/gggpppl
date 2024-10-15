import React from "react";
import GamePage from "@/components/dashboard/games-page";
import { env } from "@/env";
import UnderDevelopment from "@/components/dashboard/under-development";

export const runtime = 'edge';
export default function GamesPage() {
  if (env.NODE_ENV == "development") {
    return (
      <div >
        <UnderDevelopment />
      </div>
    );
  }
  return (
    <div>
      <GamePage />
    </div>
  );
}
