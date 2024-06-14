import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cartImg from "../assets/cartBanner.webp";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productsData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout");
    }
  };

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);
  return (
    <div>
      <img className=" w-full h-60 object-cover" src={cartImg} alt="" />
      <div className=" max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className=" w-1/3 bg-[#fafafa] py-6 px-4">
          <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className=" text-2xl font-medium">cart totals</h2>
            <p className=" flex items-center gap-4 text-base">
              subTotal{" "}
              <span className=" font-titleFonts font-bold text-lg">
                ${totalAmount}
              </span>
            </p>
            <p className=" flex items-start gap-4 text-base">
              shopping{" "}
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, aliquam?
              </span>
            </p>
          </div>
          <p className=" font-titleFonts font-semibold flex justify-between mt-6">
            total <span className=" text-xl font-bold">${totalAmount}</span>
          </p>
          <button
            onClick={handleCheckout}
            className=" text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
