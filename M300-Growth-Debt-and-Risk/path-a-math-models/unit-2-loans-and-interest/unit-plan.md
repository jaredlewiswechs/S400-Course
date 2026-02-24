# Unit 2 — Loans & Interest

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Loans & Interest |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *When you borrow money, how much does it really cost — and how do you tell a good loan from a bad one?* |
| Math Models TEKS | §111.43(c)(3), (8) |
| Tools | Spreadsheets (Google Sheets / Excel), RStudio, Desmos, financial calculators |
| Key Deliverable | Loan Comparison Report — students compare three loan offers for a major purchase and recommend the best option using amortization analysis and total-cost-of-borrowing calculations |

## Unit Narrative

If Unit 1 is about earning and keeping money, Unit 2 is about the cost of borrowing it. Debt is the single largest financial force in most American households — mortgages, auto loans, student loans, and credit cards collectively represent trillions of dollars in obligations, and the mathematics behind these products is deliberately opaque to most borrowers. This unit makes the math visible. Students begin with simple interest as a baseline, then progress to compound interest and discover that the compounding frequency and the distinction between APR and APY can change the cost of a loan by thousands of dollars. From there, they build amortization tables in spreadsheets — the fundamental tool for understanding how each payment splits between principal and interest, and why early payments are mostly interest while late payments are mostly principal. The amortization table is the unit's central artifact: students construct them for credit cards, auto loans, mortgages, and student loans, learning to read the financial story each table tells.

The unit culminates in a Loan Comparison Report in which each student evaluates three competing loan offers for a major purchase (a car, a home, or a college education). Students must compute the monthly payment, total interest paid, and total cost for each offer; build amortization tables; visualize the payoff trajectory in RStudio; and write a recommendation with mathematical justification. The project teaches students that the lowest monthly payment is not always the cheapest loan — a lesson that saves real money for the rest of their lives.

## Math Concepts

- Simple interest: `I = Prt` §111.43(c)(3)
- Compound interest: `A = P(1 + r/n)^(nt)` §111.43(c)(3)
- Continuous compounding: `A = Pe^(rt)` §111.43(c)(3)
- APR (Annual Percentage Rate) vs. APY (Annual Percentage Yield) §111.43(c)(3)
- Loan payment formula: `PMT = P * [r(1+r)^n] / [(1+r)^n - 1]` §111.43(c)(3)
- Amortization: splitting payments into principal and interest components §111.43(c)(3), §111.43(c)(8)
- Total cost of borrowing: total payments minus principal §111.43(c)(3)
- Credit card minimum payment mathematics §111.43(c)(3)
- Mortgage calculations: down payment, points, escrow §111.43(c)(8)
- Exponential growth and decay models applied to debt §111.43(c)(3)
- Mathematical comparison and optimization of financial options §111.43(c)(8)
- Reading and constructing data tables and financial charts §111.43(c)(3)

---

## Lesson Sequence

### Week 1: Interest Fundamentals (≈8.3 hours)

#### Lesson 2.1 — Simple Interest: The Baseline (1.5 hrs)
**Math Models Focus:** Simple interest formula, linear growth of debt/savings
**Activity:**
- Review from Unit 1: `I = Prt` where I = interest, P = principal, r = annual rate, t = time in years.
- Simple interest grows linearly: each year adds the same amount of interest. The balance after t years: `A = P + Prt = P(1 + rt)`.
- Example: You lend a friend $500 at 8% simple interest for 3 years. I = 500 * 0.08 * 3 = $120. They owe you $620.
- Rearranging for other variables:
  - Find r: `r = I / (Pt)`. You earned $150 interest on $2,000 over 2 years. r = 150/(2000*2) = 3.75%.
  - Find t: `t = I / (Pr)`. How long for $1,000 at 5% to earn $200? t = 200/(1000*0.05) = 4 years.
- Desmos: Graph `A = 1000(1 + 0.05t)`. This is a straight line — slope = 50 (dollars per year). Simple interest is linear.
- Practice: 12 problems — compute I, find missing variables, compare two simple interest scenarios.
- Connection to Unit 1: Simple interest is how some savings bonds and short-term loans work. Most real financial products use compound interest — which we explore next.

**TEKS:** §111.43(c)(3)

#### Lesson 2.2 — Compound Interest: Interest on Interest (2.5 hrs)
**Math Models Focus:** Compound interest formula, exponential growth, compounding frequency
**Activity:**
- The big idea: Compound interest earns interest on previously earned interest. The balance grows exponentially, not linearly.
- Formula: `A = P(1 + r/n)^(nt)` where n = number of compounding periods per year.
  - n = 1 (annually), n = 4 (quarterly), n = 12 (monthly), n = 365 (daily)
- Step-by-step example: $1,000 at 6% compounded monthly for 5 years.
  - r/n = 0.06/12 = 0.005
  - nt = 12 * 5 = 60
  - A = 1000(1.005)^60 = 1000 * 1.34885 = $1,348.85
  - Simple interest comparison: A = 1000(1 + 0.06*5) = $1,300.00
  - Compound earned $48.85 more — the "interest on interest."
- Compounding frequency comparison (all at 6% for 10 years on $10,000):

| Frequency | n | Final Amount | Interest Earned |
|-----------|---|-------------|-----------------|
| Annually | 1 | $17,908.48 | $7,908.48 |
| Quarterly | 4 | $18,140.18 | $8,140.18 |
| Monthly | 12 | $18,193.97 | $8,193.97 |
| Daily | 365 | $18,220.44 | $8,220.44 |

- Desmos exploration: Graph `A = 10000(1 + 0.06/n)^(n*10)` with a slider for n from 1 to 365. Watch the curve rise as compounding frequency increases — but with diminishing returns.
- Spreadsheet lab: Build a compound interest table that shows the balance at the end of each year for 10 years. Include columns for beginning balance, interest earned, and ending balance.
- Practice: 10 problems — compute compound interest with different rates, periods, and frequencies.

**TEKS:** §111.43(c)(3)

#### Lesson 2.3 — Continuous Compounding and the Number e (2 hrs)
**Math Models Focus:** Continuous compounding formula, introduction to Euler's number
**Activity:**
- What happens as n → ∞? The compounding happens continuously.
- Continuous compounding formula: `A = Pe^(rt)` where e ≈ 2.71828.
- Where does e come from? As n gets very large in `(1 + 1/n)^n`, the result approaches e:

| n | (1 + 1/n)^n |
|---|-------------|
| 1 | 2.000 |
| 10 | 2.594 |
| 100 | 2.705 |
| 1,000 | 2.717 |
| 10,000 | 2.718 |
| 1,000,000 | 2.71828 |

- RStudio exploration:
  ```r
  n_values <- c(1, 10, 100, 1000, 10000, 100000, 1000000)
  result <- (1 + 1/n_values)^n_values
  df <- data.frame(n = n_values, value = result)

  ggplot(df, aes(x = log10(n), y = value)) +
    geom_point(size = 3, color = "steelblue") +
    geom_hline(yintercept = exp(1), linetype = "dashed", color = "red") +
    labs(title = "Convergence to e as n increases",
         x = "log10(n)", y = "(1 + 1/n)^n") +
    annotate("text", x = 5, y = 2.72, label = paste("e ≈", round(exp(1), 5)),
             color = "red", hjust = 0) +
    theme_minimal()
  ```
- Comparison: $10,000 at 6% for 10 years.
  - Monthly compounding: A = 10000(1 + 0.06/12)^120 = $18,193.97
  - Continuous compounding: A = 10000 * e^(0.06*10) = 10000 * e^0.6 = $18,221.19
  - Difference: $27.22 — continuous compounding is only slightly more than daily. This is why daily compounding is "close enough" for practical purposes.
- Practice: 8 problems using continuous compounding and comparing to discrete compounding.

**TEKS:** §111.43(c)(3)

#### Lesson 2.4 — APR vs. APY: Reading the Fine Print (2.3 hrs)
**Math Models Focus:** Converting between APR and APY, truth-in-lending math
**Activity:**
- APR (Annual Percentage Rate): The stated annual rate, not accounting for compounding. This is what lenders advertise.
- APY (Annual Percentage Yield): The effective annual rate, accounting for compounding. This is what you actually earn/pay.
- Conversion formula: `APY = (1 + APR/n)^n - 1`
- Example: A credit card advertises 24% APR, compounded monthly.
  - APY = (1 + 0.24/12)^12 - 1 = (1.02)^12 - 1 = 1.2682 - 1 = 26.82%
  - You actually pay 26.82% per year, not 24%. The APR understates the true cost.
- Example: A savings account advertises 4.5% APY, compounded daily.
  - APR = n * [(1 + APY)^(1/n) - 1] = 365 * [(1.045)^(1/365) - 1] = 4.401%
  - The bank compounds at 4.401% daily, which yields 4.5% annually.
- Truth in Lending Act (TILA): Federal law requires lenders to disclose APR. But APR and APY can tell different stories depending on which side of the transaction you're on:
  - Borrowing: APR is what's advertised; APY is what you actually pay (higher).
  - Saving: APY is what's advertised; APR is the underlying rate (lower).
- Spreadsheet exercise: Create a conversion calculator. Input APR and compounding frequency; output APY. Then input APY; output APR.
- Practice: 10 problems — convert between APR and APY, identify which rate is more favorable for borrowers vs. savers.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

---

### Week 2: Amortization and Loan Types (≈8.3 hours)

#### Lesson 2.5 — The Loan Payment Formula (2 hrs)
**Math Models Focus:** Deriving and applying the loan payment formula
**Activity:**
- When you borrow money and repay in equal monthly installments, the payment amount is:
  ```
  PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
  ```
  where P = principal (loan amount), r = monthly interest rate (APR/12), n = total number of payments.
- Derivation (conceptual, not full proof): Each payment must cover the interest accrued that month AND reduce the principal enough so that the loan reaches $0 after n payments. This is a geometric series problem.
- Example: $20,000 auto loan at 5.9% APR for 5 years (60 months).
  - r = 0.059/12 = 0.004917
  - n = 60
  - PMT = 20000 * [0.004917(1.004917)^60] / [(1.004917)^60 - 1]
  - PMT = 20000 * [0.004917 * 1.34236] / [1.34236 - 1]
  - PMT = 20000 * 0.006599 / 0.34236 = $385.61/month
  - Total paid: $385.61 * 60 = $23,136.60
  - Total interest: $23,136.60 - $20,000 = $3,136.60
- Financial calculator method: N = 60, I/Y = 5.9/12 = 0.4917, PV = 20000, FV = 0, compute PMT.
- Spreadsheet function: `=PMT(0.059/12, 60, -20000)` returns $385.61.
- Practice: Calculate monthly payments for 8 different loan scenarios (varying P, r, and n). For each, compute total interest paid.
- Key insight: Small changes in interest rate compound dramatically over long loan terms. A 1% rate increase on a $200,000 mortgage over 30 years adds ~$42,000 in interest.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.6 — Building an Amortization Table (2.5 hrs)
**Math Models Focus:** Constructing and interpreting amortization schedules
**Activity:**
- An amortization table shows, for each payment, how much goes to interest and how much goes to principal.
- Logic for each row:
  1. Interest portion = Remaining balance * monthly rate
  2. Principal portion = Payment - Interest portion
  3. New balance = Old balance - Principal portion
- Spreadsheet construction: Build a full amortization table for the $20,000 auto loan from Lesson 2.5.
  ```
  | Payment # | Payment | Interest | Principal | Balance    |
  |-----------|---------|----------|-----------|------------|
  | 0         |         |          |           | $20,000.00 |
  | 1         | $385.61 | $98.33   | $287.28   | $19,712.72 |
  | 2         | $385.61 | $96.92   | $288.69   | $19,424.03 |
  | 3         | $385.61 | $95.50   | $290.11   | $19,133.92 |
  | ...       | ...     | ...      | ...       | ...        |
  | 60        | $385.61 | $1.89    | $383.72   | $0.00      |
  ```
- Observations students should discover:
  - Payment 1: $98.33 goes to interest (25.5% of payment). Only $287.28 reduces the loan.
  - Payment 60: $1.89 goes to interest (0.5% of payment). Almost the entire payment reduces the loan.
  - The crossover point: When does the principal portion first exceed the interest portion?
- Spreadsheet formulas (row 2 example, with row 1 being payment #0):
  ```
  Interest:  =E2 * 0.059/12        (Balance * monthly rate)
  Principal: =B3 - C3              (Payment - Interest)
  Balance:   =E2 - D3              (Old balance - Principal paid)
  ```
- RStudio visualization: Stacked area chart showing interest vs. principal over the life of the loan.
  ```r
  library(ggplot2)
  # After building amortization data frame 'amort'
  ggplot(amort, aes(x = Payment_Number)) +
    geom_area(aes(y = Interest, fill = "Interest"), alpha = 0.7) +
    geom_area(aes(y = Principal, fill = "Principal"), alpha = 0.7) +
    scale_fill_manual(values = c("Interest" = "tomato", "Principal" = "steelblue")) +
    labs(title = "How Each Payment Splits: Interest vs. Principal",
         x = "Payment Number", y = "Amount ($)", fill = "Component") +
    theme_minimal()
  ```
- Practice: Build amortization tables for two additional loans with different terms and rates.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.7 — Credit Card Math: The Minimum Payment Trap (2 hrs)
**Math Models Focus:** Minimum payment calculations, long-term cost of revolving debt
**Activity:**
- Credit card terms: APR typically 18–29%, minimum payment usually 2% of balance or $25 (whichever is greater), compounding monthly.
- Scenario: $5,000 credit card balance at 24% APR. Minimum payment = 2% of balance (minimum $25).
  - Month 1: Interest = $5,000 * 0.24/12 = $100. Minimum payment = $5,000 * 0.02 = $100. Principal paid = $0. The balance doesn't decrease.
  - This is the trap: at 24% APR, a 2% minimum payment barely covers interest. The debt persists for decades.
- Spreadsheet simulation: Build a credit card payoff table.
  - Track balance month by month with minimum payments (2% of balance, min $25).
  - How many months to pay off $5,000? Answer: approximately 328 months (27+ years).
  - Total paid: approximately $12,700. More than double the original balance.
- Compare strategies:
  - Minimum payments only: 328 months, $12,700 total
  - Fixed $150/month: 47 months, $6,950 total
  - Fixed $300/month: 20 months, $5,930 total
- RStudio visualization: Plot the balance over time for all three strategies on the same graph.
  ```r
  # Simulated data for three payoff strategies
  ggplot(payoff_data, aes(x = Month, y = Balance, color = Strategy)) +
    geom_line(linewidth = 1) +
    labs(title = "Credit Card Payoff: Three Strategies",
         subtitle = "$5,000 balance at 24% APR",
         y = "Remaining Balance ($)") +
    scale_color_manual(values = c("Minimum" = "red", "$150/mo" = "orange", "$300/mo" = "green")) +
    theme_minimal()
  ```
- Discussion: "Why do credit card companies set minimum payments so low?" (They profit from interest. The longer you carry a balance, the more they earn.)
- Credit Card Act of 2009: Required issuers to show on each statement how long payoff takes with minimum payments vs. paying off in 3 years.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.8 — Mortgage Analysis (1.8 hrs)
**Math Models Focus:** Mortgage-specific calculations, down payments, total cost over 15 vs. 30 years
**Activity:**
- Mortgage terminology: principal, down payment, closing costs, points (1 point = 1% of loan amount, lowers rate), escrow (taxes + insurance), PMI (Private Mortgage Insurance, required if down payment < 20%).
- Scenario: Buying a $300,000 home.
  - 20% down payment: $60,000. Loan amount: $240,000.
  - 30-year fixed at 6.5%: PMT = $1,517/month. Total paid = $546,120. Total interest = $306,120.
  - 15-year fixed at 5.9%: PMT = $2,011/month. Total paid = $361,980. Total interest = $121,980.
  - The 15-year mortgage saves $184,140 in interest but costs $494/month more.
- Points analysis: Pay 1 point ($2,400) to reduce rate from 6.5% to 6.25%.
  - New PMT at 6.25% (30-year): $1,478/month. Savings: $39/month.
  - Break-even: $2,400 / $39 = 62 months (about 5 years). If you stay longer than 5 years, buying the point saves money.
- Spreadsheet: Students build a mortgage comparison calculator — input home price, down payment percentage, rate, and term. Output: monthly payment, total interest, total cost.
- Practice: Compare mortgage scenarios for homes at $200,000, $350,000, and $500,000 with different rates and terms.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

---

### Week 3: Loan Types and the Comparison Project (≈8.3 hours)

#### Lesson 2.9 — Auto Loan Comparison (2 hrs)
**Math Models Focus:** Comparing auto loans with different terms, rates, and down payments
**Activity:**
- Auto loan variables: vehicle price, trade-in value, down payment, sales tax, dealer fees, loan term (36, 48, 60, 72 months), interest rate.
- Scenario: Buying a $28,000 car. Tax rate 6.25%. Fees $500. Trade-in $5,000.
  - Amount financed: ($28,000 + $1,750 tax + $500 fees) - $5,000 trade-in = $25,250
  - Compare three offers:
    - Bank A: 4.9% for 60 months → PMT = $475.61, Total interest = $3,286
    - Bank B: 6.5% for 72 months → PMT = $426.43, Total interest = $5,453
    - Dealer: 0% for 48 months (but no $2,000 rebate) → PMT = $567.71, Total interest = $0, but you pay $2,000 more for the car
- Spreadsheet lab: Students build a side-by-side auto loan comparison tool. For each offer: monthly payment, total interest, total cost. Highlight the cheapest option.
- Discussion: "The dealer's 0% financing looks free, but you lose the $2,000 rebate. What's the real cost?" (Opportunity cost analysis.)
- Practice: 4 auto loan comparison problems with varying terms.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.10 — Student Loan Scenarios (2 hrs)
**Math Models Focus:** Federal vs. private student loans, income-driven repayment, total cost of education debt
**Activity:**
- Federal student loan types:
  - Direct Subsidized: Government pays interest while in school. Rate: ~5.5%.
  - Direct Unsubsidized: Interest accrues while in school. Rate: ~5.5%.
  - PLUS loans (parents): Rate: ~8.05%.
- Private loans: Variable rates, often 4–14% depending on credit score.
- Interest capitalization: Unsubsidized loans accrue interest during 4 years of college. That interest is added to the principal at graduation.
  - Example: $5,500 unsubsidized loan freshman year at 5.5%. After 4 years of accrued interest:
  - Interest: $5,500 * 0.055 * 4 = $1,210
  - New principal at graduation: $6,710 (capitalized interest increases the balance)
- Repayment plans:
  - Standard (10 years): Highest monthly payment, lowest total cost.
  - Extended (25 years): Lower monthly payment, much higher total cost.
  - Income-driven: Payment = percentage of discretionary income. Forgiveness after 20–25 years (remaining balance may be taxable).
- Spreadsheet exercise: A student graduates with $35,000 in loans at 5.5%. Compare:
  - Standard 10-year: PMT = $379/month, Total = $45,480, Interest = $10,480
  - Extended 25-year: PMT = $215/month, Total = $64,500, Interest = $29,500
- RStudio visualization: Plot both repayment paths — balance over time.
- Discussion: "Is college worth the debt?" Use the earnings-by-education data from Unit 1. If a bachelor's degree holder earns $30,000 more per year than a high school graduate, how long to recoup $35,000 in loans? (About 1.5 years after taxes — the math strongly favors the degree, but only if the student finishes.)

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.11 — Loan Comparison Report: Project Workshop (2.5 hrs)
**Math Models Focus:** Integrating all unit concepts into a comparative financial analysis
**Activity:**
- Students receive a **loan scenario packet** (randomized — each student gets a different scenario):
  - Scenario A: Auto loan — $22,000–$32,000 vehicle, three competing offers with different rates and terms.
  - Scenario B: Mortgage — $180,000–$350,000 home, three offers varying in rate, term, and points.
  - Scenario C: Student loans — $25,000–$45,000 in mixed federal and private loans, three repayment strategies.
- Project requirements:
  1. **Loan summary page (spreadsheet):** For each of the three offers, calculate monthly payment, total interest, and total cost. Present in a clear comparison table.
  2. **Amortization tables (spreadsheet):** Build a full amortization table for each offer (or first 24 months if 30-year mortgage). Highlight the interest/principal crossover point.
  3. **RStudio visualization (at least two charts):**
     - Chart 1: Remaining balance over time for all three offers on the same axes.
     - Chart 2: Cumulative interest paid over time for all three offers.
  4. **Written recommendation (1 page):** Which offer do you recommend and why? Use specific numbers. Address: monthly affordability, total cost, opportunity cost, and risk factors.
- Workshop time: Students build spreadsheets, generate visualizations, and draft recommendations.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

#### Lesson 2.12 — Project Completion and Presentations (1.8 hrs)
**Activity:**
- Final workshop time (40 minutes): Students complete and polish their Loan Comparison Report.
- Peer review (20 minutes): Partners verify:
  - Do the monthly payment calculations match the amortization table?
  - Is total interest correctly computed?
  - Does the recommendation logically follow from the numbers?
- Selected presentations (25 minutes): 5–6 students present their analysis and recommendation (3 minutes each). Class votes on whether they agree with the recommendation.
- Unit checkpoint quiz (25 minutes): Simple and compound interest calculations, APR vs. APY, amortization table construction (partial), loan payment formula, total-cost-of-borrowing comparisons.

**TEKS:** §111.43(c)(3), §111.43(c)(8)

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Loans & Interest | Individual | 25 |
| Simple & Compound Interest Practice | Practice | 15 |
| APR vs. APY Conversion Lab | Lab | 15 |
| Amortization Table Construction (Spreadsheet) | Lab | 25 |
| Credit Card Payoff Simulation | Lab | 20 |
| Mortgage & Auto Loan Practice Problems | Practice | 15 |
| Loan Comparison Report Project | Project | 65 |
| Peer Review Participation | Participation | 10 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

simple interest, compound interest, continuous compounding, principal, interest rate, compounding period, APR (Annual Percentage Rate), APY (Annual Percentage Yield), effective rate, Euler's number (e), loan payment formula, amortization, amortization table, principal portion, interest portion, remaining balance, credit card, minimum payment, revolving debt, mortgage, down payment, closing costs, points, PMI (Private Mortgage Insurance), escrow, fixed-rate mortgage, auto loan, trade-in value, amount financed, student loan, subsidized, unsubsidized, interest capitalization, income-driven repayment, total cost of borrowing, break-even analysis, Truth in Lending Act
