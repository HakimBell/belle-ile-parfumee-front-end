import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
const Item = ({ id, name, ml, price, image }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link
          to={`/product/${id}`}
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700"
        >
          <FaSearch className="scale-125 hover:rotate-90 transition-all duration-200" />
        </Link>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000 product-image h-96"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex justify-between gap-5">
          <div className="bold-16">{ml}</div>
          <div className="text-[#3963D7] bold-16 ">{price}€</div>
        </div>
        <button
          onClick={() => addToCart(id)}
          className="bg-[#3963D7] text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Item;
