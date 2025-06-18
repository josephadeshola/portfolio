import React, { useEffect, useState } from "react";
import profileImage from "../assets/profileeng.jpg";
import { FaArrowAltCircleUp } from "react-icons/fa";
import AosEff from "./Aos";
import Services from "./Service";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const fullText = "I'm a fullstack developer";

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(fullText.slice(0, index + 1));
          setIndex(index + 1);
          if (index + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setTypedText(fullText.slice(0, index - 1));
          setIndex(index - 1);
          if (index - 1 === 0) {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    { skill: "PHP", value: 75 },
    { skill: "NEXT.JS", value: 85 },
    { skill: "LARAVEL", value: 85 },
    { skill: "VUE", value: 85 },
    { skill: "JAVA/C++", value: 70 },
    { skill: "DATABASE MGMT", value: 85 },
  ];

  return (
    <>
      <AosEff />

      <header className="flex flex-col items-center text-center py-32 px-6 bg-gradient-to-br from-black via-gray-800 to-orange-800">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src={profileImage}
          alt="Profile"
          className="md:w-60 sm:w-52 w-48 md:h-60 h-48 sm:h-52 rounded-full object-cover mb-6 border-4 border-orange-500 shadow-lg rotate-12"
        />
        <h1
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Adeshola Ayomide
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        <div data-aos="fade-in" className="flex gap-4 mt-6">
          <a
            data-aos="fade-in"
            href="https://github.com/josephadeshola"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            GitHub Repo
          </a>
          <a
            data-aos="fade-up"
            href="/project"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            View Projects
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-10 text-white">
        <div className="bg-black p-6 rounded-xl outline outline-orange-500 outline-dashed mb-10">
          <p data-aos="zoom-out" className="text-lg leading-relaxed">
            I'm a passionate fullstack developer skilled in creating robust and
            scalable web applications. I specialize in technologies like React,
            Node.js, Next.js, MongoDB, and Tailwind CSS. I enjoy building
            user-friendly interfaces, writing clean and maintainable code, and
            solving real-world problems through technology. Whether working on
            the frontend or backend, I strive to deliver high-quality solutions
            that meet users' needs and business goals.
          </p>
        </div>

        <div>
          <h2
            data-aos="fade-in"
            className="text-3xl font-bold mb-6 text-center text-orange-400"
          >
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {progressData.map((item, index) => (
              <div
                data-aos="zoom-in"
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />

      {showScroll && (
        <button
          className="fixed bottom-5 right-5 text-orange-500 text-4xl z-50 hover:text-orange-700"
          onClick={scrollToTop}
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </>
  );
};

export default Home;
