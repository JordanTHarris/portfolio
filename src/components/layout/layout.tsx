import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

export function Layout() {
  return (
    <div className="flex flex-col w-screen h-dvh">
      <header>
        <NavBar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>©️ me 2023</footer>
    </div>
  );
}
