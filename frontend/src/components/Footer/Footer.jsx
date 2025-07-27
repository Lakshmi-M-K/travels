import Logo from "./../../assets/images/logo3.png";
import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gray-800 text-white px-5 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-left mb-10 md:mb-0">
              <img
                src={Logo}
                alt="Trips Travels Logo"
                className="h-20 md:mr-12 "
              />
              <div className="flex flex-col mt-8 text-center md:text-left">
                <p className="mb-2">Address: Mysore</p>
                <p className="mb-2">Phone: +91 9880368807</p>
                <p className="mb-2">Gmail: manojgowdamirle2000@gmail.com</p>
                <p>
                  &copy; 2025 Trishik Tours and Travels. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/your-page"
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/your-profile"
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/trishiktour.19?igsh=MWQ2NGJsd29nemJicQ=="
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/your-channel"
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://github.com/your-github"
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
