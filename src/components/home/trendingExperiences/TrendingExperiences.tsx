import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { trendingExperiences } from "../../../services/json/trendingExperiences";
import TrendingExperienceCard from "./TrendingExperienceCard";

const TrendingExperiences = () => {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-evniva-cream px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-evniva-muted">
                  Trending Now
                </span>
              </div>

              <h2 className="font-display text-3xl leading-tight text-evniva-text sm:text-4xl">
                What people are{" "}
                <span className="italic text-evniva-coral">talking about.</span>
              </h2>
            </div>

            {/* Slider Arrows */}
            <div className="flex shrink-0 gap-2">
              <button
                ref={prevButtonRef}
                type="button"
                aria-label="Previous experiences"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-evniva-teal/15 bg-evniva-card text-evniva-text transition-all duration-300 hover:border-evniva-coral hover:bg-evniva-coral hover:text-white"
              >
                <ArrowLeft size={17} strokeWidth={1.8} />
              </button>

              <button
                ref={nextButtonRef}
                type="button"
                aria-label="Next experiences"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-evniva-teal/15 bg-evniva-card text-evniva-text transition-all duration-300 hover:border-evniva-coral hover:bg-evniva-coral hover:text-white"
              >
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Description
          <p className="mt-4 max-w-md text-sm leading-6 text-evniva-muted sm:leading-7">
            Discover the experiences everyone is enjoying right now, from live
            events to creative activities and unforgettable moments.
          </p> */}
        </div>

        {/* Trending Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }
            }}
          >
            {trendingExperiences.map((experience) => (
              <SwiperSlide key={experience.id}>
                <TrendingExperienceCard experience={experience} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingExperiences;
