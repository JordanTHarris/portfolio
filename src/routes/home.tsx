import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Home() {
  const typewriterText = "Hi, my name is Jordan";
  const flipWords = ["poop", "boobies", "booty"];

  function textToTypewriterWords(text: string) {
    const textArray = text.split(" ");
    return textArray.map((word) => {
      const className = word === "Jordan" ? "!text-purple-500" : "";
      return { text: word, className };
    });
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-4 pt-10">
      <TypewriterEffect
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        words={textToTypewriterWords(typewriterText)}
      />
      <div className="text-lg text-muted-foreground sm:text-xl md:text-2xl lg:text-3xl">
        I am passionate about
        <FlipWords words={flipWords} className="text-emerald-500" />
      </div>
    </main>
  );
}
