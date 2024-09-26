"use client";
import React, { useEffect, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { db} from '../../../../firebase' // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { storage } from '../../../../firebase'; // Import Firebase Storage
import { ref, uploadBytes } from "firebase/storage"; // Firebase Storage functions

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [validationFile, setValidationFile] = useState<File | null>(null);
  const [apiImage, setApiImage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    console.log("Files uploaded:", uploadedFiles);
  };

  const handleValidationUpload = (uploadedFiles: File[]) => {
    setValidationFile(uploadedFiles[0]);
    console.log("Validation image uploaded:", uploadedFiles);
  };

  // Fetch random image from Picsum API
  useEffect(() => {
    const fetchApiImage = async () => {
      const apiImageUrl = "https://picsum.photos/200/300"; // Random image URL
      setApiImage(apiImageUrl);
    };
    fetchApiImage();
  }, []);


 // Function to store images in Firebase
const storeImagesInFirebase = async (inputImageUrl: string, outputImageUrl: string) => {
  try {
    // Store metadata in Firestore
    const docRef = await addDoc(collection(db, "images"), {
      inputImage: inputImageUrl,
      outputImage: outputImageUrl,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const handleUpload = async () => {
  if (files.length > 0 && apiImage) {
    // Convert input image to a data URL
    const inputFile = files[0];
    
    // Upload input image to Firebase Storage
    const inputImageRef = ref(storage, `images/${inputFile.name}`);
    await uploadBytes(inputImageRef, inputFile);
    
    // Upload API image to Firebase Storage
    const response = await fetch(apiImage);
    const outputBlob = await response.blob();
    const outputImageRef = ref(storage, `images/api_image_${Date.now()}.jpg`);
    await uploadBytes(outputImageRef, outputBlob);
    
    // Store both images in Firebase
    await storeImagesInFirebase(inputImageRef.fullPath, outputImageRef.fullPath);
    setSuccessMessage("Images uploaded successfully to Firebase!");
  }
};

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

        {validationFile ? (
          <div className="flex flex-col items-center">
            <p className="text-center font-semibold mb-2">Uploaded Validation Image:</p>
            <img src={URL.createObjectURL(validationFile)} alt="Validation" className="max-w-xs rounded-lg" />
          </div>
        ) : (
          <p className="text-center text-gray-500">No validation image uploaded yet.</p>
        )}

{successMessage && (
      <div className="mt-4 text-center text-green-600">
        {successMessage}
      </div>
    )}

    <button 
      onClick={handleUpload} 
      className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
    >
      Upload Images to Firebase
    </button>
      </div>
    </div>
  );
}
