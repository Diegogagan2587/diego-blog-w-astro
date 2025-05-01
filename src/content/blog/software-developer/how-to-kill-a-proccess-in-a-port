---
title: how to kill a process in a port
description: "Instructions about how to kill a proces in a port in linux."
pubDate: '2025-05-01 17:33'
heroImage: '/blog-placeholder-1.jpg'
---

## Step 1
we need to be able to see wich process are runin on the port we want to freem, we need
to execute the next comand in our terminal:
```sh
lsof -i :3000
```

previous comand will show somthing like this:
```sh
ruby 123456 diego 10u IPv4 1234 0t0 TCP 127.0.0.1:3000 (LISTEN)
```
## step 2 

Wee need to use the PID (in this example `123456`) and kill the process:

```sh
kill -9 123456
```

## Step 3
Now the port should be free, if we were to run a rails project we could do it
now by runing
```sh
rails s
```

and now should not there be any conflicting port.


