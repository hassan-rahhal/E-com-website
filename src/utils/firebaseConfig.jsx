import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlxYYW9rx043sqMcIOtabMRVdgmQtTCng",
  authDomain: "ecom-portfolio-c8040.firebaseapp.com",
  projectId: "ecom-portfolio-c8040",
  storageBucket: "ecom-portfolio-c8040.firebasestorage.app",
  messagingSenderId: "471837198098",
  appId: "1:471837198098:web:31be01e9f005bbfd8f95cb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
