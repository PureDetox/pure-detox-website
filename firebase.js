import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBs8PR2dnhNnK89JYzKRiCtXmvyKhSbyY8',
  authDomain: 'puredetox-d0fb5.firebaseapp.com',
  databaseURL: 'https://puredetox-d0fb5-default-rtdb.firebaseio.com',
  projectId: 'puredetox-d0fb5',
  storageBucket: 'puredetox-d0fb5.firebasestorage.app',
  messagingSenderId: '1074058101974',
  appId: '1:1074058101974:web:29dbec7d514608e6317577',
  measurementId: 'G-Z7S3E48LKL',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
