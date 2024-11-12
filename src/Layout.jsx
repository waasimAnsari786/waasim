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
    </>
  );
}
