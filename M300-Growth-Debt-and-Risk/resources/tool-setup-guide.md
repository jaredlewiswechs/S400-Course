# Tool Setup Guide — M300 Growth, Debt, and Risk

## RStudio

**URL:** [posit.cloud](https://posit.cloud) (cloud) or [posit.co/download/rstudio-desktop](https://posit.co/download/rstudio-desktop/) (desktop)

Students entering M300 from M200 should already have R and RStudio installed. M300 adds financial and statistical packages.

### Installing M300 Packages

```r
install.packages(c(
  "tidyverse",      # dplyr, ggplot2, tidyr, etc. (should already be installed)
  "FinCal",         # Financial calculator functions (PV, FV, PMT, IRR)
  "scales",         # Dollar and percent formatting for plots
  "broom",          # Tidy regression output
  "openxlsx"        # Read/write Excel files (optional)
))
```

### Key R Skills by Path

#### Path A — Math Models

| Unit | R Skills |
|------|----------|
| 1 | Review: `ggplot2` bar charts and histograms for income/expense data; `dplyr` for summarizing budget categories |
| 2 | `FinCal` for TVM calculations (`pv()`, `fv()`, `pmt()`); custom amortization functions; `ggplot2` for loan comparison plots |
| 3 | `sample()` and `replicate()` for Monte Carlo simulation; `mean()` for expected value estimation; histograms of simulated outcomes |
| 4 | Curve fitting with `nls()` or `lm()` on log-transformed data; depreciation schedule generation; `ggplot2` for comparing depreciation curves |
| 5 | Simulation with `sample()`, `replicate()`, `rbinom()`; permutation/combination verification with `choose()` and `factorial()`; distribution visualization |
| 6 | Full regression pipeline: `lm()`, `summary()`, `broom::tidy()`, residual plots; `ggplot2` for scatter, regression, and residual analysis |

#### Path B — Algebra II

| Unit | R Skills |
|------|----------|
| 1 | Function graphing with `ggplot2` + `stat_function()`; domain analysis; transformation visualization |
| 2 | Polynomial regression with `lm()` and `poly()`; root-finding with `polyroot()`; plotting polynomial and rational functions |
| 3 | Exponential and log regression; `exp()`, `log()`, `log10()`; growth model fitting; log-transform for linearization |
| 4 | `solve()` for systems; plotting systems with `ggplot2`; feasible region visualization |
| 5 | Matrix operations: `matrix()`, `%*%` (multiply), `det()` (determinant), `solve()` (inverse), `solve(A, b)` (system) |
| 6 | Sequence generation with `seq()` and recursive loops; `cumsum()` for partial sums; series convergence visualization |

### Example: Amortization Table in R (Path A)

```r
library(tidyverse)

# Loan parameters
principal <- 25000
annual_rate <- 0.065
months <- 60
monthly_rate <- annual_rate / 12
payment <- principal * monthly_rate / (1 - (1 + monthly_rate)^(-months))

# Build amortization table
balance <- principal
amort <- tibble(month = 1:months, payment = payment, interest = 0, principal_paid = 0, balance = 0)

for (i in 1:months) {
  int <- balance * monthly_rate
  prin <- payment - int
  balance <- balance - prin
  amort$interest[i] <- int
  amort$principal_paid[i] <- prin
  amort$balance[i] <- max(balance, 0)
}

# Plot: principal vs. interest over time
amort %>%
  pivot_longer(cols = c(interest, principal_paid), names_to = "type", values_to = "amount") %>%
  ggplot(aes(x = month, y = amount, fill = type)) +
  geom_area() +
  scale_y_continuous(labels = scales::dollar) +
  labs(title = "Monthly Payment Breakdown: Interest vs. Principal",
       x = "Month", y = "Amount ($)") +
  theme_minimal()
```

### Example: Matrix System Solving in R (Path B)

```r
# Solve the system:
# 2x + 3y - z = 1
# 4x + y + 2z = 11
# -x + 2y + 3z = 7

A <- matrix(c(2, 4, -1, 3, 1, 2, -1, 2, 3), nrow = 3)
b <- c(1, 11, 7)

# Solve using inverse matrix
x <- solve(A, b)
cat("Solution: x =", x[1], ", y =", x[2], ", z =", x[3], "\n")

# Verify: A %*% x should equal b
A %*% x
```

---

## Spreadsheets (Google Sheets / Excel)

### Path A: Primary Spreadsheet Skills

| Unit | Spreadsheet Skills |
|------|-------------------|
| 1 | Budget templates, `SUM`, `SUMIF`, income/expense categories, pie charts, bar charts |
| 2 | Amortization tables with cell references, `PMT()`, `FV()`, `PV()` functions, conditional formatting for interest vs. principal |
| 3 | Expected value tables, decision matrices, `AVERAGE`, `IF` for scenario modeling |
| 4 | Depreciation schedules (straight-line and declining balance), `SLN()`, `DB()`, `SYD()` functions, line charts |
| 5 | Counting tables, `COMBIN()`, `PERMUT()`, `BINOM.DIST()`, frequency tables |
| 6 | Pivot tables, summary statistics (`AVERAGE`, `STDEV`, `MEDIAN`), `LINEST()` for regression |

### Path B: Spreadsheet Skills

| Unit | Spreadsheet Skills |
|------|-------------------|
| 3 | Compound interest tables, `EXP()`, `LN()`, growth model comparison |
| 5 | Matrix entry, `MMULT()`, `MINVERSE()`, `MDETERM()` for matrix operations |
| 6 | Recursive sequence generation (cell references for `a(n) = f(a(n-1))`), partial sum tables |

### Key Spreadsheet Functions for Path A

```
Financial Functions:
  =PMT(rate, nper, pv)         Monthly payment on a loan
  =FV(rate, nper, pmt, pv)     Future value of an investment
  =PV(rate, nper, pmt, fv)     Present value
  =SLN(cost, salvage, life)    Straight-line depreciation per period
  =DB(cost, salvage, life, period)   Declining balance depreciation
  =SYD(cost, salvage, life, period)  Sum-of-years-digits depreciation

Statistical Functions:
  =AVERAGE(range)              Mean
  =MEDIAN(range)               Median
  =STDEV(range)                Standard deviation (sample)
  =COMBIN(n, k)                Combinations: C(n,k)
  =PERMUT(n, k)                Permutations: P(n,k)
  =BINOM.DIST(k, n, p, FALSE) Binomial probability: P(X = k)
  =NORM.DIST(x, mean, sd, TRUE)  Normal CDF: P(X ≤ x)
```

---

## Desmos

**URL:** [desmos.com/calculator](https://www.desmos.com/calculator)

### Key Desmos Features by Path

#### Path A — Math Models

| Feature | How It's Used |
|---------|---------------|
| **Exponential graphing** | Visualize compound interest curves `y = P(1 + r)^x` (Unit 2) |
| **Sliders** | Explore how interest rate, term, and principal affect total cost (Unit 2) |
| **Probability distributions** | Plot binomial distributions; explore normal curves (Unit 5) |
| **Regression** | Fit lines to scatter plots; examine residuals (Unit 6) |
| **Decay curves** | Visualize depreciation: `y = P(1 - r)^x` (Unit 4) |

#### Path B — Algebra II

| Feature | How It's Used |
|---------|---------------|
| **Parent functions** | Catalog of parent functions with transformation sliders (Unit 1) |
| **Polynomial graphing** | End behavior, zeros, turning points (Unit 2) |
| **Rational function graphing** | Asymptotes, holes, domain restrictions (Unit 2) |
| **Exponential & log exploration** | `y = a·b^x`, `y = log_b(x)` with sliders for base (Unit 3) |
| **System graphing** | Intersections of linear, quadratic, and other functions (Unit 4) |
| **Sequence plotting** | Plot terms `(n, a_n)` and partial sums (Unit 6) |

### Desmos Tips

- **Sliders:** Type a parameter like `a` in an equation and Desmos auto-creates a slider. Use this to explore how changing parameters affects the graph.
- **Tables:** Click the "+" button and select "table" to enter data points. Then fit a regression model: type `y₁ ~ mx₁ + b` (linear) or `y₁ ~ a·b^x₁` (exponential).
- **Restrictions:** Use `{0 < x < 10}` to restrict the domain of a function.
- **Folders:** Organize related expressions into folders for complex explorations.

---

## Financial Calculators

### Recommended Calculator

**TI BA II Plus** (or equivalent financial calculator). Available for ~$30, or use a free online TVM calculator.

### Key Financial Calculator Skills (Path A)

| Skill | Keys (TI BA II Plus) |
|-------|---------------------|
| Enter TVM values | `N` (periods), `I/Y` (interest rate per year), `PV` (present value), `PMT` (payment), `FV` (future value) |
| Compute unknown | Enter 4 of 5 TVM values, press `CPT` then the unknown |
| Monthly payment | Set `P/Y = 12`. Enter annual rate in `I/Y`. Enter total months in `N`. |
| Clear TVM | `2nd` → `CLR TVM` |
| Amortization | `2nd` → `AMORT`: set `P1` and `P2`, then scroll to see `BAL`, `PRN`, `INT` |

### Example: Monthly Car Payment

A $25,000 car loan at 6.5% APR for 5 years:
- `N = 60` (5 years × 12 months)
- `I/Y = 6.5` (annual rate — calculator converts to monthly)
- `PV = 25000`
- `FV = 0` (fully paid off)
- `CPT` → `PMT` = **−$489.15** (negative = cash outflow)

### Alternative: Online TVM Calculator

Students without a financial calculator can use any TVM calculator. The key is understanding the five variables (N, I/Y, PV, PMT, FV) and that exactly four must be known to solve for the fifth.

---

## Graphing Calculators (Path B)

### Key Calculator Skills for Path B

| Skill | Keys (TI-84) |
|-------|--------------|
| Graph functions | `Y=` → enter function → `GRAPH` |
| Find zeros | `2nd` → `CALC` → `2:zero` → set bounds |
| Find intersections | `2nd` → `CALC` → `5:intersect` → select both curves |
| Matrix entry | `2nd` → `MATRIX` → `EDIT` → enter dimensions and values |
| Matrix operations | `2nd` → `MATRIX` → select matrix → use `×`, `^-1`, `det()` |
| Sequence mode | `MODE` → `SEQ` → `Y=` → enter `u(n)` and `u(nMin)` |
| Table of values | `2nd` → `TABLE` (or `2nd` → `TBLSET` to configure) |

**Important:** Ensure calculators are in appropriate mode:
- DEGREE mode for any trigonometric work (rare in M300, but possible in applications).
- FLOAT mode for decimal precision in financial calculations.
- SEQ mode for sequence graphing (Path B, Unit 6).

---

## Folder Structure Convention

### Path A Students

```
M300-Path-A/
  unit-1/
    budget_analysis.xlsx        (or .gsheet)
    income_data.csv
    budget_report.Rmd
  unit-2/
    amortization_table.xlsx
    loan_comparison.Rmd
  unit-3/
    insurance_analysis.Rmd
    simulation_data.csv
  unit-4/
    depreciation_schedule.xlsx
    depreciation_report.Rmd
  unit-5/
    simulation.R
    probability_report.Rmd
  unit-6/
    dataset.csv
    policy_brief.Rmd
  data/
    (shared datasets)
```

### Path B Students

```
M300-Path-B/
  unit-1/
    transformation_gallery.Rmd
  unit-2/
    polynomial_modeling.Rmd
    data.csv
  unit-3/
    growth_decay_analysis.Rmd
    data.csv
  unit-4/
    optimization_report.Rmd
  unit-5/
    matrix_portfolio.Rmd
  unit-6/
    capstone_model.Rmd
    sequence_data.csv
  data/
    (shared datasets)
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `FinCal` package won't install | Try `install.packages("FinCal")`; if still fails, use manual TVM formulas in R |
| Spreadsheet `PMT()` gives wrong sign | Financial functions use cash-flow sign convention: outflows are negative, inflows positive |
| Desmos regression won't fit | Ensure data is in a table; use `y₁ ~` notation; check that the model type matches the data |
| Financial calculator shows `Error 5` | One of the TVM variables has an impossible value (e.g., negative periods); press `2nd` → `CLR TVM` and re-enter |
| Matrix `solve()` gives error in R | Matrix may be singular (determinant = 0); check `det(A)` first |
| Spreadsheet `MMULT()` doesn't work | Must be entered as an array formula: select output range, type formula, press `Ctrl+Shift+Enter` (Excel) or just `Enter` (Google Sheets) |
| R `polyroot()` returns complex numbers | This is correct — polynomial roots can be complex; use `Re()` and `Im()` to separate real and imaginary parts |
| Sequence mode not showing on TI-84 | Press `MODE` → select `SEQ` (instead of `FUNC`); then `Y=` will show `u(n)` notation |
