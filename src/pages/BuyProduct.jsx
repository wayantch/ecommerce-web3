import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../api/Api";

const BuyProduct = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountOptions, setDiscountOptions] = useState([]); 
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) {
    window.location.href = "/login";
  }

  // Harga setelah diskon
  const discountedPrice = Math.max(0, price - (price * discount) / 100);

  // Fetch data diskon
  const fetchDataDiscount = async () => {
    try {
      const response = await Api.get(`/api/discounts`); // Ambil data diskon
      const data = response.data.data; // Asumsikan data diskon dalam bentuk array
      setDiscountOptions(data); // Menyimpan array diskon
    } catch (error) {
      console.error("Error fetching discount:", error);
    }
  };

  useEffect(() => {
    fetchDataDiscount();
  }, []);

  // Fungsi Fetch Data Produk
  const fetchDataProduct = async () => {
    try {
      const response = await Api.get(`/api/products/${id}`); // Ambil data produk berdasarkan ID
      const data = response.data;

      setName(data.name);
      setImage(data.image);
      setPrice(data.price);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [id]);

  // Fungsi untuk Membeli Produk
  const handleBuy = () => {
    alert(`Produk ${name} berhasil dibeli dengan harga: Rp ${discountedPrice.toLocaleString()}`);
  };

  // Handle perubahan diskon
  const handleDiscountChange = (event) => {
    const selectedDiscount = parseInt(event.target.value, 10); // Ambil nilai diskon dari dropdown
    setDiscount(selectedDiscount); // Set diskon yang dipilih
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bagian Kiri: Gambar Produk */}
        <div className="flex justify-center">
          <img
            src={image || "https://via.placeholder.com/400"}
            alt={name}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Bagian Kanan: Detail Produk */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-xl text-gray-600">
            Price: <span className="font-semibold">Rp {price.toLocaleString()}</span>
          </p>

          {/* Input Diskon */}
          <div>
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700">
              Use Voucher
            </label>
            <select
              id="discount"
              onChange={handleDiscountChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-1/2 mt-2"
            >
              <option value={0}>No Discount</option>
              {discountOptions.map((discountOption) => (
                <option key={discountOption.id} value={discountOption.discount}>
                  {discountOption.code} - {discountOption.number}% Off
                </option>
              ))}
            </select>
          </div>

          {/* Harga Setelah Diskon */}
          <p className="text-xl text-gray-600">
            Price After Discount:{" "}
            <span className="font-semibold text-blue-500">
              Rp {discountedPrice.toLocaleString()}
            </span>
          </p>

          {/* Tombol Beli */}
          <button
            onClick={handleBuy}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            But Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;