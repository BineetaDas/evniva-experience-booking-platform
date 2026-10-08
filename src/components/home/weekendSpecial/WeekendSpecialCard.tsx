import React from "react";
import { ArrowUpRight } from "lucide-react";

import type { WeekendSpecialCardProps } from "../../../types/interfaces/weekendSpecial.interface";

const WeekendSpecialCard: React.FC<WeekendSpecialCardProps> = ({
  experience,
}) => {
  return (
    <div className="group overflow-hidden rounded-[22px] bg-evniva-card">
      {/* Image */}
      <div className="relative h-52.5 overflow-hidden sm:h-57.5 lg:h-60">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-evniva-coral">
          {experience.date}
        </p>

        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-evniva-text sm:text-[22px]">
              {experience.title}
            </h3>

            <p className="mt-1.5 truncate text-xs text-evniva-muted sm:text-sm">
              {experience.venue}
              <span className="mx-1.5 text-evniva-teal/25">•</span>
              {experience.location}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Explore ${experience.title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-evniva-teal/10 text-evniva-text transition-all duration-300 group-hover:border-evniva-coral group-hover:bg-evniva-coral group-hover:text-white"
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekendSpecialCard;
