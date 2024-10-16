import React, { useRef, useEffect } from "react";
import { FaDownload } from "react-icons/fa"; // Import the download icon
import Text from "./Text";
import MyButton from "./MyButton";
import Lottie from "lottie-react";
import animationData from "../assets/heroAnimation.json";
import { useElementsRef } from "../context/MainContext";

const AboutSection = () => {
  const aniRef = useRef(null);
  const { aboutRef } = useElementsRef();

  return (
    <section
      className="w-full flex items-center justify-center text-gray-800 dark:bg-slate-800 dark:text-white"
      ref={aboutRef}
      id="my-ab"
    >
      <div className="container mx-auto px-6 py-12">
        <Text
          myClass="text-4xl font-bold mb-8 text-center capitalize"
          myText="about me"
          myAni="fade-up"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-rows-4 lg:grid-rows-3 sm:grid-rows-4 grid-rows-1 ">
          <div
            data-aos="flip-up"
            className="lg:row-start-1 lg:row-end-4 md:row-start-3 md:row-end-5 sm:row-start-3 sm:row-end-5 hidden sm:block"
          >
            <Lottie
              lottieRef={aniRef} // Connect the reference to Lottie
              animationData={animationData}
              className="max-w-sm mx-auto"
            />
          </div>

          {/* Column 2: Text Content */}
          <div
            className="flex flex-col md:row-start-1 md:row-end-3 lg:row-start-1 lg:row-end-4 sm:row-start-1 sm:row-end-3 justify-center row-start-1 row-end-2"
            data-aos="flip-up"
          >
            <p className="text-lg text-gray-700 mb-4 dark:text-white">
              I am a passionate Front-End Developer with one year of industry
              experience, specializing in building responsive and user-friendly
              web applications. My journey began through self-learning, fueled
              by numerous YouTube tutorials and online platforms that empowered
              me to master the essentials of web development.
            </p>

            <p className="text-lg text-gray-700 mb-4 dark:text-white">
              I have honed my skills in HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, and React. My hands-on experience includes developing
              various projects, both independently and for organizations, which
              has enhanced my technical abilities and provided valuable insights
              into real-world applications.
            </p>

            <p className="text-lg text-gray-700 mb-6 dark:text-white">
              In addition to my foundational skills, I am adept at leveraging
              tools like ChatGPT to generate efficient and optimized code,
              further streamlining my development process. I am committed to
              continuous learning and improvement, and I am excited about the
              opportunities to create impactful web solutions that meet user
              needs.
            </p>

            {/* Download CV Button */}
            <a
              href="/waasim ansari resume.pdf"
              target="_blank" // Add the actual link to your CV
            >
              <MyButton
                btnText={
                  <>
                    <FaDownload className="mr-2" /> Download CV
                  </>
                }
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
