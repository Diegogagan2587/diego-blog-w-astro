---
title: How to Watch Tailwind CSS changes on Rails
description: Brief descritpon on how to manually run tailwind css watcher process and how to include it on a proces file on rails.
pubDate: 2026-04-26
heroImage: /blog-placeholder-2.jpg
---
Once you have installed tailwind CSS in your [[Ruby On Rails]] project, you can run the command below to refresh(or something like that) any change in CSS, so then you can go to the browser and refers and see your changes on styles.

To have it working, please run this into another console (within you root project folder of course!):

```sh
rails tailwindcss:watch
```

if for some reason this does not work, use:
```sh
rake assets:precompile
```
Now, if we want to save time and not have to write manually this each time we do start our server in local host, it is convenient to include this watch proces on your `Procfile.dev` so you can just append in a new line:

```sh
# Procfile.dev
css: bin/rails tailwindcss:watch
```
This way every time we do run `./bin/dev` the watch process will run as well.



