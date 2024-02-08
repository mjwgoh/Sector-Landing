"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navBarMenu";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Gap from top of screen */}
      <Navbar className="top-8" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex w-full">
          <div className="flex items-center">
            <Image src={"sector.svg"} width={75} height={25}/>
          </div>
          <div className="flex flex-grow"></div>
          <div className="flex gap-5">
          <HoveredLink href="/integrations">Integrations</HoveredLink>
          <HoveredLink href="/ask">Ask</HoveredLink>
          <HoveredLink href="https://tally.so/r/nrox2L">Join Waitlist</HoveredLink>
            {/* <MenuItem setActive={setActive} active={active} item="App">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem> */}
            {/* <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  // Image shown on LHS of the menu item
                  src=""
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  // Image shown on LHS of the menu item
                  src=""
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  // Image shown on LHS of the menu item
                  src=""
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  // Image shown on LHS of the menu item
                  src=""
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem> */}
            {/* <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem> */}
          </div>
        </div>
      </Menu>
    </div>
  );
}
