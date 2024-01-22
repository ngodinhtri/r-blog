import "./App.css";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import { SignUpPage, HomePage, PostDetailPage, SignInPage } from "@/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout, ManagePagesLayout } from "@/layouts";
import DashboardPage from "@/pages/DashboardPage.jsx";
import AddPostPage from "@/pages/AddPostPage.jsx";

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
          <Route element={<ManagePagesLayout />}>
            <Route path={"/manage/"} element={<DashboardPage />} />
            <Route path={"/manage/dashboard"} element={<DashboardPage />} />
            <Route path={"/manage/post"} element={<DashboardPage />} />
            <Route path={"/manage/category"} element={<DashboardPage />} />
            <Route path={"/manage/user"} element={<DashboardPage />} />
            <Route path={"/manage/add-post"} element={<AddPostPage />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
