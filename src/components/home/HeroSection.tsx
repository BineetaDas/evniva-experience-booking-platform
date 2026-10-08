import {
  ArrowRight,
  CalendarDays,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[760px] overflow-visible bg-[#06272A] sm:min-h-[800px]">
      {/* ================= HERO IMAGE ================= */}
      <img
        src={heroImage}
        alt="People enjoying an unforgettable experience"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.78] saturate-[0.9]"
      />

      {/* ================= HERO IMAGE TREATMENT ================= */}

      {/* Main teal tint */}
      <div className="absolute inset-0 bg-[#06272A]/35" />

      {/* Soft cinematic darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06272A]/55 via-[#06272A]/20 to-transparent" />

      {/* Bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06272A]/75 via-[#06272A]/30 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pt-20 sm:min-h-[800px] sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-10">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full max-w-3xl lg:w-[58%]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-evniva-coral" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                Experiences Worth Remembering
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Your next
              <br />
              unforgettable
              <br />
              <span className="italic text-evniva-coral">experience.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Discover movies, live events, plays and activities made for your
              next memorable moment.
            </p>

            {/* ================= ACTIONS ================= */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* EXPLORE EXPERIENCES */}
              <Link
                to="/experiences"
                className="group relative inline-flex h-12 w-[205px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-evniva-coral px-6 text-sm font-bold text-white shadow-[0_8px_25px_rgba(251,113,133,0.22)] transition-all duration-300 hover:bg-evniva-coral-hover hover:shadow-[0_12px_30px_rgba(251,113,133,0.32)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                  Explore Experiences
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

                <span className="absolute inset-y-0 -left-12 w-8 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[115%]" />
              </Link>

              {/* DISCOVER MORE */}
              <button
                type="button"
                className="group relative inline-flex h-12 w-[205px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-white/[0.08] px-6 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.13]"
              >
                <span className="absolute inset-y-0 -left-10 w-7 rotate-12 bg-white/20 blur-sm transition-all duration-500 group-hover:left-[115%]" />

                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
                  <Sparkles size={14} strokeWidth={1.8} />
                </span>

                <span className="relative z-10 whitespace-nowrap">
                  Discover More
                </span>

                <ArrowRight
                  size={15}
                  className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* ================= RIGHT GLASS STATS ================= */}
          <div className="relative hidden h-[480px] w-[36%] lg:block">
            {/* Subtle ambient light */}
            <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-white/[0.025] blur-[100px]" />

            {/* ================= STAT 01 ================= */}
            <div className="group absolute right-4 top-10 w-[215px]">
              <div className="relative overflow-hidden rounded-[20px] border border-white/[0.16] bg-white/[0.065] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <span className="pointer-events-none absolute inset-y-0 -left-12 w-8 rotate-12 bg-white/[0.08] blur-md transition-all duration-700 group-hover:left-[120%]" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.07] text-white/80">
                    <Ticket size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold leading-none text-white">
                      500<span className="text-evniva-coral">+</span>
                    </p>

                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                      Experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STAT 02 ================= */}
            <div className="group absolute left-8 top-[185px] w-[215px]">
              <div className="relative overflow-hidden rounded-[20px] border border-white/[0.16] bg-white/[0.065] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <span className="pointer-events-none absolute inset-y-0 -left-12 w-8 rotate-12 bg-white/[0.08] blur-md transition-all duration-700 group-hover:left-[120%]" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.07] text-white/80">
                    <Star size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold leading-none text-white">
                      4.9
                    </p>

                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                      Guest Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STAT 03 ================= */}
            <div className="group absolute bottom-10 right-12 w-[215px]">
              <div className="relative overflow-hidden rounded-[20px] border border-white/[0.16] bg-white/[0.065] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <span className="pointer-events-none absolute inset-y-0 -left-12 w-8 rotate-12 bg-white/[0.08] blur-md transition-all duration-700 group-hover:left-[120%]" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.07] text-white/80">
                    <Users size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold leading-none text-white">
                      10K<span className="text-evniva-coral">+</span>
                    </p>

                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                      Happy Guests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING EXPERIENCE BAR ================= */}
      <div className="absolute bottom-[-55px] left-1/2 z-20 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 sm:bottom-[-60px] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]">
        <div className="relative overflow-hidden rounded-[22px] border border-white/[0.15] bg-[#06272A]/90 shadow-[0_22px_55px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="grid md:grid-cols-[1.1fr_1.4fr_1fr_auto]">
            {/* DATE & TIME */}
            <div className="group flex items-center gap-4 border-b border-white/[0.08] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.025] md:border-b-0 md:border-r sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.07] text-white/75 transition-all duration-300 group-hover:border-evniva-coral/25 group-hover:bg-evniva-coral/10">
                <CalendarDays size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                  Date &amp; Time
                </p>

                <p className="mt-1 text-sm font-bold text-white">25 DEC 2026</p>

                <p className="mt-0.5 text-xs text-white/45">07:30 PM</p>
              </div>
            </div>

            {/* VENUE */}
            <div className="group flex items-center gap-4 border-b border-white/[0.08] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.025] md:border-b-0 md:border-r sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.07] text-white/75 transition-all duration-300 group-hover:border-evniva-coral/25 group-hover:bg-evniva-coral/10">
                <MapPin size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                  Venue
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Kolkata Eco Park
                </p>

                <p className="mt-0.5 text-xs text-white/45">Kolkata</p>
              </div>
            </div>

            {/* ATTENDING */}
            <div className="group flex items-center gap-4 border-b border-white/[0.08] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.025] md:border-b-0 md:border-r sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.07] text-white/75 transition-all duration-300 group-hover:border-evniva-coral/25 group-hover:bg-evniva-coral/10">
                <Users size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                  Attending
                </p>

                <p className="mt-1 text-sm font-bold text-white">1.2K</p>

                <p className="mt-0.5 text-xs text-white/45">People Going</p>
              </div>
            </div>

            {/* INTERESTED */}
            <div className="flex items-center justify-center px-5 py-5 sm:px-7">
              <button
                type="button"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-evniva-coral px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(251,113,133,0.18)] transition-all duration-300 hover:bg-evniva-coral-hover hover:shadow-[0_10px_28px_rgba(251,113,133,0.28)] md:w-auto"
              >
                <Heart
                  size={17}
                  strokeWidth={2}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="relative z-10">Interested</span>

                <span className="absolute inset-y-0 -left-10 w-7 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[115%]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
