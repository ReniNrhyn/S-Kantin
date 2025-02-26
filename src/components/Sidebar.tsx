"use client";

import Link from "next/link";
import {
  FaUtensils,
  FaShoppingCart,
  FaBoxes,
  FaChartBar,
  FaMoneyBillWave,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-green-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-5">S-Kantin</h1>
      <nav className="space-y-4">
        <Link
          href="/dashboard/menu"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-600"
        >
          <FaUtensils /> Menu
        </Link>
        <Link
          href="/dashboard/transaksi"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-600"
        >
          <FaShoppingCart /> Transaksi
        </Link>
        <Link
          href="/dashboard/stok"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-600"
        >
          <FaBoxes /> Stok
        </Link>
        <Link
          href="/dashboard/laporan"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-600"
        >
          <FaChartBar /> Laporan
        </Link>
        <Link
          href="/dashboard/pengeluaran"
          className="flex items-center gap-3 p-2 rounded hover:bg-green-600"
        >
          <FaMoneyBillWave /> Pengeluaran
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
