// import React, { useState, useEffect, useId } from "react";
// import MyButton from "./MyButton";
// import { useElementsRef } from "../context/MainContext";
// import { Link, NavLink } from "react-router-dom";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Header = () => {
//   const { aboutRef, skillsRef, projectsRef, contactRef } = useElementsRef();
//   // State to toggle the mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   // State to handle header blur and logo size on scroll
//   const [isBlurred, setIsBlurred] = useState(false);
//   // Scroll to specific section
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   const handleScroll = (obj) => {
//     let targetedText = obj.target.textContent;
//     document.title = `Waasim's Portfolio - ${targetedText.toUpperCase()}`;

//     if (!aboutRef.current || !skillsRef.current || !contactRef.current) return;

//     if (targetedText === "about") {
//       aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (targetedText === "skills") {
//       skillsRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (targetedText === "projects") {
//       projectsRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (targetedText === "contact") {
//       contactRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     // Close the mobile menu after clicking a link
//     setIsMobileMenuOpen(false);
//   };

//   // Function to handle the scroll event for the blur effect
//   const handleScrollEffect = () => {
//     if (window.scrollY > 200) {
//       setIsBlurred(true);
//     } else {
//       setIsBlurred(false);
//     }
//   };

//   // Toggle function for the mobile menu (off-canvas)
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Add scroll event listener when component mounts
//   useEffect(() => {
//     window.addEventListener("scroll", handleScrollEffect);
//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScrollEffect);
//     };
//   }, []);

//   useEffect(() => {
//     toggleTheme();
//   }, [darkMode]);

//   let btns = ["about", "skills", "projects", "contact"];

//   return (
//     <>
//       <header
//         className={`text-white w-full z-20 transition-all duration-300 ease-linear ${
//           isBlurred
//             ? "backdrop-blur-md bg-slate-800/60 dark:bg-slate-950/60 fixed top-0" // Transparent with blur effect
//             : "bg-slate-800 relative dark:bg-slate-950" // Solid background
//         }`}
//       >
//         <div className="container mx-auto flex justify-between items-center p-4 transition-all duration-300 ease-linear px-6">
//           {/* Logo/Name */}
//           <div
//             className={`text-2xl font-bold transition-all duration-300 ease-linear ${
//               isBlurred ? "h-10" : "h-16"
//             }`} // Reduces logo height on scroll
//           >
//             <Link to="/">
//               <img
//                 src="/img/download.png"
//                 alt="Logo"
//                 className={`transition-all duration-300 ease-linear ${
//                   isBlurred ? "h-10" : "h-16"
//                 }`} // Shrinks the logo on scroll
//               />
//             </Link>
//           </div>

//           {/* Hamburger Menu (visible on small screens) */}
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-white focus:outline-none z-60"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           {/* Off-canvas mobile navigation */}
//           <nav
//             className={`fixed top-0 left-0 h-screen w-64 bg-slate-800 p-6 transition-transform duration-500 ease-in-out transform flex flex-col justify-center items-center ${
//               isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//             } md:hidden z-60`}
//           >
//             {/* Close button */}
//             <button
//               onClick={toggleMobileMenu}
//               className="text-white absolute top-4 right-4"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             </button>

//             <Link to="/">
//               <img
//                 src="/img/download.png"
//                 alt="Logo"
//                 className={`transition-all duration-300 ease-linear ${
//                   isBlurred ? "h-10" : "h-16"
//                 }`} // Shrinks the logo on scroll
//               />
//             </Link>

//             {/* Navigation Links */}
//             <ul className=" mt-10 text-center">
//               {btns.map((curBtn) => {
//                 return curBtn === "projects" ? (
//                   <li key={curBtn}>
//                     <button
//                       onClick={handleScroll}
//                       className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
//                     >
//                       {curBtn}
//                     </button>
//                   </li>
//                 ) : (
//                   <NavLink to={`/${curBtn}`} key={curBtn}>
//                     <li>
//                       <button
//                         onClick={handleScroll}
//                         className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
//                       >
//                         {curBtn}
//                       </button>
//                     </li>
//                   </NavLink>
//                 );
//               })}
//             </ul>

//             <div className="flex space-x-3 mt-10 ">
//               <a
//                 href="https://www.linkedin.com/in/waasim-ansari-39741b28b/"
//                 target="_blank"
//                 className="rounded-[100%] bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
//               >
//                 <FaLinkedinIn />
//               </a>
//               <a
//                 href="https://github.com/waasimAnsari786"
//                 target="_blank"
//                 className="rounded-[100%] bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
//               >
//                 <FaGithub />
//               </a>
//             </div>
//           </nav>

//           {/* Navigation Links (visible on larger screens) */}
//           <nav className="hidden md:block ">
//             <ul className="flex space-x-3">
//               {btns.map((curBtn) => {
//                 return curBtn === "projects" ? (
//                   <li key={curBtn}>
//                     <button
//                       onClick={handleScroll}
//                       className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
//                     >
//                       {curBtn}
//                     </button>
//                   </li>
//                 ) : (
//                   <NavLink to={`/${curBtn}`} key={curBtn}>
//                     <li>
//                       <button
//                         onClick={handleScroll}
//                         className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
//                       >
//                         {curBtn}
//                       </button>
//                     </li>
//                   </NavLink>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 p-4 z-10">
//         <div className="flex flex-col items-center space-y-4">
//           {/* Toggle Button */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="bg-slate-300 dark:bg-slate-700 p-3 rounded-full shadow-lg focus:outline-none"
//           >
//             {darkMode ? (
//               <MdLightMode className="text-yellow-500 w-6 h-6" />
//             ) : (
//               <MdDarkMode className="text-slate-800 dark:text-slate-100 w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";
import { useElementsRef } from "../context/MainContext";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  const { aboutRef, skillsRef, projectsRef, contactRef } = useElementsRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    document.title = `Waasim's Portfolio - ${targetedText.toUpperCase()}`;

    if (!aboutRef.current || !skillsRef.current || !contactRef.current) return;

    if (targetedText === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (targetedText === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    toggleTheme();
  }, [darkMode]);

  let btns = ["about", "skills", "projects", "contact"];

  return (
    <>
      <header className="text-white w-full z-20 fixed top-0 bg-slate-800 dark:bg-slate-950">
        <div className="container mx-auto flex justify-between items-center p-4 transition-all duration-300 ease-linear px-6">
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="/img/download.png"
                alt="Logo"
                className="h-16 transition-all duration-300 ease-linear"
              />
            </Link>
          </div>

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

          <nav
            className={`fixed top-0 left-0 h-screen w-64 bg-slate-800 p-6 transition-transform duration-500 ease-in-out transform flex flex-col justify-center items-center ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden z-60`}
          >
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

            <Link to="/">
              <img
                src="/img/download.png"
                alt="Logo"
                className="h-16 transition-all duration-300 ease-linear"
              />
            </Link>

            <ul className="mt-10 text-center">
              {btns.map((curBtn) => {
                return curBtn === "projects" ? (
                  <li key={curBtn}>
                    <button
                      onClick={handleScroll}
                      className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                    >
                      {curBtn}
                    </button>
                  </li>
                ) : (
                  <NavLink to={`/${curBtn}`} key={curBtn}>
                    <li>
                      <button
                        onClick={handleScroll}
                        className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                      >
                        {curBtn}
                      </button>
                    </li>
                  </NavLink>
                );
              })}
            </ul>

            <div className="flex space-x-3 mt-10">
              <a
                href="https://www.linkedin.com/in/waasim-ansari-39741b28b/"
                target="_blank"
                className="rounded-[100%] bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/waasimAnsari786"
                target="_blank"
                className="rounded-[100%] bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
              >
                <FaGithub />
              </a>
            </div>
          </nav>

          <nav className="hidden md:block">
            <ul className="flex space-x-3">
              {btns.map((curBtn) => {
                return curBtn === "projects" ? (
                  <li key={curBtn}>
                    <button
                      onClick={handleScroll}
                      className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                    >
                      {curBtn}
                    </button>
                  </li>
                ) : (
                  <NavLink to={`/${curBtn}`} key={curBtn}>
                    <li>
                      <button
                        onClick={handleScroll}
                        className="capitalize text-lg bg-transparent py-[0.1rem] px-2 rounded-md hover:bg-white hover:text-slate-800 transition duration-300 ease-in"
                      >
                        {curBtn}
                      </button>
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
