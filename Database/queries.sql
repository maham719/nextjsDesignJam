CREATE TABLE IF NOT EXISTS cartData (
    id SERIAL,
    user_id varchar(255) NOT NULL,
    product_id varchar(255) NOT NULL,
   product_title varchar(255) NOT NULL,
   product_price int NOT NULL ,
   image_url text NOT NULL,
   product_color varchar(255)  NOT NULL
)

ALTER TABLE data 
ADD CONSTRAINT UNIQUENESS UNIQUE (
    product_id
);
ALTER TABLE cartdata
  ADD CONSTRAINT unique_user_product UNIQUE(user_id, product_title);
