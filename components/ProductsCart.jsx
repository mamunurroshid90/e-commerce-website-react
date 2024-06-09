import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ProductsCart = ({ product }) => {
  // console.log(product);
  return (
    <div className=" group">
      <div className=" w-full h-96 cursor-pointer overflow-hidden">
        <img
          className=" w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className=" w-full border-[1px] px-2 py-4">
        <div className=" flex justify-between items-center">
          <div>
            <h2 className=" font-titleFonts text-base font-bold">
              ${product.title.substring(0, 15)}
            </h2>
          </div>
          <div className=" flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className=" flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className=" line-through text-gray-500">$566</p>
              <p className=" font-semibold">${product.price}</p>
            </div>
            <p className=" absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:-translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart{" "}
              <span>
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
        <div>{product.category}</div>
      </div>
    </div>
  );
};

export default ProductsCart;
