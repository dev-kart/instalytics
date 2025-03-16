import React from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import Shape1 from "@/../public/shape1.png";
import Shape2 from "@/../public/shape2.png";
import Shape3 from "@/../public/shape3.png";
import Shape4 from "@/../public/shape4.png";
const Hero = () => {
  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex gap-8 flex-col items-center text-center justify-center w-full mb-2">
        <Image src={Shape1} width={120} height={120} alt="Shape1" />
        <Image src={Shape2} width={120} height={120} alt="Shape2" className="absolute right-0 top-40 hidden lg:block" />
        <Image src={Shape3} width={120} height={120} alt="Shape3" className="absolute left-0 top-[400px] hidden lg:block" />
        <p className="text-white text-lg font-semibold">One-step platform</p>
        <div className="relative">
        <h1 className="text-5xl lg:text-7xl font-bold text-white">
          Everything you need to grow on social
        </h1>
        <Image src={Shape4} width={500} height={400} alt="Shape4" className="m-auto lg:absolute lg:right-0 lg:bottom-[-60px] opacity-80 lg:w-[500px] w-[300px]" />
        </div>
        <p className="text-white text-opacity-80 text-lg lg:mt-20">
          A cutting-edge AI-powered tool designed to skyrocket your social media
          reels! With smart analytics at its core, it delivers powerful insights
          to help you grow faster and smarter than ever.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <FaRegComments
            className="text-white p-2 bg-purple-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-purple-800 cursor-pointer"
            size="38"
          />
          <FaRegHeart
            className="text-white p-2 bg-red-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-red-800 cursor-pointer"
            size="38"
          />
          <IoMdPaperPlane
            className="text-white p-2 bg-blue-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-800 cursor-pointer"
            size="38"
          />
          <IoShareSocialOutline
            className="text-white p-2 bg-orange-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-orange-800 cursor-pointer"
            size="38"
          />
        </div>
        <Link
          href="#"
          className="border-white border-[2px] px-3 py-2 mb-10 text-m text-black bg-white rounded-2xl flex flex-wrap items-center gap-2 font-semibold hover:bg-transparent hover:text-white transition-all duration-300"
        >
          Get Started <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
