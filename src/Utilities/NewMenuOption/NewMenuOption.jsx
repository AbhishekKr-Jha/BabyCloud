import React from "react";
import { useSelector } from "react-redux";
import ExtraHoverableMenu from "../../Components/SmallMiniComponents/ExtraHoverableMenu";

function NewMenuOption() {
  const isMenuVisible = useSelector((state) => state.menu.isMenuVisible);
  console.log(isMenuVisible);
  return (
    <>
      <section
        id="newNav"
        className={`py-[1px] px-9 w-full  h-[91.6vh]   absolute ${
          !isMenuVisible ? " -left-full opacity-40" : "left-0 opacity-100  "
        }  top-[80px] bg-white  border-t-[1px]  border-[#6E6D7A] text-base md:text-[17px] transition-all duration-150 ease-linear`}
      >
        <ul className="my-6  space-y-4 font-medium">
          <li className="space-y-5 ">
            <span className="font-medium hover:text-[#565564] ">
              Find Designers
            </span>

            <div className="pl-7 space-y-4 border-l-[1px] border-[#6E6D7A] border-opacity-50">
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
          <li className="font-medium hover:text-[#565564]">Inspiration</li>
          <li className="space-y-5 font-medium">
            <span className="hover:text-[#565564]">Courses</span>

            <div className="pl-7 space-y-4 border-l-[1px] border-[#6E6D7A]  border-opacity-50">
              <ExtraHoverableMenu
                mainText="UX Diploma "
                subText=" Learn UX design from scratch in 6 months "
              />
              <ExtraHoverableMenu
                mainText="UI Certificate "
                subText=" 12-week UI skill building for designers "
              />
              <ExtraHoverableMenu
                mainText="Live interactive workshops "
                subText="with design professionals"
              />
            </div>
          </li>
          <li className="font-medium hover:text-[#565564]">Jobs</li>
          <li className="font-medium hover:text-[#565564]">Go pro</li>
          <hr className="bg-#6E6D7A] h-[1px] border-[#6E6D7A]  border-opacity-30" />
          <li className="font-medium hover:text-[#565564]">Log in</li>
        </ul>
      </section>
    </>
  );
}

export default NewMenuOption;
