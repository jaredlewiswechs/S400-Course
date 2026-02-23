# Assessment Guide — S500 American Systems

## Assessment Philosophy

Assessment in S500 measures whether students can **use government data to evaluate how American systems actually work**. The course values data literacy, analytical writing, and the ability to connect empirical findings to constitutional principles and government structures.

## Grading Structure

| Component | Weight | Description |
|-----------|--------|-------------|
| R Labs & Maps | 30% | Data analysis, geospatial analysis, and API-based labs |
| Policy Analysis Memos | 25% | Written analysis of government data using civic and statistical vocabulary |
| Unit Projects | 30% | Culminating products (maps, reports, accountability report) |
| Participation & Checkpoints | 15% | Discussion, peer review, checkpoint quizzes |

## Unit Assessment Summary

| Unit | Project | Quiz Topics | Total Points |
|------|---------|-------------|--------------|
| 1 | Voter Participation Analysis | Voting rights, ACS, MOE, regression | 200 |
| 2 | Money Trail Report | Budget process, revenue, campaign finance, Congress | 200 |
| 3 | Redistricting Analysis | Area, perimeter, Polsby-Popper, gerrymandering, VRA | 200 |
| 4 | Policy Trace | Three branches, policy cycle, DiD, logical reasoning | 200 |
| 5 | Representative Report Card | Congressional structure, voting records, ideology, funding | 200 |
| 6 | The Accountability Report (Capstone) | Cumulative — all concepts | 200 |
| **Total** | | | **1,200** |

---

## R Lab & Map Rubric (Standard)

| Criterion | 5 (Excellent) | 4 (Proficient) | 3 (Developing) | 2 (Beginning) | 1 (Incomplete) |
|-----------|---------------|-----------------|-----------------|----------------|-----------------|
| **Code Runs** | Code executes without errors; all outputs correct | Code runs with minor warnings | Code runs but some outputs incorrect | Code partially runs | Code does not run |
| **Visualization / Map** | Clear, well-labeled, informative; maps are geographically accurate with appropriate color scales | Readable with minor labeling issues | Exists but missing labels or hard to read | Substantially incomplete | No output |
| **Interpretation** | 2+ sentences accurately connecting output to government concept using proper vocabulary | Interpretation with minor errors | Interpretation present but misses government connection | Attempt but inaccurate | No interpretation |
| **Data Handling** | Data loaded from correct source; joins, filters, and transformations correct | Mostly correct with minor issues | Some correct operations | Minimal handling | No data work |
| **Statistical/Geometric Rigor** | Correct metric reported (r, R², PP, etc.); properly interpreted in context | Metric reported with minor interpretation error | Metric calculated but not interpreted | Incorrect metric | No metric |

**Lab Grading Scale:** Each criterion scored 1–5. Total = 25 points per standard lab.

---

## Policy Analysis Memo Rubric

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Government Reasoning** (40%) | Correctly applies 2+ government concepts (e.g., federalism, separation of powers, voting rights); connects data to how the system works | Identifies concept but applies with minor gaps | Mentions concept but doesn't connect to data | No government concept |
| **Data Evidence** (30%) | Cites specific numbers, r values, trends, or comparisons from the analysis | Cites some data but not specifically | Mentions data vaguely | No data cited |
| **Vocabulary** (15%) | Uses 5+ government and statistical terms accurately | 3–4 terms accurately | 1–2 terms or inaccurate | No vocabulary |
| **Writing Clarity** (15%) | Clear, concise, analytical tone | Mostly clear | Somewhat unclear | Unclear or incomplete |

---

## Checkpoint Quiz Format

Each unit includes one 25-minute checkpoint quiz.

| Section | Questions | Points | Description |
|---------|-----------|--------|-------------|
| Multiple Choice | 5 | 10 | Concept recall: government structures, statistical terms |
| Short Answer | 3 | 9 | Apply concepts: interpret a regression output, explain a government process |
| Data Interpretation | 1 | 6 | Given a chart or map, interpret the political and statistical meaning |
| **Total** | **9** | **25** | |

---

## Project Presentation Rubric (Units 2, 5, 6)

| Criterion | 5 | 4 | 3 | 2 |
|-----------|---|---|---|---|
| **Content Accuracy** | All government and statistical claims correct | Minor inaccuracies | Some errors that weaken argument | Significant errors |
| **Visual Evidence** | Map/chart is clear, relevant, well-integrated | Present and mostly effective | Present but not well-explained | Missing or irrelevant |
| **Organization** | Clear structure; audience follows the logic | Mostly organized | Some structure | No structure |
| **Delivery** | Confident, clear, engages audience | Mostly clear | Reads from notes | Hard to follow |
| **Q&A** | Responds with data or government reasoning | Adequate | Struggles | Cannot respond |

---

## Mapping Rubric (Used for all map-based assignments)

Since S500 introduces geospatial analysis, maps are assessed separately:

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Geographic Accuracy** | Correct geography loaded; boundaries accurate; proper CRS | Minor boundary or projection issues | Correct state/region but some boundary errors | Wrong geography or major errors |
| **Color Scale / Symbology** | Appropriate palette (sequential, diverging, or qualitative as needed); colorblind-friendly; legend present | Readable but suboptimal palette or missing legend | Hard to read; no legend | No meaningful coloring |
| **Labels & Title** | Title states the finding; legend labeled with units; annotations where helpful | Title present; legend present but could be clearer | Missing title or legend | Neither present |
| **Insight** | Map reveals a geographic pattern that supports the analysis | Map is informative but pattern not highlighted | Map shows data but adds little to the argument | Map is decorative, not analytical |

---

## Accommodations and Differentiation

| Student Need | Accommodation |
|-------------|---------------|
| Students who struggle with R | Provide starter code templates with blanks; pair with stronger R users for labs |
| Advanced students | Extend with multi-variable regression, additional API endpoints, or state-comparison analysis |
| ELL students | Provide bilingual vocabulary lists (English/Spanish); government vocabulary is especially important to define clearly |
| Students uncomfortable with political content | Frame all analysis as empirical, not partisan; emphasize "the data shows" not "I believe"; allow students to analyze systems rather than specific representatives |
| Students without internet access at home | Ensure all datasets can be downloaded and cached during class; provide offline R Markdown knitting |
| Students needing extra writing support | Provide paragraph frames for memos and analysis sections; scaffold the R Markdown template with section headers and prompts |

---

## S400 → S500 Skill Progression

| Skill | S400 Level | S500 Level |
|-------|------------|------------|
| R data wrangling | `filter()`, `mutate()`, `group_by()`, `summarize()` | + `left_join()` across multiple sources, API data parsing |
| Visualization | Bar charts, scatterplots, line charts | + Choropleth maps, interactive leaflet maps, treemaps, multi-layer figures |
| Statistics | Correlation (r), trend lines, slope interpretation | + Regression (R², residuals), DiD, chi-square (intuitive), margin of error |
| Geometry | — | Area, perimeter, Polsby-Popper, coordinate geometry, logical reasoning |
| Writing | Data memos, 1-page briefs | Policy analysis, 2–3 page R Markdown reports, accountability reports |
| Data sources | FRED, BLS, Google Sheets, CSV | + tidycensus, ProPublica API, FEC, shapefiles, USAspending |
