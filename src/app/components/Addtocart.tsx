"use client";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useAuth } from "@clerk/nextjs";
import {Bounce, toast} from 'react-toastify';
type AddToCartProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function Addtocart({ id, name, price, image }: AddToCartProps) {
  const { userId } = useAuth()

  // const [quantity, setQuantity] = useState(1);

  // const incrementQuantity = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  // Function to handle adding to the cart

  async function handleAddToCart() {
    try {
      const _response = await toast.promise(
        fetch("/api/cart", {
          method: "POST",
          body: JSON.stringify({
            user_id: userId, 
            product_id: id,
            product_title: name,
            product_price: price,
            image_url: image,
            product_quantity: 1, 
          }),
          headers: {
            "Content-Type": "application/json"
          }
        
        }),
        {
          pending: "Adding to cart...", 
          success: "Item added to cart successfully!", 
          error: "Failed to add item to cart", 
        },
        {
          position: "bottom-right", 
          autoClose: 3000, 
          theme: "light",
         transition: Bounce,
        }
      );

    
    } catch (error) {
      console.log("Error:", error);
      
    }
  }
  return (
    <div className="flex gap-6 items-center justify-around w-[40%] ml-8 mt-3 mb-3">
    
      {/* Add to Cart button */}
      <button
        className="text-[#151875] text-xl"
        onClick={() => handleAddToCart()}
      >
        Add To Cart
      </button>

      <button className="text-[#151875] text-2xl">
        <i className="ri-heart-3-line"></i>
      </button>
    </div>
  );
}
