"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "@/app/components/SearchBar"
import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const {  isSignedIn } = useAuth()
  return (

    <>
    {/* top bar  */}
    <div className="w-full bg-[#7E33E0] ">
      <div className="header-top text-white flex justify-between  w-[90%] mx-auto">
      
        <div className="flex items-center  gap-9 ">
          <p className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faEnvelope} /> mhhasanul@gmail.com
          </p>
          <span className="flex items-center gap-3">
            <Image src={"/Vector.png"} alt={""} width={14} height={14}></Image>
             (12345)67890
          </span>
        </div>




        <div className="flex items-center text-sm ">
          <ul className="flex items-center justify-evenly gap-3 ">
            <li className="relative group border-0 bg-[#7E33E0] text-white focus:outline-none  cursor-pointer font-semibold">
              English <FontAwesomeIcon icon={faAngleDown} />
              <ul className="hidden group-hover:block absolute top-full left-0  font-bold bg-[#7e33e0a6] text-white">
                <li className="py-1 px-2 hover:bg-purple-600 cursor-pointer">
                  Spanish
                </li>
                <li className="py-1 px-2 hover:bg-purple-600 cursor-pointer">
                  Indonesian
                </li>
              </ul>
            </li>
            <li className="relative group border-0 bg-[#7E33E0] text-white focus:outline-none  cursor-pointer">
              USD <FontAwesomeIcon icon={faAngleDown} />
              <ul className="hidden group-hover:block absolute top-full left-0 bg-[#7e33e0a6] text-white">
                <li className="py-1 px-2 hover:bg-purple-600 cursor-pointer">
                  PKR
                </li>
                <li className="py-1 px-2 hover:bg-purple-600 cursor-pointer">
                  INR
                </li>
              </ul>
            </li>
         { !isSignedIn &&
          (
            
            <SignInButton mode='modal'>
            <li className="cursor-pointer">
              Login <FontAwesomeIcon icon={faUser} />
            </li>
            </SignInButton>
          )
         }
            
            <li className="cursor-pointer">
              Wishlist <FontAwesomeIcon icon={faHeart} />
            </li>
          
          </ul>
          <Link href={"/cart"}>
        <Image src={"/cart.png"} alt={""} width={24} height={24} className="cursor-pointer ml-4 mr-4"></Image>
          </Link>
          <UserButton afterSwitchSessionUrl="/"/>
        </div>
      </div>
      </div>

      <div className="min-h-20 bg-white w-full flex items-center">
        <div className="min-h-10 w-[90%] m-auto flex justify-between gap-80 ">
          <div className="flex  gap-12 items-center">
            <Image src={"/logo.png"} alt={""} width={105} height={31} className="cursor-pointer"></Image>
            <ul className="flex items-center pt-4 gap-5 leading-5 menu">
              <Link href={"/"}><li>Home</li></Link>
              <li className="parent-item">
                Pages
                <ul className="nested-menu">
                  <li>Blog</li>
                  <li>Browse The shop</li>
                  <li>Category</li>
                  <Link href={"/about"}><li>About Us</li></Link>
                  <Link href={"/contact"}><li>Contact Us</li></Link>
                  <li>Faq</li>
                  <Link href={"not-found.tsx"}><li>404 Not Found</li></Link>
                </ul>
              </li>
              <li>Blog</li>
              <Link href={"/shop"}><li>Shop</li></Link>
              <Link href={"/cart"}>  <li>Cart</li></Link>
            </ul>
          </div>
         <SearchBar/>
        </div>
      </div>
    </>
  );
}
