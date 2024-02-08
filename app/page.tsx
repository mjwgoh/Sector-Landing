"use client";
import { cn } from "@/utils/cn";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { GemEffect } from "@/components/gemEffect";
import { TextGenerateEffect } from "@/components/textGenerateEffect";
import { Menu } from "@/components/navBarMenu";
import { AutoCarousell } from "@/components/autoCarousell";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navBar";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

 
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

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <main className="flex flex-col w-screen">

      <Navigation></Navigation>
      
      <Header title={"Perfect Context. Everytime."} description={"Sector is your personal AI, powered by your emails, messages, and calendar events."} button_text={"Join the Waitlist"} button_url={"https://tally.so/r/nrox2L"}></Header>
      <div className="py-10 px-10">
        <AutoCarousell items={testimonials} speed={"slow"} ></AutoCarousell>
        <div className="flex p-40 text-5xl justify-center text-center">
          Connects with the apps that you know and love.
        </div>

      </div>
      
    </main>
  );
}
