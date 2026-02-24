# Unit 3 — Exponential & Logarithmic Growth

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | Exponential & Logarithmic Growth |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Why does exponential growth feel slow at first and then overwhelm — and how do logarithms give us the tools to measure, predict, and control it?* |
| Algebra II TEKS | §111.40(c)(2), (5) |
| Tools | Desmos, RStudio, graphing calculators, spreadsheets |
| Key Deliverable | Growth & Decay Analysis — students model a real-world exponential or logarithmic dataset, make predictions, and evaluate the long-term behavior of their model |

## Unit Narrative

Exponential growth is the most important — and most misunderstood — pattern in the modern world. Populations grow exponentially, debts compound exponentially, viral content spreads exponentially, and radioactive materials decay exponentially. Yet human intuition is stubbornly linear: we expect growth to continue at a constant rate, so we are perpetually surprised when exponential curves accelerate past our expectations. This unit builds both the mathematical machinery and the conceptual intuition for exponential and logarithmic functions. Students begin with exponential growth and decay, discover the number e through compound interest, and then meet logarithms as the inverse operation that "undoes" exponentiation — just as division undoes multiplication.

The algebraic core of the unit is logarithmic properties and equation-solving: the product, quotient, and power rules let students manipulate logarithmic expressions, and the key technique of "taking the log of both sides" lets them solve exponential equations that algebra alone cannot handle. Applications are woven throughout — population growth, radioactive decay, compound interest, pH, and decibels — so that students see logarithms not as abstract rules but as practical tools for understanding scale and change. The culminating project asks students to find a real-world dataset that exhibits exponential or logarithmic behavior, fit a model using RStudio regression (including log-transformed regression), and make predictions about the future. This connects directly to the M300 course theme: understanding growth is the first step to understanding debt, risk, and the limits of prediction.

## Math Concepts

- Exponential functions: f(x) = a · bˣ, growth (b > 1) and decay (0 < b < 1) §111.40(c)(5)
- Exponential growth rate and doubling time §111.40(c)(5)
- Exponential decay rate and half-life §111.40(c)(5)
- The number e and continuous growth: f(x) = a · eʳˣ §111.40(c)(5)
- Compound interest: A = P(1 + r/n)ⁿᵗ and A = Peʳᵗ §111.40(c)(5)
- Logarithms: definition as inverse of exponential (y = logb(x) means bʸ = x) §111.40(c)(5)
- Common logarithm (log₁₀) and natural logarithm (ln) §111.40(c)(5)
- Properties of logarithms: product rule, quotient rule, power rule §111.40(c)(5)
- Change of base formula §111.40(c)(5)
- Solving exponential equations using logarithms §111.40(c)(5)
- Solving logarithmic equations §111.40(c)(5)
- Exponential and logarithmic regression §111.40(c)(2), (5)
- Transformations of exponential and logarithmic functions §111.40(c)(2)

---

## Lesson Sequence

### Week 1: Exponential Functions (≈8.3 hours)

#### Lesson 3.1 — Exponential Growth: The Pattern That Surprises (2.5 hrs)
**Algebra II Focus:** Exponential functions, growth factor, identifying exponential patterns
**Activity:**
- Warm-up: The classic doubling problem. A lily pad doubles in area every day. On day 30, it covers the entire pond. On what day did it cover half the pond? (Day 29 — not day 15!) This is the surprise of exponential growth.
- Definition: An exponential function has the form f(x) = a · bˣ, where a is the initial value (a ≠ 0) and b is the base (b > 0, b ≠ 1).
  - If b > 1: exponential growth. The growth factor is b. The growth rate is r = b - 1.
  - If 0 < b < 1: exponential decay. The decay factor is b. The decay rate is r = 1 - b.
- Table pattern: In an exponential function, consecutive y-values have a CONSTANT RATIO (not a constant difference — that's linear).

| x | f(x) = 3 · 2ˣ | Ratio |
|---|----------------|-------|
| 0 | 3 | — |
| 1 | 6 | 6/3 = 2 |
| 2 | 12 | 12/6 = 2 |
| 3 | 24 | 24/12 = 2 |
| 4 | 48 | 48/24 = 2 |

- Graphing: f(x) = 2ˣ by hand. Key features: y-intercept at (0, 1), horizontal asymptote y = 0, always increasing, domain = all reals, range = y > 0.
- Desmos: Graph y = a · bˣ with sliders for a and b. Explore: What does a control? (y-intercept and vertical stretch.) What does b control? (steepness of growth/decay.)
- Real-world: A bacterial culture starts with 500 bacteria and doubles every hour. f(t) = 500 · 2ᵗ. How many after 10 hours? f(10) = 500 · 1024 = 512,000.
- Doubling time: The time it takes for a quantity to double. If f(t) = a · bᵗ, the doubling time is the value of t where bᵗ = 2.
- Practice: 12 problems — identify exponential functions from tables, write equations from descriptions, graph and interpret.

**TEKS:** §111.40(c)(5)

#### Lesson 3.2 — Exponential Decay and Half-Life (2 hrs)
**Algebra II Focus:** Decay models, half-life, interpreting decay in context
**Activity:**
- Decay occurs when 0 < b < 1. The function decreases toward zero but never reaches it (horizontal asymptote at y = 0).
- Half-life: The time it takes for a quantity to reduce to half its value.
  - Radioactive decay: Carbon-14 has a half-life of about 5,730 years. If a sample starts with 100 grams:
    - After 5,730 years: 50 g.
    - After 11,460 years: 25 g.
    - After 17,190 years: 12.5 g.
  - Model: f(t) = 100 · (1/2)^(t/5730).
- Other decay contexts:
  - Car depreciation: A $30,000 car loses 15% of its value each year. f(t) = 30000 · (0.85)ᵗ.
  - Medicine in the bloodstream: 200 mg of medication with a 4-hour half-life. f(t) = 200 · (0.5)^(t/4).
- RStudio: Plot the Carbon-14 decay model.

```r
t <- seq(0, 30000, by = 100)
C14 <- 100 * (0.5)^(t / 5730)

plot(t, C14, type = "l", col = "blue", lwd = 2,
     main = "Carbon-14 Decay (Half-life = 5,730 years)",
     xlab = "Time (years)", ylab = "Amount (grams)")
abline(h = 50, lty = 2, col = "red")
abline(h = 25, lty = 2, col = "red")
abline(h = 12.5, lty = 2, col = "red")
text(8000, 52, "50 g at 5,730 years", col = "red", cex = 0.8)
text(14000, 27, "25 g at 11,460 years", col = "red", cex = 0.8)
```

- Desmos: Graph y = a · bˣ with b = 0.5, 0.7, 0.9. How does the decay factor affect the speed of decay?
- Practice: 10 problems — write decay models, calculate amounts after given times, find half-lives.

**TEKS:** §111.40(c)(5)

#### Lesson 3.3 — The Number e and Continuous Growth (2 hrs)
**Algebra II Focus:** The mathematical constant e, continuous compounding, the function eˣ
**Activity:**
- Compound interest motivates the discovery of e:
  - Invest $1 at 100% annual interest. How much after 1 year?
  - Compounded annually (n=1): A = 1(1 + 1/1)¹ = $2.00.
  - Compounded semi-annually (n=2): A = 1(1 + 1/2)² = $2.25.
  - Compounded quarterly (n=4): A = 1(1 + 1/4)⁴ ≈ $2.4414.
  - Compounded monthly (n=12): A ≈ $2.6130.
  - Compounded daily (n=365): A ≈ $2.7146.
  - Compounded every second (n=31,536,000): A ≈ $2.71828...
- As n → ∞, the amount approaches e ≈ 2.71828... This is the number e — the base of the natural exponential function.
- Spreadsheet activity: Students calculate (1 + 1/n)ⁿ for n = 1, 10, 100, 1000, 10000, 100000 in a spreadsheet and watch the value converge to e.
- Continuous compounding formula: A = Peʳᵗ.
  - P = principal, r = annual rate (decimal), t = time in years.
  - Example: $5,000 at 3.5% compounded continuously for 10 years. A = 5000 · e^(0.035 · 10) = 5000 · e^0.35 ≈ $7,095.34.
- General continuous growth/decay: f(t) = a · eʳᵗ.
  - r > 0: growth. r < 0: decay.
- RStudio:

```r
# Convergence to e
n <- c(1, 10, 100, 1000, 10000, 100000, 1000000)
approx_e <- (1 + 1/n)^n
data.frame(n = n, approximation = approx_e, error = abs(approx_e - exp(1)))

# Continuous compounding
P <- 5000; r <- 0.035; t <- seq(0, 30, by = 0.1)
A <- P * exp(r * t)
plot(t, A, type = "l", col = "blue", lwd = 2,
     main = "Continuous Compound Interest: $5,000 at 3.5%",
     xlab = "Years", ylab = "Amount ($)")
```

- Practice: 8 problems — continuous compounding, converting between f(t) = a · bᵗ and f(t) = a · eʳᵗ.

**TEKS:** §111.40(c)(5)

#### Lesson 3.4 — Transformations of Exponential Functions (1.8 hrs)
**Algebra II Focus:** Applying Unit 1 transformation framework to exponential functions
**Activity:**
- The general form: f(x) = a · b^(x - h) + k.
  - a: vertical stretch/compression and reflection.
  - h: horizontal translation.
  - k: vertical translation — this shifts the horizontal asymptote from y = 0 to y = k.
- Example: f(x) = -3 · 2^(x + 1) + 5.
  - Parent: y = 2ˣ.
  - Shift left 1 (h = -1).
  - Vertical stretch by 3 and reflect over x-axis (a = -3).
  - Shift up 5 (k = 5).
  - Horizontal asymptote: y = 5 (not y = 0).
  - The function DECREASES (reflected) and approaches 5 from below.
- Desmos: Use sliders for a, b, h, k in y = a · b^(x - h) + k to explore all transformation effects.
- Key insight: The horizontal asymptote is y = k. This matters for real-world models — a decaying process might approach a nonzero equilibrium (e.g., a hot drink cooling to room temperature, not to 0°).
- Practice: 8 problems — graph transformed exponential functions, identify asymptotes, write equations from graphs.

**TEKS:** §111.40(c)(2), §111.40(c)(5)

---

### Week 2: Logarithms and Their Properties (≈8.3 hours)

#### Lesson 3.5 — Introduction to Logarithms (2.5 hrs)
**Algebra II Focus:** Definition of logarithm, converting between exponential and logarithmic form
**Activity:**
- Motivation: Solving 2ˣ = 8 is easy (x = 3). Solving 2ˣ = 10 is not — we need a new operation.
- Definition: logb(x) = y means bʸ = x. The logarithm answers: "What exponent do I put on b to get x?"
  - log₂(8) = 3 because 2³ = 8.
  - log₃(81) = 4 because 3⁴ = 81.
  - log₁₀(1000) = 3 because 10³ = 1000.
  - log₅(1) = 0 because 5⁰ = 1.
  - log₂(1/4) = -2 because 2⁻² = 1/4.
- Two special logarithms:
  - Common logarithm: log(x) = log₁₀(x). Used in pH, decibels, Richter scale.
  - Natural logarithm: ln(x) = logₑ(x). Used in continuous growth/decay, calculus.
- Logarithm as inverse: y = bˣ and y = logb(x) are inverse functions. Their graphs are reflections across y = x.
- Desmos: Graph y = 2ˣ and y = log₂(x) on the same axes with y = x. Observe the reflection.
- Key properties from the definition:
  - logb(b) = 1 (because b¹ = b).
  - logb(1) = 0 (because b⁰ = 1).
  - logb(bˣ) = x (the log undoes the exponential).
  - b^(logb(x)) = x (the exponential undoes the log).
- Domain of logarithmic functions: x > 0 (you cannot take the log of zero or a negative number).
- Practice: 15 problems — convert between exponential and logarithmic form, evaluate logarithms.

**TEKS:** §111.40(c)(5)

#### Lesson 3.6 — Properties of Logarithms (2.5 hrs)
**Algebra II Focus:** Product, quotient, and power rules for logarithms
**Activity:**
- The three properties (derived from exponent rules):
  - **Product Rule:** logb(MN) = logb(M) + logb(N).
    - Because bᵐ · bⁿ = bᵐ⁺ⁿ, the log of a product is the sum of the logs.
  - **Quotient Rule:** logb(M/N) = logb(M) - logb(N).
    - Because bᵐ / bⁿ = bᵐ⁻ⁿ, the log of a quotient is the difference of the logs.
  - **Power Rule:** logb(Mᵖ) = p · logb(M).
    - Because (bᵐ)ᵖ = bᵐᵖ, the log of a power brings the exponent down as a multiplier.
- Expanding expressions:
  - log₂(8x³) = log₂(8) + log₂(x³) = 3 + 3·log₂(x).
  - ln(√(x/y)) = ln((x/y)^(1/2)) = (1/2)·ln(x/y) = (1/2)(ln(x) - ln(y)).
- Condensing expressions (reverse direction):
  - 2·log(x) + log(3) - log(y) = log(x²) + log(3) - log(y) = log(3x²/y).
- Common mistakes to avoid:
  - log(M + N) ≠ log(M) + log(N). There is NO rule for the log of a sum!
  - log(M · N) ≠ log(M) · log(N).
- **Change of Base Formula:** logb(x) = log(x)/log(b) = ln(x)/ln(b).
  - This lets you evaluate any logarithm on a calculator that only has log and ln buttons.
  - log₂(10) = log(10)/log(2) = 1/0.3010 ≈ 3.3219.
- Practice: 15 problems — expand, condense, and evaluate using the change of base formula.

**TEKS:** §111.40(c)(5)

#### Lesson 3.7 — Solving Exponential Equations with Logarithms (2 hrs)
**Algebra II Focus:** Using logarithms to solve equations where the variable is in the exponent
**Activity:**
- The key technique: "Take the log of both sides."
- Type 1 — Bases can be matched:
  - 4ˣ = 64. Rewrite: (2²)ˣ = 2⁶. So 2x = 6, x = 3.
- Type 2 — Bases cannot be matched (use logs):
  - 3ˣ = 20. Take log of both sides: x · log(3) = log(20). x = log(20)/log(3) ≈ 2.727.
  - 5^(2x+1) = 80. Take ln: (2x+1) · ln(5) = ln(80). 2x+1 = ln(80)/ln(5) ≈ 2.723. x ≈ 0.861.
- Type 3 — Exponential equations requiring algebraic manipulation first:
  - 2 · e^(3x) - 5 = 13. Isolate: e^(3x) = 9. Take ln: 3x = ln(9). x = ln(9)/3 ≈ 0.732.
- Type 4 — Quadratic in form:
  - e^(2x) - 3e^(x) + 2 = 0. Let u = eˣ: u² - 3u + 2 = 0 → (u-1)(u-2) = 0 → u = 1 or u = 2 → eˣ = 1 or eˣ = 2 → x = 0 or x = ln(2).
- Practice: 12 problems of all types.
- Connection to compound interest: How long to double an investment at 5% compounded annually?
  - 2P = P(1.05)ᵗ → 2 = 1.05ᵗ → t = log(2)/log(1.05) ≈ 14.2 years.
  - Rule of 72: Doubling time ≈ 72/r (where r is the percentage rate). 72/5 = 14.4 years. Close!

**TEKS:** §111.40(c)(5)

#### Lesson 3.8 — Solving Logarithmic Equations (1.3 hrs)
**Algebra II Focus:** Solving equations that contain logarithms
**Activity:**
- Strategy: Convert to exponential form, then solve.
- Type 1 — Single logarithm:
  - log₂(x - 3) = 5. Convert: x - 3 = 2⁵ = 32. x = 35.
  - ln(2x) = 4. Convert: 2x = e⁴ ≈ 54.598. x ≈ 27.299.
- Type 2 — Use properties to combine, then convert:
  - log(x) + log(x - 3) = 1. Combine: log(x(x-3)) = 1. Convert: x(x-3) = 10¹ = 10.
  - x² - 3x - 10 = 0. (x-5)(x+2) = 0. x = 5 or x = -2.
  - CHECK: x = -2 makes log(-2) undefined. Reject! Only x = 5 works.
- Type 3 — Logarithms on both sides:
  - log₃(2x + 1) = log₃(x + 4). Since logs are equal, arguments are equal: 2x + 1 = x + 4. x = 3. Check: log₃(7) = log₃(7). Valid.
- CRITICAL: Always check solutions in the original equation. Logarithms have domain restrictions (argument must be positive), so extraneous solutions are common.
- Practice: 10 problems — solve and check all solutions.

**TEKS:** §111.40(c)(5)

---

### Week 3: Applications, Regression, and the Analysis Project (≈8.3 hours)

#### Lesson 3.9 — Applications: Population, Finance, and Science (2.5 hrs)
**Algebra II Focus:** Modeling real-world scenarios with exponential and logarithmic functions
**Activity:**
- **Population growth:** A city of 50,000 grows at 3% per year. P(t) = 50000 · (1.03)ᵗ.
  - When will the population reach 100,000? Solve 100000 = 50000 · (1.03)ᵗ → 2 = 1.03ᵗ → t = ln(2)/ln(1.03) ≈ 23.4 years.
- **Compound interest:** $10,000 at 4.5% compounded monthly for 20 years.
  - A = 10000(1 + 0.045/12)^(12·20) = 10000(1.00375)²⁴⁰ ≈ $24,541.71.
  - Compare to continuous: A = 10000 · e^(0.045·20) = 10000 · e^0.9 ≈ $24,596.03.
- **Radioactive decay:** A 500-gram sample has a half-life of 12 hours. How much remains after 2 days (48 hours)?
  - f(48) = 500 · (0.5)^(48/12) = 500 · (0.5)⁴ = 500 · 0.0625 = 31.25 grams.
- **pH scale:** pH = -log[H⁺]. If [H⁺] = 3.2 × 10⁻⁵, then pH = -log(3.2 × 10⁻⁵) ≈ 4.49 (acidic).
  - If pH = 7.4, what is [H⁺]? [H⁺] = 10⁻⁷·⁴ ≈ 3.98 × 10⁻⁸.
- **Decibels:** dB = 10 · log(I/I₀), where I₀ = 10⁻¹² W/m². A sound at 80 dB has intensity I = 10⁻¹² · 10⁸ = 10⁻⁴ W/m².
- Discussion: Why are pH and decibels on logarithmic scales? Because the quantities they measure span enormous ranges — hydrogen ion concentration varies from 10⁰ to 10⁻¹⁴, and sound intensity varies by a factor of a trillion. Logarithms compress these ranges into human-readable numbers.
- Practice: 8 application problems across all contexts.

**TEKS:** §111.40(c)(5)

#### Lesson 3.10 — Exponential and Logarithmic Regression (2.5 hrs)
**Algebra II Focus:** Fitting exponential models to data, log-transformed regression
**Activity:**
- When data appears to grow or decay exponentially, we can fit an exponential model using regression.
- Method 1 — Direct exponential regression in RStudio:

```r
# World population data (in billions)
year <- c(1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020)
pop <- c(2.5, 3.0, 3.7, 4.4, 5.3, 6.1, 6.9, 7.8)

# Fit exponential model: pop = a * e^(r * t)
# Use nls (nonlinear least squares) with time since 1950
t <- year - 1950
model <- nls(pop ~ a * exp(r * t), start = list(a = 2.5, r = 0.02))
summary(model)

# Plot
plot(year, pop, pch = 19, col = "black",
     main = "World Population: Exponential Fit",
     xlab = "Year", ylab = "Population (billions)")
t_pred <- seq(0, 80, by = 1)
lines(t_pred + 1950, predict(model, newdata = data.frame(t = t_pred)),
      col = "blue", lwd = 2)
```

- Method 2 — Log-transformed linear regression:
  - If y = a · eʳˣ, then ln(y) = ln(a) + r·x. This is a LINEAR equation in x and ln(y)!
  - Take the natural log of the y-values and perform linear regression.

```r
# Log-transform the population data
log_pop <- log(pop)
lin_model <- lm(log_pop ~ t)
summary(lin_model)

# The intercept = ln(a), the slope = r
a_est <- exp(coef(lin_model)[1])
r_est <- coef(lin_model)[2]
cat("Estimated a =", a_est, "\n")
cat("Estimated growth rate r =", r_est, "per year\n")
cat("Doubling time =", log(2) / r_est, "years\n")

# Verify: plot log-transformed data (should be linear)
plot(t, log_pop, pch = 19, col = "black",
     main = "Log-Transformed Population (Should Be Linear)",
     xlab = "Years since 1950", ylab = "ln(Population)")
abline(lin_model, col = "red", lwd = 2)
```

- Key insight: If a scatter plot of x vs. ln(y) is approximately linear, the data is exponential. This is the log-transform test for exponential behavior.
- Discussion: The exponential model predicts continued growth. Is this realistic? What might cause the growth to slow? (Resource limits, carrying capacity — preview of logistic models.)
- Practice: Students fit exponential models to a small dataset and interpret the growth rate.

**TEKS:** §111.40(c)(2), §111.40(c)(5)

#### Lesson 3.11 — Growth & Decay Analysis Project Workshop (2 hrs)
**Activity:**
- Students create a **Growth & Decay Analysis**:
  1. **Dataset Selection:** Choose a real-world dataset that exhibits exponential growth or decay. Options provided: U.S. national debt over time, COVID-19 case counts (early phase), world population, atmospheric CO₂ concentration, radioactive isotope decay measurements, depreciation of a car model, or students may find their own with at least 8 data points.
  2. **Scatter Plot:** Plot the raw data in RStudio with labeled axes and title.
  3. **Log-Transform Test:** Plot the natural log of the y-values vs. x. Is the result approximately linear? Include the R² value.
  4. **Model Fitting:** Fit an exponential model (y = a · eʳˣ) using either direct regression or log-transformed regression. Report the values of a and r with interpretation.
  5. **Key Calculations:**
     - Calculate the doubling time (or half-life) from the model.
     - Calculate the predicted value at 3 specific future points.
     - Calculate the percentage growth (or decay) rate per unit time.
  6. **Graphical Presentation:** Plot the data and the fitted model on the same axes. Include the equation and R² on the graph.
  7. **Critical Analysis (1 paragraph):** Will the exponential trend continue indefinitely? What factors might cause the model to break down? At what point would you stop trusting the model's predictions?
  8. **Connection to M300 Theme (2-3 sentences):** How does this model relate to growth, debt, or risk? What are the consequences of ignoring exponential trends?
- Workshop time: data selection, RStudio analysis, graphing, writing.

#### Lesson 3.12 — Presentations & Unit 3 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5-6 students present their Growth & Decay Analysis (4 minutes each), showing their data, model, predictions, and the moment the model becomes unreliable.
- Unit checkpoint quiz: Exponential function evaluation, logarithm properties, solving exponential equations, solving logarithmic equations, application problems (compound interest, half-life, pH) (25 minutes).
- Class discussion: What is the most surprising exponential trend you found? What does exponential growth mean for national debt? For population? For investments? This sets up the remaining M300 units on debt and risk.

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Exponentials & Logarithms | Individual | 25 |
| Exponential Growth & Decay Practice | Practice | 20 |
| Properties of Logarithms Practice | Practice | 20 |
| Solving Exponential Equations Practice | Practice | 15 |
| Solving Logarithmic Equations Practice | Practice | 15 |
| Desmos Exploration Labs (Transformations & Inverses) | Lab | 25 |
| Growth & Decay Analysis Project | Project | 55 |
| Warm-ups & Daily Work | Participation | 25 |
| **Total** | | **200** |

## Key Vocabulary

exponential function, base, growth factor, decay factor, growth rate, decay rate, doubling time, half-life, compound interest, principal, annual rate, compounding frequency, continuous compounding, the number e, natural exponential function, logarithm, common logarithm, natural logarithm, log base b, inverse function, product rule, quotient rule, power rule, change of base formula, exponential equation, logarithmic equation, extraneous solution, exponential regression, log-transformed regression, R-squared, pH, decibel, Richter scale, horizontal asymptote, domain restriction, carrying capacity, extrapolation
