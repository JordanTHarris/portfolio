import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Layout() {
  return (
    <div className="scrollbar-hide z-10 flex h-dvh max-h-dvh w-screen flex-col">
      <NavBar />
      <ScrollArea className="container flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </ScrollArea>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}
