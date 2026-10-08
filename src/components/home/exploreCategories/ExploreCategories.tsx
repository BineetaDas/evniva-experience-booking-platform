import { useState } from "react";

import { categories } from "../../../services/json/categories";
import CategoryCard from "./CategoryCard";

const ExploreCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Movies");

  return (
    <section className="bg-evniva-cream px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-evniva-muted">
                Explore
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-3xl leading-tight text-evniva-text sm:text-4xl">
              Find your kind of{" "}
              <span className="italic text-evniva-coral">experience.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-evniva-muted sm:text-right sm:leading-7">
            From the big screen to live stages and unforgettable adventures,
            discover something made for your next memorable moment.
          </p>
        </div>

        {/* Category Cards */}
        <div className="flex min-h-97.5 flex-col gap-3 md:h-105 md:flex-row">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              isActive={activeCategory === category.title}
              onActivate={() => setActiveCategory(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
