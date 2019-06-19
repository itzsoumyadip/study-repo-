select  distinct 'E',first_name , last_name
from employee 
UNION
select distinct 'C' ,first_name,last_name
from customer
ORDER BY 2

select first_name , last_name
from employee 
UNION
select first_name,last_name
from customer
ORDER BY 1

/*     to check similar names in both colum have to use intersection

select first_name,last_name
from customer
UNION 
select first_name,last_name
from employee
where employee.first_name = customer.first_name
*/

select first_name,last_name
from employee
INTERSECT
select first_name,last_name
from customer




/* MINUS */

select first_name,last_name
from employee
MINUS
select first_name,last_name
from customer
ORDER BY 1

  select first_name,last_name
from employee
ORDER BY 1
