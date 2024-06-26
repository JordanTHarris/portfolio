import noteAppScreenshot from "@/assets/note-app-screenshot.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Projects() {
  return (
    <>
      <TypewriterEffect
        className="mt-auto text-center font-mono text-3xl md:text-4xl lg:text-5xl"
        words={[{ text: "<MyProjects/>", className: "font-mono" }]}
      />

      <div className="mb-auto grid auto-cols-auto grid-cols-1 gap-6 px-5 duration-1000 animate-in fade-in slide-in-from-bottom-32 md:grid-cols-2 xl:grid-cols-3">
        <a href="https://github.com/JordanTHarris/note-app" target="_blank">
          <BackgroundGradient className="max-w-sm rounded-[22px] bg-secondary p-4 transition-[transform] duration-300 hover:scale-105">
            <img
              src={noteAppScreenshot}
              alt="note-app screenshot"
              width={944}
              height={725}
              className="rounded-md object-contain"
            />
            <p className="mb-2 mt-4 text-base sm:text-xl">Note App</p>

            <p className="text-sm text-muted-foreground">
              Note taking app with full featured editor using the Lexical framework
            </p>
          </BackgroundGradient>
        </a>
        <a href="https://github.com/JordanTHarris/note-app" target="_blank">
          <BackgroundGradient className="max-w-sm rounded-[22px] bg-secondary p-4 transition-[transform] duration-300 hover:scale-105">
            <img
              src={noteAppScreenshot}
              alt="note-app screenshot"
              width={944}
              height={725}
              className="rounded-md object-contain"
            />
            <p className="mb-2 mt-4 text-base sm:text-xl">Note App</p>

            <p className="text-sm text-muted-foreground">
              Note taking app with full featured editor using the Lexical framework
            </p>
          </BackgroundGradient>
        </a>
        <a href="https://github.com/JordanTHarris/note-app" target="_blank">
          <BackgroundGradient className="max-w-sm rounded-[22px] bg-secondary p-4 transition-[transform] duration-300 hover:scale-105">
            <img
              src={noteAppScreenshot}
              alt="note-app screenshot"
              width={944}
              height={725}
              className="rounded-md object-contain"
            />
            <p className="mb-2 mt-4 text-base sm:text-xl">Note App</p>

            <p className="text-sm text-muted-foreground">
              Note taking app with full featured editor using the Lexical framework
            </p>
          </BackgroundGradient>
        </a>
      </div>
    </>
  );
}
