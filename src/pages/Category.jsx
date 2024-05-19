import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function Category({ gender }) {
  const { all_products } = useContext(ShopContext);
  return (
    <section className="max_padd_container py-12 xl:py-28 p-6">
      <div>
        <div className="my-8 mx-2">
          <h5 className="text-center">
            <h3 className="h3 text-center">Parfums</h3>
            <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
          </h5>
        </div>
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {all_products.map((item) => {
            if (gender === item.gender) {
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
            }
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
    </section>
  );
}

export default Category;
