import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function UpdateModal() {
  const { id } = useParams(); // Get toy ID from the URL
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // To navigate back after update

  useEffect(() => {
    // Fetch toy details by ID
    axios
      .get(`http://localhost:5000/toys/${id}`)
      .then((response) => {
        setToy(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toy", error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/toys/${id}`, toy)
      .then(() => {
        alert("Toy updated successfully");
        navigate("/mytoys"); // Redirect back to the MyToy page
      })
      .catch((error) => {
        console.error("Error updating toy", error);
      });
  };

  const handleChange = (e) => {
    setToy({
      ...toy,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="update-modal-container min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 p-8">
      <div className="bg-gray-800 bg-opacity-60 rounded-lg shadow-xl w-full max-w-lg p-6 transform transition duration-500 hover:scale-105">
        <h2 className="text-center text-3xl font-extrabold text-yellow-400 mb-6">
          Update Your Superhero Toy
        </h2>
        <form onSubmit={handleUpdateSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-bold text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={toy.name || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-white">Price:</label>
            <input
              type="number"
              name="price"
              value={toy.price || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-white">
              Available Quantity:
            </label>
            <input
              type="number"
              name="availableQuantity"
              value={toy.availableQuantity || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-white">
              Description:
            </label>
            <textarea
              name="detailDescription"
              value={toy.detailDescription || ""}
              onChange={handleChange}
              className="w-full h-[100px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-bold py-2 rounded-md shadow-lg transform transition hover:scale-105 hover:bg-yellow-500"
          >
            Save Changes
          </button>
          <Link to="/mytoys">
            <button className="w-full mt-[20px] bg-yellow-400 text-white font-bold py-2 rounded-md shadow-lg transform transition hover:scale-105 hover:bg-yellow-500">
              Go Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;
