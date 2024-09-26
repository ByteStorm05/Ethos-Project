'use client';

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"; // Check if this is needed
import Image from "next/image";
import { ThemeProvider } from '../context/ThemeContext'; // Verify this path
import { ThemeToggle } from '../components/ThemeToggle'; // Verify this path
import { ContainerScroll } from "@/components/ui/container-scroll-animation"; // Check if this is needed
import { MultiStepLoader } from "@/components/ui/multi-step-loader"; // Ensure this component is correctly exported
import { useState } from "react";
import { Timeline } from "@/components/ui/timeline"; // Ensure this component is correctly exported
import { BentoGrid } from "@/components/ui/bento-grid"; // Check if this is needed
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1"; // Verify this path
import { FeaturesSectionDemoFinal } from "../components/ui/Features"; // Ensure this component is correctly exported
import {Herohome} from '../components/ui/Hero-home'
import ImageGallery from "@/components/ui/ImageGallery"; // Adjust the path as necessary

import Link from "next/link";

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
      
      <Herohome></Herohome>
    

      <div className="flex flex-col overflow-hidden">
        

      <div className="py-10">
  <h2 className="text-3xl font-bold text-center">Watch Our Introduction</h2>
  <div className="flex justify-center mt-6">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/your-video-id"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Timeline Section */}

        <div className="py-10" id="timeline-section">
  <div className="mt-8 max-w-2xl text-center mx-auto">
    <h1 className="block font-bold text-gray-800 text-5xl md:text-7xl lg:text-6xl dark:text-neutral-200">
      A detailed walkthrough is{" "}
      <span className="text-lime-500 underline decoration-2 decoration-lime-400 hover:decoration-lime-600 transition duration-200">
        all you need
      </span>
    </h1>
    <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
      Discover step-by-step instructions and insights to guide you through the process effectively.
    </p>
    
  </div>

  <TimelineDemo />
</div>



        {/* BentoGrid Section */}
        <div className="py-10">
          <h2 className="text-6xl font-bold text-center py-10">Explore Our Past Results</h2>
          {/* <FeaturesSectionDemoFinal /> */}
        </div>
        <ImageGallery />
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
            You can <Link href="/test">
  <span className="underline text-blue-600 hover:text-blue-800">go here</span>
</Link> and upload the image/video you want to test
          </p>
          <div className="flex justify-center">
          <div className="relative w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-lg">
    <Image
      src="/upload-image.jpg" // Ensure the path is correct
      alt="Startup Template"
      layout="fill" // Makes the image fill the container
      objectFit="contain" // Ensures the image is contained within the area without distortion
      className="transition-transform duration-300 transform hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          You can go here and upload the image/video you want to test
        </p>
        <div className="flex justify-center">
        <div className="relative w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-lg">
  <Image
    src="/validation-image.jpg" // Ensure the path is correct
    alt="Startup Template"
    layout="fill" // Makes the image fill the container
    objectFit="contain" // Ensures the image is contained within the area without distortion
    className="transition-transform duration-300 transform hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  />
</div>
        </div>
      </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
            All we ask for is a little patience :)
          </p>
        </div>
      ),
    },
    {
      title: "And that's it!",
      content: (
        <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          You'll get your output like this 
        </p>
        <div className="flex justify-center">
        <div className="relative w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-lg">
  <Image
    src="/result-dark.jpg" // Ensure the path is correct
    alt="Startup Template"
    layout="fill" // Makes the image fill the container
    objectFit="contain" // Ensures the image is contained within the area without distortion
    className="transition-transform duration-300 transform hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  />
</div>
        </div>
      </div>
      ),
    },
  ];

  return (
    <Timeline data={data} /> 
  );
}
