import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYH51EPVV_uS8UXR3FAQldUw2Q-fwPC5A',
  authDomain: 'authentication-d6ceb.firebaseapp.com',
  projectId: 'authentication-d6ceb',
  storageBucket: 'authentication-d6ceb.appspot.com',
  messagingSenderId: '616414441432',
  appId: '1:616414441432:web:a56f24b6db2d4f8b258cad',
  measurementId: 'G-2T0WGD0NL8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
