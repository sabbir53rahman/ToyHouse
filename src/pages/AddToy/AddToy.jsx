import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { BiBot } from "react-icons/bi";

function AddToy() {
  const { user } = useContext(AuthContext); // Get the authenticated user
  const [formData, setFormData] = useState({
    pictureUrl: "",
    name: "",
    sellerName: user?.displayName || "", // Pre-fill seller's name from user context
    sellerEmail: user?.email || "", // Pre-fill seller's email from user context
    subCategory: "",
    price: "",
    rating: "",
    availableQuantity: "", // Renamed to match backend
    detailDescription: "", // Renamed to match backend
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await fetch("http://localhost:5000/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Toy added successfully:", result);
        alert("Toy added successfully!");
        // Optionally, reset the form after submission
        setFormData({
          pictureUrl: "",
          name: "",
          sellerName: user?.displayName || "",
          sellerEmail: user?.email || "",
          subCategory: "",
          price: "",
          rating: "",
          availableQuantity: "", // Renamed to match backend
          detailDescription: "", // Renamed to match backend
        });
      } else {
        console.error("Failed to add toy");
        alert("Failed to add toy");
      }
    } catch (error) {
      console.error("Error adding toy:", error);
    }
  };

  return (
    <div className=" bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
        Add A Toy
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" container mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-4xl "
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Picture URL */}
          <div className="mb-4">
            <label
              htmlFor="pictureUrl"
              className="block text-base font-semibold  mb-2"
            >
              Picture URL of the Toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              value={formData.pictureUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none border text-black border-blue-300 rounded-lg"
              placeholder="Enter the picture URL"
              required
            />
          </div>

          {/* Toy Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-base font-semibold  mb-2"
            >
              Toy Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none border text-black border-blue-300 rounded-lg"
              placeholder="Enter the toy's name"
              required
            />
          </div>

          {/* Seller Name */}
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-base font-semibold  mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              value={formData.sellerName}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none border text-black border-blue-300 rounded-lg"
              placeholder="Enter the seller's name"
            />
          </div>

          {/* Seller Email */}
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-base font-semibold  mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              value={formData.sellerEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none text-black border border-blue-300 rounded-lg"
              placeholder="Enter the seller's email"
              required
            />
          </div>

          {/* Sub-category */}
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-base font-semibold  mb-2"
            >
              Sub-category
            </label>
            <select
              id="subCategory"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black outline-none border border-blue-300 rounded-lg"
              required
            >
              <option value="" disabled>
                Select a sub-category
              </option>
              <option value="Marvel">Marvel</option>
              <option value="Avengers">Avengers</option>
              <option value="Transformers">Transformers</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-base font-semibold  mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black outline-none border border-blue-300 rounded-lg"
              placeholder="Enter the price"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-base font-semibold  mb-2"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black outline-none border border-blue-300 rounded-lg"
              placeholder="Enter the rating (e.g., 4.5)"
              min="1"
              max="5"
              step="0.1" // Allows fractional numbers like 4.5, 3.8, etc.
              required
            />
          </div>

          {/* Available Quantity */}
          <div className="mb-4">
            <label
              htmlFor="availableQuantity"
              className="block text-base font-semibold  mb-2"
            >
              Available Quantity
            </label>
            <input
              type="number"
              id="availableQuantity"
              name="availableQuantity"
              value={formData.availableQuantity}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black outline-none border border-blue-300 rounded-lg"
              placeholder="Enter the available quantity"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <label
              htmlFor="detailDescription"
              className="block text-base font-semibold  mb-2"
            >
              Detail Description
            </label>
            <textarea
              id="detailDescription"
              name="detailDescription"
              value={formData.detailDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black outline-none border border-blue-300 rounded-lg"
              placeholder="Enter a detailed description"
              rows="4"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mt-6"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default AddToy;
