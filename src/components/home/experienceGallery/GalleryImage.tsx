import React from "react";

import type { GalleryImageProps } from "../../../types/interfaces/experienceGallery.interface";

const GalleryImage: React.FC<GalleryImageProps> = ({ experience }) => {
  return (
    <div className="group h-full overflow-hidden rounded-3xl">
      <img
        src={experience.image}
        alt="EVNIVA experience"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

export default GalleryImage;
