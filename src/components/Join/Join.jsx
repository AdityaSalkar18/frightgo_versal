import { useState } from "react";

import Navbar from "../Navbar/Navbar";


const Join = () => {
  const [formData, setFormData] = useState({
    name: "",

    mobileno: "",
    email: "",

    vehicletype: "",
    vehicledetails: "",
    servicecity: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.frightgo.in/api/form/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setFormData({
        name: "",

        mobileno: "",
        email: "",

        vehicletype: "",
        vehicledetails: "",
        servicecity: "",
        message: "",
      });
      setSuccessMessage(
        "Details submitted successfully. Our team will reach out within 24 hours"
      );
      setError("");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error("Details submission error:", error);
      setError("Failed to send details. Please try again later.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 2000);
    }
  };
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-3 text-center">
          Join Us
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600  mb-5 text-center ">
          Partner with us and get regular transport opportunities
        </p>
        <div className=" py-12 px-4  sm:px-6 lg:px-8 max-w-2xl mx-auto rounded-xl shadow-md">
          {error && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
              role="alert"
            >
              <span className="font-medium"></span> {error}
            </div>
          )}
          {successMessage && (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 "
              role="alert"
            >
              <span className="font-medium"></span> {successMessage}
            </div>
          )}
          <form
            className="space-y-6 "
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your/company name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email(Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Type
              </label>
              <select
                name="vehicletype"
                value={formData.vehicletype}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>
                  Select a vehicle type
                </option>
                <option value="Truck" selected>
                  Truck
                </option>
                <option value="Pickup">Pickup</option>
                <option value="Tempo">Tempo</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Details (Number / Colour)
              </label>
              <input
                type="text"
                name="vehicledetails"
                value={formData.vehicledetails}
                onChange={handleInputChange}
                placeholder="Enter  Vehicle Details (MH 01 xxxx )"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service City 
              </label>
              <input
                type="text"
                name="servicecity"
                value={formData.servicecity}
                onChange={handleInputChange}
                placeholder="Enter Service City (Nashik,Mumbai,..)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Write your enquiry..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center my-3
              "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
