import Link from "next/link";

export const metadata = {
  title: "Data Pengelolaan Sampah di Indonesia - Bank Sampah",
  description: "Analisis data terkini tentang volume sampah, tingkat daur ulang, dan tantangan pengelolaan sampah di Indonesia.",
};

export default function DataPengelolaanSampahIndonesia() {
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
            Statistik
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Pengelolaan Sampah di Indonesia
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              6 menit baca
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
        <div className="h-64 md:h-80 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
          <svg className="w-32 h-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Indonesia menghadapi tantangan besar dalam pengelolaan sampah. Dengan populasi lebih dari 270 juta jiwa, volume sampah yang dihasilkan setiap tahun terus meningkat. Artikel ini menyajikan data dan statistik terkini tentang pengelolaan sampah di Indonesia.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Volume Sampah Nasional</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Berdasarkan data Kementerian Lingkungan Hidup dan Kehutanan (KLHK), berikut adalah data volume sampah nasional:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Tahun</th>
                  <th className="px-4 py-3 text-left">Volume Sampah (juta ton/tahun)</th>
                  <th className="px-4 py-3 text-left">Sampah per Kapita (kg/hari)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3">2020</td>
                  <td className="px-4 py-3">68.5</td>
                  <td className="px-4 py-3">0.70</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">2021</td>
                  <td className="px-4 py-3">69.2</td>
                  <td className="px-4 py-3">0.71</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">2022</td>
                  <td className="px-4 py-3">70.1</td>
                  <td className="px-4 py-3">0.72</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">2023</td>
                  <td className="px-4 py-3">71.0</td>
                  <td className="px-4 py-3">0.73</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Komposisi Sampah</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Komposisi sampah di Indonesia didominasi oleh sampah organik:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">56%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sampah Organik</div>
                  <div className="text-sm text-gray-600">Sisa makanan, kulit buah, daun</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">18%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Plastik</div>
                  <div className="text-sm text-gray-600">Botol, kantong, wadah makanan</div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">12%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Kertas & Kardus</div>
                  <div className="text-sm text-gray-600">Koran, majalah, kardus bekas</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">14%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Lainnya</div>
                  <div className="text-sm text-gray-600">Logam, kaca, kain, campuran</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tingkat Daur Ulang</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Meskipun jumlah bank sampah terus bertambah, tingkat daur ulang di Indonesia masih relatif rendah dibandingkan negara lain:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Tingkat daur ulang nasional: sekitar 10-12%</li>
            <li>Jumlah bank sampah: lebih dari 12.000 unit (2024)</li>
            <li>Volume sampah yang didaur ulang: sekitar 7-8 juta ton/tahun</li>
            <li>Sampah yang berakhir di TPA: sekitar 60-65%</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tantangan Utama</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">1. Keterbatasan Infrastruktur</h4>
              <p className="text-gray-600 leading-relaxed">
                Banyak daerah di Indonesia yang belum memiliki fasilitas pengelolaan sampah yang memadai, termasuk tempat pembuangan akhir (TPA) yang representatif.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">2. Kurangnya Kesadaran Masyarakat</h4>
              <p className="text-gray-600 leading-relaxed">
                Masih banyak masyarakat yang belum memilah sampah dari sumber dan membuang sampah sembarangan.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">3. Regulasi yang Belum Optimal</h4>
              <p className="text-gray-600 leading-relaxed">
                Implementasi regulasi pengelolaan sampah belum merata di seluruh daerah di Indonesia.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">4. Keterbatasan Anggaran</h4>
              <p className="text-gray-600 leading-relaxed">
                Pengelolaan sampah membutuhkan anggaran yang besar yang belum sepenuhnya tersedia di setiap daerah.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Program dan Inisiatif Pemerintah</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pemerintah Indonesia telah meluncurkan berbagai program untuk mengatasi masalah sampah:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li><strong>Program Indonesia Bersih 2025:</strong> Target pengurangan sampah laut sebesar 70%</li>
            <li><strong>Perpres No. 97/2017:</strong> Kebijakan nasional pengelolaan sampah</li>
            <li><strong>Gerakan Indonesia Bersih:</strong> Program sosialisasi pengelolaan sampah</li>
            <li><strong>Dukungan Bank Sampah:</strong> Pembinaan dan pendampingan bank sampah di seluruh Indonesia</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-green-800 mb-2">Kesimpulan</h4>
            <p className="text-gray-600 leading-relaxed">
              Data menunjukkan bahwa Indonesia masih memiliki tantangan besar dalam pengelolaan sampah. Namun, dengan semakin banyaknya bank sampah dan kesadaran masyarakat yang meningkat, diharapkan tingkat daur ulang akan terus meningkat. Partisipasi aktif setiap individu sangat penting untuk mewujudkan Indonesia yang bersih dan sehat.
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
