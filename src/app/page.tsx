'use client';

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import Image from "next/image";
import { ThemeProvider } from '../context/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState } from "react";
import { Timeline } from "@/components/ui/timeline"; 
import { WobbleCard } from "@/components/ui/wobble-card";
import { BentoGrid } from "@/components/ui/bento-grid"; 
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { FeaturesSectionDemoFinal } from "../components/ui/Features";

const loadingStates = [
  { text: "You visit abc.com" },
  { text: "You upload the image/video you want to" },
  { text: "(optional) You upload a validation picture if you want to compare our awesome results!" },
  { text: "You click on the go button" },
  { text: "Voila! Our job is done!" },
];

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate loading completion after a set time
    setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust duration as needed
  };

  return (
    <ThemeProvider>
      <ThemeToggle />
      <div className="flex flex-col overflow-hidden">
        {/* Button to trigger loading */}
        <div className="flex justify-center py-10">
         
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick} >
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
    Click here to know what we do
  </span>
</button>
        </div>

        {/* MultiStepLoader component */}
        {loading && <MultiStepLoader loadingStates={loadingStates} loading={loading} />}

        {/* Timeline Section */}
        <div className="py-10">
          <h1 className="text-3xl font-bold text-center">A detailed walkthrough is all you need!</h1>
          <TimelineDemo />
        </div>

        {/* BentoGrid Section */}
        <div className="py-10">
          <h2 className="text-2xl font-bold text-center">Explore Our Features</h2>
          <FeaturesSectionDemoFinal />
        </div>

        {/* Additional spacer section for longer scrolling experience */}
        <div className="h-[1000px] "></div>
      </div>

      <style jsx global>{`
        /* Add a smoother scroll-behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Adjust animation duration and easing */
        .container-scroll {
          transition: transform 0.5s ease-in-out; /* Adjust duration and easing */
        }
      `}</style>
    </ThemeProvider>
  );
}

export function TimelineDemo() {
  const data = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            You can go here and upload the image/video you want to test
          </p>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <Image
                src=""
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Now you can upload the Validation Image
          </p>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            All we ask for is a little patience 
          </p>
        </div>
      ),
    },
    {
      title: "And that's it !",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
            Initiated research for new features and improvements based on user feedback.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Timeline data={data} /> 
  );
}


