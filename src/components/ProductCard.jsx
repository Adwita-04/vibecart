import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart, cartItem} = useCart()
  return (
   <div className='border border-gray-100 cursor-pointer 
hover:scale-105 hover:shadow-2xl transition-all p-2 flex flex-col h-full'>

  <img 
    src={product.image}
    className='bg-gray-100 aspect-square object-contain'
    onClick={() => navigate(`/products/${product.id}`)}
  />

  <h1 className='line-clamp-2 p-1 font-semibold'>
    {product.title}
  </h1>

  <p className='my-1 text-lg text-gray-800 font-bold'>
    ${Math.round(product.price)}
  </p>

  <button
    onClick={() => addToCart(product)}
    className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full
    flex gap-2 items-center justify-center font-semibold mt-auto'>
    <IoCartOutline className='w-6 h-6' /> Add to Cart
  </button>
</div>

  )
}

export default ProductCard