/*  COUNT */

/* total records*/
SELECT COUNT (*)
FROM EMPLOYEE
 

SELECT COUNT (salary)
FROM EMPLOYEE

SELECT COUNT (distinct last_name)
FROM EMPLOYEE
 
SELECT COUNT (*)
FROM EMPLOYEE
where  salary is  null

SELECT *
FROM EMPLOYEE
where salary is null 

/* NO OF TIME LAST NAME  DUBLICATE NAME */

select LAST_NAME, count(*)
FROM EMPLOYEE
group by LAST_NAME
ORDER BY 1


/* count data within groups with GROUP BY */
/* total no of product in deperment ?*/
select department_id, count(*)
FROM Product
group by department_id;



/*NAME START WITH "B" */
 SELECT  LAST_NAME , COUNT (*)
 FROM EMPLOYEE 
 WHERE LAST_NAME LIKE 'B%'
 GROUP BY LAST_NAME
 
 
 /* SELECT TOTAL   NO OF SALARY OVER 10000*/
 
 SELECT  SALARY, COUNT (*)
 FROM EMPLOYEE 
 WHERE  SALARY >10000
 GROUP BY SALARY
 ORDER BY COUNT(*);
 
 /*WITH OUT COUNT*/
 SELECT  LAST_NAME 
 FROM EMPLOYEE 
 WHERE LAST_NAME LIKE 'B%'
 GROUP BY LAST_NAME




/* use of HAVAING KEY WORD */
/* FIND OF DUBLICATE NAMES IN TABLES */

SELECT last_name,count(*)
from employee 
group by last_name 
HAVING count(*)>2


select sum(*)
from employee
