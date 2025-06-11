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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          // backgroundImage:
          //   "url('https://img.freepik.com/free-photo/dark-room-with-light-background_1409-1809.jpg?uid=R159996107&ga=GA1.1.1567084357.1721659617&semt=ais_items_boosted&w=740')",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?uid=R159996107&ga=GA1.1.1567084357.1721659617&semt=ais_items_boosted&w=740')",
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover",     
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 z-10" />

      {/* Main Content */}
      <div className={isDarkMode ? "relative z-20 text-white" : "relative z-20 bg-white text-black"}>
        <Navbar onClick={toggleDarkMode} />
        <Home />
        <Services />
        <Project />
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Outletnav;
