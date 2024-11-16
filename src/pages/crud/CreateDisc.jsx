import React, { useState } from "react";
import Api from "../../api/Api";
import { useNavigate } from "react-router-dom";

const CreateDisc = () => {
  const [code, setCode] = useState("");
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form sebelum mengirim data
    if (!code || number <= 0) {
      setMessage("Please provide valid voucher code and discount percentage.");
      return;
    }

    const formData = new FormData();
    formData.append("code", code);
    formData.append("number", number);

    try {
      // Menggunakan POST untuk mengirim data diskon
      const response = await Api.post(
        "/api/discounts", // Pastikan ini adalah endpoint yang benar untuk membuat diskon
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Memastikan tipe konten multipart/form-data
          },
        }
      );

      if (response.status === 201) {
        setMessage("Discount created successfully!");
        navigate("/dashboard/discount"); // Arahkan pengguna ke halaman dashboard diskon
      }
    } catch (error) {
      setMessage("Error creating discount. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Create Discount
      </h2>

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
            Create Discount
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDisc;
