# Phase 4 — The Brief

## Phase Overview

| Field | Detail |
|-------|--------|
| Phase | 4 of 6 |
| Title | The Brief |
| Duration | 35 hours (~4 weeks) |
| Driving Question | *Can you write a document that would change a policymaker's mind?* |
| Key Deliverable | The Policy Brief — a 3,000–5,000 word R Markdown document with professional formatting, integrated analysis, and actionable recommendations |

## Phase Narrative

The policy brief is the capstone deliverable of the entire S400–S700 sequence. It is not a research paper (too long, too academic) and not an op-ed (too short, too opinionated). A policy brief synthesizes evidence for a decision-maker who has 15 minutes and needs to act. It has a clear structure: executive summary, background, methods, findings, recommendations. Every claim is supported by data. Every visualization serves the argument. The writing is analytical but accessible — no jargon without definition, no statistics without interpretation. Students write in R Markdown so the brief is fully reproducible: change the data, re-knit, and the tables and figures update automatically. This phase dedicates 4 weeks to writing, revision, and polish.

## Learning Objectives

- Write a professional-quality policy brief (3,000–5,000 words)
- Integrate R-generated analysis, tables, and visualizations into a cohesive narrative
- Write for a non-technical audience without sacrificing rigor
- Revise substantively based on peer and teacher feedback
- Produce a fully reproducible R Markdown document

---

## Lesson Sequence

### Week 1: Structure and First Draft (≈8.3 hours)

#### Lesson 4.1 — Anatomy of a Policy Brief (2 hrs)
**Activity:**
- Analyze 2–3 real policy briefs (Brookings, RAND, Urban Institute — excerpted by teacher).
- Identify the common structure:
  1. **Title** — Specific, clear, sometimes with a subtitle framing the question.
  2. **Executive Summary** (200–300 words) — The entire brief compressed to one page. A busy policymaker reads only this.
  3. **Background and Context** (500–800 words) — What is the problem? Why does it matter? What has been tried?
  4. **Data and Methods** (300–500 words) — What data was used? What methods? Accessible language.
  5. **Findings** (1,000–1,500 words) — The core analysis. Visualizations integrated with narrative. Each finding stated clearly and supported.
  6. **Discussion** (500–800 words) — What do the findings mean? Limitations. Alternative explanations.
  7. **Recommendations** (300–500 words) — Specific, actionable, prioritized. Based on the evidence.
  8. **References** — Data sources and cited literature.
- Students outline their brief using this structure, filling in bullet points for each section.

#### Lesson 4.2 — Writing the Executive Summary First (2 hrs)
**Activity:**
- Counterintuitive writing advice: Write the executive summary FIRST, even though it appears first in the document. It forces you to know your argument before you write the details.
- The executive summary must answer:
  1. What is the problem?
  2. What did you find?
  3. What should be done?
- In 200–300 words. No jargon. No hedging. Clear, direct, and actionable.
- Students draft their executive summary. Peer read: "After reading this, do you know what the brief is about and what it recommends? If not, what's missing?"

#### Lesson 4.3 — Writing the Background Section (2 hrs)
**Activity:**
- The background provides context for readers who are not experts:
  - What is the policy problem? (Describe it concretely. Use a specific statistic or example to make it real.)
  - Why does it matter? (Scope: How many people are affected? How much money is involved?)
  - What has been tried? (Brief literature context from Phase 1.)
  - What is your specific contribution? (What question does your analysis answer that hasn't been answered before — or that needs fresh data?)
- Writing tips:
  - Lead with the most compelling fact.
  - Define any term a non-specialist might not know.
  - Keep paragraphs short (4–6 sentences).
  - Cite sources for factual claims.

#### Lesson 4.4 — Writing the Methods Section (2.3 hrs)
**Activity:**
- The methods section must be honest and accessible:
  - What data did you use? Where did it come from? How was it cleaned?
  - What statistical methods did you employ? (Describe in plain language, then give the technical name.)
    - Accessible: "We compared average test scores between funded and underfunded districts using a statistical test that accounts for variation within each group (two-sample t-test)."
    - Not accessible: "We ran a two-sample Welch's t-test with unequal variances."
  - What are the limitations? (Be forthright. Acknowledging limitations increases credibility.)
- Students draft the methods section.
- Key: Methods are often the weakest section in student work. Teacher reviews closely.

---

### Week 2: Findings and Discussion (≈8.3 hours)

#### Lesson 4.5 — Writing the Findings: Integrating Data and Narrative (3.5 hrs)
**Activity:**
- The findings section is the heart of the brief. Each finding follows a pattern:
  1. **State the finding in plain language.** "States that expanded Medicaid saw a larger decline in uninsured rates than states that did not."
  2. **Show the evidence.** Insert the visualization. Reference the key numbers.
  3. **Interpret the evidence.** "This 6.4 percentage-point difference was statistically significant (p < .001), suggesting the policy had a real effect beyond chance."
  4. **Contextualize.** "This finding aligns with prior research by [Author] showing that..."
- R Markdown integration:
```markdown
## Finding 1: Medicaid Expansion Reduced Uninsured Rates

States that expanded Medicaid saw uninsured rates drop by an average
of 6.4 percentage points more than non-expansion states (Figure 1).
This difference was statistically significant
(t(48) = -7.33, p < .001, 95% CI: [-8.1, -4.7]).

{r fig1, echo=FALSE, fig.cap="Figure 1: Change in uninsured rate by Medicaid expansion status"}
ggplot(state_data, aes(x = expanded, y = change_uninsured)) +
  geom_boxplot(fill = c("salmon", "steelblue")) +
  labs(y = "Change in Uninsured Rate (pp)", x = "")
```
- Students draft all findings (typically 3–5 key findings).
- Each finding should correspond to one major visualization.

#### Lesson 4.6 — Writing the Discussion (2 hrs)
**Activity:**
- The discussion answers: "So what?"
  - What do the findings mean for the policy problem?
  - What alternative explanations exist? (Confounders, reverse causation, selection effects.)
  - What are the limitations of this analysis? (Data quality, geographic scope, time period, methodology.)
  - How does this compare to prior research?
  - What questions remain unanswered?
- Writing tone: Thoughtful, honest, analytical. Not defensive about limitations — transparent about them.

#### Lesson 4.7 — Writing the Recommendations (1.5 hrs)
**Activity:**
- Recommendations must be:
  - **Specific:** Not "improve education" but "increase per-pupil funding in the lowest-spending quintile by $1,500."
  - **Actionable:** Who should do this? (Congress, state legislature, school board, agency.)
  - **Evidence-based:** Directly connected to a finding in the brief.
  - **Prioritized:** If a policymaker can only do one thing, which recommendation comes first?
- Students write 2–4 recommendations, each in 2–3 sentences.
- Format: Bold the recommendation statement, then explain the rationale.

#### Lesson 4.8 — Complete First Draft (1.3 hrs)
**Activity:**
- Students assemble all sections into one R Markdown document.
- Add: Title page (title, author, date), table of contents (`toc: true` in YAML), references section.
- Knit to HTML (or PDF if using LaTeX).
- First draft must be submitted to GitHub and shared with the teacher.
- Word count check: 3,000–5,000 words (excluding code and references).

---

### Week 3: Revision (≈8.3 hours)

#### Lesson 4.9 — Peer Review Workshop (3 hrs)
**Activity:**
- Each student's draft is reviewed by 2 classmates using a detailed rubric:
  - [ ] Executive summary captures the full argument in <300 words
  - [ ] Background provides context; problem is clearly defined
  - [ ] Methods are described accessibly and honestly
  - [ ] Each finding is stated in plain language, supported by data, and interpreted
  - [ ] At least 5 visualizations, all well-labeled and relevant
  - [ ] Statistical reporting follows standard format (test, statistic, p, CI)
  - [ ] Discussion addresses limitations honestly
  - [ ] Recommendations are specific, actionable, and evidence-based
  - [ ] Writing is analytical, not editorial
  - [ ] R Markdown knits without errors
  - [ ] 3,000–5,000 words
- Reviewers write: 3 strengths, 3 areas for improvement, 1 question they still have after reading.

#### Lesson 4.10 — Teacher Conferences (3 hrs)
**Activity:**
- 15-minute individual conferences with each student.
- Teacher reviews the draft with specific feedback on:
  - Argument structure: Is the logic clear?
  - Statistical quality: Are tests appropriate and correctly reported?
  - Writing quality: Is the prose clear and analytical?
  - Recommendations: Are they defensible?
  - Missing elements: What needs to be added?
- Students leave with a concrete revision plan.

#### Lesson 4.11 — Substantive Revision (2.3 hrs)
**Activity:**
- Students begin major revisions based on peer and teacher feedback.
- "Substantive revision" means restructuring arguments, rerunning analysis if needed, rewriting weak sections — not just fixing typos.
- Commit the revised version to GitHub with a clear commit message: "Major revision: restructured findings, added robustness check."

---

### Week 4: Polish and Submit (≈10 hours)

#### Lesson 4.12 — Second Draft and Line Editing (3.5 hrs)
**Activity:**
- Students complete the second draft. Focus on:
  - Transitions between sections.
  - Consistent terminology throughout.
  - Every statistic reported correctly with full notation.
  - Figure numbering and captions.
  - Table formatting with `gt` or `kable`.
  - References formatted consistently.

#### Lesson 4.13 — Technical Polish (3 hrs)
**Activity:**
- Final R Markdown polish:
  - `echo = FALSE` for all code chunks.
  - `warning = FALSE`, `message = FALSE` globally.
  - Figure sizes optimized (`fig.width`, `fig.height`).
  - Table of contents functional.
  - Inline code for dynamic statistics (so the brief is truly reproducible).
  - PDF output (if using LaTeX) or polished HTML.
- Test reproducibility: Delete all output, re-knit from scratch. Does everything render correctly?

#### Lesson 4.14 — Final Submission (3.5 hrs)
**Activity:**
- Final read-through. Fix any remaining issues.
- Final knit.
- Push to GitHub with tag: `git tag v1.0-final`.
- Submit to teacher.
- Prepare for Phase 5: The Defense.

---

## Phase 4 Assessment

| Assessment | Type | Points |
|------------|------|--------|
| Brief Outline (structured) | Process | 10 |
| Executive Summary Draft | Process | 15 |
| First Draft (complete, 3,000+ words) | Milestone | 40 |
| Peer Review Participation | Process | 15 |
| Teacher Conference Engagement | Process | 10 |
| Substantive Revision Evidence | Process | 20 |
| Final Policy Brief | Milestone | 100 |
| Reproducibility Check (knits from scratch) | Technical | 15 |
| GitHub Commit History (≥20 commits in Phase 4) | Process | 15 |
| **Total** | | **240** |

---

## Policy Brief Rubric (100 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) | Points |
|-----------|---------------|-----------------|-----------------|----------------|--------|
| **Executive Summary** | Clear, complete, compelling; stands alone | Mostly complete; captures the argument | Vague or incomplete; doesn't stand alone | Missing or incoherent | 10 |
| **Background & Context** | Well-researched; problem clearly defined; relevant literature cited | Adequate context; some literature | Thin context; little literature | Missing or irrelevant | 10 |
| **Data & Methods** | Accessible description; honest limitations; reproducible | Mostly clear; some gaps | Hard to follow; important details missing | Missing or incomprehensible | 10 |
| **Findings** | 4+ findings clearly stated, each supported by data with correct stats; well-integrated visualizations | 3 findings with data support; mostly correct stats | 2 findings; statistical reporting has errors | 1 or fewer findings; weak evidence | 20 |
| **Visualizations** | 5+ polished, well-labeled figures that advance the argument | 4 figures, mostly well-done | 3 figures with labeling issues | Fewer than 3 or poorly made | 10 |
| **Statistical Rigor** | Appropriate tests; correct reporting; robustness checks; limitations acknowledged | Mostly appropriate tests; minor errors | Some tests appropriate; significant errors | Wrong tests or no inference | 15 |
| **Discussion** | Thoughtful; addresses limitations, confounders, alternatives; connects to broader context | Addresses some limitations | Brief or superficial | Missing | 5 |
| **Recommendations** | 2+ specific, actionable, evidence-based, prioritized | Present but somewhat vague | Weak or not connected to evidence | Missing | 10 |
| **Writing Quality** | Analytical tone; clear prose; smooth transitions; professional formatting | Mostly clear; occasional lapses | Uneven; some editorial tone | Unclear or unprofessional | 5 |
| **Reproducibility** | Knits from scratch; all code clean; data dictionary present | Knits with minor issues | Knits but with warnings/errors | Does not knit | 5 |
