import React, { useEffect, useState } from "react";
import image from "../assets/image.png";
// import image from "../assets/myimage.jpeg";
import aboutImage from "../assets/b14442d7-1158-4a88-aecf-a21cacea1653.jpeg";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

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
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gitHubTab =()=>{
    const githubLink = "https://github.com/josephadeshola"
    window.open(githubLink, "_black" )
  }

  return (
    <div className="pt-16">
      <section className="home">
        <div className="md:flex text-center md:text-start justify-between mt-20 mx-auto md:px-14 ">
          <div className="mt-4">
            <p className=" md:text-yellow-300 text-xl">Hello</p>
            <span className="borde md:text-6xl text-4xl font-bold border-red-500 w-1/2">
              I'm
              <span className="ms-3 md:text-yellow-300 animate-textChange">
                Adeshola <br /> Ayomide
              </span>
            </span>
            <p className="md:text-2xl text-md py-4">Fullstack Web Developer</p>
            <div className="gap-3 justify-center md:justify-start flex">
              <button className="py-3 px-7 rounded-full bg-yellow-300 text-black text-md font-semibold">
                <Link to="/project">My Project</Link>
              </button>
              <button className="py-3 px-7 text-md font-semibol border rounded-full">
                <Link onClick={gitHubTab}>My Github</Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-5 mt-10">
            <div className="mx-auto  md:h-96 bg-yellow-300 md:w-96 h-72 w-72 rounded-full animate-colorChange">
              <div className="border mx-auto md:h-80 md:w-80 h-60 w-60 rounded-full border-yellow-300">
                <img
                  className="object-cover md:h-80 md:w-80 h-60 w-60 rounded-full mx-auto"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about md:px-14  py-14">
        <div className="flex flex-col md:flex-row items-center justify-between animate-pulse shadow gap-10 border border-yellow-300 p-6 rounded-lg">
          <div className="w-full lock hidden md:w-1/2 md:flex justify-center">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-md"
              src={aboutImage}
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-1/2 relative">
            <p className="text-8xl font-extrabold text-gray-900 absolute -top-10 left-0 opacity-60">
              About
            </p>
            <div className=" rounded-lg relative z-10">
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
              src={aboutImage}
              alt="Profile"
            />
          </div>
        </div>
      </section>
      <section className="skills md:px-14 px-4 md:py-14 py-7">
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
                    <span className="font-semibold text-sm dark:text-white">
                      {data.skill}
                    </span>
                    <span className="font-semibold text-sm dark:text-white">
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
      <div className="bg-yellow-500 text-white animate-pulse text-center py-4">
        <p>© 2024 Joseph Ay. All Rights Reserved.</p>
        <p>
          Email:{" "}
          <a href="mailto:josephay125d@gmail.com" className="underline">
            josephay125d@gmail.com
          </a>
        </p>
      </div>
      {showScroll && (
        <button
          className="fixed bottom-4 right-4 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowAltCircleUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Home;
