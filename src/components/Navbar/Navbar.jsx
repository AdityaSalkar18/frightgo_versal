// components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => handleLinkClick("/")}
        >
          <img
            src={Logo}
           className="w-9 h-9 rounded-full"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Frightgo
          </span>
        </Link>

       
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/book">
          <button
            type="button"
            className="text-white bg-[#4682B4] hover:bg-[#36648B] focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
              "
          >
           Book
          </button>
          </Link>

          
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
              rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

       
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
              rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 
              md:bg-white "
          >
            <li>
              <button
                onClick={() => handleLinkClick("/")}
                className={`block py-1 px-3 rounded-lg md:p-0 ${
                  isActive("/")
                    ? "text-[#4682B4]  md:bg-transparent md:text-[#4682B4] "
                    : "text-gray-700 hover:bg-transparent hover:text-[#4682B4]"
                }`}
              >
                Home
              </button>
            </li>
             <li>
              <button
                onClick={() => handleLinkClick("/service")}
                className={`block py-1 px-3 rounded-lg md:p-0 ${
                  isActive("/service")
                    ? "text-[#4682B4]  md:bg-transparent md:text-[#4682B4] "
                    : "text-gray-700 hover:bg-transparent hover:text-[#4682B4] "
                }`}
              >
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/about")}
                className={`block py-1 px-3 rounded-lg md:p-0 ${
                  isActive("/about")
                    ? "text-[#4682B4]  md:bg-transparent md:text-[#4682B4] "
                    : "text-gray-700 hover:bg-transparent hover:text-[#4682B4] "
                }`}
              >
                About
              </button>
            </li>
           
            <li>
              <button
                onClick={() => handleLinkClick("/contact")}
                className={`block py-1 px-3 rounded-lg md:p-0 ${
                  isActive("/contact")
                    ? "text-[#4682B4]  md:bg-transparent md:text-[#4682B4] "
                    : "text-gray-700 hover:bg-transparent hover:text-[#4682B4] "
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
