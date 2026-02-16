import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const BookService = () => {
  const [isOpenLocalTransport, setIsOpenLocalTransport] = useState(false);

  const openModalLocalTransport = () => setIsOpenLocalTransport(true);
  const closeModalLocalTransport = () => setIsOpenLocalTransport(false);

  const [formDataLocalTransport, setformDataLocalTransport] = useState({
    name: "",

    mobileno: "",
    email: "",

    selectedservice: "LocalTransport",
    productdetails: "",
    date: "",
    source: "",
    destination: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChangeLocalTransport = (e) => {
    const { name, value } = e.target;
    setformDataLocalTransport((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLocalTransport = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.frightgo.in/api/form/lt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataLocalTransport),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setformDataLocalTransport({
        name: "",

        mobileno: "",
        email: "",

        selectedservice: "LocalTransport",
        productdetails: "",
        date: "",
        source: "",
        destination: "",
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

  const [isOpenExport, setIsOpenExport] = useState(false);

  const openModalExport = () => setIsOpenExport(true);
  const closeModalExport = () => setIsOpenExport(false);

  const [formDataExport, setformDataExport] = useState({
    name: "",

    mobileno: "",
    email: "",

    selectedservice: "Export",
    productdetails: "",
    selectedcountry: "",
    message: "",
  });

  const handleInputChangeExport = (e) => {
    const { name, value } = e.target;
    setformDataExport((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitExport = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.frightgo.in/api/form/exp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataExport),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setformDataExport({
        name: "",

        mobileno: "",
        email: "",

        selectedservice: "Export",
        productdetails: "",
        selectedcountry: "",
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

  const [isOpenImport, setIsOpenImport] = useState(false);

  const openModalImport = () => setIsOpenImport(true);
  const closeModalImport = () => setIsOpenImport(false);

  const [formDataImport, setformDataImport] = useState({
    name: "",

    mobileno: "",
    email: "",

    selectedservice: "Import",
    productdetails: "",
    selectedcountry: "",
    message: "",
  });

  const handleInputChangeImport = (e) => {
    const { name, value } = e.target;
    setformDataImport((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitImport = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.frightgo.in/api/form/imp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataImport),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setformDataImport({
        name: "",

        mobileno: "",
        email: "",

        selectedservice: "Import",
        productdetails: "",
        selectedcountry: "",
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
    
    <div className="container mx-auto px-4 py-10 mt-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-3 text-center">
           Select a service 
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600  mb-5 text-center ">
           Send your enquiry below to get started with our service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group text-center p-6 h-[280px] flex flex-col justify-center"
            style={{
              backgroundImage:
                "url('https://emeraldtransportationsolutions.com/wp-content/uploads/2020/12/wMfjDRcLKjtEpTSOlUyeRqhDU8xbwM2d1606848414.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl lg:text-3xl font-bold mb-3">
                Reliable Local Transport Services
              </h3>
              <p className="text-lg leading-relaxed mb-5">
                Fast, safe, and affordable transport for goods and consignments.
              </p>
              <button
                onClick={openModalLocalTransport}
                type="button"
                className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
       focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
              >
                Transport Enquiry
              </button>
            </div>
          </div>

          {isOpenLocalTransport && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
              onClick={closeModalLocalTransport}
            >
              <div
                className="relative p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-white rounded-lg shadow-sm">
                  <div
                    className=" top-0 flex items-center justify-between p-4  md:p-5
                     border-b border-gray-200 rounded-t bg-white z-10"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      LocalTransport Enquiry Form
                    </h3>
                    <button
                      onClick={closeModalLocalTransport}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                       rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 13"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="container mx-auto px-4 py-8">
                    {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                        role="alert"
                      >
                        {successMessage}
                      </div>
                    )}

                    <form
                      className="space-y-6"
                      onSubmit={handleSubmitLocalTransport}
                      encType="multipart/form-data"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formDataLocalTransport.name}
                          onChange={handleInputChangeLocalTransport}
                          placeholder="Enter your/company  name"
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
                          value={formDataLocalTransport.mobileno}
                          onChange={handleInputChangeLocalTransport}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formDataLocalTransport.email}
                          onChange={handleInputChangeLocalTransport}
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
                          value={formDataLocalTransport.selectedservice}
                          onChange={handleInputChangeLocalTransport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
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
                          value={formDataLocalTransport.productdetails}
                          onChange={handleInputChangeLocalTransport}
                          placeholder="Enter Product Details"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formDataLocalTransport.date}
                          onChange={handleInputChangeLocalTransport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Source Address
                        </label>
                        <input
                          type="text"
                          name="source"
                          value={formDataLocalTransport.source}
                          onChange={handleInputChangeLocalTransport}
                          placeholder="Enter Source Location"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Destination Address
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formDataLocalTransport.destination}
                          onChange={handleInputChangeLocalTransport}
                          placeholder="Enter Destination Location"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formDataLocalTransport.message}
                          onChange={handleInputChangeLocalTransport}
                          rows="4"
                          placeholder="Write your enquiry..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>

                      <div className="text-center mb-5">
                        <button
                          type="submit"
                          className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none
                           focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group text-center p-6 h-[280px] flex flex-col justify-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/vibrant-colors-spices-row-street-market-generated-by-ai_188544-55468.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl lg:text-3xl font-bold mb-3">
                Premium Agricultural Exports Service
              </h3>
              <p className="text-lg leading-relaxed mb-5">
                Exporting India’s best{" "}
                <span className="font-semibold">fruits</span>,{" "}
                <span className="font-semibold">vegetables</span>,{" "}
                <span className="font-semibold">spices</span>,{" "}
                <span className="font-semibold">coffee</span>, and{" "}
                <span className="font-semibold">tea</span> to global markets.
              </p>
              <button
                onClick={openModalExport}
                type="button"
                className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
       focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
              >
                Export Enquiry
              </button>
            </div>
          </div>

          {isOpenExport && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
              onClick={closeModalExport}
            >
              <div
                className="relative p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-white rounded-lg shadow-sm">
                  <div
                    className=" top-0 flex items-center justify-between p-4  md:p-5
                     border-b border-gray-200 rounded-t bg-white z-10"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Export Enquiry Form
                    </h3>
                    <button
                      onClick={closeModalExport}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                       rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 13"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="container mx-auto px-4 py-8">
                    {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                        role="alert"
                      >
                        {successMessage}
                      </div>
                    )}

                    <form
                      className="space-y-6"
                      onSubmit={handleSubmitExport}
                      encType="multipart/form-data"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formDataExport.name}
                          onChange={handleInputChangeExport}
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
                          value={formDataExport.mobileno}
                          onChange={handleInputChangeExport}
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
                          value={formDataExport.email}
                          onChange={handleInputChangeExport}
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
                          value={formDataExport.selectedservice}
                          onChange={handleInputChangeExport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Export">Export</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Details (Weight / Quantity)
                        </label>
                        <input
                          type="text"
                          name="productdetails"
                          value={formDataExport.productdetails}
                          onChange={handleInputChangeExport}
                          placeholder="Enter Product Details"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Destination Country
                        </label>
                        <select
                          name="selectedcountry"
                          value={formDataExport.selectedcountry}
                          onChange={handleInputChangeExport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="" disabled>
                            Select a country to export
                          </option>
                          <option value="USA">USA</option>
                          <option value="China">China</option>
                          <option value="UAE">UAE</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Russia">Russia</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formDataExport.message}
                          onChange={handleInputChangeExport}
                          rows="4"
                          placeholder="Write your enquiry..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>

                      <div className="text-center mb-5">
                        <button
                          type="submit"
                          className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none
                           focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group text-center p-6 h-[280px] flex flex-col justify-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl lg:text-3xl font-bold mb-3">
                Quality Imports to India
              </h3>
              <p className="text-lg leading-relaxed mb-5">
                Importing premium{" "}
                <span className="font-semibold">textiles</span>,{" "}
                <span className="font-semibold">fashion accessories</span>,{" "}
                <span className="font-semibold">apparel</span>, and{" "}
                <span className="font-semibold">lifestyle products</span> from
                trusted global suppliers.
              </p>
              <button
                onClick={openModalImport}
                type="button"
                className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
       focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
              >
                Import Enquiry
              </button>
            </div>
          </div>

          {isOpenImport && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
              onClick={closeModalImport}
            >
              <div
                className="relative p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-white rounded-lg shadow-sm">
                  <div
                    className=" top-0 flex items-center justify-between p-4 md:p-5
                     border-b border-gray-200 rounded-t bg-white z-10"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Import Enquiry Form
                    </h3>
                    <button
                      onClick={closeModalImport}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                       rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 13"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto rounded-xl shadow-md">
                    {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                        role="alert"
                      >
                        {successMessage}
                      </div>
                    )}

                    <form
                      className="space-y-6"
                      onSubmit={handleSubmitImport}
                      encType="multipart/form-data"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formDataImport.name}
                          onChange={handleInputChangeImport}
                          placeholder="Enter your/company name"
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
                          value={formDataImport.email}
                          onChange={handleInputChangeImport}
                          placeholder="Enter your email"
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
                          value={formDataImport.mobileno}
                          onChange={handleInputChangeImport}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service
                        </label>
                        <select
                          name="selectedservice"
                          value={formDataImport.selectedservice}
                          onChange={handleInputChangeImport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Import">Import</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Details (Weight / Quantity)
                        </label>
                        <input
                          type="text"
                          name="productdetails"
                          value={formDataImport.productdetails}
                          onChange={handleInputChangeImport}
                          placeholder="Enter Product Details"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Source Country
                        </label>
                        <select
                          name="selectedcountry"
                          value={formDataImport.selectedcountry}
                          onChange={handleInputChangeImport}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="" disabled>
                            Select a country to import
                          </option>
                          <option value="USA">USA</option>
                          <option value="China">China</option>
                          <option value="UAE">UAE</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Russia">Russia</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formDataImport.message}
                          onChange={handleInputChangeImport}
                          rows="4"
                          placeholder="Write your enquiry..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>

                      <div className="text-center mb-5">
                        <button
                          type="submit"
                          className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
                           focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  )
}

export default BookService