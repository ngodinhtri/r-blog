import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase-config.js";
import { CATEGORY_STATUS } from "@/utils/constant.js";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function getCategories() {
      const newArr = [];
      const q = query(
        collection(db, "categories"),
        where("status", "==", CATEGORY_STATUS.approved),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        newArr.push({ ...doc.data(), id: doc.id });
      });
      setCategories(newArr);
    })();
  }, []);

  return { categories };
}
