"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            Hello, I&apos;m{" "}
            </span>
          <br />
            <TypeAnimation
              sequence={[
                "Gagan Verma",
                1000,
                "Data Analyst",
                1000,
                // "Aspiring AI Engineer",
                // 1000,
                "Tableau/Power BI",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Talk to me about Data Analytics, Business Intelligence, Web Scraping, API Automation, and AI/ML.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1vVOrK-f1--pvDHqRwOdP6SGs1TQKs7lQ/view"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-blue-900 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mx-auto">
            <Image
              src= "/images/gagan-bg-final.png"
              alt="hero image"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
