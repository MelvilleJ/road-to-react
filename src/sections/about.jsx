import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import { motion, useMotionValue, useSpring } from "framer-motion";

function ABOUT() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-950  to-blue-950  section-home "
    >
      <div className="raleway-sub content mx-100 my-50 flex flex-col justify-start items-start h-full">
        <h1 className="text-start text-9xl text-green">Me</h1>
        <h1 className="text-start text-3xl mx-34 mt-10 text-white font-bold">
          Professional Problem Solver
        </h1>
        <h1 className="text-start text-2xl mx-34  text-white ">
          Thanks for stopping by :)
        </h1>
        <h1 className="text-start text-2xl mx-34 mt-5 w-200 text-white ">
          Let me introduce myself again. Hi, I’m Joshua Melville and programming
          is what I do. From website and webapp development to batch script
          writing and desktop application development.
        </h1>
        <a
          href="https://www.linkedin.com/in/joshua-melville-521a80247/"
          className="text-start underline text-2xl mx-34 mt-5 w-200 text-white "
        >
          Want to know more?
        </a>
      </div>
    </section>
  );
}

export default ABOUT;
