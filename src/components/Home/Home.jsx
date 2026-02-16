import { useState } from "react";
import Logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
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

  const [formData, setFormData] = useState({
    name: "",

    mobileno: "",
    email: "",

    selectedservice: "",
    productdetails: "",

    message: "",
  });

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

      <div
        className="relative flex items-center justify-center
             bg-center bg-no-repeat bg-cover
             bg-[url('https://blog.ipleaders.in/wp-content/uploads/2017/09/BV-Acharya-8.png')]
             bg-gray-700 bg-blend-multiply
             min-h-[80vh] sm:min-h-screen px-4"
      >
        {/* Overlay content */}
        <div className="text-center max-w-screen-xl mx-auto">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Transport & Import-Export Services
          </h1>

          <p className="mb-8 text-lg font-normal text-gray-300 sm:text-xl sm:px-8 md:px-16 lg:px-48">
            We provide safe, timely, and efficient local transport across India
            and seamless import-export solutions for businesses and traders.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-3 text-center">
          Our Services
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600  mb-5 text-center ">
          Select a service or send us your enquiry below.
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

      <div className="container mx-auto px-4 py-12">
        {/* Title always at the top */}
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 text-center mb-8">
          About Us
        </h2>

        {/* Responsive layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={Logo}
              alt="Frightgo Logo"
              className="w-64 lg:w-80 object-contain"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Founded in 2025, Frightgo provides dependable transport and trade
              solutions across India and abroad. We help connect businesses,
              farmers, and traders with global markets through secure logistics
              and trusted partnerships.
            </p>

            <ul className="list-disc list-inside text-lg text-gray-500  leading-relaxed space-y-2 mb-6">
              <li>
                <span className="font-semibold text-[#4682B4]">
                  Local Transport:
                </span>{" "}
                Safe and fast goods delivery across India.
              </li>
              <li>
                <span className="font-semibold text-[#4682B4]">Exports:</span>{" "}
                Fresh produce and spices from trusted Indian farms.
              </li>
              <li>
                <span className="font-semibold text-[#4682B4]">Imports:</span>{" "}
                Quality textiles and lifestyle products from global brands.
              </li>
            </ul>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/join">
                <button
                  type="button"
                  className="py-2 px-4 text-md font-medium text-white bg-[#4682B4] rounded-lg hover:bg-[#36648B] transition"
                >
                  Join Us
                </button>
              </Link>

              <Link to="/about">
                <button
                  type="button"
                  className="py-2 px-4 text-md font-medium text-[#4682B4] bg-white border border-[#4682B4] rounded-lg hover:bg-[#4682B4] hover:text-white transition"
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-3 text-center">
          Contact Us
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600  mb-5 text-center ">
          Submit Your Enquiry
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8">
            What Our Clients Say
          </h2>

          <div
            className="w-full overflow-x-auto py-6 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6">
              {[
                {
                  name: "Rohan Desai",
                  feedback:
                    "Frightgo provided excellent transport support. Our goods were delivered safely and on schedule every time.",
                },
                {
                  name: "Neha Enterprises",
                  feedback:
                    "Professional and responsive team. The process was smooth from pickup to final delivery, with clear communication throughout.",
                },
                {
                  name: "Ankit Shah",
                  feedback:
                    "Very satisfied with the import service. All paperwork was handled seamlessly, and the shipment arrived as planned.",
                },
                {
                  name: "Global Trade Solutions",
                  feedback:
                    "We appreciate the reliability and transparency. Frightgo made our shipping process much easier and worry-free.",
                },
              ].map((client, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-96 min-h-[200px] flex-shrink-0 p-8 text-center"
                >
                  <h3 className="text-lg font-semibold text-[#4682B4] mb-3">
                    {client.name}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {client.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1B2D45] text-gray-300 py-8">
        <div className="container mx-auto p-6 grid md:grid-cols-3 gap-8 ">
          <div>
            <div className="flex items-center mb-3">
              <img
                src={Logo}
                alt="IMEX Logo"
                className="w-10 h-10 mr-2 rounded-full"
              />
              <h2 className="text-xl font-bold text-gray-300">Frightgo</h2>
            </div>
            <p className="text-md text-gray-500">
              We provide safe, timely, and efficient local transport across
              India and seamless import-export solutions for businesses and
              traders.
            </p>
          </div>

          <div></div>

          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Contact Us
            </h3>
            <p className="text-md text-gray-500"> Nashik,Mumbai Maharashtra</p>
            <p className="text-md text-gray-500"> +91 9022892800</p>
            <p className="text-md text-gray-500"> frightgoimpex@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Frightgo. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
