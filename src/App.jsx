import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.js";
import { Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  );
}

export default App;
