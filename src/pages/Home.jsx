import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

function Home() {
  const { all_products } = useContext(ShopContext);

  return (
    <>
      <section className="max_padd_container py-12 xl:py-28 p-6 ">
        <div>
          <div></div>
          <div className="my-8 mx-2">
            <h3 className="text-center">
              <h5 className="h3 text-center">Tous les parfums</h5>
              <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
            </h3>
          </div>
          {/* container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {all_products.map((item) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  ml={item.ml}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <button className="btn_dark_rounded">Load more</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
