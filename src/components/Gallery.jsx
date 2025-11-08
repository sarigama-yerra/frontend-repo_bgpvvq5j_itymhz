export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495875150909-826d31a5703e?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900 mb-8">Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, idx) => (
            <div key={idx} className="aspect-[3/4] overflow-hidden rounded-xl group">
              <img
                src={src}
                alt={`Galeri ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
