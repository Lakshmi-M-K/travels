// ServicesList.jsx
import React from "react";
import ServicesCard from "./ServicesCard";
import { MdHotel } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";
import { FaCar } from "react-icons/fa6";

const ServicesList = () => {
  const services = [
    {
      title: "Mysore",
      description:
        "Discover the royal charm of Mysore with its grand palaces, rich heritage, and vibrant local culture.",
      icon: <FaCar />,
    },
    {
      title: "Ooty",
      description:
        "Escape to the serene hills of Ooty, where lush landscapes and cool breezes offer the perfect retreat.",
      icon: <FaCar />,
    },
    {
      title: "Coorg",
      description:
        "Immerse yourself in the misty beauty of Coorg, known for its coffee plantations and lush greenery.",
      icon: <FaCar />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
