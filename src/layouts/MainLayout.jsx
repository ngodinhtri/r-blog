import { Header } from "@/layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div className={"container"}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}
