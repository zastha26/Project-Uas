"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Transaction {
  id: number;
  tanggal: string;
  items: { nama: string; berat: number; harga: number; subtotal: number }[];
  total: number;
  status: string;
  tipe: string;
  userEmail: string;
}

function formatTanggal(date: Date) {
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function SaldoPage() {
  const router = useRouter();
  const [showPenarikan, setShowPenarikan] = useState(false);
  const [jumlahPenarikan, setJumlahPenarikan] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [saldo, setSaldo] = useState(0);
  const [totalSetoran, setTotalSetoran] = useState(0);
  const [totalPenarikan, setTotalPenarikan] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("banksampah_current_user");
    if (!stored) { router.push("/auth"); return; }
    const user = JSON.parse(stored);
    setUserEmail(user.email);
    setSaldo(user.saldo || 0);

    const allTransactions = JSON.parse(localStorage.getItem("banksampah_transactions") || "[]");
    const myTransactions = allTransactions.filter((t: Transaction) => t.userEmail === user.email);
    setTransactions(myTransactions);

    const ts = myTransactions.filter((t: Transaction) => t.tipe === "setoran").reduce((a: number, t: Transaction) => a + t.total, 0);
    const tp = myTransactions.filter((t: Transaction) => t.tipe === "penarikan").reduce((a: number, t: Transaction) => a + t.total, 0);
    setTotalSetoran(ts);
    setTotalPenarikan(tp);
  }, [router]);

  const handlePenarikan = () => {
    const jumlah = Number(jumlahPenarikan);
    if (!jumlah || jumlah <= 0 || jumlah > saldo || !userEmail) return;

    // Simpan transaksi penarikan
    const allTransactions = JSON.parse(localStorage.getItem("banksampah_transactions") || "[]");
    const newTransaction: Transaction = {
      id: Date.now(),
      tanggal: formatTanggal(new Date()),
      items: [{ nama: "Penarikan Saldo", berat: 0, harga: 0, subtotal: jumlah }],
      total: jumlah,
      status: "berhasil",
      tipe: "penarikan",
      userEmail,
    };
    allTransactions.push(newTransaction);
    localStorage.setItem("banksampah_transactions", JSON.stringify(allTransactions));

    // Kurangi saldo
    const newSaldo = saldo - jumlah;
    const user = JSON.parse(localStorage.getItem("banksampah_current_user") || "{}");
    user.saldo = newSaldo;
    localStorage.setItem("banksampah_current_user", JSON.stringify(user));

    const users = JSON.parse(localStorage.getItem("banksampah_users") || "[]");
    const updated = users.map((u: { email: string }) => u.email === userEmail ? { ...u, saldo: newSaldo } : u);
    localStorage.setItem("banksampah_users", JSON.stringify(updated));

    setSaldo(newSaldo);
    setTotalPenarikan(totalPenarikan + jumlah);
    setShowSuccess(true);
    setShowPenarikan(false);
    setJumlahPenarikan("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Penarikan Berhasil!</h3>
            <p className="text-gray-500">Saldo akan ditransfer dalam 1x24 jam.</p>
          </div>
        </div>
      )}

      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gray-900">Saldo Saya</h1>
        <p className="text-gray-500 mt-1">Kelola saldo dan penarikan dana</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-green-500/20 animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-white/80 text-sm mb-1 font-medium">Total Saldo</div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight">Rp {saldo.toLocaleString("id-ID")}</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-white/70 text-xs mb-1 font-medium">Total Setoran</div>
              <div className="font-bold text-lg">Rp {totalSetoran.toLocaleString("id-ID")}</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-white/70 text-xs mb-1 font-medium">Total Penarikan</div>
              <div className="font-bold text-lg">Rp {totalPenarikan.toLocaleString("id-ID")}</div>
            </div>
          </div>
          <button onClick={() => setShowPenarikan(true)} disabled={saldo <= 0}
            className="mt-6 w-full bg-white text-green-600 py-3.5 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            Tarik Saldo
          </button>
        </div>
      </div>

      {showPenarikan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-sm mx-4 w-full shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Tarik Saldo</h3>
              <button onClick={() => setShowPenarikan(false)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Penarikan</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                <input type="number" value={jumlahPenarikan} onChange={(e) => setJumlahPenarikan(e.target.value)}
                  placeholder="0" min="10000" max={saldo}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-500">Saldo tersedia: Rp {saldo.toLocaleString("id-ID")}</span>
                <button onClick={() => setJumlahPenarikan(String(saldo))} className="text-green-600 font-semibold hover:text-green-700 transition-colors">Tarik Semua</button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Jumlah penarikan</span>
                <span className="font-medium text-gray-900">Rp {Number(jumlahPenarikan || 0).toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Biaya admin</span>
                <span className="font-medium text-green-600">Gratis</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                <span className="font-medium text-gray-900">Total diterima</span>
                <span className="font-bold text-green-600 text-lg">Rp {Number(jumlahPenarikan || 0).toLocaleString("id-ID")}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowPenarikan(false)} className="flex-1 py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all">Batal</button>
              <button onClick={handlePenarikan} disabled={!jumlahPenarikan || Number(jumlahPenarikan) <= 0 || Number(jumlahPenarikan) > saldo}
                className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-sm shadow-green-500/25">
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-green-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Cara Mendapatkan Saldo</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Setorkan sampah ke bank sampah terdekat dan saldo akan otomatis bertambah sesuai berat dan jenis sampah.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-blue-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Cara Mencairkan Saldo</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Klik &quot;Tarik Saldo&quot; dan masukkan jumlah yang ingin dicairkan. Dana akan ditransfer dalam 1x24 jam.</p>
        </div>
      </div>
    </div>
  );
}
