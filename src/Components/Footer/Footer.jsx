import React from 'react'

function Footer() {
  return (
  <footer className='mt-48 md:mt-8 w-[99%] max-w-[1360px]  max-h-max mx-auto  px-[5px]  lg:pl-12 lg:pr-14 '>
<div className="  flex flex-col lg:flex-row justify-between items-center flex-wrap gap-y-3 ">
<div className="text-[32px] lg:pr-5 newFont">Dribble</div>
<ul className=' lg:w-auto flex flex-wrap justify-center  lg:flex-nowrap items-center gap-x-3 md:gap-x-6 lg:gap-x-10 font-medium text-[15px] gap-y-2'>
    <li>For Designers</li>
    <li>Hire Talent</li>
    <li>Inspiration</li>
    <li>Advertisning</li>
    <li>Blog</li>
    <li>About</li>
    <li>Careers</li>
    <li>Support</li>
</ul>
<ul className='flex items-center gap-x-4 md:gap-x-6 text-[22px]'>
    <li><i class="ri-twitter-fill"></i></li>
    <li><i class="ri-facebook-box-fill"></i></li>
    <li><i class="ri-instagram-line"></i></li>
    <li><i class="ri-pinterest-fill"></i></li>
</ul>
</div>
<div className=" mt-16 mb-14 flex  flex-col lg:flex-row lg:justify-between items-center  gap-y-3 text-[#6E6D7A] text-sm px-1 font-medium lg:font-normal">
    <ul className=' flex flex-wrap justify-center lg:flex-nowrap items-center gap-x-4 md:gap-x-6  gap-y-2 '>
        <li>© 2024 Dribbble</li>
    <li>Terms</li>
    <li>Privacy</li>
    <li>Cookies</li>
    </ul>
    <ul className='flex flex-wrap justify-center lg:flex-nowrap items-center gap-x-4  md:gap-x-6 gap-y-2'>
        <li>Jobs</li>
        <li>Dsigners</li>
        <li>Freelancers</li>
        <li>Tags</li>
        <li>Places</li>
        <li>Resources</li>
    </ul>
</div>
  </footer>
  )
}

export default Footer