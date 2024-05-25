import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import axios from "axios";
function ListProducts() {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = async () => {
    try {
      const response = await axios.get("http://localhost:4567/products/all");
      setAllproducts(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des informations :", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await axios.delete(`http://localhost:4567/products/${id}/delete-product`);
    } catch (error) {
      console.error("Erreur lors de la suppression du produit :", error);
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
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
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
                  <div className="bold-22 pl-6 sm:pl-14">
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
