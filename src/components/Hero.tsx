import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";

interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  const words = ["Innovative", "Modern", "Thoughtful", "Creative"];
  return (
    <AuroraBackground>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-5xl mx-auto w-full z-10"
      >
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold text-green-400 tracking-widest uppercase mb-6">
            UX Designer & Researcher
          </span>
          <h1 className="text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Designing <FlipWords words={words} className="text-white" /> <br />
            Experiences.
            <br />
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
            Hi there, I'm Arthur. I am a student studying computer science who
            also realizes the importance of good UX. I believe in creating easy
            to use interfaces that elevate the user's experience.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onViewWork}
              className="px-6 py-3 text-white rounded-full border border-white text-sm font-semibold hover:bg-green-400 hover:text-black hover:border-green-400 transition-colors duration-200 cursor-pointer"
            >
              View case studies
            </button>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
