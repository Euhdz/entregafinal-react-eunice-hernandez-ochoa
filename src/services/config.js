import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "tienda-gallo.firebaseapp.com",
  projectId: "tienda-gallo",
  storageBucket: "tienda-gallo.appspot.com",
  messagingSenderId: "695177011046",
  appId: "1:695177011046:web:ac7831984cab6b620df2a7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
