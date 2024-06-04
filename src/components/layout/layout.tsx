import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { ScrollArea } from "../ui/scroll-area";

export function Layout() {
  return (
    <div className="scrollbar-hide z-10 flex h-dvh max-h-dvh w-screen flex-col">
      <NavBar />
      <ScrollArea className="container flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </ScrollArea>
      <footer className="container text-center text-sm text-muted-foreground">
        ©️ me 2024
      </footer>
    </div>
  );
}
