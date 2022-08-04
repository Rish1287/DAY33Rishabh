create database windows;
use windows;
create table Department(
deptNo int primary key,
departmentName varchar(50),
location varchar(50)
);
create table Employee(
empno int primary key,
ename text,
job text,
hiredate date,
managerid int,
salary bigint,
commission int,
deptno int,
foreign key(deptNo) references Department(DeptNo));
insert into Department values(1, "ADMIN", "SOMEWHERE" ),(2, "NOTADMIN", "WHERE"),(3, "UNKNOWN", "NOWHERE");
insert into Employee values
(9001, "Vegeta", "CEO of planet vegeta", "2021-12-17", 999, 100000, 2000, 1),(9002, "goku", "CEO of planet namek", "2001-02-17", 333, 200000, 2600, 2),(9003, "broly", "CEO of planet bruh", "2022-12-17", 123, 100000, 2000, 3);
drop table Employee, Department;