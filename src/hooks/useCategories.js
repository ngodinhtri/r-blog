import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase-config.js";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function getCategories() {
      const newArr = [];
      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc) => {
        newArr.push({ ...doc.data(), id: doc.id });
      });
      setCategories(newArr);
    })();
  }, []);

  return { categories };
}
