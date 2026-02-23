# Phase 3 — Analysis Sprint

## Phase Overview

| Field | Detail |
|-------|--------|
| Phase | 3 of 6 |
| Title | Analysis Sprint |
| Duration | 35 hours (~4 weeks) |
| Driving Question | *What does the data actually say — and how confident should you be in the answer?* |
| Key Deliverable | Analysis Package — complete statistical analysis with all models, tests, and visualizations ready for the brief |

## Phase Narrative

This is the analytical core of the project. Students have clean data and a research question; now they answer it. The phase follows a disciplined sequence: descriptive analysis → bivariate analysis → inferential testing → regression modeling → robustness checks. Students are not learning new statistical methods — they are deploying everything from S400–S600 on their own question, with their own data, for the first time. The teacher's role shifts from instructor to research advisor: guiding methodology choices, questioning assumptions, and pushing students to interrogate their own findings. Weekly check-ins and a methodology peer review ensure quality.

## Learning Objectives

- Execute a complete statistical analysis from descriptive through inferential
- Choose appropriate tests and models based on variable types and research design
- Interpret all output in substantive (not just statistical) terms
- Conduct robustness checks: sensitivity analysis, alternative specifications, outlier influence
- Document all analytical decisions in reproducible R scripts

---

## Lesson Sequence

### Week 1: Descriptive and Bivariate Analysis (≈8.3 hours)

#### Lesson 3.1 — Descriptive Statistics: Characterizing Your Data (3 hrs)
**Activity:**
- Students produce a complete descriptive analysis of their key variables:
  - Distributions: histograms, density plots, Q-Q plots (for normality checking).
  - Center and spread: mean, median, SD, IQR.
  - Comparisons: boxplots or density plots by group (if applicable).
  - Maps: choropleth if geographic.
- Summary statistics table (publication-quality with `gt`):
```r
library(gt)

analysis_data %>%
  summarize(
    across(c(outcome_var, predictor1, predictor2),
           list(mean = ~mean(.x, na.rm = TRUE),
                sd = ~sd(.x, na.rm = TRUE),
                median = ~median(.x, na.rm = TRUE),
                n = ~sum(!is.na(.x))))
  ) %>%
  pivot_longer(everything()) %>%
  gt() %>%
  tab_header(title = "Descriptive Statistics")
```
- Normality assessment: Is the outcome variable approximately normal? If not, should you transform it (log)? This affects which tests are appropriate.
- Commit analysis script to GitHub.

#### Lesson 3.2 — Bivariate Exploration (2.5 hrs)
**Activity:**
- For each predictor-outcome pair, students create:
  - Scatterplot (continuous × continuous) with trend line.
  - Boxplot (categorical × continuous).
  - Contingency table and mosaic plot (categorical × categorical).
- Calculate correlation (r) for all continuous pairs.
- Identify the 3 strongest bivariate relationships. Are they in the expected direction?
- Identify any surprising findings. These may be more interesting than the expected ones.

#### Lesson 3.3 — Weekly Check-In #1: Descriptive Findings (2.8 hrs)
**Activity:**
- Each student presents 3-minute descriptive findings to a small group (4–5 students + teacher).
- Format: "Here's what my data looks like. Here are the strongest patterns. Here's what surprised me."
- Teacher feedback: Is the descriptive work complete? Are there variables or comparisons being overlooked?
- Peers ask: "Have you checked ___?" "What about controlling for ___?"

---

### Week 2: Inferential Testing (≈8.3 hours)

#### Lesson 3.4 — Choosing the Right Test (2 hrs)
**Activity:**
- Decision framework:

| Question Type | Outcome | Predictor | Test |
|--------------|---------|-----------|------|
| Difference between 2 groups | Continuous | Categorical (2 levels) | Two-sample t-test |
| Difference among 3+ groups | Continuous | Categorical (3+ levels) | ANOVA |
| Association between categories | Categorical | Categorical | Chi-square test |
| Relationship between continuous | Continuous | Continuous | Correlation / regression |
| Predicting a binary outcome | Binary | Continuous/categorical | Logistic regression |
| Predicting a continuous outcome | Continuous | Multiple | Multiple regression |

- Students map their research question to 1–3 appropriate tests.
- Teacher consultation: Confirm the choice. Discuss assumptions (normality for t-test, independence for chi-square, linearity for regression).

#### Lesson 3.5 — Running Formal Tests (3.5 hrs)
**Activity:**
- Students execute their planned inferential analyses:
```r
# Example: Two-sample t-test
t_result <- t.test(outcome ~ group, data = analysis_data)

# Example: ANOVA
anova_result <- aov(outcome ~ factor_variable, data = analysis_data)
summary(anova_result)
TukeyHSD(anova_result)

# Example: Chi-square
chisq_result <- chisq.test(table(analysis_data$cat1, analysis_data$cat2))

# Example: Multiple regression
model <- lm(outcome ~ predictor1 + predictor2 + predictor3, data = analysis_data)
summary(model)
confint(model)
```
- For each test, students write a formal results paragraph following the S600 reporting standard:
  > "Countries that expanded Medicaid (M = 8.2%, SD = 2.1%) had significantly lower uninsured rates than non-expansion states (M = 14.6%, SD = 3.8%), t(48) = -7.33, p < .001, 95% CI for the difference: [-8.1, -4.7]."
- All results documented in the analysis script. Committed to GitHub.

#### Lesson 3.6 — Weekly Check-In #2: Inferential Results (2.8 hrs)
**Activity:**
- Students present their test results to small groups.
- Focus: "Here's what I tested. Here's what I found. Here's what I'm not sure about."
- Teacher and peer questions: "Did you check the assumptions?" "Is that effect practically significant or just statistically significant?" "What confounders remain?"

---

### Week 3: Regression Modeling (≈8.3 hours)

#### Lesson 3.7 — Building the Regression Model (3.5 hrs)
**Activity:**
- Most S700 projects should include at least one multiple regression model.
- Model-building process:
  1. Start with the primary predictor and outcome (simple regression).
  2. Add control variables one at a time. Watch how coefficients change (confounding detection).
  3. Check for interactions if theoretically motivated.
  4. Report the final model.
- Students build a model specification table:

| Model | Variables | R² | Key Finding |
|-------|-----------|-----|-------------|
| 1 (Simple) | Y ~ X₁ | .32 | X₁ significant, b = ... |
| 2 (+ control) | Y ~ X₁ + X₂ | .48 | X₁ coefficient shrinks → confounding |
| 3 (+ interaction) | Y ~ X₁ * X₃ + X₂ | .52 | Interaction significant → effect of X₁ depends on X₃ |

- Students create a regression table with `broom::tidy()`:
```r
library(broom)
tidy(model, conf.int = TRUE) %>%
  gt() %>%
  tab_header(title = "Regression Results: Predicting [Outcome]") %>%
  fmt_number(columns = where(is.numeric), decimals = 3)
```

#### Lesson 3.8 — Residual Diagnostics (2 hrs)
**Activity:**
- Regression makes assumptions. Students check them:
  1. **Linearity:** Residual vs. fitted plot. Should show no pattern.
  2. **Normality of residuals:** Q-Q plot of residuals.
  3. **Constant variance (homoscedasticity):** Residuals should have constant spread.
  4. **Influential points:** Cook's distance — any single observation driving the results?
```r
par(mfrow = c(2, 2))
plot(model)
```
- Students identify any violations and decide how to address them (transformation, outlier removal with justification, robust standard errors).
- Document all diagnostics in the analysis script with comments explaining decisions.

#### Lesson 3.9 — Weekly Check-In #3: Regression Results (2.8 hrs)
**Activity:**
- Students present their regression models and diagnostics.
- Focus: "Here's my model. Here's what the coefficients mean. Here's what the diagnostics show."
- Teacher and peer push: "Is R² meaningful in your context?" "What's the practical significance of that coefficient?" "Have you tried an alternative specification?"

---

### Week 4: Robustness and Visualization (≈10 hours)

#### Lesson 3.10 — Robustness Checks and Sensitivity Analysis (3 hrs)
**Activity:**
- A strong analysis shows that the results hold under different assumptions.
- Common robustness checks:
  1. **Outlier sensitivity:** Remove the most influential observations. Do results hold?
  2. **Alternative specification:** Use a different functional form (log vs. linear). Same conclusion?
  3. **Subsample analysis:** Does the result hold for different subgroups (regions, income levels)?
  4. **Alternative variable:** Use a different measure of the same concept. Same direction?
- Students run at least 2 robustness checks and document the results.
- Write a "Robustness" paragraph: "The main finding is robust to [check 1] and [check 2]. However, when [limitation], the result weakens, suggesting [interpretation]."

#### Lesson 3.11 — Publication-Quality Visualizations (3.5 hrs)
**Activity:**
- Students create the final versions of all visualizations for the brief:
  - Every visualization must have a clear, descriptive title (stating the finding).
  - Labeled axes with units.
  - Appropriate color scheme (colorblind-friendly).
  - Legend where needed.
  - Annotations for key data points.
  - Consistent theme across all figures.
- Students should have at least 5 polished visualizations ready for the brief.
- Use `ggsave()` to export high-resolution figures.

#### Lesson 3.12 — Analysis Package Submission (3.5 hrs)
**Activity:**
- Students compile and submit the complete Analysis Package:
  1. **analysis_descriptive.R** — All descriptive statistics and exploratory plots.
  2. **analysis_inferential.R** — All hypothesis tests with results.
  3. **analysis_regression.R** — All regression models, diagnostics, robustness checks.
  4. **analysis_visualizations.R** — All publication-quality figures.
  5. **Analysis Summary** (1–2 pages R Markdown):
     - Key descriptive findings.
     - Inferential results (with full statistical reporting).
     - Regression results (model table, coefficient interpretation).
     - Robustness check results.
     - Preliminary conclusions.
- All committed to GitHub.
- Teacher review and feedback before Phase 4 (writing).

---

## Phase 3 Assessment

| Assessment | Type | Points |
|------------|------|--------|
| Descriptive Analysis (complete + table) | Process | 20 |
| Bivariate Exploration | Process | 15 |
| Inferential Tests (appropriate + well-reported) | Milestone | 30 |
| Regression Model(s) (table + diagnostics) | Milestone | 35 |
| Robustness Checks (at least 2) | Milestone | 20 |
| Publication-Quality Visualizations (5+) | Milestone | 25 |
| Analysis Summary Document | Milestone | 25 |
| Weekly Check-In Participation (3) | Process | 15 |
| GitHub Commit History (≥15 commits in Phase 3) | Process | 15 |
| **Total** | | **200** |
