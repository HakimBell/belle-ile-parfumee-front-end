import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4567/products/all", {})
      .then((response) => {
        const products = response.data.map((product) => ({
          id: product._id,
          name: product.name,
          ml: product.ml,
          price: product.price,
          image: product.image,
          description: product.description,
          gender: product.gender,
        }));

        setAll_products(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const contextValue = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
