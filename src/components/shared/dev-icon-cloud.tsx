import { IconCloud } from "../ui/icon-cloud";

export function DevIconCloud({ className }: { className?: string }) {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "shadcnui",
    "remix",
    "reactrouter",
    "tailwindcss",
  ];

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className={className}>
      <IconCloud className="" iconSlugs={shuffle(slugs)} />
    </div>
  );
}
