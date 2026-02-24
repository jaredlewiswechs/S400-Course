# Unit 1 — Personal Finance

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Personal Finance |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How much do you actually earn, where does the money go, and how do you build a plan that makes your income work for your life?* |
| Math Models TEKS | §111.43(c)(2), (3) |
| Tools | Spreadsheets (Google Sheets / Excel), RStudio, financial calculators |
| Key Deliverable | Personal Budget Analysis — students build a complete monthly budget from a simulated pay stub, analyze spending categories, and project savings growth over time |

## Unit Narrative

Personal finance is the mathematics students will use every day for the rest of their lives — yet most encounter it for the first time only after making costly mistakes. This unit grounds every formula in a concrete question: How much will I actually take home? Where should the money go? What does it cost to wait? Students begin by dissecting a realistic pay stub — distinguishing gross income from net income, tracing every deduction (federal tax, state tax, FICA, benefits), and understanding marginal tax brackets as a piecewise function. From there, they build budgets using the 50/30/20 framework, model checking and savings account behavior in spreadsheets, and calculate simple opportunity costs. RStudio enters as a visualization tool: students pull Census income data to see how education, occupation, and geography affect earnings, then plot their own budget allocations against national averages.

The unit closes with a capstone project in which each student constructs a complete monthly budget from a simulated job offer. They must compute net pay from a gross salary, allocate spending across categories, identify a savings target, and project the growth of that savings using the time value of money. The project is built entirely in a spreadsheet, with at least one supporting RStudio visualization — a bar chart of budget categories or a line chart of projected savings growth. This unit establishes the computational and spreadsheet habits that carry through all six units of Path A.

## Math Concepts

- Gross income vs. net income calculations §111.43(c)(3)
- Federal income tax as a piecewise function (marginal tax brackets) §111.43(c)(3)
- FICA taxes: Social Security (6.2%) and Medicare (1.45%) §111.43(c)(3)
- Percentage calculations: deductions, withholdings, and rates §111.43(c)(2)
- Budgeting as a system of linear constraints (income = needs + wants + savings) §111.43(c)(3)
- The 50/30/20 budgeting rule as a proportional allocation model §111.43(c)(3)
- Simple interest: `I = Prt` §111.43(c)(3)
- Compound interest introduction: `A = P(1 + r/n)^(nt)` §111.43(c)(3)
- Time value of money: present value vs. future value §111.43(c)(3)
- Opportunity cost as a mathematical comparison §111.43(c)(2)
- Net worth calculation: assets minus liabilities §111.43(c)(3)
- Reading and interpreting data displays (bar charts, histograms, line charts) §111.43(c)(2)

---

## Lesson Sequence

### Week 1: Earning and Taxes (≈8.3 hours)

#### Lesson 1.1 — Understanding a Pay Stub (2 hrs)
**Math Models Focus:** Gross income, deductions, net income, percentage calculations
**Activity:**
- Warm-up: Show a realistic pay stub on screen (simulated employee, biweekly pay). Ask: "This person's salary is $45,000 per year. Why is the check only $1,384.62?"
- Students receive a detailed pay stub handout. Walk through every line:
  - Gross pay (biweekly): $45,000 / 26 = $1,730.77
  - Federal income tax withholding: ~$157.00
  - Social Security (6.2%): $107.31
  - Medicare (1.45%): $25.10
  - State income tax (if applicable, use Texas = $0 — discuss why Texas has no state income tax and what other states charge)
  - Health insurance premium: $45.00
  - 401(k) contribution (5%): $86.54
  - Net pay: what remains after all deductions
- Students calculate each deduction as a percentage of gross pay and as a percentage of the total deductions.
- Spreadsheet activity: Students build a pay stub calculator in Google Sheets. Input: annual salary. Output: biweekly gross pay, each deduction, and net pay.
- Discussion: "You earn $45,000 but keep about $38,000. Where did the other $7,000 go — and is any of it coming back?" (Tax refunds, 401(k) growth.)

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.2 — Tax Brackets and Marginal Tax Rates (2.5 hrs)
**Math Models Focus:** Piecewise functions, marginal vs. effective tax rates
**Activity:**
- Common misconception: "If I earn $50,000 and the tax bracket is 22%, I owe $11,000 in taxes." This is wrong.
- Introduce the 2024 federal tax brackets (single filer):

| Bracket | Rate |
|---------|------|
| $0 – $11,600 | 10% |
| $11,601 – $47,150 | 12% |
| $47,151 – $100,525 | 22% |
| $100,526 – $191,950 | 24% |

- Marginal vs. effective: Each bracket only applies to income within that range. A person earning $50,000 pays:
  - 10% on the first $11,600 = $1,160
  - 12% on the next $35,550 = $4,266
  - 22% on the remaining $2,850 = $627
  - Total = $6,053 → Effective rate = $6,053 / $50,000 = 12.1%
- The tax system is a piecewise linear function:
  ```
  T(x) = 0.10x                           if 0 < x ≤ 11,600
  T(x) = 1,160 + 0.12(x - 11,600)       if 11,600 < x ≤ 47,150
  T(x) = 5,426 + 0.22(x - 47,150)       if 47,150 < x ≤ 100,525
  ```
- Spreadsheet lab: Students build a tax calculator using nested IF statements in Google Sheets. Input any income, output the federal tax owed and the effective rate.
  ```
  =IF(B2<=11600, B2*0.10,
    IF(B2<=47150, 1160+0.12*(B2-11600),
      IF(B2<=100525, 5426+0.22*(B2-47150),
        17168.50+0.24*(B2-100525))))
  ```
- Practice: Calculate federal tax for salaries of $30,000, $55,000, $80,000, and $120,000. Find the effective rate for each.
- Discussion: "Why does the government use marginal brackets instead of a flat rate?" (Progressivity, fairness debate.)

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.3 — FICA, State Taxes, and Total Tax Burden (1.5 hrs)
**Math Models Focus:** Multiple percentage-based deductions, cumulative rates
**Activity:**
- FICA breakdown:
  - Social Security: 6.2% on income up to $168,600 (2024 cap). Employer matches 6.2%.
  - Medicare: 1.45% on all income. No cap. Employer matches 1.45%.
  - Total employee FICA: 7.65% on most incomes.
- State income tax: Texas has none, but compare to California (up to 13.3%), New York (up to 10.9%), Florida (0%). How would a $60,000 salary differ across states?
- Total tax burden calculation: Federal + FICA + State = total effective tax rate.
- Spreadsheet extension: Add FICA and state tax to the pay stub calculator from Lesson 1.1.
- Practice: Given a $65,000 salary in Texas, California, and New York, calculate the total tax burden and take-home pay for each.
- RStudio preview: Students will later visualize how effective tax rates change across income levels.

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.4 — Income Data Visualization in RStudio (2.3 hrs)
**Math Models Focus:** Reading data, creating visualizations, interpreting distributions
**Activity:**
- Context: How much do people actually earn? And what factors influence income?
- Dataset: Bureau of Labor Statistics (BLS) median weekly earnings by education level (provided as CSV):
  ```
  education,median_weekly_earnings
  Less than high school,682
  High school diploma,853
  Some college,935
  Associate degree,1,005
  Bachelor's degree,1,432
  Master's degree,1,661
  Professional degree,2,083
  Doctoral degree,2,080
  ```
- RStudio walkthrough:
  ```r
  # Load data
  income <- read.csv("earnings_by_education.csv")

  # Create bar chart
  library(ggplot2)
  ggplot(income, aes(x = reorder(education, median_weekly_earnings),
                     y = median_weekly_earnings)) +
    geom_col(fill = "steelblue") +
    coord_flip() +
    labs(title = "Median Weekly Earnings by Education Level",
         x = "Education Level",
         y = "Median Weekly Earnings ($)") +
    theme_minimal()
  ```
- Students calculate annual income from weekly earnings: `weekly * 52`.
- Extension: Students compute the federal tax and effective rate for each education level's median income and add it to the chart.
- Discussion: "A bachelor's degree holder earns about $1,432/week vs. $853 for a high school diploma. Over a 40-year career, what's the difference?" ($1,432 - $853) * 52 * 40 = $1,204,480 difference.

**TEKS:** §111.43(c)(2), §111.43(c)(3)

---

### Week 2: Budgeting and Accounts (≈8.3 hours)

#### Lesson 1.5 — The 50/30/20 Budget Framework (2.5 hrs)
**Math Models Focus:** Proportional allocation, budget as a linear constraint system
**Activity:**
- The 50/30/20 rule: After-tax income split into:
  - 50% Needs: rent, utilities, groceries, insurance, minimum debt payments, transportation
  - 30% Wants: dining out, entertainment, subscriptions, travel, hobbies
  - 20% Savings & debt payoff: emergency fund, retirement contributions, extra debt payments
- Mathematical framing: If net monthly income = N, then:
  - Needs ≤ 0.50N
  - Wants ≤ 0.30N
  - Savings ≥ 0.20N
  - Needs + Wants + Savings = N (this is a constraint: the budget must balance)
- Example: Net monthly income = $3,200.
  - Needs budget: $1,600 (rent $1,000, groceries $350, utilities $150, transportation $100)
  - Wants budget: $960 (dining $200, entertainment $150, subscriptions $60, clothing $100, misc $450)
  - Savings: $640 (emergency fund $400, extra to student loans $240)
- Spreadsheet lab: Students build a budget template with three category sections. Formulas calculate totals and percentages. Conditional formatting highlights categories that exceed their allocation (red if over, green if under).
- Class exercise: Give students 5 different income/expense scenarios. They must allocate spending to stay within the 50/30/20 framework — or justify why adjustments are needed (e.g., high-rent cities may require 60/20/20).

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.6 — Checking Accounts and Banking Fees (1.5 hrs)
**Math Models Focus:** Account balance tracking, fee structures, conditional logic
**Activity:**
- Checking account basics: deposits, withdrawals, balance, overdraft.
- Fee structures:
  - Monthly maintenance fee ($12/month, waived if balance > $1,500 or direct deposit)
  - Overdraft fee ($35 per transaction)
  - ATM fees ($2.50 per out-of-network withdrawal)
  - Wire transfer fees ($25 domestic)
- Spreadsheet exercise: Students track a month of simulated transactions (20 entries: deposits, checks, debit card purchases, ATM withdrawals). They maintain a running balance and flag any overdraft events.
  ```
  | Date   | Description           | Amount   | Balance  |
  |--------|-----------------------|----------|----------|
  | 10/1   | Opening balance       |          | 1,200.00 |
  | 10/3   | Paycheck deposit      | +1,384.62| 2,584.62 |
  | 10/5   | Rent payment          | -1,000.00| 1,584.62 |
  | 10/7   | Grocery store         |  -127.43 | 1,457.19 |
  | ...    | ...                   | ...      | ...      |
  ```
- Fee analysis: If the balance drops below $1,500, add the $12 monthly fee. If the balance goes negative, add a $35 overdraft fee per transaction. How much do fees cost over a year?
- Discussion: "Overdraft fees disproportionately affect low-income households. Some banks charge $35 for a $5 purchase that overdrafts the account. Is this fair? Is it profitable for the bank?"

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.7 — Savings Vehicles: Accounts and CDs (2 hrs)
**Math Models Focus:** Simple interest, compound interest introduction, comparing rates
**Activity:**
- Savings account: Earns interest on deposits. Current rates: ~4.5% APY for high-yield savings, ~0.5% for traditional.
- Simple interest: `I = Prt` where P = principal, r = annual rate, t = years.
  - Example: $5,000 at 4.5% simple interest for 3 years → I = 5000 * 0.045 * 3 = $675. Total = $5,675.
- Compound interest (introduction): `A = P(1 + r/n)^(nt)` where n = compounding periods per year.
  - Same example with monthly compounding: A = 5000(1 + 0.045/12)^(12*3) = 5000(1.00375)^36 = $5,722.48.
  - Difference from simple interest: $5,722.48 - $5,675 = $47.48 more. Compounding earns interest on interest.
- Certificate of Deposit (CD): Higher rate, but money is locked for a fixed term (6 months, 1 year, 2 years, 5 years). Early withdrawal penalty.
  - Compare: Savings account at 4.5% vs. 2-year CD at 5.0%. Which earns more over 2 years?
- Spreadsheet lab: Build a compound interest calculator. Inputs: P, r, n, t. Output: future value A and total interest earned.
- Practice: 8 problems comparing simple vs. compound interest and different savings vehicles.
- Desmos exploration: Graph `A = 5000(1.045)^t` and `A = 5000(1 + 0.045t)` on the same axes. Where do they diverge? What happens as t increases?

**TEKS:** §111.43(c)(3)

#### Lesson 1.8 — Net Worth and the Personal Balance Sheet (2.3 hrs)
**Math Models Focus:** Assets minus liabilities, tracking financial position over time
**Activity:**
- Net worth = Total Assets - Total Liabilities.
  - Assets: savings, checking, retirement accounts, vehicle value, home equity, investments.
  - Liabilities: credit card debt, student loans, auto loan, mortgage balance.
- Example: A 25-year-old recent graduate:
  - Assets: Checking $2,500 + Savings $8,000 + Car value $12,000 + 401(k) $3,500 = $26,000
  - Liabilities: Student loans $35,000 + Auto loan $8,000 = $43,000
  - Net worth: $26,000 - $43,000 = -$17,000 (negative net worth — very common for young adults)
- Spreadsheet lab: Students build a personal balance sheet template. They create a simulated scenario for a 25-year-old and project net worth at ages 30, 35, 40, and 50 — assuming:
  - Student loans decrease by $5,000/year (payments)
  - Savings increase by $3,600/year (monthly deposits)
  - 401(k) grows at 7% annually with $3,000/year contributions
- RStudio visualization:
  ```r
  ages <- c(25, 30, 35, 40, 50)
  net_worth <- c(-17000, -2000, 45000, 120000, 380000)
  df <- data.frame(Age = ages, Net_Worth = net_worth)

  ggplot(df, aes(x = Age, y = Net_Worth)) +
    geom_line(color = "darkgreen", linewidth = 1.2) +
    geom_point(size = 3) +
    geom_hline(yintercept = 0, linetype = "dashed", color = "red") +
    labs(title = "Projected Net Worth Over Time",
         y = "Net Worth ($)") +
    scale_y_continuous(labels = scales::dollar) +
    theme_minimal()
  ```
- Discussion: "At what age does this person's net worth turn positive? What would change that timeline — faster debt payoff, higher savings rate, or higher investment returns?"

**TEKS:** §111.43(c)(2), §111.43(c)(3)

---

### Week 3: Time Value of Money and the Budget Project (≈8.3 hours)

#### Lesson 1.9 — Time Value of Money and Opportunity Cost (2 hrs)
**Math Models Focus:** Present value, future value, opportunity cost as a quantifiable comparison
**Activity:**
- Core principle: A dollar today is worth more than a dollar tomorrow — because today's dollar can earn interest.
- Future value: "If I invest $1,000 today at 5% for 10 years, what will it become?"
  - FV = 1000(1.05)^10 = $1,628.89
- Present value: "If I need $10,000 in 5 years and can earn 5%, how much do I need to invest today?"
  - PV = 10000 / (1.05)^5 = $7,835.26
- Opportunity cost: Every financial decision has an alternative. The opportunity cost is the value of the best forgone alternative.
  - Example: You spend $200/month on dining out. If instead you invested that $200/month at 7% annual return for 30 years:
  - FV of annuity = 200 * [((1 + 0.07/12)^(12*30) - 1) / (0.07/12)] = $243,994
  - The opportunity cost of dining out is nearly $244,000 over 30 years.
- Financial calculator introduction: Use the TVM keys (N, I/Y, PV, PMT, FV) to solve future value and present value problems.
- Practice: 10 TVM problems — given three of the five TVM variables, find the missing ones.
- Discussion: "Does this mean you should never spend money on things you enjoy? No — opportunity cost is a tool for making informed trade-offs, not for eliminating all spending."

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.10 — The Power of Starting Early: Compound Growth Exploration (2 hrs)
**Math Models Focus:** Exponential growth, the effect of time on compound interest
**Activity:**
- Scenario comparison:
  - **Saver A** invests $300/month from age 22 to 32 (10 years), then stops. Total invested: $36,000.
  - **Saver B** invests $300/month from age 32 to 62 (30 years). Total invested: $108,000.
  - Both earn 7% annually. Who has more at age 62?
  - Saver A: ~$540,000. Saver B: ~$340,000. Saver A wins despite investing 1/3 as much — because of 10 extra years of compounding.
- RStudio simulation:
  ```r
  # Saver A: invests age 22-32, then stops
  saver_a <- numeric(41)  # ages 22 to 62
  monthly_rate <- 0.07/12
  for (i in 1:120) {  # first 10 years (120 months)
    saver_a[ceiling(i/12)] <- saver_a[ceiling(i/12)] + 300
  }
  # Simulate growth year by year
  balance_a <- 0
  for (month in 1:480) {
    if (month <= 120) balance_a <- (balance_a + 300) * (1 + monthly_rate)
    else balance_a <- balance_a * (1 + monthly_rate)
  }

  # Saver B: invests age 32-62
  balance_b <- 0
  for (month in 1:360) {
    balance_b <- (balance_b + 300) * (1 + monthly_rate)
  }

  cat("Saver A at 62:", scales::dollar(balance_a), "\n")
  cat("Saver B at 62:", scales::dollar(balance_b), "\n")
  ```
- Students modify the simulation: What if the rate is 5%? 10%? What if Saver A invests $200/month instead of $300?
- Desmos: Graph the exponential growth curves for both savers on the same axes. Visually identify the crossover point where Saver A's balance surpasses Saver B's.
- Key takeaway: Time is the most powerful variable in the compound interest formula. Starting early matters more than investing more.

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.11 — Personal Budget Analysis: Project Workshop (2.5 hrs)
**Math Models Focus:** Integrating all unit concepts into a comprehensive budget model
**Activity:**
- Students receive a **simulated job offer packet** containing:
  - Job title, annual gross salary (randomized: $35,000–$75,000 range, varies by student)
  - Benefits summary: health insurance premium, 401(k) match percentage
  - Location (Texas — no state income tax, but students note what they'd pay in another state)
- Project requirements (built in Google Sheets):
  1. **Pay stub page:** Calculate biweekly gross pay, federal tax (using bracket calculator from Lesson 1.2), FICA, health insurance, 401(k) contribution, and net pay.
  2. **Monthly budget page:** Allocate net monthly income using the 50/30/20 framework. List at least 10 specific expense items across the three categories. Budget must balance (total expenses + savings = net income).
  3. **Savings projection page:** Using the monthly savings amount, project the balance over 1, 5, 10, and 20 years at a realistic interest rate. Use the compound interest formula.
  4. **Net worth snapshot:** Create a balance sheet for the simulated person at age 25 (include student loans, car value, checking/savings, 401(k)).
  5. **RStudio visualization (at least one):**
     - Option A: Bar chart of budget categories as percentage of income
     - Option B: Line chart of projected savings growth over 20 years
     - Option C: Comparison of effective tax rates at different income levels
- Workshop time: Students build their spreadsheets, run calculations, and generate R visualizations.

**TEKS:** §111.43(c)(2), §111.43(c)(3)

#### Lesson 1.12 — Project Completion and Presentations (1.8 hrs)
**Activity:**
- Final workshop time (45 minutes): Students complete and polish their Personal Budget Analysis.
- Peer review (20 minutes): Students exchange spreadsheets with a partner. Checklist:
  - Does the pay stub math check out? (Verify federal tax calculation.)
  - Does the budget balance? (Income - expenses - savings = 0.)
  - Is the 50/30/20 split reasonable?
  - Does the savings projection use the correct formula?
- Selected presentations (25 minutes): 5–6 students present their budget analysis (3 minutes each). Each presenter explains one financial decision they made and its opportunity cost.
- Unit checkpoint quiz (25 minutes): Pay stub calculations, tax brackets, budgeting percentages, simple vs. compound interest, TVM problems.

**TEKS:** §111.43(c)(2), §111.43(c)(3)

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Personal Finance Fundamentals | Individual | 25 |
| Pay Stub Calculator (Spreadsheet) | Lab | 20 |
| Tax Bracket Calculator (Spreadsheet) | Lab | 20 |
| Budget Template Lab | Lab | 20 |
| Income Data Visualization (RStudio) | Lab | 15 |
| Compound Interest & TVM Practice | Practice | 20 |
| Personal Budget Analysis Project | Project | 60 |
| Peer Review Participation | Participation | 10 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

gross income, net income, pay stub, federal income tax, marginal tax rate, effective tax rate, tax bracket, piecewise function, FICA, Social Security, Medicare, withholding, deduction, budget, 50/30/20 rule, needs, wants, savings, checking account, savings account, overdraft, certificate of deposit (CD), APY, simple interest, compound interest, principal, interest rate, compounding period, time value of money, future value, present value, opportunity cost, net worth, assets, liabilities, balance sheet, annuity, 401(k), personal finance
