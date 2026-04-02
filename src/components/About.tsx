const skills = [
  "User Research",
  "Interaction Design",
  "Prototyping",
  "Usability Testing",
  "Information Architecture",
  "Design Systems",
  "Figma",
  "Accessibility (WCAG)",
  "Workshop Facilitation",
  "Data Analysis",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-sm font-semibold text-green-400 tracking-widest uppercase">
            About
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-6 tracking-tight">
            Putting the user first.
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I'm a UX designer based in the Bay Area with a background in
              computer science. I care deeply about the space between what users
              say they want and what they actually need, which is the most
              important principle in UX design.
            </p>
            <p>
              In addition to UX, I have experience in web development and data
              structures. I have taken numerous courses in computer science such
              as algorithms, assembly programming, and OOP. This knowledge has
              helped inform me of what good design looks like, especially in
              more technical contexts.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-5">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 bg-neutral-800 text-white rounded-full text-sm font-medium transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
