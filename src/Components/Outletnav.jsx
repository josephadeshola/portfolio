import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDarkMode } from "../../DarkModeContext";
import Services from "./Service";
import Project from "./Project";
import Home from "./Home";

const Outletnav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg?uid=R159996107&ga=GA1.1.1567084357.1721659617&semt=ais_items_boosted&w=740')",
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover",     
        }}
      />
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className={isDarkMode ? "relative z-20 text-white" : "relative z-20 bg-white text-black"}>
        <Navbar onClick={toggleDarkMode} />
        {/* <Home /> */}
        {/* <Services /> */}
        {/* <Project /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Outletnav;
