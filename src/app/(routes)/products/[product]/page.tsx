import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Addtocart from "@/app/components/Addtocart";
import fetchData from "@/sanity/lib/fetchData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Products } from "../../../../../sanity.types";
type Tags = {
  [key: string]: boolean | Tags;
};


export default async function page({ params }: { params: { product: string } }) {
  const data = await fetchData();
  const decodedSlug = await decodeURIComponent(params.product).trim().toLowerCase();
  const filterData = data.filter((item: Products) => item?.slug?.current === decodedSlug);
  

  if (filterData.length === 0) {
    return <div>Product not found</div>;
  }

  const getTrueTags = (tags: Tags, prefix = ""): string[] => {
    const trueTags: string[] = [];
    Object.keys(tags).forEach((key) => {
      const value = tags[key];
      if (typeof value === "object" && value !== null) {
        trueTags.push(...getTrueTags(value, `${prefix}${key}.`));
      } else if (value === true) {
        trueTags.push(`${prefix}${key}`);
      }
    });
    return trueTags;
  };

  const product = filterData[0];
  const trueTags = product.tags ? getTrueTags(product.tags) : [];

  return (
    <div>
      <Breadcrumb pageName={"Product Details"} />
      {/* Main div */}
      <div className="product-details min-w-[1170px] w-[90%] min-h-[550px] h-[509px] mt-16 mb-16 mx-auto flex items-center gap-4 px-3">
        {/* Images div */}
        <div className="h-[487px] flex gap-2 items-center">
      
          <div className="w-[151px] h-[95%]  flex flex-col gap-2 overflow-hidden">
          {product.images.map((item: any) => (
            <div className="w-full h-[33%] " key={product._name}> 
<Image src={urlFor(item.asset?._ref).url()} alt="" width={151} height={470}></Image>
</div>
        ))}
          </div>
          <div className="w-[375px] h-[95%]  flex items-center content-center  justify-center" key={product.id}>
            <Image src={urlFor(product.images![0]!.asset!._ref!).url()} width={250} height={300} alt={""}></Image>
          </div>
        </div>

        {/* Content div */}
        <div className="min-w[610px] w-[610px] h-[80%] px-4 py-2 flex flex-col gap-2">
          <h1 className="text-[#0D134E] text-3xl">{product.name}</h1>
          <p className="flex items-center gap-2">
            <span className="text-[#FFC416] flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            (22)
          </p>

          <span className="flex items-center gap-4">
            <p className="text-[#151875]">${product.price}</p>
            <p className="text-[#FB2E86] line-through">${product.oldPrice}</p>
          </span>
          <span className="text-[#151875]">Color</span>
          <p className="text-[#A9ACC6] text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            expedita suscipit iusto impedit quae debitis. Eos, eveniet debitis.
            Natus hic ab consequuntur laboriosam dolores optio quaerat dolor,
            quos corporis omnis.
          </p>
          <Addtocart />

          <span className="text-[#151875] flex flex-col gap-5">
            <span className="flex gap-2">
              <h2>Categories :</h2>
              <p> </p>
            </span>
            <span className="flex gap-2">
              <h3>Tags :</h3>
              {trueTags.length > 0 ? (
                <p>{trueTags.join(", ")}</p>
              ) : (
                <p>No tags available</p>
              )}
            </span>
            <span className="flex items-center gap-4">
              <h3>Share :</h3>
              <p className="text-white space-x-2">
                <i className="ri-facebook-fill bg-[#151875] rounded-full p-1 text-xl cursor-pointer"></i>
                <i className="ri-instagram-line bg-[#FB2E86] rounded-full p-1 text-xl cursor-pointer"></i>
                <i className="ri-twitter-fill bg-[#151875] rounded-full p-1 text-xl cursor-pointer"></i>
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
