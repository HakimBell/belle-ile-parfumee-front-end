import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4567/products/all", {})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <section className="bg-primary">
      <div className="max_padd_container  px-4 py-12 xl:py-28 xl:w-[100%]">
        <h3 className="h3 text-center">Parfums</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              ml={item.ml}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
