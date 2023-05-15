import { useRef } from "react";
import YellowButton from "../shared/YellowButton";
import Image from "next/image";
import RightArrow from "../../images/sectionsAssets/rightArrow.png";
import LeftArrow from "../../images/sectionsAssets/leftArrow.png";

import SectionTitle from "../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Team } from "./data";

const OurSpeakers = () => {
  const swiperRef = useRef(null);

  return (
    <section id="Team" className="relative section-container">
      <div className="mb-12 lg:mb-0">
        <SectionTitle title={"Our Team"} /> 
      </div>

      

      <div className="flex items-center md:space-x-8 sm:mt-[40px] md:mt-[100px] lg:space-x-8">
        <div
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6"
        >
          <Image src={LeftArrow} alt="" />
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Team.map((spk, idx) => {
            return (
              <SwiperSlide key={idx}>
                {({ isActive, isNext, isPrev }) => (
                  <div
                    className={` ${
                      isActive
                        ? "lg:scale-75"
                        : isPrev || isNext
                        ? "lg:scale-100"
                        : "lg:scale-75"
                    }`}
                  >
                    <div className="sm:mt-[50px]">
                      <div className="relative  border-qiskit-black border-4 -z-10">
                        <Image src={spk.image} alt={spk.name} layout="responsive"/>
                      </div>

                      <div className="retlative w-4/5 mx-auto z-10 -mt-20 ">
                        <YellowButton title={spk.name} />
                      </div>

                      <div className="mx-auto flex justify-center text-[17px] font-semibold">
                        <p> {spk.role} </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className="cursor-pointer  hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
        >
          <Image src={RightArrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurSpeakers;
