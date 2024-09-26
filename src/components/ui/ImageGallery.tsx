import React, { useEffect, useState } from "react";
import { db } from '../../firebase'; // Your Firebase config
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

const ImageGallery = () => {
  const [images, setImages] = useState<any[]>([]);

  const fetchImages = async () => {
    const imagesCollection = collection(db, "images");
    const imagesSnapshot = await getDocs(imagesCollection);
    const imagesList = imagesSnapshot.docs.map(doc => ({
      id: doc.id,
      inputImage: doc.data().inputImage,  // Use the existing path directly
      outputImage: doc.data().outputImage  // Use the existing path directly
    }));
    setImages(imagesList);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="image-gallery p-4">
      <h2 className="text-center font-semibold mb-4 text-gray-800 dark:text-gray-200">Uploaded Images</h2>
      <div className="flex flex-col gap-4">
        {images.map(image => (
          <div key={image.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex flex-col items-center">
              <Image 
                src={`/${image.inputImage}`}  // Prefix with a single slash to indicate it's relative to the public directory
                alt="Input" 
                className="rounded-lg" 
                width={300} // Set a specific width
                height={300} // Set a specific height
              />
              <p className="text-center mt-2 text-gray-700 dark:text-gray-300">Input Image</p>
            </div>
            <div className="flex items-center">
              <span className="mx-4 text-gray-500 dark:text-gray-300">→</span>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={`/${image.outputImage}`}  // Prefix with a single slash to indicate it's relative to the public directory
                alt="Output" 
                className="rounded-lg" 
                width={300} // Set a specific width
                height={300} // Set a specific height
              />
              <p className="text-center mt-2 text-gray-700 dark:text-gray-300">Output Image</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
