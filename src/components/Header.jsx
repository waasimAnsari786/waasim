import React, { useState, useEffect } from "react";
import Text from "./Text";

const Header = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [NewClass, setNewClass] = useState("");

  // State to handle header blur on scroll
  const [isBlurred, setIsBlurred] = useState(false);

  // Scroll to specific section
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the scroll event for the blur effect
  const handleScrollEffect = () => {
    if (window.scrollY > 100) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  // Toggle function for the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEffect);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, []);

  return (
    <header
      className={`bg-gray-800 text-white w-full z-20 transition-all duration-300 fixed top-0 ${isBlurred ? "backdrop-blur-md" : ""
        }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/Name */}
        <div className={`text-2xl font-bold ${NewClass}`}>
          <a href="#" className="text-white hover:text-gray-300">
            <img src="/img/download.png" alt="Logo" />
          </a>
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (visible on larger screens) */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => {
              handleScroll("my-ab");
            }}
          >
            <Text
              myClass={
                "capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 ease-in"
              }
              myText={"about"}
            />
          </button>


          <button

            onClick={() => {
              handleScroll("my-skills");
            }}
          >
            <Text
              myClass={
                "capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 ease-in"
              }
              myText={"skills"}
            />

          </button>
          <button
            onClick={() => {
              handleScroll("my-prs");
            }}
          >
            <Text
              myClass={
                "capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 ease-in"
              }
              myText={"projects"}
            />
          </button>
          <button
            onClick={() => {
              handleScroll("my-cn");
            }}
          >
            <Text
              myClass={
                "capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 ease-in"
              }
              myText={"contact"}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation (visible when the hamburger menu is clicked) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-700 p-4">
          <a
            href="#about"
            className="block text-white py-2 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block text-white py-2 hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block text-white py-2 hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block text-white py-2 hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
