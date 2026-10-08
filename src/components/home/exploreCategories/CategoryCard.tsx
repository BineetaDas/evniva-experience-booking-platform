import React from "react";
import { ArrowUpRight, Compass, Drama, Film, Mic2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { CategoryCardProps } from "../../../types/interfaces/category.interface";

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isActive,
  onActivate,
}) => {
  return (
    <Link
      to={category.link}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`group relative min-h-22.5 overflow-hidden rounded-[22px] border transition-all duration-500 md:min-h-0 ${
        isActive
          ? "md:flex-[1.8] border-evniva-teal/20 shadow-[0_16px_38px_rgba(6,39,42,0.14)]"
          : "md:flex-1 border-evniva-teal/10 shadow-[0_8px_24px_rgba(6,39,42,0.07)]"
      }`}
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.title}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
          isActive ? "scale-105 saturate-105" : "scale-100 saturate-75"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActive
            ? "bg-linear-to-t from-black/75 via-black/20 to-black/5"
            : "bg-linear-to-t from-black/65 via-black/20 to-black/10"
        }`}
      />

      {/* Brand Tint */}
      <div
        className={`absolute inset-0 bg-evniva-teal mix-blend-multiply transition-opacity duration-500 ${
          isActive ? "opacity-10" : "opacity-20"
        }`}
      />

      {/* Top Content */}
      <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-6 sm:right-6 sm:top-5">
        {/* Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/15">
          {category.title === "Movies" && <Film size={16} strokeWidth={1.7} />}

          {category.title === "Events" && <Mic2 size={16} strokeWidth={1.7} />}

          {category.title === "Plays" && <Drama size={16} strokeWidth={1.7} />}

          {category.title === "Activities" && (
            <Compass size={16} strokeWidth={1.7} />
          )}
        </div>

        {/* Arrow */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-evniva-coral group-hover:bg-evniva-coral">
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-5">
        {/* Count */}
        <div className="mb-2 flex items-center">
          <span className="font-display text-lg leading-none tracking-[-0.02em] text-evniva-coral sm:text-xl">
            {category.count.replace("+", "")}
          </span>

          <Plus
            size={11}
            strokeWidth={2.5}
            className="ml-0.5 text-evniva-coral transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl leading-tight text-white sm:text-2xl">
          {category.title}
        </h3>

        {/* Description */}
        <div
          className={`grid transition-all duration-500 ${
            isActive
              ? "mt-2 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-md text-xs leading-5 text-white/70 sm:text-sm sm:leading-5">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Active Indicator */}
      <span
        className={`absolute bottom-0 left-0 h-0.75 rounded-r-full bg-evniva-coral transition-all duration-500 ${
          isActive ? "w-16" : "w-0"
        }`}
      />

      {/* Shine */}
      <span className="pointer-events-none absolute inset-y-0 -left-20 w-14 rotate-12 bg-white/15 blur-md transition-all duration-700 group-hover:left-[120%]" />
    </Link>
  );
};

export default CategoryCard;
