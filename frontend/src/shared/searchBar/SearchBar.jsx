import React from "react";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";
import "./SeachhBar.css";

const SearchBar = () => {
  const contactNumber = "9880368807";

  const handleCallClick = (e) => {
    const user = localStorage.getItem("user");

    if (!user) {
      e.preventDefault(); // Prevent the tel: link from triggering
      toast.error("Please login to make a call");
    }
  };

  return (
    <div className="search-bar">
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <a
          href={`tel:${contactNumber}`}
          onClick={handleCallClick}
          className="bg-BaseColor text-white p-3 rounded-full hover:bg-opacity-80 transition"
          title={`Call ${contactNumber}`}
        >
          <IoCall size={28} />
        </a>
        <span className="text-lg font-medium">{contactNumber}</span>
      </div>
    </div>
  );
};

export default SearchBar;
