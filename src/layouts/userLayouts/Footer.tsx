import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

import evnivaLogo from "../../assets/logo/evniva-logo.png";
import footerImage from "../../assets/images/events.jpg";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-evniva-teal/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="EVNIVA Home">
              <img src={evnivaLogo} alt="EVNIVA" className="w-32 sm:w-36" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-evniva-muted">
              Discover memorable experiences, exciting entertainment, and
              moments worth sharing — all in one place.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-evniva-card text-evniva-teal shadow-[0_0_14px_rgba(248,245,237,0.08)] transition-all duration-300 hover:scale-105 hover:text-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.2)]"
              >
                <span className="absolute inset-y-0 -left-8 w-4 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[110%]" />
                <FaFacebook size={17} className="relative z-10" />
              </button>

              <button
                type="button"
                aria-label="Instagram"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-evniva-card text-evniva-teal shadow-[0_0_14px_rgba(248,245,237,0.08)] transition-all duration-300 hover:scale-105 hover:text-[#E4405F] hover:shadow-[0_0_20px_rgba(228,64,95,0.2)]"
              >
                <span className="absolute inset-y-0 -left-8 w-4 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[110%]" />
                <BsInstagram size={17} className="relative z-10" />
              </button>

              <button
                type="button"
                aria-label="Twitter"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-evniva-card text-evniva-teal shadow-[0_0_14px_rgba(248,245,237,0.08)] transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]"
              >
                <span className="absolute inset-y-0 -left-8 w-4 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[110%]" />
                <BsTwitter size={17} className="relative z-10" />
              </button>

              <button
                type="button"
                aria-label="YouTube"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-evniva-card text-evniva-teal shadow-[0_0_14px_rgba(248,245,237,0.08)] transition-all duration-300 hover:scale-105 hover:text-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]"
              >
                <span className="absolute inset-y-0 -left-8 w-4 rotate-12 bg-white/40 blur-sm transition-all duration-500 group-hover:left-[110%]" />
                <BsYoutube size={18} className="relative z-10" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-evniva-cream">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4">
              <Link
                to="/"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Home
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/about"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                About
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/experiences"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Experiences
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/contact"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Contact
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-evniva-cream">
              Categories
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4">
              <Link
                to="/experiences/movies"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Movies
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/experiences/events"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Events
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/experiences/plays"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Plays
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/experiences/activities"
                className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
              >
                Activities
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-evniva-cream">
              Support
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4">
              {[
                "Help Center",
                "FAQs",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="group relative text-sm text-evniva-muted transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
                >
                  {item}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Large EVNIVA Watermark */}
        <div className="pointer-events-none select-none overflow-hidden pt-7 sm:pt-9">
          <h2 className="whitespace-nowrap text-center text-[20vw] font-extrabold leading-[0.8] tracking-[-0.02em] text-evniva-cream/5 sm:text-[18vw] lg:text-[16vw]">
            EVNIVA
          </h2>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-evniva-cream/10 py-7 text-sm text-evniva-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EVNIVA All Rights Reserved</p>

          <div className="flex flex-wrap items-center gap-5">
            {["Privacy Policy", "Terms & Conditions", "Cookies Settings"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="group relative transition-all duration-300 hover:translate-x-1 hover:text-evniva-coral"
                >
                  {item}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-evniva-coral to-evniva-coral-hover shadow-[0_0_6px_rgba(255,90,54,0.4)] transition-all duration-300 group-hover:w-full" />
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
