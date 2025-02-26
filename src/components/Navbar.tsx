"use client";

import React from "react";
import Link from "next/link";
import {
  FaUtensils,
  FaShoppingCart,
  FaBox,
  FaChartBar,
  FaMoneyBill,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">S-Kantin</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/menu"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaUtensils /> Menu
            </Link>
          </li>
          <li>
            <Link
              href="/transaksi"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaShoppingCart /> Transaksi
            </Link>
          </li>
          <li>
            <Link
              href="/stok"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaBox /> Stok
            </Link>
          </li>
          <li>
            <Link
              href="/laporan"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaChartBar /> Laporan
            </Link>
          </li>
          <li>
            <Link
              href="/pengeluaran"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaMoneyBill /> Pengeluaran
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
