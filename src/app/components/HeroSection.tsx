"use client"
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import {Swiper,SwiperSlide} from 'swiper/react'
import {FreeMode,Pagination,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function HeroSection() {
  return (
    <div className='Hero relative'>
        <Swiper    breakpoints={{
                340:{
                  slidesPerView:1,
                  spaceBetween:5,
                  slidesPerGroup:1,

                },
                700:{
                  slidesPerView:1,
                  spaceBetween:5,
                  slidesPerGroup:1,
                }
              }}
              spaceBetween={0}
              freeMode={true}
              navigation
              grabCursor={true}
              autoplay={{
                delay:2000,
                disableOnInteraction:false,
                pauseOnMouseEnter:true
            }}
              pagination={{
                clickable: true,
                // el:  ".hero-swiper-pagination",
              
              }}
              modules={[FreeMode,Pagination,Autoplay]}
              className='max-w-full  lg:max-w-full flex gap-2 min-h-[500px] items-center relative
                bg-transparent  ' >  
           {/* slide 1  */}
           <SwiperSlide>
            <div className="min-h-[550px] w-full bg-[#F2F0FF] flex relative mb-8" >
        <div>
          <Image src={"/image32.png"} alt={""} width={387} height={387}></Image>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-4">
            <p className="text-[#FB2E86] font-bold text-sm">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-bold text-4xl">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-xm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <Link href={"/shop"}>
            <Button btnName={"Shop Now"} />
            </Link>
          </div>

          <div className="w-[706px]">
            <Image src={"/sofabanner.png"} alt={""} width={448} height={706}></Image>
          </div>
        </div>
      
      </div>
</SwiperSlide>


      {/* slide 2  */}
<SwiperSlide>
         <div className="min-h-[550px] w-full flex items-center justify-around  relative mb-8 slide2 ">
          <div className="-mt-52 opacity-20"><Image src={"/watch.png"} alt={""} width={150} height={150} /></div>
      <div className="flex flex-col justify-evenly gap-6 mt-24 ml-14 ">
        <p className="text-2xl text-white">Get Upto 50% Off Today Only</p><h1 className="text-4xl text-white font-bold">Black Square Realme Smart Watch</h1>
    </div>
      <div>
        <Image src={"/realme.png"} alt={""} width={400} height={400}/></div>
    </div>
 
 </SwiperSlide>

 <SwiperSlide>
 {/* slide 3 */}
<div className="min-h-[550px] w-full flex items-center justify-center  relative mb-8 slide3 gap-28 ">
  <div className="w-[40%] flex flex-col justify-evenly gap-6 mt-14- ml-14 "><p className="text-2xl">Elevate Your Space with Timeless Modern Comfort!</p>
  <h1 className="text-4xl font-bold">La Bella Armchair Chair Accent Velvet Shell Scallop </h1>
 
  </div>
  
  <div><Image src={"/shellChair.png"} alt={""} width={500} height={485}/></div>
</div></SwiperSlide>
</Swiper>
    </div>
  )
}
