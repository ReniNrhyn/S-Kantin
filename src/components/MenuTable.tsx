"use client";

import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 5; // Menampilkan 5 item per halaman

export default function MenuTable() {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  // Hitung index awal dan akhir untuk pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentMenu = menu.slice(indexOfFirstItem, indexOfLastItem);

  // Ganti halaman
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Daftar Menu</h2>
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Kategori</th>
            <th className="p-3 border">Harga</th>
          </tr>
        </thead>
        <tbody>
          {currentMenu.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3 border">{item.id}</td>
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.category}</td>
              <td className="p-3 border">Rp {item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(menu.length / ITEMS_PER_PAGE) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
