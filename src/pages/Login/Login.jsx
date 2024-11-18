import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    login(formData.email, formData.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Login submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic
    console.log("Google Sign-in clicked");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        Login
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto"
      >
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

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mt-6"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mt-4"
        >
          Sign in with Google
        </button>

        <p className="text-center mt-6 text-blue-700">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-blue-500">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
