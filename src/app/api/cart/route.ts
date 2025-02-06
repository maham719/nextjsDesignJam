import { NextRequest, NextResponse } from "next/server";
import { cartdata, db } from "../../../../Database/Drizzle";
import {and, eq} from 'drizzle-orm'

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const res = await db.insert(cartdata).values({
      user_id: req.user_id,
      product_id: req.product_id,
      product_title: req.product_title,
      product_price: req.product_price,
      image_url: req.image_url,
      product_quantity: req.product_quantity,
    })  .onConflictDoUpdate({
        target: [cartdata.user_id, cartdata.product_title], 
        set: {
          product_quantity: req.product_quantity, 
          
        },
      })
    .returning();
    
    
    console.log("data posted to database")
    return NextResponse.json({ message: "Item added to cart successfully", data: res }, { status: 201 });
  } catch (error) {
    console.log("error while posting to database")
    console.log("Error", error);
    return NextResponse.json({ message: "something went wrong" }, { status: 500 });

  }
};

export const GET = async (request:NextRequest)=>{
try {
  const uid =request.nextUrl.searchParams.get("user_id") as string;
 const res = await db.select().from(cartdata).where(eq(cartdata.user_id,uid)) 
 return NextResponse.json(res)
} catch (error) {
  console.log(error)
  return NextResponse.json(error)
}
}

export const DELETE = async (request:NextRequest)=>{
  const req = await request.json()
try {
  const res = await db.delete(cartdata).where(and(eq(cartdata.user_id,req.user_id), eq(cartdata.product_title,req.product_title))).returning();
  return NextResponse.json({message: 'Product Successfuflly Deleted'})
} catch (error) {
  console.log("error deleting product " , error)
  return NextResponse.json({message: "error deleting product"})

}
}

export const PUT = async (request:NextRequest)=>{
  const req = await request.json()
try {
  const res = await db.update(cartdata).set({product_quantity:req.product_quantity}).where(and(eq(cartdata.user_id,req.user_id), eq(cartdata.product_title,req.product_title))).returning();
  return NextResponse.json({message: 'Quantity Successfuflly updated'})
} catch (error) {
  console.log("error updating quantity" , error)
  return NextResponse.json({message: "error updating quantity"})

}
}