import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Layout() {
  return (
    <div className="z-10 flex h-dvh max-h-dvh w-screen flex-col scrollbar-hide">
      <NavBar />
      <ScrollArea className="mx-0 flex-1 overflow-y-auto overflow-x-hidden md:container md:mx-auto">
        <Outlet />
      </ScrollArea>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}
