drop database if exists ExpressDB1;
GO

create database ExpressDB1;
GO

create table t_Users (
	ID bigint primary key identity(1,1) not null,
	Email nvarchar(100) not null,
	FirstName nvarchar(100) not null,
	LastName nvarchar(100) not null,
	HashPassword nvarchar(1000) not null
);
GO

create table t_Facts (
	ID bigint primary key identity(1,1) not null,
	Fact nvarchar(1000) not null
);
GO

insert into t_Facts (Fact)
values ('This table is peak'),
('Frankfurt is in Germany'),
('This task has made me taste despair'),
('It''s cold outside');
GO

select * from t_Facts

select top 1 * from t_Facts order by newID()

select * from t_Users