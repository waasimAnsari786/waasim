import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <HeroSection />
      <AboutSection />
      <Outlet />
      <SkillsSection />

      <div className="container mx-auto grid grid-cols-3">
        <MySlider sliderEffect="creative" sliderDataArr={arr2} />
        <MySlider sliderEffect="cards" sliderDataArr={arr1} />
        <MySlider sliderEffect="cube" sliderDataArr={arr3} />
      </div>

      <section className="bg-gray-100 pb-10">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 lg:gap-3">
          <div className="w-full flex justify-center gap-6">
            <MyButton
              btnText="qualification"
              btnClass="text-3xl text-center text-slate-800 capitalize font-bold mb-5"
              btnFunc={handleQuaExp}
            />
            <MyButton
              btnText="experience"
              btnClass="text-3xl text-center text-slate-800 capitalize font-bold mb-5"
              btnFunc={handleQuaExp}
            />
          </div>
          <QualificationSection quaArr={QuaExp} />
        </div>
      </section>

      <ContactForm /> */}
    </>
  );
}
