import React, { useId } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";
import ProjectsSection from "./ProjectsSection";
import QualificationSection from "./QualificationSection";

export default function MyPortfolio() {
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

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-3">
          <QualificationSection
            quaArr={qualification}
            quaHead={"qualification"}
          />
          <QualificationSection quaArr={experience} quaHead={"experience"} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
