import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    fetchCartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShopContext);
  useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <section className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((e, index) => {
            console.log(cartItems);

            if (e.quantity > 0) {
              console.log(e.product._id);
              return (
                <tr
                  key={e.product._id}
                  className="border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center"
                >
                  <td className="flexCenter">
                    <img
                      src={e.product.image}
                      alt="prdctImg"
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{e.product.name}</div>
                  </td>
                  <td>${e.product.price * e.quantity}</td>

                  <td className="w-16 h-16 bg-white  px-2">
                    <button
                      className="px-1  bg-gray-200 rounded-md"
                      onClick={() => decreaseQuantity(e.product._id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{e.quantity}</span>
                    <button
                      className="px-1  bg-gray-200 rounded-md"
                      onClick={() => increaseQuantity(e.product._id)}
                    >
                      +
                    </button>
                  </td>

                  <td>${e.product.price * e.quantity}</td>
                  <td>
                    <div className="bold-22 pl-14">
                      <TbTrash onClick={() => removeFromCart(e.product._id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {/* cart details */}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10 w-full">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">
                ${getTotalCartAmount()}
              </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Total:</h4>€{getTotalCartAmount()}
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
