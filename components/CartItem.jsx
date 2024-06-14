import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productsData);
  //   let [baseQuantity, setBaseQuantity] = useState(1);
  //   console.log(productData);
  return (
    <div className=" w-2/3 pr-10">
      <div className=" w-full">
        <h2 className=" font-titleFonts text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className=" flex items-center justify-between gap-6 mt-6"
          >
            <div className=" flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className=" text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                src={item.image}
                alt="productImg"
                className=" w-32 h-32 object-cover"
              />
            </div>
            <h2 className=" w-52">{item.title}</h2>
            <p className=" w-10">{item.price}</p>
            <div className=" flex gap-4">
              <div className=" w-52 flex justify-between items-center gap-4 text-gray-500 border p-3">
                <p className=" text-sm capitalize">quantity</p>
                <div className=" flex items-center font-semibold gap-4 text-sm">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className=" border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className=" border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className=" w-14">{item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your cart is empty")
        }
        className=" bg-red-500 text-white mt-8 ml-7 py-1 px-5 hover:bg-red-800 duration-300"
      >
        reset cart
      </button>
      <Link to="/">
        <button className=" mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
