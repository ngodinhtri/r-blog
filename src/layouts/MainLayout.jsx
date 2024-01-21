import { Header } from "@/layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
