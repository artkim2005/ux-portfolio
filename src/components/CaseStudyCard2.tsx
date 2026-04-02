import thumb from "../../src/assets/travel-thumb.png";

interface CaseStudyCardProps {
  onOpen: (state: boolean) => void;
}

export default function CaseStudyCard({ onOpen }: CaseStudyCardProps) {
  return (
    <div
      className="group relative bg-linear-to-b from-black to-neutral-900 rounded-3xl overflow-hidden border border-neutral-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(true)}
    >
      {/* Cover */}
      <div
        className={`h-56 bg-black flex items-center justify-center relative overflow-hidden`}
      >
        <img src={thumb} alt="travel thumb" className="scale-200 mr-50" />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-white mb-1">Travel App</h3>
        <p className="text-neutral-400 text-sm mb-5">
          An all-in-one travel app featuring a sleek, minimal design
        </p>

        <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-slate-100 pt-4">
          <span>Lead UX Designer</span>
          <span>1 month</span>
        </div>

        <button
          className="mt-5 w-full py-2.5 rounded-xl bg-white text-black text-sm font-semibold group-hover:opacity-100 transition-all duration-200 hover:bg-green-400 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(true);
          }}
        >
          Read case study →
        </button>
      </div>
    </div>
  );
}
