import React, { useEffect, useRef, useState } from "react";
import HomeIcon1 from "./homeIcon1.jpg";
import Main from "./Main.png";

function Section1() {
  const elementRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      setSticky(elementTop <= 0);
    }
  };
// to make the item sticky i have used a different approach as the   "position:sticky"   is creating some problem as it has some criteria to be used 
// so to make the elemnt sticky i have used adiffrent approach
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full  ">
        <h5 className="text-[21px] sm:text-[24px] font-semibold">
          Witt - Personal Organizer Web Design
        </h5>
      </div>

      <div className="w-full md:h-auto" ref={elementRef}>
        <div
          className={`my-5 w-full flex justify-between ${
            isSticky
              ? "fixed -top-5 left-0 right-0 z-10 my-0 bg-white py-2 px-2 w-[97%] lg:w-[83%] max-w-[1300px] mx-auto transition-all duration-300 ease-linear "
              : ""
          }`}
        >
          <div className="flex">
            <img
              className="h-[35px] sm:h-[45px] md:w-[50px] md:h-auto rounded-full"
              src={HomeIcon1}
              alt="loading..."
            />
            <div className="mx-3">
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Shivam Rai
              </p>
              <p className="flex items-center text-green-600 text-xs  my-[2px] sm:my-1">
                <div className="w-2 h-2 rounded-full bg-green-600 font-medium mr-2 pulse-ball"></div>
                Available for work
                <span className="text-[#6E6D7A] px-2 hidden lg:block">
                  &nbsp; Follow
                </span>
              </p>
            </div>
          </div>

          <ul className="flex items-center text-sm sm:text-base gap-x-2 sm:gap-x-4">
            <li>
              <i className="ri-heart-3-line p-2 sm:p-[10px] border-[1px] border-opacity-15 hover:border-opacity-25 border-[#6E6D7A] rounded-full"></i>
            </li>
            <li>
              <i className="ri-bookmark-line p-2 sm:p-[10px] border-[1px] border-opacity-15 hover:border-opacity-25 border-[#6E6D7A] rounded-full"></i>
            </li>
            <li className="text-sm font-semibold bg-black hover:bg-[#565564] px-4 py-2 md:py-[10px] rounded-3xl text-white hidden sm:block">
              Get in touch
            </li>
            <li className="px-2 py-[5px] text-white rounded-full bg-black sm:hidden">
              <i className="ri-mail-line"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:h-auto ">
        <img src={Main} className="my-8 w-full rounded-lg" alt="load..." />
      </div>
    </>
  );
}

export default Section1;
