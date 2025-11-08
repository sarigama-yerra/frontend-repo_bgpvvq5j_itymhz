import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';

function App() {
  return (
    <div className="font-['Inter'] text-rose-900 bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-rose-100">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-rose-700">Asha & Bima</a>
          <nav className="hidden md:flex items-center gap-6 text-rose-700/90">
            <a href="#details" className="hover:text-rose-900">Detail</a>
            <a href="#gallery" className="hover:text-rose-900">Galeri</a>
            <a href="#rsvp" className="hover:text-rose-900">RSVP</a>
          </nav>
          <a href="#rsvp" className="px-4 py-2 rounded-full bg-rose-600 text-white text-sm shadow hover:bg-rose-700">Konfirmasi</a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Details />
      <Gallery />
      <RSVP />

      {/* Footer */}
      <footer className="py-10 bg-rose-50/60 border-t border-rose-100">
        <div className="container mx-auto px-6 md:px-10 text-center text-rose-700/80">
          <p>Terima kasih telah menjadi bagian dari hari spesial kami.</p>
          <p className="mt-2 text-sm">Dibuat dengan cinta dan bunga-bunga.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
