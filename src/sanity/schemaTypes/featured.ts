import { client } from "../lib/client";

export default async function featuredProducts(){
    const data= await client.fetch(`*[_type == "products" && tags.featured == true] `);
    return data
}