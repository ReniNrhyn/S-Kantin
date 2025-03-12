"use client";
import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 5; // Jumlah user per halaman

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Filter data berdasarkan pencarian
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Type for search then enter"
        className="w-full p-3 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-4 border w-16 text-center">NO</th>
              <th className="p-4 border w-1/3">NAME</th>
              <th className="p-4 border w-1/3">EMAIL</th>
              <th className="p-4 border w-1/4 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="p-4 border text-center">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="p-4 border">{user.name}</td>
                <td className="p-4 border">{user.email}</td>
                <td className="p-4 border flex justify-center space-x-2">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded">
                    EDIT
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded">
                    HAPUS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
