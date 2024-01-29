import "./App.css";
import { useAuth } from "@/contexts/useAuth.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostDetailPage, SignInPage, SignUpPage } from "@/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout, ManagePagesLayout } from "@/layouts";
import DashboardPage from "@/pages/manage-pages/DashboardPage.jsx";
import AddPostPage from "@/pages/manage-pages/AddPostPage.jsx";
import ManagePostsPage from "@/pages/manage-pages/ManagePostsPage.jsx";
import AddCategoryPage from "@/pages/manage-pages/AddCategoryPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/detail"} element={<PostDetailPage />} />
        </Route>
        <Route path={"/sign-up"} element={<SignUpPage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route element={<ManagePagesLayout />}>
          <Route path={"/manage/"} element={<DashboardPage />} />
          <Route path={"/manage/dashboard"} element={<DashboardPage />} />
          <Route path={"/manage/post"} element={<ManagePostsPage />} />
          <Route path={"/manage/category"} element={<DashboardPage />} />
          <Route path={"/manage/user"} element={<DashboardPage />} />
          <Route path={"/manage/add-post"} element={<AddPostPage />} />
          <Route path={"/manage/add-category"} element={<AddCategoryPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
