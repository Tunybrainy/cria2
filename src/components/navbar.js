import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
//import { Navbar } from "flowbite-react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className=" flex flex-row w-full bg-color-2">

      
  
    <div className=" max-w-screen-xl  flex flex-wrap items-center 
    justify-between pl-6 pt-5 ">
         <h1 className="font-sora mobile:pl-0 pl-10 text-[60px] font-bold text-color-1 ">
            C.R.A.I
          </h1>
          </div>
          <div className=" lg:flex lg:items-center 
        lg:space-x-6 lg:ml-auto ml-auto pt-5 mr-5">
          <button
          className="md:hidden mt-4 text-green-900 mobile"
          onClick={toggleMobileMenu}

        >
          {/* Mobile Menu Icon */}
          <TiThMenu  className=" " size={50} />

            
        </button>

          </div>
          {/* Mobile Menu Button (visible on smaller screens) */}
        

        <div className="hidden md:flex md:items-center lg:flex lg:items-center 
        lg:space-x-6 lg:ml-auto ml-auto pt-5 mr-5
        ">
          <ul className=" flex space-x-6
        font-sora text-xl  font-semibold text-color-1 ">
        <li>
          <Link
            to="/"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Home' ? 'bg-color-1 rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/index"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'AgencyIndex' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('AgencyIndex')}
          >
            Index
          </Link>
        </li>
        <li>
          <Link
            to="/mission"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Mission' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Mission')}
          >
            Mission
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Contact' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </Link>
        </li>
        {/* Button */}
        <li>
          <Link
            to="/index"
            className="bg-white text-black px-6 py-2
             rounded-full hover:bg-gray-200 hover:text-color-1 
             border border-green-700"
          >
            View All Agencies
          </Link>
        </li>
          </ul>
          </div>

          
      <div className="md:hidden hidden" id="mobile-menu">
       <ul className="flex flex-col items-center space-y-2 bg-green-200 p-4 text-green-900">
        <li><a href="/index" className="hover:bg-green-300 px-3 py-1 rounded-md">Index</a></li>
      <li><a href="/mission" className="hover:bg-green-300 px-3 py-1 rounded-md">Mission</a></li>
      <li><a href="/contacts" className="hover:bg-green-300 px-3 py-1 rounded-md">Contact</a></li>
      <a href="/index" className="inline-block px-4 py-2 text-green-900 border
       border-green-900 rounded-full hover:bg-green-300">
        View All Agencies
        </a>
      </ul>
     </div>

     {isMobileMenuOpen && (
        <div className="md:hidden my-9 mx-10 bg-color-2 flex flex-col justify-center
        space-y-2 p-4 text-green-900">
          <ul className={
          isMobileMenuOpen
            ? ' flex-col items-center fixed md:hidden left-0 top-0 w-[100%]  h-[50%] border-r border-r-gray-900 bg-color-2 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }>
                  <IoClose onClick={toggleMobileMenu} className=" mt-1 mr-1" size={50} />

            <li className=" mt-[10px] ml-[50px]">
              <Link
                to="/"
                className={`nav-link font-sora  mt-[240px] text-[25px] transition-all duration-300 py-1 px-2 ${
                  activeLink === 'Home'
                    ? 'bg-green-900 text-white rounded-full'
                    : 'hover:bg-color-1 '
                }`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </Link>
            </li>
            <li className=" mt-[10px] ml-[50px]">
              <Link
                to="/index"
                className={`nav-link font-sora text-[25px] transition-all duration-300 py-1 px-2 ${
                  activeLink === 'AgencyIndex'
                    ? 'bg-color-1 text-white rounded-full'
                    : 'hover:bg-green-300'
                }`}
                onClick={() => handleLinkClick('AgencyIndex')}
              >
                Index
              </Link>
            </li>
            <li className=" mt-[10px] ml-[50px] "> 
              <Link
                to="/mission"
                className={`nav-link font-sora text-[25px] transition-all duration-300 py-1 px-2 ${
                  activeLink === 'Mission'
                    ? 'bg-color-1 text-white rounded-full'
                    : 'hover:bg-green-300'
                }`}
                onClick={() => handleLinkClick('Mission')}
              >
                Mission
              </Link>
            </li>
            <li className=" mt-[10px] ml-[50px] mb-[15px]">
              <Link
                to="/contact"
                className={`nav-link font-sora text-[25px] transition-all duration-300 py-1 px-2 ${
                  activeLink === 'Contact'
                    ? 'bg-color-1 text-white rounded-full'
                    : 'hover:bg-green-300'
                }`}
                onClick={() => handleLinkClick('Contact')}
              >
                Contact
              </Link>
            </li>
            <li className=" mt-[10px] ml-4 ">
              <Link
                to="/index"
                className="bg-white font-sora text-[25px] text-black px-6 py-2 rounded-full hover:bg-gray-200 border border-green-900"
              >
                View All Agencies
              </Link>
            </li>
          </ul>
        </div>
      )}

     



 
       
      
    </nav>
  );
};

export default Nav;
