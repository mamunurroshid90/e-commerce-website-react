import React from "react";
import { logoLight, paymentLogo } from "../assets";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black text-[#949494] py-20 font-titleFonts">
      <div className=" max-w-screen-xl mx-auto">
        <div className=" flex flex-col gap-7">
          <img className=" w-32" src={logoLight} alt="logoLight" />
          <p className=" text-white text-sm tracking-wide">© ReactBD.com</p>
          <img className=" w-56" src={paymentLogo} alt="paymentLogo" />
          <div className=" flex gap-5 text-lg text-gray-400">
            <FaGithub className=" hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className=" hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className=" hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className=" hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className=" hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
