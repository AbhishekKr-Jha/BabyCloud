import React from "react";
import Menu from "../../Utilities/Hamburger/Menu";
import ExtraHoverableMenu from "../SmallMiniComponents/ExtraHoverableMenu";

function Navbar() {
  return (
    <header id="navbar" className="w-screen  top-0 left-0 bg-white z-40">
      <nav className="w-full  flex  justify-between items-center text-[13px]  sm:text-[15px] py-[12px] lg:py-[26px] px-7 md:px-10">
        <ul className="flex justify-between items-center gap-x-8 font-medium">
          {/* -----the hamburger menu icon and animation for small screen--------- */}
          <li className="-mr-2 lg:hidden text-2xl group">
            <Menu />
          </li>

          <li className="text-[31px] lg:text-[30px]  newFont hover:text-[#565564]">
            Dribble
          </li>
          <li className="hidden lg:block  relative group">
            Find designers<i className="ri-arrow-down-s-line"></i>
            <div className="w-64 hidden h-0 group-hover:h-auto p-8 group-hover:flex flex-col gap-y-4 rounded-xl  opacity-0 group-hover:opacity-100  bg-white  border-[1px] border-[#6E6D7A] border-opacity-10 absolute -left-4 transition-all duration-700 ease-in-out">
              {/* -------I have created a component for the dropdown options to make the  code more short and easily understandable--------- */}
              <ExtraHoverableMenu
                mainText="Designer search "
                subText="   Quickly find your next designer "
              />
              <ExtraHoverableMenu
                mainText="Post a job "
                subText=" The #1 job board for design talent "
              />
            </div>
          </li>
          <li className="hidden lg:block">Inspiration</li>
          <li className="hidden lg:block relative group/item">
            Courses<i className="ri-arrow-down-s-line"></i>
            <div className="w-72 hidden h-0 group-hover/item:h-auto p-8 group-hover/item:flex flex-col gap-y-4 rounded-xl  opacity-0 group-hover/item:opacity-100   bg-white border-[1px] border-[#6E6D7A] border-opacity-10 absolute -left-4 transition-all duration-700 ease-in-out">
              <ExtraHoverableMenu
                mainText="UX Diploma "
                subText=" Learn UX design from scratch in 6 months "
              />
              <ExtraHoverableMenu
                mainText="UI Certificate "
                subText=" 12-week UI skill building for designers "
              />
              <hr className="bg-#6E6D7A] h-[1px] border-[#6E6D7A]  border-opacity-30" />
              <ExtraHoverableMenu
                mainText="Live interactive workshops "
                subText="with design professionals"
              />
            </div>
          </li>
          <li className="hidden lg:block">Jobs</li>
          <li className="hidden lg:block">Go Pro</li>
        </ul>
        <ul className="flex justify-between items-center gap-x-3 lg:gap-x-6 font-medium ">
          <li className=" xl:px-5 py-2 flex   rounded-3xl  font-normal border-4 border-transparent xl:bg-[#F4F5FB] xl:hover:bg-white  xl:hover:border-[#FDBEC7] xl:hover:border-opacity-20 group">
            <i className="ri-search-line  text-xl lg:text-lg text-black lg:text-[#6E6D7A] "></i>
            <input
              type="text"
              className="px-3 hidden xl:block focus:outline-none  bg-[#F4F5FB] group-hover:bg-white "
              placeholder="Search..."
            />
          </li>
          <li className="hidden lg:block ">Log in</li>
          <li className="px-5 py-3  bg-black hover:bg-[#565564] rounded-3xl  text-white font3">
            Sign up
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
