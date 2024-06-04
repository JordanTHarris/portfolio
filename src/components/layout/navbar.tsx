import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function NavBar({ absoluteDropdown = false }: { absoluteDropdown?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev: boolean) => !prev);
  }

  const links = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "About Me", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  function getLinks() {
    return links.map((link) => (
      <NavLink
        key={link.title}
        to={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          cn(
            "w-fit font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground",
            isActive && "text-foreground",
          )
        }
      >
        {link.title}
      </NavLink>
    ));
  }

  return (
    <header className="container z-50 w-full bg-background py-2 shadow-sm">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold">Jordan</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">{getLinks()}</nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <nav
        className={cn(
          "grid w-screen gap-4 overflow-hidden bg-background transition-[max-height] duration-500 lg:hidden",
          isMenuOpen ? "max-h-40" : "max-h-0",
          absoluteDropdown &&
            "container absolute left-0 bg-background/50 backdrop-blur-md",
        )}
      >
        <div className="grid gap-2 overflow-hidden py-2">{getLinks()}</div>
      </nav>
    </header>
  );
}
