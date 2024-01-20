import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "@/pages/SignUpPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInPage from "@/pages/SignInPage.jsx";
import HomePage from "@/pages/HomePage.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";

function App() {
  return (
    <div className={"container"}>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/sign-up"} element={<SignUpPage />} />
            <Route path={"/sign-in"} element={<SignInPage />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
