import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function Layout() {
  return (
    <div className="z-10 flex h-dvh max-h-dvh w-screen flex-col scrollbar-hide">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
