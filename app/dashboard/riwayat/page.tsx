"use client";

import { useState } from "react";

const riwayatData = [
  {
    id: 1,
    tanggal: "28 Juni 2026",
    items: [
      { nama: "Plastik PET", berat: 15, harga: 1500, subtotal: 22500 },
      { nama: "Kertas HVS", berat: 8, harga: 1000, subtotal: 8000 },
    ],
    total: 30500,
    status: "selesai",
  },
  {
    id: 2,
    tanggal: "25 Juni 2026",
    items: [
      { nama: "Kaleng Aluminium", berat: 3, harga: 10000, subtotal: 30000 },
    ],
    total: 30000,
    status: "selesai",
  },
  {
    id: 3,
    tanggal: "22 Juni 2026",
    items: [
      { nama: "Botol Kaca Bening", berat: 10, harga: 500, subtotal: 5000 },
      { nama: "Kardus", berat: 5, harga: 700, subtotal: 3500 },
    ],
    total: 8500,
    status: "selesai",
  },
  {
    id: 4,
    tanggal: "20 Juni 2026",
    items: [
      { nama: "Plastik HDPE", berat: 12, harga: 1200, subtotal: 14400 },
      { nama: "Kertas Koran", berat: 8, harga: 800, subtotal: 6400 },
    ],
    total: 20800,
    status: "selesai",
  },
  {
    id: 5,
    tanggal: "18 Juni 2026",
    items: [
      { nama: "Penarikan Saldo", berat: 0, harga: 0, subtotal: -500000 },
    ],
    total: -500000,
    status: "selesai",
    isPenarikan: true,
  },
  {
    id: 6,
    tanggal: "15 Juni 2026",
    items: [
      { nama: "Plastik PET", berat: 20, harga: 1500, subtotal: 30000 },
      { nama: "Besi", berat: 5, harga: 2500, subtotal: 12500 },
    ],
    total: 42500,
    status: "selesai",
  },
  {
    id: 7,
    tanggal: "12 Juni 2026",
    items: [
      { nama: "Tembaga", berat: 1, harga: 45000, subtotal: 45000 },
      { nama: "Kaleng Seng", berat: 4, harga: 1800, subtotal: 7200 },
    ],
    total: 52200,
    status: "selesai",
  },
  {
    id: 8,
    tanggal: "10 Juni 2026",
    items: [
      { nama: "Plastik Campur", berat: 10, harga: 500, subtotal: 5000 },
      { nama: "Kertas Campur", berat: 8, harga: 400, subtotal: 3200 },
    ],
    total: 8200,
    status: "selesai",
  },
];

export default function RiwayatPage() {
  const [filter, setFilter] = useState<"semua" | "setoran" | "penarikan">("semua");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredData = riwayatData.filter((item) => {
    if (filter === "setoran") return !item.isPenarikan;
    if (filter === "penarikan") return item.isPenarikan;
    return true;
  });

  const totalSetoran = riwayatData
    .filter((item) => !item.isPenarikan)
    .reduce((acc, item) => acc + item.total, 0);

  const totalPenarikan = riwayatData
    .filter((item) => item.isPenarikan)
    .reduce((acc, item) => acc + Math.abs(item.total), 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h1>
        <p className="text-gray-500 mt-1">Lihat semua transaksi setoran dan penarikan Anda</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Total Setoran</div>
          <div className="text-xl font-bold text-green-600">Rp {totalSetoran.toLocaleString("id-ID")}</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Total Penarikan</div>
          <div className="text-xl font-bold text-red-500">Rp {totalPenarikan.toLocaleString("id-ID")}</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Selisih</div>
          <div className="text-xl font-bold text-blue-600">
            Rp {(totalSetoran - totalPenarikan).toLocaleString("id-ID")}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("semua")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            filter === "semua"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("setoran")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            filter === "setoran"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Setoran
        </button>
        <button
          onClick={() => setFilter("penarikan")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            filter === "penarikan"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Penarikan
        </button>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.isPenarikan ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  {item.isPenarikan ? (
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 0l3-3m-3 3l3 3" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.isPenarikan ? "Penarikan Saldo" : `Setoran #${item.id}`}
                  </div>
                  <div className="text-sm text-gray-500">{item.tanggal}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`font-bold ${item.isPenarikan ? "text-red-500" : "text-green-600"}`}>
                  {item.isPenarikan ? "-" : "+"}Rp {Math.abs(item.total).toLocaleString("id-ID")}
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {expandedId === item.id && (
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <div className="space-y-2">
                  {item.items.map((subItem, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        {subItem.nama}
                        {!item.isPenarikan && ` (${subItem.berat} kg x Rp ${subItem.harga.toLocaleString("id-ID")})`}
                      </span>
                      <span className={`font-medium ${subItem.subtotal < 0 ? "text-red-500" : "text-gray-900"}`}>
                        {subItem.subtotal < 0 ? "-" : ""}Rp {Math.abs(subItem.subtotal).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className={`font-bold ${item.isPenarikan ? "text-red-500" : "text-green-600"}`}>
                    {item.isPenarikan ? "-" : "+"}Rp {Math.abs(item.total).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="text-gray-500">Tidak ada transaksi ditemukan</p>
        </div>
      )}
    </div>
  );
}
