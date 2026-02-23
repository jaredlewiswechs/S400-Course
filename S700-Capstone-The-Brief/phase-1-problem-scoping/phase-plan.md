# Phase 1 — Problem Scoping

## Phase Overview

| Field | Detail |
|-------|--------|
| Phase | 1 of 6 |
| Title | Problem Scoping |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What real problem can you investigate with data — and is there enough data to do it well?* |
| Key Deliverable | Approved Research Proposal — a 2-page document with research question, literature context, data inventory, and methodology plan |

## Phase Narrative

The hardest part of original research is finding the right question. Too broad ("Why is there poverty?") and you'll drown in data. Too narrow ("What is the average rainfall in Harris County in March?") and there's nothing to analyze. The right question is specific, debatable, data-answerable, and connected to something that matters. Phase 1 guides students through this process: brainstorming, narrowing, conducting a lightweight literature review, checking data availability, and writing a formal proposal. Students also set up GitHub and learn version control. By the end, every student has an approved question, identified datasets, and a working GitHub repository.

## Learning Objectives

- Identify a social science problem that can be investigated with quantitative data
- Conduct a targeted literature review to understand what's already known
- Assess data availability and quality before committing to a question
- Write a clear, specific, testable research question with hypotheses
- Set up and use GitHub for version control

---

## Lesson Sequence

### Week 1: Finding the Question (≈8.3 hours)

#### Lesson 1.1 — What Makes a Good Research Question? (2 hrs)
**Activity:**
- Direct instruction: Criteria for a strong research question:
  1. **Specific:** Not "What causes poverty?" but "Does foreign aid reduce infant mortality in Sub-Saharan Africa?"
  2. **Debatable:** Reasonable people (or researchers) disagree.
  3. **Data-answerable:** There exists quantitative data that can shed light on the answer.
  4. **Connected:** The answer matters to someone — policymakers, communities, scholars.
- Examples of strong questions from prior student work and published research.
- Students brainstorm 5 potential questions in each of these categories:
  - Economic policy (minimum wage, trade, taxation, development)
  - Health and demographics (global health, disparities, pandemics, aging)
  - Government and politics (voting, representation, redistricting, budgets)
  - Education (funding, outcomes, equity, access)
  - Environment and climate (emissions, policy, climate justice, adaptation)
  - Criminal justice (sentencing, policing, incarceration, reform)
  - Houston/Texas-specific (local data advantage)
- End of class: Each student has 5 candidates.

#### Lesson 1.2 — The Data Feasibility Check (2 hrs)
**Activity:**
- Before committing to a question, check: Does the data exist?
- For each of their 5 candidate questions, students spend 15 minutes attempting to locate data:
  - World Bank, FRED, BLS, Census, WHO, UCDP, ProPublica, state agencies
  - Google Dataset Search
  - ICPSR (Inter-university Consortium for Political and Social Research)
  - Data.gov, data.texas.gov
- Score each question: Data availability (0 = none, 1 = partial, 2 = excellent). Drop any question with a score of 0.
- Students narrow to 2 finalists.

#### Lesson 1.3 — Literature Review: What's Already Known? (2.5 hrs)
**Activity:**
- A research question isn't asked in a vacuum. Someone has probably studied something similar.
- Students conduct a lightweight literature review for their 2 finalist questions:
  - Google Scholar: Search for 3–5 relevant studies or reports.
  - Government reports: CBO, GAO, CRS (Congressional Research Service), state auditor.
  - Think tanks: Brookings, RAND, Urban Institute, Pew, NBER working papers.
- For each source found, students write a 2-sentence summary: What did they study? What did they find?
- Purpose: Not to replicate prior work, but to understand context. Your question should build on or respond to existing knowledge.
- Discussion: What is the difference between a research paper and a policy brief? (A policy brief synthesizes research and data for a specific audience — policymakers — with recommendations.)

#### Lesson 1.4 — Narrowing to One Question (1.8 hrs)
**Activity:**
- Students present their 2 finalist questions to a small group (3–4 students + teacher).
- Group feedback: Which is more feasible? Which is more interesting? Which has better data?
- Teacher consultation: 5-minute 1-on-1 with each student to finalize the question.
- By end of class: One approved research question per student.

---

### Week 2: GitHub, Data Plan, and the Proposal (≈8.3 hours)

#### Lesson 1.5 — Introduction to GitHub (2.5 hrs)
**R/Tools Focus:** Git, GitHub, version control basics
**Activity:**
- Why version control? You will be working on this project for months. You need to track changes, recover old versions, and show your process.
- Teacher-led tutorial:
  - Create a GitHub account (or use school-provided accounts).
  - Create a new repository: `s700-brief-[lastname]`.
  - Clone to RStudio: File → New Project → Version Control → Git.
  - The Git workflow: `stage → commit → push`.
  - Practice: Create a file, make a change, commit, push. Verify on GitHub.
- Key vocabulary: repository, commit, push, pull, branch, diff, commit message.
- Convention: Commit messages should be descriptive. "Add initial data exploration" not "stuff."
- Students commit at least 3 times during this lab.

#### Lesson 1.6 — Data Inventory and Acquisition Plan (2 hrs)
**Activity:**
- Students create a formal data inventory for their project:

| Dataset | Source | Variables Needed | Geographic Level | Time Period | Format | Status |
|---------|--------|-----------------|------------------|-------------|--------|--------|
| Example: ACS income data | tidycensus | median_income, pct_poverty | County | 2018–2022 | API | Available |
| Example: School spending | TEA | per_pupil_spending, test_scores | District | 2015–2023 | CSV | Need to download |

- Students must identify at least 3 data sources.
- For each: Can you access it now? If not, what steps are needed? (API key, download request, FOIA, teacher assistance.)
- Identify potential challenges: missing data, mismatched geographic levels, inconsistent variable definitions.

#### Lesson 1.7 — Methodology Plan (2 hrs)
**Activity:**
- Based on the research question and available data, students plan their analytical approach:
  - **Descriptive analysis:** What distributions will you examine? What comparisons will you make?
  - **Inferential analysis:** What hypothesis test(s) will you run? (t-test, ANOVA, chi-square, regression?)
  - **Regression model:** What is the outcome variable? What are the predictors? Will you use multiple regression? Logistic regression?
  - **Geographic analysis:** Will you map the data? At what geographic level?
  - **Limitations:** What confounders do you anticipate? What are the data quality concerns?
- Students write a 1-paragraph methodology plan.
- Teacher feedback: Is the planned methodology appropriate for the question and data?

#### Lesson 1.8 — Writing the Research Proposal (1.8 hrs)
**Activity:**
- Students draft a 2-page Research Proposal:
  1. **Research Question** (1 paragraph): State the question. Why does it matter? Who cares about the answer?
  2. **Literature Context** (1 paragraph): What is already known? Cite 3–5 sources. How does your question build on this?
  3. **Data Inventory** (table): Sources, variables, format, availability.
  4. **Methodology Plan** (1 paragraph): Analytical approach, planned tests, expected challenges.
  5. **Timeline** (table): Weekly milestones from Phase 2 through Phase 5.
- Submit as the first R Markdown document in their GitHub repository.
- Teacher reviews and approves (or requests revision) within 1 week.

---

### Week 3: Proposal Refinement and Approval (≈8.3 hours)

#### Lesson 1.9 — Peer Review of Proposals (2 hrs)
**Activity:**
- Structured peer review in groups of 3–4.
- Review checklist:
  - [ ] Research question is specific and data-answerable
  - [ ] At least 3 data sources identified with confirmed availability
  - [ ] Methodology is appropriate for the question
  - [ ] Literature review shows awareness of prior work
  - [ ] Timeline is realistic
  - [ ] GitHub repository exists with at least 3 commits
- Written feedback: 2 strengths, 2 suggestions.

#### Lesson 1.10 — Proposal Revision and Teacher Conferences (3 hrs)
**Activity:**
- Students revise based on peer feedback.
- 10-minute teacher conferences with each student:
  - Is the question feasible?
  - Is the data actually available and sufficient?
  - Is the methodology plan sound?
  - What's the biggest risk to this project, and how will we mitigate it?
- Teacher signs off on approved proposals.
- Students who need more time get an additional revision cycle.

#### Lesson 1.11 — Proposal Presentations (3.3 hrs)
**Activity:**
- Each student presents their approved proposal (3 minutes):
  - What's the question?
  - Why does it matter?
  - What data will you use?
  - What's your analytical approach?
- Class feedback: "What else should they consider?"
- Purpose: Public commitment to the project. Accountability and excitement.

---

## Phase 1 Assessment

| Assessment | Type | Points |
|------------|------|--------|
| Research Question Draft (5 candidates) | Process | 10 |
| Data Feasibility Check | Process | 10 |
| Literature Review (3–5 sources) | Process | 15 |
| GitHub Setup & Commit History | Process | 10 |
| Data Inventory Table | Process | 15 |
| Methodology Plan | Process | 15 |
| Research Proposal (2 pages) | Milestone | 40 |
| Proposal Presentation | Milestone | 15 |
| **Total** | | **130** |
