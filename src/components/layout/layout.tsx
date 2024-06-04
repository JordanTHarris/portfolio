import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

export function Layout() {
  return (
    <div className="flex h-dvh w-screen flex-col">
      <header>
        <NavBar />
      </header>
      <main className="container flex-1">
        <Outlet />
      </main>
      <footer className="container text-center text-sm text-muted-foreground">
        ©️ me 2024
      </footer>
    </div>
  );
}
