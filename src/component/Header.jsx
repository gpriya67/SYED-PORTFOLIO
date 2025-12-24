import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ScrollPercentage from './ScrollPercentage';

const Header = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Skills", path: "skils" },
    { id: 4, name: "Testimonals", path: "testimonals" },
    { id: 5, name: "Project", path: "project" },
    { id: 6, name: "Contact", path: "contact" },
  ];

  return (
   <>
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-10">
      <div
        className="
          relative flex w-full max-w-[1300px]
          px-6 md:px-10 py-4 rounded-full
          backdrop-blur-2xl bg-white/10 border border-white/20
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        "
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

        <div className="relative w-10 h-10 mr-auto z-10">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Desktop Menu - LEFT */}
        <ul className="relative hidden md:flex items-center gap-8 text-white text-[18px] z-10">
          {navItem.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                smooth
                spy
                offset={-90}
                duration={500}
                onSetActive={() => setActive(item.id)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                  active === item.id
                    ? "bg-white/20 border border-white/40"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo - RIGHT */}

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative md:hidden text-white text-2xl z-10 ml-auto"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[92%] max-w-md
          backdrop-blur-2xl bg-white/10 border border-white/20
          rounded-2xl py-6 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:hidden"
        >
          <ul className="flex flex-col gap-4 text-center text-white">
            {navItem.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  smooth
                  offset={-90}
                  duration={500}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                  className={`block py-3 rounded-xl transition-all duration-300 ${
                    active === item.id
                      ? "bg-white/20 border border-white/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

 {/*  <div className="fixed bottom-6 left-0 w-full z-40 ">
        <div className="flex justify-between items-center px-4">
          <ScrollPercentage />
          <a
            href="https://wa.me/918608836033"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/whatapp.svg"
              alt="WhatsApp"
              className="w-14 h-14 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div> */}


   </>
  );
};

export default Header;
