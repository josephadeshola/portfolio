import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { MdNewLabel, MdStayCurrentPortrait } from "react-icons/md";
import { GiColdHeart } from "react-icons/gi";
import AosEff from "./Aos";
import ProjectImages from "../../ProjectImages";

const projects = {
  newProjects: [
    {
      img: ProjectImages.foodieOrder,
      title: "Foodie Order",
      description:
        "A sleek restaurant ordering platform that allows users to explore menus, place orders, and make reservations seamlessly.",
      link: "https://my-restaurant-three.vercel.app/",
    },
    {
      img: ProjectImages.jobList,
      title: "Job Listing Application",
      description:
        "A dynamic platform for job seekers to search and apply for job opportunities, with filters for location, role, and industry.",
      link: "https://joblisting-project.vercel.app/",
    },
    {
      img: ProjectImages.musicApp,
      title: "Music Application",
      description:
        "A beautifully designed music streaming platform featuring playlists, favorite tracks, and personalized recommendations.",
      link: "https://drc-music-app-vutw.vercel.app/",
    },
    {
      img: ProjectImages.bookYourStay,
      title: "Hotel Booking Application",
      description:
        "A robust application to browse, compare, and book hotel stays, with features like room previews and customer reviews.",
      link: "https://book-your-stay-kohl.vercel.app/",
    },
  ],
  currentProjects: [
    {
      img: ProjectImages.socialSync,
      title: "SocialSync",
      description:
        "A comprehensive social media scheduling tool for planning, organizing, and publishing content across multiple platforms.",
      link: "https://socialsync-project.vercel.app/",
    },
    {
      img: ProjectImages.gym,
      title: "Drc‑Gym Website",
      description:
        "Responsive gym site showcasing services, schedules, and trainer profiles.",
      link: "https://svelte-gym-ui.vercel.app/",
    },
  ],
  oldProjects: [
    {
      img: ProjectImages.switchRisk,
      title: "switchrisk",
      description:
        "A platform designed to assess, evaluate, and manage risks effectively for businesses and individuals.",
      link: "https://switch-risk.vercel.app/",
    },
    {
      img: ProjectImages.weatherApp,
      title: "Weather Application",
      description:
        "A simple and efficient app to check real-time weather updates, including temperature, forecasts, and wind conditions.",
      link: "https://weatherapp-two-eta.vercel.app/",
    },
    {
      img: ProjectImages.vansLife,
      title: "Vans Life",
      description:
        "A lifestyle-focused platform offering insights and services for van living enthusiasts, from customization to community connections.",
      link: "https://react-test-tau-five.vercel.app/",
    },
    {
      img: ProjectImages.hyra,
      title: "Hyra",
      description:
        "A modern rental application for finding, listing, and managing rental properties with ease.",
      link: "https://hyra-tau.vercel.app/",
    },
    {
      img: ProjectImages.todo,
      title: "Task management app (Todo)",
      description: "A task management app.",
      link: "https://adeshola-task-reminder.netlify.app/",
    },
    {
      img: ProjectImages.printivo,
      title: "printivo website",
      description: "website clone (printivo)",
      link: "https://printivo-clone.netlify.app/",
    },
    {
      img: ProjectImages.ecommerce,
      title: "Doc-buy",
      description: "E-commerce website for wears shopping",
      link: "https://dorc-pay.netlify.app/productpage.html",
    },
    {
      img: ProjectImages.crownWealth,
      title: "Crown Wealth Institute",
      description:
        "A knowledge-sharing platform offering courses, certifications, and resources for financial literacy and wealth management.",
      link: "https://angular-text-tz1j.vercel.app/",
    },
    {
      img: ProjectImages.recipes,
      title: "Recipies",
      description:
        "A visually appealing app for discovering, saving, and sharing your favorite recipes with friends and family.",
      link: "https://first-vue-omega.vercel.app/recipes",
    },
    {
      img: ProjectImages.bmiCalculator,
      title: "Bmi Calculator",
      description: "Bmi Calculator.",
      link: "https://bmigradingsystem.netlify.app/",
    },
    {
      img: ProjectImages.gradingSystem,
      title: "Grading System",
      description: "Grading system.",
      link: "https://schoolgradingsystem.netlify.app/",
    },
    {
      img: ProjectImages.calculator,
      title: "Calculator",
      description: "Calculator.",
      link: "https://problemsolve.netlify.app/",
    },
    {
      img: ProjectImages.lightingBulb,
      title: "Lighting bulb",
      description: "Lighting bulb",
      link: "https://light-125d.netlify.app/",
    },
  ],
};

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
};

const Project = () => {
  const [category, setCategory] = useState("newProjects");
  const [startIndex, setStartIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const items = projects[category];
  const visibleCount = 3;

  const paginate = (step) => {
    const maxIndex = Math.max(items.length - visibleCount, 0);
    const newIndex = Math.min(Math.max(startIndex + step, 0), maxIndex);
    setDir(step);
    setStartIndex(newIndex);
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <AosEff />
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            ["newProjects", <MdNewLabel />, "New Projects"],
            ["currentProjects", <MdStayCurrentPortrait />, "Current Projects"],
            ["oldProjects", <GiColdHeart />, "Old Projects"],
          ].map(([key, Icon, label]) => (
            <button
              key={key}
              onClick={() => {
                setCategory(key);
                setStartIndex(0);
                setDir(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                category === key
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {Icon} <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="relative hidden md:block overflow-hidden h-[400px]">
          <div className="flex">
            <AnimatePresence initial={false} custom={dir}>
              {visibleItems.map((item) => (
                <motion.div
                  key={item.title}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-1/3 p-2"
                >
                  <Card item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            disabled={startIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-3"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={startIndex + visibleCount >= items.length}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-3"
          >
            ›
          </button>
        </div>

        <div className="md:hidden grid gap-4">
          {items.map((item) => (
            <div key={item.title} className="p-2">
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
};

function Card({ item }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden p-4 flex flex-col h-full">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold text-white mt-4">{item.title}</h3>
      <p className="text-gray-400 mt-2 flex-grow">{item.description}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 mt-4"
      >
        View Project
      </a>
    </div>
  );
}
export default Project;
