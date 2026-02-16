import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",

    mobileno: "",
    email: "",

    selectedservice: "",
    productdetails: "",

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
      const response = await fetch("https://api.frightgo.in/api/form/enq", {
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

        selectedservice: "",
        productdetails: "",

        message: "",
      });
      setSuccessMessage("Enquiry add successfully");
      setError("");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Failed to add enquiry. Please try again later.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20 ">
        <div className="flex justify-center md:justify-end my-8">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-500  text-base sm:text-lg">
            <div className="flex items-center space-x-2 text-lg">
              <FaEnvelope className="text-gray-500" />
              <Link
                to="mailto:frightgoimpex@gmail.com"
                className="hover:underline break-words"
              >
                frightgoimpex@gmail.com
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-lg">
              <FaPhone className="text-gray-500" />
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-words"
              >
                9022892800
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <FaMapMarkerAlt className="text-gray-500" />
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-words"
              >
                Nashik,Mumbai Maharashtra
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-700 text-center">
          Submit Your Enquiry
        </h2>

        <div className="bg-white py-12 px-4  sm:px-6 lg:px-8 max-w-2xl mx-auto rounded-xl shadow-md">
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
                Service
              </label>
              <select
                name="selectedservice"
                value={formData.selectedservice}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>
                  Select a service
                </option>
                <option value="Import" selected>
                  Import
                </option>
                <option value="Export">Export</option>
                <option value="LocalTransport">LocalTransport</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Details (Weight / Quantity)
              </label>
              <input
                type="text"
                name="productdetails"
                value={formData.productdetails}
                onChange={handleInputChange}
                placeholder="Enter Product Details"
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 my-10">
          <div className="w-full md:max-w-md">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610083937!2d72.74109832132448!3d19.08219783923452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a92bd2e01%3A0xa2f7f7b0501df84d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1628771401212!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mt-10 flex justify-center space-x-6 text-gray-600  text-2xl">
          <Link
            to="#"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/frightgoimpex?igsh=NnY4eHd6dG11ODc1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
