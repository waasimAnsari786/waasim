import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import animationData from "../assets/Animation - 1728127935830.json"; // Import your Lottie animation file

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = [
    "Passionate Web Developer!",
    "Tech Enthusiast!",
    "Quick Learner!",
  ];

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing each character
    const delayBetweenLines = 1000; // Delay before starting to delete

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (charIndex < lines[currentLineIndex].length) {
          setText((prevText) => prevText + lines[currentLineIndex][charIndex]);
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else if (charIndex === lines[currentLineIndex].length) {
          setTimeout(() => setIsDeleting(true), delayBetweenLines);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
        } else if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentLineIndex(
            (prevLineIndex) => (prevLineIndex + 1) % lines.length
          ); // Move to next line in a loop
        }
      }
    };

    const interval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(interval);
  }, [charIndex, isDeleting, currentLineIndex]);

  return (
    <section className="w-full flex items-center justify-center text-slate-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        {/* First child: Typing text content */}
        <div className="flex-1 text-left md:pr-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm Waasim Ansari!
          </h1>
          <p
            className="text-2xl font-semibold leading-relaxed"
            style={{ whiteSpace: "pre-wrap", minHeight: "3.5rem" }} // Fixed height for the container
          >
            {text}
          </p>

          <div className="flex space-x-3 text-lg md:text-2xl">
            <a
              href="https://www.linkedin.com/in/waasim-ansari-39741b28b/"
              target="_blank"
              className="rounded-[100%] bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/waasimAnsari786"
              target="_blank"
              className="rounded-full bg-slate-800 hover:bg-transparent text-white hover:text-slate-800 p-4 border-[0.1vh] border-slate-800 hover:border-slate-800 transition duration-300 ease-linear"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Second child: Lottie animation */}
        <div className="flex-1 w-full h-full" data-aos="fade-down">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
