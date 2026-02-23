# Unit 6 — Capstone: The Economic Argument

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Capstone: The Economic Argument |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Can you use data to make a convincing economic argument about something that matters?* |
| Economics TEKS | §113.31(c)(8), (21), (22), (23) — plus review of all strands |
| Algebra I TEKS | §111.39(c)(2), (5), (8), (9) — cumulative application |
| R Skills | Full pipeline: import → wrangle → visualize → narrate; reproducible R Markdown reports |
| Key Deliverable | The Economic Argument — a data-driven policy brief or op-ed with R visualizations, presented publicly |

## Unit Narrative

The capstone is the payoff. Students choose an economic question that matters to them — minimum wage, college affordability, housing costs, healthcare spending, Houston transit, immigration and wages — and build a data-driven argument. This is not a research paper; it is an economic argument grounded in evidence. Every claim must be supported by data. Every visualization must serve the argument. The R Markdown document they produce is a professional-quality deliverable: reproducible, clearly narrated, and visually compelling. The unit integrates every economics TEKS strand and every Algebra I skill from the course. It culminates in a public presentation — to classmates, invited guests, or a community panel.

## Economics Concepts (Cumulative)

This unit does not introduce new economics content. Instead, students apply concepts from Units 1–5:
- Scarcity and opportunity cost (Unit 1)
- Supply and demand, market equilibrium, price controls (Unit 2)
- Labor markets, wages, correlation (Unit 3)
- GDP, business cycles, fiscal/monetary policy, trade (Unit 4)
- Entrepreneurship, profit, business viability (Unit 5)
- Government role in the economy: taxation, regulation, redistribution
- Critical thinking: evaluating economic claims with data

## Math Concepts (Cumulative)

- Linear functions and systems of equations (Units 1–5)
- Exponential functions (Units 1, 4, 5)
- Quadratic functions (Unit 5)
- Scatterplots, trend lines, correlation coefficient (Units 2–4)
- Slope interpretation in context
- Correlation vs. causation
- Data representation and communication

---

## Lesson Sequence

### Week 1: Question, Data, Framework (≈8.3 hours)

#### Lesson 6.1 — What's Your Economic Question? (2 hrs)
**Activity:**
- Teacher presents 10 example economic questions:
  1. Should the federal minimum wage be $20?
  2. Is a college degree still worth the cost?
  3. Why is Houston housing getting more expensive?
  4. Does immigration lower wages for native-born workers?
  5. Should Texas expand Medicaid?
  6. Is Houston's public transit system economically efficient?
  7. Why do prescription drugs cost more in the US than in other countries?
  8. Should the US have universal basic income?
  9. Would a carbon tax reduce emissions without killing the economy?
  10. Is student loan forgiveness good economic policy?
- For each question, briefly identify: What data would you need? What economic concepts apply?
- Students brainstorm their own questions. Requirements:
  - The question must be debatable (reasonable people disagree).
  - The question must be answerable with data (not purely philosophical).
  - The question must connect to at least 2 economics concepts from the course.
- By end of class: Each student has a draft question approved by the teacher.

**TEKS:** §113.31(c)(21)(A), §113.31(c)(22)

#### Lesson 6.2 — Finding and Evaluating Data (2 hrs)
**Economics Focus:** Data literacy, source credibility, government data
**R Focus:** Accessing data from FRED, BLS, Census
**Activity:**
- Mini-lesson: Not all data is equal. Hierarchy of sources:
  - Tier 1: Government agencies (BLS, Census, FRED, CBO). Methodologically transparent, publicly funded.
  - Tier 2: Research institutions (Brookings, NBER, Pew). Peer-reviewed, but may have perspective.
  - Tier 3: Advocacy organizations, news outlets. May cherry-pick. Use cautiously and note the source.
  - Tier 4: Social media, random websites. Not for academic arguments.
- Students identify 2–3 datasets for their question. For each: What is the source? What variables does it contain? What time period does it cover?
- R lab: Students load their first dataset and run `head()`, `summary()`, `str()` to assess its structure.
- Teacher circulates and helps students match questions to datasets.

**TEKS:** §113.31(c)(21)(B), §113.31(c)(23)

#### Lesson 6.3 — Building the Argument Framework (1.5 hrs)
**Economics Focus:** Structuring an economic argument
**Activity:**
- An economic argument has four parts:
  1. **Claim:** A clear, debatable statement. (e.g., "Houston should invest in light rail expansion.")
  2. **Economic reasoning:** Why does economic theory support or oppose this claim? (e.g., "Public transit reduces commuting costs, which increases labor supply...")
  3. **Evidence:** Data that supports the reasoning. (e.g., "Cities with rail transit have X% higher labor force participation...")
  4. **Counterargument and response:** Acknowledge the strongest objection and address it with data.
- Students draft their argument framework (1 page outline):
  - My claim is: ___
  - The economic reasoning is: ___
  - I will use this data to support it: ___
  - The strongest counterargument is: ___
  - I will address it by: ___
- Peer review: Partners read each other's frameworks and push back on weak reasoning.

**TEKS:** §113.31(c)(21)(A–B), §113.31(c)(22)

#### Lesson 6.4 — Introduction to R Markdown (2.8 hrs)
**R Focus:** R Markdown — integrating code, output, and narrative
**Activity:**
- The capstone deliverable is an R Markdown document: a single file that contains prose, R code, and visualizations.
- Teacher-led tutorial:
  - Create a new `.Rmd` file in RStudio.
  - YAML header: title, author, date, output format (html_document or pdf_document).
  - Markdown basics: `#` headers, `**bold**`, `*italic*`, bullet lists.
  - Code chunks: ` ```{r} ... ``` `. Options: `echo = FALSE` (hide code), `message = FALSE`.
  - Inline code: `` `r round(mean(data$income), 2)` ``.
- Guided exercise: Students create a mini R Markdown report using one of their datasets:
  - Title and introduction (2 sentences).
  - One code chunk that loads data and creates a visualization.
  - One paragraph interpreting the visualization.
  - Knit to HTML.
- This is the format for the final deliverable.

**TEKS:** §111.39(c)(8), §113.31(c)(23)

---

### Week 2: Analysis and Drafting (≈8.3 hours)

#### Lesson 6.5 — Exploratory Data Analysis (2.5 hrs)
**R Focus:** Full wrangling pipeline — `select()`, `filter()`, `mutate()`, `group_by()`, `summarize()`, `left_join()`
**Activity:**
- Students perform exploratory data analysis (EDA) on their datasets:
  - How many observations? What time period? Any missing values?
  - Create at least 3 "quick look" visualizations: histogram, scatterplot, time series.
  - Calculate key summary statistics: means, medians, correlations.
- Teacher check-in: Each student shows their EDA and discusses what they see.
- Students write a "Data Description" section for their R Markdown report.

**TEKS:** §111.39(c)(8), §111.39(c)(9)

#### Lesson 6.6 — Building the Key Visualizations (2.5 hrs)
**Activity:**
- Each argument needs at least 3 polished visualizations:
  1. **A scatterplot with trend line** (for relationships — income vs. education, spending vs. GDP, etc.)
  2. **A time-series line plot** (for trends — prices over time, unemployment, enrollment, etc.)
  3. **A comparison chart** (bar chart, faceted plot, or map — comparing groups, states, countries, etc.)
- Students draft all three in R. Focus on:
  - Clear titles that state the finding (e.g., "States with Higher Education Spending Have Lower Unemployment" not "Education vs. Unemployment").
  - Labeled axes with units.
  - Annotations where needed (`annotate()`, `geom_text()`).
  - Clean themes (`theme_minimal()`, `theme_bw()`).
- Peer review: Partners check each other's visualizations for clarity and accuracy.

**TEKS:** §111.39(c)(8), §111.39(c)(9), §111.39(c)(2)

#### Lesson 6.7 — Writing the Argument (2 hrs)
**Activity:**
- Students write the prose sections of their R Markdown report:
  - **Introduction** (1 paragraph): State the question and why it matters.
  - **Background** (1–2 paragraphs): Economic context and relevant concepts from the course.
  - **Evidence and Analysis** (2–3 paragraphs): Present each visualization with interpretation. Report correlation coefficients, slope values, and trend descriptions. Use economic vocabulary precisely.
  - **Counterargument** (1 paragraph): Present the strongest objection. Address it with data or reasoning.
  - **Conclusion** (1 paragraph): Restate the claim. Summarize the evidence. Note limitations.
- Writing quality expectations:
  - Every claim is supported by a data point or visualization.
  - Economic vocabulary is used correctly (at least 10 terms from the course).
  - Correlation vs. causation is addressed explicitly.
  - The tone is analytical, not editorial. "The data suggests..." not "I think..."

**TEKS:** §113.31(c)(21), §113.31(c)(22), §113.31(c)(23)

#### Lesson 6.8 — Technical Polish: Code, Formatting, Knitting (1.3 hrs)
**R Focus:** Clean code practices, chunk options, document formatting
**Activity:**
- Code review: Does the R Markdown document knit without errors?
- Best practices:
  - Set `echo = FALSE` for production visualizations (hide code, show output).
  - Use `warning = FALSE`, `message = FALSE` to suppress package loading messages.
  - Add figure captions: `fig.cap = "..."`.
  - Use inline code for dynamic statistics (so numbers update if data changes).
- Students finalize their documents and knit to HTML.

---

### Week 3: Revision, Presentation, Reflection (≈8.3 hours)

#### Lesson 6.9 — Peer Review Workshop (2 hrs)
**Activity:**
- Structured peer review in groups of 3. Each student reads two classmates' reports.
- Review checklist:
  - [ ] Claim is clear and debatable
  - [ ] At least 2 economic concepts are correctly applied
  - [ ] At least 3 visualizations are included and clearly labeled
  - [ ] At least one scatterplot with trend line and reported r value
  - [ ] Correlation ≠ causation is addressed
  - [ ] Counterargument is present and addressed with data
  - [ ] Economic vocabulary is used accurately (10+ terms)
  - [ ] R Markdown document knits without errors
  - [ ] Writing is analytical, not editorial
- Written feedback: Each reviewer writes 2 strengths and 2 areas for improvement.

#### Lesson 6.10 — Revision and Final Polish (2 hrs)
**Activity:**
- Students revise based on peer feedback.
- Teacher holds individual 3-minute conferences with each student to review final drafts.
- Final knit and submission.

#### Lesson 6.11 — Public Presentations: The Economic Argument (3 hrs)
**Activity:**
- Each student presents their Economic Argument (5 minutes + 2 minutes Q&A):
  - State the question and claim.
  - Show key visualizations (screen or printed poster).
  - Summarize the evidence.
  - Address the counterargument.
  - State the conclusion.
- Audience: classmates + invited guests (other teachers, administrators, community members, if possible).
- Scoring: Teacher rubric (50%) + Peer evaluation (25%) + Guest evaluation (25%, if applicable).

#### Lesson 6.12 — Course Reflection and Celebration (1.3 hrs)
**Activity:**
- Reflection writing: "At the beginning of this course, how did you think about economics? How do you think about it now? What tool or concept changed your perspective the most?"
- Portfolio assembly: Students compile their best work from each unit (budget dashboard, price investigation, wage data brief, Houston dashboard, business plan, economic argument) into a portfolio folder.
- Class discussion: What economic question do you still want to answer?
- Course evaluation: Anonymous student feedback on what worked and what didn't.

**TEKS:** §113.31(c)(21–23)

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Argument Framework Outline | Practice | 15 |
| Data Description (EDA) | Lab | 20 |
| Draft Visualizations (3) | Lab | 30 |
| Peer Review Participation | Participation | 15 |
| Final R Markdown Report | Project | 75 |
| Public Presentation | Project | 45 |
| **Total** | | **200** |

## Capstone Project Rubric (Detailed)

### R Markdown Report (75 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Claim & Question** (10 pts) | Clear, specific, debatable claim connected to a real economic issue | Clear claim, mostly specific | Vague claim or not clearly debatable | No clear claim |
| **Economic Reasoning** (15 pts) | Accurately applies 3+ economic concepts; reasoning logically supports the claim | Applies 2 concepts correctly | Applies 1 concept or with minor errors | Economic concepts absent or incorrect |
| **Data & Visualizations** (20 pts) | 3+ polished visualizations; data from Tier 1–2 sources; axes labeled; trend lines where appropriate; r reported | 3 visualizations with minor issues | 2 visualizations or significant labeling issues | Fewer than 2 or poorly constructed |
| **Analysis & Interpretation** (15 pts) | Every visualization is interpreted with specific data points; slope and r values explained in context; correlation ≠ causation addressed | Most visualizations interpreted; correlation ≠ causation noted | Some interpretation; correlation ≠ causation not addressed | Little to no interpretation |
| **Counterargument** (10 pts) | Strongest objection identified and addressed with data or reasoning | Counterargument present but weakly addressed | Counterargument mentioned but not addressed | No counterargument |
| **Writing Quality** (5 pts) | Analytical tone; 10+ economic terms used correctly; clean prose | 7–9 terms; mostly analytical | 4–6 terms; some editorial tone | Fewer than 4 terms; opinion-driven |

### Presentation (45 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Clarity** (15 pts) | Argument is clear and well-structured; audience can follow the logic | Mostly clear; minor gaps | Somewhat hard to follow | Unclear or disorganized |
| **Evidence** (15 pts) | Visualizations effectively support the argument; data points cited verbally | Visualizations shown and referenced | Visualizations shown but not explained | No visual evidence |
| **Q&A** (15 pts) | Responds thoughtfully to questions with data or economic reasoning | Responds adequately | Struggles to answer | Cannot respond |

---

## Key Vocabulary (Cumulative)

All vocabulary from Units 1–5, plus: argument, claim, evidence, counterargument, data literacy, source credibility, exploratory data analysis, R Markdown, reproducibility, policy brief, analytical writing, trade-off, externality, market failure, public good, redistribution
