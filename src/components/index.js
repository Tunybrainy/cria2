import { useState } from "react";
import Componentfooter from "./footer";
import agencies from "../Data/Agencydata";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";
//import { IoIosArrowDropupCircle } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";




// Sample data


function Index() {
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter agencies based on the search term
  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (agency) => {
    setSelectedAgency(agency);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
    <div className=" bg-color-2 w-full h-max">

    <div className=" ml-2 flex flex-col
     md:flex-row smx:flex-row sm:flex-row mobile:flex-col 
      mobile:m-auto pt-10
  
       items-center ">
      <div className=" ml-2 flex flex-row  mobile:w-[250px] h-[40px] bg-color-1 rounded-full " >
      <input
     type="text"
      placeholder="Search agencies..."
     value={searchTerm}
     onChange={handleSearchChange}
     className="ml-4 p-2 my-2 rounded-full bg-white text-black"
      />
 
       <FaSearch className="  px-2 pt-2 text-[35px] text-white "/>

      </div>
      <div className=" flex flex-row ">
      <h2 className=" lg:pl-10 md:pl-10 sm:pl-10 mobile:pl-0 pt-1 text-lg font-bold">{filteredAgencies.length} Agencies Found</h2>
      </div>
   
      

     </div>
     
    <div className=" pt-[75px] pl-[100px] mt-5 mb-[50px] mobile:p-[10px]
     flex flex-col md:flex-row lg:flex-row h-full mobile:flex-col font-sora bg-color-2">
      {/* Sidebar List */}
      
      <div className="lg:w-1/3 mobile:w-[100%]  bg-color-1 rounded-lg
       text-white overflow-y-auto mobile:overflow-y-3 ">
      <div className="p-4 flex flex-col items-center justify-between ">
        {/* Search Bar */}
        
        
        </div>
        <ul className="max-h-64 overflow-y-auto">
          {filteredAgencies.map((agency) => (
            <li
              key={agency.id}
              onClick={() => handleSelect(agency)}
              className={`p-4 cursor-pointer hover:bg-green-700
                 ${selectedAgency?.id === agency.id ? "bg-green-700" : ""}`}
            >
              {agency.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Detail Card */}
      <div className=" mobile:w-[100%] w-[70%] h-[70%] p-4 pt-[20px] bg-color-2">
        {selectedAgency ? (
          <div className="bg-white  rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold">{selectedAgency.name}</h3>
            <p className="mt-2 text-gray-500">Location: {selectedAgency.location || "Not Available"}</p>

            <div className="flex flex-wrap mt-4">
              {selectedAgency.sectors.map((sector, index) => (
                <span
                  key={index}
                  className={`m-1 px-2 py-1 rounded-full text-white ${getColor(sector)}`}
                >
                  {sector}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex space-x-4 mt-4">
              <a href={selectedAgency.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <FaLinkedin />
              </a>
              <a href={selectedAgency.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <FaTwitter />
              </a>
              <a href={selectedAgency.socialMedia.email} className="text-gray-600">
                <FaEnvelope />
              </a>
              <a href={selectedAgency.socialMedia.website} target="_blank" rel="noopener noreferrer" className="text-gray-800">
                <FaGlobe />
              </a>
            </div>

            {/* Placeholder Information */}
            <div className="mt-4">
              <p>UK Company Number: Not Provided</p>
              <p>Number of Recruiters: Not Provided</p>
              <p>Number of Offices: Not Provided</p>
            </div>
          </div>
        ) : (
          <p>Select an agency to view details.</p>
        )}
      </div>
    
     {/* button */}
     <div className="hidden md:flex flex-col mt-4 ">
    <TiArrowSortedUp
    onClick={() => {
      const currentIndex = filteredAgencies.findIndex(agency => agency.id === selectedAgency.id);
      if (currentIndex > 0) {
        handleSelect(filteredAgencies[currentIndex - 1]);
      }
    }}
    className="   mt-[75px] px-2 py-2 text-[75px] text-color-1 "
    disabled={!selectedAgency || filteredAgencies.findIndex(agency => agency.id === selectedAgency.id) === 0}
  />
    
  
  <TiArrowSortedDown
    onClick={() => {
      const currentIndex = filteredAgencies.findIndex(agency => agency.id === selectedAgency.id);
      if (currentIndex < filteredAgencies.length - 1) {
        handleSelect(filteredAgencies[currentIndex + 1]);
      }
    }}
    className="  mt-[-30px] px-2 py-2 text-[75px] text-color-1"
    disabled={!selectedAgency || filteredAgencies.findIndex(agency => agency.id === selectedAgency.id) === filteredAgencies.length - 1}
  />
  
     </div>
     <div className="flex flex-row mx-auto items-center lg:hidden md:hidden ">
    <TiArrowSortedUp
    onClick={() => {
      const currentIndex = filteredAgencies.findIndex(agency => agency.id === selectedAgency.id);
      if (currentIndex > 0) {
        handleSelect(filteredAgencies[currentIndex - 1]);
      }
    }}
    className="  px-2 py-2 text-[75px] text-color-1 -rotate-90"
    disabled={!selectedAgency || filteredAgencies.findIndex(agency => agency.id === selectedAgency.id) === 0}
  />
    
  
  <TiArrowSortedDown
    onClick={() => {
      const currentIndex = filteredAgencies.findIndex(agency => agency.id === selectedAgency.id);
      if (currentIndex < filteredAgencies.length - 1) {
        handleSelect(filteredAgencies[currentIndex + 1]);
      }
    }}
    className="  px-1 py-2 text-[75px] text-color-1 -rotate-90"
    disabled={!selectedAgency || filteredAgencies.findIndex(agency => agency.id === selectedAgency.id) === filteredAgencies.length - 1}
  />
  
     </div>


    </div>
    <Componentfooter/>
    
    </div>
    </>
    
  );
}

// Utility function to determine badge colors
function getColor(sector) {
  switch (sector) {
    case "Construction":
      return "bg-red-500";
    case "Engineering":
      return "bg-blue-500";
    case "Design":
      return "bg-pink-500";
    case "Facilities Management":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
}

export default Index;
