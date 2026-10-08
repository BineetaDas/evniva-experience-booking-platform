import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { weekendSpecial } from "../../../services/json/weekendSpecial";
import WeekendSpecialCard from "./WeekendSpecialCard";

const WeekendSpecial: React.FC = () => {
  return (
    <section className="bg-evniva-cream px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-evniva-muted">
                Weekend Special
              </span>
            </div>

            <h2 className="font-display text-3xl leading-tight text-evniva-text sm:text-4xl">
              Make your weekend{" "}
              <span className="italic text-evniva-coral">
                worth remembering.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-evniva-muted sm:text-right sm:leading-7">
            Discover experiences that make ordinary weekends feel a little more
            special.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.15}
          breakpoints={{
            640: {
              slidesPerView: 2.15,
            },
            1024: {
              slidesPerView: 3.15,
            },
          }}
        >
          {weekendSpecial.map((experience) => (
            <SwiperSlide key={experience.id}>
              <WeekendSpecialCard experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WeekendSpecial;
