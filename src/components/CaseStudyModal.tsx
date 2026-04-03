import { useEffect } from "react";

import thumb from "../../src/assets/spotify_thumb.png";
import affinitymap from "../../src/assets/AffinityMap.png";
import wireframe1 from "../../src/assets/IMG_4966.jpg";
import wireframe2 from "../../src/assets/IMG_4967.jpg";
import wireframe3 from "../../src/assets/IMG_4968.jpg";
import screen1 from "../../src/assets/iPhone 17 - 1.png";
import screen2 from "../../src/assets/iPhone 17 - 2.png";
import screen3 from "../../src/assets/iPhone 17 - 3.png";
import screen4 from "../../src/assets/iPhone 17 - 4.png";
import screen5 from "../../src/assets/iPhone 17 - 5.png";
import screen6 from "../../src/assets/iPhone 17 - 6.png";

interface CaseStudyModalProps {
  onClose: () => void;
}

export default function CaseStudyModal({ onClose }: CaseStudyModalProps) {
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
          <img src={thumb} alt="spotify_thumb" className="scale-150" />
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
            Spotify Redesign
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            A fresh take on Spotify's mobile design
          </p>

          {/* Overview */}
          <Section title="Challenge">
            <p className="text-white leading-relaxed">
              Spotify’s mobile UI/UX has been critiqued by users for being hard
              to navigate and messy in general. The goal of this case study is
              to understand the specific challenges users face when interacting
              with Spotify’s UI and propose solutions to those problems.
            </p>
          </Section>

          {/* Problem */}
          <Section title="Planning">
            <p className="text-white leading-relaxed">
              Before proceeding with the redesign, I asked a few Spotify users
              what their experience was like using the app. Using their
              responses, I was able to create an affinity map highlighting
              common issues grouped into four categories: Navigation / Layout,
              UI Elements, Technical Issues, and Algorithm.
            </p>
            <img
              src={affinitymap}
              alt="affinity map"
              className="scale-100 invert"
            />
          </Section>

          <Section title="Wireframing">
            <p className="text-white leading-relaxed">
              Using the information I gathered, I created lo-fi sketches of
              several pages that I thought needed redesigning the most. The goal
              of my design was not to go overboard with fancy UI elements, but
              rather to fix important issues that would make the app a better
              user experience.
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
              <img src={wireframe1} alt="wireframe1" className="scale-100" />
              <img src={wireframe2} alt="wireframe1" className="scale-100" />
              <img src={wireframe3} alt="wireframe1" className="scale-100" />
            </div>
          </Section>

          <Section title="Figma Prototype">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
              <img src={screen1} alt="wireframe1" />
              <img src={screen2} alt="wireframe1" />
              <img src={screen3} alt="wireframe1" />
              <img src={screen4} alt="wireframe1" />
              <img src={screen5} alt="wireframe1" />
              <img src={screen6} alt="wireframe1" />
            </div>
          </Section>

          <Section title="Design Explanation">
            <p className="text-white leading-relaxed">
              When creating this design, I opted to prioritize simplicity over
              complexity. One of the most common critiques of Spotify's mobile
              UX was that it was tedious to navigate. To fix this, I divided
              each each page into 3 sub-pages. The Home page, for example, is
              composed of the recents section, the discover section, and the new
              music section. This reduces the amount of scrolling needed to get
              to a particular section and categorizes the home page neatly. I
              also reduced the number of buttons as another major complaint was
              that it looked to cluttered. For example, when viewing the "What's
              New" section, there isn't a need for the user to add to a playlist
              or download the song right away if they haven't even listened to
              it yet. This makes the design a lot more user friendly. I also
              redesigned the library to feature 3 sections as well, rather than
              displaying everything in one massive list. Finally, I tweaked the
              artist profile page to be more space efficient and made the new
              release more prominent.
            </p>
          </Section>

          <Section title="Results">
            <p className="text-white leading-relaxed">
              To assess how effective my redesign was, I asked several users to
              assess my design. I told them to score four different categories
              (usability, functionality, UI, and cohesion) out of 5 points. I
              then averaged the results, which are displayed below:
              <br />
              <br />
              Usability: 4.4/5
              <br />
              Functionality: 4/5
              <br />
              UI Design: 4.6/5
              <br />
              Cohesion: 4.8/5
            </p>
            <br />
            <p className="text-white leading-relaxed">
              Overall, it seems that people thought the redesign improved upon
              the original. However, it is worth considering ways to add more
              functionality to my design, which appears to be the weakest
              category.
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
