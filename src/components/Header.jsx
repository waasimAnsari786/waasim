import React, { useState, useEffect, useId } from "react";
import MyButton from "./MyButton";
import { useElementsRef } from "../context/MainContext";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { aboutRef, skillsRef, projectsRef, contactRef } = useElementsRef();
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to handle header blur and logo size on scroll
  const [isBlurred, setIsBlurred] = useState(false);
  // Scroll to specific section
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleScroll = (obj) => {
    let targetedText = obj.target.textContent;

    if (!targetedText) return;
    document.title = `Waasim's Portfolio - ${targetedText.toUpperCase()}`;
    if (targetedText === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  // Function to handle the scroll event for the blur effect
  const handleScrollEffect = () => {
    if (window.scrollY > 200) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  // Toggle function for the mobile menu (off-canvas)
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

  useEffect(() => {
    toggleTheme();
  }, [darkMode]);

  let btns = ["about", "skills", "projects", "contact"];

  return (
    <>
      <header
        className={`text-white w-full z-20 transition-all duration-300 ease-linear ${
          isBlurred
            ? "backdrop-blur-md bg-slate-800/60 dark:bg-slate-950/60 fixed top-0" // Transparent with blur effect
            : "bg-slate-800 relative dark:bg-slate-950" // Solid background
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4 transition-all duration-300 ease-linear px-6">
          {/* Logo/Name */}
          <div
            className={`text-2xl font-bold transition-all duration-300 ease-linear ${
              isBlurred ? "h-10" : "h-16"
            }`} // Reduces logo height on scroll
          >
            <Link to="/">
              <img
                src="/img/download.png"
                alt="Logo"
                className={`transition-all duration-300 ease-linear ${
                  isBlurred ? "h-10" : "h-16"
                }`} // Shrinks the logo on scroll
              />
            </Link>
          </div>

          {/* Hamburger Menu (visible on small screens) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none z-60"
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

          {/* Off-canvas mobile navigation */}
          <nav
            className={`fixed top-0 left-0 h-screen w-64 bg-slate-800 p-6 transition-transform duration-500 ease-in-out transform ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden z-60`}
          >
            {/* Close button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white absolute top-4 right-4"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="space-y-4 mt-10">
              {btns.map((curBtn) => {
                return (
                  <NavLink to={`/${curBtn}`} key={curBtn}>
                    <li>
                      <MyButton
                        btnClass="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                        btnText={curBtn}
                        btnFunc={handleScroll}
                      />
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </nav>

          {/* Navigation Links (visible on larger screens) */}
          <nav className="hidden md:block ">
            <ul className="flex space-x-3">
              {btns.map((curBtn, i) => {
                return (
                  <NavLink to={`/${curBtn}`} key={curBtn}>
                    <li>
                      <MyButton
                        btnClass="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                        btnText={curBtn}
                        btnFunc={handleScroll}
                      />
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 p-4 z-10">
        <div className="flex flex-col items-center space-y-4">
          {/* Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-300 dark:bg-slate-700 p-3 rounded-full shadow-lg focus:outline-none"
          >
            {darkMode ? (
              <MdLightMode className="text-yellow-500 w-6 h-6" />
            ) : (
              <MdDarkMode className="text-slate-800 dark:text-slate-100 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
