import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import { SignUpPage, HomePage, PostDetailPage, SignInPage } from "@/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout } from "@/layouts";

function App() {
  return (
    <div className={"container"}>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/detail"} element={<PostDetailPage />} />
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
