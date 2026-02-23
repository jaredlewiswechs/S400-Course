# Assessment Guide — S600 Global Patterns

## Assessment Philosophy

S600 is a full-credit (1.0) course with near-complete Statistics coverage. Assessment reflects this rigor: students must demonstrate both geographic understanding and statistical fluency. Every major assessment requires inferential statistics (confidence intervals, hypothesis tests, or regression with p-values) — not just descriptive analysis.

## Grading Structure

| Component | Weight | Description |
|-----------|--------|-------------|
| R Labs & Inference Exercises | 30% | Data analysis, hypothesis testing, and visualization labs |
| Geographic Analysis Memos | 25% | Written interpretations connecting data to geographic/development concepts |
| Unit Projects | 30% | Culminating products (dashboards, network analyses, country briefs) |
| Participation & Checkpoints | 15% | Discussion, peer review, checkpoint quizzes |

## Unit Assessment Summary

| Unit | Project | Key Stats Concepts Assessed | Total Points |
|------|---------|---------------------------|--------------|
| 1 | Country Measurement Dashboard | Distributions, normal model, z-scores, log transform | 200 |
| 2 | Development Factor Analysis | CLT, CI, t-test, p-value, Type I/II, multiple regression | 200 |
| 3 | Trade Network Analysis | Gravity model (log-log regression), network metrics, residuals | 200 |
| 4 | Global Health Investigation | Conditional prob, chi-square, ANOVA, interactions, CI for proportions | 200 |
| 5 | Conflict Risk Assessment | Logistic regression, t-test, spatial analysis | 200 |
| 6 | Country Brief (Capstone) | Cumulative — all inference tools | 240 |
| **Total** | | | **1,240** |

---

## Inference Exercise Rubric

New for S600: dedicated inference exercises that assess statistical reasoning.

| Criterion | 5 (Excellent) | 4 (Proficient) | 3 (Developing) | 2 (Beginning) |
|-----------|---------------|-----------------|-----------------|----------------|
| **Hypothesis Formulation** | H₀ and Hₐ stated correctly in words and symbols; appropriate test identified | H₀/Hₐ stated with minor notation error; correct test | H₀/Hₐ vague or partially incorrect; somewhat appropriate test | No clear hypotheses |
| **Test Execution** | R code runs correctly; test statistic, df, and p-value reported | Code runs; most output reported | Code runs with errors; incomplete reporting | Code doesn't run |
| **Interpretation** | Correct decision (reject/fail to reject); interpreted in context with geographic meaning; CI reported | Correct decision; some context | Correct decision but no context | Incorrect decision |
| **Limitations** | Discusses confounders, data quality, or Type I/II error risk | Mentions one limitation | Brief mention | No limitations |

---

## Checkpoint Quiz Format (Enhanced for S600)

Each unit includes one 25–30 minute quiz with heavier statistical content than S400–S500.

| Section | Questions | Points | Description |
|---------|-----------|--------|-------------|
| Multiple Choice | 5 | 10 | Concept recall: distributions, test types, geographic patterns |
| Statistical Calculation | 3 | 12 | Calculate CI, z-score, chi-square, or interpret regression output |
| Interpretation | 1 | 8 | Given R output, interpret the results in geographic context |
| **Total** | **9** | **30** | |

---

## Statistical Reporting Standards

Starting in S600, all student work must follow standard statistical reporting format:

### For Hypothesis Tests:
> "Mean life expectancy in Sub-Saharan Africa (M = 61.3, SD = 6.8) was significantly lower than in South Asia (M = 70.1, SD = 4.2), t(78) = -6.42, p < .001, 95% CI for the difference: [-11.5, -6.1]."

### For Regression:
> "Each additional year of schooling was associated with a $2,340 increase in GDP per capita (b = 2340, SE = 420, p < .001), controlling for rule of law. The model explained 67% of the variation (R² = .67)."

### For Chi-Square:
> "Region and mortality category were not independent, χ²(6) = 45.3, p < .001. Sub-Saharan Africa had significantly more high-mortality countries than expected."

---

## Accommodations and Differentiation

| Student Need | Accommodation |
|-------------|---------------|
| Students struggling with inference | Provide formula cards; allow open-note quizzes; extra practice with worked examples |
| Advanced students | Extend with multiple regression (3+ variables), logistic regression diagnostics, or bootstrap methods |
| ELL students | Provide statistical vocabulary in English and Spanish; focus on interpretation over notation |
| Sensitive topics (conflict, health disparities) | Frame all analysis as aimed at understanding and prevention; allow alternative topics within the same statistical framework |
| Students needing writing support | Provide paragraph templates for statistical reporting; model the "results paragraph" structure |

---

## S400 → S500 → S600 Statistical Progression

| Concept | S400 Level | S500 Level | S600 Level |
|---------|------------|------------|------------|
| Distributions | Histograms, skewness | Boxplots, comparing groups | Normal model, z-scores, empirical rule |
| Correlation | `cor()`, scatterplots | r, R², trend lines | Correlation matrices, log-transformed correlations |
| Regression | Simple linear (`lm`) | Simple + residuals | Multiple, logistic, interactions |
| Inference | — | Chi-square (intuitive), MOE | CI, t-test, formal chi-square, ANOVA, p-values, Type I/II |
| Probability | — | — | Conditional probability, independence |
| Data sources | FRED, BLS, local | Census, ProPublica API | World Bank, WHO, UCDP, CEPII |
| Visualization | Bar, scatter, line | + choropleth, leaflet, treemap | + network graphs, correlation matrices, world choropleths |
