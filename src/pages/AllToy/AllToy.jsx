import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllToy() {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
        setLoading(false);
      });
  }, []);

  // Handle redirection to details page
  const handleViewDetails = (_id) => {
    navigate(`/toy/${_id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 py-[80px]">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        All Superhero Toys
      </h1>
      <div className="overflow-x-auto hidden container mx-auto md:block">
        {/* Superhero-inspired Table */}
        <table className="min-w-full table-auto border-collapse bg-gray-900 text-white">
          <thead>
            <tr className="bg-gradient-to-r from-red-500 to-purple-500">
              <th className="border border-gray-600 px-4 py-3 text-center">
                Seller
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Toy Name
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Sub-category
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Price
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Available Quantity
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr
                key={toy.id}
                className="hover:bg-gray-700 transition duration-200 ease-in-out transform hover:scale-100"
              >
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.sellerName || "Not available"}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.name}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.subCategory}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  ${toy.price}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.availableQuantity}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  <button
                    onClick={() => handleViewDetails(toy._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transform hover:scale-110 transition-all duration-300"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile version for smaller devices */}
      <div className="grid gap-6 px-[10px] mt-6 md:hidden">
        {toys.map((toy) => (
          <div
            key={toy.id}
            className="border border-gray-600 bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              {toy.name}
            </h2>
            <p className="text-sm mb-2">
              Seller: {toy.sellerName || "Not available"}
            </p>
            <p className="text-sm mb-2">Sub-category: {toy.subCategory}</p>
            <p className="text-sm mb-2">Price: ${toy.price}</p>
            <p className="text-sm mb-4">
              Available Quantity: {toy.availableQuantity}
            </p>
            <button
            onClick={() => handleViewDetails(toy._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded-lg transform hover:scale-105 transition-all duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllToy;
