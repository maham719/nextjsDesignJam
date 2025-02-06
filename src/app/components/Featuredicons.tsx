'use client'
import React from 'react'


type AddToCartProps = {
  id: string;
  name: string|undefined;
  price: number|undefined;
  image: string;
};
export default function Icons({ id, name, price, image}: AddToCartProps) {
  
  async function handleAddToCart() {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: "id",
          product_id: id,
          product_title: name,
          product_price: price,
          image_url: image,
          product_quantity: 1
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div>
       <span className='absolute left-1 flex top-3 -translate-x-44 top-icons'>  <li className="list-none rounded-full cursor-pointer text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-shopping-cart-line" onClick={()=>handleAddToCart()}></i></li>
      <li className="list-none cursor-pointer   rounded-full text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-zoom-in-line"></i></li>
      <li className="list-none  cursor-pointer rounded-full text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-heart-line"></i></li></span>
    </div>
  )
}
