# Unit 3 — The Wage Question

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | The Wage Question |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What determines how much you get paid — and is it fair?* |
| Economics TEKS | §113.31(c)(5), (3), (8) |
| Algebra I TEKS | §111.39(c)(2), (3), (8), (9) |
| R Skills | `group_by()`, `summarize()`, `cor()`, faceted plots, `fredr()` API calls, multi-variable scatterplots |
| Key Deliverable | The Wage Gap Data Brief — a 2-page data analysis with R visualizations investigating a wage disparity of the student's choice |

## Unit Narrative

This is the unit students will argue about — and that's the point. Wages are where economics gets personal. Students examine the labor market as a market: supply of workers, demand from employers, and the price (wage) that results. But they also confront the messy reality that wages reflect education, experience, geography, industry, discrimination, and policy. The math deepens: correlation becomes the central tool. Students learn that a scatterplot can show a relationship, a trend line can model it, and a correlation coefficient can measure it — but none of these prove causation. The unit pulls real BLS wage data and FRED time series so students grapple with actual numbers, not textbook scenarios.

## Economics Concepts

- Labor as a factor of production; the labor market
- Wages as the price of labor — determined by supply and demand
- Human capital: education, training, skills, experience
- Determinants of wages: productivity, education, industry, location, unions, discrimination
- Minimum wage debate: economic arguments on both sides
- Income inequality: Gini coefficient (conceptual), quintile income shares
- Government role: labor laws, EEOC, OSHA, unemployment insurance

## Math Concepts (Algebra I)

- Correlation: positive, negative, none §111.39(c)(9)
- Correlation coefficient (r): calculating and interpreting §111.39(c)(9)
- Scatterplots with trend lines — reinforcing slope interpretation §111.39(c)(8)
- Linear regression equation from data: `y = mx + b` from `lm()` §111.39(c)(2), (3)
- Distinguishing correlation from causation §111.39(c)(9)
- Domain and range in real-world contexts §111.39(c)(2)

---

## Lesson Sequence

### Week 1: The Labor Market (≈8.3 hours)

#### Lesson 3.1 — What Is Your Time Worth? (1.5 hrs)
**Economics Focus:** Labor, wages, opportunity cost of time
**Activity:**
- Warm-up: Students estimate how much they would need to be paid per hour to give up their Saturday. Share and compare.
- Introduce labor as a factor of production. Your time has value — wages are the price of that time.
- Define: wage, salary, hourly rate, overtime, benefits.
- Class data collection: What is the lowest wage you'd accept for a weekend job? (Reservation wage concept.)
- Create a class demand/supply diagram for teen labor in Houston.

**TEKS:** §113.31(c)(5)(A), §113.31(c)(1)(A)

#### Lesson 3.2 — Supply and Demand in the Labor Market (2 hrs)
**Economics Focus:** Labor supply, labor demand, equilibrium wage
**Math Focus:** Applying supply-demand framework from Unit 2 to labor
**Activity:**
- Firms demand labor (downward-sloping: hire more at lower wages). Workers supply labor (upward-sloping: more willing to work at higher wages).
- Build supply and demand curves for "entry-level restaurant workers in Houston."
- Find equilibrium wage and quantity using the system-of-equations method from Unit 2.
- Discuss: What shifts labor demand? (Business growth, technology, outsourcing.) What shifts labor supply? (Immigration, education levels, population growth.)
- R lab: Plot labor supply and demand using `ggplot()`. Mark equilibrium.

**TEKS:** §113.31(c)(5)(A), §113.31(c)(3)(A–B), §111.39(c)(2), §111.39(c)(3)

#### Lesson 3.3 — Human Capital: Education and Earnings (2 hrs)
**Economics Focus:** Human capital investment, returns to education
**Math Focus:** Scatterplots, positive correlation
**R Focus:** `fredr()` API, scatterplots with annotations
**Activity:**
- Pull BLS data: Median weekly earnings by education level (from "Education pays" table).
- Also pull: Unemployment rate by education level.
- Students create two bar charts: earnings by education level, unemployment by education level.
- Discussion: Is education a good investment? How do we measure "return on investment" for a degree?
- Introduce the concept of correlation — education and income are positively correlated.
- Important caveat: correlation ≠ causation. What other factors might explain the pattern?

**TEKS:** §113.31(c)(5)(A–B), §111.39(c)(8), §111.39(c)(9)

#### Lesson 3.4 — Scatterplot Deep Dive: Education vs. Income by State (2.8 hrs)
**Economics Focus:** Regional variation in wages, human capital differences
**Math Focus:** Scatterplots, line of best fit, interpreting slope
**R Focus:** Building analysis-quality scatterplots
**Activity:**
- Dataset: Median household income and % with bachelor's degree by state (Census/ACS).
- R lab:
```r
states <- read_csv("state_income_education.csv")
ggplot(states, aes(x = pct_bachelors, y = median_income)) +
  geom_point() +
  geom_smooth(method = "lm", se = FALSE) +
  geom_text(aes(label = state_abbr), size = 2, nudge_y = 1000) +
  labs(title = "Education vs. Income by State",
       x = "% Adults with Bachelor's Degree",
       y = "Median Household Income ($)")
```
- Students identify: Where does Texas fall? Which states are outliers (high education, low income or vice versa)?
- Extract the linear model: `lm(median_income ~ pct_bachelors, data = states)`. Interpret slope: "Each 1 percentage-point increase in bachelor's attainment is associated with a $____ increase in median income."

**TEKS:** §111.39(c)(8)(A–B), §111.39(c)(9), §111.39(c)(2)

---

### Week 2: Correlation, Wages, and Inequality (≈8.3 hours)

#### Lesson 3.5 — The Correlation Coefficient (2 hrs)
**Economics Focus:** Measuring economic relationships with data
**Math Focus:** Correlation coefficient (r), interpreting strength and direction
**R Focus:** `cor()`, `cor.test()`
**Activity:**
- Define r: A number between -1 and 1. Sign = direction. Magnitude = strength.
- Students compute `cor(states$pct_bachelors, states$median_income)` and interpret.
- Guided practice: Classify 6 scatterplots by estimated r (strong positive, weak positive, near zero, strong negative, etc.).
- R exercise: Calculate r for 4 different variable pairs:
  - Education vs. income (positive)
  - Unemployment vs. GDP growth (negative)
  - Shoe size vs. income (near zero)
  - Oil price vs. gas price (strong positive — from Unit 2)
- Key lesson: r measures linear association only. Show a parabolic scatterplot where r ≈ 0 but a clear pattern exists.

**TEKS:** §111.39(c)(9)(A–B)

#### Lesson 3.6 — The Wage Gap: Gender, Race, and Occupation (2.5 hrs)
**Economics Focus:** Wage disparities, discrimination, occupational segregation, human capital explanations
**R Focus:** `group_by()`, `summarize()`, faceted plots
**Activity:**
- Dataset: BLS median weekly earnings by gender and by race/ethnicity.
- R lab: Create grouped bar charts and calculate ratios:
```r
wages <- read_csv("bls_wages_demographic.csv")
wages %>%
  group_by(gender) %>%
  summarize(median_weekly = median(earnings))

ggplot(wages, aes(x = occupation, y = earnings, fill = gender)) +
  geom_col(position = "dodge") +
  coord_flip() +
  labs(title = "Median Weekly Earnings by Occupation and Gender")
```
- Examine: Does the gap persist within the same occupation, or is it mostly between occupations?
- Direct instruction: Economic explanations for wage gaps — human capital differences, occupational choice, hours worked, discrimination.
- Important framing: Economists disagree about how much of the gap is "explained." Data shows the pattern; policy debates are about the causes and remedies.
- Writing prompt: "Using at least two data points from today's analysis, explain one factor that contributes to the wage gap."

**TEKS:** §113.31(c)(5)(A–B), §113.31(c)(8)(A), §111.39(c)(8), §111.39(c)(9)

#### Lesson 3.7 — The Minimum Wage Debate (2 hrs)
**Economics Focus:** Minimum wage as a price floor, arguments for and against
**Math Focus:** Evaluating claims with data
**Activity:**
- Review: Price floors create surplus (Unit 2). In the labor market, surplus = unemployment.
- Present the standard economic model: Minimum wage above equilibrium → fewer jobs demanded, more workers wanting to work.
- Counter-evidence: Card and Krueger's New Jersey study (brief summary). Not all economists agree the effect is large.
- R lab: Pull FRED data on federal minimum wage over time and overlay with unemployment rate.
```r
min_wage <- fredr(series_id = "FEDMINNFRWG")
unemp <- fredr(series_id = "UNRATE")
# Students join and plot both time series
```
- Discussion: Does the graph show a clear relationship? What other factors affect unemployment?
- Structured debate: Half the class argues for a $20 federal minimum wage, half argues against. Each side must cite at least 2 data points.

**TEKS:** §113.31(c)(3)(B), §113.31(c)(5)(A), §113.31(c)(8)(A), §111.39(c)(8)

#### Lesson 3.8 — Income Inequality: Who Gets What? (1.8 hrs)
**Economics Focus:** Income distribution, quintiles, income inequality trends
**Math Focus:** Percent distributions, proportional reasoning
**R Focus:** Area charts, stacked bar charts
**Activity:**
- Dataset: Share of total income by quintile (Census data, 1970–present).
- R lab: Create a stacked area chart showing income share by quintile over time.
- Students observe: The top quintile's share has grown. The bottom quintile's share has shrunk.
- Introduce the Gini coefficient conceptually (0 = perfect equality, 1 = perfect inequality). Show US Gini over time.
- Discussion: Is inequality a problem? For whom? What are the economic consequences of high inequality?
- Connection to free enterprise: Is inequality a natural result of freedom, or a sign of market failure?

**TEKS:** §113.31(c)(5)(B), §113.31(c)(8)(A), §111.39(c)(8), §111.39(c)(12)

---

### Week 3: Correlation ≠ Causation and the Wage Data Brief (≈8.3 hours)

#### Lesson 3.9 — Correlation ≠ Causation: The Crucial Distinction (2 hrs)
**Economics Focus:** Critical evaluation of economic claims
**Math Focus:** Confounding variables, spurious correlation
**Activity:**
- Show spurious correlations: "Ice cream sales and drowning deaths are correlated" → confounding variable (temperature).
- Show "Number of Nicolas Cage movies" vs. "Pool drownings" (from tylervigen.com — teacher presents screenshots, not student browsing).
- Students encounter 4 economic claims:
  1. "States with more college graduates have higher incomes" → Does college cause higher income? Or do richer states fund more education?
  2. "Countries with more McDonald's have higher GDP" → McDonald's causes growth?
  3. "Minimum wage increases are correlated with job losses" → Does one cause the other?
  4. "Education spending per pupil is correlated with test scores" → Confounders?
- For each: Students identify at least one confounding variable and explain why correlation alone is insufficient.
- R exercise: Calculate r for two obviously spurious pairs. Write a sentence explaining why the correlation is misleading.

**TEKS:** §111.39(c)(9)(B), §113.31(c)(21)

#### Lesson 3.10 — The Wage Question in Houston (2 hrs)
**Economics Focus:** Local labor market, Houston industries, cost of living
**R Focus:** `fredr()`, `filter()`, multi-panel visualizations
**Activity:**
- Pull Houston-area data: median wages by occupation (BLS OEWS), unemployment rate, cost of living index.
- Students pick 5 Houston occupations spanning the wage spectrum (e.g., cashier, teacher, nurse, engineer, surgeon).
- R lab: Create a lollipop chart or Cleveland dot plot of wages by occupation.
- Calculate: How many hours at each wage to afford Houston median rent ($1,400/month) using the 30% rule?
- Faceted analysis: Compare Houston wages to national median for the same occupations.
- Discussion: Why do engineers earn more than teachers? (Supply, demand, human capital, market structure, public vs. private sector.)

**TEKS:** §113.31(c)(5)(A–B), §111.39(c)(2), §111.39(c)(8)

#### Lesson 3.11 — Unit 3 Project Workshop: The Wage Data Brief (2 hrs)
**Activity:**
- Students choose a wage question to investigate:
  - Does education level correlate with income in Texas counties?
  - How do wages in Houston's top 5 industries compare?
  - Has the gender wage gap in [occupation] narrowed over the past 20 years?
  - How does the minimum wage compare to cost of living across states?
- Requirements:
  1. A clear research question.
  2. At least one dataset from FRED, BLS, or Census.
  3. At least 2 R visualizations (one must be a scatterplot with trend line and r value).
  4. A 2-page data brief: introduction, data description, findings (with r and slope interpretation), limitations (including correlation ≠ causation disclaimer), conclusion.
- Workshop: data selection, R coding, peer review.

#### Lesson 3.12 — Peer Review and Revision (1 hr)
**Activity:**
- Students swap drafts. Use structured peer review checklist:
  - [ ] Research question is clearly stated
  - [ ] Data source is identified and appropriate
  - [ ] Scatterplot has labeled axes, title, and trend line
  - [ ] Correlation coefficient is reported and correctly interpreted
  - [ ] The brief acknowledges that correlation ≠ causation
  - [ ] Economic vocabulary is used accurately
- Students revise based on feedback.

#### Lesson 3.13 — Unit 3 Presentations & Assessment (3.3 hrs)
**Activity:**
- Gallery walk: Data briefs are displayed (printed or projected). Students circulate and leave feedback on sticky notes.
- Presentations: 5 selected students present their findings to the class (volunteer or teacher-selected for variety).
- Unit checkpoint quiz: Labor market, correlation, slope interpretation, correlation vs. causation (25 minutes).

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Labor Market & Correlation | Individual | 25 |
| R Lab: Education vs. Income Scatterplot | Lab | 25 |
| Correlation Coefficient Practice | Practice | 20 |
| Wage Gap Analysis | Lab | 30 |
| Minimum Wage Debate Participation | Participation | 15 |
| Correlation ≠ Causation Exercise | Practice | 15 |
| Wage Data Brief | Project | 50 |
| Gallery Walk / Presentation | Project | 20 |
| **Total** | | **200** |

## Key Vocabulary

labor, labor market, wage, salary, human capital, education premium, labor supply, labor demand, equilibrium wage, minimum wage, price floor, unemployment, income inequality, quintile, Gini coefficient, correlation, correlation coefficient (r), positive correlation, negative correlation, trend line, line of best fit, slope, y-intercept, confounding variable, spurious correlation, causation, occupational segregation, wage gap, BLS, OEWS, cost of living
