// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSJEKHzEY-X1dpHKIxyjn4Wb_8cL8vG-4",
  authDomain: "ethos-project-8bdfd.firebaseapp.com",
  projectId: "ethos-project-8bdfd",
  storageBucket: "ethos-project-8bdfd.appspot.com",
  messagingSenderId: "814114242149",
  appId: "1:814114242149:web:5c910734237aa0789f908c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
