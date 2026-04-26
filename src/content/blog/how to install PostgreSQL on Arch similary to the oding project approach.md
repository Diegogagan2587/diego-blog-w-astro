---
title: how to install PostgreSQL on Arch similary to the oding project approach
description: If you are used to follow The Odin project installatin guide for PostfreSQL, here is a version that follo similar approach on Arch Linux.
pubDate: 2026-04-26
heroImage: /blog-placeholder-2.jpg
---

##  1️⃣ Install PostgreSQL (Arch way, no magic)

```bash
sudo pacman -S postgresql
```

If this fails, your mirrors are broken. Fix that first — PostgreSQL isn’t the problem.

---

## 2️⃣ Initialize the database cluster (this is the step people miss)

Arch does **not** auto-init PostgreSQL.

```bash
sudo -iu postgres
initdb --locale=en_US.UTF-8 -D /var/lib/postgres/data
exit
```

If `initdb` is “command not found”, you didn’t install Postgres correctly. Period.

---

## 3️⃣ Start and enable PostgreSQL

```bash
sudo systemctl enable postgresql
sudo systemctl start postgresql
```

Check status like a grown dev:

```bash
systemctl status postgresql
```

If it’s red, read the logs. Don’t guess.

---

## 4️⃣ Create your user (Odin-style)

Odin assumes **local dev user access**, not root DB nonsense.

Switch to postgres user:

```bash
sudo -iu postgres
```

Create a DB role matching your Linux username (replace `diego` if needed):

```bash
createuser diego
createdb diego
```

Exit:

```bash
exit
```

Now this should work **without a password** (local socket auth):

```bash
psql
```

If it opens → you win.  
If not → auth config issue (rare, but we’ll fix it fast if needed).

---

## 5️⃣ Verify like Odin expects

Inside `psql`:

```sql
\conninfo
```

You should see:

- database: your username
    
- user: your username
    
- via local socket
    

Exit:

```sql
\q
```

---

## 6️⃣ Node.js / Rails / Sequelize / Prisma ready

From here:

- Node + `pg` → works
    
- Rails → works
    
- Prisma → works
    
- Docker later → also works
    

This setup matches **The Odin Project’s intent**, just without Ubuntu hand-holding.

---

## Common Arch Gotchas (read this once, save 2 hours later)

- ❌ Forgot `initdb`
    
- ❌ PostgreSQL service not running
    
- ❌ Trying to connect as `root`
    
- ❌ Editing `pg_hba.conf` before understanding it
    

If you didn’t touch `pg_hba.conf` yet — good. Don’t.

---

## TL;DR (for future you)

```bash
sudo pacman -S postgresql
sudo -iu postgres
initdb -D /var/lib/postgres/data
exit
sudo systemctl enable --now postgresql
sudo -iu postgres
createuser <your_user>
createdb <your_user>
exit
psql
```

---

If you want:

- password auth
    
- multiple DB users
    
- Docker-friendly setup
    
- or matching this to **Rails conventions** (which you _will_ care about)
    

say the word and we’ll level it up 🚀