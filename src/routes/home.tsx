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
        className="text-muted-foreground"
        words={textToTypewriterWords(typewriterText)}
      />
      <div className="text-4xl text-muted-foreground">
        I am passionate about
        <FlipWords words={flipWords} className="text-emerald-500" />
      </div>
    </main>
  );
}
