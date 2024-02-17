"use client";
import { cn } from "@/utils/cn";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/header";
import { LandingBento } from "@/components/landingBento";
import LeftLine from "@/components/leftLine";

import { EvervaultCard } from "@/components/security";
import { Testimonials } from "@/components/testimonials";

const testimonials = [
  {
    quote:
      "Sector is like magic. It's like having a personal assistant that knows everything about you.",
    name: "Avonne G.",
    title: "Bain & Company",
  },
  {
    quote:
      "It's accelerated my workflow by 10x. I can't imagine going back to the way I worked before.",
    name: "Michelle K.",
    title: "Chairman, Taiwan New Venture Association",
  },
  {
    quote: "Bloody f***ing amazing. Sector has saved me so much time.",
    name: "Pengfei C.",
    title: "MIT PhD Candidate",
  },
  {
    quote:
      "Imagine having perfect recall plugged into ChatGPT. That's how magical Sector is.",
    name: "Nina E.",
    title: "J.P. Morgan Chase & Co.",
  },
  {
    quote:
      "Sector has streamlined my personal life, allowing me to focus on things that truly matter.",
    name: "Andrew M.",
    title: "Google",
  },
];

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <main className="flex justify-center flex-col px-20 w-screen max-w-screen bg-black">
      <Header
        title={"Perfect Context. Everytime."}
        description={
          "Sector is your personal AI. Powered by your emails, messages, and calendar events."
        }
        button_text={"Join the Waitlist"}
        button_url={"https://tally.so/r/nrox2L"}
      ></Header>



      <div className="flex justify-center text-5xl py-10 font-light">At a Glance</div>
      <div className="mb-24">
      <LandingBento />
      </div>



      {/* <div className="flex text-5xl pt-10 pb-5 font-light">Always Secure</div>
      <LeftLine /> */}

      <div className="flex h-96 my-15 border border-gray-700 rounded-lg">
        <EvervaultCard text="Your personal data is always secure with Sector. All information is transferred and stored with end-to-end encryption." />
      </div>

      <div className="pt-24"></div>

      {/* <div className="flex text-5xl pt-10 pb-5 font-light">Powering Leading Organizations</div>
      <LeftLine />
      <AutoCarousell items={testimonials} speed={"slow"}></AutoCarousell> */}
    </main>
  );
}
