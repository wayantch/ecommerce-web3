import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../api/Api";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const BuyProduct = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountOptions, setDiscountOptions] = useState([]);
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) {
    window.location.href = "/login";
  }

  // Harga setelah diskon
  const discountedPrice = Math.max(
    0,
    parseFloat(price) - (parseFloat(price) * parseFloat(discount)) / 100
  );

  // Fetch data diskon
  const fetchDataDiscount = async () => {
    try {
      const response = await Api.get(`/api/discounts`); // Ambil data diskon
      const data = response.data.data; // Asumsikan data diskon dalam bentuk array
      console.log(data);
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
      setDescription(data.description);
      setImage(data.image);
      setPrice(parseFloat(data.price)); // Konversi harga menjadi angka
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [id]);

  // Fungsi untuk Membeli Produk
  const handleBuy = () => {
    alert(
      `Produk ${name} berhasil dibeli dengan harga: Rp ${discountedPrice.toLocaleString()}`
    );
  };

  const handleDiscountChange = (event) => {
    const selectedDiscount = parseFloat(event.target.value); // Ambil nilai diskon (number)
    setDiscount(selectedDiscount); // Set diskon yang dipilih
  };

  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bagian Kiri: Gambar Produk */}
        <div className="relative">
          <img
            src={image || "https://via.placeholder.com/400"}
            alt={name}
            className="rounded-lg shadow-lg"
          />
          <Link to="/">
            <FaArrowLeft
              className="absolute top-4 left-4 text-gray-600"
              size={24}
            />
          </Link>
        </div>

        {/* Bagian Kanan: Detail Produk */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-xl text-gray-600">
            Price:{" "}
            <span className="font-semibold">Rp {price.toLocaleString()}</span>
          </p>
          <p className="text-xl text-gray-600">
            <span className="">{description}</span>
          </p>

          {/* Input Diskon */}
          <div>
            <label
              htmlFor="discount"
              className="block text-sm font-semibold text-gray-700">
              Use Voucher
            </label>
            <select
              id="discount"
              onChange={handleDiscountChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-1/2 mt-2">
              <option value={0}>No Discount</option>
              {discountOptions.map((discountOption) => (
                <option key={discountOption.id} value={discountOption.number}>
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
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
