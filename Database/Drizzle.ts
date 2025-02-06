import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartdata = pgTable("cartdata", {
  id:serial("id").primaryKey(),
  user_id:varchar("user_id").notNull(),
product_id:varchar("product_id").notNull(),
  product_title: varchar("product_title").notNull(),
  product_price: integer("product_price").notNull(),
  image_url: varchar("image_url").notNull(),
  product_quantity:integer("product_quantity").notNull(),
});

export const db = drizzle(sql);