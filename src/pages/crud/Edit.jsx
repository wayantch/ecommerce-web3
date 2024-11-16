import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../api/Api';

const Edit = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();
  const { id } = useParams(); // Ambil ID dari parameter URL

  // Fetch data produk untuk edit
  const fetchEditProduct = async () => {
    try {
      const response = await Api.get(`/api/products/${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchEditProduct();
  }, []);

  // Fungsi handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    if (image) formData.append('image', image);
    formData.append('_method', 'PUT'); // Gunakan PUT method

    try {
      await Api.post(`/api/products/${id}`, formData);
      navigate('/dashboard/products');
    } catch (error) {
      console.error(error);
      setErrors(error.response?.data?.message || 'Error updating product');
    }
  };

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 p-2 w-full border rounded-md"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-2 p-2 w-full border rounded-md"
              placeholder="Enter product price"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-2 p-2 w-full border rounded-md"
            />
            {image && (
              <p className="text-sm text-gray-500 mt-1">New image selected: {image.name}</p>
            )}
          </div>

          {errors && (
            <div className="text-red-500 text-sm mt-2">
              {errors}
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
