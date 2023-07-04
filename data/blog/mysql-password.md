---
title: 修改MySql密码
date: '2023-07-03'
tags: ['mysql']
draft: false
summary: 修改MySql密码
---

## 方法 1：用 set password 命令

```bash
mysql -uroot -p #登录mysql
set password for root@localhost = password('123465');
```

## 方法 2：用 mysqladmin

```bash
mysqladmin -uroot -p123 password 123456
```

## 方法 3：用 update 直接编辑 user 表

```bash
mysql -uroot -p #登录mysql
use mysql # 连接权限数据库
update user set password=password('123456') where user='root' and host='localhost'; # 改密码
flush privileges; # 刷新权限
```

修改完成后修改 mysql 配置文件（my.ini）

```bash
[client]
password = 123456
```

phpmyadmin 配置文件（config.inc.php）

```bash
$cfg['Servers'][$i]['password'] = '123456';
$cfg['Servers'][$i]['AllowNoPassword'] = false;
```
