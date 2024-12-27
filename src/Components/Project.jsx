import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdNewLabel } from "react-icons/md";
import { MdStayCurrentPortrait } from "react-icons/md";
import { GiColdHeart } from "react-icons/gi";
import "swiper/css";
import "swiper/css/navigation";
import "../../src/Project.css";

const projects = {
  newProjects: [
    {
      title: "New Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "/new-project-1",
    },
    {
      title: "New Project 2",
      description:
        "Dolorum autem eos, blanditiis praesentium sunt exercitationem.",
      link: "/new-project-2",
    },
  ],
  oldProjects: [
    {
      title: "Old Project 1",
      description:
        "Perspiciatis, magnam blanditiis quaerat eveniet in reiciendis.",
      link: "/old-project-1",
    },
    {
      title: "Old Project 2",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "/old-project-2",
    },
  ],
  currentProjects: [
    {
      title: "Current Project 1",
      description:
        "Dignissimos accusantium necessitatibus amet, excepturi eius debitis.",
      link: "/current-project-1",
    },
    {
      title: "Current Project 2",
      description: "Sed nam eum, dolore sunt, exercitationem suscipit.",
      link: "/current-project-2",
    },
  ],
};

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("newProjects");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderProjectsCarousel = (projects) => {
    return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="my-4"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="p-14  rounded-lg shadow-slate-100x cursor-pointer dark:hover:bg-gray-700">
              <img src="src\assets\Screenshot 2023-06-24 141008.png" alt="" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <Link
                to={project.link}
                className="text-yellow-300 hover:text-yellow-500 mt-2 inline-block"
              >
                View Project
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div className="p-6 h-screen">
      {/* Category Navigation */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleCategoryChange("newProjects")}
          className={`py-2 px-4 rounded-sm ${
            activeCategory === "newProjects"
              ? "bg-yellow-300 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <div className="flex justify-between">
            <p> New Projects </p>
            <MdNewLabel className="mt-1 ms-3" />
          </div>
        </button>
        <button
          onClick={() => handleCategoryChange("currentProjects")}
          className={`py-2 px-4 rounded-sm ${
            activeCategory === "currentProjects"
              ? "bg-yellow-300 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <div className="flex justify-between">
            <p>Current Projects </p>
            <MdStayCurrentPortrait className="mt-1 ms-3" />
          </div>
        </button>
        <button
          onClick={() => handleCategoryChange("oldProjects")}
          className={`py-2 px-4 rounded-sm ${
            activeCategory === "oldProjects"
              ? "bg-yellow-300 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <div className="flex justify-between">
            <p> Old Projects</p>
            <GiColdHeart className="mt-1 ms-3" />
          </div>
        </button>
      </div>

      {/* Carousel for Projects */}
      <div className="md:w-1/2 w-full mx-auto md:h-96">
        {activeCategory === "newProjects" &&
          renderProjectsCarousel(projects.newProjects)}
        {activeCategory === "currentProjects" &&
          renderProjectsCarousel(projects.currentProjects)}
        {activeCategory === "oldProjects" &&
          renderProjectsCarousel(projects.oldProjects)}
      </div>
    </div>
  );
};

export default Project;
