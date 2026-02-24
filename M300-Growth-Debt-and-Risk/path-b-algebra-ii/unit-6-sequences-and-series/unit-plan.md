# Unit 6 — Sequences & Series

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Sequences & Series |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do patterns that grow step by step — in savings accounts, populations, and viral spreads — accumulate into totals that can be predicted, measured, and modeled?* |
| Algebra II TEKS | §111.40(c)(7), (8) |
| Tools | RStudio, Desmos, spreadsheets (Google Sheets / Excel), graphing calculators |
| Key Deliverable | Growth Model Capstone — students identify a real-world sequential pattern, model it with sequences and series, and predict future behavior |

## Unit Narrative

This is the capstone unit for Path B — Algebra II. Sequences and series are where discrete patterns meet cumulative totals, and where the algebraic toolkit built across Units 1-5 converges. An arithmetic sequence — adding the same amount each step — models linear growth: fixed monthly savings deposits, straight-line depreciation, evenly-spaced milestones. A geometric sequence — multiplying by the same factor each step — models exponential growth and decay: compound interest, population doubling, radioactive half-life. These connections are not accidental. The explicit formula for a geometric sequence, `a_n = a₁ · r^(n-1)`, is the exponential function `f(x) = ab^x` evaluated at integer inputs. The connection between geometric sequences and the exponential/logarithmic functions from Unit 3 is made explicit throughout. When students sum the terms of a sequence, they get a series — the total accumulated over time. Arithmetic series give the total distance traveled under constant acceleration. Geometric series give the total value of an annuity, the total drug concentration after repeated doses, or the total distance a bouncing ball travels. Infinite geometric series reveal the surprising result that an infinite process can have a finite sum — but only when the common ratio satisfies `|r| < 1`.

Sigma notation formalizes the summation process. The binomial theorem — expanding `(a + b)^n` — connects polynomial algebra (Unit 2) to combinatorics and provides a bridge to probability and statistics. The Growth Model Capstone ties the entire course together: students find a real-world sequential pattern, determine whether it is arithmetic or geometric (or neither), write explicit and recursive formulas, compute partial sums, make predictions, and evaluate the model against actual data. RStudio generates sequences, computes series, and fits curves. Desmos visualizes the step-by-step growth. Spreadsheets make recursive formulas tangible. This unit sends students out of Algebra II with the mathematical maturity to recognize and model the patterns that govern change.

## Math Concepts

- Arithmetic sequences: common difference, explicit formula `a_n = a₁ + (n-1)d`, recursive formula `a_n = a_{n-1} + d` §111.40(c)(7)
- Geometric sequences: common ratio, explicit formula `a_n = a₁ · r^(n-1)`, recursive formula `a_n = r · a_{n-1}` §111.40(c)(7)
- Connection: geometric sequences and exponential functions §111.40(c)(7)
- Arithmetic series: partial sum formula `S_n = n/2 · (a₁ + a_n)` §111.40(c)(7)
- Geometric series (finite): partial sum formula `S_n = a₁(1 - r^n) / (1 - r)` §111.40(c)(7)
- Geometric series (infinite): sum formula `S = a₁ / (1 - r)` when `|r| < 1`, divergence when `|r| ≥ 1` §111.40(c)(7)
- Sigma notation §111.40(c)(7)
- Binomial theorem: `(a + b)^n` expansion, Pascal's Triangle, binomial coefficients §111.40(c)(7)
- Regression and curve fitting review §111.40(c)(8)
- Data analysis with sequences: modeling real-world patterns §111.40(c)(8)

---

## Lesson Sequence

### Week 1: Arithmetic and Geometric Sequences (≈8.3 hours)

#### Lesson 6.1 — Patterns and Arithmetic Sequences (2 hrs)
**Algebra II Focus:** Identifying arithmetic sequences, writing explicit and recursive formulas
**Activity:**
- Warm-up: A student saves $50 in January, $75 in February, $100 in March, $125 in April. What is the pattern? How much will they save in December? The amount increases by $25 each month — this is an arithmetic sequence.
- Definition: An arithmetic sequence has a constant difference between consecutive terms. The common difference is `d = a_{n+1} - a_n`.
- Formulas:
  - Recursive: `a₁ = [first term]`, `a_n = a_{n-1} + d` for `n ≥ 2`.
  - Explicit: `a_n = a₁ + (n - 1)d`.
  - The explicit formula is a linear function of n. Plot the terms — they lie on a straight line with slope d.
- Worked examples:
  1. Sequence: 3, 7, 11, 15, ... → `d = 4`, `a₁ = 3`. Explicit: `a_n = 3 + 4(n-1) = 4n - 1`. Find `a₅₀ = 4(50) - 1 = 199`.
  2. Given `a₁ = 100` and `d = -8`. Write the first 5 terms: 100, 92, 84, 76, 68. Find the term number when the value reaches 0: `0 = 100 - 8(n-1)` → `n = 13.5`. Since n must be a whole number, the 13th term is 4 and the sequence has not yet reached 0.
  3. Given `a₃ = 14` and `a₇ = 30`. Find `d` and `a₁`. Since `a₇ - a₃ = 4d` → `30 - 14 = 16 = 4d` → `d = 4`. Then `a₁ = a₃ - 2d = 14 - 8 = 6`.
- Spreadsheet activity: Enter `a₁` in cell A1. In A2 enter `=A1+d`. Drag down to generate 50 terms. Change `a₁` and `d` and watch the sequence update instantly.
- Desmos: Plot `a_n = a₁ + (n-1)d` as a function of n. Use sliders for `a₁` and `d`. Observe how d controls the slope.
- Practice: 10 problems — identify arithmetic sequences, find missing terms, write formulas.

**TEKS:** §111.40(c)(7)

#### Lesson 6.2 — Geometric Sequences (2.5 hrs)
**Algebra II Focus:** Identifying geometric sequences, writing explicit and recursive formulas, connecting to exponential functions
**Activity:**
- Warm-up: A population of bacteria doubles every hour. Starting with 500: 500, 1000, 2000, 4000, 8000, ... Each term is multiplied by 2. This is a geometric sequence.
- Definition: A geometric sequence has a constant ratio between consecutive terms. The common ratio is `r = a_{n+1} / a_n`.
- Formulas:
  - Recursive: `a₁ = [first term]`, `a_n = r · a_{n-1}` for `n ≥ 2`.
  - Explicit: `a_n = a₁ · r^(n-1)`.
  - The explicit formula IS an exponential function of n. Plot the terms — they follow an exponential curve.
- Connection to Unit 3: The exponential function `f(x) = 500 · 2^x` evaluated at x = 0, 1, 2, 3, ... gives the geometric sequence 500, 1000, 2000, 4000, ... The common ratio r is the base of the exponential. Compound interest `A = P(1+r)^t` is a geometric sequence with `r = 1 + rate`.
- Worked examples:
  1. Sequence: 5, 15, 45, 135, ... → `r = 3`, `a₁ = 5`. Explicit: `a_n = 5 · 3^(n-1)`. Find `a₈ = 5 · 3⁷ = 5 · 2187 = 10935`.
  2. A car depreciates 15% per year. Initial value: $30,000. Values form a geometric sequence with `r = 0.85`: 30000, 25500, 21675, ... After 5 years: `a₆ = 30000 · 0.85⁵ ≈ $13,311`.
  3. Given `a₂ = 12` and `a₅ = 324`. Find r: `a₅/a₂ = r³` → `324/12 = 27 = r³` → `r = 3`. Then `a₁ = a₂/r = 4`.
- Desmos: Plot `a_n = a₁ · r^(n-1)` with sliders. When `r > 1`: growth. When `0 < r < 1`: decay. When `r < 0`: alternating signs.
- RStudio:
```r
# Generate and plot a geometric sequence
a1 <- 500
r <- 2
n <- 1:10
a_n <- a1 * r^(n - 1)

plot(n, a_n, type = "b", pch = 19, col = "blue",
     main = "Geometric Sequence: Bacterial Growth",
     xlab = "Hour (n)", ylab = "Population")

# Overlay the continuous exponential function
curve(500 * 2^(x - 1), from = 1, to = 10, add = TRUE, col = "red", lty = 2)
legend("topleft", c("Sequence terms", "Exponential curve"),
       col = c("blue", "red"), lty = c(1, 2), pch = c(19, NA))
```
- Practice: 10 problems — identify geometric sequences, find missing terms, write formulas, and interpret growth/decay.

**TEKS:** §111.40(c)(7)

#### Lesson 6.3 — Arithmetic vs. Geometric: Identification and Comparison (1.5 hrs)
**Algebra II Focus:** Distinguishing arithmetic from geometric sequences, recognizing neither
**Activity:**
- Side-by-side comparison:
  | Feature | Arithmetic | Geometric |
  |---------|-----------|-----------|
  | Pattern | Add d | Multiply by r |
  | Explicit formula | `a₁ + (n-1)d` | `a₁ · r^(n-1)` |
  | Graph shape | Linear | Exponential |
  | Real-world model | Constant increase/decrease | Percent increase/decrease |
- Identification practice: Given a sequence, determine if it is arithmetic, geometric, or neither.
  1. 2, 6, 18, 54 → Geometric (r = 3).
  2. 10, 7, 4, 1 → Arithmetic (d = -3).
  3. 1, 1, 2, 3, 5, 8 → Neither (Fibonacci — each term is the sum of the two before).
  4. 100, 90, 81, 72.9 → Geometric (r = 0.9).
  5. 3, 5, 9, 15 → Neither (differences are 2, 4, 6 — increasing, not constant).
- Real-world sorting: Students categorize 8 real-world scenarios as arithmetic or geometric:
  - Adding $200/month to savings → arithmetic.
  - Investment earning 6% annually → geometric.
  - A taxi that charges $2 per mile → arithmetic.
  - A rumor spreading where each person tells 3 others → geometric.
- Practice: 12 identification and comparison problems.

**TEKS:** §111.40(c)(7)

#### Lesson 6.4 — Arithmetic Series and Partial Sums (2.3 hrs)
**Algebra II Focus:** Summing arithmetic sequences, deriving and applying the partial sum formula
**Activity:**
- A series is the sum of the terms of a sequence. An arithmetic series is the sum of an arithmetic sequence.
- Gauss's insight: Sum of 1 + 2 + 3 + ... + 100.
  - Write the sum forward and backward:
    ```
    S = 1 + 2 + 3 + ... + 100
    S = 100 + 99 + 98 + ... + 1
    2S = 101 + 101 + 101 + ... + 101 = 100 × 101
    S = 100 × 101 / 2 = 5050
    ```
- General formula for the sum of the first n terms of an arithmetic sequence:
  ```
  S_n = n/2 · (a₁ + a_n) = n/2 · (2a₁ + (n-1)d)
  ```
- Worked examples:
  1. Sum of the first 20 terms of 3, 7, 11, 15, ... → `a₁ = 3`, `d = 4`, `a₂₀ = 3 + 19(4) = 79`. `S₂₀ = 20/2 · (3 + 79) = 10 · 82 = 820`.
  2. A theater has 20 rows. The first row has 15 seats, and each subsequent row has 2 more seats. Total seats: `a₁ = 15`, `d = 2`, `n = 20`. `a₂₀ = 15 + 19(2) = 53`. `S₂₀ = 20/2 · (15 + 53) = 10 · 68 = 680 seats`.
  3. An employee starts at $35,000 with annual raises of $2,500. Total earnings over 10 years: `S₁₀ = 10/2 · (35000 + 57500) = 5 · 92500 = $462,500`.
- RStudio:
```r
# Arithmetic series: sum of first n terms
arith_sum <- function(a1, d, n) {
  a_n <- a1 + (n - 1) * d
  S <- n / 2 * (a1 + a_n)
  return(S)
}

# Theater seating
cat("Total seats:", arith_sum(15, 2, 20), "\n")  # 680

# Verify by generating all terms and summing
terms <- 15 + (0:19) * 2
cat("Verification:", sum(terms), "\n")  # 680
```
- Practice: 10 arithmetic series problems.

**TEKS:** §111.40(c)(7)

---

### Week 2: Geometric Series, Sigma Notation, and Binomial Theorem (≈8.3 hours)

#### Lesson 6.5 — Finite Geometric Series (2 hrs)
**Algebra II Focus:** Summing a finite number of terms of a geometric sequence
**Activity:**
- The sum of the first n terms of a geometric sequence:
  ```
  S_n = a₁ · (1 - r^n) / (1 - r),  where r ≠ 1
  ```
- Derivation: `S_n = a₁ + a₁r + a₁r² + ... + a₁r^(n-1)`. Multiply both sides by r: `rS_n = a₁r + a₁r² + ... + a₁r^n`. Subtract: `S_n - rS_n = a₁ - a₁r^n` → `S_n(1 - r) = a₁(1 - r^n)` → `S_n = a₁(1 - r^n)/(1 - r)`.
- Worked examples:
  1. Sum of the first 6 terms of 2, 6, 18, 54, ... → `a₁ = 2`, `r = 3`, `n = 6`. `S₆ = 2(1 - 3⁶)/(1 - 3) = 2(1 - 729)/(-2) = 2(-728)/(-2) = 728`.
  2. A bouncing ball is dropped from 10 feet. Each bounce reaches 60% of the previous height. Total distance after 8 bounces (down + up for each):
     - First drop: 10 ft. Then: up 6, down 6, up 3.6, down 3.6, ...
     - Total = 10 + 2(6 + 3.6 + 2.16 + ... ) for 8 bounces.
     - The 2× series has `a₁ = 6`, `r = 0.6`, `n = 8`. `S₈ = 6(1 - 0.6⁸)/(1 - 0.6) ≈ 6(0.9832)/0.4 ≈ 14.75`.
     - Total distance ≈ 10 + 2(14.75) = 39.5 feet.
  3. Investment: Deposit $500 at the end of each year for 10 years at 5% annual interest. Future value of an annuity:
     - Each deposit grows: the first deposit grows for 9 years, the second for 8, ..., the last doesn't grow.
     - Total = `500(1.05⁹ + 1.05⁸ + ... + 1.05⁰)` = `500 · (1.05¹⁰ - 1)/(1.05 - 1) ≈ 500 · 12.578 ≈ $6,289`.
- Desmos: Plot cumulative sums. Watch how the partial sums grow for `r > 1` (explosive growth) vs. `0 < r < 1` (approaching a limit).
- Practice: 8 finite geometric series problems.

**TEKS:** §111.40(c)(7)

#### Lesson 6.6 — Infinite Geometric Series and Convergence (2 hrs)
**Algebra II Focus:** Determining when an infinite geometric series converges, computing the sum
**Activity:**
- Key question: Can the sum of infinitely many numbers be finite? Yes — but only under certain conditions.
- Infinite geometric series: `S = a₁ + a₁r + a₁r² + a₁r³ + ...`
  - If `|r| < 1`: The terms shrink toward 0. The partial sums approach a limit. The series **converges** to `S = a₁ / (1 - r)`.
  - If `|r| ≥ 1`: The terms do not shrink (or grow). The partial sums grow without bound. The series **diverges** (no finite sum).
- Derivation: Start with `S_n = a₁(1 - r^n)/(1 - r)`. As `n → ∞`, if `|r| < 1`, then `r^n → 0`. So `S = a₁/(1 - r)`.
- Worked examples:
  1. `1/2 + 1/4 + 1/8 + 1/16 + ...` → `a₁ = 1/2`, `r = 1/2`. `S = (1/2)/(1 - 1/2) = 1`. The infinite sum equals exactly 1.
  2. `3 + 1 + 1/3 + 1/9 + ...` → `a₁ = 3`, `r = 1/3`. `S = 3/(1 - 1/3) = 3/(2/3) = 9/2 = 4.5`.
  3. `5 + 10 + 20 + 40 + ...` → `r = 2`, `|r| > 1`. Diverges. No finite sum.
  4. Repeating decimal: `0.333... = 3/10 + 3/100 + 3/1000 + ...` → `a₁ = 3/10`, `r = 1/10`. `S = (3/10)/(9/10) = 1/3`.
- The bouncing ball revisited: If the ball bounces forever (theoretically), total distance = `10 + 2 · 6/(1-0.6) = 10 + 30 = 40 feet`.
- Desmos: Plot partial sums of a convergent series. Watch them approach the limit line. Then plot a divergent series and watch the sums explode.
- RStudio:
```r
# Visualize convergence of partial sums
a1 <- 0.5
r <- 0.5
n <- 1:20
partial_sums <- a1 * (1 - r^n) / (1 - r)
exact_sum <- a1 / (1 - r)

plot(n, partial_sums, type = "b", pch = 19, col = "blue",
     ylim = c(0, 1.2),
     main = "Convergence of Infinite Geometric Series",
     xlab = "Number of terms", ylab = "Partial sum")
abline(h = exact_sum, col = "red", lty = 2, lwd = 2)
legend("bottomright", c("Partial sums", paste("Limit =", exact_sum)),
       col = c("blue", "red"), lty = c(1, 2), pch = c(19, NA))
```
- Practice: 10 problems — determine convergence/divergence, find the sum of convergent series, convert repeating decimals to fractions.

**TEKS:** §111.40(c)(7)

#### Lesson 6.7 — Sigma Notation (1.5 hrs)
**Algebra II Focus:** Reading, writing, and evaluating sums in sigma notation
**Activity:**
- Sigma notation (summation notation) provides a compact way to write a series:
  ```
  Σ_{k=1}^{n} a_k = a₁ + a₂ + a₃ + ... + a_n
  ```
  - `k` is the index variable (also called the counter). It goes from the lower limit to the upper limit.
  - `a_k` is the general term (the formula for each term as a function of k).
- Examples — translating between expanded form and sigma notation:
  1. `3 + 6 + 9 + 12 + 15` = `Σ_{k=1}^{5} 3k`.
  2. `1 + 4 + 9 + 16 + 25` = `Σ_{k=1}^{5} k²`.
  3. `2 + 4 + 8 + 16 + 32 + 64` = `Σ_{k=1}^{6} 2^k` = `Σ_{k=0}^{5} 2^(k+1)` (multiple correct forms).
  4. `Σ_{k=1}^{100} k = 1 + 2 + ... + 100 = 5050` (Gauss's sum).
- Properties of sigma notation:
  - `Σ c·a_k = c · Σ a_k` (constant factor).
  - `Σ (a_k + b_k) = Σ a_k + Σ b_k` (sum of sums).
- RStudio:
```r
# Evaluate sigma notation sums
# Sum of k^2 from k=1 to 5
sum((1:5)^2)  # 55

# Sum of 3k from k=1 to 5
sum(3 * (1:5))  # 45

# Sum of 2^k from k=1 to 6
sum(2^(1:6))  # 126

# Gauss's sum: 1 + 2 + ... + 100
sum(1:100)  # 5050
```
- Practice: 12 problems — convert between expanded form and sigma notation, evaluate sums, apply properties.

**TEKS:** §111.40(c)(7)

#### Lesson 6.8 — The Binomial Theorem (2.8 hrs)
**Algebra II Focus:** Expanding `(a + b)^n` using the binomial theorem and Pascal's Triangle
**Activity:**
- Motivation: How do you expand `(x + 3)⁵` without multiplying it out five times?
- Pascal's Triangle: Each entry is the sum of the two entries above it.
  ```
  n=0:         1
  n=1:        1  1
  n=2:       1  2  1
  n=3:      1  3  3  1
  n=4:     1  4  6  4  1
  n=5:    1  5  10 10  5  1
  ```
  - The entries of row n are the binomial coefficients `C(n, k)` = `n! / (k!(n-k)!)`.
- The Binomial Theorem:
  ```
  (a + b)^n = Σ_{k=0}^{n} C(n,k) · a^(n-k) · b^k
  ```
- Worked examples:
  1. `(x + 2)³ = C(3,0)x³(2)⁰ + C(3,1)x²(2)¹ + C(3,2)x¹(2)² + C(3,3)x⁰(2)³`
     `= x³ + 6x² + 12x + 8`.
  2. `(2a - 1)⁴ = Σ C(4,k)(2a)^(4-k)(-1)^k`
     `= 16a⁴ - 32a³ + 24a² - 8a + 1`.
  3. Find the coefficient of `x³` in `(x + 5)⁶`: The `x³` term has `k = 3`: `C(6,3) · x³ · 5³ = 20 · 125 · x³ = 2500x³`.
- Connection to Unit 2: The binomial theorem produces polynomials — connecting to polynomial functions and their behavior.
- Connection to probability (preview): `C(n, k)` counts the number of ways to choose k items from n — the same binomial coefficients appear in probability distributions.
- RStudio:
```r
# Binomial coefficients
choose(5, 0:5)  # 1 5 10 10 5 1

# Expand (x + 2)^3 — evaluate at x = 10 to verify
# (10 + 2)^3 = 12^3 = 1728
# Using expansion: 10^3 + 6(10^2) + 12(10) + 8 = 1000 + 600 + 120 + 8 = 1728 ✓

# Generate Pascal's Triangle (first 8 rows)
for (n in 0:7) {
  row <- choose(n, 0:n)
  cat(paste(rep("  ", 7 - n), collapse = ""),
      paste(sprintf("%3d", row), collapse = " "), "\n")
}
```
- Desmos: Explore `(1 + x)^n` for various n using sliders. Observe how the number of terms and the shape of the polynomial change.
- Practice: 10 binomial expansion problems — full expansions, finding specific terms, and finding coefficients.

**TEKS:** §111.40(c)(7)

---

### Week 3: Applications, Modeling, and the Growth Model Capstone (≈8.3 hours)

#### Lesson 6.9 — Real-World Modeling with Sequences and Series (2.5 hrs)
**Algebra II Focus:** Applying sequences and series to financial, scientific, and social contexts
**Activity:**
- Application 1 — Loan amortization as a recursive sequence:
  - Monthly payment on a $200,000 mortgage at 6% annual rate (0.5% monthly) for 30 years.
  - Balance after each payment: `b_n = b_{n-1} · 1.005 - payment`. This is a recursive sequence.
  - RStudio:
```r
# Mortgage amortization as a recursive sequence
principal <- 200000
monthly_rate <- 0.06 / 12
n_payments <- 360
payment <- principal * monthly_rate / (1 - (1 + monthly_rate)^(-n_payments))
cat("Monthly payment: $", round(payment, 2), "\n")

balance <- numeric(n_payments + 1)
balance[1] <- principal
for (i in 2:(n_payments + 1)) {
  balance[i] <- balance[i-1] * (1 + monthly_rate) - payment
}

plot(0:n_payments, balance, type = "l", col = "blue", lwd = 2,
     main = "Mortgage Balance Over Time",
     xlab = "Payment Number", ylab = "Remaining Balance ($)")
abline(h = 0, col = "gray", lty = 2)
```
- Application 2 — Drug dosage and accumulation:
  - A patient takes 200 mg of a drug every 8 hours. The body eliminates 40% of the drug every 8 hours (60% remains).
  - Amount after each dose: `a₁ = 200`, `a_n = 0.6 · a_{n-1} + 200`.
  - Long-term: The amount approaches `200/(1 - 0.6) = 500 mg` (using infinite geometric series).
- Application 3 — Viral spread:
  - Each infected person infects 2.5 others per week. Starting with 1: 1, 2.5, 6.25, 15.625, ...
  - Total infected after 8 weeks: geometric series with `a₁ = 1`, `r = 2.5`, `n = 8`.
  - `S₈ = 1 · (2.5⁸ - 1)/(2.5 - 1) ≈ 1516.8/1.5 ≈ 1011`.
- Application 4 — Depreciation as geometric sequence:
  - A $40,000 truck depreciates 20% per year: 40000, 32000, 25600, ... Total value lost over 5 years: original minus `a₆ = 40000(0.8)⁵ ≈ $13,107`. Total depreciation ≈ $26,893.
- Students work through all four applications in pairs.

**TEKS:** §111.40(c)(7), §111.40(c)(8)

#### Lesson 6.10 — Regression and Curve Fitting Review (2 hrs)
**Algebra II Focus:** Fitting sequence data with regression models, connecting to Unit 3
**Activity:**
- Review: Given data that follows a pattern, how do you find the best-fit model?
  - Linear data → arithmetic sequence → linear regression.
  - Exponential data → geometric sequence → exponential regression.
  - Data that curves but does not grow explosively → polynomial regression (quadratic, cubic from Unit 2).
- How to decide which model fits:
  1. Plot the data. Does it look linear, exponential, or curved?
  2. Check differences: If first differences are constant → arithmetic/linear. If ratios of consecutive terms are constant → geometric/exponential.
  3. Fit multiple models and compare R² values.
- RStudio lab:
```r
# Given data: year vs. population
year <- 1:8
population <- c(120, 145, 178, 210, 260, 315, 390, 475)

# Check: is it arithmetic (constant differences)?
diffs <- diff(population)
cat("First differences:", diffs, "\n")
# Not constant — not arithmetic

# Check: is it geometric (constant ratios)?
ratios <- population[-1] / population[-length(population)]
cat("Ratios:", round(ratios, 3), "\n")
# Approximately constant around 1.21-1.24 — approximately geometric

# Fit exponential model: log-transform
log_pop <- log(population)
model_exp <- lm(log_pop ~ year)
cat("Exponential model: a =", exp(coef(model_exp)[1]),
    ", r =", exp(coef(model_exp)[2]), "\n")

# Fit linear model for comparison
model_lin <- lm(population ~ year)

# Compare R² values
cat("Exponential R²:", summary(model_exp)$r.squared, "\n")
cat("Linear R²:", summary(model_lin)$r.squared, "\n")

# Plot with both models
plot(year, population, pch = 19, main = "Population Growth: Model Comparison")
lines(year, predict(model_lin), col = "blue", lwd = 2)
lines(year, exp(predict(model_exp)), col = "red", lwd = 2)
legend("topleft", c("Linear fit", "Exponential fit"),
       col = c("blue", "red"), lwd = 2)
```
- Desmos: Enter the data as a table. Use the regression feature to fit linear, exponential, and quadratic models. Compare visually.
- Practice: 4 datasets — students determine the best model type, fit the model, and make a prediction.

**TEKS:** §111.40(c)(8)

#### Lesson 6.11 — Growth Model Capstone Workshop (2 hrs)
**Activity:**
- Students create a **Growth Model Capstone** — the culminating project for Path B, tying together algebraic thinking from the entire course.
- Requirements:
  1. **Data selection:** Find a real-world dataset that exhibits a sequential pattern. Suggestions: population data for a city or country, stock price history, COVID case data, annual revenue of a company, species population, social media follower growth, temperature records, athletic records over time.
  2. **Sequence identification:** Determine whether the data is best modeled by an arithmetic sequence, geometric sequence, or another pattern. Justify the choice using first differences, ratios, and visual inspection.
  3. **Formula writing:** Write both the explicit and recursive formulas for the chosen model. State the common difference or common ratio with units and interpretation.
  4. **Series computation:** If the context involves accumulation (total earnings, total production, total cases), compute the appropriate partial sum using the series formula.
  5. **Prediction:** Use the model to predict the next 5 values beyond the data. Discuss the reasonableness of these predictions — when might the model break down?
  6. **Regression comparison:** Fit the data using RStudio regression (linear or exponential). Compare the regression model to the sequence formula. Report R² and interpret.
  7. **Visualization:** At least 2 — a plot of the data with the model overlaid (RStudio or Desmos), and a table showing actual vs. predicted values.
  8. **Course connections (1 paragraph):** How does this project connect to concepts from earlier units? Reference at least one concept each from functions (Unit 1), polynomials (Unit 2), or exponential/logarithmic functions (Unit 3).
  9. **Written analysis (1 page):** Describe the data source, the modeling process, the predictions, and the limitations.
- Workshop time: data gathering, analysis, computation, visualization, writing.

#### Lesson 6.12 — Capstone Presentations & Unit 6 Assessment (1.8 hrs)
**Activity:**
- Each student presents their Growth Model Capstone (5 minutes + 2 minutes Q&A).
- Scoring:
  - Mathematical accuracy (sequence identification, formula, series computation) (30%)
  - Regression analysis and model comparison (20%)
  - Predictions and limitation analysis (15%)
  - Visualizations — clear, labeled, relevant (15%)
  - Written analysis and course connections (20%)
- Unit checkpoint quiz: Arithmetic and geometric sequences (formulas, finding terms), arithmetic and geometric series (partial sums), convergence/divergence of infinite geometric series, sigma notation, one binomial expansion (25 minutes).
- Course reflection: "What algebraic concept from this course do you think will be most useful in your future? How has your understanding of mathematical modeling changed?"
- Portfolio assembly: Students compile their best work from each Path B unit (transformation project, polynomial analysis, growth model, optimization report, matrix portfolio, growth model capstone).

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Sequences, Series & Binomial Theorem | Individual | 25 |
| Arithmetic Sequences & Series Practice | Practice | 20 |
| Geometric Sequences & Series Practice | Practice | 20 |
| Infinite Series & Convergence Practice | Practice | 15 |
| Sigma Notation & Binomial Theorem Practice | Practice | 15 |
| RStudio Regression & Modeling Lab | Lab | 20 |
| Real-World Applications Problems | Practice | 15 |
| Growth Model Capstone | Project | 60 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

sequence, term, arithmetic sequence, common difference, geometric sequence, common ratio, explicit formula, recursive formula, series, arithmetic series, geometric series, partial sum, finite series, infinite series, convergence, divergence, limit, sigma notation, summation, index, lower limit, upper limit, binomial theorem, binomial coefficient, Pascal's Triangle, factorial, combination, `C(n,k)`, expansion, annuity, amortization, regression, exponential regression, linear regression, R-squared, curve fitting, model, prediction, extrapolation
