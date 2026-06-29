"use client";

import { useState } from "react";

const jenisSampah = [
  { id: "plastik-pet", nama: "Plastik PET (Botol)", harga: 1500, satuan: "kg", kategori: "Plastik", warna: "blue" },
  { id: "plastik-hdpe", nama: "Plastik HDPE", harga: 1200, satuan: "kg", kategori: "Plastik", warna: "blue" },
  { id: "plastik-pp", nama: "Plastik PP", harga: 800, satuan: "kg", kategori: "Plastik", warna: "blue" },
  { id: "plastik-campur", nama: "Plastik Campur", harga: 500, satuan: "kg", kategori: "Plastik", warna: "blue" },
  { id: "kertas-koran", nama: "Kertas Koran", harga: 800, satuan: "kg", kategori: "Kertas", warna: "yellow" },
  { id: "kertas-hvs", nama: "Kertas HVS", harga: 1000, satuan: "kg", kategori: "Kertas", warna: "yellow" },
  { id: "kardus", nama: "Kardus", harga: 700, satuan: "kg", kategori: "Kertas", warna: "yellow" },
  { id: "kertas-campur", nama: "Kertas Campur", harga: 400, satuan: "kg", kategori: "Kertas", warna: "yellow" },
  { id: "kaleng-aluminium", nama: "Kaleng Aluminium", harga: 10000, satuan: "kg", kategori: "Logam", warna: "gray" },
  { id: "kaleng-seng", nama: "Kaleng Seng", harga: 1800, satuan: "kg", kategori: "Logam", warna: "gray" },
  { id: "besi", nama: "Besi", harga: 2500, satuan: "kg", kategori: "Logam", warna: "gray" },
  { id: "tembaga", nama: "Tembaga", harga: 45000, satuan: "kg", kategori: "Logam", warna: "gray" },
  { id: "botol-kaca-bening", nama: "Botol Kaca Bening", harga: 500, satuan: "kg", kategori: "Kaca", warna: "cyan" },
  { id: "botol-kaca-warna", nama: "Botol Kaca Warna", harga: 400, satuan: "kg", kategori: "Kaca", warna: "cyan" },
];

interface Setoran {
  jenis: string;
  nama: string;
  berat: number;
  harga: number;
  subtotal: number;
}

export default function SetorSampahPage() {
  const [setoran, setSetoran] = useState<Setoran[]>([]);
  const [selectedJenis, setSelectedJenis] = useState("");
  const [berat, setBerat] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [filterKategori, setFilterKategori] = useState("Semua");

  const kategoriList = ["Semua", ...new Set(jenisSampah.map(j => j.kategori))];

  const filteredJenis = filterKategori === "Semua"
    ? jenisSampah
    : jenisSampah.filter(j => j.kategori === filterKategori);

  const tambahSetoran = () => {
    if (!selectedJenis || !berat || Number(berat) <= 0) return;

    const jenis = jenisSampah.find((j) => j.id === selectedJenis);
    if (!jenis) return;

    const newSetoran: Setoran = {
      jenis: jenis.id,
      nama: jenis.nama,
      berat: Number(berat),
      harga: jenis.harga,
      subtotal: Number(berat) * jenis.harga,
    };

    setSetoran([...setoran, newSetoran]);
    setSelectedJenis("");
    setBerat("");
  };

  const hapusSetoran = (index: number) => {
    setSetoran(setoran.filter((_, i) => i !== index));
  };

  const totalBerat = setoran.reduce((acc, item) => acc + item.berat, 0);
  const totalHarga = setoran.reduce((acc, item) => acc + item.subtotal, 0);

  const handleSubmit = () => {
    if (setoran.length === 0) return;
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSetoran([]);
    }, 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Setoran Berhasil! 🎉</h3>
            <p className="text-gray-500 mb-4">Setoran Anda telah tercatat dan saldo akan ditambahkan.</p>
            <div className="bg-green-50 rounded-2xl p-4">
              <div className="text-sm text-gray-500 mb-1">Total Setoran</div>
              <div className="text-2xl font-bold text-green-600">+Rp {totalHarga.toLocaleString("id-ID")}</div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gray-900">Setor Sampah</h1>
        <p className="text-gray-500 mt-1">Catat setoran sampah baru Anda</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form Setor */}
        <div className="lg:col-span-2 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Tambah Item Setoran</h2>

            {/* Category Filter */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {kategoriList.map((kategori) => (
                <button
                  key={kategori}
                  onClick={() => setFilterKategori(kategori)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    filterKategori === kategori
                      ? "bg-green-500 text-white shadow-sm shadow-green-500/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {kategori}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Sampah</label>
                <select
                  value={selectedJenis}
                  onChange={(e) => setSelectedJenis(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Pilih jenis sampah</option>
                  {filteredJenis.map((jenis) => (
                    <option key={jenis.id} value={jenis.id}>
                      {jenis.nama} - Rp {jenis.harga.toLocaleString("id-ID")}/{jenis.satuan}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Berat (kg)</label>
                <input
                  type="number"
                  value={berat}
                  onChange={(e) => setBerat(e.target.value)}
                  placeholder="0"
                  min="0.1"
                  step="0.1"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button
              onClick={tambahSetoran}
              disabled={!selectedJenis || !berat || Number(berat) <= 0}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-sm shadow-green-500/25 hover:shadow-md hover:shadow-green-500/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Tambah Item
            </button>

            {/* Item List */}
            {setoran.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Daftar Item Setoran ({setoran.length} item)</h3>
                <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
                  {setoran.map((item, index) => (
                    <div key={index} className="p-4 flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors animate-fade-in-up">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{item.nama}</div>
                          <div className="text-xs text-gray-500">
                            {item.berat} kg x Rp {item.harga.toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="font-bold text-green-600">Rp {item.subtotal.toLocaleString("id-ID")}</div>
                        <button
                          onClick={() => hapusSetoran(index)}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ringkasan */}
        <div className="lg:col-span-1 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Setoran</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Jumlah Item</span>
                <span className="font-semibold text-gray-900">{setoran.length} item</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Total Berat</span>
                <span className="font-semibold text-gray-900">{totalBerat.toFixed(1)} kg</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Estimasi Saldo</span>
                  <span className="text-xl font-bold text-green-600">Rp {totalHarga.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={setoran.length === 0}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all shadow-sm shadow-green-500/25 hover:shadow-md hover:shadow-green-500/30"
            >
              Konfirmasi Setoran
            </button>

            <div className="mt-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div className="text-sm text-green-700">
                  <p className="font-semibold mb-2">Tips Setor:</p>
                  <ul className="space-y-1.5 text-green-600">
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                      Bersihkan sampah sebelum disetor
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                      Pisahkan berdasarkan jenis
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                      Harga dapat berubah sewaktu-waktu
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
