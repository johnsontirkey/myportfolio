import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-6 z-50 relative">

      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-red-500"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </a> */}
            <a
              href="https://github.com/johnsontirkey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-400"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            {/* <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-indigo-400"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a> */}
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/jdgrath/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-pink-400"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-400"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/johnsontirkey2020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-300"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p> */}
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]"><a href="#about-me" target="_self"></a>Learn about me</span>
            </p> */}
            <a
              href="mailto:johnson.tirkey2020@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <span className="text-[15px] ml-[6px]">johnson.tirkey2020@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Johnson Tirkey 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
