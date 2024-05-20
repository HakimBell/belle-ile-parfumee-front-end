import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  console.log(userId);
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
  // Add To Cart
  const addToCart = async (productId) => {
    try {
      await axios.post(
        `http://localhost:4567/products/${productId}/addToCart/${userId}`
      );
      console.log("Le produit a été ajouté au panier avec succès.");
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit au panier :",
        error.message
      );
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4567/products/${userId}/delete-product/${productId}`
      );
      fetchCartItems();
      window.location.reload();
      console.log("Le produit a été supprimé du panier avec succès.");
    } catch (error) {
      console.error(
        "Erreur lors de la suppression du produit du panier :",
        error.message
      );
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4567/products/${userId}/cart`
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération du panier :", error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const getTotalCartAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    return total;
  };

  const contextValue = {
    all_products,
    addToCart,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
