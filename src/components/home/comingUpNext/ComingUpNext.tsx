import React from "react";

import { comingUpNext } from "../../../services/json/comingUpNext";
import ComingUpNextItem from "./ComingUpNextItem";

const ComingUpNext: React.FC = () => {
  return (
    <section className="bg-evniva-cream px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-evniva-muted">
                Coming Up Next
              </span>
            </div>

            <h2 className="font-display text-3xl leading-tight text-evniva-text sm:text-4xl">
              What's happening{" "}
              <span className="italic text-evniva-coral">next.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-evniva-muted sm:text-right sm:leading-7">
            Keep an eye on what's coming next and plan your next memorable
            experience with EVNIVA.
          </p>
        </div>

        <div className="border-t border-evniva-teal/10">
          {comingUpNext.map((experience) => (
            <ComingUpNextItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingUpNext;
