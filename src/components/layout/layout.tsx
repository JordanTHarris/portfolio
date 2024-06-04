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
      <footer>©️ me 2023</footer>
    </div>
  );
}
