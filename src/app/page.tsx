
import Brands from "./components/Brands";
import Button from "./components/Button";
import FeaturedCard from "./components/FeaturedCard";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import UniqueFeatures from "./components/UniqueFeatures";

export default function Home() {
  return (
    <>
   <HeroSection/>

    <FeaturedCard/>
  
  <Features title={"What Shopex Offer!"}/>

  <UniqueFeatures/>


<div className="w-full h-[452px] mt-9 news flex flex-col items-center justify-center gap-8">
    <h1 className="text-center text-[#151875] text-4xl w-[40%] font-bold">Get Leatest Update By Subscribe
    0ur Newslater</h1>
    <Button btnName={"Subscribe"}/>
</div>
<Brands/>

  
    </>
  );
}
