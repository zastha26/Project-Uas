"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface LokasiBankSampah {
  id: number;
  nama: string;
  alamat: string;
  jamBuka: string;
  telepon: string;
  kota: string;
  lat: number;
  lng: number;
  rating: number;
  jarak: string;
  tersedia: boolean;
}

const lokasiData: LokasiBankSampah[] = [
  {
    id: 1,
    nama: "Bank Sampah Murni",
    alamat: "Jl. Lingkungan Hijau No. 12, Kel. Gunung Guntur",
    jamBuka: "Senin - Sabtu: 08.00 - 16.00",
    telepon: "+62 812 3456 7890",
    kota: "Balikpapan",
    lat: -1.2654,
    lng: 116.8312,
    rating: 4.8,
    jarak: "0.5 km",
    tersedia: true,
  },
  {
    id: 2,
    nama: "Bank Sampah Hijau Lestari",
    alamat: "Jl. Pohon Beringin No. 28, Kel. Sepinggan",
    jamBuka: "Senin - Jumat: 07.30 - 15.30",
    telepon: "+62 813 4567 8901",
    kota: "Balikpapan",
    lat: -1.2710,
    lng: 116.8420,
    rating: 4.6,
    jarak: "1.2 km",
    tersedia: true,
  },
  {
    id: 3,
    nama: "Bank Sampah Bersih Sejahtera",
    alamat: "Jl. Mangga Raya No. 5, Kel. Manggar",
    jamBuka: "Senin - Sabtu: 08.00 - 14.00",
    telepon: "+62 821 5678 9012",
    kota: "Balikpapan",
    lat: -1.2580,
    lng: 116.8550,
    rating: 4.5,
    jarak: "2.1 km",
    tersedia: true,
  },
  {
    id: 4,
    nama: "Bank Sampah Eco Mart",
    alamat: "Jl. Pandawa No. 10, Kel. Lamaru",
    jamBuka: "Selasa - Sabtu: 09.00 - 15.00",
    telepon: "+62 852 6789 0123",
    kota: "Balikpapan",
    lat: -1.2490,
    lng: 116.8600,
    rating: 4.3,
    jarak: "3.4 km",
    tersedia: true,
  },
  {
    id: 5,
    nama: "Bank Sampah Mitra Bersama",
    alamat: "Jl. Perintis Kemerdekaan No. 45, Kel. Batu Ampar",
    jamBuka: "Senin - Sabtu: 07.00 - 16.00",
    telepon: "+62 856 7890 1234",
    kota: "Balikpapan",
    lat: -1.2620,
    lng: 116.8200,
    rating: 4.7,
    jarak: "2.8 km",
    tersedia: true,
  },
  {
    id: 6,
    nama: "Bank Sampah Warga Mandiri",
    alamat: "Jl. Karya Jaya No. 33, Kel. Klandasan Ilir",
    jamBuka: "Senin - Jumat: 08.00 - 15.00",
    telepon: "+62 811 2233 4455",
    kota: "Balikpapan",
    lat: -1.2680,
    lng: 116.8380,
    rating: 4.4,
    jarak: "1.8 km",
    tersedia: false,
  },
];

export default function LokasiPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedLokasi, setSelectedLokasi] = useState<LokasiBankSampah | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("banksampah_current_user");
    if (!stored) { router.push("/auth"); return; }
  }, [router]);

  const filteredLokasi = lokasiData.filter((l) =>
    l.nama.toLowerCase().includes(search.toLowerCase()) ||
    l.alamat.toLowerCase().includes(search.toLowerCase()) ||
    l.kota.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gray-900">Lokasi Bank Sampah</h1>
        <p className="text-gray-500 mt-1">Temukan tempat terdekat untuk menyetor sampah Anda</p>
      </div>

      {/* Search */}
      <div className="mb-6 animate-fade-in-up">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" placeholder="Cari lokasi bank sampah..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm" />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mb-6 animate-fade-in-up">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl h-48 sm:h-64 flex items-center justify-center border border-green-200">
          <div className="text-center">
            <svg className="w-16 h-16 text-green-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            <p className="text-green-600 font-medium">Peta Lokasi Bank Sampah</p>
            <p className="text-sm text-green-500 mt-1">{filteredLokasi.length} lokasi tersedia</p>
          </div>
        </div>
      </div>

      {/* List Lokasi */}
      <div className="space-y-4 animate-fade-in-up">
        {filteredLokasi.map((lokasi) => (
          <div key={lokasi.id} onClick={() => setSelectedLokasi(selectedLokasi?.id === lokasi.id ? null : lokasi)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-2 transition-all cursor-pointer ${
              selectedLokasi?.id === lokasi.id ? "border-green-500 shadow-md" : "border-gray-100 hover:border-green-200 hover:shadow-md"
            }`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  lokasi.tersedia ? "bg-green-100" : "bg-gray-100"
                }`}>
                  <svg className={`w-6 h-6 ${lokasi.tersedia ? "text-green-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{lokasi.nama}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      lokasi.tersedia ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {lokasi.tersedia ? "Buka" : "Tutup"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{lokasi.alamat}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lokasi.jamBuka}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {lokasi.jarak}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{lokasi.rating}</span>
                </div>
                <p className="text-xs text-gray-400">{lokasi.kota}</p>
              </div>
            </div>

            {/* Detail expanded */}
            {selectedLokasi?.id === lokasi.id && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Telepon</div>
                      <div className="text-sm font-medium text-gray-900">{lokasi.telepon}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Jarak</div>
                      <div className="text-sm font-medium text-gray-900">{lokasi.jarak} dari lokasi Anda</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={`https://www.google.com/maps?q=${lokasi.lat},${lokasi.lng}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    Buka di Maps
                  </a>
                  <a href={`https://wa.me/${lokasi.telepon.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 py-3 rounded-xl font-semibold transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hubungi
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredLokasi.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="text-gray-500">Tidak ada lokasi ditemukan</p>
        </div>
      )}
    </div>
  );
}
