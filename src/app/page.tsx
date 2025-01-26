import Link from "next/link";
import Button from "./components/Button";
import Featured from "./components/Featured";
import FeaturedCard from "./components/FeaturedCard";

export default function Home() {
  return (
    <>
      <div className="min-h-[550px] w-full bg-[#F2F0FF] flex relative mb-8" >
        <div>
          <img src="/image32.png" alt="" />
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
            <img src="/sofabanner.png" alt="" className="w-[28rem]" />
          </div>
        </div>
      
      </div>
      <ul className="absolute container ">
          <li className="diamond"></li>
          <li className="diamond"></li>
          <li className="diamond"></li>
        </ul>
    <Featured/>
    </>
  );
}
