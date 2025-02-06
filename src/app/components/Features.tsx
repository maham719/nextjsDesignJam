import Image from 'next/image';
import React from 'react'
type Heading ={
    title:string;
}
export default function Features({title}:Heading) {
  return (
    <div className='w-full bg-white py-16 flex flex-col gap-16'>
        <h1 className='text-4xl font-bold text-center'>{title}</h1>
    <div className='h-80  w-[90%] mx-auto flex items-center justify-evenly features gap-4'>
        {/* free delivery  */}
      <div className=' flex flex-col items-center gap-5 '>
        <Image src={'/free-delivery.png'} alt={''} width={65} height={65}></Image>
      <h2>Free Delivery</h2>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
      
    {/* cash back  */}
      <div className=' flex flex-col items-center   gap-5 '>
        <Image src={'/cashback.png'} alt={''} width={65} height={65}></Image>
      <h2>100% Cash Back</h2>
      <p  className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>


   {/* quality product  */}

   <div className=' flex flex-col items-center  gap-5'>
    <Image src={'/quality.png'} alt={''} width={65} height={65}></Image>
      <h2>Quality Product</h2>
      <p  className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>

      {/* 24/7 support */}
      <div className=' flex items-center flex-col  gap-5'>
        <Image src={'/support.png'} alt={''} width={65} height={65}></Image>
      <h2>24/7 Support</h2>
      < p  className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
    </div>
    </div>
  )
}
