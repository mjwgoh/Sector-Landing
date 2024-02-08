"use client";
import { cn } from "@/utils/cn";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const Header = ({
  title,
  description,
  button_text,
  button_url,
}: {
  title?: string;
  description?: string;
  button_text?: string;
  button_url?: string;
}) => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
    <div>
        <h1 className="text-6xl dark:text-white text-black">
            {title}
        </h1>
        <p className="my-4 mb-10 dark:text-white text-black text-2xl">{description}</p>
    <a href={button_url}>
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {button_text}
    </button>
    </a>
    </div>
    </div>
  );
};
