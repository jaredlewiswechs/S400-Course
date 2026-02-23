# Unit 1 — Your Money as Data

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Your Money as Data |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Where does your money actually go — and what can the numbers tell you?* |
| Economics TEKS | §113.31(c)(1), (7), (9) |
| Algebra I TEKS | §111.39(c)(2), (5), (12) |
| R Skills | RStudio setup, assignment operator, `read_csv()`, `head()`, `summary()`, basic `ggplot()` bar/column charts, Google Sheets import |
| Key Deliverable | Personal Budget Data Dashboard (Google Sheets + R visualization) |

## Unit Narrative

This unit is the course's on-ramp. Students encounter two core economic ideas — scarcity and opportunity cost — through their own spending. The opening week uses Google Sheets so the barrier is low; by the end of Week 2, students have transitioned to RStudio, where they recreate their budget charts with `ggplot2`. The math strand introduces linear expressions (budgets are additive) and previews exponential growth through compound interest. Every lesson answers a version of the question: *What story do these numbers tell about how you use money?*

## Economics Concepts

- Scarcity and unlimited wants vs. limited resources
- Opportunity cost — every dollar has an alternative use
- Budgeting: income, expenses, fixed vs. variable costs
- Saving, interest, and the time value of money
- Role of banks and the Federal Reserve (introductory)
- Personal financial literacy: reading a pay stub, understanding deductions

## Math Concepts (Algebra I)

- Variables and expressions: representing income and expenses algebraically
- Linear equations: `Income - Expenses = Savings` → `y = mx + b` framing
- Evaluating and simplifying expressions §111.39(c)(12)
- Graphing linear relationships §111.39(c)(2)
- Introduction to exponential growth: compound interest formula §111.39(c)(5)
- Percent calculations: tax, tip, deductions

---

## Lesson Sequence

### Week 1: Money In, Money Out (≈8.3 hours)

#### Lesson 1.1 — The Scarcity Problem (1.5 hrs)
**Economics Focus:** Scarcity, wants vs. needs, opportunity cost
**Activity:**
- Warm-up: Students receive a hypothetical $200 and a menu of 15 items with prices. They must choose — they cannot buy everything. Class discusses what they gave up (opportunity cost).
- Direct instruction: Scarcity as the foundational economic problem. Factors of production (land, labor, capital, entrepreneurship).
- Exit ticket: Write one sentence explaining opportunity cost using a real example from your week.

**TEKS:** §113.31(c)(1)(A–B)

#### Lesson 1.2 — Tracking Your Money: Google Sheets Budget (2 hrs)
**Economics Focus:** Budgeting, income vs. expenses, fixed vs. variable costs
**Math Focus:** Categorical data, column sums, percent of total
**Activity:**
- Students create a Google Sheets budget tracker from a provided template.
- Columns: Date, Item, Category (Food, Transport, Entertainment, Savings, Other), Amount, Fixed/Variable.
- Students enter 2 weeks of estimated personal spending (or use a provided sample dataset for students who prefer not to share personal data).
- Calculate: total spending, spending by category, percent of total per category.
- Formulas: `=SUM()`, `=SUMIF()`, `=value/total*100`.

**TEKS:** §113.31(c)(9)(A), §111.39(c)(12)

#### Lesson 1.3 — Reading a Pay Stub (1.5 hrs)
**Economics Focus:** Gross vs. net income, taxes, FICA, deductions
**Math Focus:** Percent calculations, linear expressions
**Activity:**
- Students receive three sample pay stubs (hourly worker, salaried worker, gig worker).
- Calculate effective tax rate, take-home pay, annual gross from hourly rate.
- Express relationships: `Net = Gross - (Gross × tax_rate)` → simplify to `Net = Gross × (1 - tax_rate)`.
- Class discussion: Where does the deducted money go? (Introduction to government role, Social Security, Medicare.)

**TEKS:** §113.31(c)(9)(B), §113.31(c)(8)(A), §111.39(c)(2), §111.39(c)(12)

#### Lesson 1.4 — Your First Bar Chart in Sheets (1.5 hrs)
**Economics Focus:** Visualizing spending patterns
**Math Focus:** Interpreting categorical data displays
**Activity:**
- Students create a bar chart of spending by category from their Lesson 1.2 data.
- Mini-lesson: What makes a good chart? (Title, axis labels, appropriate scale.)
- Pair-share: What does your chart tell you about your spending priorities?
- Write a 3-sentence "data memo" interpreting the chart.

**TEKS:** §113.31(c)(21), §111.39(c)(8)

#### Lesson 1.5 — The Budget Equation (1.8 hrs)
**Economics Focus:** Budget surplus, deficit, balanced budget
**Math Focus:** Linear equations, solving for unknowns
**Activity:**
- Define: `Income - Expenses = Savings` (or deficit if negative).
- Students write their own budget as an equation. Solve: "If you want to save $50/month, and your income is $400, what's the maximum you can spend?"
- Introduce the idea of constraints. Graph the relationship: x-axis = expenses, y-axis = savings, for a fixed income. Identify slope and y-intercept.
- Practice problems: 5 budget-equation scenarios with varying incomes and savings goals.

**TEKS:** §113.31(c)(9)(A), §111.39(c)(2)(B–C), §111.39(c)(12)

---

### Week 2: RStudio — Your New Calculator (≈8.3 hours)

#### Lesson 1.6 — Welcome to RStudio (2 hrs)
**R Focus:** Interface tour, console, script editor, Environment pane
**Activity:**
- Students open RStudio (Cloud or Desktop). Teacher-led tour: Console, Source, Environment, Files/Plots.
- Type-along: `3 + 4`, `x <- 10`, `x * 2`, `name <- "Houston"`.
- Key vocabulary: variable, assignment (`<-`), function, argument.
- Challenge: Create variables for `hourly_wage`, `hours_per_week`, `weeks_per_month`. Calculate `monthly_income`.
- Save a script file: `unit1_calculator.R`.

**TEKS:** §111.39(c)(12)

#### Lesson 1.7 — From Sheets to R: read_csv() (2 hrs)
**R Focus:** `read_csv()`, `head()`, `str()`, `summary()`
**Activity:**
- Students export their Google Sheets budget as a CSV.
- In RStudio: `library(tidyverse)`, `budget <- read_csv("my_budget.csv")`.
- Explore: `head(budget)`, `str(budget)`, `summary(budget)`.
- Calculate total spending: `sum(budget$Amount)`.
- Filter to one category: `budget %>% filter(Category == "Food")`.
- Discuss: What does R give you that Sheets doesn't? (Reproducibility, scripting, scale.)

**TEKS:** §111.39(c)(12)

#### Lesson 1.8 — Your First ggplot (2 hrs)
**R Focus:** `ggplot()`, `aes()`, `geom_col()`, `labs()`
**Activity:**
- Rebuild the Google Sheets bar chart in R:
```r
ggplot(budget_summary, aes(x = Category, y = Total)) +
  geom_col(fill = "steelblue") +
  labs(title = "My Spending by Category",
       x = "Category", y = "Dollars") +
  theme_minimal()
```
- Students customize: colors, titles, reorder bars by value.
- Compare: Sheets chart vs. R chart. Which is more flexible? Which is more reproducible?

**TEKS:** §111.39(c)(8)

#### Lesson 1.9 — The Class Spending Portrait (2.3 hrs)
**Economics Focus:** Aggregate data, patterns in consumer behavior
**R Focus:** Combining datasets, `bind_rows()`, `group_by()`, `summarize()`
**Activity:**
- Teacher compiles anonymized class spending data (or uses pre-built dataset).
- Students load combined data and calculate: average spending by category across the class.
- Create a faceted bar chart: `facet_wrap(~Category)`.
- Discussion: Where does our class's money go? How does this compare to national Consumer Expenditure Survey data from BLS?
- Economic connection: Consumer spending drives ~70% of US GDP.

**TEKS:** §113.31(c)(1), §113.31(c)(6)(A), §111.39(c)(8)

---

### Week 3: The Time Value of Money (≈8.3 hours)

#### Lesson 1.10 — Simple vs. Compound Interest (2 hrs)
**Economics Focus:** Saving, interest rates, banks, time value of money
**Math Focus:** Linear vs. exponential growth
**Activity:**
- Scenario: You deposit $1,000. Bank A pays 5% simple interest. Bank B pays 5% compound interest (annual).
- Students calculate balances for years 1–10 in a table.
- Graph both on the same axes. Identify: Which is linear? Which is exponential?
- Write equations: Simple → `A = P + Prt = P(1 + rt)` (linear in t). Compound → `A = P(1 + r)^t` (exponential in t).
- R lab: Generate both curves with `seq()` and plot them.

**TEKS:** §113.31(c)(7)(A), §113.31(c)(9)(C), §111.39(c)(2), §111.39(c)(5)

#### Lesson 1.11 — The Federal Reserve and Interest Rates (1.5 hrs)
**Economics Focus:** Role of the Federal Reserve, monetary policy, federal funds rate
**Activity:**
- Direct instruction: What is the Fed? What does it do? How does it influence interest rates?
- R lab: Use `fredr` package to pull the federal funds rate over time.
```r
library(fredr)
fed_funds <- fredr(series_id = "FEDFUNDS")
ggplot(fed_funds, aes(x = date, y = value)) +
  geom_line() +
  labs(title = "Federal Funds Rate (1954–Present)",
       y = "Rate (%)")
```
- Students annotate the graph: When did rates spike? When did they drop? What was happening in the economy?

**TEKS:** §113.31(c)(7)(B–C), §113.31(c)(8)(B), §111.39(c)(2)

#### Lesson 1.12 — Inflation: Your Dollar Over Time (2 hrs)
**Economics Focus:** Inflation, Consumer Price Index (CPI), purchasing power
**Math Focus:** Exponential decay of purchasing power, percent change
**Activity:**
- Use `fredr` to pull CPI data. Calculate: What did $100 in 2000 buy in 2024 dollars?
- Formula: `Real_value = Nominal / (CPI_current / CPI_base)`.
- Students pick an item (gallon of gas, movie ticket, minimum wage) and trace its real vs. nominal price over 20 years.
- R visualization: dual-axis or side-by-side line plots of nominal vs. real prices.
- Discussion: Is a $15 minimum wage in 2024 the same as $15 in 2010?

**TEKS:** §113.31(c)(6)(B), §113.31(c)(7)(A), §111.39(c)(5), §111.39(c)(12)

#### Lesson 1.13 — The Credit Card Trap (1.5 hrs)
**Economics Focus:** Credit, debt, interest rates on consumer debt
**Math Focus:** Exponential growth of debt
**Activity:**
- Scenario: You owe $2,000 on a credit card at 22% APR. You pay only the minimum ($50/month). How long until it's paid off? How much total do you pay?
- Students build an R simulation:
```r
balance <- 2000
rate <- 0.22 / 12
payment <- 50
months <- 0
total_paid <- 0
while (balance > 0) {
  interest <- balance * rate
  balance <- balance + interest - payment
  total_paid <- total_paid + payment
  months <- months + 1
}
```
- Vary the payment amount. Graph months-to-payoff vs. monthly payment.
- Economic lesson: Why do credit card companies love minimum payments?

**TEKS:** §113.31(c)(9)(D), §111.39(c)(5), §111.39(c)(12)

#### Lesson 1.14 — Unit 1 Project: Personal Budget Data Dashboard (3.3 hrs)
**Deliverable:** A one-page R-generated dashboard (or R Markdown document) showing:
1. A bar chart of the student's spending by category
2. A line chart showing projected savings over 12 months (linear) vs. savings with interest (exponential)
3. A 5-sentence data memo interpreting the dashboard

**Rubric Criteria:**
- Correct R code that runs without errors (25%)
- Accurate economic vocabulary (scarcity, opportunity cost, interest, inflation) (25%)
- Clear, well-labeled visualizations (25%)
- Written interpretation connects data to economic concepts (25%)

**TEKS:** §113.31(c)(21–23), §111.39(c)(2), §111.39(c)(5), §111.39(c)(8)

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Scarcity & Opportunity Cost | Individual | 20 |
| Google Sheets Budget | Lab | 25 |
| R Labs (Lessons 1.6–1.9) | Lab | 40 |
| Compound Interest R Lab | Lab | 25 |
| FRED Interest Rate Annotation | Analysis Memo | 20 |
| Inflation Analysis | Analysis Memo | 20 |
| Unit Project: Budget Dashboard | Project | 50 |
| **Total** | | **200** |

## Key Vocabulary

scarcity, opportunity cost, wants, needs, factors of production, budget, income, expense, fixed cost, variable cost, gross income, net income, deduction, FICA, interest, simple interest, compound interest, principal, rate, inflation, CPI, purchasing power, Federal Reserve, monetary policy, federal funds rate, credit, APR, minimum payment, consumer spending, GDP
