import React from "react";
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

import type { TrendingExperienceCardProps } from "../../../types/interfaces/trendingExperience.interface";

const TrendingExperienceCard: React.FC<TrendingExperienceCardProps> = ({
  experience,
}) => {
  const experienceRoute = `/experiences/${experience.category.toLowerCase()}`;

  return (
    <Link
      to={experienceRoute}
      className="group block overflow-hidden rounded-3xl border border-evniva-teal/10 bg-evniva-card shadow-[0_4px_14px_rgba(6,39,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(6,39,42,0.07)]"
    >
      {/* Image */}
      <div className="relative h-56.25 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {experience.category}
        </span>

        {/* Main Arrow */}
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-evniva-coral group-hover:bg-evniva-coral">
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>

        {/* Date */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-evniva-coral px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white">
          <CalendarDays size={11} strokeWidth={2} />
          {experience.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-display text-[21px] leading-tight text-evniva-text transition-colors duration-300 group-hover:text-evniva-coral">
          {experience.title}
        </h3>

        {/* Date + Time */}
        <div className="mt-3 flex items-center gap-3 text-xs text-evniva-muted">
          <span className="flex items-center gap-1.5">
            <CalendarDays
              size={13}
              strokeWidth={1.8}
              className="text-evniva-coral"
            />

            {experience.date}
          </span>

          <span className="h-1 w-1 rounded-full bg-evniva-muted/50" />

          <span className="flex items-center gap-1.5">
            <Clock3 size={13} strokeWidth={1.8} className="text-evniva-coral" />

            {experience.time}
          </span>
        </div>

        {/* Location + Venue + Format */}
        <div className="mt-2.5 flex min-w-0 items-center gap-1.5 text-xs text-evniva-muted">
          <MapPin
            size={13}
            strokeWidth={1.8}
            className="shrink-0 text-evniva-coral"
          />

          <span className="truncate">{experience.location}</span>

          <span className="shrink-0 text-evniva-muted/50">•</span>

          <span className="truncate">{experience.venue}</span>

          {experience.format && (
            <>
              <span className="shrink-0 text-evniva-muted/50">•</span>

              <span className="shrink-0">{experience.format}</span>
            </>
          )}
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <Star
            size={13}
            strokeWidth={1.8}
            className="fill-evniva-coral text-evniva-coral"
          />

          <span className="font-semibold text-evniva-text">
            {experience.rating}
          </span>

          <span className="text-evniva-muted">
            ({experience.reviews} reviews)
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-evniva-teal/10" />

        {/* Price */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-evniva-muted">
              Starting from
            </p>

            <p className="mt-1 text-base font-extrabold text-evniva-text">
              ₹{experience.price}
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-evniva-muted transition-colors duration-300 group-hover:text-evniva-coral">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingExperienceCard;
