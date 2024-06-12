import React from "react";
import { useSelector } from "react-redux";
import cartImg from "../assets/cartBanner.webp";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productsData);
  // console.log(productData);
  return (
    <div>
      <img className=" w-full h-60 object-cover" src={cartImg} alt="" />
    </div>
  );
};

export default Cart;
