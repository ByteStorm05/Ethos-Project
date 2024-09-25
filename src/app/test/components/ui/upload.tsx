"use client";
import React, { useEffect, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [validationFile, setValidationFile] = useState<File | null>(null);
  const [apiImage, setApiImage] = useState<string | null>(null);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    console.log("Files uploaded:", uploadedFiles);
  };

  const handleValidationUpload = (uploadedFiles: File[]) => {
    setValidationFile(uploadedFiles[0]);
    console.log("Validation image uploaded:", uploadedFiles);
  };

  useEffect(() => {
    const fetchApiImage = async () => {
      // Replace with your API URL to fetch the image
      const apiImageUrl = "https://placeholder.com/300"; // Example image URL from API
      setApiImage(apiImageUrl);
    };
    fetchApiImage();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 p-4">
  <div className="flex flex-col w-full md:w-1/2">
    <label htmlFor="file-upload" className="mb-2 font-semibold text-center">Upload image/video</label>
    <FileUpload onChange={handleFileUpload} id="file-upload" />
  </div>
  <div className="flex flex-col w-full md:w-1/2">
    <label htmlFor="validation-upload" className="mb-2 font-semibold text-center">Upload (optional) Validation image</label>
    <FileUpload onChange={handleValidationUpload} id="validation-upload" />
  </div>
</div>

      <div className="w-full mt-8 p-4 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <h2 className="text-center font-semibold mb-4">API Output and Validation ✅</h2>

        {/* Display API image or placeholder if not available */}
        {apiImage ? (
          <div className="flex justify-center mb-4">
            <img src={apiImage} alt="API Output" className="max-w-xs rounded-lg" />
          </div>
        ) : (
          <div className="flex justify-center mb-4">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Placeholder" 
              className="w-72 h-72 object-cover rounded-lg" 
            />
          </div>
        )}

        {/* Conditional rendering for the uploaded validation image */}
        {validationFile ? (
          <div className="flex flex-col items-center">
            <p className="text-center font-semibold mb-2">Uploaded Validation Image:</p>
            <img src={URL.createObjectURL(validationFile)} alt="Validation" className="max-w-xs rounded-lg" />
          </div>
        ) : (
          <p className="text-center text-gray-500">No validation image uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
