# Unit 6 — Capstone: The Country Brief

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Capstone: The Country Brief |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *If a policymaker asked you to brief them on one country using only data, what would you show them?* |
| Geography TEKS | §113.43(c)(4), (6), (12), (13), (14) — cumulative |
| Statistics TEKS | §111.47(c)(4), (5), (6), (7) — cumulative |
| R Skills | Full pipeline: multi-source → wrangle → infer → map → narrate; professional R Markdown with formatted tables, maps, and inferential results |
| Key Deliverable | The Country Brief — a comprehensive data-driven country profile and policy analysis (3+ pages R Markdown) presented to a panel |

## Unit Narrative

The capstone synthesizes everything from S600 — and from S400 and S500 before it. Students choose a country and build a brief that a real policymaker could use: economic profile (GDP trends, trade position, income distribution), health assessment (life expectancy, disease burden, healthcare spending), governance evaluation (regime type, corruption, rule of law), conflict assessment (history, risk factors), and geographic context (physical features, resources, neighbors). Every claim is supported by data. Every data point comes with uncertainty quantified (confidence intervals, p-values, regression output). The brief answers two questions: "Where does this country stand?" and "What should change?" It is the most substantial analytical product students have created in the sequence and serves as the bridge to S700's fully original research project.

## Geography Concepts (Cumulative)

- Physical geography: terrain, climate, resources, natural hazards
- Human geography: population, urbanization, migration, ethnic/linguistic composition
- Economic geography: income, trade, industry, development trajectory
- Political geography: governance, borders, regional relationships, conflict history
- Cultural geography: religion, language, colonial heritage, cultural influences
- Comparative geography: how the country compares to its region and income peers

## Statistics Concepts (Cumulative)

- Descriptive statistics: distributions, center, spread, comparisons
- Inferential statistics: confidence intervals, hypothesis tests, ANOVA
- Regression: simple, multiple, logistic, with interactions
- Model interpretation: coefficients, R², residuals, p-values
- Data quality: missing data, bias, limitations

---

## Lesson Sequence

### Week 1: Country Selection and Data Architecture (≈8.3 hours)

#### Lesson 6.1 — Choosing Your Country (1.5 hrs)
**Activity:**
- Students select a country for their brief. Guidelines:
  - Must have sufficient data in World Bank, WHO, and UCDP databases.
  - Must be a country the student has NOT focused on in a previous unit project.
  - Teacher approval required (to ensure diversity across the class and adequate data availability).
- Students begin with a quick data check: Pull 5 key indicators for their country from `wbstats`. Are they available? What's missing?
- Students write a 1-paragraph rationale: Why this country? What makes it analytically interesting?

#### Lesson 6.2 — Data Architecture: Building the Multi-Source Pipeline (3 hrs)
**R Focus:** Assembling data from 4+ sources
**Activity:**
- Students build a comprehensive country dataset:
  - **World Bank (wbstats):** GDP, income, education, health spending, trade, governance indicators.
  - **WHO:** Health-specific indicators (disease prevalence, vaccination, maternal/child health).
  - **UCDP:** Conflict history (if applicable).
  - **CEPII or UN Comtrade:** Trade partners and composition.
  - **Natural Earth / rnaturalearth:** Shapefile for mapping.
- R lab: Students write a data pipeline script that pulls and joins all sources:
```r
# Pull World Bank data
wb_indicators <- wb_data(
  country = "NGA",  # Example: Nigeria
  indicator = c("NY.GDP.PCAP.CD", "SP.DYN.LE00.IN", "SP.DYN.IMRT.IN",
                "SE.ADT.LITR.ZS", "SH.XPD.CHEX.GD.ZS", "SL.UEM.TOTL.ZS"),
  start_date = 2000, end_date = 2023
)

# Pull trade data, conflict history, etc.
# ... (students build full pipeline)
```
- Teacher check-in: Verify each student's pipeline runs and data is sufficient.

#### Lesson 6.3 — The Country in Context: Regional and Global Comparisons (2 hrs)
**Statistics Focus:** Comparing one country to its region using z-scores and percentiles
**Activity:**
- A country's numbers mean little in isolation. Is Nigeria's GDP per capita of ~$2,000 good or bad? Compared to what?
- R lab: For each indicator, calculate the student's country:
  - Regional rank (among income peers or geographic region).
  - Z-score: How many SDs above/below the regional mean.
  - Percentile: What percentage of countries in the region rank lower.
- Create a radar chart or parallel coordinates plot showing the country across 6 dimensions relative to regional averages.
- Writing exercise: "In which dimensions does [country] outperform its peers? In which does it lag?"

**TEKS:** §111.47(c)(4), §113.43(c)(4)(A), §113.43(c)(6)(A)

#### Lesson 6.4 — The Country Map (1.8 hrs)
**R Focus:** Detailed country-level mapping
**Activity:**
- Build a detailed map of the country:
  - Country boundaries and neighboring countries.
  - Administrative divisions (states/provinces) if available.
  - Overlay: population centers, resources, conflict locations (if applicable).
- For larger countries with subnational data, map an indicator at the state/province level (using `gadm` data or similar).
- Annotations: Mark capital, major cities, key geographic features.
- This map becomes a central figure in the brief.

**TEKS:** §113.43(c)(3)(A), §113.43(c)(4)(A)

---

### Week 2: Analysis and Drafting (≈8.3 hours)

#### Lesson 6.5 — Development Trajectory: Where Has the Country Been? (2 hrs)
**Statistics Focus:** Time-series analysis, trend testing
**Activity:**
- Pull 20+ years of data for key indicators. Create time-series plots:
  - GDP per capita (log scale).
  - Life expectancy.
  - Infant mortality.
  - Literacy rate.
- Annotate major events (regime changes, conflicts, economic reforms, pandemics).
- Regression: Fit a time trend to each indicator. Is the trend statistically significant?
```r
model_trend <- lm(life_exp ~ year, data = country_timeseries)
summary(model_trend)
```
- Interpret: Life expectancy in [country] has increased by approximately ___ years per decade (p = ___).
- Compare the country's trend to its regional average. Is it improving faster or slower?

**TEKS:** §111.47(c)(7), §113.43(c)(6)(A)

#### Lesson 6.6 — Key Hypothesis Test: Testing a Claim About Your Country (2 hrs)
**Statistics Focus:** Applying the appropriate inferential test
**Activity:**
- Each student formulates and tests one hypothesis about their country:
  - "Is life expectancy in [country] significantly below the regional mean?" (One-sample t-test.)
  - "Is the gender gap in literacy significant?" (Two-sample t-test or proportion test.)
  - "Is conflict incidence associated with oil production in [region]?" (Chi-square or logistic regression.)
  - "Does healthcare spending predict infant mortality, controlling for income, in [country's] region?" (Multiple regression.)
- Students choose the appropriate test, state hypotheses, run the test, and interpret results with full statistical notation.
- Write a "Statistical Finding" paragraph for the brief: test, statistic, p-value, CI, interpretation in context.

**TEKS:** §111.47(c)(5), §111.47(c)(6), §111.47(c)(7)

#### Lesson 6.7 — Writing the Country Brief (2.5 hrs)
**Activity:**
- Students draft the narrative sections of the brief:
  1. **Executive Summary** (1 paragraph): The country in one paragraph — where it stands and what matters most.
  2. **Geographic Context** (1 paragraph): Physical and human geography. Location, terrain, climate, population, urbanization.
  3. **Economic Profile** (1–2 paragraphs + visualizations): GDP trends, trade position, income distribution. How does the economy compare to peers?
  4. **Health Assessment** (1 paragraph + visualizations): Life expectancy, child mortality, disease burden, healthcare spending. Key health challenge identified.
  5. **Governance and Stability** (1 paragraph + visualization): Regime type, governance scores, conflict history (if applicable).
  6. **Statistical Analysis** (1 paragraph): The hypothesis test from Lesson 6.6 with full results.
  7. **Policy Recommendation** (1 paragraph): Based on the data, what is the highest-priority issue and what should be done?
- Minimum 3 pages of R Markdown output (narrative + visualizations).
- At least 6 R-generated visualizations (map, time series, scatterplot, bar chart, table, and one other).
- At least 8 geography vocabulary terms and 5 statistics vocabulary terms.

#### Lesson 6.8 — Technical Polish (1.5 hrs)
**Activity:**
- Code review: R Markdown knits without errors.
- All figures have captions, titles, and labeled axes.
- Tables use `gt` or `kable` formatting.
- Inline code for dynamic statistics.
- Consistent formatting throughout.

---

### Week 3: Revision, Presentation, Reflection (≈8.3 hours)

#### Lesson 6.9 — Peer Review Workshop (2 hrs)
**Activity:**
- Peer review in groups of 3. Full checklist:
  - [ ] Executive summary captures the key story
  - [ ] Geographic context is accurate and relevant
  - [ ] Economic, health, and governance sections each have visualizations
  - [ ] At least one formal hypothesis test with full statistical reporting
  - [ ] World/country map is included and informative
  - [ ] Confidence intervals or p-values reported where appropriate
  - [ ] Policy recommendation is specific and data-supported
  - [ ] 8+ geography terms and 5+ statistics terms used correctly
  - [ ] R Markdown knits cleanly
  - [ ] At least 6 visualizations
- Written feedback: 2 strengths, 2 improvements.

#### Lesson 6.10 — Revision (2 hrs)
**Activity:**
- Revise based on peer and teacher feedback.
- Final knit and submission.

#### Lesson 6.11 — Panel Presentations: The Country Brief (3 hrs)
**Activity:**
- Each student presents their Country Brief (6 minutes + 3 minutes Q&A):
  - Where does this country stand? (Key indicators, context.)
  - What story does the data tell? (Trends, comparisons, hypothesis test.)
  - What should change? (Policy recommendation.)
- Audience: Classmates + invited panel (other teachers, community members, or via video).
- Scoring: Teacher (50%), Peer (25%), Panel (25%).

#### Lesson 6.12 — Course Reflection: From Houston to the World (1 hrs)
**Activity:**
- Reflection: "You started S400 looking at your personal budget. Now you've analyzed a country. How has your understanding of data, statistics, and social science changed? What tools will you carry forward?"
- Preview S700: The Capstone course. You will choose your own research question, conduct original analysis, and defend a professional policy brief before an external panel.
- Portfolio: Compile best work from S600 alongside S400 and S500 portfolios.

**TEKS:** §113.43(c)(12–14)

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Country Selection Rationale | Practice | 10 |
| Data Pipeline Check | Lab | 15 |
| Regional Comparison (z-scores) | Lab | 20 |
| Country Map | Lab | 20 |
| Time-Series Trend Analysis | Lab | 20 |
| Hypothesis Test Paragraph | Lab | 25 |
| Peer Review Participation | Participation | 15 |
| Country Brief (R Markdown Report) | Project | 75 |
| Panel Presentation | Project | 40 |
| **Total** | | **240** |

## Country Brief Rubric (Detailed)

### R Markdown Report (75 points)

| Criterion | Excellent (A) | Proficient (B) | Developing (C) | Beginning (D) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Geographic Context** (10 pts) | Accurate physical and human geography; relevant to the analysis | Mostly accurate with minor gaps | Some geographic content but superficial | Little/no geographic context |
| **Data Breadth** (10 pts) | 4+ data sources; 6+ indicators; comprehensive country profile | 3 sources; 4–5 indicators | 2 sources; 3 indicators | 1 source; limited data |
| **Visualizations** (15 pts) | 6+ polished visualizations including map, time series, scatterplot, and table; all well-labeled | 5 visualizations with minor issues | 3–4 visualizations | Fewer than 3 |
| **Statistical Rigor** (15 pts) | Formal hypothesis test with H₀/Hₐ, test statistic, p-value, CI; regression with interpreted coefficients; correct methodology | Test present with minor reporting gaps | Some statistical analysis but incomplete | Little or no inference |
| **Regional Comparison** (8 pts) | Country contextualized with z-scores, percentiles, or peer comparisons | Some comparison to peers | Minimal comparison | No comparison |
| **Policy Recommendation** (7 pts) | Specific, data-supported, realistic | Present but vague | Weak or unsupported | Missing |
| **Writing & Vocabulary** (10 pts) | 8+ geography and 5+ statistics terms; analytical tone; well-structured | 6+ geo, 4+ stats terms | 3+ of each | Few terms |

### Presentation (40 points)

| Criterion | Points |
|-----------|--------|
| Clarity and structure | 10 |
| Visual evidence integration | 10 |
| Statistical reporting | 10 |
| Q&A responses | 10 |

## Key Vocabulary (Cumulative)

All vocabulary from Units 1–5, plus: country brief, executive summary, policy recommendation, z-score (applied), percentile rank, time trend, regional peer, subnational data, data pipeline, multi-source analysis, radar chart, parallel coordinates
