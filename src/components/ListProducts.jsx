import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import { MdSystemUpdateAlt } from "react-icons/md";
import axios from "axios";
import { useSnackbar } from "notistack";
function ListProducts() {
  const [allproducts, setAllproducts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("token");
  const fetchInfo = async () => {
    try {
      const response = await axios.get("http://localhost:4567/products/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Informations des produits :", response.data);
      const formattedProducts = response.data.map((product) => ({
        id: product._id,
        name: product.name,
        ml: product.ml,
        price: product.price,
        image: product.image,
        description: product.description,
        gender: product.gender,
      }));

      console.log("Produits formatés :", formattedProducts);

      setAllproducts(formattedProducts);
    } catch (error) {
      console.error("Erreur lors de la récupération des informations :", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4567/products/${id}/delete-product`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      enqueueSnackbar("Produit supprimé!", { variant: "success" });
    } catch (error) {
      console.error("Erreur lors de la suppression du produit :", error);
      enqueueSnackbar("Erreur lors de la suppression d'un produit.", {
        variant: "error",
      });
    }
    await fetchInfo();
  };

  return (
    <div className="p-2 box-border bg-white mb-0 rounded-sm w-full mt-5 lg:ml-5">
      <h4 className="bold-22 p-5 uppercase">Products List</h4>
      <div className="max-h-[77vh] overflow-auto px-4 text-center">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-primary bold-14 sm:regular-22 text-start py-12">
              <th className="p-2">Products</th>
              <th className="p-2">Nom</th>
              <th className="p-2">Ml</th>
              <th className="p-2">Price</th>
              <th className="p-2">Genre</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((product, i) => (
              <tr
                key={i}
                className="border-b border-slate-900/20 text-gray-20 p-6 medium-14"
              >
                <td className="flexStart sm:flexCenter">
                  <img
                    src={product.image}
                    alt=""
                    height={43}
                    width={43}
                    className="rounded-lg ring-1 ring-slate-900/5 my-1"
                  />
                </td>
                <td>
                  <div className="line-clamp-3">{product.name}</div>
                </td>
                <td>${product.ml}</td>
                <td>${product.price}</td>
                <td>{product.gender}</td>
                <td>
                  <div className="bold-22 pl-6 flex flexCenter sm:pl-14">
                    <Link to={`/edit/${product.id}`}>
                      <MdSystemUpdateAlt />
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="bold-22 pl-6 flex flexCenter sm:pl-14">
                    <TbTrash onClick={() => remove_product(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
