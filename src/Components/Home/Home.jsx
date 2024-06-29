import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Home() {
  return (
    <>
      <section className="w-[97%] lg:w-[83%] max-w-[1300px] px-1   mx-auto my-10">
        {/* -----upto the big image-------- */}
        <Section1 />
        {/* -----the hola designers-------- */}
        <Section2 />
        {/* ------the remaining part except footer-------- */}
        <Section3 />
      </section>
    </>
  );
}

export default Home;
