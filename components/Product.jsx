import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setProductDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className=" w-2/5">
          <img
            className=" w-full h-[550px] object-cover"
            src={productDetails.image}
            alt="productImg"
          />
        </div>
        <div className=" w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className=" text-4xl font-semibold">{productDetails.title}</h2>
            <div>
              <p className=" text-2xl font-medium text-gray-900">
                ${productDetails.price}
              </p>
            </div>
          </div>
          <div className=" flex items-center text-base gap-2">
            <div className=" flex items-center gap-1">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <div className=" flex items-center gap-1">
              <p className=" text-sm font-medium">
                {productDetails.rating?.rate}
              </p>
              <p className=" text-xs text-gray-500">
                {`(customer review ${productDetails.rating?.count})`}
              </p>
            </div>
          </div>
          <p className=" text-base text-gray-500 -mt-3">
            {productDetails.description}
          </p>
          <div className=" flex gap-4">
            <div className=" w-52 flex justify-between items-center gap-4 text-gray-500 border p-3">
              <p className=" text-sm capitalize">quantity</p>
              <div className=" flex items-center font-semibold gap-4 text-sm">
                <button className=" border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>{1}</span>
                <button className=" border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button className=" bg-black text-white py-3 px-6 active:bg-gray-800">
              add to cart
            </button>
          </div>
          <p className=" text-base text-gray-500">
            Category:{" "}
            <span className=" font-medium capitalize">
              {productDetails.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
