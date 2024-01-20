import { Header } from "@/layouts/Header.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
