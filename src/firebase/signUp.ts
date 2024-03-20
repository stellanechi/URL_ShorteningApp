import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from './Firebase';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export async function signUp(formData: FormData) {
  try {
    if (!formData.name || !formData.email || !formData.password) {
      toast('First Name, Email, and Password are required.');
      return
    }
    // Validate input fields (same as before)

    // Create user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    // Set up default avatar URL
    const avatar = 'https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=612x612&w=0&k=20&c=nrJ6RZ8Ft4vHECnRjBGBK_9XJ7f_lsi3dJjj_uAlkT8=';

    // Update profile with displayName and photoURL
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: formData.name,
      photoURL: user.photoURL || avatar,
    });

    // Store user data in Firestore with error handling
    try {
      await setDoc(doc(db, 'users', user.uid), {
        name: formData.name,
        email: formData.email,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.error('Failed to write user data to Firestore:', err);
      toast('An error occurred saving user data.');
      // Consider throwing a custom error for specific handling
      return {error:'Firestore write failed'}; // Optional
    }

    return { error: null };
  } catch (err) {
    toast('An error occurred during sign up');
    console.error(err);
    return { error:   'An error occurred during sign up.' };
  }
}