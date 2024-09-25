import React, { useState } from 'react';
import { MultiStepLoader } from './multi-step-loader';
import Link from 'next/link';

const loadingStates = [
  { text: "You visit abc.com" },
  { text: "You upload the image/video you want to" },
  { text: "(optional) You upload a validation picture if you want to compare our awesome results!" },
  { text: "You click on the go button" },
  { text: "Voila! Our job is done!" },
];


export const Herohome = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate loading completion after a set time
    setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust duration as needed
  };
  return (
    
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-3 bg-white border border-gray-200 text-lg text-gray-800 p-2 ps-4 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
             Logo
              <span className="py-2 px-3 inline-flex justify-center items-center gap-x-3 rounded-full bg-gray-200 font-semibold text-lg text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="mt-8 max-w-2xl text-center mx-auto">
  <h1 className="block font-bold text-gray-800 text-5xl md:text-7xl lg:text-8xl dark:text-neutral-200">
    <div>Welcome to</div>
    <div>
      <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
        Ethos-Project
      </span>
    </div>
  </h1>
</div>

          {/* End Title */}

          <div className="mt-6 max-w-3xl text-center mx-auto">
            <p className="text-xl text-gray-600 dark:text-neutral-400">
            Unlock the potential of AI by transforming blurry CCTV footage into crystal-clear facial reconstructions, empowering security teams to identify suspects with unprecedented accuracy.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 gap-4 flex justify-center">
            <a className="inline-flex justify-center items-center gap-x-4 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-lg font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-4 px-6" href="#" onClick={handleClick}>
            Uncover What We Do
              <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <button
  type="button"
  className="relative group p-3 ps-4 inline-flex items-center gap-x-3 text-lg font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
  onClick={() => {
    const section = document.getElementById("timeline-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  A detailed walkthrough
  <span className="flex justify-center items-center bg-gray-200 rounded-md size-9 dark:bg-neutral-700 dark:text-neutral-400">
    <svg className="shrink-0 size-6 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M7 7h10M7 17h10" />
    </svg>
  </span>
</button>

          </div>
          {/* End Buttons */}

           {/* MultiStepLoader component */}
        {loading && <MultiStepLoader loadingStates={loadingStates} loading={loading} />}


        <div className="mt-8 flex justify-center items-center gap-x-2 sm:gap-x-4">
            <span className="text-lg text-gray-600 dark:text-neutral-400">Test Our Model :</span>
            
           
            <a className="inline-flex items-center gap-x-2 text-lg text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="/test">
            Click here to test
              <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center gap-x-2 sm:gap-x-4">
            <span className="text-lg text-gray-600 dark:text-neutral-400">Dive into the Repository:</span>
            
           
            <a className="inline-flex items-center gap-x-2 text-lg text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">
            GitHub Link
              <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
          
        </div>
      </div>
      {/* End Hero Section */}
    </div>
  )
}
