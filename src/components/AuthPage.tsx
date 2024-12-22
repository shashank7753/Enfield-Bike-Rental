// import { useState } from 'react';
// import { auth } from '../../firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// export const AuthPage: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const mapErrorMessage = (code: string) => {
//     switch (code) {
//       case 'auth/email-already-in-use':
//         return 'This email is already registered.';
//       case 'auth/weak-password':
//         return 'Password should be at least 6 characters.';
//       case 'auth/user-not-found':
//         return 'No user found with this email.';
//       case 'auth/wrong-password':
//         return 'Incorrect password.';
//       default:
//         return 'An error occurred. Please try again.';
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!email || !password) {
//       setError('Email and password are required.');
//       setLoading(false);
//       return;
//     }

//     if (!isLogin && password !== confirmPassword) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//         navigate('/dashboard'); // Redirect to a dashboard
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//         navigate('/welcome'); // Redirect to a welcome page
//       }
//     } catch (err: any) {
//       setError(mapErrorMessage(err.code));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </h2>
//         {error && (
//           <p className="mb-4 text-sm text-red-600" aria-live="polite">
//             {error}
//           </p>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           {!isLogin && (
//             <div className="mb-4">
//               <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirm-password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//           )}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 mt-4 text-white bg-indigo-600 rounded-md ${
//               loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
//             }`}
//           >
//             {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="font-medium text-indigo-600 hover:underline"
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };



import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mapErrorMessage = (code: string) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'This email is already registered.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/user-not-found':
        return 'No user found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/invalid-email':
        return 'The email address is not valid.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/'); // Redirect to the home page after login
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/'); // Redirect to the home page after signup
      }
    } catch (err: any) {
      setError(mapErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {error && (
          <p className="mb-4 text-sm text-red-600" aria-live="polite">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 text-white bg-indigo-600 rounded-md ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-indigo-600 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};
