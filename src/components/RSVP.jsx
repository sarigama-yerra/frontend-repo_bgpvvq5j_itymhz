import { useState } from 'react';

export default function RSVP() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just a client-side thank you. Backend can be added later if needed.
    setStatus('Terima kasih! Konfirmasi Anda telah kami terima.');
    e.currentTarget.reset();
  }

  return (
    <section id="rsvp" className="py-20 bg-rose-50/60">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur p-8 rounded-2xl shadow-sm border border-rose-100">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Konfirmasi Kehadiran</h2>
          <p className="mt-2 text-rose-700/80">Mohon isikan data berikut untuk konfirmasi kehadiran Anda.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm text-rose-700/90 mb-1">Nama</label>
              <input required type="text" className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div>
              <label className="block text-sm text-rose-700/90 mb-1">Jumlah Tamu</label>
              <input required type="number" min="1" defaultValue={1} className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div>
              <label className="block text-sm text-rose-700/90 mb-1">Kehadiran</label>
              <select className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300">
                <option>Hadir</option>
                <option>Berhalangan</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-rose-700/90 mb-1">Ucapan</label>
              <textarea rows={4} className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="Tuliskan doa atau ucapan untuk kami" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="submit" className="px-6 py-3 rounded-full bg-rose-600 text-white shadow-md hover:shadow-lg hover:bg-rose-700 transition">Kirim</button>
              {status && <span className="text-rose-700/80">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
