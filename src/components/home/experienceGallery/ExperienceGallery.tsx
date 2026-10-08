import React from "react";

import { experienceGallery } from "../../../services/json/experienceGallery";
import GalleryImage from "./GalleryImage";

const ExperienceGallery: React.FC = () => {
  return (
    <section className="bg-evniva-teal px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                Experience Gallery
              </span>
            </div>

            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Moments worth{" "}
              <span className="italic text-evniva-coral">experiencing.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/60 sm:text-right sm:leading-7">
            A glimpse of the moments, places and experiences waiting to become
            part of your next story.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid h-180 grid-cols-2 grid-rows-2 gap-3 sm:h-155 lg:grid-cols-4">
          {/* Large Image */}
          <div className="col-span-2 row-span-2">
            <GalleryImage experience={experienceGallery[0]} />
          </div>

          {/* Small Image */}
          <div className="col-span-1 row-span-1">
            <GalleryImage experience={experienceGallery[1]} />
          </div>

          {/* Small Image */}
          <div className="col-span-1 row-span-1">
            <GalleryImage experience={experienceGallery[2]} />
          </div>

          {/* Small Image */}
          <div className="col-span-1 row-span-1">
            <GalleryImage experience={experienceGallery[3]} />
          </div>

          {/* Small Image */}
          <div className="col-span-1 row-span-1">
            <GalleryImage experience={experienceGallery[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;
