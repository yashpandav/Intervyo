"use client";;
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[140vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[60%] max-w-6xl items-center justify-center bg-transparent px-4 sm:px-6 lg:px-8"
        }>
        <span
          ref={targetRef}
          className={
            "flex flex-wrap items-center justify-center text-center gap-1 md:gap-1.5 lg:gap-2 font-extrabold tracking-tight p-2 md:p-4 lg:p-6 text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-black/15 dark:text-white/15"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 md:mx-1.5 lg:mx-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-teal-700 dark:text-teal-300 transition-colors duration-300"}
      >
        {children}
      </motion.span>
    </span>
  );
};
