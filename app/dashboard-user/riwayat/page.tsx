"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SetoranItem {
  nama: string;
  berat: number;
  harga: number;
  subtotal: number;
}

interface Transaction {
  id: number;
  tanggal: string;
  items: SetoranItem[];
  total: number;
  status: string;
  tipe: string;
  userEmail: string;
}

export default function RiwayatPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<"semua" | "setoran" | "penarikan">("semua");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("banksampah_current_user");
    if (!stored) { router.push("/auth"); return; }
    const user = JSON.parse(stored);
    const allTransactions = JSON.parse(localStorage.getItem("banksampah_transactions") || "[]");
    const myTransactions = allTransactions.filter((t: Transaction) => t.userEmail === user.email);
    setTransactions(myTransactions.reverse());
  }, [router]);

  const filteredData = transactions.filter((item) => {
    if (filter === "setoran") return item.tipe === "setoran";
    if (filter === "penarikan") return item.tipe === "penarikan";
    return true;
  });

  const totalSetoran = transactions.filter((t) => t.tipe === "setoran").reduce((acc, t) => acc + t.total, 0);
  const totalPenarikan = transactions.filter((t) => t.tipe === "penarikan").reduce((acc, t) => acc + t.total, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h1>
        <p className="text-gray-500 mt-1">Lihat semua transaksi setoran dan penarikan Anda</p>
      </div>

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
          <div className="text-xl font-bold text-blue-600">Rp {(totalSetoran - totalPenarikan).toLocaleString("id-ID")}</div>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {(["semua", "setoran", "penarikan"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === f ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
            {f === "semua" ? "Semua" : f === "setoran" ? "Setoran" : "Penarikan"}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.tipe === "penarikan" ? "bg-red-100" : "bg-green-100"}`}>
                  {item.tipe === "penarikan" ? (
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
                    {item.tipe === "penarikan" ? "Penarikan Saldo" : `Setoran Sampah`}
                  </div>
                  <div className="text-sm text-gray-500">{item.tanggal}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`font-bold ${item.tipe === "penarikan" ? "text-red-500" : "text-green-600"}`}>
                  {item.tipe === "penarikan" ? "-" : "+"}Rp {item.total.toLocaleString("id-ID")}
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${expandedId === item.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {expandedId === item.id && (
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                {item.tipe === "setoran" && (
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">Berhasil</span>
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  {item.items.map((subItem, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        {subItem.nama}
                        {item.tipe === "setoran" && ` (${subItem.berat} kg x Rp ${subItem.harga.toLocaleString("id-ID")})`}
                      </span>
                      <span className="font-medium text-gray-900">Rp {Math.abs(subItem.subtotal).toLocaleString("id-ID")}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className={`font-bold ${item.tipe === "penarikan" ? "text-red-500" : "text-green-600"}`}>
                    {item.tipe === "penarikan" ? "-" : "+"}Rp {item.total.toLocaleString("id-ID")}
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
          <p className="text-gray-500">Belum ada transaksi</p>
        </div>
      )}
    </div>
  );
}
