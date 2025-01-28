import Image from 'next/image'
import React from 'react'

export default function image() {
  return (
    <div className='w-2/3 mx-auto mt-24'>
      <Image src={'/brands.png'} alt={''} width={1246} height={128}></Image>
    </div>
  )
}
