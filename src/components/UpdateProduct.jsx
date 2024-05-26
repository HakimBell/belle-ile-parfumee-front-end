import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import de useParams pour récupérer les paramètres d'URL
import { useSnackbar } from "notistack";
import updateParfum from "../assets/update-parfum.jpg";

function UpdateProduct() {
  const { productId } = useParams();
  const token = localStorage.getItem("token");
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    ml: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Utilisation du hook useSnackbar

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4567/products/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProductData(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données du produit :",
          error
        );
      }
    };

    fetchProductData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4567/products/${productId}/update-product`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      enqueueSnackbar("Produit modifié avec succés!", { variant: "success" });
      navigate("/home");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la mise à jour du produit :",
        error
      );
    }
  };

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${updateParfum})` }}
          >
            <h1 className="text-3xl mb-3 text-white">Bienvenue</h1>
            <p className="text-white">
              Les parfums sont les sentiments des fleurs.
            </p>
          </div>
          <div className=" w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Modifier une fiche produit</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="ml"
                name="ml"
                value={productData.ml}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="number"
                placeholder="Prix"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Image"
                name="image"
                value={productData.image}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />

              <button
                type="submit"
                className="w-full bg-black py-3 text-center text-white"
              >
                Modifier la fiche produit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
