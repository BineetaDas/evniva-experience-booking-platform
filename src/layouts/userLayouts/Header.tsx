import { Heart, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import evnivaLogo from "../../assets/logo/evniva-logo.png";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" aria-label="EVNIVA Home">
          <img src={evnivaLogo} alt="EVNIVA" className="w-32 sm:w-36" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group relative text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-evniva-coral"
                  : "text-evniva-cream hover:text-evniva-coral"
              }`
            }
          >
            Home
            <span className="absolute -bottom-2 left-0 h-0.5 w-0 overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover transition-all duration-300 group-hover:w-full">
              <span className="absolute inset-y-0 -left-5 w-4 rotate-12 bg-white/70 blur-[2px] transition-all duration-500 group-hover:left-[110%]" />
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `group relative text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-evniva-coral"
                  : "text-evniva-cream hover:text-evniva-coral"
              }`
            }
          >
            About
            <span className="absolute -bottom-2 left-0 h-0.5 w-0 overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover transition-all duration-300 group-hover:w-full">
              <span className="absolute inset-y-0 -left-5 w-4 rotate-12 bg-white/70 blur-[2px] transition-all duration-500 group-hover:left-[110%]" />
            </span>
          </NavLink>

          <NavLink
            to="/experiences"
            className={({ isActive }) =>
              `group relative text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-evniva-coral"
                  : "text-evniva-cream hover:text-evniva-coral"
              }`
            }
          >
            Experiences
            <span className="absolute -bottom-2 left-0 h-0.5 w-0 overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover transition-all duration-300 group-hover:w-full">
              <span className="absolute inset-y-0 -left-5 w-4 rotate-12 bg-white/70 blur-[2px] transition-all duration-500 group-hover:left-[110%]" />
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `group relative text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-evniva-coral"
                  : "text-evniva-cream hover:text-evniva-coral"
              }`
            }
          >
            Contact
            <span className="absolute -bottom-2 left-0 h-0.5 w-0 overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover transition-all duration-300 group-hover:w-full">
              <span className="absolute inset-y-0 -left-5 w-4 rotate-12 bg-white/70 blur-[2px] transition-all duration-500 group-hover:left-[110%]" />
            </span>
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-evniva-cream transition-all duration-300 hover:bg-evniva-coral/10 hover:text-evniva-coral hover:shadow-[0_0_18px_rgba(255,90,54,0.18)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

            <Heart
              size={20}
              strokeWidth={1.8}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Login */}
          <button
            type="button"
            className="group relative hidden overflow-hidden rounded-full bg-linear-to-r from-evniva-coral to-evniva-coral-hover px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_18px_rgba(255,90,54,0.22)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,90,54,0.35)] md:block"
          >
            <span className="relative z-10">Login</span>

            {/* Shine */}
            <span className="absolute inset-y-0 -left-12 z-0 w-8 rotate-12 bg-white/50 blur-sm transition-all duration-500 group-hover:left-[115%]" />

            {/* Soft Hover Overlay */}
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-evniva-cream transition-all duration-300 hover:bg-evniva-coral/10 hover:text-evniva-coral hover:shadow-[0_0_18px_rgba(255,90,54,0.18)] md:hidden"
          >
            <span className="absolute inset-y-0 -left-8 w-5 rotate-12 bg-white/10 blur-sm transition-all duration-500 group-hover:left-[110%]" />

            <Menu
              size={24}
              strokeWidth={1.8}
              className="relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
