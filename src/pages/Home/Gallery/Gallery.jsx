import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Gallery() {
  const [toyImages, setToyImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch toys data from the API
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => {
        // Extract the toy images and limit to 4 items
        const limitedToys = data.slice(0, 4);
        setToyImages(limitedToys);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  // Handle redirection to details page
  const handleViewDetails = (_id) => {
    navigate(`/toy/${_id}`);
  };

  return (
    <>
      <section className="gallery-section container mx-auto py-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Featured Toys Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {toyImages.map((toy, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white"
            >
              {/* Toy Image */}
              <img
                src={toy.pictureUrl}
                alt={`Toy Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 ease-in-out flex items-center justify-center">
                {/* Button that appears on hover */}
                <button
                  onClick={() => handleViewDetails(toy._id)} // Redirect to the toy details page
                  className="text-white text-lg font-semibold p-[100px] opacity-0 hover:opacity-100 transition-opacity duration-500"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
