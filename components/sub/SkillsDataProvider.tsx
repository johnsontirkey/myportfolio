"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


interface Props{
    src: string;
    width: number;
    height: number;
    index: number;
    label: string;
}

const SkillsDataProvider = ({src, width, height, index, label} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
    <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView? "visible" : "hidden"}
        custom={index}
        transition={{delay:index * animationDelay}}
        className="relative group w-fit"
        >

            <img
            src={src}
            width={width}
            height={height}
            alt={`${label} icon`}
            className="cursor-pointer"
            />


    {/* Tooltip */}
    <div className="absolute bottom-[-1.8rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
        {label}
    </div>

    </motion.div>
  )
}

export default SkillsDataProvider
