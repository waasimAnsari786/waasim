import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, EffectCube } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProjectCard from "./ProjectCard";
import { NavLink } from "react-router-dom";
import Text from "./Text";

export default function MySlider({ sliderEffect, sliderDataArr, sliderVal }) {
  const htmls = sliderDataArr.filter(
    (curElem, i) => curElem.category === sliderVal
  );

  if (sliderEffect === "cards") {
    return (
      <div>
        <Text
          myClass="text-2xl font-bold my-5 text-center capitalize"
          myText="JavaScript"
        />
        <div className="rounded-lg shadow-gray-400 shadow-xl dark:shadow-slate-950">
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
            {htmls.map((curElem) => {
              return (
                <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                  <NavLink to={`/projects/${curElem.title}`}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                      bgColor={curElem.bgColor && curElem.bgColor}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  } else if (sliderEffect === "creative") {
    return (
      <div>
        <Text
          myClass="text-2xl font-bold my-5 text-center capitalize"
          myText="HTML/CSS"
        />
        <div className="rounded-lg shadow-gray-400 shadow-xl dark:shadow-slate-950">
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
            {htmls.map((curElem) => {
              return (
                <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                  <NavLink to={`/projects/${curElem.title}`}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                      bgColor={curElem.bgColor && curElem.bgColor}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  } else if (sliderEffect === "cube") {
    return (
      <div>
        <Text
          myClass="text-2xl font-bold my-5 text-center capitalize"
          myText="React"
        />{" "}
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
            {htmls.map((curElem) => {
              return (
                <SwiperSlide className="rounded-xl" key={curElem.liveURL}>
                  <NavLink to={`/projects/${curElem.title}`}>
                    <ProjectCard
                      img={curElem.img}
                      title={curElem.title}
                      liveURL={curElem.liveURL}
                      shortDes={curElem.shortDes}
                      bgColor={curElem.bgColor && curElem.bgColor}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }
}
