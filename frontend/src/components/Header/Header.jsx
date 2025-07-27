import React, { useState, useRef, useEffect, useContext } from "react";
import Logo from "./../../assets/images/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch, role } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    handleMenuToggle();
    navigate("/home");
    toast.info("Logged Out");
  };

  useEffect(() => {
    const header = headerRef.current;
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="transition-all shadow-md duration-300">
      <nav className="container mx-auto px-5 flex justify-between items-center py-2">
        <div className="h-14 md:h-20">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-full" />
          </Link>
        </div>

        {/* Mobile Top Right */}
        <div className="flex gap-2 md:hidden items-center">
          {user && role === "user" && (
            <Link to="/my-account" onClick={handleMenuToggle}>
              <FaUserCircle className="text-2xl text-BaseColor" />
            </Link>
          )}
          <BiMenu
            className="w-8 h-8 cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed text-center top-0 h-screen right-0 w-2/3 bg-gray-100 duration-300 p-4 shadow-md z-40">
            <IoClose
              className="w-8 h-8 cursor-pointer absolute top-4 right-0 mr-6 text-gray-600 hover:text-black"
              onClick={handleMenuToggle}
            />
            <ul className="flex flex-col items-center h-full justify-center gap-10">
              {role !== "admin" ? (
                <>
                  <Link to="/home" onClick={handleMenuToggle}>
                    Home
                  </Link>
                  <Link to="/tours" onClick={handleMenuToggle}>
                    Tours
                  </Link>
                  <Link to="/about" onClick={handleMenuToggle}>
                    Gallery
                  </Link>
                  <Link to="/contact" onClick={handleMenuToggle}>
                    Contact
                  </Link>
                  <Link to="/reviews" onClick={handleMenuToggle}>
                    Reviews
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/all-booking" onClick={handleMenuToggle}>
                    Bookings
                  </Link>
                  <Link to="/all-tours" onClick={handleMenuToggle}>
                    Tours
                  </Link>
                  <Link to="/create" onClick={handleMenuToggle}>
                    Create
                  </Link>
                </>
              )}

              {user && role === "user" && (
                <Link
                  to="/my-account"
                  onClick={handleMenuToggle}
                  className="flex items-center gap-2 hover:text-BHoverColor"
                >
                  <FaUserCircle className="text-2xl text-BaseColor" />
                  <span className="text-[18px] font-semibold text-BaseColor">
                    {user.username}
                  </span>
                </Link>
              )}

              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-black text-white rounded mx-auto hover:bg-gray-800"
                >
                  Logout
                </button>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <Link to="/login" onClick={handleMenuToggle}>
                    <button className="text-BaseColor rounded hover:text-BHoverColor">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={handleMenuToggle}>
                    <button className="btn">Register</button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        {role === "admin" ? (
          <ul className="md:flex hidden space-x-8">
            <Link to="/all-booking">Bookings</Link>
            <Link to="/all-tours">Tours</Link>
            <Link to="/create">Create</Link>
          </ul>
        ) : (
          <ul className="md:flex hidden space-x-4">
            <Link to="/home">Home</Link>
            <Link to="/about">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/reviews">Reviews</Link>
          </ul>
        )}

        {/* Desktop Right Side */}
        <div className="md:flex hidden items-center space-x-4">
          {user ? (
            <div className="flex gap-3 items-center">
              {role === "user" && (
                <Link
                  to="/my-account"
                  className="flex items-center gap-2 hover:text-BHoverColor"
                >
                  <FaUserCircle className="text-2xl text-BaseColor" />
                  <span className="text-[18px] font-semibold text-BaseColor">
                    {user.username}
                  </span>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 text-BaseColor rounded hover:text-BHoverColor">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
