"use client";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faSquareInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
export default function Footer() {
  return (
    <div className='bg-[#EEEFFB] font-sans footer mt-20 '>
     <footer className='min-h-[479px] flex items-center gap-8 mx-auto w-4/5 font-sans'>
        {/* first col of footer  */}
        <div className='flex flex-col   gap-6 px-9 w-[377px] first'>
          <Image src={'/logo.png'} alt={''} width={112} height={32}></Image>
            {/* search bar   */}
        <div className="flex overflow-hidden max-w-md mx-auto font-[sans-serif] w-full">
        <input type="email" placeholder="Enter Email Address"
          className="w-full outline-none bg-[#F6F6FD] text-gray-600 text-sm px-4 py-3" />
        <button type='button' className="flex items-center justify-center  bg-[#FB2E86] px-5 text-sm text-white w-40  tracking-wide">
          Sign Up
        </button>
      </div><span>
      <p>Contact Info</p>
      <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </span>
      </div>

      {/* second col of footer  */}
        <div  className='flex flex-col justify-between  h-60  '>
          <h2>Catagories</h2>
          <ul  className='flex flex-col justify-evenly gap-4 '>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        
         {/* third col of footer  */}
        <div   className='flex flex-col justify-between  h-60'>
        <h2>Customer Care</h2>
          <ul  className='flex flex-col justify-evenly gap-4'>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* fourth col of footer  */}
        <div  className='flex flex-col justify-between h-60 ' >
        <h2>Pages</h2>
          <ul  className='flex flex-col justify-evenly gap-4'>
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
    </footer>
    <div className='min-h-[53px] bg-[#E7E4F8] flex items-center'>
<div className='w-[75%] mx-auto flex  items-center justify-between'>
       <p>©Webecy - All Rights Reserved</p>
       <ul className='text-white social-icons flex items-center gap-4'>
        <li><FontAwesomeIcon icon={faFacebookF} /></li>
        <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
        <li><FontAwesomeIcon icon={faTwitter} /></li>
       </ul>
       </div>
    </div>
    </div>
  )
}
