# Unit 2 — The Development Question

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | The Development Question |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Why are some countries rich and others poor — and what does the data actually say about how countries develop?* |
| Geography TEKS | §113.43(c)(1), (2), (4), (6), (8), (10), (11) |
| Statistics TEKS | §111.47(c)(4), (5), (6), (7) |
| Algebra II TEKS | §111.40(c)(4) |
| R Skills | `t.test()`, confidence intervals, sampling distributions, bootstrapping, hypothesis testing, `pnorm()`/`qnorm()` applications |
| Key Deliverable | Development Factor Analysis — a hypothesis-tested investigation of which factor best predicts economic development |

## Unit Narrative

This is the unit where statistics gets serious — and where the geography gets deep. "Why are some countries rich and others poor?" is the biggest question in development economics and economic geography. Students encounter competing theories: geography and climate (Jared Diamond), institutions (Acemoglu & Robinson), trade openness, education, colonial history. But the point is not to memorize theories — it's to test them with data. This unit introduces the core of statistical inference: sampling distributions, confidence intervals, and hypothesis testing. Students learn that a single sample statistic (like the mean difference between two groups) is uncertain — and that statistics provides tools to quantify that uncertainty. By the end, students can construct a confidence interval, run a t-test, interpret a p-value, and distinguish between statistical significance and practical significance.

## Geography Concepts

- Development theories: geographic determinism, institutional quality, colonial legacy, trade, education, culture
- Historical geography: colonialism's economic legacy, resource extraction, borders drawn by outsiders
- Physical geography's influence: latitude, landlocked vs. coastal, tropical vs. temperate, natural resources
- Human geography: urbanization, education, governance as development drivers
- Political geography: institutions, corruption, rule of law, democracy vs. authoritarianism
- Cultural geography: cultural factors in development (contested topic — handled with care)
- Technology and development: technology transfer, the "digital divide," leapfrogging

## Statistics Concepts

- Sampling distributions: the distribution of a sample statistic across many samples §111.47(c)(4)
- Central Limit Theorem: regardless of population shape, the sampling distribution of x̄ approaches normal for large n §111.47(c)(4)
- Standard error: SD of the sampling distribution = σ/√n §111.47(c)(4)
- Confidence intervals: constructing and interpreting a CI for a mean §111.47(c)(5)
- Hypothesis testing: null hypothesis, alternative hypothesis, test statistic, p-value §111.47(c)(6)
- One-sample and two-sample t-tests §111.47(c)(6)
- Type I error (false positive) and Type II error (false negative) §111.47(c)(6)
- Statistical significance vs. practical significance §111.47(c)(6)
- Multiple regression preview: controlling for confounders §111.47(c)(7)

---

## Lesson Sequence

### Week 1: Theories of Development (≈8.3 hours)

#### Lesson 2.1 — Why Are Some Countries Rich? Competing Theories (2 hrs)
**Geography Focus:** Overview of development theories
**Activity:**
- Present four theories with data exercises for each:
  1. **Geography:** Tropical countries are poorer. Students scatterplot GDP per capita vs. absolute latitude. Is there a correlation?
  2. **Institutions:** Countries with strong rule of law are richer. Students scatterplot GDP vs. World Bank Governance Indicator (rule of law score).
  3. **Colonial history:** Former colonies have different development trajectories. Students compare mean GDP by colonial history category (British, French, Spanish, Portuguese, not colonized).
  4. **Education:** Countries with higher education levels are richer. Students scatterplot GDP vs. mean years of schooling.
- For each: Calculate correlation. Which theory has the strongest bivariate relationship?
- Discussion: Can these theories all be partially true? How would you disentangle them?
- Key insight: These factors are correlated with each other (tropical countries were more likely to be colonized). This is confounding — and it's the central challenge of social science.

**TEKS:** §113.43(c)(1)(A), §113.43(c)(6)(A), §113.43(c)(8)(A), §111.47(c)(7)

#### Lesson 2.2 — The Sampling Distribution: What If You Had Different Data? (2 hrs)
**Statistics Focus:** Sampling variability, sampling distributions, CLT
**Activity:**
- Motivating question: We calculated a mean GDP per capita for Sub-Saharan Africa. But what if we had slightly different data (different year, different countries included)? How much would the mean change?
- Simulation: Use `sample_n()` to repeatedly sample 20 countries from Sub-Saharan Africa, calculate the mean each time, and plot the distribution of sample means:
```r
set.seed(42)
ssa_gdp <- combined_data %>%
  filter(region == "Sub-Saharan Africa") %>%
  pull(gdp_pc) %>% na.omit()

sample_means <- replicate(1000, mean(sample(ssa_gdp, 20, replace = TRUE)))

ggplot(tibble(mean = sample_means), aes(x = mean)) +
  geom_histogram(bins = 40, fill = "steelblue") +
  geom_vline(xintercept = mean(ssa_gdp), color = "red", linewidth = 1) +
  labs(title = "Sampling Distribution of Mean GDP/cap (SSA, n=20)",
       x = "Sample Mean ($)", y = "Count")
```
- Observation: The sampling distribution is approximately normal (even though individual GDPs are skewed). This is the Central Limit Theorem.
- Key vocabulary: sampling distribution, sample statistic, population parameter, Central Limit Theorem.
- Standard error: `SE = SD / sqrt(n)`. As n increases, the sampling distribution gets narrower.

**TEKS:** §111.47(c)(4)(A–C)

#### Lesson 2.3 — Confidence Intervals: Quantifying Uncertainty (2.5 hrs)
**Statistics Focus:** Constructing and interpreting confidence intervals
**Activity:**
- A confidence interval says: "Based on our sample, the true population mean is likely between ___ and ___."
- Formula: `CI = x̄ ± z* × SE`, where z* = 1.96 for 95% confidence.
- Walkthrough: Calculate a 95% CI for mean life expectancy in South Asia.
  - Sample mean: `mean(sa_life_exp)`
  - SD: `sd(sa_life_exp)`
  - n: `length(sa_life_exp)`
  - SE: `SD / sqrt(n)`
  - CI: `mean ± 1.96 * SE`
- R lab: Calculate CIs for each region and plot them:
```r
region_summary <- combined_data %>%
  group_by(region) %>%
  summarize(
    mean_le = mean(life_exp, na.rm = TRUE),
    se_le = sd(life_exp, na.rm = TRUE) / sqrt(n()),
    lower = mean_le - 1.96 * se_le,
    upper = mean_le + 1.96 * se_le
  )

ggplot(region_summary, aes(x = reorder(region, mean_le), y = mean_le)) +
  geom_point(size = 3) +
  geom_errorbar(aes(ymin = lower, ymax = upper), width = 0.2) +
  coord_flip() +
  labs(title = "Mean Life Expectancy by Region (95% CI)",
       x = "", y = "Life Expectancy (years)")
```
- Interpretation: "We are 95% confident that the true mean life expectancy in Sub-Saharan Africa is between ___ and ___ years."
- Common misconception: The CI is NOT about 95% of individual countries. It's about where the true mean likely falls.
- Practice: Calculate 90% and 99% CIs. How does the width change?

**TEKS:** §111.47(c)(5)(A–B)

#### Lesson 2.4 — Institutions and Development: The Colonial Legacy (1.8 hrs)
**Geography Focus:** Colonialism, institutional quality, governance indicators
**Activity:**
- Acemoglu, Johnson, and Robinson's argument (simplified): Colonial powers set up two types of institutions:
  - Extractive (resource extraction, forced labor, no rule of law) → poor development.
  - Inclusive (settler colonies with property rights, representative government) → rich development.
- Data: World Bank Governance Indicators (Voice & Accountability, Political Stability, Rule of Law, Control of Corruption) joined with GDP per capita.
- R lab: Scatterplot GDP vs. Rule of Law score. Strong positive correlation.
- Facet by colonial history (former British, French, Spanish, other, not colonized). Do former British colonies have better institutional scores?
- Discussion: Is this a fair test of the theory? What confounders exist? (Climate, resources, pre-colonial history, post-independence policies.)
- Geographic connection: Map rule of law scores as a world choropleth. Where are institutions strongest?

**TEKS:** §113.43(c)(1)(A), §113.43(c)(8)(A), §113.43(c)(2)(A)

---

### Week 2: Hypothesis Testing (≈8.3 hours)

#### Lesson 2.5 — The Hypothesis Testing Framework (2 hrs)
**Statistics Focus:** Null hypothesis, alternative hypothesis, test statistic, p-value
**Activity:**
- Motivating question: "Do landlocked countries have lower GDP per capita than coastal countries?" We can calculate the means and see they differ. But is the difference real or could it be due to chance?
- Hypothesis testing framework:
  - H₀ (null): There is no difference in mean GDP between landlocked and coastal countries.
  - Hₐ (alternative): Landlocked countries have lower mean GDP.
  - Collect data, calculate a test statistic, determine the p-value.
- The p-value: The probability of observing a difference this large (or larger) if the null hypothesis were true.
  - Small p-value (< 0.05) → Reject H₀. The difference is statistically significant.
  - Large p-value (≥ 0.05) → Fail to reject H₀. We don't have enough evidence.
- Analogy: The p-value is like a "weirdness score." If the null hypothesis were true, how weird would our data be?
- Practice: Students state H₀ and Hₐ for 5 geographic claims:
  1. Tropical countries have lower life expectancy.
  2. Democracies have higher HDI than autocracies.
  3. Countries with more education spend more on healthcare.
  4. Former colonies have higher infant mortality.
  5. Island nations have different GDP than continental countries.

**TEKS:** §111.47(c)(6)(A–B)

#### Lesson 2.6 — The Two-Sample t-Test: Landlocked vs. Coastal (2.5 hrs)
**Statistics Focus:** Two-sample t-test, conducting and interpreting
**Activity:**
- Set up the test for landlocked vs. coastal countries:
```r
combined_data <- combined_data %>%
  mutate(landlocked = if_else(is.na(coastline_km) | coastline_km == 0,
                               "Landlocked", "Coastal"))

# Compare means
combined_data %>%
  group_by(landlocked) %>%
  summarize(mean_gdp = mean(gdp_pc, na.rm = TRUE),
            sd_gdp = sd(gdp_pc, na.rm = TRUE),
            n = n())

# Run t-test (on log-GDP for better normality)
t_result <- t.test(log10(gdp_pc) ~ landlocked, data = combined_data)
t_result
```
- Interpret the output:
  - t statistic: How many standard errors apart are the group means?
  - df: Degrees of freedom.
  - p-value: Probability of seeing this difference by chance.
  - Confidence interval: 95% CI for the difference in means.
- Students report: "The mean log-GDP of landlocked countries (M = ___) was significantly lower than coastal countries (M = ___), t(___) = ___, p = ___."
- Discussion: The p-value is small. But is the difference practically significant? Landlocked countries face higher trade costs, but some landlocked countries (Switzerland, Luxembourg) are very rich. The test tells us the average pattern, not the rule.

**TEKS:** §111.47(c)(6)(A–C)

#### Lesson 2.7 — Type I and Type II Errors (1.5 hrs)
**Statistics Focus:** Error types, significance level, power
**Activity:**
- Two ways to be wrong:
  - Type I error (false positive): You reject H₀ when it's actually true. You claim there's a difference when there isn't one.
  - Type II error (false negative): You fail to reject H₀ when it's actually false. You miss a real difference.
- Significance level (α = 0.05): The probability of a Type I error you're willing to accept.
- Analogy: Fire alarm. Type I = alarm goes off when there's no fire (false alarm). Type II = no alarm when there IS a fire (missed danger). Which is worse depends on the context.
- Students classify 4 scenarios as Type I or Type II errors:
  1. A study claims a vaccine works (p = 0.03), but it actually doesn't. → Type I.
  2. A study concludes a policy has no effect (p = 0.12), but it actually reduces poverty. → Type II.
  3. A test shows tropical countries have higher infant mortality (p = 0.001). This is real. → Correct rejection.
  4. A test shows no difference in education spending between democracies and autocracies (p = 0.40). There really is no difference. → Correct non-rejection.
- Discussion: Why is α = 0.05 the convention? Is it always appropriate? (No — sometimes you need more stringent thresholds, especially in medicine.)

**TEKS:** §111.47(c)(6)(B–C)

#### Lesson 2.8 — Testing Development Theories: Democracy, Education, Geography (2.3 hrs)
**Statistics Focus:** Applying t-tests and regression to multiple hypotheses
**Geography Focus:** Testing competing development theories empirically
**Activity:**
- Students test three development claims using t-tests and regression:
  1. **Democracy hypothesis:** Do democracies have higher GDP? Split countries into democratic and non-democratic (using Polity score or Freedom House). Run t-test.
  2. **Education hypothesis:** Does mean years of schooling predict GDP? Regression with log-GDP as outcome.
  3. **Geography hypothesis:** Does latitude predict GDP? Regression with absolute latitude as predictor.
- For each:
  - State H₀ and Hₐ.
  - Run the test.
  - Report the test statistic, p-value, and CI.
  - Interpret in geographic terms.
- R lab: Students create a comparison table of all three hypotheses:

| Theory | Test | Statistic | p-value | Significant? | Effect Size |
|--------|------|-----------|---------|--------------|-------------|
| Democracy | Two-sample t | ___ | ___ | ___ | ___ |
| Education | Regression | ___ | ___ | ___ | R² = ___ |
| Geography | Regression | ___ | ___ | ___ | R² = ___ |

- Discussion: Multiple theories have statistically significant effects. Can they all be true simultaneously? (Yes — development has multiple causes. The question is which matters most, controlling for the others.)

**TEKS:** §113.43(c)(1)(A), §113.43(c)(6)(A), §113.43(c)(8)(A), §111.47(c)(6), §111.47(c)(7)

---

### Week 3: Confounding, Multiple Regression, and the Project (≈8.3 hours)

#### Lesson 2.9 — Confounding Revisited: Why Bivariate Tests Aren't Enough (1.5 hrs)
**Statistics Focus:** Confounding variables, Simpson's Paradox, need for multiple regression
**Activity:**
- Problem: Latitude, institutions, and education are all correlated with GDP — but they're also correlated with each other. Tropical countries tend to have weaker institutions (colonial legacy). Countries with better institutions invest more in education.
- Simpson's Paradox example: Demonstrate with a concrete dataset where the relationship between X and Y reverses when you control for Z.
- Solution preview: Multiple regression lets you examine the effect of one variable while controlling for others. This is the key tool of social science.

**TEKS:** §111.47(c)(7)

#### Lesson 2.10 — Introduction to Multiple Regression (2.5 hrs)
**Statistics Focus:** Multiple regression — two or more predictors, interpreting coefficients
**Activity:**
- In simple regression: `Y = b₀ + b₁X₁`. In multiple regression: `Y = b₀ + b₁X₁ + b₂X₂ + ...`
- Each coefficient b represents the effect of that variable holding others constant.
- R lab: Regress log-GDP on education and rule of law simultaneously:
```r
model_multi <- lm(log10(gdp_pc) ~ mean_years_school + rule_of_law,
                  data = combined_data)
summary(model_multi)
```
- Interpret:
  - b₁ (education): Holding rule of law constant, each additional year of schooling is associated with a ___% increase in GDP per capita.
  - b₂ (rule of law): Holding education constant, each 1-unit increase in rule of law is associated with a ___% increase in GDP.
  - R²: Together, education and rule of law explain ___% of variation in log-GDP.
- Compare to simple regressions: How do the coefficients change when you add the second variable? If they shrink, confounding was at play.
- Discussion: This is closer to "controlling for" a variable. It's not a perfect experiment, but it's much better than bivariate analysis.

**TEKS:** §111.47(c)(7)(B–C)

#### Lesson 2.11 — Unit 2 Project Workshop (2.5 hrs)
**Activity:**
- Students choose one development hypothesis and test it rigorously:
  - Does colonial history predict current GDP, controlling for geography?
  - Does democracy predict life expectancy, controlling for income?
  - Does education predict infant mortality, controlling for healthcare spending?
  - Does a natural resource curse exist — do resource-rich countries develop more slowly?
- Requirements:
  1. **Clear hypotheses:** H₀ and Hₐ stated in words and symbols.
  2. **Bivariate analysis:** Scatterplot with trend line, correlation, simple regression.
  3. **Inferential analysis:** t-test or regression with p-value and CI reported.
  4. **Multiple regression:** At least one model with 2+ predictors.
  5. **Type I / Type II discussion:** Could your finding be a false positive? What power concerns exist?
  6. **Geographic interpretation:** What does the statistical result mean for how countries develop?
  7. **R Markdown report** (2–3 pages) with tables, charts, and narrative.

#### Lesson 2.12 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Development Factor Analysis presentations (5 minutes each).
- Audience focus question: "Is the evidence convincing? What confounders might remain?"
- Checkpoint quiz: Sampling distributions, CLT, confidence intervals, t-tests, p-values, Type I/II errors (25 minutes).

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Inference | Individual | 30 |
| R Lab: Sampling Distribution Simulation | Lab | 20 |
| R Lab: Confidence Intervals by Region | Lab | 25 |
| R Lab: Two-Sample t-Test (Landlocked) | Lab | 25 |
| Development Theory Comparison Table | Lab | 20 |
| Multiple Regression Lab | Lab | 25 |
| Development Factor Analysis | Project | 55 |
| **Total** | | **200** |

## Key Vocabulary

development, economic development, GDP per capita, institutions, rule of law, colonial legacy, extractive institutions, inclusive institutions, geographic determinism, landlocked, latitude, urbanization, Human Development Index, sampling distribution, Central Limit Theorem, standard error, confidence interval, confidence level, margin of error, hypothesis test, null hypothesis (H₀), alternative hypothesis (Hₐ), test statistic, p-value, significance level (α), statistically significant, Type I error, Type II error, power, two-sample t-test, degrees of freedom, multiple regression, coefficient, controlling for, confounding variable, Simpson's Paradox, R²
