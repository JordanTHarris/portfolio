import { IconCloud } from "../ui/icon-cloud";

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
];

export function DevIconCloud({ className }: { className?: string }) {
  return (
    <div className={className}>
      <IconCloud className="" iconSlugs={slugs} />
    </div>
  );
}
