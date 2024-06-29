import React from 'react'

function ExtraHoverableMenu({mainText,subText}) {
    // these are small mini components which are extra hoverable dropdown menu options
  return (
    <div className="">
    <p className="text-[15px] ">{mainText}</p>
    <p className="text-xs  font-normal text-[#6E6D7A]">
      {subText}
    </p>
  </div>
  )
}

export default ExtraHoverableMenu