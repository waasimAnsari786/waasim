import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, EffectCube } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProjectCard from "./ProjectCard";

export default function MySlider({ sliderEffect, sliderDataArr, sliderVal }) {
  const htmls = sliderDataArr.filter(
    (curElem, i) => curElem.category === sliderVal
  );

  if (sliderEffect === "cards") {
    return (
      <>
        <div>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            autoplay={{ delay: 1500 }}
            loop={true}
            className="mySwiper"
          >
            {htmls.map((curElem, i) => {
              return (
                <>
                  <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                    />
                    {/* <img src={curElem.img} alt="project image" />
                    <div className="w-full h-full opacity-0 hover:opacity-60 transition duration-300 ease-linear">
                      <h4>project title {curElem[i]}</h4>
                      <h6>project subtitle {curElem[i]}</h6>
                      <button>view project</button>
                    </div> */}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  } else if (sliderEffect === "creative") {
    return (
      <>
        <div className="w-full">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            autoplay={{ delay: 1500 }}
            loop={true}
            creativeEffect={{
              prev: {
                translate: ["-125%", 0, -800],
                rotate: [0, 0, -90],
              },
              next: {
                translate: ["125%", 0, -800],
                rotate: [0, 0, 90],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper5"
            // data-aos="flip-up"
          >
            {htmls.map((curElem, i) => {
              return (
                <>
                  <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                    />
                    {/* <img src={curElem.img} alt="project image" />
                    <div className="w-full h-full opacity-0 hover:opacity-60 transition duration-300 ease-linear">
                      <h4>project title {curElem[i]}</h4>
                      <h6>project subtitle {curElem[i]}</h6>
                      <button>view project</button>
                    </div> */}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  } else if (sliderEffect === "cube") {
    return (
      <>
        <div className="w-full">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            modules={[EffectCube, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 1500 }}
            loop={true}
            // data-aos="flip-up"
          >
            {htmls.map((curElem, i) => {
              return (
                <>
                  <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                    />
                    {/* <img src={curElem.img} alt="project image" />
                    <div className="w-full h-full opacity-0 hover:opacity-60 transition duration-300 ease-linear">
                      <h4>project title {curElem[i]}</h4>
                      <h6>project subtitle {curElem[i]}</h6>
                      <button>view project</button>
                    </div> */}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  }
}
