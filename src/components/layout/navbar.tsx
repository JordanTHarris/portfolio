import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { Code2, Contact2, Home, Menu } from "lucide-react";
import { useOutsideClick } from "@/lib/hooks/use-outside-click";

export function NavBar({ absoluteDropdown = false }: { absoluteDropdown?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useOutsideClick(() => setIsMenuOpen(false));

  function toggleMenu() {
    setIsMenuOpen((prev: boolean) => !prev);
  }

  const links = [
    { title: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { title: "Projects", path: "/projects", icon: <Code2 className="h-4 w-4" /> },
    { title: "Contact", path: "/contact", icon: <Contact2 className="h-4 w-4" /> },
  ];

  function getLinks() {
    return links.map((link) => (
      <NavLink
        key={link.title}
        to={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          cn(
            "rounded-md py-2 font-mono font-semibold text-muted-foreground transition-colors duration-200 hover:text-accent-foreground",
            isActive && "text-foreground",
          )
        }
      >
        <div className="flex items-center gap-2 px-2">
          {link.icon}
          {link.title}
        </div>
      </NavLink>
    ));
  }

  return (
    <header
      className="z-50 mx-0 w-full bg-background shadow-sm md:container md:mx-auto"
      ref={menuRef}
    >
      <div className="flex items-center justify-between px-2 py-2 md:px-0">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex w-32 items-center gap-2"
        >
          <span className="font-mono text-xl">Jordan</span>
        </Link>
        <nav className="hidden items-center md:flex">{getLinks()}</nav>
        <div className="flex w-32 items-center justify-end gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            <Menu
              className={cn(
                "h-6 w-6 transition-[transform] duration-300 ease-out",
                isMenuOpen ? "rotate-90" : "rotate-0",
              )}
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <nav
        className={cn(
          "grid w-full overflow-hidden bg-background transition-[max-height] duration-500 ease-out md:hidden",
          isMenuOpen ? "max-h-40" : "max-h-0",
          absoluteDropdown && "absolute left-0 right-0 bg-background/50 backdrop-blur-md",
        )}
      >
        <div className="grid overflow-hidden">{getLinks()}</div>
      </nav>
    </header>
  );
}
