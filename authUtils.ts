import { getDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore();

export const getUserRole = async (uid: string) => {
  console.log("UID: ", uid);  // Check if UID is correct
  try {
    const userDoc = await getDoc(doc(db, 'users', uid)); // Assuming 'users' collection and 'role' field
    if (userDoc.exists()) {
      return userDoc.data().role; // Should return 'user' or 'admin'
    } else {
      throw new Error('User not found');
    }
  } catch (err) {
    console.error('Failed to fetch user role', err);
    throw err;
  }
};
