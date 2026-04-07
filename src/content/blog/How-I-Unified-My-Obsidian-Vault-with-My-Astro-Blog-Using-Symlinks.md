---
title: How I Unified My Obsidian Vault with My Astro Blog (Using Symlinks)
description: Lorem ipsum dolor sit amet
pubDate: March 06 2026
heroImage: /blog-placeholder-3.jpg
---

If you’re like me, you probably have two separate worlds:
- A **thinking space** (Obsidian)
- A **publishing system** (Astro)

And they don’t talk to each other.
That creates friction:

- You write notes in Obsidian… but then rewrite them for your blog
- You lose ideas
- You duplicate content
- You slow yourself down

So I built a simple workflow that unifies both — no duplication, no complexity, just one source of truth.

---

## 🎯 Goal

I wanted:
- My **Obsidian vault** to include:
    - Personal notes
    - Blog posts (from Astro)
- A way to:
    - Write once
    - Think clearly
    - Publish directly

---

## 🧠 The Key Idea: Use Symlinks

Instead of copying files or syncing folders manually, we use a **symbolic link (symlink)**.

This makes one folder appear inside another — without duplicating data.

---

## ⚙️ Setup

### 1. My folder structure

```bash
Obsidian Vault:
/home/diego/sync_obsidian_vault

Astro Blog:
/home/diego/Work/diego-blog-w-astro/src/content/blog
```

---

### 2. Create the symlink

Navigate to your vault:

```bash
cd /home/diego/sync_obsidian_vault
```

Create a link to your blog content:

```bash
ln -s /home/diego/Work/diego-blog-w-astro/src/content/blog astro-blog
```

---

### 3. Open Obsidian

Open your vault:

```
/home/diego/sync_obsidian_vault
```

You’ll now see:

```
astro-blog/
```

This folder is actually your Astro blog content.

---

## 🔥 What This Gives You

Now everything is unified:
- Write blog posts directly in Obsidian
- Edit existing posts visually
- Link ideas between notes and posts
- No duplication
- No syncing issues

Your workflow becomes:

```
Idea → Note → Draft → Blog Post → Publish
```

---

## 🧩 Optional Enhancements

### Frontmatter compatibility

Astro uses frontmatter like:

```md
---
title: "My post"
description: "..."
pubDate: 2026-04-06
---
```

Obsidian supports this natively.

---

### Useful Obsidian plugins

- **Dataview** → query your posts
- **Templater** → standardize blog structure

You can even track:

- Drafts
- Published posts
- Content pipelines

---

## 📁 Suggested Structure

Inside your vault:

```
/astro-blog   → published content (Astro)
/notes        → raw ideas
/drafts       → future posts
```

Move content from `/drafts` → `/astro-blog` when ready.

---

## ⚠️ Important Notes

### 1. Respect Astro’s structure

Astro expects:

```
src/content/blog/*.md
```

So don’t break folder structure inside `astro-blog`.

---

### 2. Git workflow stays the same

Your repository is still:

```
/home/diego/Work/diego-blog-w-astro
```

So commit from there:

```bash
cd /home/diego/Work/diego-blog-w-astro
git add .
git commit -m "new post"
git push
```

---

### 3. Symlink caveats

If Obsidian doesn’t show files:

- Check **Files & Links settings**
- Enable detection of all file types
- Ensure symlinks are supported on your system

---

## 🚀 Why This Matters

This isn’t just about tooling.

It’s about reducing friction between:

- Thinking
- Writing
- Publishing

The less friction you have, the more you ship.

---

## 💡 Final Thought

Your notes shouldn’t live in isolation.
They should evolve into:
- Ideas
- Articles
- Proof of work
And eventually:
- Opportunities
This setup turns your knowledge into something that compounds.
