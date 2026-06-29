"use client";

import { useState } from "react";

export default function ProfilPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nama: "Siti Rahayu",
    email: "siti.rahayu@email.com",
    telepon: "081234567890",
    alamat: "Jl. Merdeka No. 123, Kel. Sukamaju, Kota Bandung",
    tanggalGabung: "15 Januari 2026",
  });

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Profil Tersimpan!</h3>
            <p className="text-gray-500">Data profil Anda telah berhasil diperbarui.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
        <p className="text-gray-500 mt-1">Kelola informasi akun Anda</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-white">SR</span>
            </div>
            <div className="text-center sm:text-left text-white">
              <h2 className="text-2xl font-bold">{formData.nama}</h2>
              <p className="text-white/80">{formData.email}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Nasabah Aktif</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Sejak {formData.tanggalGabung}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Informasi Pribadi</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isEditing
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-green-50 text-green-600 hover:bg-green-100"
              }`}
            >
              {isEditing ? "Batal" : "Edit"}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Nama Lengkap</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.nama}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Telepon</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.telepon}
                  onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.telepon}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Alamat</label>
              {isEditing ? (
                <textarea
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.alamat}</div>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-3 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition-all"
              >
                Simpan Perubahan
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Statistik */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Statistik Aktivitas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600">15</div>
            <div className="text-sm text-gray-500">Total Transaksi</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">248 kg</div>
            <div className="text-sm text-gray-500">Total Setoran</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">Rp 1.25jt</div>
            <div className="text-sm text-gray-500">Total Saldo</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-orange-600">5 bulan</div>
            <div className="text-sm text-gray-500">Bergabung</div>
          </div>
        </div>
      </div>

      {/* Pengaturan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Pengaturan Akun</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Ubah Password</div>
                <div className="text-sm text-gray-500">Perbarui password akun Anda</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Notifikasi</div>
                <div className="text-sm text-gray-500">Atur pemberitahuan</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-red-600">Keluar</div>
                <div className="text-sm text-red-500">Keluar dari akun Anda</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
