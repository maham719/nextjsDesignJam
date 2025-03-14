"use client"
import { useState,useEffect } from 'react';
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {FreeMode,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'remixicon/fonts/remixicon.css';
import ViewDetails from './ViewDetails';
import { urlFor } from '@/sanity/lib/image';
import { Products } from '../../../sanity.types';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Featuredicons from './Featuredicons';

export default function FeaturedCard() {


  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);





   const [products, setProducts] = useState<Products[]>([]);

   useEffect(() => {
     async function fetchData() {
       const data= await client.fetch(`*[_type == "products" && tags.featured == true] `); 
       setProducts(data);
     }
 
     fetchData();
   }, []);
  if (!isClient) return null; // Avoid SSR rendering issues

  return (
    <div className='w-full min-h-[500px] h-[600px] mx-auto mt-28 relative  featured-card '>
      <h1 className='text-4xl font-bold text-center mb-8'>Featured Products </h1>

  
    
    
      <Swiper breakpoints={{
        340:{
          slidesPerView:2,
          slidesPerGroup: 2,
          spaceBetween:5,
        },
        700:{
          slidesPerView:4,
          spaceBetween:10,
          slidesPerGroup: 4,
        }
      }}
      spaceBetween={10}
      freeMode={true}
      navigation
      grabCursor={true}
      pagination={{
        clickable: true,
        el: ".featured-swiper-pagination", 

      
      }}
      modules={[FreeMode,Pagination]}
      className='max-w-full  lg:max-w-[90%] flex gap-2 min-h-[500px] items-center relative mx-auto justify-center bg-transparent featured-card ' 
      >
        { products.map((items:Products)=>{
          return (
          <SwiperSlide key={items._id} className='flex ' >

            <div className='flex items-center gap-4 mx-auto ml-5 ' key={items._id}>
            <div className='min-w-[270px] w-[270px] h-[400px]   featured'>
      <div className="w-[270px] h-[270px] overflow-hidden bg-[#F6F7FB]  rounded-xl relative card content-center ">
       <Featuredicons id={items._id} name={items.name} price={items.price} image={urlFor(items.images![0]!.asset!._ref!).url()}/>
      <div className='flex items-center justify-center h-[200px] w-full'>
      <img src={urlFor(items.images![0]!.asset!._ref!).url()} alt=""  className='mx-auto w-56 '/>
      </div>
      <Link href={`/products/ ${items.slug?.current}`} >  <ViewDetails key={items._id} /> </Link>
      </div>

      <div className='bottom flex flex-col gap-2 items-center justify-center w-[100%] h-[33%]  py-8'><h2 className="font-[700] text-lg text-[#FB2E86] white text-center">
      {items.name?.slice(0,20)}
  </h2>
  <span className="flex  gap-1">
    <li className="rounded-full w-4  list-none h-1 bg-[#DE9034]"></li>
    <li className="rounded-full w-4  list-none h-1 bg-[#EC42A2]"></li>
    <li className="rounded-full w-4  list-none h-1 bg-[#8568FF]"></li>
  </span>

  <span className="flex flex-col items-center justify-center gap-3 ">
    <p className="text-[#151875] white">Code - Y523201</p>
      <p className="text-[#151875] white  font-semibold text-sm">`${items.price}`</p>
  
  </span>
  </div>
    </div>
            </div>
      
          </SwiperSlide>
)})}
      </Swiper>
      <div className="featured-swiper-pagination swiper-pagination  absolute  "></div>
  
      
      </div>

  )
}
