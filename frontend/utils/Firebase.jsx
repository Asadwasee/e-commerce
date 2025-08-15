import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-1b1ef.firebaseapp.com",
  projectId: "loginonecart-1b1ef",
  storageBucket: "loginonecart-1b1ef.firebasestorage.app",
  messagingSenderId: "735587007116",
  appId: "1:735587007116:web:86943d820f018a9a4119a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider}

