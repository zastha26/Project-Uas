import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Bank Sampah</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#beranda" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Tentang Kami</a>
              <a href="#fitur" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Fitur</a>
            </div>

            <Link
              href="/auth"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              Masuk
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Solusi Pengelolaan Sampah Modern
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pengembangan Sistem Informasi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Bank Sampah
              </span>{" "}
              Berbasis Web
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Meningkatkan Efektivitas Pengelolaan dan Monitoring Sampah melalui platform digital yang terintegrasi dan mudah digunakan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                Mulai Sekarang
              </Link>
              <a
                href="#tentang"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-gray-200 hover:border-green-200"
              >
                Pelajari Lebih Lanjut
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">500+</div>
              <div className="text-gray-500 text-sm">Nasabah Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">2.5T</div>
              <div className="text-gray-500 text-sm">Sampah Terkumpul</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">50+</div>
              <div className="text-gray-500 text-sm">Titik Pengumpulan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">98%</div>
              <div className="text-gray-500 text-sm">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Komitmen Kami untuk Lingkungan yang Lebih Bersih
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bank Sampah adalah platform digital yang hadir untuk menjembatani masyarakat dalam pengelolaan sampah secara terorganisir dan berkelanjutan. Kami percaya bahwa setiap sampah memiliki nilai dan dapat menjadi sumber daya yang bermanfaat.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Melalui sistem informasi berbasis web ini, kami memudahkan proses pengelolaan sampah mulai dari pengumpulan, pencatatan transaksi, hingga monitoring secara real-time.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Terpercaya & Transparan</div>
                  <div className="text-sm text-gray-500">Data tercatat secara digital</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <div className="text-2xl font-bold">Hijau</div>
                    <div className="text-sm text-white/80">Masa Depan</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                    <div className="text-2xl font-bold">Daur Ulang</div>
                    <div className="text-sm text-white/80">Berkelanjutan</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                    <div className="text-2xl font-bold">Monitoring</div>
                    <div className="text-sm text-white/80">Real-time</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className="text-2xl font-bold">Transaksi</div>
                    <div className="text-sm text-white/80">Mudah & Aman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Fitur Unggulan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kemudahan dalam Genggaman
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform lengkap untuk mengelola bank sampah dengan fitur modern yang memudahkan setiap proses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pencatatan Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                Catat setiap transaksi sampah secara digital dengan mudah dan akurat. Data tersimpan aman dan dapat diakses kapan saja.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring Real-time</h3>
              <p className="text-gray-600 leading-relaxed">
                Pantau perkembangan pengelolaan sampah secara real-time. Laporan dan grafik interaktif membantu pengambilan keputusan.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manajemen Nasabah</h3>
              <p className="text-gray-600 leading-relaxed">
                Kelola data nasabah dengan sistem yang terorganisir. Informasi lengkap dan riwayat transaksi tersedia dalam satu platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perubahan?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan masyarakat yang sudah merasakan kemudahan pengelolaan sampah bersama Bank Sampah.
          </p>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Daftar Sekarang
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-white font-bold">Bank Sampah</span>
            </div>
            <p className="text-sm">
              &copy; 2026 Bank Sampah. Tugas UAS - Sistem Informasi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
