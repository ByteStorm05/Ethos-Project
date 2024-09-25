'use client'
import React from "react";
import { ThemeProvider } from '../../context/ThemeContext';
import { ThemeToggle } from '../../components/ThemeToggle';
import { FileUploadDemo } from "./components/ui/upload";
import { HeroHighlightDemo } from "./components/ui/hero-highlight";
import Link from 'next/link';

import { BackgroundBeamsWithCollisionDemo } from "./components/ui/bgbeams";
import { AuroraBackgroundDemo } from "./components/ui/AuroraBg";

const NewPage = () => {
  return (
    <ThemeProvider>
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
     
      
    </ThemeProvider>
  );
};

export default NewPage;


//  {/* Wrapper div with dark mode handling */}
//  <div className="flex flex-col items-center mt-4 space-y-6 bg-white dark:bg-black min-h-screen">
//  {/* Header section: "Theme Toggle" on the right and "Take Me Home" on the left */}
//  <div className="flex justify-between w-full max-w-4xl px-4">
//    <button className="px-4 rounded-md border border-black bg-white dark:bg-black text-black dark:text-white text-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
//      <Link href="/">⇦ Take Me Home!</Link>
//    </button>
//    <ThemeToggle />
//  </div>

//  {/* Welcome section centered below the buttons */}
//  <div className="w-full max-w-4xl">
 
//    <HeroHighlightDemo />
//  </div>

//  {/* Upload section */}
//  <div className="w-full max-w-4xl">
//    <FileUploadDemo />
//  </div>
// </div>