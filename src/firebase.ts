// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOiAYXCusD33NhdDDbWNxhLMD8x3bdocs",
  authDomain: "enfield-bike-rental.firebaseapp.com",
  projectId: "enfield-bike-rental",
  storageBucket: "enfield-bike-rental.firebasestorage.app",
  messagingSenderId: "892840901493",
  appId: "1:892840901493:web:75a4074604f77e9e45313c",
  // measurementId: "G-C8SH0TLKBB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { useNavigate } from 'react-router-dom';

const handleLogin = async (email: string, password: string) => {
  const navigate = useNavigate();
  try {
    navigate('/'); // Assuming you're using react-router-dom
    await signInWithEmailAndPassword(auth, email, password);
    // Redirect to home page after login
    navigate('/'); // Assuming you're using react-router-dom
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Example usage of handleLogin function
handleLogin('test@example.com', 'password123');
