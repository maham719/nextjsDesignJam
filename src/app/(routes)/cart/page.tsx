import Breadcrumb from '@/app/components/Breadcrumb'
import Cartitems from '@/app/components/Cartitems'
import React from 'react'

export default function shoppincart() {
  return (
    <div>
      <Breadcrumb pageName="Shopping Cart" />
      <Cartitems/>
    </div>
  )
}
