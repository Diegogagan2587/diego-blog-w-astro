
## 1. **What Prompt Engineering Actually Is**

It’s not magic spells. It’s structured communication.  
You’re basically writing **specifications for an AI**, but in plain text — telling it what you want, how you want it, and what to avoid.

Think:

- **Prompt** = mini-PRD
    
- **Good prompt** = saves time, avoids “AI hallucination”
    
- **Bad prompt** = vague meeting notes from that one coworker
    

---

## 2. **Core Formula**

Most powerful prompts have four parts:

1. **Role / Context**  
    Give the AI an identity or POV.  
    _Example:_ “You are a senior Rails developer specializing in API performance tuning.”
    
2. **Task / Goal**  
    Say exactly what you want it to do.  
    _Example:_ “Refactor the following controller for speed.”
    
3. **Constraints**  
    Define style, format, limits, and no-gos.  
    _Example:_ “Do not remove any existing features. Return code only.”
    
4. **Examples / Reference** _(optional but killer)_  
    Give a “golden example” so it copies the style.  
    _Example:_ “Follow this pattern: …”
    

---

## 3. **Prompt Types You’ll Use Most**

- **Instructional**: Tell it exactly what to do.
    
- **Chain-of-thought** _(structured reasoning)_: Break big questions into smaller sub-questions for it.
    
- **Few-shot prompting**: Give it 2–3 good examples to follow.
    
- **Persona prompting**: Assign it a role so it thinks like a specific type of expert.
    
- **Iterative prompting**: Ask, get draft, refine with follow-ups.
    

---

## 4. **Techniques to Level Up**

- **Be absurdly specific**: “Explain WebSockets” is vague. “Explain WebSockets to a junior developer in 4 bullet points with a cooking analogy” will be 🔥.
    
- **Force structure**: “Reply in a table with columns: Step, Action, Expected Output.”
    
- **Tell it what to avoid**: “Do not add extra commentary.”
    
- **Ask for step-by-step reasoning** (but don’t say “think step-by-step” in production docs if you want concise results).
    
- **Break complex tasks into stages**: Like how you’d do in agile dev.
    

---

## 5. **Debugging Bad Outputs**

When AI gives junk, try:

- Adding **context** (“This is for a SaaS product onboarding flow”)
    
- Tightening **constraints** (“No more than 150 words, plain English”)
    
- Showing **good and bad examples** side-by-side
    
- Using **follow-ups** instead of restarting (“Keep everything but fix section 3…”)
    

---

## 6. **Mini Cheat Sheet**

|Situation|Prompt Trick|
|---|---|
|Writing code|Give version, language, and constraints (“Rails 8, no gem outside stdlib, keep method names”)|
|Summarizing docs|“Bullet points, max 5, sorted by importance”|
|Creating ideas|“Generate 10 options, rank them by feasibility”|
|Complex logic|“First explain the approach, then give the final output”|
|Teaching you|“Explain like I’m 12, then explain like I’m a senior dev”|

---

# 📓 Prompt Engineering Playbook for Developers

_By Diego, for Diego (and anyone who likes efficiency)_

---

## **1. Code Writing & Refactoring**

**Goal:** Get production-ready code that follows your constraints.

**Template:**

```
You are a senior [LANGUAGE/FRAMEWORK] developer.

Task: [CLEAR DESCRIPTION OF FEATURE/FIX]
Constraints:
- Target version: [VERSION]
- Do not remove [FEATURES/CONSTRAINTS]
- Follow [CODING STYLE/STANDARDS]
- Output only the code, no explanations.

Reference:
[OPTIONAL: Example snippet or existing code]
```

**Example:**

```
You are a senior Ruby on Rails 8 developer.
Task: Refactor the following controller for speed:
[PASTE CODE]
Constraints:
- Keep method names and public API unchanged.
- Do not remove authentication filters.
- Output only code.
```

---

## **2. Debugging & Troubleshooting**

**Goal:** Find root cause and possible fixes quickly.

**Template:**

```
You are an expert in debugging [TECH STACK].
Task: Diagnose the problem in the following code/log/error.
Constraints:
- Provide likely root cause first.
- Suggest 2–3 fix options with pros/cons.
- Avoid generic advice, be specific to the code provided.

Code/Logs:
[PASTE HERE]
```

**Example:**

```
You are an expert in debugging Rails + PostgreSQL performance.
Task: Diagnose why this query is slow.
Constraints:
- Provide the root cause and 3 specific fixes.
Query:
SELECT ...
```

---

## **3. Documentation & Explainers**

**Goal:** Produce clear, structured, developer-friendly docs.

**Template:**

```
You are a technical writer for developers.
Task: Document [FEATURE/SYSTEM] for [AUDIENCE LEVEL].
Constraints:
- Structure: Overview, Setup, Usage, Examples.
- Keep explanations concise.
- Include one code example.

Details:
[PASTE HERE]
```

**Example:**

```
You are a technical writer for developers.
Task: Document how to use our Twilio::DailySyncJob.
Constraints:
- Include setup, usage, and example invocation.
- Max 300 words.
Details:
[PASTE CLASS OR DESCRIPTION]
```

---

## **4. API Design & Planning**

**Goal:** Design APIs with clarity before writing code.

**Template:**

```
You are a senior backend architect.
Task: Design the API endpoints for [FEATURE].
Constraints:
- RESTful, JSON responses.
- Include request/response examples.
- Specify validation rules and error codes.

Context:
[FEATURE DESCRIPTION]
```

**Example:**

```
You are a senior backend architect.
Task: Design API endpoints for booking appointments with human agents.
Constraints:
- RESTful, JSON responses.
- Include request/response examples.
- Validate date/time in UTC-06.
Context:
Bookings are created internally by an AI voice agent.
```

---

## **5. Data Analysis & Reports**

**Goal:** Get structured, actionable insights.

**Template:**

```
You are a data analyst with [TECH STACK] experience.
Task: Analyze the following dataset/query for [GOAL].
Constraints:
- Show results as a table.
- Include key metrics and trends.
- Provide recommendations.

Dataset/Query:
[PASTE OR DESCRIBE]
```

**Example:**

```
You are a data analyst with SQL + Rails experience.
Task: Analyze call logs for unanswered calls by hour.
Constraints:
- Output as a table with Hour, Total Calls, Unanswered %.
- Recommend best staffing hours.
Dataset:
[PASTE]
```

---

## **6. Brainstorming & Solution Design**

**Goal:** Generate options, compare, and decide.

**Template:**

```
You are a solution architect.
Task: Generate [NUMBER] possible solutions for [PROBLEM].
Constraints:
- Rank by feasibility (1-5).
- Provide pros/cons for each.
- Highlight the recommended option.

Problem:
[DESCRIPTION]
```

**Example:**

```
You are a solution architect.
Task: Generate 3 possible ways to sync Glassix tickets automatically daily.
Constraints:
- Rank by feasibility.
- Pros/cons for each.
- Highlight best option.
Problem:
We currently sync manually via a button in the UI.
```

---

## **7. Quick Learning & Context Extraction**

**Goal:** Understand something fast without fluff.

**Template:**

```
You are an expert teacher.
Task: Explain [TOPIC] to a [LEVEL] developer.
Constraints:
- Use max [X] words.
- Include 1 analogy.
- Provide 2 practical examples.
```

**Example:**

```
You are an expert teacher.
Task: Explain WebSockets to a junior developer.
Constraints:
- Max 150 words.
- Analogy: ordering food at a restaurant.
- 2 practical examples.
```

---

## **8. Multi-Step Development**

**Goal:** Guide AI through building complex things without losing control.

**Template:**

```
You are a senior [ROLE].
We will build [FEATURE] step-by-step.
First, output the plan in numbered steps.
Wait for my approval before coding.
Constraints:
- Keep steps small and testable.
- End each step with 'Do you want to proceed?'.
```

---

## **Pro Tips**

1. **Always feed context** — your stack, constraints, examples.
    
2. **Force output format** — tables, JSON, bullet points.
    
3. **Iterate** — don’t expect perfection on first try.
    
4. **Ask for reasoning** — helps debug AI logic.
    
5. **Keep a prompt library** — reuse and tweak instead of reinventing.
    