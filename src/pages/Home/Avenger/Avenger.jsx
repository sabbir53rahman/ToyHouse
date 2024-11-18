import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Avenger() {
  const [avengerToys, setAvengerToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched toys data:", data); // Log the fetched data

        // Filter for toys where subCategory is "Avengers"
        const filteredToys = data.filter(
          (toy) => toy.subCategory === "Avengers"
        );

        console.log("Filtered Avengers Toys:", filteredToys); // Log the filtered result

        // Limit the toys to 3
        setAvengerToys(filteredToys.slice(1, 4));
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
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <>
      <section className="bg-blue-900 px-[20px] py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            Exclusive Avengers Merchandise
          </h2>
          <p className="text-lg mb-12 text-gray-300">
            Don't miss out on these limited edition collectibles! Once they're
            gone, they're gone forever.
          </p>

          {/* Exclusive Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avengerToys.map((toy, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={toy.pictureUrl} // Assuming pictureUrl is the correct field from your API
                    alt={toy.name}
                    className="w-full h-[300px] object-cover rounded-lg mb-4 shadow-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    {toy.tag || "Exclusive"} {/* Placeholder tag if missing */}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                  {toy.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {toy.description || "No description available."}
                </p>
                <button onClick={() => handleViewDetails(toy._id)}  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 w-full">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Avenger;
