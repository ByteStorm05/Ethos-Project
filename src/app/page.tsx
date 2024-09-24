'use client'
import Image from "next/image";
import { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import LampDemo from "@/components/ui/lamp";
import { ThemeProvider } from '../context/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
   //For Dark mode
   const [darkMode,setDarkMode] = useState(false);
   const toggleDarkMode = () => {
     setDarkMode((prev) => !prev)
   }
   return (
     //Dark Mode
//     <body className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>


//  {/* Dark mode button start */}
//      <button
//     onClick={toggleDarkMode}
//     className={`p-2 rounded-full flex items-center justify-center transition-colors duration-200 ${
//       darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
//     }`}
//     aria-label="Toggle theme"
//   >
//     {darkMode ? (
//       <MoonIcon className="w-6 h-6" />
//     ) : (
//       <SunIcon className="w-6 h-6" />
//     )}
//   </button>
//   {/* Dark mode button end */}


     
    
    
    
    
    
    
  
  
  
//   </body>
<ThemeProvider>
  <ThemeToggle />
{/* <div className="transition-all duration-500 ease-in-out p-4 bg-white dark:bg-gray-900">

</div> */}
</ThemeProvider>
   );
}