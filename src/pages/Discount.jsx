import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Discount = () => {
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/discounts");
        console.log("API Response:", response.data); 
        setDiscounts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching discount:", error);
        setLoading(false);
      }
    };

    fetchDiscount();
  }, []);

  // Handle delete discount
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/discounts/${id}`);
      setDiscounts(discounts.filter((discount) => discount.id !== id));
    } catch (error) {
      console.error("Error deleting discount:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">Discount List</h1>
      <div className="my-4 flex justify-end">
        <Link to="/dashboard/discount/create" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add Discount
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">No</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Code Voucher</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Number of Pieces</th>
              <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {discounts.length > 0 ? (
              discounts.map((discount, index) => (
                <tr key={discount.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{discount.code}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{discount.number} %</td>
                  <td className="px-4 py-3 text-center">
                    <button

                      className="text-green-500 hover:text-green-700 mr-3"
                    >
                      <Link to={`/dashboard/discount/edit/${discount.id}`}><FaEdit size={18} /></Link>
                    </button>
                    <button
                      onClick={() => handleDelete(discount.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-center text-sm text-gray-600">
                  No Discounts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Discount;
