import React from "react";
import { Code2, Cloud, Server } from "lucide-react"; // Icons

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-blue-400" />,
      title: "Web Development",
      description:
        "Building modern, responsive, and optimized web applications using React, Angular, and Tailwind CSS.",
    },
    {
      icon: <Server className="w-10 h-10 text-green-400" />,
      title: "Systems & Networks",
      description:
        "Managing, securing, and monitoring on-premises or hybrid IT infrastructures.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-yellow-400" />,
      title: "Cloud & DevOps",
      description:
        "Deployment on AWS, CI/CD pipelines, monitoring, containerization (Docker, Kubernetes), and automation.",
    },
  ];

  return (
    <section className="bg-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          My Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
