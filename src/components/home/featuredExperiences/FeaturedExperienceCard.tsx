import React from "react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import type { FeaturedExperienceCardProps } from "../../../types/interfaces/experience.interface";

const FeaturedExperienceCard: React.FC<FeaturedExperienceCardProps> = ({
  experience,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex h-full min-h-0 w-full overflow-hidden rounded-xl border text-left backdrop-blur-md transition-all duration-300 ${
        isSelected
          ? "border-evniva-coral/60 bg-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "border-white/15 bg-white/6 hover:border-white/25 hover:bg-white/9"
      }`}
    >
      {/* Image */}
      <div className="relative h-full w-[30%] shrink-0 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Glass Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Glass Content */}
      <div className="relative flex min-w-0 flex-1 flex-col justify-center px-4 py-4 pr-16 sm:px-5">
        {/* Title */}
        <h3 className="truncate text-[15px] font-semibold leading-[1.3] text-white sm:text-[16px]">
          {experience.title}
        </h3>

        {/* Date */}
        <div className="mt-2.5 flex min-w-0 items-center gap-1.5 text-[10px] text-white/65 sm:text-[11px]">
          <CalendarDays
            size={11}
            strokeWidth={1.8}
            className="shrink-0 text-white/60"
          />

          <span className="truncate">{experience.date}</span>
        </div>

        {/* Location */}
        <div className="mt-1.5 flex min-w-0 items-center gap-1.5 text-[10px] text-white/65 sm:text-[11px]">
          <MapPin
            size={11}
            strokeWidth={1.8}
            className="shrink-0 text-white/60"
          />

          <span className="truncate">{experience.location}</span>
        </div>

        {/* Price */}
        <p className="mt-2.5 text-[12px] font-semibold text-white sm:text-[13px]">
          ₹{experience.price}
        </p>

        {/* Glass Arrow Button */}
        <span
          className={`absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            isSelected
              ? "border-evniva-coral/50 bg-evniva-coral/15 text-evniva-coral shadow-[0_0_18px_rgba(255,90,54,0.12)]"
              : "border-white/20 bg-white/8 text-white/70 group-hover:border-evniva-coral/50 group-hover:bg-evniva-coral/10 group-hover:text-evniva-coral"
          }`}
        >
          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>

        {/* Subtle Glass Shine */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/6 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </div>
    </button>
  );
};

export default FeaturedExperienceCard;
