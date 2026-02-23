# Unit 4 — Policy Tracing

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Policy Tracing |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *When the government passes a law, what actually happens — and how would you measure it?* |
| Government TEKS | §113.44(c)(1), (2), (4), (5), (6) |
| Statistics TEKS | §111.47(c)(2), (4), (7) |
| Geometry TEKS | §111.41(c)(5) |
| R Skills | Multi-source data joins, `gt`/`kable` for publication-quality tables, difference-in-differences (intuitive), before/after comparison, multi-panel time series |
| Key Deliverable | Policy Trace — a data-driven analysis of whether a specific policy achieved its stated goals |

## Unit Narrative

This unit teaches students to ask the hardest question in government: Did it work? A policy traces the full arc from problem identification → legislative action → implementation → measurable outcome. Students choose a major policy (ACA, Clean Air Act, Texas property tax reform, criminal justice reform, school funding) and trace it. The government content covers all three branches in action: the legislature writes the law, the executive implements it through agencies, and the judiciary interprets disputes. The statistics strand introduces the core challenge of policy evaluation: you can measure what happened after the policy, but you can't directly measure what would have happened without it. The difference-in-differences approach (intuitive, no calculus) gives students a framework for estimating causal effects. Logical reasoning — a geometry TEKS — is exercised rigorously: if-then reasoning about policy effects, constructing and evaluating logical arguments.

## Government Concepts

- The policy process: problem → agenda → formulation → adoption → implementation → evaluation
- Three branches in action:
  - Legislative: drafting, committee markup, floor vote, conference committee
  - Executive: signing, agency rulemaking, executive orders, bureaucracy
  - Judicial: judicial review, constitutionality challenges, landmark cases
- Federalism in policy: federal mandates, state implementation, preemption
- Separation of powers and checks and balances (applied, not abstract)
- Specific policies for case studies:
  - Affordable Care Act (ACA): insurance coverage, Medicaid expansion
  - Clean Air Act: EPA, emissions standards, environmental outcomes
  - Texas school finance: Robin Hood plan, HB 3
  - Criminal justice reform: sentencing, recidivism, First Step Act
  - Immigration policy: DACA, border enforcement, visa systems

## Statistics Concepts

- Before/after comparison: measuring change after a policy intervention §111.47(c)(2)
- Difference-in-differences (intuitive): comparing the change in a treatment group to the change in a control group §111.47(c)(7)
- Confounding variables in policy evaluation §111.47(c)(7)
- Survey design: how government measures policy outcomes (CPS, ACS, NHIS) §111.47(c)(4)
- Publication-quality tables for presenting results §111.47(c)(2)

## Geometry Concepts

- Logical reasoning and proof: if-then statements about policy effects §111.41(c)(5)
- Constructing valid arguments from data: "If the policy caused X, then we would expect to see Y in the data" §111.41(c)(5)
- Identifying logical fallacies in policy debates §111.41(c)(5)

---

## Lesson Sequence

### Week 1: How Policy Works (≈8.3 hours)

#### Lesson 4.1 — The Policy Cycle (2 hrs)
**Government Focus:** Problem identification, agenda setting, policy formulation
**Activity:**
- Direct instruction: Government doesn't just pass laws randomly. Policies follow a cycle:
  1. **Problem identification:** Something is wrong (uninsured people, dirty air, failing schools).
  2. **Agenda setting:** The problem gets public attention (media, advocacy groups, elections).
  3. **Formulation:** Policy options are developed (by Congress, think tanks, advocacy groups).
  4. **Adoption:** A bill passes Congress and the President signs it.
  5. **Implementation:** An agency writes regulations and carries out the law.
  6. **Evaluation:** Did it work? (This is where data comes in.)
- Case study walk-through: The Affordable Care Act (ACA).
  - Problem: 47 million uninsured Americans (2010).
  - Agenda: Healthcare reform was a major campaign issue in 2008.
  - Formulation: Multiple proposals in Congress.
  - Adoption: Passed March 2010 (House 219–212, Senate 60–39).
  - Implementation: Insurance exchanges, Medicaid expansion (states had a choice after NFIB v. Sebelius), individual mandate.
  - Evaluation: What happened to the uninsured rate?
- R lab: Pull FRED data on the uninsured rate. Mark the ACA implementation date.
```r
uninsured <- fredr(series_id = "HICOV")  # Or use teacher-curated dataset
ggplot(uninsured, aes(x = date, y = value)) +
  geom_line() +
  geom_vline(xintercept = as.Date("2014-01-01"),
             linetype = "dashed", color = "red") +
  annotate("text", x = as.Date("2014-06-01"), y = max(uninsured$value),
           label = "ACA Coverage Begins", hjust = 0) +
  labs(title = "Uninsured Rate Over Time", y = "% Uninsured")
```
- Students observe: The uninsured rate dropped sharply after 2014. But did the ACA cause it?

**TEKS:** §113.44(c)(4)(A), §113.44(c)(5)(A), §111.47(c)(2)

#### Lesson 4.2 — How a Bill Becomes Law (for Real) (1.5 hrs)
**Government Focus:** Legislative process — committee, floor, conference, presidential action
**Activity:**
- The textbook version ("I'm Just a Bill") vs. reality:
  - Most bills die in committee (of ~10,000 bills introduced per Congress, ~500 pass).
  - Committee chairs have enormous power (gatekeeping).
  - Floor amendments, filibusters (Senate), cloture votes.
  - Conference committees reconcile House and Senate versions.
  - Presidential signature or veto.
- Students trace the ACA's legislative path: Which committees? What amendments? What was the final vote?
- Use ProPublica API to pull the ACA's vote record (or teacher-curated data).
- Map exercise: Students create a flowchart of the bill's path with decision points marked.

**TEKS:** §113.44(c)(4)(A–C), §113.44(c)(2)(B)

#### Lesson 4.3 — The Executive Branch: Implementation and Bureaucracy (1.5 hrs)
**Government Focus:** Executive implementation, federal agencies, rulemaking, executive orders
**Activity:**
- A law is just words on paper until an agency implements it. The ACA required:
  - HHS to build Healthcare.gov.
  - IRS to enforce the individual mandate.
  - CMS to approve state Medicaid expansion plans.
  - States to set up exchanges or default to the federal exchange.
- Direct instruction: The bureaucracy is the part of the executive branch that actually does the work. Key agencies: EPA, HHS, DOD, DOJ, DOE, IRS.
- Executive orders: The President can direct agencies without Congress. Limitations: EOs can be reversed by the next President.
- Students identify 3 federal agencies relevant to a policy of their choice and explain each agency's implementation role.

**TEKS:** §113.44(c)(5)(A–C)

#### Lesson 4.4 — The Judicial Branch: Courts as Referees (1.5 hrs)
**Government Focus:** Judicial review, constitutionality, landmark cases
**Activity:**
- When policies are challenged, courts decide whether they're constitutional.
- Key case: NFIB v. Sebelius (2012) — The Supreme Court upheld the ACA's individual mandate as a tax but ruled that the federal government could not force states to expand Medicaid. This single decision meant that some states expanded (lower uninsured rates) and others didn't.
- Judicial review: Marbury v. Madison (1803) established the courts' power to strike down laws.
- Students examine 3 landmark cases where courts changed policy outcomes:
  - Brown v. Board of Education (desegregation)
  - Roe v. Wade → Dobbs (abortion)
  - Obergefell v. Hodges (marriage equality)
- For each: What was the policy before? What changed? What was the reasoning?
- Logical reasoning exercise: Construct an if-then argument for each ruling. "If the 14th Amendment guarantees equal protection, and segregation treats people unequally, then segregation violates the 14th Amendment."

**TEKS:** §113.44(c)(6)(A–C), §111.41(c)(5)

#### Lesson 4.5 — Did It Work? The Evaluation Problem (2.3 hrs)
**Government Focus:** Policy evaluation, unintended consequences
**Statistics Focus:** Before/after comparison, confounding variables
**Activity:**
- The fundamental evaluation question: The uninsured rate dropped after the ACA. But other things changed too (the economy improved, demographics shifted). How do we know the ACA caused the drop?
- Three approaches to evaluation:
  1. **Before/after:** Compare the outcome before and after the policy. Simple but ignores other changes.
  2. **Cross-sectional comparison:** Compare places with the policy to places without (e.g., Medicaid expansion states vs. non-expansion states).
  3. **Difference-in-differences:** Compare the change over time in the treatment group to the change in the control group.
- Introduce DiD intuitively with ACA:
  - Treatment: States that expanded Medicaid.
  - Control: States that didn't.
  - Before: Uninsured rates in both groups before 2014.
  - After: Uninsured rates in both groups after 2014.
  - DiD = (After_treatment - Before_treatment) - (After_control - Before_control).
- R lab: Calculate DiD from state-level uninsured rate data:
```r
medicaid <- read_csv("state_uninsured_medicaid.csv")

did_result <- medicaid %>%
  group_by(expanded_medicaid, period) %>%
  summarize(avg_uninsured = mean(uninsured_rate)) %>%
  pivot_wider(names_from = period, values_from = avg_uninsured) %>%
  mutate(change = After - Before)

# DiD estimate
did_estimate <- did_result$change[did_result$expanded_medicaid == "Yes"] -
                did_result$change[did_result$expanded_medicaid == "No"]
```
- Discussion: DiD is more convincing than before/after alone, but it still has assumptions. What could go wrong?

**TEKS:** §111.47(c)(7), §111.47(c)(4), §111.41(c)(5)

---

### Week 2: Policy Deep Dives (≈8.3 hours)

#### Lesson 4.6 — Case Study: Clean Air Act (2 hrs)
**Government Focus:** Environmental regulation, EPA, federalism in environmental policy
**Statistics Focus:** Time series, before/after
**Activity:**
- The Clean Air Act (1970, amended 1990): Set national air quality standards. Created the EPA.
- R lab: Pull air quality data (PM2.5, ozone, SO2) from EPA historical records (teacher-curated).
- Plot time series of air pollutants since 1970. Mark the Clean Air Act and its amendments.
- Students observe: Dramatic decreases in most pollutants. But economic growth continued.
- Calculate: If someone argues "the Clean Air Act killed the economy," what does GDP data show? (GDP grew dramatically during the same period.)
- Discussion: The Clean Air Act is often cited as a cost-benefit success story. Estimated benefits ($2 trillion) dwarf costs ($65 billion). How are these estimated?

**TEKS:** §113.44(c)(5)(A), §113.44(c)(9)(B), §111.47(c)(2)

#### Lesson 4.7 — Case Study: Texas School Finance (2 hrs)
**Government Focus:** State policy, school funding, equity vs. adequacy
**Statistics Focus:** Comparing distributions, before/after
**R Focus:** Box plots, histograms, summary tables
**Activity:**
- Texas school finance: "Robin Hood" plan (Chapter 41, 1993) required property-wealthy districts to share revenue with property-poor districts. HB 3 (2019) increased state funding.
- Dataset: Per-pupil spending by Texas district (teacher-curated from TEA).
- R lab:
  - Histogram of per-pupil spending. Is it evenly distributed or skewed?
  - Box plot comparing per-pupil spending in property-wealthy vs. property-poor districts.
  - Time-series: Has the gap narrowed since Robin Hood? Since HB 3?
  - Publication-quality summary table:
```r
library(gt)
spending_summary <- districts %>%
  group_by(wealth_category) %>%
  summarize(
    mean_spending = mean(per_pupil),
    median_spending = median(per_pupil),
    sd_spending = sd(per_pupil)
  )
gt(spending_summary) %>%
  tab_header(title = "Per-Pupil Spending by District Wealth Category")
```
- Discussion: Has Robin Hood achieved equity? What does "equity" mean in school finance — equal spending, equal outcomes, or adequate resources?

**TEKS:** §113.44(c)(3)(B), §113.44(c)(1)(A), §111.47(c)(2)

#### Lesson 4.8 — Logical Reasoning in Policy Arguments (1.5 hrs)
**Geometry Focus:** If-then statements, logical arguments, identifying fallacies
**Activity:**
- Policy debates are full of logical claims. Some are valid, some are not.
- Structure of a valid policy argument:
  - Premise 1: If policy X is implemented, then outcome Y should follow (based on theory or evidence).
  - Premise 2: Policy X was implemented.
  - Conclusion: Therefore, we should observe outcome Y.
  - Test: Do the data show outcome Y?
- Students practice with 6 policy claims:
  1. "If raising the minimum wage causes unemployment, then states that raised the minimum wage should have higher unemployment." (Test with data.)
  2. "If gun control reduces gun deaths, then states with stricter gun laws should have fewer gun deaths per capita." (Test with data — but what are the confounders?)
  3. "Since crime dropped after the law was passed, the law caused the drop." (Post hoc fallacy.)
- For each: Is the logic valid? Even if valid, does the data support the conclusion? What confounders exist?

**TEKS:** §111.41(c)(5)(A–B), §113.44(c)(17)

#### Lesson 4.9 — Surveys and Measurement: How Government Knows What It Knows (1 hr)
**Statistics Focus:** Survey design, sampling, response rates, nonresponse bias
**Activity:**
- The government doesn't know outcomes by magic — it conducts surveys.
- Current Population Survey (CPS): Monthly labor force survey, ~60,000 households. Source of unemployment rate and voting/registration data.
- American Community Survey (ACS): ~3.5 million households annually. Source of income, education, housing data.
- National Health Interview Survey (NHIS): Health insurance coverage and utilization data.
- Discussion: What are the weaknesses of surveys? (Nonresponse bias, social desirability bias, question wording.)
- Students examine one actual survey question from CPS and discuss how changing the wording might change the response.
- Connection to margin of error: Revisit from Unit 1. The margin of error exists because surveys sample, not census.

**TEKS:** §111.47(c)(4)(A–C)

#### Lesson 4.10 — Separation of Powers in Action (1.8 hrs)
**Government Focus:** Checks and balances, separation of powers — applied to a current policy
**Activity:**
- Students trace how all three branches interact on a single policy issue:
  - **Example: Immigration.**
    - Legislative: DREAM Act proposed but failed; DACA was never passed by Congress.
    - Executive: President Obama created DACA by executive order (2012). President Trump tried to end it.
    - Judicial: SCOTUS ruled in DHS v. Regents (2020) that the Trump administration's rescission was arbitrary.
  - The policy outcome is the result of all three branches pushing and pulling.
- Students diagram the separation of powers interaction for one policy of their choice (ACA, Clean Air Act, school finance, criminal justice, etc.).
- Key concept: No single branch controls policy outcomes. The system is designed for friction.

**TEKS:** §113.44(c)(2)(A–C), §113.44(c)(5)(A), §113.44(c)(6)(A)

---

### Week 3: The Policy Trace Project (≈8.3 hours)

#### Lesson 4.11 — Choose Your Policy and Build the Data (3 hrs)
**Activity:**
- Students choose a policy to trace. Options (or propose your own with teacher approval):
  1. ACA / Medicaid expansion → uninsured rate
  2. Clean Air Act → air quality indicators
  3. Texas school finance (Robin Hood / HB 3) → per-pupil spending equity
  4. First Step Act (criminal justice) → federal incarceration rate
  5. SNAP / food stamp changes → food insecurity rate
  6. Marriage equality (Obergefell) → marriage rates, legal protections
  7. Minimum wage increases → employment, poverty rates
  8. A Texas state policy of student's choice
- Requirements:
  1. **Policy summary:** What was the problem? What did the policy do? Which branches were involved?
  2. **Data:** At least one before/after time series. At least one treatment/control comparison (if possible).
  3. **Analysis:** Before/after comparison with visualization. Difference-in-differences if applicable. Correlation/regression if relevant.
  4. **Logical argument:** If the policy worked, what should the data show? Does it? What are the confounders?
  5. **Three branches:** How did each branch (legislative, executive, judicial) contribute to the policy outcome?
  6. **R Markdown report** (2–3 pages) with tables, charts, and narrative.

#### Lesson 4.12 — Project Workshop (3 hrs)
**Activity:**
- Workshop time: data collection, R coding, writing.
- Teacher circulates for 1-on-1 conferences.
- Peer review: Partners exchange drafts and check:
  - Is the logical argument clearly stated?
  - Are the data sources credible?
  - Is the before/after comparison convincing?
  - Are confounders addressed?

#### Lesson 4.13 — Presentations & Assessment (2.3 hrs)
**Activity:**
- Policy Trace presentations (5 minutes each + 2 minutes Q&A).
- Focus question for audience: "Is the evidence convincing that this policy achieved its goals?"
- Unit checkpoint quiz: Three branches, policy cycle, DiD concept, logical reasoning (25 minutes).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Policy & Branches | Individual | 25 |
| ACA Time Series Lab | Lab | 20 |
| DiD Calculation Lab | Lab | 25 |
| Case Study Analysis (Clean Air or School Finance) | Analysis Memo | 25 |
| Logical Reasoning Exercise | Practice | 15 |
| Separation of Powers Diagram | Practice | 15 |
| Policy Trace Report | Project | 55 |
| Presentation | Project | 20 |
| **Total** | | **200** |

## Key Vocabulary

policy cycle, problem identification, agenda setting, policy formulation, adoption, implementation, evaluation, legislative process, committee markup, floor vote, conference committee, filibuster, cloture, executive order, rulemaking, bureaucracy, federal agency, judicial review, constitutionality, Marbury v. Madison, NFIB v. Sebelius, separation of powers, checks and balances, before/after comparison, difference-in-differences, treatment group, control group, confounding variable, survey design, response rate, nonresponse bias, current population survey (CPS), if-then reasoning, logical fallacy, post hoc fallacy, Medicaid expansion, Clean Air Act, EPA, school finance equity
