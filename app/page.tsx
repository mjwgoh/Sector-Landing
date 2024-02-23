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
      "Sector knows everything about my personal relationships. It's leveled up my professional and personal life.",
    name: "Nuo S.",
    title: "Vectr Ventures",
  },
  {
    quote:
      "It's accelerated my workflow by 10x. I can't imagine going back to the way I worked before.",
    name: "Amanda T.",
    title: "Paul, Weiss, Rifkind, Wharton & Garrison",
  },
  {
    quote: "Truly amazing - Sector has saved us so much time!",
    name: "Pengfei C.",
    title: "MIT",
  },
  {
    quote: "Okay, so I'm mindblown. What is this voodoo magic? Gamechanger.",
    name: "Alice Z.",
    title: "United Nations",
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
    <main className="flex justify-center flex-col">
      <div className="sm:px-5 md:px-20">
        <div className="flex items-center py-10">
          <div className="flex">
            <Image src={"sector.svg"} height={60} width={140} alt="sector" />
          </div>
          <div className="flex flex-grow"></div>
          <div className="flex justify-end gap-8 items-center">
            {/* <a>How it Works</a> */}
            <a className="hover:underline" href="mailto:hello@trysector.com">Contact</a>
            <a href="https://tally.so/r/nrox2L">
              <GradientButton text="Join Waitlist" />
            </a>
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
          <div className="">
            <LandingBento />
          </div>
        </div>

        <div className="flex flex-col pt-48">
          <div className="flex justify-center text-5xl py-10 font-light">
            Your Privacy 🔒 Our Reputation
          </div>

          <div className="flex h-96 border border-gray-700 rounded-lg">
            <EvervaultCard text="Your personal data is always secure with Sector. All information is transferred and stored with end-to-end encryption." />
          </div>
        </div>
        <div className="flex flex-col justify-center pt-48">
          <div className="flex justify-center text-5xl py-10 font-light">
            Folks ❤️ Sector
          </div>
          <AutoCarousell items={testimonials} speed={"slow"}></AutoCarousell>
        </div>

        <div className="flex flex-col justify-center items-center text-center pt-48 pb-24">
          <div className="flex w-1/2 justify-center text-5xl pt-36 py-10 font-light">
            Level Up Your Productivity
          </div>

          <a href={"https://tally.so/r/nrox2L"}>
            <button className="flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
      <div className="flex bg-gradient-to-t from-slate-900 to-black text-white h-fit px-20 py-10 pt-36 items-center w-screen justify-start">
        <div className="footer-logo w-1/3">
          <Image src={"/sector.svg"} width={75} height={25} alt="Logo" />
        </div>
        <div className="flex gap-10 w-1/3 justify-center">
          {/* <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="footer-link">
            Terms of Use
          </a> */}
        </div>
        <div className="flex w-1/3 justify-end">Made with ❤️ in Chicago</div>
      </div>
    </main>
  );
}
