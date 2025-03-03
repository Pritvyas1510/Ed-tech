import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-5">
      {/* Left Side (Form) */}
      <div className="md:w-2/5 w-full p-5 justify-self-center md:content-center md:mx-10">
        <div className="bg-pink-50 shadow-xl shadow-gray-200 rounded-xl w-full max-w-[450px] mx-auto p-10">
          <div className="text-black justify-self-center mb-5 text-3xl md:text-5xl font-black font-serif">
            <h1>Sign in</h1>
          </div>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Terms and Conditions */}
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 mt-1"
                  required
                  checked={formData.terms}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="terms" className="ms-2 text-md font-medium text-gray-900 capitalize">
                I confirm my details are correct
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

            {/* Submit Button */}
            <div className="justify-self-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-1 w-40 h-10"
              >
                Sign in
              </button>
            </div>

            {/* Register Link */}
            <div className="mt-5 justify-self-center">
              <label className="ms-2 text-md font-medium text-gray-900 flex">
                Don't Have An Account?{" "}
                <Link to="/registration">
                  <p className="text-blue-500 hover:text-blue-600">Register</p>
                </Link>
              </label>
            </div>

            {/* Social Login */}
            <div className="flex gap-x-5 justify-self-center my-5">
              <div className="w-10 bg-white rounded-full cursor-pointer ">
                <img src="public/image/google.png" alt="Image is not available" />
              </div>
              <div className="w-10 bg-white rounded-full cursor-pointer">
                <img className="rounded-full" src="public/image/facebook.png" alt="Image is not available" />
              </div>
              <div className="w-10 bg-white rounded-full cursor-pointer">
                <img src="public/image/apple.png" alt="Image is not available" />
              </div> 
            </div>
          </form>
        </div>
      </div>

      {/* Right Side Image (Hidden on Mobile, Auto Width on Tablets) */}
      <div className="hidden md:flex md:w-3/5 md:justify-center md:items-center">
        <img
          src="https://img.freepik.com/premium-vector/online-distance-education-from-home_108855-1805.jpg?w=1800"
          alt="Education illustration"
          className="w-full md:w-auto max-w-[650px]"
        />
      </div>
    </div>
  );
};

export default Login;
