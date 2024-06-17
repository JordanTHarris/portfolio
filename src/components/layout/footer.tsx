import { Github, Linkedin } from "lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <a
        className="text-muted-foreground hover:text-foreground"
        href="https://github.com/JordanTHarris"
        target="_blank"
      >
        <Github className="h-5 w-5" />
      </a>
      <Separator orientation="vertical" className="h-5" />
      <a className="text-muted-foreground hover:text-foreground" href="#">
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
