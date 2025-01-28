import React from "react";
import 'remixicon/fonts/remixicon.css';

import Breadcrumb from "../../components/Breadcrumb";
import fetchData from "@/sanity/lib/fetchData";
import { Products } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Brands from "../../components/Brands";
import Link from "next/link";
import Image from "next/image";

export default async function page() {
   const data =await fetchData();

  return (
    <>
      <Breadcrumb pageName={"Shop"} />
      <div className=" shop min-h-[44px] h-[44px] w-3/4  mx-auto flex items-center justify-between my-24">
        <div>
          <h1 className="text-[20px] font-bold text-[#151875]">
            Ecommerce Acceories & Fashion item{" "}
          </h1>
          <p className="text-[#8A8FB9] text-sm">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        <div className="flex gap-5">
          <span className="flex gap-2 ">
            <label> Per Page :</label>
            <input
              type="text"
              className="border border-gray-300 w-[55px] h-[25px]"
            />
          </span>

          <span className="flex items-center gap-2">
            <label> Sort By :</label>
            <select
              name="filter"
              id=""
              className="text-center border border-gray-300 w-[96px] h-[28px] text-sm"
            >
              <option value="Best Match ">Best Match</option>
              <option value="Best Match ">Lowest To Highest </option>
              <option value="Best Match ">Highest To Lowest </option>
            </select>
            <p>View </p> 
            <Image src={"/grid.png"} alt={""} width={12} height={12}></Image>
            <Image src={"/list.png"} alt={""} width={12} height={12}></Image>
            <input type="text" className="border" />
          </span>
        </div>
      </div>

      {/* products  */}
      <div className="h-auto w-4/5 mx-auto  grid lg:grid-cols-4 gap-11 md:grid-cols-2 sm:grid-cols-1">

{data.reverse().map((product:Products)=>{
{/* product card  */}
return (
  <Link href={`/products/${product.slug?.current}`} key={product._id}>
 <div className="min-w-[270px] w-[270px] h-[363px]" key={product._id}>
<div className="w-[250px] h-[280px] overflow-hidden bg-[#F6F7FB]  hover:bg-[#EBF4F3] relative card content-center">
  <span className="absolute left-2 -translate-x-96 top-40 opacity-0 side-icons">
      <li className="list-none rounded-full text-[#151875] hover:bg-white text-center leading-8 px-2"><i className="ri-shopping-cart-line"></i></li>
      <li className="list-none  rounded-full text-[#151875] hover:bg-white text-center leading-8 px-2"><i className="ri-zoom-in-line"></i></li>
      <li className="list-none  rounded-full text-[#151875] hover:bg-white text-center leading-8 px-2"><i className="ri-heart-line"></i></li>
  </span>
  <img
  src={urlFor(product.images![0]!.asset!._ref!).url()}
  alt={product.name || "Product Image"}
  className="mx-auto"
/>
</div>

<div className="flex flex-col gap-2 items-center justify-center mt-4">
  <h2 className="font-[700] text-lg text-[#151875]">
    {product.name?.slice(0,20)}
  </h2>
  <span className="flex  gap-1">
    <li className="rounded-full w-3  list-none h-3 bg-[#DE9034]"></li>
    <li className="rounded-full w-3  list-none h-3 bg-[#EC42A2]"></li>
    <li className="rounded-full w-3  list-none h-3 bg-[#8568FF]"></li>
  </span>

  <span className="flex gap-4">
      <p className="text-[#151875] font-semibold">{`$ ${product.price}`}</p>
      <p className="font-semibold text-[#FB2E86] line-through">{`$ ${product.oldPrice}`}</p>
  </span>
</div>
</div> 
</Link>
)
})}
        
      </div>
      <Brands/>
    </>
  );
}
