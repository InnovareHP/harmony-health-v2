import { Card } from "@/components/ui/card";

const categories = [
  { name: "basement", title: "Basement"         , image: "/gallery/basement/basement_1.jpg" },
  { name: "room-bathroom", title: "Room & Bathroom", image: "/gallery/room-bathroom/room-bathroom_1.jpg" },
  { name: "dining-room", title: "Dining Room", image: "/gallery/dining-room/dining-room_1.jpg" },
  { name: "entrance", title: "Entrance", image: "/gallery/entrance/entrance_1.jpg" },
  { name: "front-yard", title: "Front Yard", image: "/gallery/front-yard/front-yard_1.jpg" },
  { name: "kitchen", title: "Kitchen", image: "/gallery/kitchen/kitchen_1.jpg" },
  { name: "screened-in-porch", title: "Screened In Porch", image: "/gallery/screened-in-porch/screen_1.jpg" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14">
          <span className="text-emerald-500">
            Gallery
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`/gallery/${cat.name}`}
              className="focus:outline-none focus:ring-4 focus:ring-emerald-400 rounded-2xl"
            >
              <Card className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative aspect-square">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl flex items-end">
                    <h3 className="w-full text-center text-white text-2xl font-bold capitalize py-4 backdrop-blur-sm">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
