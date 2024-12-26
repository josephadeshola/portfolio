import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDarkMode } from "../../DarkModeContext";

const Outletnav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <div
        className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}
      >
        <Navbar onClick={toggleDarkMode} />
        <Outlet />
      </div>
    </div>
  );
};

export default Outletnav;
