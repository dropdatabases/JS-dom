### 事务 transaction

- 事务可以保证多个任务的原子性，例如三个任务如果有一个没有完成，那么三个都不执行。 
- 可以保证多个操作要么全部成功，要么全部失败。 

事务的特征 

- 原子性(A)：事务是最小单位，不可再分
- 一致性©：事务要求所有的 DML 语句操作的时候，必须保证同时成功或者同时失败 
- 隔离性(I)：事务 A 和事务 B 之间具有隔离性
- 持久性(D)：是事务的保证，事务终结的标志(内存的数据持久到硬盘文件中) 

```
* 关于事务的一些术语
开启事务：Start Transaction
事务结束：End Transaction
提交事务：Commit Transaction
回滚事务：Rollback Transaction
```

```
* 和事务相关的两条重要的SQL语句(TCL)

commit:提交
rollback：回滚
```

- 开启标志： 

```
- 任何一条DML语句(insert、update、delete)执行，标志事务的开启
```

- 结束标志(提交或者回滚)： 

```
提交：成功的结束，将所有的DML语句操作历史记录和底层硬盘数据来一次同步
```

```
回滚：失败的结束，将所有的DML语句操作历史记录全部清空
```

事务的四个隔离级别 

- 读未提交：read uncommitted 
- 读已提交：read committed 
- 可重复读：repeatable read 
- 串行化：serializable

 ![0903隔离级别.png](http://www.xiaozhoubg.com/public/uploads/images/1572999293555.png)

