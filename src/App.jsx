import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NewMenuOption from "./Utilities/NewMenuOption/NewMenuOption";
import { useSelector } from "react-redux";
function App() {
  const isMenuVisible = useSelector((state) => state.menu.isMenuVisible);

  return (
    <div className="w-full  relative ">

      <Navbar />
      
      {/* ---the hamberger meny=u for small screens------- */}
      <NewMenuOption />

      {/*----show when the hamburger menu is jot open-------- */}
      {!isMenuVisible && (
        <>
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;
