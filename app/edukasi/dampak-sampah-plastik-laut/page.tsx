import Link from "next/link";

export const metadata = {
  title: "Dampak Sampah Plastik terhadap Laut - Bank Sampah",
  description: "Mengetahui bahaya sampah plastik bagi ekosistem laut dan bagaimana kita bisa mengurangi penggunaan plastik sekali pakai.",
};

export default function DampakSampahPlastikLaut() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 block leading-tight">Bank Sampah</span>
                <span className="text-[10px] text-green-600 font-medium tracking-wide">SISTEM INFORMASI</span>
              </div>
            </Link>
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Kembali
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Lingkungan
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dampak Sampah Plastik terhadap Laut
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              7 menit baca
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              25 Juni 2026
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="h-64 md:h-80 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-8">
          <svg className="w-32 h-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Sampah plastik telah menjadi salah satu ancaman terbesar bagi ekosistem laut. Setiap tahun, jutaan ton sampah plastik berakhir di lautan, mengancam kehidupan laut dan kesehatan manusia.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fakta tentang Sampah Plastik di Laut</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">8 Juta</div>
              <div className="text-sm text-gray-600">Ton plastik masuk ke laut setiap tahun</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">100 Ribu</div>
              <div className="text-sm text-gray-600">Hewan laut terbunuh akibat plastik setiap tahun</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">500</div>
              <div className="text-sm text-gray-600">Area terisolasi di lautan penuh sampah plastik</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">450</div>
              <div className="text-sm text-gray-600">Tahun waktu yang dibutuhkan plastik untuk terurai</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dampak terhadap Hewan Laut</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sampah plastik membahayakan berbagai jenis hewan laut, mulai dari yang terkecil hingga yang terbesar:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li><strong>Penyu:</strong> Sering mengira kantong plastik sebagai ubur-ubur, makanan favorit mereka</li>
            <li><strong>Paus dan lumba-lumba:</strong> Terjebak dalam jaring plastik atau menelan plastik</li>
            <li><strong>Burung laut:</strong> Memberi makan anak-anak mereka dengan pecahan plastik</li>
            <li><strong>Ikan:</strong> Menelan mikroplastik yang masuk ke rantai makanan</li>
            <li><strong>Karang:</strong> Terganggu oleh sampah plastik yang menutupi permukaannya</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dampak terhadap Manusia</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dampak sampah plastik di laut tidak hanya dirasakan oleh hewan laut, tetapi juga oleh manusia:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li><strong>Masuk ke rantai makanan:</strong> Mikroplastik masuk ke tubuh ikan yang kita konsumsi</li>
            <li><strong>Pencemaran air:</strong> Plastik melepaskan bahan kimia berbahaya ke dalam air laut</li>
            <li><strong>Kerugian ekonomi:</strong> Kerusakan industri perikanan dan pariwisata</li>
            <li><strong>Ancaman kesehatan:</strong> Bahan kimia dari plastik dapat menyebabkan berbagai penyakit</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Solusi yang Bisa Kita Lakukan</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">1. Kurangi Penggunaan Plastik Sekali Pakai</h4>
              <p className="text-gray-600 leading-relaxed">
                Gunakan tas belanja kain, botol minum stainless steel, dan wadah makanan yang dapat digunakan berulang kali. Hindari sedotan plastik dan kantong plastik.
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">2. Daur Ulang Plastik</h4>
              <p className="text-gray-600 leading-relaxed">
                Setorkan sampah plastik ke bank sampah terdekat. Plastik yang didaur ulang dapat menjadi bahan baku produk baru yang bermanfaat.
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">3. Ikut Bersih-Bersih Pantai</h4>
              <p className="text-gray-600 leading-relaxed">
                Bergabunglah dengan komunitas yang mengadakan kegiatan bersih-bih pantai. Kontribusi kecil kita sangat berarti bagi kebersihan laut.
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">4. Edukasi dan Sosialisasi</h4>
              <p className="text-gray-600 leading-relaxed">
                Sebarkan informasi tentang bahaya sampah plastik kepada keluarga, teman, dan masyarakat sekitar. Kesadaran kolektif adalah kunci perubahan.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-blue-800 mb-2">Mari Selamatkan Laut Kita!</h4>
            <p className="text-gray-600 leading-relaxed">
              Setiap tindakan kecil yang kita lakukan memiliki dampak besar. Dengan mengurangi penggunaan plastik dan mendaur ulang sampah, kita dapat membantu menjaga kelestarian laut untuk generasi mendatang. Mulai dari diri sendiri, mulai dari sekarang!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2026 Bank Sampah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
