import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm";
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext'; 

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useCart(); 

  // Fetch product from API and add simulated fields
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
      const product = res.data;

      // Simulate discount, brand, and model
      const enhancedProduct = {
        ...product,
        discount: Math.floor(Math.random() * 31), // 0% - 30%
        brand: ["Nike", "Adidas", "Apple", "Samsung"][Math.floor(Math.random() * 4)],
        model: "Model " + Math.floor(Math.random() * 1000)
      };

      setSingleProduct(enhancedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  // Calculate Original Price
  const OriginalPrice = SingleProduct
    ? Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))
    : 0;

  return (
    <>
      {SingleProduct ? (
        <div className='px-4 pb-4 md:px-0'>

          <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Product Image */}
            <div className='w-full'>
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className='w-[200px]'
              />
            </div>

            {/* Product Details */}
            <div className='flex flex-col gap-6'>
              <h1 className='md:text-3xl text-xl font-bold text-gray-800'>
                {SingleProduct.title}
              </h1>

              <p className='text-xl text-red-500 font-bold'>
                ${SingleProduct.price}{" "}
                <span className='line-through text-gray-700'>${OriginalPrice}</span>{" "}
                <span className='bg-red-500 text-white px-4 py-2 rounded-full'>
                  {SingleProduct.discount}% discount
                </span>
              </p>

              <p className='text-gray-600'>{SingleProduct.description}</p>

              {/* Quantity Selector */}
              <div className='flex items-center gap-4'>
                <label className='text-sm font-medium text-gray-700'>Quantity:</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>

              {/* Add to Cart Button */}
              <div className='flex gap-4 mt-4'>
                <button
                  onClick={() => addToCart(SingleProduct)}
                  className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md hover:bg-red-600 transition'
                >
                  <IoCartOutline className='w-6 h-6' /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Loading animation
        <div className='flex items-center justify-center h-screen'>
          <video muted autoPlay loop>
            <source src={Loading} type='video/webm' />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
