UPDATE products 
SET name = $1, image_url = $2, price = $3, status = $4, merchant_id = $5, last_edit = $6, category = $7, description = $8, notes = $9
WHERE id = $10;