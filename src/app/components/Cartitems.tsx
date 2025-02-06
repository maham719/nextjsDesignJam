"use client"
import React, { useEffect, useState } from 'react';
import {  SignInButton, useAuth } from "@clerk/nextjs";
import "remixicon/fonts/remixicon.css";

type SingleProductData = {
  id: number;
  image_url: string;
  product_id: string;
  product_price: number;
  product_quantity: number;
  product_title: string;
  user_id: string;
};

export default function Cartitems() {
  const [cartData, setCartData] = useState<SingleProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const {  isSignedIn ,userId} = useAuth()
  const [state,setState]=useState(false)
  const [quantity,setQuantity]=useState(1)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart?user_id=${userId}`);
        const data = await res.json();
        setCartData(data);

      
      
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId,state]);

  function handleIncrement() {
    setQuantity( quantity +1 );
  }

  function handleDecrement() {
    setQuantity(quantity-1);
  }
  async function deleteProduct(product_title:any){
   const _res = await fetch("/api/cart" ,{
    method: "DELETE",
    body: JSON.stringify({
      user_id:  userId,
      product_title : product_title
    })
   });
   setState(!state);
  }

//  async function updateCart(cartquantity:number, title:any){
//     try {
//       await fetch(".api/cart" ,{
//         method : "PUT",
//         body:JSON.stringify({
//           product_quantity: cartquantity ,
//           user_id: userId  ,
//           product_title: title  ,
//         })
//       })
//     } catch (error) {
//       console.log("error updating cart",error)
//     }
//   }
  
  if (loading) return <p>Loading...</p>;
  return (
  
    <div>
        {isSignedIn  ?
     
      <div className="w-[90%] mx-auto flex gap-20 mt-32 mb-32">
        {/* Table Section */}
        <div className="w-[781px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b-2 border-gray-300 text-[#1D3178]">
                <th className="py-4 text-lg font-bold">Product</th>
                <th className="py-4 text-lg font-bold">Price</th>
                <th className="py-4 text-lg font-bold">Quantity</th>
                <th className="py-4 text-lg font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.map((item:SingleProductData) => {
                return  (<tr className="border-b border-gray-200" key={item.id}>
                <td className="py-4 flex items-center space-x-5">
                 
                 <div className='image relative w-24 h-32 content-center'><button className='text-2xl text-black w-2 h-2 absolute top-0 left-20' onClick={()=>deleteProduct(item.product_title)}><i className="ri-close-circle-fill"></i></button> <img
                    src={item.image_url}
                    className="w-16 h-16 rounded-md"
                  /></div>
                  <div className='w-36'>
                    <p className="font-semibold w-full">{item.product_title}</p>
                    <p className="text-gray-500 text-sm">Color: Brown</p>
                    <p className="text-gray-500 text-sm">Size: XL</p>
                  </div>
                </td>
                <td className="py-4 text-gray-700 font-semibold">${item.product_price}</td>
                <td className="py-4 ">
                <div className="flex items-center justify-between bg-[#E7E7EF] w-24 ">
    <button className="border px-2 text-[#BEBFC2] text-2xl font-semibold bg-[#E7E7EF]"onClick={() => handleDecrement()}
                          disabled={quantity === 1}>-</button>
    <div className="px-3 text-[#BEBFC2]">
        {quantity}
    </div>
    <button className="border px-2 text-[#bebfc2e0] text-2xl font-semibold bg-[#E7E7EF] "  onClick={() => handleIncrement()}>+</button>
  </div>
  
                </td>
                <td className="py-4 font-semibold text-gray-800"> {`$${item.product_price * item.product_quantity}`}</td>
              </tr>
              )}
)}
             
            </tbody>
          </table>
          <div className='flex justify-between'> <button className='bg-[#FB2E86] text-white w-[134px] h-[39px]' >Clear Cart</button></div>
        </div>

        {/* Right Column: Cart Total & Shipping */}
        <div className="flex flex-col gap-10">
          {/* Cart Totals */}
          <div className="w-[371px] h-[350px] p-6 flex flex-col items-center gap-2 rounded-sm">
            <h2 className="text-xl text-[#1D3178] font-bold text-center">Cart Totals</h2>

            <div className='w-full h-[284px] bg-[#F4F4FC] flex flex-col gap-5 px-3 py-5'>

              <span className='text-[#1D3178] flex justify-between  items-center'><p>Subtotals :</p> <p>$219</p></span>
            <hr  className='bg-#E8E6F1 h-[2px] border'/>
            <span className='text-[#1D3178] flex justify-between  items-center' ><p>Totals :</p> <p>$219</p></span>
            <hr className='bg-#E8E6F1 h-[2px] border'/>
            <p className='text-xs text-[#8A91AB]'><i className="ri-checkbox-circle-fill text-[#19D16F]"></i> Shipping & taxes calculated at checkout</p>
            <button className='w-[98%] mx-auto h-[40px] bg-[#19D16F] text-white rounded-sm'>Proceed To Checkout</button>
            </div>
          </div>

      
        </div>
      </div>

      :
      <div className='flex items-center justify-center w-full p-10'>
        <SignInButton mode='modal' >
        <button type="button"
        className="bg-[#FB2E86] py-3 min-w-[140px] shadow-xl  text-white text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">Login To Continue</button>
        </SignInButton>
      </div>
      }
    </div>
  );
}
