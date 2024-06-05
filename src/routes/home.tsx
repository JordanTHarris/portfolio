import { FlipWords } from "@/components/ui/flip-words";
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
    <main className="flex h-full w-full flex-col items-center justify-center gap-12 overflow-y-auto overflow-x-hidden">
      <TypewriterEffect
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        words={textToTypewriterWords(typewriterText)}
      />
      <div className="text-center text-lg text-muted-foreground duration-1000 animate-in fade-in zoom-in sm:text-xl md:text-2xl lg:text-3xl">
        I'm a software developer who is passionate about{" "}
        <FlipWords words={flipWords} className="text-emerald-500" />
      </div>
      <div className="pb-10" />
    </main>
  );
}
