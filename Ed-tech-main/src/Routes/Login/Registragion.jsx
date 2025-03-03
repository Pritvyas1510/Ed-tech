import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log("Sending request to API with:", formData);
        
        const response = await fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        console.log("API Response:", data);
  
        if (response.ok) {
          alert("Registration successful!");
          navigate("/login"); // Redirect to login
        } else {
          alert(`Registration failed: ${data.message || "Unknown error"}`);
        }
      } catch (error) {
        console.error("Network or server error:", error);
        alert("Registration failed due to a network error. Please try again.");
      }
    }
  };
  
  

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-5">
      <div className="md:w-2/5 w-full p-5 justify-self-center md:content-center md:mx-10">
        <div className="bg-pink-50 shadow-xl shadow-gray-200 rounded-xl w-full max-w-[450px] mx-auto p-4">
          <div className="text-black justify-self-center mb-5 text-3xl md:text-5xl font-black font-serif">
            <h1>Sign up</h1>
          </div>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1 h-10"
                placeholder="User Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1 h-10"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="mb-5">
              <label htmlFor="repeatPassword" className="block mb-2 text-lg font-medium text-gray-900">
                Confirm password
              </label>
              <input
                type="password"
                id="repeatPassword"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1 h-10"
                placeholder="Confirm Password"
                required
                value={formData.repeatPassword}
                onChange={handleChange}
              />
              {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword}</p>}
            </div>
            <div className="flex items-start mb-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 mt-1"
                required
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="ms-2 text-md font-medium text-gray-900 capitalize">
                I confirm my details are correct
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
            <div className="justify-self-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-1 w-40 h-10"
                disabled={loading}
              >
                {loading ? "Processing..." : "Sign up"}
              </button>
            </div>
            <div className="mt-5 justify-self-center">
              <label className="ms-2 text-md font-medium text-gray-900 flex">
                Do You Have An Account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:flex md:w-3/5 md:justify-center md:items-center">
        <img
          src="https://www.smartschoolmart.com/image/cache/catalog/educationwall/38-cr-800x800.jpg"
          alt="Education illustration"
          className="w-full md:w-auto max-w-[650px]"
        />
      </div>
    </div>
  );
};

export default Registration;