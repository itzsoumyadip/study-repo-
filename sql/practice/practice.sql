create table book (
 bookid  INT(4) PRIMARY KEY,
 title varchar2(40) NOT NULL,
price float(7.2) );
 
 
 select * 
 from employee 
 where salary >= 30000 and salary <=40000
 
 
  select * 
 from employee 
 where salary  = any(30000,40000)  
 order by  salary asc
 
  select * 
 from employee 
 where salary =30000 or  salary=40000  
 order by  salary asc
 
  select * 
 from employee 
 where salary  in (30000,40000)  
 order by  salary asc
 
   select * 
 from employee 
 where salary =all(30000,40000,20000)  
 order by  salary asc
 
   select * 
 from employee 
 where salary >=all(30000,40000,20000)  
 order by  4,5 asc
 
 
 
   select * 
 from employee 
 
 order by  2 asc 
    
