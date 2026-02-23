# Unit 6 — Capstone: The Accountability Report

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Capstone: The Accountability Report |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *If you had to explain to your community how their government is performing — with data — what would you show them?* |
| Government TEKS | §113.44(c)(8), (17), (18), (19) — plus cumulative review |
| Statistics TEKS | §111.47(c)(2), (4), (7) — cumulative application |
| Geometry TEKS | §111.41(c)(5) — logical reasoning |
| R Skills | Full pipeline: API → wrangle → analyze → map → narrate; polished R Markdown report with interactive maps, tables, and charts |
| Key Deliverable | The Accountability Report — a comprehensive, data-driven assessment of a government system, policy area, or elected body, presented to a public audience |

## Unit Narrative

The capstone integrates everything. Students choose a question that matters to their community and build the most rigorous analysis they've done in the two-course sequence. The S400 capstone was about economic arguments; the S500 capstone is about government accountability. Students must combine multiple data sources (Census, ProPublica, FRED, state agencies), multiple R skills (mapping, regression, API calls, time series), and multiple government concepts (federalism, separation of powers, representation, rights). The deliverable is a professional-quality R Markdown report with interactive maps, publication-quality tables, and clear narrative. The course ends as it began: with the question of who participates in democracy. Now students have the tools to participate as informed, data-literate citizens.

## Government Concepts (Cumulative)

All concepts from Units 1–5 are available for application:
- Voting and participation (Unit 1)
- Federal budget, campaign finance, Congressional structure (Unit 2)
- Redistricting, gerrymandering, geographic representation (Unit 3)
- Policy evaluation, three branches, separation of powers (Unit 4)
- Congressional voting records, ideology, accountability (Unit 5)
- Civic duty, rights and responsibilities, informed citizenship (cross-cutting)

## Statistics Concepts (Cumulative)

- Descriptive statistics: means, medians, proportions, distributions
- Bivariate analysis: scatterplots, correlation, regression, R²
- Difference-in-differences for policy evaluation
- Sampling and margin of error
- Logical reasoning: if-then arguments tested with data

## Geometry Concepts (Cumulative)

- Geospatial analysis: area, perimeter, compactness
- Mapping: choropleth maps, interactive leaflet maps
- Logical reasoning and proof: constructing valid arguments from evidence

---

## Lesson Sequence

### Week 1: Framing the Question (≈8.3 hours)

#### Lesson 6.1 — What Does Accountability Look Like? (2 hrs)
**Activity:**
- Discussion: What does it mean to hold government accountable? Who does it? (Media, voters, watchdog organizations, courts, other branches of government.)
- Examples of real accountability reports:
  - ProPublica investigations
  - Government Accountability Office (GAO) reports
  - City council budget analyses
  - Redistricting litigation evidence
- Students examine one example report (teacher-selected, excerpted). What makes it convincing? (Data, multiple sources, clear analysis, specific findings.)
- Brainstorm: What government system, policy, or representative do you want to investigate?

**TEKS:** §113.44(c)(8)(B–C), §113.44(c)(17)

#### Lesson 6.2 — Choosing Your Topic and Scope (1.5 hrs)
**Activity:**
- Students choose from three capstone tracks:

**Track A: System Accountability**
Evaluate a government system:
- How representative is the Texas state legislature? (Demographic comparison, gerrymandering analysis, competitive vs. safe seats.)
- How equitable is the Texas criminal justice system? (Sentencing data, incarceration rates by race/county, access to legal representation.)
- How well does federalism work for education? (Compare state-by-state funding, outcomes, and federal role.)

**Track B: Policy Accountability**
Evaluate a specific policy (building on Unit 4):
- Has the ACA achieved its goals 10+ years later?
- Is Texas's property tax system fair?
- Has criminal justice reform reduced incarceration without increasing crime?

**Track C: Representative Accountability**
Evaluate an elected body (building on Unit 5):
- How does the full Texas congressional delegation serve the state? (Aggregate analysis of voting, funding, ideology, constituent services.)
- How responsive is the Houston City Council to different neighborhoods?
- Compare two representatives from different states/parties on a common issue.

- Students submit a 1-paragraph proposal: Topic, research question, data sources, government concepts.
- Teacher approves or suggests modifications.

**TEKS:** §113.44(c)(17), §113.44(c)(18)

#### Lesson 6.3 — Multi-Source Data Architecture (2.5 hrs)
**R Focus:** Planning and building a multi-source data pipeline
**Activity:**
- The capstone requires at least 3 different data sources. Students plan their data architecture:
  - Source 1: ___ (e.g., tidycensus for demographics)
  - Source 2: ___ (e.g., ProPublica API for congressional data)
  - Source 3: ___ (e.g., FRED for economic indicators, or state agency data)
  - How will they be joined? (By geography? By time? By representative ID?)
- R lab: Students write the data pipeline:
```r
# Example pipeline for Texas delegation analysis
library(tidyverse)
library(tidycensus)
library(httr)
library(jsonlite)
library(sf)
library(leaflet)

# Source 1: District demographics
district_demo <- get_acs(
  geography = "congressional district",
  state = "TX",
  variables = c(median_income = "B19013_001",
                pct_bachelors = "B15003_022"),
  year = 2022
)

# Source 2: Member data from ProPublica
# (students write API loop for all TX members)

# Source 3: Election results
results <- read_csv("tx_election_results.csv")

# Join by district
combined <- district_demo %>%
  left_join(member_data, by = "district") %>%
  left_join(results, by = "district")
```
- Students verify each data source loads and the joins work correctly.

**TEKS:** §111.47(c)(2)

#### Lesson 6.4 — Mapping for Accountability (2.3 hrs)
**R Focus:** Review and extend `sf`/`leaflet` mapping; choropleth maps for the capstone
**Activity:**
- Many capstone topics benefit from maps. Review:
  - Loading shapefiles with `tigris`
  - Joining data to shapefiles
  - Choropleth maps with `ggplot() + geom_sf()`
  - Interactive maps with `leaflet`
- New skill: Multi-layer maps (e.g., district boundaries + point data for funding, or county boundaries + graduated symbols):
```r
leaflet() %>%
  addTiles() %>%
  addPolygons(data = tx_districts,
              fillColor = ~pal(some_variable),
              fillOpacity = 0.6,
              weight = 1,
              label = ~district_label) %>%
  addCircleMarkers(data = point_data,
                   radius = ~sqrt(value) / 10,
                   label = ~name)
```
- Students create at least one map for their capstone and iterate on design.

**TEKS:** §111.41(c)(2), §111.47(c)(2)

---

### Week 2: Analysis and Drafting (≈8.3 hours)

#### Lesson 6.5 — Exploratory Analysis (2.5 hrs)
**Activity:**
- Students conduct exploratory data analysis for their topic:
  - Summary statistics for all key variables
  - At least 3 "quick look" visualizations (histograms, scatterplots, maps, box plots)
  - Preliminary correlation/regression for bivariate relationships
  - Identify patterns, outliers, and unexpected findings
- Teacher check-in: Each student shares their EDA and top preliminary finding.

**TEKS:** §111.47(c)(2), §111.47(c)(7)

#### Lesson 6.6 — Building the Key Analyses (2.5 hrs)
**Activity:**
- Each Accountability Report needs at least 5 polished data products:
  1. **A map** (choropleth or interactive) showing geographic variation
  2. **A regression or correlation analysis** with scatterplot, trend line, and r/R²
  3. **A time-series comparison** (before/after, or trend over time)
  4. **A comparison table** (using `gt` or `kable`) with publication-quality formatting
  5. **One additional analysis** of the student's choice (box plots, DiD, efficiency gap, treemap, etc.)
- Students build all five. Focus on:
  - Titles that state the finding
  - Labeled axes with units
  - Consistent color schemes
  - Annotations where helpful
- Peer review in pairs: Check for clarity, accuracy, and persuasiveness.

**TEKS:** §111.47(c)(2), §111.47(c)(7)

#### Lesson 6.7 — Writing the Accountability Report (2 hrs)
**Activity:**
- Students write the narrative sections of their R Markdown report:
  1. **Executive Summary** (1 paragraph): Key finding in plain language. If someone reads nothing else, they read this.
  2. **Background** (1–2 paragraphs): What is the system/policy/body being evaluated? Why does it matter? Relevant government concepts.
  3. **Data and Methods** (1 paragraph): What data sources did you use? How did you analyze them? What are the limitations?
  4. **Findings** (2–3 paragraphs, with embedded visualizations): Present each analysis with interpretation. Use specific numbers. Connect to government concepts.
  5. **Accountability Assessment** (1–2 paragraphs): Is the system/policy/representative performing well? By what standard? What would improvement look like?
  6. **Recommendations** (1 paragraph): Based on the data, what should change? Be specific and realistic.
- Writing standards:
  - Analytical tone throughout
  - At least 10 government vocabulary terms used correctly
  - Every claim supported by data
  - Limitations acknowledged explicitly
  - At least one counterargument addressed

**TEKS:** §113.44(c)(17), §113.44(c)(18), §113.44(c)(19)

#### Lesson 6.8 — Technical Polish (1.3 hrs)
**R Focus:** Final document quality
**Activity:**
- Code review: Does the R Markdown document knit without errors?
- Polish checklist:
  - All code chunks set to `echo = FALSE` (hide code in final output)
  - `warning = FALSE`, `message = FALSE` for clean output
  - Figure captions and sizes adjusted
  - Table formatting with `gt` or `kable` (not raw R output)
  - Interactive maps render correctly
  - Inline code for dynamic statistics
- Students finalize and knit.

---

### Week 3: Revision, Presentation, Reflection (≈8.3 hours)

#### Lesson 6.9 — Peer Review Workshop (2 hrs)
**Activity:**
- Structured peer review in groups of 3. Each student reads two classmates' reports.
- Review rubric:
  - [ ] Executive summary clearly states the key finding
  - [ ] At least 3 government concepts applied correctly
  - [ ] At least 5 data products (map, regression, time series, table, one more)
  - [ ] Map is informative and well-designed
  - [ ] Regression/correlation includes r or R² with interpretation
  - [ ] Data from at least 3 sources
  - [ ] Limitations acknowledged
  - [ ] Counterargument addressed
  - [ ] 10+ government vocabulary terms used correctly
  - [ ] R Markdown knits cleanly
  - [ ] Recommendations are specific and data-supported
- Written feedback: 2 strengths, 2 areas for improvement.

#### Lesson 6.10 — Revision (2 hrs)
**Activity:**
- Students revise based on peer feedback.
- Teacher holds 3-minute individual conferences.
- Final knit and submission.

#### Lesson 6.11 — Public Presentations: The Accountability Report (3 hrs)
**Activity:**
- Each student presents their Accountability Report (6 minutes + 3 minutes Q&A):
  - State the question and why it matters.
  - Show the map and 2 key visualizations.
  - Present the main finding.
  - State the accountability assessment.
  - Give one specific recommendation.
- Audience: Classmates + invited guests (other teachers, community members, local officials if possible).
- Scoring: Teacher rubric (50%) + Peer evaluation (25%) + Guest evaluation (25%, if applicable).

#### Lesson 6.12 — Course Reflection and Looking Forward (1.3 hrs)
**Activity:**
- Reflection writing: "Over the S400–S500 sequence, you've analyzed economic and government data. What did you learn about how these systems actually work — not how they're supposed to work, but how the data shows they work? What will you do with this knowledge?"
- Portfolio assembly: Students compile their best work from S400 and S500 into a comprehensive portfolio.
- Discussion: What question do you still want to answer? What data would you need?
- Full circle: Return to the opening question from Unit 1: "Who votes?" Now students can give a data-driven answer — and they understand why the answer matters.
- Course evaluation: Anonymous student feedback.

**TEKS:** §113.44(c)(8)(B–C), §113.44(c)(17–19)

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Capstone Proposal | Practice | 10 |
| Data Architecture Plan | Lab | 15 |
| EDA (Exploratory Analysis) | Lab | 20 |
| Draft Visualizations (5 products) | Lab | 30 |
| Peer Review Participation | Participation | 15 |
| Final R Markdown Report | Project | 75 |
| Public Presentation | Project | 35 |
| **Total** | | **200** |

## Capstone Project Rubric (Detailed)

### R Markdown Report (75 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Question & Scope** (8 pts) | Clear, specific, significant accountability question with well-defined scope | Clear question, mostly well-scoped | Vague question or poorly scoped | No clear question |
| **Government Concepts** (12 pts) | 3+ government concepts applied accurately and substantively; connects to constitutional principles | 2 concepts applied correctly | 1 concept or with errors | Concepts absent or incorrect |
| **Data Sources** (10 pts) | 3+ credible sources, well-joined; data limitations acknowledged | 3 sources with minor join issues | 2 sources or significant issues | Fewer than 2 sources |
| **Map** (10 pts) | Informative, well-designed map (choropleth or interactive) that reveals a geographic pattern | Map present and functional with minor design issues | Map present but poorly designed or uninformative | No map |
| **Statistical Analysis** (12 pts) | Regression with interpreted r/R², time-series comparison, and at least one additional analysis; all correctly executed | Most analyses correct with minor issues | Some analyses present but with significant errors | Little or no statistical analysis |
| **Accountability Assessment** (10 pts) | Evidence-based assessment with specific standard of evaluation; counterargument addressed; limitations noted | Assessment present with some evidence | Weak assessment without clear evidence | No assessment |
| **Recommendations** (5 pts) | Specific, realistic, data-supported recommendations | Recommendations present but vague | Weak recommendations | No recommendations |
| **Writing & Vocabulary** (8 pts) | Analytical tone; 10+ government terms; every claim supported; clean prose | 7–9 terms; mostly analytical | 4–6 terms; some editorial tone | Fewer than 4 terms |

### Presentation (35 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Clarity & Structure** (10 pts) | Clear narrative: question → data → finding → assessment → recommendation | Mostly clear with minor gaps | Somewhat hard to follow | Disorganized |
| **Visual Evidence** (10 pts) | Map and key charts effectively integrated; specific numbers cited | Visuals present and referenced | Visuals shown but not well-explained | No visual evidence |
| **Accountability Argument** (10 pts) | Compelling, evidence-based assessment of performance | Adequate assessment | Weak or unsupported assessment | No assessment |
| **Q&A** (5 pts) | Responds with data, government concepts, or nuanced reasoning | Adequate response | Struggles | Cannot respond |

---

## Key Vocabulary (Cumulative)

All vocabulary from Units 1–5, plus: accountability, executive summary, data pipeline, multi-source analysis, choropleth map, interactive map, policy recommendation, standard of evaluation, civic engagement, informed citizenship, data literacy, transparency, government accountability, GAO, watchdog, civic duty
