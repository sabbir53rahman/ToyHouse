import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";
import { updateProfile } from "firebase/auth";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoUrl: "",
  });

  const navigate = useNavigate();

  const { setUser, createUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, photoUrl } = formData;

    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        navigate('/')

        // Update the user's profile with name and photo URL
        return updateProfile(loggedUser, {
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then(() => {
        // Update the user state in AuthContext
        setUser((prev) => ({
          ...prev,
          displayName: formData.name,
          photoURL: formData.photoUrl,
        }));
        console.log("User profile updated:", formData.name, formData.photoUrl);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        Register
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-blue-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-blue-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-blue-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="photoUrl"
            className="block text-sm font-semibold text-blue-700 mb-2"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your photo URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mt-6"
        >
          Register
        </button>

        <p className="text-center mt-6 text-blue-700">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-500">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
