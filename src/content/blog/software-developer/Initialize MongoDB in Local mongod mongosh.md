---
title: 'How to initialize a mongo db in local'
description: 'sometimes we want jus a simple php server to debug simple php code, for that we can use the command below'
pubDate: 'March 31 2025'
heroImage: '/blog-placeholder-3.jpg'
---

## Initialize the service

```sh
sudo systemctl start mongod
sudo systemctl status mongod
mongod
mongosh


```


## Close the service
```sh
sudo systemctl stop mongod
sudo systemctl status mongod
```