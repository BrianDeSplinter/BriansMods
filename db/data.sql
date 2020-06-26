-- ----------Products----------
INSERT INTO products (name, image_url, price, status, merchant_id, category, description, notes) VALUES ('JB4', 'https://cdn.shopify.com/s/files/1/0890/2048/products/JB4_N54_performance_tuner_chip_burger_tuning_motorsports_135_335_E90_E92_540x.jpg?v=1576667709', 479.00, 'in_stock', 1, 'performance', 'Piggyback tune', 'notes, notes, notes');

INSERT INTO products (name, image_url, price, status, merchant_id, category, description, notes) VALUES ('Dual Cone Intake', 'https://cdn.shopify.com/s/files/1/0890/2048/products/BMW_Dual_Cone_135_335_Intake_grande_f67c4e1b-ea0e-4b21-8108-ae54eb62baec_540x.jpg?v=1576666363', 95.00, 'in_stock', 1, 'engine', 'dual cone airfilters to replace stock air filter', 'notes, notes, notes');

INSERT INTO products (name, image_url, price, status, merchant_id, category, description, notes) VALUES ('Orion V4 LED Angel Eyes', 'https://www.umnitza.com/media/catalog/product/cache/1/thumbnail/85x/bfcb55b8c67a222dedb1e590006ca5e6/o/v/ov4e92_04.jpg', 349.99, 'in_stock', 5, 'exterior', 'Brightest Angel Eyes Ever Produced', 'notes, notes, notes');

-- ----------Merchant Id's----------
INSERT INTO merchants (merchant_name) VALUES ('Burger Motorsports');
INSERT INTO merchants (merchant_name) VALUES ('Turner Motorsport');
INSERT INTO merchants (merchant_name) VALUES ('FCP Euro');
INSERT INTO merchants (merchant_name) VALUES ('iND');
INSERT INTO merchants (merchant_name) VALUES ('Umnitza');
INSERT INTO merchants (merchant_name) VALUES ('Mod Bargains');
INSERT INTO merchants (merchant_name) VALUES ('BC Racing');

-- ----------Joins----------
SELECT products.name, merchants.merchant_name
FROM products JOIN merchants ON products.merchant_id = merchants.id;

SELECT oi.product_id, p.name, o.id, o.total, o.created_at
FROM order_items oi JOIN orders o ON oi.order_id = o.id
join products p on oi.product_id = p.id;
