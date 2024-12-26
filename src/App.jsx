import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const progressData = [
    { skill: "HTML", value: 95 },
    { skill: "CSS", value: 90 },
    { skill: "BOOTSTRAP", value: 85 },
    { skill: "TAILWIND CSS", value: 90 },
    { skill: "JAVASCRIPT", value: 85 },
    { skill: "REACT.JS", value: 85 },
    { skill: "NODE.JS", value: 85 },
    { skill: "ANGULAR.JS", value: 75 },
    { skill: "PHP.JS", value: 75 },
    { skill: "NEXT.JS", value: 85 },
    { skill: "LARAVEL", value: 85 },
    { skill: "VUE", value: 85 },
    { skill: "JAVA/C++", value: 70 },
    { skill: "DATABASE MANAGEMENT", value: 85 },
  ];

  return (
    <div
      className={
        isDarkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }
    >
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center animate-bounce font-bold text-2xl whitespace-nowrap dark:text-white">
              AYOMIDE
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-300 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <div
                  onClick={toggleDarkMode}
                  className="px-2 py-2 bg-yellow-300 text-white rounded-full hover:bg-yellow-600 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-800"
                >
                  {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="md:flex text-center md:text-start justify-between mt-20 mx-auto md:px-14 ">
          <div className="mt-4 w-1/2">
            <p className=" md:text-yellow-300 text-xl">Hello</p>
            <span className="borde text-6xl font-bold border-red-500 w-1/2">
              I'm
              <span className="ms-3 md:text-yellow-300 animate-textChange">
                Adeshola <br /> Ayomide
              </span>
            </span>
            <p className="text-2xl py-4">Fullstack Web Developer</p>
            <div className="gap-3 justify-center md:justify-start flex">
              <button className="py-3 px-7 rounded-full bg-yellow-300 text-black text-md font-semibold">
                My Project
              </button>
              <button className="py-3 px-7 text-md font-semibol border rounded-full">
                My Github
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-5 mt-10">
            <div className="mx-auto  h-96 bg-yellow-300 w-96 rounded-full animate-colorChange">
              <div className="border mx-auto h-80 w-80 rounded-full border-yellow-300">
                <img
                  className="object-cover h-80 w-80 rounded-full mx-auto"
                  src="src/assets/WhatsApp Image 2024-04-12 at 9.26.36 AM.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about  md:px-14 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between animate-pulse gap-10 border border-yellow-300 p-6 rounded-lg">
          <div className="w-full lock hidden md:w-1/2 md:flex justify-center">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-md"
              src="src/assets/b14442d7-1158-4a88-aecf-a21cacea1653.jpeg"
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-1/2 relative">
            <p className="text-8xl font-extrabold text-gray-900 absolute -top-10 left-0 opacity-60">
              About
            </p>
            <div className="p-6 rounded-lg relative z-10">
              <h2 className="text-3xl font-bold mb-4 whitespace-nowrap dark:text-white">
                About Me
              </h2>
              <p className="text-lg leading-relaxed dark:text-white">
                I'm a full-stack developer proficient in both front-end and
                back-end technologies. With expertise in programming languages
                like HTML, CSS, and JavaScript, and frameworks like React or
                Angular, I build visually appealing and interactive user
                interfaces. Additionally, I possess knowledge of server-side
                technologies such as Node.js, enabling me to develop robust
                back-end systems and APIs.
              </p>
            </div>
          </div>
          <div className="w-full md:hidden md:w-1/2 flex justify-center">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-md"
              src="src/assets/b14442d7-1158-4a88-aecf-a21cacea1653.jpeg"
              alt="Profile"
            />
          </div>
        </div>
      </section>
      <section className="skills px-14 md:py-14 py-7">
        <div className="w-full relative">
          <p className="text-9xl text-center font-extrabold text-gray-900 absolute left-0 right-0 opacity-60">
            Skills
          </p>
          <div className="rounded-lg text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              My Skills
            </h2>
            <p className="text-lg leading-relaxed font-semibold dark:text-white">
              Here are some of the areas I excel in:
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {progressData.map((data, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold dark:text-white">
                      {data.skill}
                    </span>
                    <span className="font-semibold dark:text-white">
                      {data.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full shadow-md transition-all duration-500"
                      style={{ width: `${data.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
