import { useState, useCallback } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import CaseStudyModal from "./components/CaseStudyModal";
import { caseStudies } from "./data/caseStudies";
import CaseStudy2 from "./components/CaseStudy2";

export default function App() {
  const [firstActive, setFirstActive] = useState<boolean>(false);
  const [secondActive, setSecondActive] = useState<boolean>(false);

  const scrollTo = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="bg-black text-slate-900 font-sans">
      <Nav onNavigate={scrollTo} />

      <main className="w-full">
        <Hero onViewWork={() => scrollTo("work")} />
        <About />
        <Work
          studies={caseStudies}
          onOpen={setFirstActive}
          onOpen2={setSecondActive}
        />
        <Contact />
      </main>

      {firstActive && <CaseStudyModal onClose={() => setFirstActive(false)} />}
      {secondActive && <CaseStudy2 onClose={() => setSecondActive(false)} />}
    </div>
  );
}
