import React from "react";
import { FaCode, FaShoppingCart, FaPaintBrush, FaCogs, FaWordpress, FaLaptopCode } from "react-icons/fa";
import AosEff from "./Aos";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: "Creating responsive websites with the latest technologies." },
  { icon: <FaShoppingCart />, title: "E-Commerce Development", desc: "Custom e-commerce solutions tailored to your needs." },
  { icon: <FaPaintBrush />, title: "Website Design", desc: "Modern and clean UI/UX designs." },
  { icon: <FaCogs />, title: "Custom Web Dev", desc: "Tailored web applications for specific client needs." },
  { icon: <FaWordpress />, title: "CMS", desc: "Custom WordPress, Joomla, and more." },
  { icon: <FaLaptopCode />, title: "Web App Development", desc: "Modern web apps using powerful tools and frameworks." },
];

const Services = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <AosEff/>
      <h2 data-aos="zoom-in" className="text-4xl font-bold text-center text-orange-500 mb-12">What I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            data-aos="fade-in"
            key={idx}
            className="bg-white/10 border border-orange-500 backdrop-blur-md shadow-md p-6 rounded-2xl text-white hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl text-orange-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
