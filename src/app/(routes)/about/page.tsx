
import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Button from '../../components/Button'
import Features from '../../components/Features'
import Testimonies from '../../components/Testimonies'
import Image from 'next/image'
export default function About() {
  return (
    <div className='mb-16'>
      <Breadcrumb pageName={'About Us'}/>
      <div className='w-9/12 bg-transparent h-[500px] mx-auto flex items-center justify-evenly gap-7'>
        <div className='w-2/5-'>
        <Image src={'/aboutus.png'} alt={''} width={570} height={570}></Image>
        </div>
        <div className='w-1/2 flex flex-col gap-6'>
            <h1 className='text-3xl text-[#151875] font-bold'>Know About Our Ecomerce
            Business, History</h1>
            <p className='text-[#8A8FB9] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <Button btnName={'Contact us'}/>
        </div>
      </div>
      <Features title={'Our Features'}/>
      <Testimonies/>
      <br />
    </div>
  )
}
