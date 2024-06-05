import { Github, Linkedin } from "lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="container absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-background/30 py-2 backdrop-blur-md">
      <a
        className="text-muted-foreground hover:text-foreground"
        href="https://github.com/JordanTHarris"
        target="_blank"
      >
        <Github className="h-5 w-5" />
      </a>
      <Separator orientation="vertical" className="h-5" />
      <a
        className="text-muted-foreground hover:text-foreground"
        href="https://github.com/JordanTHarris"
        target="_blank"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </footer>
  );
}
