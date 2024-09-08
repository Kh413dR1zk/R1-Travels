import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";

const Navbar = () => {
  return (
    <>
      <nav className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.a
          variants={SlideBottom(0)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          ABOUT
        </motion.a>
        <motion.a
          variants={SlideBottom(0.2)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          EXPLORE
        </motion.a>
        <motion.a
          variants={SlideBottom(0.4)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          <img src={Logo} alt="" className="w-14" />
        </motion.a>
        <motion.a
          variants={SlideBottom(0.6)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          JOURNAL
        </motion.a>
        <motion.a
          variants={SlideBottom(0.8)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          SEARCH
        </motion.a>
      </nav>
    </>
  );
};

export default Navbar;
