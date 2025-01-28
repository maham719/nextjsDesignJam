import React from 'react'
import FeaturedCard from './FeaturedCard'
import featuredProducts from '@/sanity/schemaTypes/featured';
const products = await featuredProducts();
export default function Featured() {
  return (
    <div className='w-full min-h-[500px] h-[450px] mx-auto mt-28 relative   '>
      <h1 className='text-4xl font-bold text-center mb-8'>Featured Products </h1>

      <FeaturedCard />
    </div>
  )
}
