import logo1 from "../assets/jm.png";
import logo2 from "../assets/jm-black.png";
import React, { useState, useEffect } from "react";

function NAVBAR({ name }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const controlNavbar = () => {
    const currentScroll = window.scrollY;
    setAtTop(currentScroll === 0);

    if (currentScroll > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        atTop
          ? "bg-transparent"
          : "bg-white bg-opacity-80 shadow-lg backdrop-blur"
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <img src={logo1} alt="Logo" className="h-10 w-10 rounded-full" />
        <ul
          className={`flex gap-6  ${
            atTop ? "text-white" : "text-center text-gray-800"
          }`}
        >
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NAVBAR;
