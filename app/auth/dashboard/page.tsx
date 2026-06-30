"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JENIS_SAMPAH = ["Plastik", "Kertas", "Kaca", "Logam", "Elektronik", "Organik", "Lainnya"];
const BANK_LIST = ["BCA", "Mandiri", "BRI", "BNI", "CIMB Niaga", "Lainnya"];

const initialUserData = {
  nama: "Ahmad Fauzi",
  email: "ahmad@email.com",
  telepon: "081234567890",
  alamat: "Jl. Mawar No. 10, Jakarta Selatan",
  saldo: 245000,
};

const initialRiwayat = [
  { id: 1, tanggal: "2026-06-28", jenis: "Plastik", berat: 5.2, nominal: 15600 },
  { id: 2, tanggal: "2026-06-25", jenis: "Kertas", berat: 3.0, nominal: 9000 },
  { id: 3, tanggal: "2026-06-20", jenis: "Logam", berat: 2.5, nominal: 12500 },
  { id: 4, tanggal: "2026-06-15", jenis: "Plastik", berat: 8.0, nominal: 24000 },
  { id: 5, tanggal: "2026-06-10", jenis: "Kaca", berat: 4.0, nominal: 8000 },
  { id: 6, tanggal: "2026-06-05", jenis: "Organik", berat: 10.0, nominal: 15000 },
  { id: 7, tanggal: "2026-06-01", jenis: "Elektronik", berat: 1.5, nominal: 22500 },
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("profil");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userData, setUserData] = useState(initialUserData);
  const [editingProfile, setEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({ nama: userData.nama, telepon: userData.telepon, alamat: userData.alamat });

  const [riwayat] = useState(initialRiwayat);
  const [searchRiwayat, setSearchRiwayat] = useState("");

  const [setorForm, setSetorForm] = useState({ jenis: "", berat: "", deskripsi: "", foto: null as File | null, lokasi: "" });
  const [setorSuccess, setSetorSuccess] = useState(false);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);

  const [tarikForm, setTarikForm] = useState({ jumlah: "", bank: "", rekening: "", namaRekening: "" });
  const [tarikSuccess, setTarikSuccess] = useState(false);
  const [tarikError, setTarikError] = useState("");

  const handleLogout = () => {
    router.push("/auth/dashboard");
  };

  const handleSaveProfile = () => {
    setUserData({ ...userData, ...editForm });
    setEditingProfile(false);
  };

  const handleSetorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!setorForm.jenis || !setorForm.berat) return;
    const beratNum = parseFloat(setorForm.berat);
    const hargaPerKg: Record<string, number> = {
      Plastik: 3000, Kertas: 3000, Kaca: 2000, Logam: 5000,
      Elektronik: 15000, Organik: 1500, Lainnya: 1000,
    };
    const nominal = beratNum * (hargaPerKg[setorForm.jenis] || 1000);
    setUserData({ ...userData, saldo: userData.saldo + nominal });
    setSetorForm({ jenis: "", berat: "", deskripsi: "", foto: null, lokasi: "" });
    setFotoPreview(null);
    setSetorSuccess(true);
    setTimeout(() => setSetorSuccess(false), 3000);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSetorForm({ ...setorForm, foto: file });
      const reader = new FileReader();
      reader.onload = (ev) => setFotoPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleTarikSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTarikError("");
    setTarikSuccess(false);
    const jumlah = parseInt(tarikForm.jumlah);
    if (!jumlah || jumlah <= 0) {
      setTarikError("Jumlah penarikan tidak valid");
      return;
    }
    if (jumlah > userData.saldo) {
      setTarikError("Jumlah penarikan melebihi saldo");
      return;
    }
    if (!tarikForm.bank || !tarikForm.rekening || !tarikForm.namaRekening) {
      setTarikError("Semua field harus diisi");
      return;
    }
    setUserData({ ...userData, saldo: userData.saldo - jumlah });
    setTarikForm({ jumlah: "", bank: "", rekening: "", namaRekening: "" });
    setTarikSuccess(true);
    setTimeout(() => setTarikSuccess(false), 3000);
  };

  const filteredRiwayat = riwayat.filter((r) =>
    r.jenis.toLowerCase().includes(searchRiwayat.toLowerCase()) ||
    r.tanggal.includes(searchRiwayat)
  );

  const formatRupiah = (angka: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);

  const menuItems = [
    { id: "profil", label: "Profil", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> },
    { id: "setor", label: "Setor Sampah", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
    { id: "riwayat", label: "Riwayat", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "saldo", label: "Saldo", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg> },
    { id: "tarik", label: "Penarikan Saldo", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg> },
  ];

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen flex bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Bank Sampah</h1>
              <p className="text-xs text-gray-500">Dashboard Nasabah</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveMenu(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeMenu === item.id
                  ? "bg-green-50 text-green-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Keluar
          </button>
        </div>
      </aside>

      <main className="flex-1 min-h-screen">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{userData.nama}</p>
              <p className="text-xs text-gray-500">{userData.email}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-700 font-semibold">{userData.nama.charAt(0)}</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeMenu === "profil" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profil Saya</h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-700">{userData.nama.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{userData.nama}</h3>
                    <p className="text-gray-500">{userData.email}</p>
                  </div>
                </div>

                {!editingProfile ? (
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Telepon</span>
                      <span className="font-medium text-gray-900">{userData.telepon}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Alamat</span>
                      <span className="font-medium text-gray-900 text-right max-w-xs">{userData.alamat}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-500">Saldo</span>
                      <span className="font-bold text-green-600">{formatRupiah(userData.saldo)}</span>
                    </div>
                    <button
                      onClick={() => { setEditForm({ nama: userData.nama, telepon: userData.telepon, alamat: userData.alamat }); setEditingProfile(true); }}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all"
                    >
                      Edit Profil
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Nama Lengkap</label>
                      <input type="text" value={editForm.nama} onChange={(e) => setEditForm({ ...editForm, nama: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Telepon</label>
                      <input type="text" value={editForm.telepon} onChange={(e) => setEditForm({ ...editForm, telepon: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Alamat</label>
                      <textarea value={editForm.alamat} onChange={(e) => setEditForm({ ...editForm, alamat: e.target.value })} className={inputClass} rows={3} />
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setEditingProfile(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-all">
                        Batal
                      </button>
                      <button onClick={handleSaveProfile} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all">
                        Simpan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeMenu === "setor" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Setor Sampah</h2>

              {setorSuccess && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Setoran berhasil dikirim! Saldo Anda telah bertambah.
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <form className="space-y-5" onSubmit={handleSetorSubmit}>
                  <div>
                    <label className={labelClass}>Jenis Sampah</label>
                    <select value={setorForm.jenis} onChange={(e) => setSetorForm({ ...setorForm, jenis: e.target.value })} className={inputClass} required>
                      <option value="">Pilih jenis sampah</option>
                      {JENIS_SAMPAH.map((j) => (
                        <option key={j} value={j}>{j}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Berat (kg)</label>
                    <input type="number" step="0.1" min="0" placeholder="Masukkan berat sampah" value={setorForm.berat} onChange={(e) => setSetorForm({ ...setorForm, berat: e.target.value })} className={inputClass} required />
                  </div>

                  <div>
                    <label className={labelClass}>Deskripsi</label>
                    <textarea placeholder="Deskripsi kondisi sampah..." value={setorForm.deskripsi} onChange={(e) => setSetorForm({ ...setorForm, deskripsi: e.target.value })} className={inputClass} rows={3} />
                  </div>

                  <div>
                    <label className={labelClass}>Foto Sampah</label>
                    <div className="flex items-center gap-4">
                      <label className="flex-1 flex items-center justify-center px-4 py-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-400 transition-colors">
                        <input type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
                        {fotoPreview ? (
                          <img src={fotoPreview} alt="Preview" className="max-h-32 rounded-lg" />
                        ) : (
                          <div className="text-center">
                            <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                            </svg>
                            <p className="text-sm text-gray-500">Klik untuk upload foto</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Lokasi Penjemputan</label>
                    <input type="text" placeholder="Alamat penjemputan" value={setorForm.lokasi} onChange={(e) => setSetorForm({ ...setorForm, lokasi: e.target.value })} className={inputClass} />
                  </div>

                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25">
                    Kirim Setoran
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeMenu === "riwayat" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Riwayat Transaksi</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <input type="text" placeholder="Cari berdasarkan jenis atau tanggal..." value={searchRiwayat} onChange={(e) => setSearchRiwayat(e.target.value)} className="w-full md:w-96 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">No</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Tanggal</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Jenis Sampah</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Berat (kg)</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Nominal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRiwayat.map((item, idx) => (
                        <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-600">{idx + 1}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{item.tanggal}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              item.jenis === "Plastik" ? "bg-blue-100 text-blue-700" :
                              item.jenis === "Kertas" ? "bg-yellow-100 text-yellow-700" :
                              item.jenis === "Kaca" ? "bg-purple-100 text-purple-700" :
                              item.jenis === "Logam" ? "bg-gray-100 text-gray-700" :
                              item.jenis === "Elektronik" ? "bg-red-100 text-red-700" :
                              item.jenis === "Organik" ? "bg-green-100 text-green-700" :
                              "bg-gray-100 text-gray-700"
                            }`}>
                              {item.jenis}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{item.berat}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-green-600">{formatRupiah(item.nominal)}</td>
                        </tr>
                      ))}
                      {filteredRiwayat.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                            Tidak ada data transaksi
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "saldo" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Saldo Saya</h2>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-6">
                <p className="text-sm text-white/80 mb-1">Saldo Tersedia</p>
                <p className="text-4xl font-bold">{formatRupiah(userData.saldo)}</p>
                <div className="flex gap-6 mt-6">
                  <div className="bg-white/20 rounded-xl px-4 py-3">
                    <p className="text-xs text-white/80">Total Setoran</p>
                    <p className="font-bold">{riwayat.length}x</p>
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-3">
                    <p className="text-xs text-white/80">Total Berat</p>
                    <p className="font-bold">{riwayat.reduce((a, b) => a + b.berat, 0).toFixed(1)} kg</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Transaksi Terakhir</h3>
                <div className="space-y-3">
                  {riwayat.slice(0, 5).map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.jenis} - {item.berat} kg</p>
                          <p className="text-xs text-gray-500">{item.tanggal}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-green-600">+{formatRupiah(item.nominal)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMenu === "tarik" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Penarikan Saldo</h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <p className="text-sm text-gray-500 mb-1">Saldo Tersedia</p>
                <p className="text-3xl font-bold text-green-600">{formatRupiah(userData.saldo)}</p>
              </div>

              {tarikSuccess && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Penarikan berhasil diajukan! Dana akan dikirim dalam 1-2 hari kerja.
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Form Penarikan</h3>
                <form className="space-y-5" onSubmit={handleTarikSubmit}>
                  {tarikError && (
                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-200">
                      {tarikError}
                    </div>
                  )}

                  <div>
                    <label className={labelClass}>Jumlah Penarikan (Rp)</label>
                    <input type="number" min="10000" step="1000" placeholder="Masukkan jumlah penarikan" value={tarikForm.jumlah} onChange={(e) => setTarikForm({ ...tarikForm, jumlah: e.target.value })} className={inputClass} required />
                    <p className="text-xs text-gray-500 mt-1">Minimum penarikan Rp10.000</p>
                  </div>

                  <div>
                    <label className={labelClass}>Nama Bank</label>
                    <select value={tarikForm.bank} onChange={(e) => setTarikForm({ ...tarikForm, bank: e.target.value })} className={inputClass} required>
                      <option value="">Pilih bank</option>
                      {BANK_LIST.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Nomor Rekening</label>
                    <input type="text" placeholder="Masukkan nomor rekening" value={tarikForm.rekening} onChange={(e) => setTarikForm({ ...tarikForm, rekening: e.target.value })} className={inputClass} required />
                  </div>

                  <div>
                    <label className={labelClass}>Nama Pemilik Rekening</label>
                    <input type="text" placeholder="Sesuai nama di rekening" value={tarikForm.namaRekening} onChange={(e) => setTarikForm({ ...tarikForm, namaRekening: e.target.value })} className={inputClass} required />
                  </div>

                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25">
                    Ajukan Penarikan
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
