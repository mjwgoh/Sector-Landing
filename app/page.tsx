"use client";
import { cn } from "@/utils/cn";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/header";
import { LandingBento } from "@/components/landingBento";
import Image from "next/image";

import { EvervaultCard } from "@/components/security";
import { AutoCarousell } from "@/components/autoCarousell";
import GradientButton from "@/components/gradientButton";

const testimonials = [
  {
    quote:
      "Sector is like magic. It's like having a personal assistant that knows everything about you.",
    name: "Avonne G.",
    title: "Bain & Company",
  },
  // {
  //   quote:
  //     "It's accelerated my workflow by 10x. I can't imagine going back to the way I worked before.",
  //   name: "Michelle K.",
  //   title: "Chairman, Taiwan New Venture Association",
  // },
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
    <main className="flex justify-center flex-col bg-black">
      <div className="px-20">
        <div className="flex items-center bg-black py-10">
          <div className="flex">
            <Image src={"sector.svg"} width={75} height={25} alt="sector" />
          </div>
          <div className="flex flex-grow"></div>
          <div className="flex justify-end gap-8 items-center">
            <div>How it Works</div>
            <div>Contact</div>
            <div>
              <GradientButton text="Join Waitlist" />
            </div>
          </div>
        </div>

        <Header
          title={"Perfect Context. Everytime."}
          description={
            "Sector is your personal AI. Powered by your emails, messages, and calendar events."
          }
          button_text={"Join the Waitlist"}
          button_url={"https://tally.so/r/nrox2L"}
        ></Header>

        <div className="">
          <div className="flex justify-center text-5xl py-10 font-light">
            At a Glance
          </div>
          <div className="mb-24">
            <LandingBento />
          </div>
        </div>

        <div className="flex justify-center text-5xl pt-24 py-10 font-light">
          Your Privacy. Our Reputation.
        </div>

        <div className="flex h-96 my-15 border border-gray-700 rounded-lg">
          <EvervaultCard text="Your personal data is always secure with Sector. All information is transferred and stored with end-to-end encryption." />
        </div>

        <div className="flex justify-center text-5xl pt-24 py-10 font-light">
          Trusted by Leading Institutions.
        </div>
        <AutoCarousell items={testimonials} speed={"slow"}></AutoCarousell>

        <div className="pt-24"></div>

        <div className="flex flex-col justify-center items-center text-center my-24">
          <div className="flex w-1/2 justify-center text-5xl pt-24 py-10 font-light">
            Reimagine AI with Sector
          </div>

          <a href={"https://tally.so/r/nrox2L"}>
            <button className="flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
