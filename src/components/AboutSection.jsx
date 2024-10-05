import React, { useRef, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import Text from './Text';
import MyButton from './MyButton';
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1728127935830.json'


const AboutSection = () => {
  const aniRef = useRef(null)

  return (
    <section className="w-full flex items-center justify-center text-gray-800" id='my-ab'>
      <div className="container mx-auto px-6 py-12">
        <Text myClass='text-4xl font-bold mb-8 text-center capitalize' myText='about me' />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Lottie
            lottieRef={aniRef}  // Connect the reference to Lottie
            animationData={animationData}
          />
          {/* <div className="relative h-80 md:h-full">
            <img src="/img/about-gif.gif" className='w-full h-full' alt="about gif" />
          </div> */}

          {/* Column 2: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-4">
              Hello, I'm <strong>Waasim Ansari</strong>, a passionate <strong>Front End Developer</strong>. I specialize in
              <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>,
              <strong>Tailwind CSS</strong>, and <strong>React</strong>.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              With <strong>1 year of experience working from home</strong>, I have
              <strong>not worked in any formal organization</strong>. Instead, I've gained all of my experience through
              <strong>self-learning</strong> and developing several projects by following tutorials on
              <strong>YouTube</strong> and other online platforms. My journey has been fueled by my drive to constantly learn
              and grow, exploring new technologies that have the potential to shape the future of the web and beyond.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              I am dedicated to honing my skills and staying up-to-date with the latest tools and techniques in the
              ever-evolving field of front-end development.
            </p>

            {/* Download CV Button */}
            <a
              href="/cv/waasim-cv.pdf" // Add the actual link to your CV
              // className="bg-gray-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-linear font-semibold py-2 px-4 inline-flex items-center justify-center rounded-lg mt-4 w-1/4"
              download
            >
              <MyButton btnClass='bg-gray-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-linear font-semibold py-2 px-4 inline-flex items-center justify-center rounded-lg mt-4 w-1/4 capitalize' btnText={<><FaDownload className="mr-2" /> Download CV</>} />

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
