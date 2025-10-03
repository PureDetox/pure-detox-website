// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxbucjjaoR8FlUIpz7Te72JSNIZlUpYE",
  authDomain: "puredetox-d0fb5.firebaseapp.com",
  databaseURL: "https://puredetox-d0fb5-default-rtdb.firebaseio.com",
  projectId: "puredetox-d0fb5",
  storageBucket: "puredetox-d0fb5.firebasestorage.app",
  messagingSenderId: "1074058101974",
  appId: "1:1074058101974:web:29dbec7d514608e6317577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// Use named Firestore database instead of default
export const db = getFirestore(app, 'puredetox-d0fb5');

export default app;
