// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs8PR2dnhNnK89JYzKRiCtXmvyKhSbyY8",
  authDomain: "puredetox-d0fb5.firebaseapp.com",
  databaseURL: "https://puredetox-d0fb5-default-rtdb.firebaseio.com",
  projectId: "puredetox-d0fb5",
  storageBucket: "puredetox-d0fb5.firebasestorage.app",
  messagingSenderId: "1074058101974",
  appId: "1:1074058101974:web:29dbec7d514608e6317577",
  measurementId: "G-Z7S3E48LKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
