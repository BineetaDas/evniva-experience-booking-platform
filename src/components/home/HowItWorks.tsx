import { Compass, MousePointerClick, TicketCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Discover Movies, Events, Plays and Activities that match the moment you're looking for.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Choose",
    description: "Find the experience, date and time that feels right for you.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Book",
    description:
      "Secure your spot and receive your digital ticket, ready for the experience.",
    icon: TicketCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="overflow-hidden bg-evniva-teal px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
                How It Works
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl">
              Simple steps.{" "}
              <span className="italic text-evniva-coral">
                Better experiences.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/45 sm:leading-7 lg:text-right">
            Discover something you love, choose your moment, and book it
            effortlessly with EVNIVA.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dotted Connection */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-16.5 hidden lg:block">
            <svg
              viewBox="0 0 1000 150"
              className="h-37.5 w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M20 35 C180 35 190 112 350 112 C515 112 500 35 670 35 C815 35 830 92 980 92"
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1.5"
                strokeDasharray="2 9"
                strokeLinecap="round"
              />

              <circle cx="20" cy="35" r="3.5" fill="rgba(255,255,255,0.35)" />

              <circle cx="350" cy="112" r="3.5" fill="rgba(255,255,255,0.35)" />

              <circle cx="670" cy="35" r="3.5" fill="rgba(255,255,255,0.35)" />

              <path
                d="M967 83 L980 92 L967 101"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group relative ${
                    index === 1 ? "lg:translate-y-14" : ""
                  }`}
                >
                  {/* Number + Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display text-[72px] leading-none tracking-[-0.06em] text-white/6 transition-colors duration-500 group-hover:text-white/10 sm:text-[80px]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/55 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/8 group-hover:text-evniva-coral">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-6">
                    <h3 className="font-display text-[27px] leading-tight text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-72.5 text-[13px] leading-6 text-white/40">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="mt-9 flex items-center gap-3 lg:hidden">
                      <span className="h-px flex-1 border-t border-dashed border-white/15" />

                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />

                      <span className="h-px flex-1 border-t border-dashed border-white/15" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
