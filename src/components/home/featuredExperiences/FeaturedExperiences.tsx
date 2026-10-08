import { ArrowRight, CalendarDays, Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { featuredExperiences } from "../../../services/json/featuredExperiences";
import FeaturedExperienceCard from "./FeaturedExperienceCard";

const FeaturedExperiences = () => {
  const [selectedId, setSelectedId] = useState(featuredExperiences[0].id);

  const selectedExperience =
    featuredExperiences.find((experience) => experience.id === selectedId) ??
    featuredExperiences[0];

  const otherExperiences = featuredExperiences.filter(
    (experience) => experience.id !== selectedExperience.id,
  );

  const experienceRoute = `/experiences/${selectedExperience.category.toLowerCase()}`;

  return (
    <section className="mt-6 bg-evniva-teal px-5 py-12 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-7 rounded-full bg-evniva-coral" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                Featured
              </span>
            </div>

            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Experiences worth{" "}
              <span className="italic text-evniva-coral">remembering.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-white/55 sm:text-right sm:text-sm sm:leading-6">
            Handpicked experiences designed to turn an ordinary day into
            something you will want to remember.
          </p>
        </div>

        {/* Featured Experience Layout */}
        <div className="grid h-117.5 gap-3 lg:grid-cols-[1.7fr_1fr]">
          {/* ================= LARGE CARD ================= */}
          <div className="group relative min-h-0 overflow-hidden rounded-[9px] border border-white/15">
            {/* Background Image */}
            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/5" />

            {/* Content */}
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
              {/* Glass Category Pill */}
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md">
                {selectedExperience.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 max-w-[90%] font-display text-[30px] font-medium leading-[1.08] text-white sm:text-[34px] lg:text-[38px]">
                {selectedExperience.title}
              </h3>

              {/* Date / Location / Price */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] leading-none text-white/80 sm:text-xs">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <CalendarDays size={12} strokeWidth={1.8} />
                  {selectedExperience.date}
                </span>

                <span className="text-white/30">•</span>

                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin size={12} strokeWidth={1.8} />
                  {selectedExperience.location}
                </span>

                <span className="text-white/30">•</span>

                <span className="whitespace-nowrap font-medium">
                  ₹{selectedExperience.price}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 max-w-130 text-[12px] leading-[1.6] text-white/70 sm:text-[13px] sm:leading-[1.6]">
                {selectedExperience.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex items-center gap-2">
                {/* Book Now */}
                <Link
                  to={experienceRoute}
                  className="group/button relative flex items-center gap-1.5 overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover px-5 py-2.5 text-[11px] font-bold text-white shadow-[0_0_18px_rgba(255,90,54,0.22)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,90,54,0.35)]"
                >
                  <span className="relative z-10">Book Now</span>

                  <ArrowRight
                    size={13}
                    strokeWidth={2}
                    className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-0.5"
                  />

                  {/* Shine */}
                  <span className="absolute inset-y-0 -left-10 z-0 w-7 rotate-12 bg-white/50 blur-sm transition-all duration-500 group-hover/button:left-[115%]" />

                  {/* Hover Overlay */}
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100" />
                </Link>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="group/wishlist relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-sm transition-all duration-300 hover:border-evniva-coral hover:bg-evniva-coral/10 hover:text-evniva-coral hover:shadow-[0_0_18px_rgba(255,90,54,0.18)]"
                >
                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover/wishlist:translate-x-full" />

                  <Heart
                    size={15}
                    strokeWidth={1.8}
                    className="relative z-10 transition-transform duration-300 group-hover/wishlist:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ================= THREE SMALL CARDS ================= */}
          <div className="grid min-h-0 grid-rows-3 gap-3">
            {otherExperiences.slice(0, 3).map((experience) => (
              <FeaturedExperienceCard
                key={experience.id}
                experience={experience}
                isSelected={experience.id === selectedId}
                onSelect={() => setSelectedId(experience.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
