import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "../ui/tooltip";

export function Layout() {
  return (
    <div className="flex h-dvh max-h-dvh w-screen flex-col scrollbar-hide">
      <TooltipProvider>
        <NavBar />
        <Outlet />
        <Footer />
        <Toaster richColors />
      </TooltipProvider>
    </div>
  );
}
