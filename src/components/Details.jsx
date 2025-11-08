import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="relative py-20 bg-gradient-to-b from-white to-rose-50/60">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm border border-rose-100">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <Calendar className="h-5 w-5" />
              <h3 className="font-semibold tracking-wide">Tanggal</h3>
            </div>
            <p className="text-rose-900 text-lg">Sabtu, 14 Desember 2025</p>
            <p className="text-rose-700/80">Akad & Resepsi</p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm border border-rose-100">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <Clock className="h-5 w-5" />
              <h3 className="font-semibold tracking-wide">Waktu</h3>
            </div>
            <p className="text-rose-900 text-lg">Akad: 09.00 WIB</p>
            <p className="text-rose-900 text-lg">Resepsi: 11.00 - 14.00 WIB</p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm border border-rose-100">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold tracking-wide">Lokasi</h3>
            </div>
            <p className="text-rose-900 text-lg">Taman Lily Merah</p>
            <p className="text-rose-700/80">Jl. Mawar No. 21, Bandung</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-rose-600 hover:text-rose-700 underline decoration-rose-300"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
