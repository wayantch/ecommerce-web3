import React from "react";

const Cart = () => {
  return (
    <div className="container h-screen mt-24 mb-5">
      <div className="mb-5 w-full bg-gray-50 shadow rounded-lg p-5">
        <div className="">
          <div className="flex justify-around items-center ">
            <h1>Product</h1>
            <h1>name</h1>
            <h1>Price</h1>
            <h1>Description</h1>
          </div>
        </div>
      </div>

      <div className="mb-5 w-full bg-gray-50 shadow rounded-lg p-5">
        <div className="">
          <div className="flex justify-around items-center  ">
            <div className="">
              <img src="https://via.placeholder.com/50" alt="" />
            </div>
            <h1>name</h1>
            <h1>Price</h1>
            <h1>Description</h1>
          </div>
        </div>
      </div>

      <div className=" w-full bg-gray-50 shadow rounded-lg p-5">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Voucher: </h1>
            <span>
              <select
                name="voucher"
                id="voucher"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Discount</option>
                <option value="10">10% Off</option>
                <option value="20">20% Off</option>
                <option value="30">30% Off</option>
              </select>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-semibold">Total: (total) <span className="text-primary">$ 111</span></h1>
            <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
