"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
          </motion.div>

          {/* Large-text */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
              project experience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Developer with experience in developing websites, mobile apps and graphic designs.
            Check out my projects and skills.
          </motion.p>

          <motion.button
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.button>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center "
        >
          <img
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>

      {/* === ABOUT ME SECTION === */}
      <section
        id="about"
        className="w-full px-10 md:px-20 py-28 bg-cover text-white flex flex-col md:flex-row items-center justify-center gap-16 "
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg "
        >
          <img
            src="/profile.png" 
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-left"
        >
          <h2 className="text-4xl font-bold mb-4">
            Hi, I&apos;m <span className="text-purple-400">Johnson Tirkey</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Full Stack Developer who blends design and code to build engaging user experiences. With a passion for clean design, efficient code, and user-first thinking and helping bring ideas to life across web and mobile platforms.
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default HeroContent
