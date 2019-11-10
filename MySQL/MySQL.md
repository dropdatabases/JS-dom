**常用操作命令**



- 显示所有数据库:

```
show databases;
```

show(显示) databases(数据库)

成功

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| a                  |
| atwo               |
| helloe             |
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
6 rows in set (0.00 sec)
```

- 查看数据库详细信息:

```
show create database 数据库库名;
show create database db_name;
```

 Create Database(创建数据库) create(创建)



成功

```
mysql> show create database a;
+----------+-----------------------------------------------------------------------------------------------+
| Database | Create Database                                                                               |
+----------+-----------------------------------------------------------------------------------------------+
| a        | CREATE DATABASE `a` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */ |
+----------+-----------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)
```

- 创建数据库：

```
 create database 数据库库名
 create database a
 ///
 create database if not exists 数据库库名 default charset utf8 collate utf8_general_ci
 create database if not exists b default charset utf8 collate utf8_general_ci;//用反引号
```

Query(查询)  row(行) affected(影响)



成功

```
mysql> create database aThr;
Query OK, 1 row affected (0.01 sec)
```

- 将数据库修改为 UTF8： 

```
alter database 数据库库名 character set utf8;
alter database db_name character set utf8;
```

成功

```
mysql> alter database atwo character set utf8;
Query OK, 1 row affected, 1 warning (0.01 sec)
```

alter(改变) character(字符) set(集) warning(警告)



- 切换选择数据库

```
use 数据库库名；
use database_name;
```

成功

```
mysql> use atwo;
Database changed
```

changed(更改)



- 删除数据库： 

```
drop database 数据库库名；
drop database db_name;
```

成功

```
mysql> drop database aTwo;
Query OK, 0 rows affected (0.01 sec)
```

drop (下降)



- 创建表:

```
create table 表名(
    字段名称 int(6),
    字段名称 varchar(20)
    );

create table student(
    id int(6),
    name varchar(20)
    );
```

成功

```
mysql> create table student(
    ->     id int(6),
    ->     name varchar(20)
    ->     );
Query OK, 0 rows affected, 1 warning (0.04 sec)
```

table(表格) varchar(变长字符型) int



- 显示数据库所有表: 

```
show tables;
```

成功

```
mysql> show tables;
+-------------+
| Tables_in_a |
+-------------+
| one         |
| student     |
+-------------+
2 rows in set (0.01 sec)
```

Tables_in_a  a在表的内部   rows(行)



- 查看表数据 :

```
select * from 表名;
select * from student;
```

成功

```
mysql> select * from student;
Empty set (0.01 sec)
```

Empty(空) select(选择) from(从)



- 增加字段: 

```
alter table 表名 add 字段名 字段类型
alter table book add count int;
```

成功

```
mysql> alter table student add count int;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

add(添加) alter  (改变 )  Records(记录) Duplicates(重复的) Warnings(警告)



- 修改字段名称: 

```
alter table <表名> change <字段名> <字段新名称> <字段的类型>。
alter table li change name wang varchar(25);
```

成功

```
mysql> alter table student change name wang varchar(25);
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

change (改变) 



- 删除字段: 

```
alter table 表名 drop 字段名
alter table book drop count;
```

成功

```
mysql> alter table student drop count;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0
```



- 向表中插入数据 :

```
insert into 表名(想插入的字段名称,...) values(想插入的字段的值)
insert into 表名 values(表中所有字段的值)
```



- 删除指定的某一行 :

```
delete from 表名 where 条件表达式;
delete from student where id=1;
```



- 修改表中记录 :

```
update 表名 set 字段名=新的字段值 where 条件表达式
update student set name=小李 where id=1;
```



- 修改表名 :

```
RENAME TABLE <旧表名> TO <新表名>;
rename table jiu to xin
```



- 删除表： 

```
drop table 表名;
drop table table_name;
```



- 查看表结构： 

```
desc 表名
desc table_name;
```



- 清空表 

```
delete from 表名;
delete from student;
```

