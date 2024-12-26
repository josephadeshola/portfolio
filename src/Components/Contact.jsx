import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 dark:text-white rounded-md shadow-sm">
      <p className="text-3xl font-bold dark:text-white text-center mb-6">
        Contact Me
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border bg-zinc-900 text-white rounded-md"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border bg-zinc-900 text-white rounded-md"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-3 border bg-zinc-900 text-white rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow-300 text-white font-semibold rounded-md hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="mt-2 text-gray-600">
          Feel free to contact me through the form above or via the following:
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            Email:
            <a href="josephay125d@gmail.com" className="text-yellow-500">
              your-email@example.com
            </a>
          </li>
          <li>
            Phone: <span className="text-yellow-500">+234 8069697526</span>
          </li>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/ayomide-a-5a4549252/"
              className="text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/your-profile
            </a>
          </li>
          <li>
            GitHub:
            <a
              href="https://github.com/josephadeshola"
              className="text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
