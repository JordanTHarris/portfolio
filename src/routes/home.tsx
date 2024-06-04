import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Home() {
  const typeWriterText = "Hi, my name is Jordan";
  const flipWords = ["poop", "boobies", "booty"];

  function textToArray(text: string) {
    const textArray = text.split(" ");
    return textArray.map((word) => {
      const className = word === "Jordan" ? "!text-purple-500" : "";
      return { text: word, className };
    });
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <TypewriterEffect
        className="text-muted-foreground"
        words={textToArray(typeWriterText)}
      />
      <div className="text-4xl text-muted-foreground">
        I am passionate about
        <FlipWords words={flipWords} className="text-emerald-500" />
      </div>
    </div>
  );
}
