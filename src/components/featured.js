
import featuredAgencies from "../Data/index";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";

const Featured = () => {
  return (
    <div className=" w-full flex flex-col max-w-full 
     bg-color-1 p-8">
      <div className=" flex  xsm:justify-center sm:justify-center 
      mobile:justify-center ">
      <h2 className="  text-yellow-400 text-3xl
      font-sora font-bold mb-6">FEATURED AGENCIES</h2>
      </div>
      
      <div className="flex flex-wrap justify-between 
      xsm:justify-center sm:justify-center 
      mobile:justify-center">
        {featuredAgencies.map((agency) => (
          <div
            key={agency.id}
            className="bg-white shadow-lg 
            p-6 m-4 font-sourceCode w-80 rounded-3xl transition transform
             hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Agency Logo */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-900 rounded-full mr-2 flex-shrink-0"></div>
              <h3 className="text-xl font-sora font-semibold">{agency.name}</h3>
              <div className=" ml-4 pl-10"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>

              </div>
            </div>

            {/* Sectors */}
            <div className="flex text-sm flex-wrap">
              {agency.sectors.map((sector, index) => (
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
              <a href={agency.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <FaLinkedin />
              </a>
              <a href={agency.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <FaTwitter />
              </a>
              <a href={agency.socialMedia.email} className="text-gray-600">
                <FaEnvelope />
              </a>
              <a href={agency.socialMedia.website} target="_blank" rel="noopener noreferrer" className="text-gray-800">
                <FaGlobe />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
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

export default Featured;
