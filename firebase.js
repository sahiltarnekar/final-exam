// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfL1871cRELym4lArlE-XQlxVmen4z-2M",
  authDomain: "exam-3a049.firebaseapp.com",
  projectId: "exam-3a049",
  storageBucket: "exam-3a049.firebasestorage.app",
  messagingSenderId: "974907045636",
  appId: "1:974907045636:web:1a63d9babbc4781d650251",
  measurementId: "G-G9M6HKZN61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
