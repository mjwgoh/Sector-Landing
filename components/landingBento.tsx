"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bentoGrid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingStarsBackground } from "./glowingPoints";

const SkeletonFour = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      rotate: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -5,
      rotate: -1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const tasks = `Yep - 2 immediate action items.
  1. Your report to Jackson is due today.
  2. You need to send your SXSW hotel bookings to T&E.`;  
 
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-sm text-neutral-500">
          Hey Sector, is there anything that I need to finish today?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
    <p className="text-sm text-neutral-500">
      {tasks.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

export function LandingBento() {
  return (
    <BentoGrid className="md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Connects to the apps that you know and love",
    description: "Get perfect context from your emails, messages, calendars, browsing history, and more.",
    header: <Image src="/apps/Combined Apps.png" layout="responsive" height={200} width={200} alt="apps" />,
    className: "md:col-span-2",
    icon: "",
  },
  {
    title: "Connects to your favorite language models",
    description: "We route your prompts to the best AI, so that you get the most relevant responses, everytime.",
    header: <Image src="/apps/LMs.png" layout="responsive" height={200} width={200} alt="apps" />,
    className: "md:col-span-1",
    icon: "",
  },
  {
    title: "Intelligent recommendations",
    description: "Get AI-powered task-lists, derived from your personal conversations.",
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: "",
  },
  {
    title: "Perfect responses",
    description:
      "We find the right datapoints in your database, everytime. This means that you get the correct responses, everytime.",
    header: <GlowingStarsBackground/>,
    className: "md:col-span-2",
    icon: "",
  },
];


