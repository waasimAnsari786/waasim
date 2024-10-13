import React, { useId, useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";
import QualificationSection from "./QualificationSection";
import MyButton from "./MyButton";
import MySlider from "./MySlider";
import { projectsData } from "../apis/projectsData";
import Text from "./Text";

export default function MyPortfolio() {
  // i created these 2 arrays for printing my qualifications and experience
  const qualification = [
    {
      title: "matriculation",
      year: "Sindh Board , 2009 - 2021",
      description:
        "I completed my matriculation with a commendable score of 74.58% in the Faculty of Biology.",
      id: useId(),
    },
    {
      title: "intermediate",
      year: "Continue",
      description:
        "Currently studying Computer Sciences, focusing on programming and data structures to build a tech career foundation.",
      id: useId(),
    },
  ];
  const experience = [
    {
      title: "Asst Teacher",
      year: "Korean Computer Academy (10 Months)",
      description:
        "Assisted students in practicing lecture concepts, ensuring deeper understanding through hands-on exercises and personalized support.",
      id: useId(),
    },
    {
      title: "Front End Developer (intern)",
      year: "The Alifa D.M Agency (3 Months)",
      description:
        "Developed static and dynamic websites on WordPress, delivering responsive designs and efficient functionality to meet client needs.",
      id: useId(),
    },
  ];

  // state for handling targeted click on qualification and experience buttons
  const [QuaExp, setQuaExp] = useState(qualification);
  const handleQuaExp = (val) => {
    val.target.textContent === "qualification"
      ? setQuaExp(qualification)
      : setQuaExp(experience);
  };

  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <section className="py-12 dark:bg-slate-800 dark:text-white">
        <Text
          myClass="text-4xl font-bold mb-8 text-center capitalize"
          myText="projects"
          myAni="fade-up"
        />
        <div
          className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 "
          data-aos="zoom-in"
        >
          <MySlider
            sliderEffect="creative"
            sliderDataArr={projectsData}
            sliderVal="HTML/CSS"
          />
          <MySlider
            sliderEffect="cards"
            sliderDataArr={projectsData}
            sliderVal="JavaScript"
          />
          <MySlider
            sliderEffect="cube"
            sliderDataArr={projectsData}
            sliderVal="React"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-12 dark:bg-slate-800 ">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 lg:gap-3 px-6">
          <div className="w-full flex justify-center gap-2" data-aos="fade-up">
            <MyButton
              btnText="qualification"
              btnClass="bg-gray-300 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear font-semibold py-2 px-4 flex items-center justify-center rounded-lg mt-4 capitalize border-[0.1rem] border-transparent dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
              btnFunc={handleQuaExp}
            />
            <MyButton
              btnText="experience"
              btnClass="bg-gray-300 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear font-semibold py-2 px-4 flex items-center justify-center rounded-lg mt-4 capitalize border-[0.1rem] border-transparent dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
              btnFunc={handleQuaExp}
            />
          </div>
          <QualificationSection quaArr={QuaExp} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
