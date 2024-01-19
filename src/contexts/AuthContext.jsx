import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase-config.js";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, function getCurrentUser(user) {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }} {...props}></AuthContext.Provider>
  );
};
