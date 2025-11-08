import Spline from '@splinetool/react-spline';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Floral Animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and noise overlay for mood (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-50/80 via-rose-50/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="tracking-widest uppercase text-rose-500 font-medium mb-4">Undangan Pernikahan</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-rose-900 leading-tight">
              Asha <span className="text-rose-500">&</span> Bima
            </h1>
            <div className="mt-4 flex items-center gap-3 text-rose-600">
              <Heart className="h-5 w-5 fill-rose-500/30" />
              <span className="text-lg">Sabtu, 14 Desember 2025</span>
            </div>
            <p className="mt-6 text-rose-700/80 text-lg md:text-xl max-w-2xl">
              Dengan penuh cinta, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#details" className="px-6 py-3 rounded-full bg-rose-600 text-white shadow-md hover:shadow-lg hover:bg-rose-700 transition">Lihat Detail</a>
              <a href="#rsvp" className="px-6 py-3 rounded-full border border-rose-300 text-rose-700 hover:bg-rose-50 transition">Konfirmasi Kehadiran</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
