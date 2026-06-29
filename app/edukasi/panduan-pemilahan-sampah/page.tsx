import Link from "next/link";

export const metadata = {
  title: "Panduan Pemilahan Sampah di Rumah - Bank Sampah",
  description: "Pelajari cara memilah sampah organik dan anorganik dengan benar di rumah Anda.",
};

export default function PanduanPemilahanSampah() {
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
            Panduan
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Panduan Pemilahan Sampah di Rumah
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5 menit baca
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
        <div className="h-64 md:h-80 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-8">
          <svg className="w-32 h-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Pemilahan sampah di rumah adalah langkah pertama yang sangat penting dalam pengelolaan sampah yang benar. Dengan memilah sampah sejak dari sumber, kita dapat membantu mengurangi jumlah sampah yang berakhir di tempat pembuangan akhir (TPA) dan mendukung program daur ulang.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Pemilahan Sampah Penting?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pemilahan sampah memiliki beberapa manfaat penting:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Mempermudah proses daur ulang</li>
            <li>Mengurangi volume sampah yang masuk ke TPA</li>
            <li>Mengurangi pencemaran lingkungan</li>
            <li>Menghemat sumber daya alam</li>
            <li>Menciptakan nilai ekonomi dari sampah</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jenis-Jenis Sampah</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Sampah Organik</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sampah organik adalah sampah yang berasal dari makhluk hidup dan dapat terurai secara alami. Contoh sampah organik meliputi:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Sisa makanan dan buah-buahan</li>
            <li>Kulit sayuran dan buah</li>
            <li>Sisa teh dan kopi</li>
            <li>Daun kering dan ranting</li>
            <li>Kertas dan karton (tergantung jenisnya)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Sampah Anorganik</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sampah anorganik adalah sampah yang tidak mudah terurai dan biasanya berasal dari bahan-bahan sintetis. Contoh sampah anorganik meliputi:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Plastik (botol, kantong, wadah)</li>
            <li>Kaleng aluminium dan besi</li>
            <li>Kaca dan pecahan kaca</li>
            <li>Logam lainnya</li>
            <li>Kain dan tekstil sintetis</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cara Memilah Sampah di Rumah</h2>
          
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-green-800 mb-3">Langkah 1: Siapkan Tempat Sampah</h4>
            <p className="text-gray-600 leading-relaxed">
              Sediakan minimal 2 tempat sampah terpisah: satu untuk sampah organik dan satu lagi untuk sampah anorganik. Gunakan warna yang berbeda untuk memudahkan identifikasi (misalnya: hijau untuk organik, kuning untuk anorganik).
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-green-800 mb-3">Langkah 2: Pisahkan Sampah Basah dan Kering</h4>
            <p className="text-gray-600 leading-relaxed">
              Pastikan sampah organik yang basah dipisahkan dari sampah anorganik yang kering. Sampah basah seperti sisa makanan harus segera dikomposkan atau dibuang ke tempat yang tepat.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-green-800 mb-3">Langkah 3: Bersihkan Sampah Sebelum Dibuang</h4>
            <p className="text-gray-600 leading-relaxed">
              Bilas wadah plastik dan kaleng sebelum dibuang. Sampah yang bersih memiliki nilai jual lebih tinggi di bank sampah dan lebih mudah didaur ulang.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-green-800 mb-3">Langkah 4: Kumpulkan dan Setorkan ke Bank Sampah</h4>
            <p className="text-gray-600 leading-relaxed">
              Kumpulkan sampah anorganik yang sudah dipilah dan setorkan ke bank sampah terdekat. Anda akan mendapatkan saldo yang bisa dicairkan atau ditukar dengan barang kebutuhan sehari-hari.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips Tambahan</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Mulai dari yang sederhana: pilah plastik, kertas, dan logam terlebih dahulu</li>
            <li>Ajarkan anak-anak sejak dini tentang pentingnya memilah sampah</li>
            <li>Gunakan kembali wadah yang masih layak pakai</li>
            <li>Kurangi penggunaan plastik sekali pakai</li>
            <li>Beli barang dalam kemasan besar untuk mengurangi sampah</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-green-800 mb-2">Kesimpulan</h4>
            <p className="text-gray-600 leading-relaxed">
              Pemilahan sampah di rumah adalah kebiasaan sederhana yang memberikan dampak besar bagi lingkungan. Dengan memilah sampah dengan benar, kita tidak hanya mengurangi pencemaran lingkungan tetapi juga membantu menciptakan nilai ekonomi dari sampah. Mari mulai dari rumah kita masing-masing!
            </p>
          </div>
        </div>

        {/* Share & Navigation */}
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
