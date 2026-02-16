import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
const Service = () => {
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
      <div className="container mx-auto px-4 py-8 mt-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-4 text-center">
          Our Services
        </h2>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 ">
          <div className="lg:w-2/5 w-full flex items-center justify-center p-6">
            <img
              src="https://emeraldtransportationsolutions.com/wp-content/uploads/2020/12/wMfjDRcLKjtEpTSOlUyeRqhDU8xbwM2d1606848414.jpg"
              alt="Local Transport"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="lg:w-3/5 w-full flex flex-col gap-6 p-6 ">
            <h3 className="text-xl lg:text-3xl font-bold mb-3 text-gray-700">
              Reliable Local Transport Services
            </h3>
            <p className="text-lg leading-relaxed text-gray-500">
              We provide <span className="font-semibold">efficient</span>,{" "}
              <span className="font-semibold">safe</span>, and{" "}
              <span className="font-semibold">cost-effective</span> local
              transport solutions for agricultural goods and other consignments.
              Our well-maintained fleet and experienced drivers ensure timely
              deliveries and secure handling of every shipment, meeting the
              diverse needs of farmers, traders, and businesses across the
              region.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                States We Serve in India
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Maharashtra",
                  "Gujarat",
                  "Karnataka",
                  "Tamil Nadu",
                  "Rajasthan",

                  "Madhya Pradesh",
                  "Punjab",
                ].map((state) => (
                  <span
                    key={state}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 border rounded-lg shadow-sm text-gray-700"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={openModalLocalTransport}
              type="button"
              className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center my-3 w-fit"
            >
              Transport Enquiry
            </button>
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
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 ">
          <div className="lg:w-2/5 w-full flex items-center justify-center p-6">
            <img
              src="https://img.freepik.com/premium-photo/vibrant-colors-spices-row-street-market-generated-by-ai_188544-55468.jpg"
              alt="Export Goods"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="lg:w-3/5 w-full flex flex-col gap-6 p-6 text-left">
            <h3 className="text-xl lg:text-3xl font-bold mb-3 text-gray-700">
              Premium Agricultural Exports from India
            </h3>
            <p className="text-lg leading-relaxed text-gray-500">
              We specialize in exporting the finest quality
              <span className="font-semibold"> vegetables</span>,
              <span className="font-semibold"> fruits</span>,
              <span className="font-semibold"> spices</span>,
              <span className="font-semibold"> coffee</span>, and
              <span className="font-semibold"> tea</span> from India to global
              markets. Our products are sourced directly from trusted farmers,
              ensuring freshness, purity, and unmatched flavor in every
              shipment.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Countries We Export To
              </h4>
              <div className="flex flex-wrap gap-3">
                {["USA", "UK", "Germany", "UAE", "Japan", "Australia"].map(
                  (country) => (
                    <span
                      key={country}
                      className="px-4 py-2 text-sm font-medium bg-gray-100 border rounded-lg shadow-sm text-gray-700"
                    >
                      {country}
                    </span>
                  )
                )}
              </div>
            </div>

            <button
              onClick={openModalExport}
              type="button"
              className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center my-3 w-fit"
            >
              Export Enquiry
            </button>
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
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 ">
          <div className="lg:w-2/5 w-full flex items-center justify-center p-6">
            <img
              src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Import Goods"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="lg:w-3/5 w-full flex flex-col gap-6 p-6 ">
            <h3 className="text-xl lg:text-3xl font-bold mb-3 text-gray-700">
              Quality Imports to India
            </h3>
            <p className="text-lg leading-relaxed text-gray-500">
              We import premium <span className="font-semibold">textiles</span>,
              <span className="font-semibold"> fashion accessories</span>,
              <span className="font-semibold"> apparel</span>, and
              <span className="font-semibold"> lifestyle products</span> from
              around the world. Our sourcing network ensures top-quality items
              that meet global standards, catering to the growing demand for
              premium international goods in India.
            </p>

            {/* Countries for Import */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Countries We Import From
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Italy",
                  "France",
                  "China",
                  "Thailand",
                  "South Korea",
                  "Brazil",
                ].map((country) => (
                  <span
                    key={country}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 border rounded-lg shadow-sm text-gray-700"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={openModalImport}
              type="button"
              className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center my-3 w-fit"
            >
              Import Enquiry
            </button>
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
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8 text-center">
            Modes of Transportation
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://www.merchantnavydecoded.com/wp-content/uploads/2023/09/types-of-ships-3.jpg",
                title: "Cargo Ship",
                desc: "Reliable sea freight for large-scale international trade.",
              },
              {
                img: "https://i.ytimg.com/vi/i6CrbqeksJ8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdx89Zbb0q1Jh7Lw3aPcs9K7zACQ",
                title: "Cargo Plane",
                desc: "Fast air freight solutions for time-sensitive goods.",
              },
              {
                img: "https://mabnasia.com/wp-content/uploads/2021/10/trucks-Iran.png",
                title: "Transport Truck",
                desc: "Efficient road transport for domestic deliveries.",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERGwZ866RrWOKG_CR6JYCc1qcBhcCkCJhVQ&s",
                title: "Freight Train",
                desc: "Cost-effective bulk goods movement via rail for safe deliveries.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Theme Color Overlay */}
                <div className="absolute inset-0 bg-[#4682B4]/40 group-hover:bg-[#4682B4]/60 transition-all duration-500"></div>

                {/* Gradient Text Area */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-md text-gray-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mt-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8 text-center">
            Our Service Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-[#4682B4] text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Submit Enquiry
              </h3>
              <p className="text-gray-500 text-md">
                Fill out our enquiry form with details of your import/export
                requirements.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-[#4682B4] text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                We Connect
              </h3>
              <p className="text-gray-500 text-md">
                Our team reviews your enquiry and connects with suitable
                partners.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-[#4682B4] text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Negotiation & Agreement
              </h3>
              <p className="text-gray-500 text-md">
                Discuss pricing, shipping, and finalize agreements with verified
                partners.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-[#4682B4] text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Delivery & Support
              </h3>
              <p className="text-gray-500 text-md">
                Goods are delivered safely and we provide continuous support
                throughout.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="py-12 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8 text-center">
              Why Choose Us
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              We provide reliable, transparent, and efficient services tailored
              to meet your export-import needs. Here’s why businesses trust us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center">
                <FaHandshake className="text-[#4682B4] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Trusted Expertise
                </h3>
                <p className="text-gray-500 text-center">
                  Years of experience in handling global trade with reliability
                  and professionalism.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center">
                <BiSupport className="text-[#4682B4] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-500 text-center">
                  Our dedicated support team ensures smooth communication across
                  time zones.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center">
                <AiOutlineGlobal className="text-[#4682B4] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-500 text-center">
                  Extensive network across multiple countries ensuring fast and
                  safe delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
