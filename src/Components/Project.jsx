import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdNewLabel, MdStayCurrentPortrait } from "react-icons/md";
import { GiColdHeart } from "react-icons/gi";
import "swiper/css";
import "swiper/css/navigation";
import "../../src/Project.css";
import ProjectImages from "../../ProjectImages";

const projects = {
  newProjects: [
    {
      img:ProjectImages.foodieOrder,
      title: "Foodie Order",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "https://my-restaurant-three.vercel.app/",
    },
    {
      img:"../assets/joblist.png",
      title: "Job Listing Application",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "https://joblisting-project.vercel.app/",
    },
    {
        img:"../assets/musicapp.png",
      title: "Music Application",
      description:
        "Dolorum autem eos, blanditiis praesentium sunt exercitationem.",
      link: "https://drc-music-app-vutw.vercel.app/",
    },
    {
        img:"../assets/bookyourstay.png",
      title: "Hotel Booking Application",
      description:
        "Dolorum autem eos, blanditiis praesentium sunt exercitationem.",
      link: "https://book-your-stay-kohl.vercel.app/",
    },
  ],
  oldProjects: [
    {
        img:"../assets/switchrisk.png",
      title: "switchrisk",
      description:
        "Perspiciatis, magnam blanditiis quaerat eveniet in reiciendis.",
      link: "https://switch-risk.vercel.app/",
    },
    {
        img:"../assets/weatherapp.png",
      title: "Weather Application",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "https://weatherapp-two-eta.vercel.app/",
    },
    {
        img:"../assets/Screenshot 2024-12-27 153916.png",
      title: "Vans Life",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "https://react-test-tau-five.vercel.app/",
    },
    {
        img:"../assets/hyra.png",
      title: "Hyra",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "https://hyra-tau.vercel.app/",
    },
    {
        img:"../assets/crown.png",
      title: "Crown Wealth Institute",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "https://angular-text-tz1j.vercel.app/",
    },
    {
        img:"../assets/recipes.png",
      title: "Recipies",
      description:
        "Nobis officia ipsa deleniti illo perferendis commodi porro dolor fuga.",
      link: "https://first-vue-omega.vercel.app/recipes",
    },
  ],
  currentProjects: [
    {
        img:"../assets/socialSync.png",
      title: "SocialSync ",
      description:
        "SocialSync for post and contenting scheduling",
      link: "https://socialsync-project.vercel.app/",
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

  const renderProjectsCarousel = (categoryProjects) => {
    return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="my-4"
      >
        {categoryProjects.map((project, index) => (
          <SwiperSlide className="" key={index}>
            <div className="md:p-14 p-0 rounded-lg shadow-md dark:hover:bg-gray-700 cursor-pointer">
              <img
                src={project.img}
                alt="project"
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">
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
          <div className="flex items-center justify-between">
            <p>New Projects</p>
            <MdNewLabel className="ml-3" />
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
          <div className="flex items-center justify-between">
            <p>Current Projects</p>
            <MdStayCurrentPortrait className="ml-3" />
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
          <div className="flex items-center justify-between">
            <p>Old Projects</p>
            <GiColdHeart className="ml-3" />
          </div>
        </button>
      </div>

      {/* Carousel */}
      <div className="md:w-1/2 w-full mx-auto">
        {renderProjectsCarousel(projects[activeCategory])}
      </div>
    </div>
  );
};

export default Project;
