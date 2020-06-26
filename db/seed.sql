CREATE TYPE "products_status" AS ENUM (
  'out_of_stock',
  'running_low',
  'in_stock'
);

CREATE TYPE "order_status" AS ENUM (
  'pending',
  'fulfilled',
  'shipped'
);

CREATE TYPE "product_type" AS ENUM (
  'performance',
  'engine',
  'suspension',
  'exhaust',
  'interior',
  'exterior',
  'merch'
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar(100),
  "email" varchar(200),
  "password" text,
  "created_at" timestamp DEFAULT now()
);

CREATE TABLE "admins" (
  "id" SERIAL PRIMARY KEY,
  "admin_name" text,
  "admin_id" int
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "image_url" text,
  "price" decimal,
  "status" products_status,
  "merchant_id" int NOT NULL,
  "created_at" timestamp DEFAULT now(),
  "last_edit" timestamp,
  "category" product_type,
  "description" text,
  "notes" text
);

CREATE TABLE "order_items" (
  "order_id" int,
  "product_id" int,
  "quantity" int DEFAULT 1,
  "total_price" decimal
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "total" decimal,
  "created_at" timestamp DEFAULT now(),
  "status" order_status
  "status_changed" timestamp
);

CREATE TABLE "merchants" (
  "id" SERIAL PRIMARY KEY,
  "merchant_name" text
);


ALTER TABLE "admins" ADD FOREIGN KEY ("admin_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("merchant_id") REFERENCES "merchants" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");