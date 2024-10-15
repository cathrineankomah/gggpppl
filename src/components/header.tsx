"use client"
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "./ui/button";
import { Home } from "lucide-react";

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}


export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 h-16 w-full border-b border-gray-200 bg-background/40 backdrop-blur-lg transition-all dark:border-gray-400">
      <MaxWidthWrapper>
        <nav className="flex h-16 items-center justify-between border-b border-zinc-200 dark:border-zinc-400">
          <Link href={"/"} className="z-40">
            <span>
              <p className="text-lg font-bold">Gain Plus</p>
            </span>
          </Link>

          <SignedOut>
            <div className="flex items-center space-x-4">
              <Link
                href={"/sign-in"}
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className={buttonVariants({
                  variant: "default",
                })}
              >
                Start Earning
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center space-x-4">
              <Link className={buttonVariants()} href={"/dashboard"}>Dashboard</Link>
              <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link href="/dashboard" label="Dashboard" labelIcon={<DotIcon/>}/>
        </UserButton.MenuItems>
      </UserButton>
            </div>
          </SignedIn>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
