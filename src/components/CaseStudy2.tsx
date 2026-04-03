import { useEffect } from "react";
import thumb from "../../src/assets/travel-thumb.png";
import wireframe1 from "../../src/assets/IMG_4973.jpg";
import wireframe2 from "../../src/assets/IMG_4974.jpg";
import screen1 from "../../src/assets/Travel-1.png";
import screen2 from "../../src/assets/Travel-2.png";
import screen3 from "../../src/assets/Travel-3.png";
import screen4 from "../../src/assets/Travel-4.png";
import screen5 from "../../src/assets/Travel-5.png";

interface CaseStudyModalProps {
  onClose: () => void;
}

export default function CaseStudy2({ onClose }: CaseStudyModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-neutral-900 rounded-3xl w-full max-w-6xl shadow-2xl my-auto">
        {/* Hero banner */}
        <div
          className={`overflow-hidden relative h-52 rounded-t-3xl bg-black flex items-center justify-center`}
        >
          <img src={thumb} alt="travel thumb" className="scale-150 mr-80" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-10">
          {/* Header */}
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Travel App
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            An all-in-one travel app featuring a sleek, minimal design
          </p>

          {/* Overview */}
          <Section title="Overview">
            <p className="text-white leading-relaxed">
              Finding an app that can integrate multiple services seamlessly can
              be a challenge. It is common for apps to specialize in one
              particular service and focus on doing it well. That’s why I
              designed an app that is able to handle multiple related tasks,
              fusing together Google Maps, TripAdvisor, and Google Flights all
              into a single package. [NAME] is the ultimate travel app designed
              to be your ultimate travel tool, simplifying all of the tedious
              parts of travel while featuring a sleek, minimal design.
            </p>
          </Section>

          {/* Problem */}
          <Section title="Planning">
            <p className="text-white leading-relaxed">
              The primary objective for this design was to keep the layout as
              simple as possible, reducing the amount of navigation needed to
              perform tasks. I examined several apps such as Google Maps and
              Google Flights to determine what worked well and what didn’t,
              selectively incorporating features into my own design.
            </p>
          </Section>

          <Section title="Wireframing">
            <p className="text-white leading-relaxed">
              The app contains 3 main features; a destination recommendation
              service, a flight ticket booker, and an itinerary planner. With
              this in mind, I came up with a rudimentary design sketched out on
              paper, focusing on ease of use and cohesion.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
              <img
                src={wireframe1}
                alt="wireframe1"
                className="scale-100 w-130 object-contain object-top"
              />
              <img
                src={wireframe2}
                alt="wireframe1"
                className="scale-100 w-130 object-contain object-top"
              />
            </div>
          </Section>

          <Section title="Figma Prototype">
            <div className="columns-3xs mt-10 space-y-10 gap-x-11">
              <img
                src={screen1}
                alt="wireframe1"
                className="scale-100 w-80 object-contain object-top"
              />
              <img
                src={screen2}
                alt="wireframe1"
                className="scale-100 w-80 object-contain object-top"
              />
              <img
                src={screen3}
                alt="wireframe1"
                className="scale-100 w-80 object-contain object-top"
              />
              <img
                src={screen4}
                alt="wireframe1"
                className="scale-100 w-80 object-contain object-top"
              />
              <img
                src={screen5}
                alt="wireframe1"
                className="scale-100 w-80 object-contain object-top"
              />
            </div>
          </Section>

          <Section title="Design Explanation">
            <p className="text-white leading-relaxed">
              The final Figma design consists of five pages; a login page, a
              home page, a description page, a flight booking page, and a page
              to plan itineraries. All of these screens form the core
              functionality of the app. I decided to use a light blue color
              palette, which is generally considered neutral but is also similar
              to the color of the sky (fitting for the app). The home and
              description pages are quite similar, as their layouts follow the
              same vertical format involving information cards stacked on top of
              each other. For the home page, I wanted the first item to be bold
              and prominent. Since people often travel to and from cities, I
              thought it would be appropriate for cities to be displayed in
              large cards with minimal text. People are familiar with large
              cities, so lengthy descriptions are not necessary. The second type
              of card I designed is smaller and intended for more specific
              attractions such as national parks and museums. This time, the
              picture does not take up the entire card; instead, I opted to
              include a description on the right hand side to give the reader
              more information. The final type of card is the smallest version,
              and is essentially the same as the previous card but does not
              contain a description. This is useful for things like restaurants
              and hotels, where pricing is generally more important. Below each
              set of cards, I added a button that, when clicked, expands the
              list further. In the real app, there would be many more cards
              displayed by default; for the sake of the design, I kept it short.
              The flight booking page also has a relatively simple design. I
              tried to consolidate all of the essential settings to the top of
              the page, leaving more room for flight listings. Finally, the
              itinerary page closely follows Google Maps’ design, featuring a
              swipable tab at the bottom. This allows the user to easily open
              and close the itinerary while also viewing the map.
            </p>
          </Section>

          <Section title="Results">
            <p className="text-white leading-relaxed">
              I asked several people for feedback on my design. The majority of
              critics said that the interface felt familiar and if translated
              into a real app, they would be comfortable using it. They also
              thought the integration between different services was executed
              well and the cohesion between each page is strong. However, some
              noted that it was slightly unclear what would happen upon tapping
              certain cards, and that it might be more helpful to add more
              icons.
            </p>
          </Section>

          <button
            onClick={onClose}
            className="mt-4 w-full py-3 rounded-2xl bg-white text-black text-sm font-medium hover:bg-green-400 transition-colors cursor-pointer"
          >
            Close case study
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
