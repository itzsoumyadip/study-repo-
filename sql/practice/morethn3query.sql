select first_name,last_name,salary
from employee
WHERE salary BETWEEN 28000 AND 40000
UNION
(select first_name,last_name,salary
from employee
WHERE salary BETWEEN 20000 AND 30000

INTERSECT
select first_name,last_name,salary
from employee
WHERE salary BETWEEN 30000 AND 55000)

MInus
select first_name,last_name,salary
from employee
WHERE salary BETWEEN 31000 AND 33000
order by 3


/*QUERY WITH OUT BRACKET*/

select first_name,last_name,salary
from employee
WHERE salary BETWEEN 28000 AND 40000
UNION
select first_name,last_name,salary
from employee
WHERE salary BETWEEN 20000 AND 30000

INTERSECT
select first_name,last_name,salary
from employee
WHERE salary BETWEEN 30000 AND 55000

MInus
select first_name,last_name,salary
from employee
WHERE salary BETWEEN 31000 AND 33000
order by 3


