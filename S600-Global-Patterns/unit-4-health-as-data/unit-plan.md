# Unit 4 — Health as Data

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Health as Data |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Why does where you're born determine how long you live — and what does the data say about closing the gap?* |
| Geography TEKS | §113.43(c)(4), (9), (10), (11) |
| Statistics TEKS | §111.47(c)(3), (4), (5), (6), (7) |
| Algebra II TEKS | §111.40(c)(4) |
| R Skills | `prop.test()`, chi-square formal test, ANOVA with `aov()`, multiple regression with interaction terms, conditional probability calculations |
| Key Deliverable | Global Health Investigation — a hypothesis-tested analysis of a health outcome disparity across countries or regions |

## Unit Narrative

Health is the most visceral measure of inequality. A child born in Japan can expect to live to 84; a child born in Chad, to 53. This 30-year gap is not random — it's patterned by income, education, geography, governance, and healthcare systems. Students investigate these patterns using WHO and World Bank health data: life expectancy, infant mortality, maternal mortality, vaccination rates, healthcare spending, disease prevalence. The statistics strand deepens: formal chi-square tests replace the intuitive version from S500. ANOVA extends the two-sample t-test to compare multiple groups. Multiple regression with interaction terms asks: Does the effect of healthcare spending on health depend on governance quality? Conditional probability connects to epidemiology — what is the probability of surviving to age 5, given that you live in a particular country?

## Geography Concepts

- Health geography: spatial patterns of disease, mortality, and healthcare access
- Demographic transition: birth rates, death rates, and population growth over development stages
- Healthcare systems: universal vs. private, single-payer vs. multi-payer
- Disease geography: tropical diseases, the malaria belt, HIV/AIDS patterns
- Water and sanitation: access to clean water as a health and geographic issue
- International health organizations: WHO, UNICEF, Doctors Without Borders, the Global Fund
- Sustainable Development Goals (SDGs) related to health: SDG 3 (Good Health), SDG 6 (Clean Water)
- Culture and health: cultural practices that affect health outcomes, traditional vs. modern medicine

## Statistics Concepts

- Conditional probability: P(A|B), computing from contingency tables §111.47(c)(3)
- Independence: testing whether two categorical variables are independent §111.47(c)(3)
- Chi-square test of independence (formal): observed vs. expected, χ² statistic, df, p-value §111.47(c)(6)
- Proportions: one-sample and two-sample proportion tests §111.47(c)(5), (6)
- ANOVA: comparing means across 3+ groups, F-statistic §111.47(c)(6)
- Multiple regression with interaction terms §111.47(c)(7)
- Confidence intervals for proportions §111.47(c)(5)

---

## Lesson Sequence

### Week 1: The Global Health Landscape (≈8.3 hours)

#### Lesson 4.1 — The 30-Year Gap: Where You're Born Determines How Long You Live (2 hrs)
**Geography Focus:** Global life expectancy patterns, health geography
**Activity:**
- World map of life expectancy (from Unit 1, now with deeper context).
- Students pull infant mortality, maternal mortality, and under-5 mortality from World Bank:
```r
health_data <- wb_data(
  indicator = c("SP.DYN.LE00.IN", "SP.DYN.IMRT.IN",
                "SH.STA.MMRT", "SH.DYN.MORT"),
  mrv = 1
)
```
- Create a 4-panel dashboard: life expectancy, infant mortality, maternal mortality, under-5 mortality. Color by income group.
- Key pattern: Sub-Saharan Africa has the worst outcomes on every measure. But there's huge variation within the region (compare Botswana to Chad).
- Discussion: What factors might explain these patterns? Students brainstorm before seeing the data.

**TEKS:** §113.43(c)(4)(A), §113.43(c)(9)(A)

#### Lesson 4.2 — Conditional Probability: The Geography of Survival (2 hrs)
**Statistics Focus:** Conditional probability, contingency tables
**Activity:**
- Conditional probability: P(survive to age 5 | born in Chad) vs. P(survive to age 5 | born in Japan).
- Under-5 mortality rate is expressed per 1,000 live births. Chad: ~115/1,000 (11.5%). Japan: ~2/1,000 (0.2%).
- P(survive to 5 | Chad) = 1 - 0.115 = 0.885.
- P(survive to 5 | Japan) = 1 - 0.002 = 0.998.
- Build a contingency table from regional health data:

| | High Mortality (>50/1000) | Low Mortality (<50/1000) | Total |
|---|---|---|---|
| Sub-Saharan Africa | ___ | ___ | ___ |
| All other regions | ___ | ___ | ___ |

- Calculate: P(high mortality | SSA) vs. P(high mortality | other). Are region and mortality level independent?
- Discussion: The conditional probability of child death depends dramatically on geography. This is the core of health inequality.

**TEKS:** §111.47(c)(3)(A–B)

#### Lesson 4.3 — The Chi-Square Test of Independence (2.5 hrs)
**Statistics Focus:** Formal chi-square test — observed, expected, χ², df, p-value
**Activity:**
- Formalize the independence question from 4.2: Is mortality level independent of world region?
- Chi-square test procedure:
  1. Create a contingency table (observed counts).
  2. Calculate expected counts: `E = (row total × column total) / grand total`.
  3. χ² = Σ (O - E)² / E.
  4. df = (rows - 1)(cols - 1).
  5. p-value from χ² distribution.
- Hand calculation for a 2×2 table, then verify in R:
```r
# Create contingency table
health_table <- table(health_data$region_category,
                      health_data$mortality_category)
chisq.test(health_table)
```
- Interpret: χ² = ___, df = ___, p < ___. Region and mortality are NOT independent.
- Practice: Test independence of two other health-related categorical variables (e.g., healthcare system type vs. vaccination coverage category).
- Key distinction from Unit 1 (S500): In S500, chi-square was intuitive. Now it's formal — students understand the mechanics.

**TEKS:** §111.47(c)(3)(C), §111.47(c)(6)(A–C)

#### Lesson 4.4 — Healthcare Spending: Does Money Buy Health? (1.8 hrs)
**Geography Focus:** Healthcare systems, spending patterns
**Statistics Focus:** Confidence intervals for proportions
**Activity:**
- Pull healthcare spending data: % GDP spent on health, per capita healthcare spending.
- Scatterplot: Healthcare spending per capita vs. life expectancy. The US is a dramatic outlier (highest spending, mediocre outcomes).
- Confidence interval for a proportion: What fraction of countries spending >$1,000/capita on health have life expectancy >75 years?
```r
high_spend <- health_data %>% filter(health_spend_pc > 1000)
p_hat <- mean(high_spend$life_exp > 75)
se <- sqrt(p_hat * (1 - p_hat) / nrow(high_spend))
ci <- c(p_hat - 1.96 * se, p_hat + 1.96 * se)
```
- Interpret: "We are 95% confident that between ___% and ___% of high-spending countries have life expectancy above 75."
- `prop.test()` in R as a shortcut.
- Discussion: The US spends the most and doesn't top the rankings. What explains the inefficiency? (Private insurance, administrative costs, drug prices, unequal access.)

**TEKS:** §113.43(c)(11)(A), §111.47(c)(5), §111.47(c)(6)

---

### Week 2: Comparing Groups and Multiple Factors (≈8.3 hours)

#### Lesson 4.5 — The Demographic Transition (1.5 hrs)
**Geography Focus:** Stages of demographic transition, population growth
**Activity:**
- The demographic transition model: As countries develop, they move through stages:
  - Stage 1: High birth and death rates → slow growth. (Pre-industrial.)
  - Stage 2: Death rates fall (sanitation, medicine) but births remain high → rapid growth. (Early development.)
  - Stage 3: Birth rates fall (education, urbanization, contraception) → slowing growth. (Industrial.)
  - Stage 4: Low birth and death rates → slow/no growth. (Post-industrial.)
  - Stage 5 (debated): Birth rates below death rates → population decline. (Japan, parts of Europe.)
- R lab: Plot birth rate vs. death rate colored by income group. Identify which countries are in which stage.
- Map: Choropleth of population growth rate. Where is growth fastest? Slowest?

**TEKS:** §113.43(c)(4)(B), §113.43(c)(10)(A)

#### Lesson 4.6 — ANOVA: Comparing Health Across Multiple Regions (2.5 hrs)
**Statistics Focus:** One-way ANOVA, F-statistic, post-hoc comparisons
**Activity:**
- The t-test compares two groups. ANOVA (Analysis of Variance) compares three or more.
- Question: Does mean life expectancy differ significantly across 7 World Bank regions?
- H₀: All region means are equal. Hₐ: At least one region mean differs.
- R lab:
```r
anova_model <- aov(life_exp ~ region, data = health_data)
summary(anova_model)
```
- Interpret: F = ___, p < ___. The means are not all equal.
- But ANOVA doesn't tell you which pairs differ. Use Tukey's HSD post-hoc test:
```r
TukeyHSD(anova_model)
```
- Students identify which regional comparisons are statistically significant and which are not.
- Visualization: Boxplots by region with significance brackets.
- Repeat for infant mortality.
- Discussion: ANOVA tells you groups differ; it doesn't tell you why. What factors differ across regions that might explain the health gap?

**TEKS:** §111.47(c)(6)(A–C)

#### Lesson 4.7 — Disease Geography: Malaria, HIV, and the Tropics (2 hrs)
**Geography Focus:** Disease geography, tropical diseases, HIV/AIDS
**Statistics Focus:** Chi-square for disease prevalence by region
**Activity:**
- Malaria: Almost entirely confined to tropical regions. Why? (Mosquito habitat, temperature, altitude.)
- HIV/AIDS: Concentrated in Sub-Saharan Africa (~25 million of ~38 million people living with HIV globally).
- R lab: Pull disease prevalence data and map it:
  - Malaria incidence per 1,000 population (World Bank indicator: SH.MLR.INCD.P3)
  - HIV prevalence (% ages 15–49)
- Chi-square test: Is HIV prevalence category (high/medium/low) independent of world region?
- Scatterplot: HIV prevalence vs. life expectancy. Strong negative correlation — in high-prevalence countries, HIV shaves years off life expectancy.
- Discussion: Disease is geographic, but it's not destiny. Botswana's HIV prevalence is among the world's highest, but its treatment program has dramatically increased life expectancy since 2000.

**TEKS:** §113.43(c)(4)(A), §113.43(c)(3)(A), §111.47(c)(3), §111.47(c)(6)

#### Lesson 4.8 — Multiple Regression with Interactions: Does the Effect of Money Depend on Governance? (2.3 hrs)
**Statistics Focus:** Interaction terms in multiple regression
**Activity:**
- From Lesson 4.4, we know healthcare spending predicts life expectancy. From Unit 2, we know institutions matter.
- Question: Does the effect of healthcare spending depend on governance quality? In well-governed countries, does an extra dollar of health spending buy more health than in poorly-governed countries?
- Interaction term: `spending × governance`
```r
model_interact <- lm(life_exp ~ log(health_spend_pc) * governance_score,
                     data = health_data)
summary(model_interact)
```
- Interpret the interaction:
  - Main effect of spending: Effect of spending when governance = 0 (mean-centered).
  - Main effect of governance: Effect of governance when spending = 0 (mean-centered).
  - Interaction: How much the effect of spending changes per unit increase in governance.
- Visualize:
```r
ggplot(health_data, aes(x = log(health_spend_pc), y = life_exp,
                        color = governance_category)) +
  geom_point(alpha = 0.5) +
  geom_smooth(method = "lm", se = FALSE) +
  labs(title = "Healthcare Spending and Life Expectancy by Governance Quality")
```
- If the lines have different slopes → the interaction is significant.
- Discussion: This is a key policy insight — spending money on health doesn't help as much if the government can't deliver services effectively.

**TEKS:** §111.47(c)(7)(B–C)

---

### Week 3: Water, Sanitation, and the Health Investigation (≈8.3 hours)

#### Lesson 4.9 — Water and Sanitation: The Most Basic Health Infrastructure (1.5 hrs)
**Geography Focus:** Clean water access, sanitation, SDG 6
**Activity:**
- Data: % population with access to clean drinking water, % with improved sanitation (World Bank).
- Map: Choropleth of water access. The pattern tracks income and geography closely.
- R lab: Scatterplot of water access vs. infant mortality. One of the strongest correlations in global health data.
- Discussion: Clean water and sanitation prevent cholera, typhoid, and diarrheal diseases — the leading killers of children in low-income countries. This is infrastructure, not high-tech medicine.
- Case study: Rwanda — dramatic improvement in water/sanitation access since 2000 and corresponding decline in child mortality.
- Connection to SDGs: SDG 6 (Clean Water and Sanitation). Are we on track?

**TEKS:** §113.43(c)(4)(A), §113.43(c)(11)(A), §113.43(c)(9)(A)

#### Lesson 4.10 — Vaccination Rates: A Global Public Good (1.5 hrs)
**Geography Focus:** International health organizations, global public goods
**Statistics Focus:** Proportion tests
**Activity:**
- Vaccination rates (DPT, measles, polio) vary dramatically by country.
- R lab: Pull vaccination rates and compare to WHO targets (>90% coverage).
- Proportion test: What fraction of low-income countries meet the WHO 90% vaccination target for DPT?
```r
low_income_vax <- health_data %>% filter(income_group == "Low income")
prop.test(sum(low_income_vax$dpt_coverage >= 90),
          nrow(low_income_vax), p = 0.90, alternative = "less")
```
- Compare to high-income countries. Confidence interval for the difference in proportions.
- Discussion: Vaccination is a global public good — everyone benefits when coverage is high (herd immunity). But who pays? The role of GAVI, WHO, and international aid.

**TEKS:** §113.43(c)(9)(A), §111.47(c)(5), §111.47(c)(6)

#### Lesson 4.11 — Unit 4 Project Workshop (3.5 hrs)
**Activity:**
- Students design and conduct a Global Health Investigation:
  - Choose a health outcome (life expectancy, infant mortality, maternal mortality, disease prevalence, vaccination rate).
  - Choose a potential explanatory factor (income, education, governance, healthcare spending, water access, urbanization, cultural factor).
  - Requirements:
    1. **Clear hypothesis** (H₀ and Hₐ).
    2. **Descriptive statistics** by group or region (means, SDs, boxplots).
    3. **Inferential test:** t-test, ANOVA, chi-square, or proportion test — whichever is appropriate for the data.
    4. **Multiple regression:** At least one model with 2+ predictors. Include at least one interaction term.
    5. **World map** of the health outcome.
    6. **Geographic interpretation:** Why do the patterns exist? Connect to at least 2 geography concepts.
    7. **Limitations and confounders** discussed.
    8. **R Markdown report** (2–3 pages).

#### Lesson 4.12 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Health Investigation presentations (5 minutes + Q&A).
- Checkpoint quiz: Conditional probability, chi-square test, ANOVA, interaction terms, CIs for proportions (25 min).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Inference & Health Stats | Individual | 30 |
| R Lab: Conditional Probability & Contingency | Lab | 20 |
| R Lab: Chi-Square Test | Lab | 25 |
| R Lab: ANOVA by Region | Lab | 25 |
| R Lab: Multiple Regression with Interaction | Lab | 25 |
| Healthcare Spending Analysis | Analysis Memo | 15 |
| Global Health Investigation | Project | 60 |
| **Total** | | **200** |

## Key Vocabulary

health geography, life expectancy, infant mortality, maternal mortality, under-5 mortality, demographic transition, birth rate, death rate, population growth, healthcare spending, universal healthcare, conditional probability, contingency table, chi-square test, observed count, expected count, χ² statistic, degrees of freedom, independence, ANOVA, F-statistic, post-hoc test, Tukey's HSD, confidence interval for a proportion, proportion test, interaction term, malaria, HIV/AIDS, vaccination rate, herd immunity, sanitation, SDG, WHO, UNICEF, GAVI, global public good
