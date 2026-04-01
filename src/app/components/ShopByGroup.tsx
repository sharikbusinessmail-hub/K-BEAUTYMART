import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router";

const groups = [
  { name: "BTS", color: "#9966cc", image: "data:image/png;base64,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", emoji: "💜" },
  { name: "BLACKPINK", color: "#ff4081", image: "https://patchcollection.com/cdn/shop/products/BLACKPINKLogo_1_BW-13578_23cef2cd-8bdf-42c7-94f2-1025729b2041.jpg", emoji: "🖤" },
  { name: "Stray Kids", color: "#ff6b35", image: "https://i.pinimg.com/736x/88/12/72/881272bc899c59771fc6884f3c5a9347.jpg", emoji: "🧭" },
  { name: "TWICE", color: "#ff90b3", image: "https://i.pinimg.com/736x/65/03/dc/6503dc81ea0b4ccf797e4c5398609e45.jpg", emoji: "🍭" },
  { name: "NewJeans", color: "#7ec8e3", image: "https://i.pinimg.com/736x/26/7a/96/267a96b46df2dfb7cf13203008103d94.jpg", emoji: "👖" },
  { name: "SEVENTEEN", color: "#ff7eb9", image: "https://i.pinimg.com/236x/e1/f5/2c/e1f52c774a56c2ca36cdb81ef6321e0e.jpg", emoji: "💎" },
  { name: "ENHYPEN", color: "#c77dff", image: "https://i.pinimg.com/736x/8a/6e/01/8a6e018fc0926f6242bc20d545815766.jpg", emoji: "🧬" },
  { name: "TXT", color: "#92c9ff", image: "https://ih1.redbubble.net/image.765205341.7321/st,small,507x507-pad,600x600,f8f8f8.u3.jpg", emoji: "🌟" },
  { name: "aespa", color: "#c5a3ff", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKjb9KBYd0UrZD8Y57yMJygIJB4BGCIyHlQ&s", emoji: "🌐" },
  { name: "LE SSERAFIM", color: "#ffc8dd", image: "https://i.pinimg.com/474x/44/6d/af/446daf660230f72892358dc180bda32f.jpg", emoji: "🔥" },
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
                className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white shadow-lg transition-all group-hover:scale-110 group-hover:shadow-xl overflow-hidden ring-4 ring-transparent group-hover:ring-opacity-50"
                style={{
                  backgroundColor: group.color, // Keeps the nice background color behind the image
                  ["--tw-ring-color" as any]: group.color,
                }}
              >
                {/* Replaced the emoji span with this image tag */}
                <img
                  src={group.image}
                  alt={`${group.name} logo`}
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    // Quick fallback to emoji if the Imgur link breaks
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden drop-shadow-lg text-4xl md:text-5xl">{group.emoji}</span>
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