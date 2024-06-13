import { DevIconCloud } from "@/components/shared/dev-icon-cloud";
import { FlipWords } from "@/components/ui/flip-words";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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
    <ScrollArea className="flex-1 overflow-y-auto overflow-x-hidden">
      <main className="mx-0 my-10 flex h-full w-full flex-col items-center justify-center gap-12 overflow-hidden md:container md:mx-auto xl:mt-28">
        <TypewriterEffect
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          words={textToTypewriterWords(typewriterText)}
        />
        <div className="text-center text-lg text-muted-foreground duration-1000 animate-in fade-in zoom-in sm:text-xl md:text-2xl lg:text-3xl">
          I'm a software developer <br />
          who is passionate about{" "}
          <FlipWords words={flipWords} className="text-emerald-500" />
        </div>
        <DevIconCloud className="mt-5 h-72 w-72 duration-1000 animate-in fade-in zoom-in md:h-96 md:w-96" />
        <div className="pb-10" />
      </main>
    </ScrollArea>
  );
}
