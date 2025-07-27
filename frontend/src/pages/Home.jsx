import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import ImagesGallery from "../components/Gallery/Gallery";
import faqImg from "../assets/images/experience.png";
import FaqList from "../components/Faq/FaqList";
import Reviews from "../components/Reviews";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    const reviewObj = {
      id: Date.now(),
      content: newReview,
    };
    setReviews([reviewObj, ...reviews]);
    setNewReview("");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-cover pt-4 px-6 md:px-12 bg-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mt-8 mb-4">
              <h1 className="text-[33px] font-Open Sans text-center md:text-[40px] md:text-start font-bold mb-4">
                Plan Your Perfect Trip with{" "}
                <span className="text-BaseColor text-[40px] font-Open Sans">
                  Trishik Tours and Travels
                </span>
              </h1>
              <p className="text-lg leading-8 text-gray-800 hidden md:block">
                Trishik Tours and Travels is dedicated to providing exceptional
                travel experiences tailored to your needs. From serene getaways
                to adventurous explorations, every journey is crafted with
                attention to comfort, safety, and satisfaction. With a deep
                understanding of what makes a trip truly memorable, we ensure
                seamless planning, reliable service, and unforgettable moments.
                Whether you're traveling solo, with family, or in a group,
                Trishik takes care of every detail so you can focus on creating
                beautiful memories.
              </p>
              <p className="mobpara md:hidden">
                Welcome to Trishik Tours and Travels, your go-to destination for
                unforgettable adventures!
              </p>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-3 min-h-[200px]">
            <div className="rounded-lg overflow-hidden my-4">
              <img src={card01} className="object-cover h-full" alt="" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={card02} className="object-cover h-full" alt="" />
            </div>
            <div className="rounded-lg overflow-hidden my-4">
              <img src={card03} className="object-cover h-full" alt="" />
            </div>
          </div>
        </div>
        <SearchBar />
      </div>

      {/* Services Section */}
      <section className="pb-8 pt-3 px-6 md:px-12">
        <div className="container mx-auto mt-2 flex-col flex md:flex-row">
          <div className="mb-6 flex-shrink-0 mx-4 flex-1 min-w-[30%]">
            <h2 className="text-[33px] md:text-[40px] font-Open Sans font-bold mb-4 text-center">
              Our{" "}
              <span className="text-BaseColor text-[43px] font-Open Sans">
                Best Services
              </span>
            </h2>
            <p className="para md:text-lg md:leading-8 md:text-start md:text-gray-800">
              Empowering Your Journey: Unrivaled Services Tailored to Elevate
              Your Experience.
            </p>
          </div>
          <ServicesList className="flex-grow" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[33px] md:text-[40px] font-Open Sans font-bold mb-4 text-center">
          Our{" "}
          <span className="text-BaseColor text-[40px] font-Open Sans">
            Gallery
          </span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          Explore our gallery filled with memorable travel moments.
        </p>
        <ImagesGallery />
      </section>

      {/* FAQ Section */}
      <section>
        <div className="px-6 md:px-12 py-6">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl text-BaseColor font-Open Sans font-bold text-center mb-4">
                Frequently Asked Question.
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
