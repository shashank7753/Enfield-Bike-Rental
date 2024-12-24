// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
