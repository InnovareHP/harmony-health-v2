import "../../components/category-gallery/category-gallery";
type CategoryGalleryProps = {
    category: string;
  };

  export default function CategoryGallery({ category }: CategoryGalleryProps) {
    // Define images per category
    const images: Record<string, string[]> = {
      basement: Array.from({ length: 16 }, (_, i) => `/gallery/basement/basement_${i + 1}.jpg`),
      "dining-room": [
        "/gallery/dining-room/dining-room_1.jpg",
        "/gallery/dining-room/dining-room_2.jpg",
        "/gallery/dining-room/dining-room_3.jpg",
      ],
      entrance: Array.from({ length: 6 }, (_, i) => `/gallery/entrance/entrance_${i + 1}.jpg`),
      "front-yard": [
        "/gallery/front-yard/front-yard_1.jpg",
        "/gallery/front-yard/front-yard_2.jpg",
        "/gallery/front-yard/front-yard_3.jpg",
      ],
      kitchen: Array.from({ length: 9 }, (_, i) => `/gallery/kitchen/kitchen_${i + 1}.jpg`),
      "screened-in-porch": ["/gallery/screened-in-porch/porch_1.jpg"],
    };

    const galleryImages = images[category] || [];

    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-500">
              Our Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={`${category}-${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
