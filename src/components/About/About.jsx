import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6">
            About Us
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Frightgo, founded in 2025 and based in Mumbai, India, provides reliable transport and trade solutions. We specialize in safe, on-time local deliveries and seamless import-export services connecting businesses, farmers, and traders with global markets through a strong logistics and compliance network.
          </p>

          <ul className="list-disc list-inside text-lg text-gray-500 leading-relaxed mb-8 space-y-2">
            <li>
              <span className="font-semibold text-[#4682B4]">Local Transport:</span> Efficient,
              safe, and cost-effective transportation of goods across
              Maharashtra and India.
            </li>
            <li>
              <span className="font-semibold text-[#4682B4]">Exports:</span> High-quality
              vegetables, fruits, spices, coffee, and tea — sourced directly
              from trusted farmers.
            </li>
            <li>
              <span className="font-semibold text-[#4682B4]">Imports:</span> Premium textiles,
              fashion accessories, apparel, and lifestyle products from top
              global suppliers.
            </li>
          </ul>

          <Link to="/join">
              <button
                type="button"
                className="py-2 px-6 text-md font-medium text-white bg-[#4682B4] rounded-lg hover:bg-[#36648B] transition"
              >
                Join Us
              </button>
               </Link>


          <div className="flex justify-center">
             
            <img
              src={Logo}
              alt="Import Export Services"
              className=" max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="conaitner mx-auto px-4 py-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 text-center">
          Industries We Work On
        </h2>
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Industry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Industry Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://img.freepik.com/premium-vector/agriculture-logo-design-concept_761413-7951.jpg"
                alt="Agriculture"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Agriculture
              </h3>
              <p className="text-gray-500 text-md">
                Supporting global agriculture exports and imports with reliable
                logistics.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg"
                alt="Textiles"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Textiles
              </h3>
              <p className="text-gray-500 text-md">
                Connecting textile manufacturers to international buyers
                seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://t4.ftcdn.net/jpg/02/56/94/73/360_F_256947386_VJGb69dBUeVGRBJEV56nnan2N1hMA8CW.jpg"
                alt="Technology"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Technology
              </h3>
              <p className="text-gray-500 text-md">
                Enabling smooth trade for IT products, electronics, and
                innovation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://img.freepik.com/premium-vector/medical-pharma-logo-design_960117-8.jpg"
                alt="Pharmaceuticals"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Pharmaceuticals
              </h3>
              <p className="text-gray-500 text-md">
                Facilitating safe and efficient import/export of pharma goods.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://img.freepik.com/premium-vector/automotive-car-logo_852937-4547.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Automobile"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Automobile
              </h3>
              <p className="text-gray-500 text-md">
                Connecting automotive industry with international partners.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img
                src="https://cdn4.vectorstock.com/i/1000x1000/93/93/food-and-beverage-logo-vector-20799393.jpg"
                alt="Food & Beverages"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#4682B4] mb-2">
                Food & Beverages
              </h3>
              <p className="text-gray-500 text-md">
                Helping F&B businesses expand globally with trusted trade
                services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
  <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 text-center">
    Our Work
  </h2>

  <div className="py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "15+", label: "Projects Completed" },
          { number: "20+", label: "Clients Served" },
          { number: "6+", label: "Industries We Work" },
          { number: "10+", label: "Countries Served" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center"
          >
            <span className="text-4xl font-extrabold text-[#4682B4]">
              {item.number}
            </span>
            <p className="mt-2 text-lg text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8">
      What Our Customers Say
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

    </>
  );
};

export default About;
