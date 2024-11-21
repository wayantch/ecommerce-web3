import React, { useEffect, useState } from "react";

// Category images
import Headphone from "../assets/hero/headphone.png";
import Earphone from "../assets/category/earphone.png";
import Gaming from "../assets/category/gaming.png";
import Macbook from "../assets/category/macbook.png";
import Speaker from "../assets/category/speaker.png";
import VR from "../assets/category/vr.png";
import Watch from "../assets/category/watch.png";
import { Link } from "react-router-dom";

import Api from "../api/Api";
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

const Homepage = () => {
  const isLoggedIn = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [readMore, setReadMore] = useState(false);

  const addToCartButton = (product) => {
    addToCart(product);
    // console.log(product);
  };

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const fetchProducts = async () => {
    try {
      const response = await Api.get("/api/products");
      setProducts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-24">
        {/* Hero Section */}
        <div className="w-full h-[80vh] bg-gray-300 rounded-3xl relative flex flex-col justify-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <p className="text-2xl font-semibold text-gray-700">Wireless</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              Beats Sound
            </h1>
            <h1 className="text-6xl md:text-[8rem] lg:text-[14rem] font-bold text-gray-900 opacity-40 leading-none">
              Headphone
            </h1>
            <button className="bg-black text-white py-3 px-6 rounded-lg mt-4 hover:bg-gray-800 transition duration-300">
              Buy Now
            </button>
          </div>
          <div className="absolute -right-40 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={Headphone} alt="Headphone" />
          </div>
        </div>

        {/* Category Section */}
        <div className="grid grid-cols-4 grid-rows-2 gap-10 my-5">
          <div className="w-full h-80 bg-brandYellow rounded-3xl shadow-lg relative flex items-center">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Enjoy</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70 ">
                Earphone
              </h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img
                src={Earphone}
                alt="Earphone"
                className="absolute bottom-0 right-0 "
              />
            </div>
          </div>

          <div className="w-full h-80 bg-brandBlue rounded-3xl shadow-lg flex items-center relative">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Enjoy</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70">
                SmartWatch
              </h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img
                src={Watch}
                alt="Smartwatch"
                className="absolute bottom-0 -right-20"
              />
            </div>
          </div>

          <div className="col-span-2 w-full h-80 bg-brandGreen rounded-3xl shadow-lg flex items-center relative">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Power</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70">
                Gaming
              </h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img
                src={Gaming}
                alt="Gaming"
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>

          <div className="col-span-2 row-start-2 w-full h-80 bg-primary rounded-3xl shadow-lg flex items-center relative">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Play</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70">
                Macbook
              </h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img
                src={Macbook}
                alt="Macbook"
                className="absolute bottom-0 right-0"
                width={300}
              />
            </div>
          </div>

          <div className="col-start-3 row-start-2 w-full h-80 bg-black opacity-85 rounded-3xl shadow-lg flex items-center relative">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Sound</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70">
                Speaker
              </h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img
                src={Speaker}
                alt="Speaker"
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>

          <div className="col-start-4 row-start-2 w-full h-80 bg-gray-700 rounded-3xl shadow-lg flex items-center relative">
            <div className="p-5">
              <p className="text-lg font-semibold text-gray-700">Experience</p>
              <p className="text-2xl font-semibold text-white">With</p>
              <h1 className="text-5xl font-bold text-white opacity-70">VR</h1>
              <div className="mt-5">
                <a
                  href=""
                  className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                  More
                </a>
              </div>
              <img src={VR} alt="VR" className="absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container">
        <div className="mt-10 mb-5">
          <h1 className="text-3xl font-bold">Populer Product</h1>
        </div>
        <div className="h-[50vh] w-full bg-brandBlue rounded-3xl flex flex-col justify-center relative">
          <div className="p-5 flex items-center justify-between text-white ">
            <div className="">
              <p>20% Off</p>
              <h1 className="text-7xl font-bold uppercase">fine smile</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="">
              <p>Air solo bass</p>
              <h1 className="text-6xl font-bold uppercase">winter sale</h1>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="mt-4">
                {!isLoggedIn && (
                  <Link
                    to="/login"
                    className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                    Buy Now
                  </Link>
                )}
                {isLoggedIn && (
                  <Link
                    to=""
                    className="text-white hover:text-gray-200 px-4 py-2 bg-primary rounded-lg">
                    Buy Now
                  </Link>
                )}
              </div>
            </div>
            <img src={Headphone} alt="" className="absolute top-1/5 left-1/3" />
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <h1 className="text-4xl font-bold text-center">Our Product</h1>
        <p className="text-center">Explore our product</p>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-3xl shadow-lg relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-54 object-cover rounded-lg "
              />
              <h2 className="text-xl font-semibold mt-4 capitalize">{product.name}</h2>
              <p className="text-lg text-gray-700 my-2">$ {product.price}</p>
              <p >
                {readMore ? product.description : product.description.slice(0, 100)}
                {product.description.length > 100 && !readMore && '...'}
                <button onClick={toggleReadMore} className=" text-gray-700 my-2">
                  {readMore ? 'Read Less' : 'Read More'}
                </button>
              </p>
              {!isLoggedIn && (
                <button className="flex gap-2 rounded-lg bg-primary p-2 text-white hover:text-black transition duration-300">
                  <Link to="/login">Buy Now</Link>
                </button>
              )}
              <div className="flex gap-2">
                {isLoggedIn && (
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-white ">
                    <button
                      className="flex items-center justify-center gap-2"
                      onClick={addToCart} // Increment the cart count when clicked
                    >
                      Add Cart <FaCartPlus />
                    </button>
                  </button>
                )}
                {isLoggedIn && (
                  <button className="flex gap-2 rounded-lg bg-primary px-4 py-2 text-white ">
                    <Link to={`/product_detail/${product.id}`}>Buy Now</Link>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
