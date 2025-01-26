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
      description: "A sleek restaurant ordering platform that allows users to explore menus, place orders, and make reservations seamlessly.",
      link: "https://my-restaurant-three.vercel.app/",
    },
    {
      img:ProjectImages.jobList,
      title: "Job Listing Application",
      description: "A dynamic platform for job seekers to search and apply for job opportunities, with filters for location, role, and industry.",
      link: "https://joblisting-project.vercel.app/",
    },
    {
        img:ProjectImages.musicApp,
      title: "Music Application",
      description:
        "A beautifully designed music streaming platform featuring playlists, favorite tracks, and personalized recommendations.",
      link: "https://drc-music-app-vutw.vercel.app/",
    },
    {
        img:ProjectImages.bookYourStay,
      title: "Hotel Booking Application",
      description:
        "A robust application to browse, compare, and book hotel stays, with features like room previews and customer reviews.",
      link: "https://book-your-stay-kohl.vercel.app/",
    },
  ],
  oldProjects: [
    {
        img:ProjectImages.switchRisk,
      title: "switchrisk",
      description:
        "A platform designed to assess, evaluate, and manage risks effectively for businesses and individuals.",
      link: "https://switch-risk.vercel.app/",
    },
    {
        img:ProjectImages.weatherApp,
      title: "Weather Application",
      description:
        "A simple and efficient app to check real-time weather updates, including temperature, forecasts, and wind conditions.",
      link: "https://weatherapp-two-eta.vercel.app/",
    },
    {
        img:ProjectImages.vansLife,
      title: "Vans Life",
      description:
        "A lifestyle-focused platform offering insights and services for van living enthusiasts, from customization to community connections.",
      link: "https://react-test-tau-five.vercel.app/",
    },
    {
        img:ProjectImages.hyra,
      title: "Hyra",
      description:
        "A modern rental application for finding, listing, and managing rental properties with ease.",
      link: "https://hyra-tau.vercel.app/",
    },
    {
        img:ProjectImages.todo,
      title: "Task management app (Todo)",
      description:
        "A task management app.",
      link: "https://adeshola-task-reminder.netlify.app/",
    },
    {
        img:ProjectImages.printivo,
      title: "printivo website",
      description:
        "website clone (printivo)",
      link: "https://printivo-clone.netlify.app/",
    },
    {
        img:ProjectImages.ecommerce,
      title: "Doc-buy",
      description:
        "E-commerce website for wears shopping",
      link: "https://dorc-pay.netlify.app/productpage.html",
    },
    {
        img:ProjectImages.crownWealth,
      title: "Crown Wealth Institute",
      description:
        "A knowledge-sharing platform offering courses, certifications, and resources for financial literacy and wealth management.",
      link: "https://angular-text-tz1j.vercel.app/",
    },
    {
        img:ProjectImages.recipes,
      title: "Recipies",
      description:
        "A visually appealing app for discovering, saving, and sharing your favorite recipes with friends and family.",
      link: "https://first-vue-omega.vercel.app/recipes",
    },
    {
        img:ProjectImages.bmiCalculator,
      title: "Bmi Calculator",
      description:
        "Bmi Calculator.",
      link: "https://bmigradingsystem.netlify.app/",
    },
    {
        img:ProjectImages.gradingSystem,
      title: "Grading System",
      description:
        "Grading system.",
      link: "https://schoolgradingsystem.netlify.app/",
    },
    {
        img:ProjectImages.calculator,
      title: "Calculator",
      description:
        "Calculator.",
      link: "https://problemsolve.netlify.app/",
    },
    {
        img:ProjectImages.lightingBulb,
      title: "Lighting bulb",
      description:
        "Lighting bulb",
      link: "https://light-125d.netlify.app/",
    },
  ],
  currentProjects: [
    {
        img:ProjectImages.socialSync,
      title: "SocialSync ",
      description:
        "A comprehensive social media scheduling tool for planning, organizing, and publishing content across multiple platforms.",
      link: "https://socialsync-project.vercel.app/",
    },
    {
      title: "Drc Data plug",
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
