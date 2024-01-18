import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export const AuthProvider = (props) => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider
      value={{ user, setUser }}
      {...props}
    ></AuthContext.Provider>
  );
};
