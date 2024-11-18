import React from "react";
import { useLoaderData } from "react-router-dom";

function Details() {
  const toyDetails = useLoaderData();

  const {
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = toyDetails;

  return (
    <div className="details-page bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 min-h-screen py-16 text-white">
      <div className="container mx-auto p-8 max-w-5xl bg-gray-800 bg-opacity-60 rounded-lg shadow-xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Display the picture */}
          <img
            src={pictureUrl}
            alt={name}
            className="w-64 h-64 object-contain rounded-full border-8 border-yellow-400 shadow-lg"
          />

          {/* Toy Name */}
          <h1 className="md:text-5xl text-[40px] text-center font-bold text-yellow-400">{name}</h1>

          {/* Toy Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-center">
            {/* Seller Information */}
            <div className="bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300">Seller Info</h3>
              <p>{sellerName}</p>
              <p>{sellerEmail}</p>
            </div>

            {/* Price */}
            <div className="bg-[#FFA500] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Price</h3>
              <p className="text-3xl font-bold">${price}</p>
            </div>

            {/* Rating */}
            <div className="bg-red-500 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Rating</h3>
              <p className="text-3xl font-bold">{rating} / 5</p>
            </div>

            {/* Available Quantity */}
            <div className="bg-green-500 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Available Quantity</h3>
              <p className="text-3xl font-bold">{availableQuantity}</p>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-gray-700 bg-opacity-80 p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Description</h2>
            <p className="text-lg">{detailDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
