# Unit 1 — Who Votes and Why

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Who Votes and Why |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Who actually participates in American democracy — and what predicts whether someone votes?* |
| Government TEKS | §113.44(c)(7), (8), (1) |
| Statistics TEKS | §111.47(c)(2), (4), (7) |
| R Skills | `tidycensus` for ACS data, `prop.table()`, cross-tabulations, chi-square test (intuitive), regression with demographic predictors |
| Key Deliverable | Voter Participation Analysis — a data-driven report identifying the strongest predictors of voter turnout in a chosen geography |

## Unit Narrative

The course opens with democracy's most fundamental act: voting. But instead of starting with the Constitution, students start with a question and a dataset. Who votes? The answer is not random — age, education, income, race, and state laws all predict turnout. Students pull Census/ACS data using `tidycensus`, build demographic profiles of high- and low-turnout areas, and run regressions to identify the strongest predictors. The statistics are real: sampling, margin of error, and the difference between a survey estimate and a census count. The government content follows naturally — students want to know *why* the patterns exist, which leads to voter registration laws, the Voting Rights Act, and the tension between access and security. This unit establishes the S500 approach: government produces data; data reveals how government works.

## Government Concepts

- Principles of representative government: consent of the governed, popular sovereignty
- Voting as a right and a responsibility; 15th, 19th, 24th, 26th Amendments
- Voter registration systems: automatic, same-day, online, purging
- Voting Rights Act of 1965: history and current status (Shelby County v. Holder)
- Barriers to voting: ID laws, felony disenfranchisement, gerrymandering (preview)
- Political participation beyond voting: campaigns, protests, civic organizations
- Elections: primary, general, midterm, presidential; Electoral College basics

## Statistics Concepts

- The statistical process: question → data collection → analysis → interpretation §111.47(c)(2)
- Sampling vs. census: the ACS is a survey, not a count §111.47(c)(4)
- Margin of error: what it means and why it matters §111.47(c)(4)
- Cross-tabulation: comparing rates across groups
- Bivariate data: scatterplots of demographic variables vs. turnout §111.47(c)(7)
- Simple linear regression: predicting turnout from a demographic variable §111.47(c)(7)
- Introduction to chi-square test (intuitive): Are voting patterns independent of demographic group? §111.47(c)(4)

---

## Lesson Sequence

### Week 1: Who Shows Up? (≈8.3 hours)

#### Lesson 1.1 — The Turnout Question (1.5 hrs)
**Government Focus:** Voting as the foundation of democratic legitimacy; popular sovereignty
**Activity:**
- Warm-up: "What percentage of eligible Americans voted in the most recent presidential election?" Students guess, then see the real number (~66% in 2020, ~49% in 2018 midterms).
- Discussion: Is ~60% participation healthy for a democracy? What about the ~40% who don't vote?
- Direct instruction: Who is eligible to vote? (Citizenship, age, registration, no felony conviction in some states.) How does the US compare to other democracies?
- Show international turnout comparison chart (teacher-provided). US ranks near the bottom of developed democracies.
- Question for the unit: What predicts whether someone votes?

**TEKS:** §113.44(c)(7)(A), §113.44(c)(8)(A)

#### Lesson 1.2 — The Census and the ACS: Government Data for the People (2 hrs)
**Government Focus:** Census as a constitutional mandate (Article I, Section 2); role in representation and federal funding
**Statistics Focus:** Census vs. survey; sampling; margin of error
**R Focus:** Introduction to `tidycensus`
**Activity:**
- Direct instruction: The decennial Census counts everyone. The ACS (American Community Survey) samples ~3.5 million households per year to produce annual estimates.
- Key point: ACS data comes with a margin of error. Census counts do not (but have their own errors).
- R lab: Install and set up `tidycensus`:
```r
library(tidycensus)
# census_api_key("YOUR_KEY", install = TRUE)

# Pull median household income by county in Texas
tx_income <- get_acs(
  geography = "county",
  state = "TX",
  variables = "B19013_001",  # Median household income
  year = 2022
)
head(tx_income)
```
- Students observe: Each estimate has a `moe` (margin of error) column. What does this mean?
- Explain: The estimate ± MOE gives a 90% confidence interval. Smaller populations → larger MOE.
- Students pull a second variable (e.g., % with bachelor's degree) and compare MOE across counties.

**TEKS:** §113.44(c)(1)(A), §111.47(c)(2), §111.47(c)(4)

#### Lesson 1.3 — Voter Turnout by Demographics: The National Picture (2 hrs)
**Government Focus:** Who votes — demographic patterns
**Statistics Focus:** Cross-tabulation, proportions
**R Focus:** `prop.table()`, grouped bar charts
**Activity:**
- Dataset: CPS Voting and Registration Supplement (teacher-curated extract) showing turnout rates by age, education, income, race/ethnicity.
- R lab: Create cross-tabulations and grouped bar charts:
```r
turnout <- read_csv("cps_voting_2022.csv")

# Turnout rate by age group
turnout %>%
  group_by(age_group) %>%
  summarize(turnout_rate = mean(voted == "Yes")) %>%
  ggplot(aes(x = age_group, y = turnout_rate)) +
  geom_col(fill = "steelblue") +
  scale_y_continuous(labels = scales::percent) +
  labs(title = "Voter Turnout by Age Group (2022)",
       y = "Turnout Rate")
```
- Students create the same chart for education, income, and race/ethnicity.
- Key findings: Age is the strongest predictor. Education is second. Income matters. There are racial gaps.
- Discussion: Why do these patterns exist? (Students hypothesize — answers come in later lessons.)

**TEKS:** §113.44(c)(7)(A), §111.47(c)(2), §111.47(c)(7)

#### Lesson 1.4 — Voting Rights: The Constitutional Amendments (1.5 hrs)
**Government Focus:** 15th, 19th, 24th, 26th Amendments; Voting Rights Act of 1965
**Activity:**
- Direct instruction: The Constitution did not originally guarantee the right to vote. It was expanded over time:
  - 15th Amendment (1870): Cannot deny vote based on race.
  - 19th Amendment (1920): Cannot deny vote based on sex.
  - 24th Amendment (1964): Bans poll taxes.
  - 26th Amendment (1971): Voting age lowered to 18.
- The Voting Rights Act of 1965: What it did (preclearance, banned literacy tests). Shelby County v. Holder (2013): What the Supreme Court struck down.
- Students read a short primary source excerpt from each amendment.
- Timeline activity: Students place the amendments and key voting rights events on a timeline.
- Connection to data: Compare Black voter turnout before and after the VRA (teacher provides data). Does the data show the law's impact?

**TEKS:** §113.44(c)(8)(A–B), §113.44(c)(7)(A)

#### Lesson 1.5 — Voter Registration: Barriers and Access (1.3 hrs)
**Government Focus:** Registration systems, voter ID laws, automatic voter registration
**Activity:**
- Not all states make it equally easy to register and vote. Variations:
  - Same-day registration vs. 30-day deadline
  - Automatic registration vs. opt-in
  - Strict photo ID vs. no ID requirement
  - Early voting, mail-in voting, no-excuse absentee
- Dataset: State-by-state voter access policies (teacher-curated from NCSL/Ballotpedia).
- Students code each state: permissive (0–2 barriers), moderate (3–4), restrictive (5+).
- Preview for later: Do states with more permissive rules have higher turnout? (Students will test this in Week 2.)

**TEKS:** §113.44(c)(7)(A), §113.44(c)(8)(A)

---

### Week 2: Predicting Turnout with Data (≈8.3 hours)

#### Lesson 1.6 — Scatterplots Revisited: Demographics vs. Turnout by County (2 hrs)
**Statistics Focus:** Bivariate data, scatterplots, trend lines
**R Focus:** `tidycensus` pull → merge with turnout data → scatterplot
**Activity:**
- Students pull county-level data from `tidycensus`: median income, % bachelor's degree, % over 65, % nonwhite.
- Merge with county-level voter turnout data (teacher-curated from state election offices or MIT Election Data Lab).
- Create scatterplots: each demographic variable vs. turnout rate.
```r
# Example: education vs. turnout
ggplot(county_data, aes(x = pct_bachelors, y = turnout_rate)) +
  geom_point(alpha = 0.3) +
  geom_smooth(method = "lm", se = TRUE, color = "red") +
  labs(title = "County Education Level vs. Voter Turnout",
       x = "% Adults with Bachelor's Degree",
       y = "Voter Turnout Rate (%)")
```
- Students calculate `cor()` for each pair. Which variable has the strongest correlation with turnout?
- Review from S400: Slope interpretation, r interpretation, correlation ≠ causation.

**TEKS:** §111.47(c)(7)(A–B), §111.47(c)(2)

#### Lesson 1.7 — Simple Linear Regression: Predicting Turnout (2 hrs)
**Statistics Focus:** Linear regression, interpreting coefficients, R²
**Activity:**
- Move beyond correlation to regression. Fit a linear model:
```r
model <- lm(turnout_rate ~ pct_bachelors, data = county_data)
summary(model)
```
- Interpret:
  - Intercept: Predicted turnout when % bachelor's = 0.
  - Slope: For every 1 percentage-point increase in bachelor's attainment, turnout increases by ___ points.
  - R²: How much of the variation in turnout is "explained" by education?
- Students fit models for all four demographic variables. Compare R² values. Which is the best single predictor?
- Important discussion: "Explained" doesn't mean "caused." What confounders could be at play?

**TEKS:** §111.47(c)(7)(B–C)

#### Lesson 1.8 — Residuals: Where the Model Is Wrong (1.5 hrs)
**Statistics Focus:** Residuals, residual plots, outliers
**Activity:**
- Define residual: `actual - predicted`. Positive residual = higher turnout than expected. Negative = lower.
- R lab: Calculate residuals from the education-turnout model and plot them:
```r
county_data <- county_data %>%
  mutate(predicted = predict(model),
         residual = turnout_rate - predicted)

ggplot(county_data, aes(x = pct_bachelors, y = residual)) +
  geom_point(alpha = 0.3) +
  geom_hline(yintercept = 0, color = "red") +
  labs(title = "Residual Plot: Education vs. Turnout Model")
```
- Students identify interesting residuals: Which counties have much higher turnout than the model predicts? Which have much lower?
- Investigate 2–3 outlier counties. What's special about them? (Competitive election, strong organizing, voter suppression, or unique demographics.)
- Lesson: Residuals tell you where the model fails — and that's often where the interesting government story is.

**TEKS:** §111.47(c)(7)(C)

#### Lesson 1.9 — Voter ID and Access: Testing the Policy Effect (1.5 hrs)
**Government Focus:** Voter ID laws, policy impact
**Statistics Focus:** Comparing group means, introduction to chi-square reasoning
**Activity:**
- Return to the state policy data from Lesson 1.5. Now add turnout data.
- Question: Do states with strict voter ID laws have lower turnout?
- R lab: Group states by ID requirement (strict photo, non-strict photo, no requirement). Compare average turnout:
```r
state_data %>%
  group_by(voter_id_type) %>%
  summarize(avg_turnout = mean(turnout_rate),
            n = n())
```
- Create a box plot comparing turnout distributions by ID law type.
- Discussion: The averages differ, but is the difference meaningful or could it be due to chance?
- Introduce the chi-square test concept intuitively: If voter ID had no effect, we'd expect similar turnout across groups. How different do the numbers need to be before we're convinced it's not random?
- Run `chisq.test()` in R (interpret the p-value in plain language: "If ID laws had no effect, there's only a ___% chance we'd see differences this large").
- **Critical caveat:** This is observational data. States that pass strict ID laws may differ from other states in many ways. This analysis cannot prove causation.

**TEKS:** §113.44(c)(7)(A), §113.44(c)(8)(A), §111.47(c)(4), §111.47(c)(7)

#### Lesson 1.10 — Elections and the Electoral College (1.3 hrs)
**Government Focus:** Electoral College, swing states, winner-take-all, popular vote vs. electoral vote
**Activity:**
- Direct instruction: How presidential elections work — popular vote within each state determines electoral votes (mostly winner-take-all). 270 to win.
- Data exercise: Students examine the 2020 Electoral College results. Calculate: What is the smallest number of states you'd need to win to reach 270? (Demonstrate the disproportionate power of large states.)
- Discuss: Why do campaigns focus on "swing states"? Show data on campaign spending by state.
- Connection to turnout: Does turnout differ between swing states and safe states? (Students check using their data.)
- Debate (brief): Should the US abolish the Electoral College? Students take positions based on the data, not personal preference.

**TEKS:** §113.44(c)(7)(B–C), §113.44(c)(1)(A)

---

### Week 3: The Voter Participation Analysis (≈8.3 hours)

#### Lesson 1.11 — Political Parties and Interest Groups (1.5 hrs)
**Government Focus:** Two-party system, party platforms, interest groups, PACs
**Activity:**
- Direct instruction: Democrats and Republicans — origins, current coalitions, platform differences.
- Interest groups: NRA, AARP, NAACP, Chamber of Commerce. How do they influence elections?
- PACs and Super PACs (preview for Unit 2).
- Data: Compare Democratic and Republican vote shares by county demographics. Are there patterns?
- R lab: Create a scatterplot of county median income vs. Democratic vote share. What's the correlation?

**TEKS:** §113.44(c)(7)(D–E)

#### Lesson 1.12 — Civic Participation Beyond Voting (1 hr)
**Government Focus:** Other forms of participation — protests, petitions, contacting officials, community organizing
**Activity:**
- Voting is one form of participation. Others: attending school board meetings, calling your representative, joining a civic organization, protesting, volunteering.
- Quick data: CPS Civic Engagement Supplement — what percentage of Americans participated in each activity?
- Discussion: Which forms of participation are most effective at influencing policy?
- Connection to later units: Unit 5 will analyze your representative's actual record.

**TEKS:** §113.44(c)(8)(B–C)

#### Lesson 1.13 — Unit 1 Project Workshop (3 hrs)
**Activity:**
- Students create a Voter Participation Analysis for a geography of their choice (a Texas county, a state, or a comparison of two areas).
- Requirements:
  1. **Research question:** What predicts voter turnout in [your geography]?
  2. **Data:** At least 2 demographic variables from `tidycensus` + turnout data.
  3. **Analysis:**
     - Scatterplot with trend line for each predictor vs. turnout.
     - Correlation coefficient (r) and R² for each.
     - One regression model with interpretation of slope and intercept.
     - Residual analysis: Identify at least one interesting outlier and investigate.
  4. **Government context:** Connect findings to at least 2 voting rights/access concepts from the unit.
  5. **R Markdown report** (2–3 pages) with code, visualizations, and narrative.
- Workshop: data pulling, merging, analysis, writing. Teacher circulates for 1-on-1 check-ins.

#### Lesson 1.14 — Presentations & Assessment (2.8 hrs)
**Activity:**
- Gallery walk: R Markdown reports displayed or projected. Students circulate with feedback forms.
- Selected presentations (5–6 students, 4 minutes each).
- Unit checkpoint quiz: Voting rights amendments, ACS vs. Census, margin of error, regression interpretation (25 minutes).

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Voting Rights & Statistics | Individual | 25 |
| R Lab: tidycensus Demographic Pull | Lab | 20 |
| R Lab: Scatterplots & Correlation | Lab | 25 |
| R Lab: Regression & Residuals | Lab | 25 |
| Voting Rights Timeline | Practice | 15 |
| Voter Participation Analysis | Project | 60 |
| Gallery Walk / Presentation | Project | 30 |
| **Total** | | **200** |

## Key Vocabulary

voter turnout, popular sovereignty, consent of the governed, 15th Amendment, 19th Amendment, 24th Amendment, 26th Amendment, Voting Rights Act, preclearance, Shelby County v. Holder, voter registration, voter ID, same-day registration, automatic registration, Electoral College, swing state, political party, interest group, PAC, Super PAC, American Community Survey (ACS), margin of error, confidence interval, sampling, cross-tabulation, regression, slope, intercept, R², residual, outlier, chi-square test, p-value, observational study
