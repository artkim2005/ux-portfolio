import type { CaseStudy } from "../types";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyCard2 from "./CaseStudyCard2";

interface WorkProps {
  studies: CaseStudy[];
  onOpen: (state: boolean) => void;
  onOpen2: (state: boolean) => void;
}

export default function Work({ onOpen, onOpen2 }: WorkProps) {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-14">
        <span className="text-sm font-semibold text-green-400 tracking-widest uppercase">
          Selected Work
        </span>
        <h2 className="text-4xl font-bold text-white mt-3 tracking-tight">
          Case studies
        </h2>
        <p className="text-neutral-400 mt-3 max-w-lg">
          Take a look at some of the work I've done, showing the entire process
          from ideation to feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CaseStudyCard onOpen={onOpen} />
        <CaseStudyCard2 onOpen={onOpen2} />
      </div>
    </section>
  );
}
