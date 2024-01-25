import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf0kl-nEESd0b7yFb8wyIJxc-MrdvemAc",
  authDomain: "r-bl-f24d2.firebaseapp.com",
  projectId: "r-bl-f24d2",
  storageBucket: "r-bl-f24d2.appspot.com",
  messagingSenderId: "35781779968",
  appId: "1:35781779968:web:badac3a8eb50f8b7586ee5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const checkSigned = (signedInFunc, signedOutFunc) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      signedInFunc(user);
    } else {
      signedOutFunc();
    }
  });
};

export function signOut() {
  auth.signOut();
}
