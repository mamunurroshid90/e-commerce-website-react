import React from "react";
import { cartImg, logoDark } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productsData);
  // console.log(productData);
  return (
    <div className=" w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFonts sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className=" w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className=" flex items-center gap-8">
          <ul className=" flex items-center gap-8">
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 capitalize">
              home
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 capitalize">
              pages
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 capitalize">
              shop
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 capitalize">
              element
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 capitalize">
              blogs
            </li>
          </ul>
          <Link to="/cart">
            <div className=" relative">
              <img className=" w-6" src={cartImg} alt="cartImg" />
              <span className=" absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <img
            className=" w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1717196214681-0a66168248cf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user-logo"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
