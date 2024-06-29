import React from "react";
import HomeIcon1 from "./homeIcon1.jpg";
import Cards from "../../Utilities/Cards";
import WebsiteReDesign from "../../Utilities/WebsiteReDesign.png";
import BrandingNote from "../../Utilities/BrandingNote.png";
import SmartHome from "../../Utilities/SmartHome.png";
import HalloweenStore from "../../Utilities/HalloweenStore.png";

function Section3() {
  return (
    <>
      <div className="mt-8 lg:mt-40 w-full  flex flex-col items-center">
        <ul className=" mb-10 flex items-center text-base sm:text-[20px] gap-x-3 font-medium lg:hidden ">
          <li>
            <i className="ri-heart-3-line p-[10px]  border-[1px] border-opacity-20 hover:border-opacity-25 border-[#6E6D7A]  rounded-full"></i>
          </li>
          <li>
            <i className="ri-bookmark-line p-[10px] border-[1px] border-opacity-20 hover:border-opacity-25 border-[#6E6D7A]  rounded-full"></i>
          </li>
          <li>
            <i className="ri-upload-2-line p-[10px]  border-[1px] border-opacity-20 hover:border-opacity-25 border-[#6E6D7A]  rounded-full"></i>
          </li>
          <li>
            <i className="ri-chat-3-line p-[10px]  border-[1px] border-opacity-20 hover:border-opacity-25 border-[#6E6D7A]  rounded-full"></i>
          </li>
          <li>
            <i className="ri-information-line p-[10px]  border-[1px] border-opacity-20 hover:border-opacity-25 border-[#6E6D7A]  rounded-full"></i>
          </li>
        </ul>
        <div className="w-full flex items-center justify-between">
          <div className=" h-[1.4px] opacity-30 grow bg-[#6E6D7A]"></div>
          <img
            className="mx-5 w-[73px] md:w-[75px] rounded-full"
            src={HomeIcon1}
            alt="loading..."
          />
          <div className=" h-[1.4px] opacity-30 grow bg-[#6E6D7A]"></div>
        </div>

        <span className="my-7 text-xl font-medium">Shivam Rai</span>
        <button
          type="button"
          className="my-3 mb-10  text-sm font-semibold bg-black hover:bg-[#565564] px-4  py-[10px] rounded-3xl text-white"
        >
          Get in touch
        </button>

        <div className="my-5 w-full flex justify-between">
          <span className="font-bold">More by Shivam Rai </span>
          <span className="text-[15px] font-normal">View profile</span>
        </div>

        <div className="w-full  flex justify-between flex-wrap lg:flex-nowrap gap-y-10 lg:gap-x-6 xl:gap-x-10">
          <Cards image={WebsiteReDesign} text="SheCodes Website Re-design" />
          <Cards image={SmartHome} text="UI design - Smart Home App" />
          <Cards image={HalloweenStore} text="Halloween Store app concept" />
          <Cards
            image={BrandingNote}
            text="Branding - Seek Discomfort Notebook Mockup"
          />
        </div>
      </div>

      <div className="my-32 w-full hidden md:flex justify-center items-center gap-x-5 text-xs text-[#6E6D7A] font-medium">
        <span className=" w-6 h-6 flex justify-center items-center border-[1px]  border-b-4 border-[#DBDADE] rounded-[5px] ">
          L
        </span>
        <span className="w-6 h-6 flex justify-center items-center border-[1px]  border-b-4 border-[#DBDADE] rounded-[5px] ">
          F
        </span>
        <span>Like</span>
      </div>
    </>
  );
}

export default Section3;
