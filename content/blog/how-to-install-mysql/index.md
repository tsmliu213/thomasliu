---
title: How to Install MySql and Apache
date: "2019-03-21"
---

## How to install mysql 5.7 for windows 10 manually

1. Download myql.
https://dev.mysql.com/downloads/file/?id=476696
2. Update environment path
3. Set ini file and MySQLdata directory.
4. Install Microsoft Visual C++ Redistributable 2013
https://www.microsoft.com/en-us/download/details.aspx?id=40784

## Open up terminal as admin
5. ```mysqld --initialize-insecure``` (Install without root password)
6. ```mysqld --install``` (add mysql as a service)
7. ```mysqld --console``` (start mysql)
If you cannot start mysql and getting an error. Go to your services and make sure MySql is on. If not, turn it on and try to log in again.


## How to install apache
8. open console as administrator
9. add apache24 to path

```httpd -k install```

```httpd -k start```

```httpd -k restart```

```httpd -t equivalent of apachectl configtest```
