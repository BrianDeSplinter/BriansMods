UPDATE products 
SET name = $1, image_url = $2, price = $3, status = $4, merchant_id = $5, category = $6, description = $7, notes = $8
WHERE id = $9;