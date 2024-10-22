import Componentfooter from "./footer";
import { 
  BsTelephoneInboundFill,
 } from "react-icons/bs";
 import { MdOutlineEmail } from "react-icons/md";
 import { LuMapPin } from "react-icons/lu";
 import { Label, TextInput, Textarea } from "flowbite-react";

function Contact() {
  return (
    <>
    <div className="w-full max-w-full flex flex-col bg-color-2"> 
      <div className="flex w-full flex-col">
        
        <div className="flex flex-col sm:flex-row justify-center mb-[70px]">
          {/* Contact Heading */}
          <div className="flex flex-col mt-[100px] mx-10 md:mx-10">
            <h1 className="font-sora text-[35px] sm:text-[35px] mb-[20px]
             sm:mb-[35px] font-semibold text-color-1">
              Contact Us
            </h1>
            <p className="font-sora text-[18px] sm:text-[20px] font-normal text-color-1">
              Any Questions or Remarks? Just write us a message!
            </p>
          </div>
          
          {/* Info Section */}
          <div className="  mobile:mx-0 mobile:ml-[125px] 
          mobile:flex-wrap xsm:flex-wrap  sm:ml-80 sm:mx-5 flex flex-col ml-[250px] mt-[80px] mx-10">
            <h1 className="  font-sora text-[18px] sm:text-[20px] pl-[10px] font-semibold text-color-1">Phase 1: UK</h1>
            <h1 className="font-sora text-[50px] sm:text-[70px] font-bold text-black">886</h1>
            <h1 className="font-sora text-[18px] sm:text-[20px] pl-[20px] font-semibold text-color-1">Agencies</h1>
          </div>
        </div>
  
        {/* Contact Form Section */}
        <div className="bg-white lg:w-[1196px] md:w-[1196px]
         lg:h-[500px] md:h-[500px]
          flex md:flex-row lg:flex-row flex-col mx-auto 
        mb-5 rounded-lg max-w-full ">
          <div className="bg-color-1 rounded-lg md:flex-row lg:flex-row flex-col w-full lg:w-[700px] p-6 lg:p-0">
            <div className="flex flex-col mt-4 lg:mt-[30px] ">
              <h1 className="font-sora text-[25px] lg:text-[30px] ml-0 lg:ml-[70px] mt-[10px] font-semibold text-color-2">
                Contact Information
              </h1>
              <p className="font-sora text-[18px] lg:text-[20px] ml-0 lg:ml-[55px] font-normal text-color-2">
                Say something to start a live chat!
              </p>
            </div>
  
            {/* Contact Info */}
            <div className="flex flex-col space-y-5 mt-5 lg:mt-[75px] lg:ml-[70px]">
              <div className="flex items-center">
                <BsTelephoneInboundFill className="text-[25px] text-color-2" />
                <h1 className="font-sora text-[18px] lg:text-[20px] pl-4 font-normal text-color-2">123-578-789</h1>
              </div>
              <div className="flex items-center">
                <MdOutlineEmail className="text-[30px] text-color-2" />
                <h1 className="font-sora text-[18px] lg:text-[20px] pl-4 font-normal text-color-2">Crai@gmail.com</h1>
              </div>
              <div className="flex items-start">
                <LuMapPin className="text-[50px] text-color-2" />
                <h1 className="font-sora text-[18px] lg:text-[20px] pl-4 font-normal text-color-2">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </h1>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <form className="flex flex-col gap-4 ml- w-full p-6 lg:p-0 lg:max-w-full">
            <div className="flex font-sora flex-col ml-5 md:flex-row mt-4 lg:mt-10 lg:ml-[50px]">
              <div className="flex flex-col w-full md:w-[278px]">
                <Label className="text-color-1 text-[18px] sm:text-[20px]" htmlFor="first-name" value="First Name" />
                <TextInput className="w-full" id="first-name" type="text" placeholder="John" required />
              </div>
              <div className="flex flex-col w-full md:w-[278px] mt-4 md:mt-0 md:ml-[20px]">
                <Label className="text-color-1 text-[18px] sm:text-[20px]" htmlFor="last-name" value="Last Name" />
                <TextInput className="w-full" id="last-name" type="text" placeholder="Doe" required />
              </div>
            </div>
  
            <div className="flex font-sora flex-col ml-5 md:flex-row mt-4 lg:mt-10 lg:ml-[50px]">
              <div className="flex flex-col w-full md:w-[278px]">
                <Label className="text-color-1 text-[18px] sm:text-[20px]" htmlFor="email" value="Your Email" />
                <TextInput className="w-full" id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div className="flex flex-col w-full md:w-[278px] mt-4 md:mt-0 md:ml-[20px]">
                <Label className="text-color-1 text-[18px] sm:text-[20px]" htmlFor="phone" value="Phone" />
                <TextInput className="w-full" id="phone" type="text" placeholder="+123-578-900" required />
              </div>
            </div>
  
            <div className="flex font-sora flex-col ml-5 md:flex-row mt-4 lg:flex-col lg:mt-10 lg:ml-[50px]">
              <Label className="text-color-1 text-[18px] sm:text-[20px]" htmlFor="message" value="Your Message" />
              <Textarea className="w-full lg:w-[80%]" id="message" placeholder="Leave a comment..." required rows={4} />
            </div>
  
            <div className=" font-sora   flex text-[20px] justify-center mt-2 ">
              <a href="#" className="inline-block px-6 py-2 bg-color-1 text-color-2
               border rounded-full hover:bg-white hover:text-color-1">
                Send Message
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Componentfooter />
  </>
  
  )
}

export default Contact;