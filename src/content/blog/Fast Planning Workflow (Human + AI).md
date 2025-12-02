---
title: How to Fast plan using AI
description: Below we explore the ida of hot to plan and iterate using ai but withou letting the AI do all for you.
pubDate: 01 December 2025
heroImage: /blog-placeholder-2.jpg
---
The idea behind this article is to maxime the time we do spent planning by delegating stuff to AI while we do what we do best. thinking.

## What you must do?
### 1.1 Define the Goal
- What you want to build
- Who it's for
- What the final outcome should be
- What it must NOT do

This is the right direction, only you know the business context.

### 1.2 Set success criteria

Examples:
- "Should avoid dupliate records"
- "Must respond in under 1 second"
- "Must be easey to extend to new clients"
This is judgment. Don't let AI guess it.

### 1.3 Identify risks and constraints

- External APIs
- Vendor instability
- Authentication flows
- Time zones
- Misaligned data structures
Here you should apply your real-world experience, and you can alwas extend you knowledge on your blog for example.

### 1.4 Choose the high-level strategy
Examples:
- "Sync summaries first, then details"
- "use cron jobs instead of webhooks"
- "Separate this into its own module"

You evaluate trade-offs. AI only advises.

## What the AI Should Handle?
### 2.1 Generate the initial Structure
You give the goal and the AI Creates:
- sections
- bullets
- tables
- clear scope
- flow diagrams
- edge cases
- dependencies

### 2.2 Expand your rought ideas
Example prompt:
```txt
"I want a daily sync job"
```

AI returns:
- Steps
- pseudocode
- architectural options
- jobs structure

### 2.3 Validate your decisions
AI checks: 
- contradictions
- missing cases
- hidden failures
- performance issues
- messy coupling
Basically a senior reviewer at sprint zero.

### 2.4 Create flowcharts or wireframes
You describe, and AI build Mermaid diagrams or layout options.

### 2.5 Generate test scenarios and edge cases
This saves HOURS.
AI produces:
- normal cases
- extreme cases
- Invalid inputs
- failure paths
- concurrency issues
- race conditions

## 2.6 Suggest architecture and file structure
Rails / Express / Astro -- and AI can layout the folders and modules.

## How does this workflow look like?

1. You: deifne the objective in 3 - 5 lines
2. Ai: Produce a compact Product Requirement Document
3. You: Adjust direction
4. AI: generate Tech Spec
5. You: Implement
6. AI: Review

## Summary
The planning you keep is:
 - Direction, decisions, boundaries, judgment.
 The plannig you delegate is:
- Structure, expansion, documentation, edge cases, validation, testing.
You think.
Ai amplfies.
You move 5x faster with fewer mistakes.







