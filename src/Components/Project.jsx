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
    <div className="p-6 mt-16 h-screen">
      {/* Category Navigation */}
      <div className="flex justify-center mt-10 space-x-4 mb-6">
        <button
          onClick={() => handleCategoryChange("newProjects")}
          className={`py-2 px-4 text-sm rounded-md ${
            activeCategory === "newProjects"
              ? "bg-yellow-300 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <div className="flex text-sm justify-between">
            <p> New Projects </p>
            <MdNewLabel className="mt-1 ms-3" />
          </div>
        </button>
        <button
          onClick={() => handleCategoryChange("currentProjects")}
          className={`py-2 px-4 text-sm rounded-md ${
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
          className={`py-2 px-4 text-sm rounded-md ${
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
      {/* <div className="md:w-1/2 w-full mx-auto md:h-96">
        {activeCategory === "newProjects" &&
          renderProjectsCarousel(projects.newProjects)}
        {activeCategory === "currentProjects" &&
          renderProjectsCarousel(projects.currentProjects)}
        {activeCategory === "oldProjects" &&
          renderProjectsCarousel(projects.oldProjects)}
      </div> */}

      

<div id="controls-carousel" class="relative w-1/2 mx-auto rounded-md mt-10" data-carousel="static">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="assets\Screenshot 2023-06-24 141008.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="src\assets\Screenshot 2023-06-24 141008.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src\assets\Screenshot 2023-06-24 141008.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src\assets\Screenshot 2023-06-24 141008.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src\assets\Screenshot 2023-06-24 141008.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
  );
};

export default Project;
