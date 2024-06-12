import { Github, Linkedin } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

export function Footer() {
  return (
    <footer className="container absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center py-2">
      <Dock
        className="transition-none duration-1000 animate-in fade-in zoom-in"
        magnification={50}
        distance={50}
      >
        <DockIcon
          className="bg-secondary"
          tooltipText="Github"
          url="https://github.com/JordanTHarris"
        >
          <Github className="h-5 w-5" />
        </DockIcon>
        <DockIcon
          className="bg-secondary"
          tooltipText="LinkedIn"
          // url="https://github.com/JordanTHarris"
        >
          <Linkedin className="h-5 w-5" />
        </DockIcon>
      </Dock>
    </footer>
  );
}
