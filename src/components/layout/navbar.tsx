import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../shared/theme-toggle";

export function NavBar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <nav className="bg-secondary w-full border-b md:border-0">
      <div className="items-center px-4 max-w-full mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:flex">
          <Link to="/">
            <h1 className="text-3xl font-bold text-purple-600">Logo</h1>
          </Link>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setState(!state)}
              className="md:hidden"
            >
              <Menu />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-[height] duration-300",
            state ? "h-fit block" : "h-0 hidden"
          )}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
