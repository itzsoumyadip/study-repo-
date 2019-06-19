create table Shop ( shop_no	VARCHAR2(5)	Primary key,
shop_name	VARCHAR2(30),	
owner_name	VARCHAR2(30));	

create table Customer ( cust_no	VARCHAR2(5)	Primary key,
cust_name	VARCHAR2(30),	
cust_addr	VARCHAR2(50)	
);

create table Sale  (
cust_no	VARCHAR2(5) references Customer(cust_no),
shop_no	VARCHAR2(5)  references Shop (shop_no),
Item	VARCHAR2(30),
Price	NUMBER(10,2) check(price>0)
);


insert into shop values('S1','Readymade Center','Jiban Krishna Saha');
insert into shop values('S2','Adi Readymade Center','Narayan Chandra Saha');
insert into shop values ('S3','Sri Niketan','Nityananda Aich');


insert into customer values('C1','Juli','ABC' );
insert into customer values('C2','Nisha','DEF');
insert into customer values('C3','Puja','GHI');
insert into customer values ('C4','Sonia','JKL');


insert into sale values ('C1','S2','Sari','10000');
insert into sale values ('C1','S2','frock',5000);
insert into sale values ('C2','S3','Pant',2000);
insert into sale values ('C2','S3','Shirt',2000);
insert into sale values ('C3','S1','Churidar',6000);
insert into sale values ('C3','S2','Kurti',2000);

select *
from sale
