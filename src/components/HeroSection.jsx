import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full hero-sec">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Typing Text Animation */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className='text-white text-4xl md:text-6xl font-bold text-center'>
          <span className="typewriter py-2"></span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
