import React from "react";

const services = [
  { title: "Web Development", desc: "Creating responsive websites with latest technologies." },
  { title: "E-Commerce Development", desc: "Custom e-commerce solutions tailored to your needs." },
  { title: "Website Design", desc: "Modern and clean UI/UX designs." },
  { title: "Custom Web Dev", desc: "Tailored web applications for specific client needs." },
  { title: "CMS", desc: "Custom WordPress, Joomla, and more." },
  { title: "Web App Development", desc: "Modern web apps using powerful tools and frameworks." },
];

const Services = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg border border-gray-700 ${
              service.title === "Web App Development" ? "bg-orange-500 text-white" : "bg-[#1a1a1a]"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
