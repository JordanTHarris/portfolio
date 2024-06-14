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
        <main className="flex w-full flex-1 flex-col items-center gap-12 overflow-y-auto overflow-x-hidden pb-20 pt-10 md:container md:mx-auto">
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors />
      </TooltipProvider>
    </div>
  );
}
