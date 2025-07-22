import { Socials } from '@/constants'
import React from 'react'

const NavBar = () => {
  return (
    <div 
        className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
          <div 
          className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'
          >
            <a href="#about-me"
            className='h-auto w-auto flex flex-row items-center'
            >
            <img src='/NavLogo.png'
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:animate-spin" />

              <span className ="font-bold ml-[10px] hidden md:block text-gray-300 hover:scale-110 transition-transform duration-300">
                Johnson Tirkey
              </span>
            </a>


            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
              <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about" className='cursor-pointer hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#A855F7]'>About Me</a>
                <a href="#skills" className='cursor-pointer hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#A855F7]'>Skills</a>
                <a href="#projects" className='cursor-pointer hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#A855F7]'>Projects</a>
              </div>
            </div>

            <div className="flex flex-row gap-5 cursor-pointer">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link} // Ensure this field exists in your Socials array
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          
          </div>
    </div>
  )
}

export default NavBar;
