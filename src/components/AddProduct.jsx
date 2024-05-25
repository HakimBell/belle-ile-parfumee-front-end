import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { IoMdAdd } from "react-icons/io";
function AddProduct() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ml: "",
    price: "",
    image: "",
    gender: "Masculin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4567/products/add-product",
        formData
      );
      console.log("Réponse du serveur:", response.data);
      enqueueSnackbar("Ajout Produit réussie!", { variant: "success" });
      navigate("/home");
    } catch (error) {
      console.error("Erreur:", error.message);
      enqueueSnackbar("Erreur lors de l'ajout d'un produit.", {
        variant: "error",
      });
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-5 lg:ml-5">
      <h4 className="bold-18 pb-2">Nom:</h4>
      <input
        value={formData.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Type here.."
        className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md mb-3"
      />

      <h4 className="bold-18 pb-2">Description:</h4>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md mb-3"
      />

      <h4 className="bold-18 pb-2">Quantité (ml):</h4>
      <input
        type="text"
        placeholder="ml"
        name="ml"
        value={formData.ml}
        onChange={handleChange}
        className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md mb-3"
      />

      <h4 className="bold-18 pb-2">Prix:</h4>
      <input
        type="number"
        placeholder="Prix"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md mb-3"
      />

      <div className="flex items-center gap-x-4">
        <h4 className="bold-18 pb-2">Genre:</h4>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-400 py-1 px-2 w-full mb-2"
        >
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
          <option value="Mixte">Mixte</option>
        </select>
      </div>

      <h4 className="bold-18 pb-2">Image:</h4>
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md mb-3"
      />

      <button
        onClick={handleSubmit}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1"
      >
        <IoMdAdd />
        Ajouter le Produit
      </button>
    </div>
  );
}

export default AddProduct;
