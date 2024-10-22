import Featured from "./featured";
import Componentfooter from "./footer";
//import Nav from "./navbar";
function Home() {
  return (
    <>

    <div
    className="h-full w-full max-w-full flex  bg-color-2 "> 
    
    <div className=" flex w-full flex-col">
    <div className=" flex mobile:flex-wrap h-full
    sm:flex-wrap 
    xsm:flex-wrap
     md:flex-nowrap justify-center flex-row mb-[70px]">
    <div className=" flex  flex-col mt-[100px] mx-10  ">
      <h1 className="font-sora text-[35px]  mb-[35px] font-semibold text-color-1 animate-slideIn ">
      The Construction Recruitment Agency Index
      </h1>
      <p className="font-sora text-[20px] font-normal text-color-1">
      Our Mission is Simple.
      </p>
      <p className="font-sora text-[20px] font-normal text-color-1">
      Every Construction Recruitment Agency in the UK.
      </p>
      <p className="font-sora text-[20px] font-normal text-color-1">
      All accessible from our Index.
      </p>
      <p className="font-sora text-[20px] font-normal text-color-1">
      Helping both Candidates & Clients.
      </p>
      


    </div>
    <div className=" mobile:justify-center mobile:ml-0 flex flex-col ml-[250px] mt-[80px] mx-10">
      <h1  className="font-sora text-[20px] pl-[10px] font-semibold text-color-1"  > phase 1: Uk</h1>
      <h1 className=" font-sora text-[70px] font-bold text-black"  >886</h1>
      <h1  className="font-sora text-[20px] pl-[20px] font-semibold text-color-1" >Agencies</h1>
    </div>
    </div>
   
    <Featured/>
    <div className="">
    <Componentfooter />
    </div>
    



    </div>
    
   
    </div>
    </>
    
  )
}

export default Home