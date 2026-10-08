import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { ComingUpNextItemProps } from "../../../types/interfaces/comingUpNext.interface";

const ComingUpNextItem: React.FC<ComingUpNextItemProps> = ({ experience }) => {
  return (
    <Link
      to={experience.link}
      className="group grid grid-cols-[64px_105px_1fr_36px] items-center gap-4 border-b border-evniva-teal/10 py-5 transition-all duration-300 sm:grid-cols-[85px_160px_1fr_42px] sm:gap-5 sm:py-6 lg:grid-cols-[105px_190px_1fr_48px]"
    >
      <div>
        <p className="font-display text-3xl leading-none tracking-[-0.04em] text-evniva-text transition-colors duration-300 group-hover:text-evniva-coral sm:text-4xl">
          {experience.date}
        </p>

        <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-evniva-muted">
          <span>{experience.month}</span>
          <span className="text-evniva-teal/25">•</span>
          <span>{experience.day}</span>
        </div>
      </div>

      <div className="relative h-18 overflow-hidden rounded-[14px] sm:h-24 sm:rounded-2xl">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0">
        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-evniva-coral">
          {experience.type}
        </p>

        <h3 className="truncate font-display text-lg leading-tight text-evniva-text transition-colors duration-300 group-hover:text-evniva-coral sm:text-xl lg:text-2xl">
          {experience.title}
        </h3>

        <p className="mt-1.5 truncate text-xs text-evniva-muted sm:text-sm">
          {experience.venue}
          <span className="mx-1 text-evniva-teal/25">•</span>
          {experience.location}
        </p>
      </div>

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-evniva-teal/10 text-evniva-muted transition-all duration-300 group-hover:border-evniva-coral group-hover:bg-evniva-coral group-hover:text-white sm:h-10 sm:w-10">
        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
};

export default ComingUpNextItem;
