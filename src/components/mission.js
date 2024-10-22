
import { useNavigate } from "react-router-dom";
import Componentfooter from "./footer";

const Mission = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <>
    <div className="w-full h-full max-w-full flex xsm:justify-items-center mobile:justify-items-center bg-color-2"> 
      <div className="flex w-full flex-wrap mobile:flex-wrap sm:flex-wrap xsm:flex-wrap md:flex-nowrap justify-center flex-row">
        
        <div className="flex flex-wrap xsm:justify-items-center mobile:justify-items-center sm:flex-wrap 
        md:flex-nowrap justify-center flex-row mb-[70px]">
          {/* Left Section */}
          <div className="flex flex-col mt-[100px] ml-[30px] sm:ml-[60px] mr-5 sm:mr-10">
            <h1 className="font-sora text-[28px] sm:text-[35px] font-semibold text-color-1">
              Don’t see your Agency?
            </h1>
            <h1 className="font-sora text-[28px] sm:text-[35px] font-semibold text-color-1">
              Submit a Request
            </h1>
            <img className="object-fill mt-5 sm:mt-10" src="../src/assets/mission.png" alt="" />
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col mt-[50px] sm:mt-[80px] lg:ml-[150px]  mobile:justify-center
          mx-5 ">
            <h1 className="font-sora text-[28px] sm:text-[35px] pl-0  pb-[15px] 
            font-semibold text-color-1">
              MISSION
            </h1>
            <p className="font-sora text-[18px] sm:text-[20px] font-normal text-color-1">
              Our Mission is to have a simple, easy-to-use platform that displays every single Construction Recruitment Agency in the UK.
            </p>
            <p className="break-normal font-sora text-[18px] sm:text-[20px] font-normal text-color-1 mt-2 sm:mt-4">
              We aim to increase the visibility of these agencies for two key audiences:
            </p>
            <p className="font-sora text-[18px] sm:text-[20px] font-normal text-color-1 mt-2">
              • Job-Seekers that are looking for options other than the traditional job-boards.
            </p>
            <p className="font-sora text-[18px] sm:text-[20px] font-normal text-color-1 mt-2">
              • Companies that have vacancies, that need good recruiters to partner with.
            </p>
  
            <div className="font-sora animate-bounce mt-[30px]  mobile:justify-center xsm:ml-[200px]
             sm:mt-[50px] flex 
            text-[18px] sm:text-[20px] pl-0  pt-6 flex-wrap gap-2">
              <a href="#" onClick={handleButtonClick} className="inline-block px-4 py-2 bg-color-1
               text-color-2 border border-green-900 rounded-full hover:bg-white hover:text-color-1">
                Submit a Request
              </a>
            </div>
          </div>
        </div>
  
      </div>
    </div>
    <div className=" ">
    <Componentfooter />
    </div>
    
    
  </>
  
  )
}

export default Mission;