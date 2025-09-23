type CategoryGalleryProps = {
    category: string;
  };

  export default function CategoryGallery({ category }: CategoryGalleryProps) {
    const images: Record<string, string[]> = {
      basement: Array.from({ length: 16 }, (_, i) => `/gallery/basement/basement_${i + 1}.jpg`),
      "dining-room": [
        "/gallery/dining-room/dining-room_1.jpg",
        "/gallery/dining-room/dining-room_2.jpg",
        "/gallery/dining-room/dining-room_3.jpg",
      ],
      "room-bathroom": Array.from({ length: 16 }, (_, i) => `/gallery/room-bathroom/room-bathroom_${i + 1}.jpg`),
      entrance: Array.from({ length: 6 }, (_, i) => `/gallery/entrance/entrance_${i + 1}.jpg`),
      "facade": [
        "/gallery/front-yard/front-yard_1.jpg",
        "/gallery/front-yard/front-yard_2.jpg",
        "/gallery/front-yard/front-yard_3.jpg",
      ],
      kitchen: Array.from({ length: 3 }, (_, i) => `/gallery/kitchen/kitchen_${i + 1}.jpg`),
      "screened-in-porch": Array.from({ length: 6 }, (_, i) => `/gallery/screened-in-porch/screen_${i + 1}.jpg`),
    };

    const galleryImages = images[category] || [];

    return (
        <section className="py-16 bg-white border-2">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 border-2">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-500">Our Gallery</h2>
          </div>

          {galleryImages.length === 0 ? (
            <p className="text-center text-gray-500">No images available for this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Consistent 4:3 tile. Change to aspect-square or aspect-[3/2] if you prefer */}
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={src}
                      alt={`${category} ${idx + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
