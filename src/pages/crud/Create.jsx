import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Correctly use useNavigate

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setMessage('Product created successfully!');
        navigate('/dashboard/products');  // Correct usage of navigate
      }
    } catch (error) {
      setMessage('Error creating product. Please try again.');
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">Create New Product</h1>
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
            required
            className="mt-2 p-2 w-full border rounded-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Create Product
          </button>
        </div>
      </form>

      {message && <div className="mt-4 text-sm font-semibold text-gray-700">{message}</div>}
    </div>
  );
};

export default Create;