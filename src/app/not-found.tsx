import React from 'react'
import Breadcrumb from './components/Breadcrumb'
import Button from './components/Button'
import Link from 'next/link'
import Brands from './components/Brands'
export default function notfound() {
  return (
    <div>
      <Breadcrumb pageName={'404 Not Found'} />
      <div className='min-h-[677px] h-[677px] mx-auto w-2/3 flex flex-col items-center gap-9'>
        <img src="/404.png" alt="" />
        <span className='flex font-bold text-[#152970] text-2xl'> oops! <h1 className='ml-1'>  The page you requested was not found!</h1></span>
        <Link href={"/"}><Button btnName={'Back To Home'}/></Link>
      </div>
      <Brands/>
    </div>
  )
}
