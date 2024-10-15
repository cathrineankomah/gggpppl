'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function CtaAndFooter() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Start Earning with Gain Plus Today
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of users who are already making money through micro-tasks, games, and more!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1 bg-primary-foreground text-primary"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" variant="secondary">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-primary-foreground/70">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">About Gain Plus</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/press">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/cookies">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" href="/help">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Connect</h3>
              <div className="flex space-x-3">
                <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-600">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="text-gray-500 hover:text-gray-600">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
            <p className="text-sm text-gray-500">© 2023 Gain Plus. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link className="text-sm text-gray-500 hover:underline" href="/accessibility">
                Accessibility
              </Link>
              <Link className="text-sm text-gray-500 hover:underline" href="/sitemap">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}