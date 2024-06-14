import { DevIconCloud } from "@/components/shared/dev-icon-cloud";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { User2 } from "lucide-react";

export function Home() {
  const typewriterText = "Hi, my name is Jordan";
  const flipWords = ["creating", "solutions", "music"];

  function textToTypewriterWords(text: string) {
    const textArray = text.split(" ");
    return textArray.map((word) => {
      const className = word === "Jordan" ? "!text-purple-500" : "";
      return { text: word, className };
    });
  }

  return (
    <>
      <TypewriterEffect
        className="mt-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        words={textToTypewriterWords(typewriterText)}
      />
      <div className="text-center text-lg text-muted-foreground duration-1000 animate-in fade-in zoom-in sm:text-xl md:text-2xl lg:text-3xl">
        I'm a software developer <br />
        who is passionate about{" "}
        <FlipWords words={flipWords} className="text-emerald-500" />
      </div>
      <div className="mb-auto grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-10">
        <div className="flex h-72 w-72 items-center justify-center rounded-3xl border bg-muted transition-none duration-1000 animate-in fade-in zoom-in md:h-80 md:w-80 lg:h-96 lg:w-96">
          <User2 className="h-2/3 w-2/3 text-muted-foreground" />
        </div>
        <DevIconCloud className="h-72 w-72 duration-1000 animate-in fade-in zoom-in md:h-80 md:w-80 lg:h-96 lg:w-96" />
      </div>
    </>
  );
}
