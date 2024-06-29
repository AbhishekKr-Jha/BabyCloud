import React from "react";
import "./Menu.css";
import { changeMenuVisibility } from "../../Redux/MenuSlice";
import { useDispatch } from "react-redux";

function Menu() {
  const dispatch = useDispatch();
  return (
    <>
      <label className="burger" for="burger">
        <input
          onClick={() => dispatch(changeMenuVisibility())}
          type="checkbox"
          id="burger"
        />
        <span></span>
        <span></span>
        <span className="thirdOne"></span>
      </label>
    </>
  );
}

export default Menu;
