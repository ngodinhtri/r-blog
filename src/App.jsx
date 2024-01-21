import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import { SignUpPage, HomePage, PostDetailPage, SignInPage } from "@/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout, ManagePagesLayout } from "@/layouts";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/detail"} element={<PostDetailPage />} />
            <Route path={"/sign-up"} element={<SignUpPage />} />
            <Route path={"/sign-in"} element={<SignInPage />} />
          </Route>
          <Route path={"/manage"} element={<ManagePagesLayout />}></Route>
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
