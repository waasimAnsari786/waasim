import React, { useId, useState, useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";
import QualificationSection from "./QualificationSection";
import MyButton from "./MyButton";
import MySlider from "./MySlider";
import { projectsData } from "../apis/projectsData";

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

  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6, 7];
  let arr3 = [8, 9, 10, 11, 15];

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

      <div className="container mx-auto grid grid-cols-3">
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

      <section className="bg-gray-100 pb-10">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 lg:gap-3">
          <div className="w-full flex justify-center gap-6">
            <MyButton
              btnText="qualification"
              btnClass="text-3xl text-center text-slate-800 capitalize font-bold mb-5"
              btnFunc={handleQuaExp}
              btnAni="fade-up"
            />
            <MyButton
              btnText="experience"
              btnClass="text-3xl text-center text-slate-800 capitalize font-bold mb-5"
              btnFunc={handleQuaExp}
              btnAni="fade-up"
            />
          </div>
          <QualificationSection quaArr={QuaExp} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
