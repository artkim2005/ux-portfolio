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
        <img
          src="/src/assets/spotify_thumb.png"
          alt="spotify_thumb"
          className="scale-150"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-white mb-1">Spotify Redesign</h3>
        <p className="text-neutral-400 text-sm mb-5">
          A fresh take on Spotify's mobile design
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
