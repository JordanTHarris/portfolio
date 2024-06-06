import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

export function Layout() {
  return (
    <div className="flex h-dvh max-h-dvh w-screen flex-col scrollbar-hide">
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster richColors />
    </div>
  );
}
