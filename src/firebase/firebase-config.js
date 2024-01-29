import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

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
export const realTimeDB = getDatabase();

export const checkSigned = (signedInFunc, signedOutFunc) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      signedInFunc(user);
    } else {
      signedOutFunc();
    }
  });
};

export async function getDocFromDB(collection, docId) {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export function signOut() {
  auth.signOut();
}
