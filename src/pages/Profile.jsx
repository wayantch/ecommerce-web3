import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Ambil token dari localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // Jika token tidak ada, arahkan ke halaman login
      window.location.href = '/login';
      return;
    }

    // Ambil data user dari API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token di header Authorization
          },
        });
        setUserData(response.data.user); // Simpan data pengguna di state
        setLoading(false); // Set loading false setelah data berhasil didapatkan
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Name:</label>
            <p className="text-gray-800">{userData.name}</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email:</label>
            <p className="text-gray-800">{userData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
