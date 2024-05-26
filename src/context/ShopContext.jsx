import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null);
import { useSnackbar } from "notistack";

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const token = localStorage.getItem("token");
  const { enqueueSnackbar } = useSnackbar();
  console.log(userId);
  useEffect(() => {
    axios
      .get("http://localhost:4567/products/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

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
        `http://localhost:4567/products/${productId}/addToCart/${userId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes de la requête
          },
        }
      );
      console.log("Le produit a été ajouté au panier avec succès.");
      enqueueSnackbar("Le produit a été ajouté au panier avec succès.", {
        variant: "success",
      });
      fetchCartItems();
      getTotalCartItems();
    } catch (error) {
      console.log(userId);
      console.error(
        "Erreur lors de l'ajout du produit au panier :",
        error.message
      );
      enqueueSnackbar("Une erreur est survenue lors de l'ajout au panier.", {
        variant: "error",
      });
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4567/products/${userId}/delete-product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchCartItems();
      // window.location.reload();
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
        `http://localhost:4567/products/${userId}/cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes de la requête
          },
        }
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

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item of cartItems) {
      console.log(`Article: ${item.id}, Quantité: ${item.quantity}`);
      totalItem += item.quantity;
    }
    return totalItem;
  };

  const increaseQuantity = (productId) => {
    console.log("Cart items before increase:", cartItems);

    const updatedCartItems = cartItems.map((item) => {
      console.log(`Checking item with ID ${item.product._id}`);
      if (item.product._id === productId) {
        console.log(`Increasing quantity of item with ID ${productId}`);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    console.log("Updated cart items:", updatedCartItems);
    setCartItems(updatedCartItems);
  };
  const decreaseQuantity = (productId) => {
    console.log("Cart items before increase:", cartItems);

    const updatedCartItems = cartItems.map((item) => {
      console.log(`Checking item with ID ${item.product._id}`);
      if (item.product._id === productId) {
        console.log(`Increasing quantity of item with ID ${productId}`);
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    console.log("Updated cart items:", updatedCartItems);
    setCartItems(updatedCartItems);
  };
  const contextValue = {
    all_products,
    addToCart,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    fetchCartItems,
    getTotalCartItems,
    increaseQuantity,
    decreaseQuantity,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
