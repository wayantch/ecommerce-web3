import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Api from "../api/Api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await Api.get("/api/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle delete product
  const handleDelete = async (id) => {
    try {
      await Api.delete(`/api/products/${id}`);
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">Product List</h1>
      <div className="my-4 flex justify-end">
        <Link to="/dashboard/products/create" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add Product
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {loading ? (
          <p className="text-center py-4">Loading products...</p>
        ) : (
          <table className="min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{product.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Rp {product.price}</td>
                    <td className="px-4 py-3 text-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          window.location.href = `/dashboard/products/edit/${product.id}`;
                        }}
                        className="text-green-500 hover:text-green-700 mr-3"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                      onClick={() => {
                        if (
                          window.confirm("Apakah Anda yakin ingin menghapus?")
                        ) {
                          handleDelete(product.id);
                        }
                      }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-3 text-center text-sm text-gray-600">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Products;
