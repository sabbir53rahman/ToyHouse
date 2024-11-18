import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../components/providers/AuthProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function MyToy() {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-toys?email=${user.email}`)
        .then((response) => {
          setToys(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching toys", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this toy?")) {
      axios
        .delete(`http://localhost:5000/toys/${id}`)
        .then(() => {
          setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
          alert("Toy deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting toy", error);
        });
    }
  };

  const handleUpdate = (toyId) => {
    // Redirect to the Update page with the toy's ID
    navigate(`/updatetoy/${toyId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (!toys.length) {
    return <p className="justify-center flex items-center text-4xl h-[60vh]">No toys added yet.</p>;
  }

  return (
    <div className=" py-[80px] bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        My Superhero Toys
      </h1>

      {/* Superhero-inspired Table for larger screens */}
      <div className="overflow-x-auto container mx-auto hidden md:block">
        <table className="min-w-full table-auto border-collapse bg-gray-900 text-white">
          <thead>
            <tr className="bg-gradient-to-r from-red-500 to-purple-500">
              <th className="border border-gray-600 px-4 py-3 text-center">
                Name
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Price
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Available Quantity
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Description
              </th>
              <th className="border border-gray-600 px-4 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr
                key={toy._id}
                className="hover:bg-gray-700 transition duration-200 ease-in-out transform hover:scale-100"
              >
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.name}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  ${toy.price}
                </td>
                <td className="border border-gray-600 px-4 py-3 text-center">
                  {toy.availableQuantity}
                </td>
                <td className="border border-gray-600 px-[5px] py-3 text-center">
                  {toy.detailDescription}
                </td>
                <td className="border border-gray-600 md:flex md:flex-col md:gap-[5px] px-4 py-3 text-center">
                  <button
                    onClick={() => handleUpdate(toy._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transform hover:scale-110 transition-all duration-300 mx-1"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transform hover:scale-110 transition-all duration-300 mx-1"
                  >
                    Delete
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
            key={toy._id}
            className="border border-gray-600 bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              {toy.name}
            </h2>
            <p className="text-sm mb-2">Price: ${toy.price}</p>
            <p className="text-sm mb-2">
              Available Quantity: {toy.availableQuantity}
            </p>
            <p className="text-sm mb-4">Description: {toy.detailDescription}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleUpdate(toy._id)}
                className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded-lg transform hover:scale-105 transition-all duration-300 mx-1"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(toy._id)}
                className="bg-red-500 hover:bg-red-700 text-white w-full py-2 rounded-lg transform hover:scale-105 transition-all duration-300 mx-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyToy;
