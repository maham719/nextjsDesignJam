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

// interface Product {
//   products:Products[],
// }
export default function FeaturedCard() {
  //  const data= products
  //  console.log(data.products[0])
   const [products, setProducts] = useState<Products[]>([]);

   useEffect(() => {
     async function fetchData() {
       const data= await client.fetch(`*[_type == "products" && tags.featured == true] `); 
       setProducts(data);
     }
     console.log(products)
 
     fetchData();
   }, []);
  return (

    <div className='w-full'>
      <Swiper breakpoints={{
        340:{
          slidesPerView:2,
          slidesPerGroup: 2,
          spaceBetween:15,
        },
        700:{
          slidesPerView:4,
          spaceBetween:10,
          slidesPerGroup: 4,
        }
      }}
      spaceBetween={0}
      freeMode={true}
      navigation
      grabCursor={true}
      pagination={{
        clickable: true,
        el: ".swiper-pagination", 
        renderBullet: (index, className) => {
        
          if (index < 4) {
            return `<span class="${className} custom-bullet"></span>`;
          }
          return "";
        },
      }}
      modules={[FreeMode,Pagination]}
      className='max-w-full  lg:max-w-[94%] flex gap-2 min-h-[500px] items-center relative mx-auto justify-center bg-transparent ' 
      >
        { products.map((items:Products)=>{
          return (
          <SwiperSlide key={items._id} className='flex '>
<Link href={`/products/ ${items.slug?.current}`} >
            <div className='flex items-center gap-4 mx-auto ml-5'>
            <div className='min-w-[270px] w-[270px] h-[400px]   featured'>
      <div className="w-[270px] h-[270px] overflow-hidden bg-[#F6F7FB]  rounded-xl relative card content-center relativer">
        <span className='absolute left-1 flex top-3 -translate-x-44 top-icons'>  <li className="list-none rounded-full cursor-pointer text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-shopping-cart-line"></i></li>
      <li className="list-none cursor-pointer   rounded-full text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-zoom-in-line"></i></li>
      <li className="list-none  cursor-pointer rounded-full text-[#179BF5] hover:bg-[#EEEFFB] text-center hover:text-[#2F1AC4] leading-8 px-2"><i className="ri-heart-line"></i></li></span>
      <div className='flex items-center justify-center h-[200px] w-full'>
      <img src={urlFor(items.images![0]!.asset!._ref!).url()} alt=""  className='mx-auto w-56 '/>
      </div>
      <ViewDetails slug={items.slug?.current || ''} />
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
            </Link>
          </SwiperSlide>
)})}
      </Swiper>
  
      <div className="swiper-pagination absolute  "></div>
    </div>

  )
}
