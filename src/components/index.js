import { useState } from "react";
import Componentfooter from "./footer";
import agencies from "../Data/Agencydata";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";




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
    <div className=" bg-color-2 max-w-full">
    <div className=" pt-[75px] pl-[100px] mobile:p-[10px] flex md:flex-row lg:flex-row h-full mobile:flex-col font-sora bg-color-2">
      {/* Sidebar List */}
      <div className="lg:w-1/3 mobile:w-[100%] bg-green-800 rounded-lg text-white overflow-y-auto">
      <div className="p-4 flex flex-col items-center justify-between">
        {/* Search Bar */}
        <input
            type="text"
            placeholder="Search agencies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="ml-4 p-2 rounded-md bg-white text-black"
          />
        <h2 className="p-4 text-lg font-bold">{filteredAgencies.length} Agencies Found</h2>
        
        </div>
        <ul>
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
      <div className=" mobile:w-[100%] w-[50%] p-4 pt-[75px] bg-color-2">
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
