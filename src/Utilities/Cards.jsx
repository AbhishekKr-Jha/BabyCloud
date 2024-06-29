import React from "react";

function Cards({ image, text }) {
  return (
    <div className="w-full h-[75vw] sm:w-[49%] sm:h-[36vw] lg:w-[250px] lg:h-[190px] rounded-lg bg-gray-700 relative group text-[17px] overflow-hidden font-medium text-white">
      <div className="w-full h-full  absolute  bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-150 ease-in-out"></div>

      <div className="w-full h-full  absolute   hidden  group-hover:flex justify-between items-end px-5 py-6">
        <p className="w-[60%] truncate pr-2">{text}</p>
        <div className="text-base  space-x-3 text-black">
          <span>
            <i class="ri-bookmark-line p-[10px]  border-[1px] bg-white  rounded-full cursor-pointer"></i>
          </span>
          <span>
            <i class="ri-heart-3-line p-[10px] border-[1px] bg-white rounded-full cursor-pointer"></i>
          </span>
        </div>
      </div>
      <img
        src={image}
        className="w-full h-full object-cover object-center"
        alt="load..."
      />
    </div>
  );
}

export default Cards;
