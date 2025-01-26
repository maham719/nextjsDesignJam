import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Button from '../../components/Button'

export default function Contact() {
  return (
    <div>
      <Breadcrumb pageName={'Contact Us'}/>

     
      <div className='w-3/4 h-[300px] min-h-[300px] flex gap-8 mx-auto my-20'>
 {/* first col main  */}
      <div className='w-3/6 h-full flex flex-col gap-4 px-2'>
      <h2  className='text-4xl font-bold text-[#151875]'>Information About us</h2>
      <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
      <img src="/contact1.png" alt=""  className='w-20'/></div>

 {/* second col main  */}
      <div className='w-3/6 h-ful  flex flex-col gap-4 px-3 '>
      <h2 className='text-4xl font-bold text-[#151875]'>Contact Way</h2>

       <div className='h-[155px] text-sm grid grid-cols-2 gap-6 text-[#8A8FB9] '>
      {/* first col  */}
      <div className='flex gap-3'>
        <div className='w-10 h-10 bg-[#5726DF] rounded-full'></div>
        <span className='flex flex-col'>
        <p>Tel: 877-67-88-99</p>
        <p>E-Mail: shop@store.com</p>
        </span>
      </div>

    {/* second col  */}
    <div  className='flex gap-3'>
        <div className='w-10 h-10 bg-[#FB2E86] rounded-full'></div>
  <span  className='flex flex-col'>
  <p>Support Forum</p>
  <p>For over 24hr</p>
  </span>
        
      </div>

      {/* third col  */}
      <div className='flex gap-3'>
        <div className='w-10 h-10 bg-[#FFB265] rounded-full'></div>
        
        <span  className='flex flex-col'>
        <p>20 Margaret st, London</p>
        <p>on all orders.</p>
        </span>
      </div>

{/* fourth col  */}

<div  className='flex gap-3'>
        <div className='w-10 h-10 bg-[#1BE982] rounded-full'></div>
        <span className='flex flex-col'>
        <p>Free standard shipping</p>
        <p>Great britain, 3NM98-LK</p>
        </span>
        
      </div>
      </div>
      </div>
      </div>




      <div className='w-[70%]  min-h-[650px] h-[600px] mx-auto flex'>
      
     <div className='w-[45%] h-[400px]'>

        <div className='py-5 '>
            <h2 className='text-4xl font-bold text-[#151875]'>Get In Touch</h2>
            <p className='text-[#8A8FB9] text-sm w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        </div>

        <form action="" className='flex flex-col gap-6 w-full getinTouch'>
       <div className='w-full flex gap-4'>
        <input type="text" name="" id=""  placeholder='Your Name*'/>
        <input type="email" name="" id="" placeholder='Your E-mail' />
       </div>
  <input type="text" name="" id="" placeholder='Subject*'/>
  <textarea name="" id="" placeholder='Type Your Message* ' cols={4}  className='min-h-[166px] h-[166px] border border-[#A4B6C8B2] text-[#8A8FB9] text-[13px] rounded-s focus:outline outline-1 outline-[#101592] pt-4 pl-2'></textarea>
 
  <Button btnName={'Send Mail'}/>
        </form>
     </div>

     <div className='w-[55%] h-[692px]'>
<img src="/contact2.png" alt="" />
     </div>

      </div>


    </div>
  )
}
