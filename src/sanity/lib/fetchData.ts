import { client } from "../lib/client";

export default async function fetchData(){
    const data= await client.fetch(`*[_type == "products"]
         `);
    return data
}