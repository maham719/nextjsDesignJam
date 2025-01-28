import React from 'react'
import 'remixicon/fonts/remixicon.css';

export default function Addtocart() {
  return (
    <div className="flex gap-6 items-center justify-around w-[40%] ml-8 mt-3 mb-3">
      <button className="text-[#151875] text-xl">Add To Cart</button>
    <button  className="text-[#151875]  text-2xl"><i className="ri-heart-3-line"></i></button>
    </div>
  )
}
