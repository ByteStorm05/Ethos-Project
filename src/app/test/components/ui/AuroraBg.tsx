"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroHighlightDemo } from "./hero-highlight";
import { FileUploadDemo } from "./upload";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-col items-center mt-4 space-y-6 bg-white dark:bg-black min-h-screen">
          {/* Header section: "Theme Toggle" on the right and "Take Me Home" on the left */}
          <div className="flex justify-between w-full max-w-4xl px-4 z-10">
            <button className="px-4 rounded-md border border-black bg-white dark:bg-black text-black dark:text-white text-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              <Link href="/">⇦ Take Me Home!</Link>
            </button>
            <ThemeToggle />
          </div>

          {/* Welcome section centered below the buttons */}
          <div className="w-full max-w-4xl">
            <HeroHighlightDemo />
          </div>

          {/* Upload section */}
          <div className="w-full max-w-4xl">
            <FileUploadDemo />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
