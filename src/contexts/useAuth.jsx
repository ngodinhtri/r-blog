import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase-config.js";
import { useNavigate } from "react-router-dom";

export function useAuth(isRequire) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, function getCurrentUser(user) {
      if (user) setUser(user);
      else {
        setUser(null);
        if (isRequire) navigate("/sign-in");
      }
      setIsLoading(false);
    });
  }, []);

  return { user, isLoading };
}
