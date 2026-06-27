import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 block leading-tight">Bank Sampah</span>
                <span className="text-[10px] text-green-600 font-medium tracking-wide">SISTEM INFORMASI</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#beranda" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Tentang Kami</a>
              <a href="#visi-misi" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Visi & Misi</a>
              <a href="#edukasi" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Edukasi</a>
              <a href="#harga" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Harga Sampah</a>
              <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors font-medium">FAQ</a>
              <a href="#kontak" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Kontak</a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth" className="hidden sm:inline-flex bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-green-500/25">
                Masuk
              </Link>
              <Link href="/auth" className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full font-medium transition-all hover:shadow-lg">
                Daftar
              </Link>
            </div>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Solusi Pengelolaan Sampah Modern
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pengembangan Sistem Informasi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Bank Sampah
                </span>{" "}
                Berbasis Web
              </h1>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Meningkatkan Efektivitas Pengelolaan dan Monitoring Sampah melalui platform digital yang terintegrasi dan mudah digunakan.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/auth" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5">
                  Mulai Sekarang
                </Link>
                <a href="#tentang" className="flex items-center gap-2 text-gray-600 hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-gray-200 hover:border-green-200">
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Ilustrasi Hero */}
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl shadow-green-500/20">
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-32 h-32 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-white/80">Nasabah</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold">2.5T</div>
                    <div className="text-xs text-white/80">Sampah</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/80">Titik</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-white/80">Puas</div>
                  </div>
                </div>
              </div>
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Komitmen Kami untuk Lingkungan yang Lebih Bersih
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bank Sampah adalah platform digital yang hadir untuk menjembatani masyarakat dalam pengelolaan sampah secara terorganisir dan berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pencatatan Digital</h3>
              <p className="text-gray-600 leading-relaxed">Catat setiap transaksi sampah secara digital dengan mudah dan akurat. Data tersimpan aman dan dapat diakses kapan saja.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring Real-time</h3>
              <p className="text-gray-600 leading-relaxed">Pantau perkembangan pengelolaan sampah secara real-time. Laporan dan grafik interaktif membantu pengambilan keputusan.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manajemen Nasabah</h3>
              <p className="text-gray-600 leading-relaxed">Kelola data nasabah dengan sistem yang terorganisir. Informasi lengkap dan riwayat transaksi tersedia dalam satu platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi-misi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Visi & Misi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arah & Tujuan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-white/90 leading-relaxed">
                Menjadi platform terdepan dalam pengelolaan sampah berbasis web yang mendukung masyarakat Indonesia dalam mewujudkan lingkungan yang bersih, sehat, dan berkelanjutan melalui teknologi digital yang inovatif.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Menyediakan platform digital yang mudah digunakan untuk pengelolaan sampah</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Meningkatkan kesadaran masyarakat tentang pentingnya daur ulang sampah</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Membangun jaringan pengelolaan sampah yang terintegrasi dan transparan</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Memberikan manfaat ekonomi kepada masyarakat melalui pengelolaan sampah yang efisien</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Sistem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Tujuan Sistem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa yang Ingin Kami Capai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Manajemen Nasabah</h4>
              <p className="text-sm text-gray-500">Mengelola data nasabah secara efisien dan terorganisir</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Daur Ulang</h4>
              <p className="text-sm text-gray-500">Mendorong pengelolaan sampah yang berkelanjutan</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Monitoring</h4>
              <p className="text-sm text-gray-500">Pantau data pengelolaan sampah secara real-time</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Transaksi</h4>
              <p className="text-sm text-gray-500">Kemudahan transaksi setoran dan pengambilan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Testimoni
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kata Mereka tentang Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Sangat membantu! Sejak menggunakan Bank Sampah, saya bisa memantau setoran sampah setiap hari. Pengelolaannya jadi lebih mudah dan transparan.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Siti Rahayu</div>
                  <div className="text-sm text-gray-500">Nasabah aktif</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Platform ini benar-benar membantu kami mengelola bank sampah di kelurahan. Laporan otomatis membuat pekerjaan jadi lebih efisien.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">BW</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Budi Wahyudi</div>
                  <div className="text-sm text-gray-500">Ketua RT 05</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Sebagai pengelola, sistem ini sangat membantu dalam melacak volume sampah dan memberikan laporan kepada pemerintah daerah.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">AP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Andi Pratama</div>
                  <div className="text-sm text-gray-500">Pengelola Bank Sampah</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra / Kerja Sama */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Mitra & Kerja Sama
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dipercaya oleh Berbagai Pihak
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menjalin kerja sama dengan berbagai pihak untuk mewujudkan pengelolaan sampah yang lebih baik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Pemerintah</div>
                <div className="text-xs text-gray-500">Daerah</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Universitas</div>
                <div className="text-xs text-gray-500">Negeri</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Perusahaan</div>
                <div className="text-xs text-gray-500">BUMN & Swasta</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Komunitas</div>
                <div className="text-xs text-gray-500">Lingkungan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edukasi */}
      <section id="edukasi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Edukasi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artikel Pengelolaan Sampah & Tips Daur Ulang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tingkatkan pengetahuan Anda tentang pengelolaan sampah yang benar dan temukan tips daur ulang yang bermanfaat.
            </p>
          </div>

          {/* Artikel Pengelolaan Sampah */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Artikel Pengelolaan Sampah
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs text-green-600 font-medium mb-2">Panduan</div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Panduan Pemilahan Sampah di Rumah</h4>
                  <p className="text-sm text-gray-600 mb-4">Pelajari cara memilah sampah organik dan anorganik dengan benar di rumah Anda. Mulai dari tempat sampah hingga cara penyimpanannya.</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    5 menit baca
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs text-green-600 font-medium mb-2">Lingkungan</div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Dampak Sampah Plastik terhadap Laut</h4>
                  <p className="text-sm text-gray-600 mb-4">Mengetahui bahaya sampah plastik bagi ekosistem laut dan bagaimana kita bisa mengurangi penggunaan plastik sekali pakai.</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    7 menit baca
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs text-green-600 font-medium mb-2">Statistik</div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Data Pengelolaan Sampah di Indonesia</h4>
                  <p className="text-sm text-gray-600 mb-4">Analisis data terkini tentang volume sampah, tingkat daur ulang, dantantangan pengelolaan sampah di Indonesia.</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    6 menit baca
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Daur Ulang */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              Tips Daur Ulang
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Botol Plastik Jadi Pot Tanaman</h4>
                    <p className="text-sm text-gray-600">Potong botol plastik bekas menjadi dua bagian. Bagian bawah bisa digunakan sebagai pot tanaman hias. Lubangi bagian bawah untuk drainase, isi dengan tanah, dan tanam tanaman favorit Anda.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Kardus Bekas jadi Organizer</h4>
                    <p className="text-sm text-gray-600">Kardus bekas bisa dijadikan organizer meja atau penyimpanan. Potong dan susun kardus sesuai kebutuhan, lalu bungkus dengan kertas warna atau kain bekas agar lebih menarik.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Kaos Bekas Jadi Tas Tote Bag</h4>
                    <p className="text-sm text-gray-600">Kaos bekas yang sudah tidak terpakai bisa dijadikan tas belanja. Potong bagian lengan dan leher, jahit bagian bawah, dan Anda mendapatkan tote bag unik tanpa mesin jahit.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sampah Organik Jadi Pupuk Kompos</h4>
                    <p className="text-sm text-gray-600">Sisa makanan dan sampah organik bisa dikomposkan. Kumpulkan sisa sayuran, kulit buah, dan daun kering dalam wadah tertutup. Dalam 2-3 bulan akan menjadi pupuk alami yang subur.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Kertas Bekas Jadi Kerajinan Tangan</h4>
                    <p className="text-sm text-gray-600">Kertas bekas bisa diolah menjadi berbagai kerajinan seperti bunga kertas, tempat pensil, atau hiasan dinding. Cukup gulung, lipat, atau potong kertas sesuai kreativitas Anda.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Lilin Sisa Jadi Lilin Baru</h4>
                    <p className="text-sm text-gray-600">Sisa lilin yang sudah habis bisa dilelehkan dan dicetak ulang menjadi lilin baru. Tambahkan minyak esensial untuk aroma wangi, dan gunakan wadah bekas sebagai cetakan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harga Sampah */}
      <section id="harga" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Harga Sampah
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daftar Harga Setoran Sampah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Harga berlaku per kilogram. Harga dapat berubah sewaktu-waktu sesuai kondisi pasar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plastik */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Plastik</h4>
                  <span className="text-xs text-gray-500">Per Kilogram</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Plastik PET (Botol)</span>
                  <span className="font-bold text-green-600">Rp 1.500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Plastik HDPE</span>
                  <span className="font-bold text-green-600">Rp 1.200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Plastik PP</span>
                  <span className="font-bold text-green-600">Rp 800</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Plastik Campur</span>
                  <span className="font-bold text-green-600">Rp 500</span>
                </div>
              </div>
            </div>

            {/* Kertas */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kertas</h4>
                  <span className="text-xs text-gray-500">Per Kilogram</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kertas Koran</span>
                  <span className="font-bold text-green-600">Rp 800</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kertas HVS</span>
                  <span className="font-bold text-green-600">Rp 1.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kardus</span>
                  <span className="font-bold text-green-600">Rp 700</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Kertas Campur</span>
                  <span className="font-bold text-green-600">Rp 400</span>
                </div>
              </div>
            </div>

            {/* Logam */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Logam</h4>
                  <span className="text-xs text-gray-500">Per Kilogram</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kaleng Aluminium</span>
                  <span className="font-bold text-green-600">Rp 10.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Tembaga</span>
                  <span className="font-bold text-green-600">Rp 45.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Besi</span>
                  <span className="font-bold text-green-600">Rp 2.500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Kaleng Seng</span>
                  <span className="font-bold text-green-600">Rp 1.800</span>
                </div>
              </div>
            </div>

            {/* Kaca */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kaca</h4>
                  <span className="text-xs text-gray-500">Per Kilogram</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Botol Kaca Bening</span>
                  <span className="font-bold text-green-600">Rp 500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Botol Kaca Warna</span>
                  <span className="font-bold text-green-600">Rp 400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Pecahan Kaca</span>
                  <span className="font-bold text-green-600">Rp 200</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Kaca Cermin</span>
                  <span className="font-bold text-green-600">Rp 300</span>
                </div>
              </div>
            </div>

            {/* Elektronik */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.41A2.25 2.25 0 012.25 5.495V5.25" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Elektronik</h4>
                  <span className="text-xs text-gray-500">Per Unit</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">HP/Laptop Bekas</span>
                  <span className="font-bold text-green-600">Rp 50.000+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Baterai Bekas</span>
                  <span className="font-bold text-green-600">Rp 5.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kabel/Kawat</span>
                  <span className="font-bold text-green-600">Rp 8.000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Charger Bekas</span>
                  <span className="font-bold text-green-600">Rp 3.000</span>
                </div>
              </div>
            </div>

            {/* Kain & Tekstil */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kain & Tekstil</h4>
                  <span className="text-xs text-gray-500">Per Kilogram</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Kaos/Cotton</span>
                  <span className="font-bold text-green-600">Rp 1.500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Denim/Jins</span>
                  <span className="font-bold text-green-600">Rp 2.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Serat Campur</span>
                  <span className="font-bold text-green-600">Rp 800</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Kain Bekas Bersih</span>
                  <span className="font-bold text-green-600">Rp 1.000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Catatan Penting</h4>
                <p className="text-sm text-gray-600">Harga di atas merupakan harga perkiraan dan dapat berubah sewaktu-waktu sesuai kondisi pasar. Sampah harus dalam kondisi bersih dan kering untuk mendapatkan harga terbaik. Hubungi Bank Sampah terdekat untuk informasi harga terkini.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Apa itu Bank Sampah?</h4>
              <p className="text-gray-600">Bank Sampah adalah tempat penampungan sampah yang dikelola oleh masyarakat. Warga dapat menyetorkan sampah yang sudah dipilah dan akan mendapatkan uang atau poin sebagai imbalan.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Bagaimana cara mendaftar sebagai nasabah?</h4>
              <p className="text-gray-600">Anda dapat mendaftar secara online melalui website kami atau datang langsung ke Bank Sampah terdekat. Cukup siapkan KTP dan nomor telepon yang aktif.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Jenis sampah apa yang bisa disetorkan?</h4>
              <p className="text-gray-600">Kami menerima berbagai jenis sampah anorganik seperti plastik, kertas, logam, kaca, dan elektronik bekas. Sampah harus dalam kondisi bersih dan kering.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Bagaimana sistem pembayarannya?</h4>
              <p className="text-gray-600">Setiap setoran akan dicatat secara digital dan dikonversi menjadi saldo. Saldo dapat ditarik tunai melalui Bank Sampah atau digunakan untuk berbelanja di mitra kami.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Apakah data saya aman?</h4>
              <p className="text-gray-600">Tentu. Kami menggunakan sistem keamanan digital yang terenkripsi untuk melindungi data pribadi dan transaksi seluruh nasabah.</p>
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
          <Link href="/auth" className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Daftar Sekarang
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Kontak & Alamat */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Hubungi Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Alamat</h4>
              <p className="text-sm text-gray-600">Jl. Lingkungan Hijau No. 12<br />Kelurahan Sukamaju<br />Kota Bandung, Jawa Barat 40123</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
              <p className="text-sm text-gray-600">+62 22 1234 5678<br />+62 812 3456 7890<br />Senin - Sabtu: 08.00 - 16.00</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-sm text-gray-600">info@banksampah.id<br />layanan@banksampah.id<br />admin@banksampah.id</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold text-lg block leading-tight">Bank Sampah</span>
                  <span className="text-[10px] text-green-400 font-medium tracking-wide">SISTEM INFORMASI</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Platform digital untuk pengelolaan sampah yang terintegrasi, mudah, dan berkelanjutan.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#beranda" className="hover:text-green-400 transition-colors text-sm">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-green-400 transition-colors text-sm">Tentang Kami</a></li>
                <li><a href="#visi-misi" className="hover:text-green-400 transition-colors text-sm">Visi & Misi</a></li>
                <li><a href="#edukasi" className="hover:text-green-400 transition-colors text-sm">Edukasi</a></li>
                <li><a href="#harga" className="hover:text-green-400 transition-colors text-sm">Harga Sampah</a></li>
                <li><a href="#faq" className="hover:text-green-400 transition-colors text-sm">FAQ</a></li>
                <li><a href="#kontak" className="hover:text-green-400 transition-colors text-sm">Kontak</a></li>
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="text-white font-bold mb-4">Layanan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-green-400 transition-colors text-sm">Pendaftaran Nasabah</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors text-sm">Setor Sampah</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors text-sm">Cek Saldo</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors text-sm">Laporan</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors text-sm">Bantuan</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Dapatkan informasi terbaru seputar Bank Sampah.</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500" />
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg font-medium text-sm transition-colors">
                  Kirim
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-white font-bold">Bank Sampah</span>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm">
                  &copy; 2026 Bank Sampah. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                  Pengembangan Sistem Informasi Bank Sampah Berbasis Web untuk Meningkatkan Efektivitas Pengelolaan dan Monitoring Sampah
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="hover:text-green-400 transition-colors">Kebijakan Privasi</a>
                <a href="#" className="hover:text-green-400 transition-colors">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
