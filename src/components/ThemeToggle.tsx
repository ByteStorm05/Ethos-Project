import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end p-4"> {/* This div aligns the button to the right */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
      >
        {theme === 'light' ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};
