import React, { useState, useEffect } from "react";
import Api from "../../api/Api";
import { useNavigate, useParams } from "react-router-dom";

const EditDisc = () => {
  const [code, setCode] = useState("");
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const { id } = useParams(); // Ambil parameter ID dari URL
  const navigate = useNavigate();

  // Ambil data diskon berdasarkan ID
  const fetchEditDiscount = async () => {
    try {
      const response = await Api.get(`/api/discounts/${id}`);
      setCode(response.data.code);
      setNumber(response.data.number);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  // Panggil fetchData saat komponen dimuat
  useEffect(() => {
    fetchEditDiscount();
  }, [id]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('code', code);
    formData.append('number', number);
    formData.append('_method', 'PUT'); // Gunakan PUT method

    try {
      await Api.post(`/api/discounts/${id}`, formData);
      navigate('/dashboard/discount');
    } catch (error) {
      console.error(error);
      setErrors(error.response?.data?.message || 'Error updating product');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Discount</h2>

      {/* Menampilkan pesan hasil atau kesalahan */}
      {message && <div className="text-center text-red-500 mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Code Voucher */}
        <div>
          <label
            htmlFor="voucherCode"
            className="block text-sm font-semibold text-gray-700"
          >
            Code Voucher
          </label>
          <input
            type="text"
            id="voucherCode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full mt-2"
            placeholder="Enter voucher code"
          />
        </div>

        {/* Discount Price */}
        <div>
          <label
            htmlFor="discountPrice"
            className="block text-sm font-semibold text-gray-700"
          >
            Discount Price (% Off)
          </label>
          <input
            type="number"
            id="discountPrice"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full mt-2"
            placeholder="Enter discount percentage"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Update Discount
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDisc;
