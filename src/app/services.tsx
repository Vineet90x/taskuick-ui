"use client";

import { FaLaptopCode, FaRobot, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Web & App Development",
    description:
      "We build high-performance, scalable web and mobile applications using modern technologies.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
  {
    title: "AI Agents",
    description:
      "Leverage AI-powered solutions to automate tasks, improve efficiency, and enhance decision-making.",
    icon: <FaRobot size={40} className="text-purple-500" />,
  },
  {
    title: "Automations",
    description:
      "We create automation workflows to streamline business processes and boost productivity.",
    icon: <FaTools size={40} className="text-green-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We specialize in cutting-edge technology solutions to transform your
          ideas into reality.
        </p>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
