import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router";

// 1. Import your local images here
// Make sure the paths match exactly where you saved your image files!
// If your images are in src/assets/groups/, the paths would look like this:
import btsImg from "../../assets/groups/bts.png";
import blackpinkImg from "../../assets/groups/blackpink.png";
import straykidsImg from "../../assets/groups/straykids.png";
import twiceImg from "../../assets/groups/twice.png";
import newjeansImg from "../../assets/groups/newjeans.png";
import seventeenImg from "../../assets/groups/seventeen.png";
import enhypenImg from "../../assets/groups/enhypen.png";
import txtImg from "../../assets/groups/txt.png";
import aespaImg from "../../assets/groups/aespa.png";
import lesserafimImg from "../../assets/groups/lesserafim.png";

// 2. Replace the imgur links with the imported image variables
const groups = [
  { name: "BTS", color: "#9966cc", image: btsImg },
  { name: "BLACKPINK", color: "#ff4081", image: blackpinkImg },
  { name: "Stray Kids", color: "#ff6b35", image: straykidsImg },
  { name: "TWICE", color: "#ff90b3", image: twiceImg },
  { name: "NewJeans", color: "#7ec8e3", image: newjeansImg },
  { name: "SEVENTEEN", color: "#ff7eb9", image: seventeenImg },
  { name: "ENHYPEN", color: "#c77dff", image: enhypenImg },
  { name: "TXT", color: "#92c9ff", image: txtImg },
  { name: "aespa", color: "#c5a3ff", image: aespaImg },
  { name: "LE SSERAFIM", color: "#ffc8dd", image: lesserafimImg },
];

export default function ShopByGroup() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop by Group</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {groups.map((group) => (
            <button
              key={group.name}
              onClick={() => navigate(`/category/K-Pop%20Groups/${encodeURIComponent(group.name)}`)}
              className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all group-hover:scale-110 group-hover:shadow-xl overflow-hidden ring-4 ring-transparent group-hover:ring-opacity-50"
                style={{
                  backgroundColor: group.color, // Keeps the nice background color behind transparent PNGs
                  ["--tw-ring-color" as any]: group.color,
                }}
              >
                {/* 3. Render the image here instead of the emoji */}
                <img 
                  src={group.image} 
                  alt={`${group.name} logo`} 
                  className="w-full h-full object-cover" 
                  // Note: Use 'object-contain' instead of 'object-cover' if your logos are getting cut off at the edges
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-[#9966cc] transition-colors">
                {group.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}