SELECT c.customer_id,c.first_name,c.last_name,co.order_date
FROM   CUSTOMER C
LEFT JOIN CUSTOMER_ORDER CO ON C.CUSTOMER_ID = CO.CUSTOMER_ID
where co.order_date = IS NULL;

ORDER BY  customer_id


SELECT * 
FROM customer

SELECT *
FROM CUSTOMER_ORDER


SELECT customer_id,
c.first_name,
c.last_name,
co.order_date
FROM   CUSTOMER c
NATURAL JOIN CUSTOMER_ORDER co  
ORDER BY  customer_id

SELECT c.customer_id,c.first_name,c.last_name,co.order_date
FROM   CUSTOMER C
JOIN CUSTOMER_ORDER CO ON C.CUSTOMER_ID = CO.CUSTOMER_ID




SELECT c.customer_id,c.first_name,c.last_name,co.order_date
FROM   CUSTOMER C , CUSTOMER_ORDER CO 