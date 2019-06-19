create table EMPLOYEE  (emp_name	VARCHAR2(20)	Primary key,
 street	VARCHAR2(20),	
 city	VARCHAR2(20)	
 );
 
 create table COMPANY(
 co_name	VARCHAR2(20)	Primary key,
 city	VARCHAR2(20)	
 );
 
 create table WORKS (emp_name VARCHAR2(20) references EMPLOYEE(emp_name),
 co_name VARCHAR2(20)  references COMPANY(co_name),
salary NUMBER(8,2) check(salary>= 10000)
);
select * from company
commit;
insert  into EMPLOYEE values ('X','MG Road','Kolkata');
insert  into EMPLOYEE values ('SUSMITA','Ripon Street','Howrah');
insert  into EMPLOYEE values ('SANTANU','Middleton Street','Barackpore');
insert  into EMPLOYEE values ('SWASWATI','SPStreet','Asansol');
insert  into EMPLOYEE values ('MANPREET','AJC Bose Road','Kolkata');
insert  into EMPLOYEE values ('TIA','Club Road','Darjeeling');


insert  into COMPANY values('XYZ','Kolkata');
insert  into COMPANY values('TCS','Kolkata');
insert  into COMPANY values('IBM','Kolkata');

insert  into WORKS values ('X','XYZ',25000);
insert  into WORKS values ('SUSMITA','IBM',23000);
insert  into WORKS values ('SANTANU','IBM',10000);
insert  into WORKS values ('SWASWATI','TCS',21000);
insert  into WORKS values ('MANPREET','TCS',12000);
insert  into WORKS values ('TIA','XYZ',21000);

quries 

. Find the names of the employees who live in the same city of the company for which they work for


select emp.emp_on,
comp.co_name
from works emp
left join works company comp


select city ,emp_name
from  EMPLOYEE
inter

