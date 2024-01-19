import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "@/pages/SignUpPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={"container"}>
      <AuthProvider>
        <Routes>
          <Route path={"/sign-up"} element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
