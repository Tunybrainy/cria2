

import { Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Componentfooter() {
  return (
    <Footer container className=" bg-color-2">
      <div className="w-full   bg-color-2">
        <div className="w-full font-sora text-[20px] 
      
        mobile:justify-center text-color-1 
        sm:flex sm:items-center sm:justify-between">
          <div className=" flex mobile:justify-center">
          <Footer.Copyright className="text-color-1 text-[20px] 
          " href="#" by=" C.R.A.I™" year={2024} />

          </div>
          
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center  mobile:justify-center">
            <Footer.Icon className=" text-color-1 " href="#" icon={BsFacebook} />
            <Footer.Icon className=" text-color-1 " href="#" icon={BsInstagram} />
            <Footer.Icon className=" text-color-1 " href="#" icon={BsTwitter} />
            
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Componentfooter;
