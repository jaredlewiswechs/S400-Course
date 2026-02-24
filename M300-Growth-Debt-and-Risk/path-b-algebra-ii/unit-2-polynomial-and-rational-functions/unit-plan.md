# Unit 2 — Polynomial & Rational Functions

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Polynomial & Rational Functions |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do polynomials and rational functions describe curves that simple lines cannot — and what do zeros, asymptotes, and end behavior tell us about a model?* |
| Algebra II TEKS | §111.40(c)(6), (7) |
| Tools | Desmos, RStudio, graphing calculators, spreadsheets |
| Key Deliverable | Polynomial Modeling Report — students fit polynomial models to real-world data, analyze the behavior of their model, and evaluate its predictive limitations |

## Unit Narrative

Real-world data rarely follows a straight line. Population growth accelerates, roller coasters curve, and economic cycles oscillate. Polynomial functions — with their turns, zeros, and flexible shapes — capture patterns that linear models miss. This unit builds polynomial fluency from the ground up: students start with the vocabulary of degree, leading coefficient, and end behavior, then learn to graph polynomials by identifying zeros and their multiplicity. The algebraic backbone is polynomial division — long division and synthetic division — which leads to the Remainder and Factor Theorems. These tools let students move fluidly between the factored form of a polynomial and its graph, and vice versa.

The unit then extends to rational functions, which arise naturally when one polynomial is divided by another. Asymptotes (vertical, horizontal, and slant) become the key graphical features, and students develop the analytic skill of identifying holes vs. asymptotes. Complex numbers enter as the answer to a practical question: What happens when a polynomial has no real zeros? The Fundamental Theorem of Algebra guarantees that an nth-degree polynomial always has exactly n roots (counting multiplicity and complex roots), providing a satisfying completeness to the theory. The culminating project asks students to fit polynomial models to real-world datasets using RStudio regression, then critically analyze what the model captures and where it breaks down — building the habit of skepticism toward models that is central to the M300 course theme of growth, debt, and risk.

## Math Concepts

- Polynomial functions: definition, degree, leading coefficient, standard form §111.40(c)(6)
- End behavior: determined by degree (even/odd) and leading coefficient sign §111.40(c)(6)
- Zeros of polynomials: x-intercepts, factored form, multiplicity §111.40(c)(6)
- Graphing polynomials: zeros, multiplicity, end behavior, turning points §111.40(c)(6)
- Polynomial long division §111.40(c)(6)
- Synthetic division §111.40(c)(6)
- Remainder Theorem: f(c) equals the remainder when dividing by (x - c) §111.40(c)(6)
- Factor Theorem: (x - c) is a factor if and only if f(c) = 0 §111.40(c)(6)
- Complex numbers: a + bi, arithmetic, conjugates §111.40(c)(7)
- Fundamental Theorem of Algebra: an nth-degree polynomial has exactly n roots (counting multiplicity and complex roots) §111.40(c)(7)
- Rational functions: definition, domain restrictions §111.40(c)(6)
- Vertical asymptotes, horizontal asymptotes, slant asymptotes, holes §111.40(c)(6)
- Graphing rational functions §111.40(c)(6)

---

## Lesson Sequence

### Week 1: Polynomial Functions (≈8.3 hours)

#### Lesson 2.1 — Polynomial Vocabulary and End Behavior (2 hrs)
**Algebra II Focus:** Degree, leading coefficient, classifying polynomials, end behavior
**Activity:**
- Warm-up: Show three real-world graphs — U.S. GDP over time (roughly cubic), a roller coaster profile (polynomial curve), and the path of a soccer ball (quadratic). Ask: "None of these are straight lines. What kind of functions might model them?"
- Definitions:
  - Polynomial: f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where n is a non-negative integer and aₙ ≠ 0.
  - Degree: the highest power of x. Leading coefficient: aₙ. Constant term: a₀.
  - Classification by degree: constant (0), linear (1), quadratic (2), cubic (3), quartic (4), quintic (5).
- End behavior — determined entirely by the leading term:
  - Even degree, positive leading coefficient: both ends rise (↑↑).
  - Even degree, negative leading coefficient: both ends fall (↓↓).
  - Odd degree, positive leading coefficient: left falls, right rises (↓↑).
  - Odd degree, negative leading coefficient: left rises, right falls (↑↓).
- Desmos exploration: Graph y = x², y = x³, y = x⁴, y = x⁵. Then graph y = -x², y = -x³. Confirm end behavior rules.
- Then: y = 2x³ - 5x² + x - 3. The leading term is 2x³ — as x → ∞, y → ∞; as x → -∞, y → -∞. The lower-degree terms are irrelevant for end behavior.
- RStudio: Visualize how the leading term dominates.

```r
x <- seq(-10, 10, by = 0.1)
f <- 2*x^3 - 5*x^2 + x - 3
leading_term <- 2*x^3

plot(x, f, type = "l", col = "blue", ylim = c(-2000, 2000),
     main = "Polynomial vs. Leading Term", xlab = "x", ylab = "y")
lines(x, leading_term, col = "red", lty = 2)
legend("topleft", legend = c("f(x) = 2x³ - 5x² + x - 3", "Leading term: 2x³"),
       col = c("blue", "red"), lty = c(1, 2))
```

- Practice: 12 problems — identify degree, leading coefficient, classify, and describe end behavior.

**TEKS:** §111.40(c)(6)

#### Lesson 2.2 — Zeros, Multiplicity, and Graphing Polynomials (2.5 hrs)
**Algebra II Focus:** Finding zeros from factored form, multiplicity and graph behavior at zeros, sketching polynomial graphs
**Activity:**
- Zeros (roots, x-intercepts): The values of x where f(x) = 0.
- Factored form: f(x) = a(x - r₁)ᵐ¹(x - r₂)ᵐ² ... where r₁, r₂, ... are the zeros.
- Multiplicity: the exponent on each factor.
  - Odd multiplicity: the graph crosses the x-axis at that zero.
  - Even multiplicity: the graph touches (bounces off) the x-axis at that zero.
- Example: f(x) = -2(x + 1)²(x - 3)
  - Zeros: x = -1 (multiplicity 2, bounces) and x = 3 (multiplicity 1, crosses).
  - Degree: 2 + 1 = 3. Leading coefficient: -2 (negative, odd degree → ↑↓ end behavior).
  - y-intercept: f(0) = -2(1)²(-3) = 6.
- Graphing strategy:
  1. Find the zeros and their multiplicity.
  2. Determine end behavior from degree and leading coefficient.
  3. Find the y-intercept.
  4. Plot zeros and y-intercept, sketch the curve.
- Desmos: Graph f(x) = (x + 1)²(x - 3) and f(x) = (x + 1)(x - 3). Compare how the graph behaves at x = -1 (bounce vs. cross).
- Turning points: A polynomial of degree n has at most n - 1 turning points.
- Practice: 10 problems — given factored form, sketch the graph; given a graph, write a possible equation.

**TEKS:** §111.40(c)(6)

#### Lesson 2.3 — Polynomial Long Division (2 hrs)
**Algebra II Focus:** Dividing a polynomial by a polynomial using long division
**Activity:**
- Motivation: Just as 17 ÷ 5 = 3 remainder 2, polynomials can be divided: f(x) ÷ d(x) = q(x) remainder r(x).
- Polynomial long division — step by step:
  - Divide (2x³ + 3x² - 5x + 1) by (x - 2):
    1. Divide leading terms: 2x³ ÷ x = 2x².
    2. Multiply: 2x²(x - 2) = 2x³ - 4x².
    3. Subtract: (2x³ + 3x²) - (2x³ - 4x²) = 7x².
    4. Bring down -5x → 7x² - 5x.
    5. Repeat: 7x² ÷ x = 7x. 7x(x - 2) = 7x² - 14x. Subtract: 9x.
    6. Bring down +1 → 9x + 1.
    7. Repeat: 9x ÷ x = 9. 9(x - 2) = 9x - 18. Subtract: 19.
    8. Result: 2x² + 7x + 9, remainder 19.
  - Check: (x - 2)(2x² + 7x + 9) + 19 = 2x³ + 3x² - 5x + 1.
- Division Algorithm: f(x) = d(x) · q(x) + r(x), where degree of r < degree of d.
- Practice: 8 long division problems, increasing in difficulty (including cases with missing terms — insert 0 placeholders).

**TEKS:** §111.40(c)(6)

#### Lesson 2.4 — Synthetic Division (1.8 hrs)
**Algebra II Focus:** Efficient division by linear factors using synthetic division
**Activity:**
- Synthetic division is a shortcut for dividing by (x - c) — it uses only coefficients.
- Same example: Divide (2x³ + 3x² - 5x + 1) by (x - 2), so c = 2.
  - Write coefficients: 2, 3, -5, 1
  - Bring down 2. Multiply by 2 → 4. Add to 3 → 7. Multiply by 2 → 14. Add to -5 → 9. Multiply by 2 → 18. Add to 1 → 19.
  - Result: 2x² + 7x + 9, remainder 19. Same answer, faster process.
- When to use synthetic division: ONLY when dividing by (x - c) — a linear divisor.
- Warning: If dividing by (x + 3), use c = -3 (not +3).
- Comparison: Students solve the same division problem using both long and synthetic methods, confirming the same result.
- Practice: 10 synthetic division problems, including cases with zero coefficients (e.g., x⁴ - 1 has coefficients 1, 0, 0, 0, -1).

**TEKS:** §111.40(c)(6)

---

### Week 2: Theorems, Complex Numbers, and Rational Functions (≈8.3 hours)

#### Lesson 2.5 — The Remainder and Factor Theorems (2 hrs)
**Algebra II Focus:** Connecting division to evaluation and factoring
**Activity:**
- **Remainder Theorem:** When f(x) is divided by (x - c), the remainder is f(c).
  - From Lesson 2.3: dividing by (x - 2) gave remainder 19. Check: f(2) = 2(8) + 3(4) - 5(2) + 1 = 16 + 12 - 10 + 1 = 19. Confirmed!
  - This means you can evaluate a polynomial at any value using synthetic division — the remainder IS the value.
- **Factor Theorem:** (x - c) is a factor of f(x) if and only if f(c) = 0.
  - If the remainder is 0, then (x - c) divides evenly — it's a factor!
- Application: Is (x - 3) a factor of f(x) = x³ - 4x² + x + 6?
  - f(3) = 27 - 36 + 3 + 6 = 0. Yes! So f(x) = (x - 3) · q(x).
  - Use synthetic division with c = 3: q(x) = x² - x - 2 = (x - 2)(x + 1).
  - Complete factorization: f(x) = (x - 3)(x - 2)(x + 1). Zeros: x = 3, 2, -1.
- Strategy for factoring higher-degree polynomials:
  1. Use the Rational Root Theorem to find candidate zeros: possible rational roots = ±(factors of constant term)/(factors of leading coefficient).
  2. Test candidates using synthetic division.
  3. Once you find one root, reduce the degree by dividing.
  4. Repeat until fully factored (or use the quadratic formula on the remaining quadratic).
- Practice: 8 problems — use the Remainder and Factor Theorems to find zeros and factor polynomials completely.

**TEKS:** §111.40(c)(6)

#### Lesson 2.6 — Complex Numbers (2.5 hrs)
**Algebra II Focus:** The imaginary unit i, complex number arithmetic, complex roots
**Activity:**
- Motivation: Solve x² + 1 = 0. No real number works — x² = -1 has no real solution. But mathematicians defined i = √(-1), so i² = -1.
- Complex number: a + bi, where a is the real part and b is the imaginary part.
  - Examples: 3 + 2i, -1 - 4i, 5 (real number = 5 + 0i), 7i (pure imaginary = 0 + 7i).
- Arithmetic:
  - Addition/Subtraction: Combine real parts and imaginary parts separately.
    - (3 + 2i) + (1 - 5i) = 4 - 3i.
  - Multiplication: Use FOIL, remembering i² = -1.
    - (3 + 2i)(1 - 5i) = 3 - 15i + 2i - 10i² = 3 - 13i + 10 = 13 - 13i.
  - Conjugate: The conjugate of a + bi is a - bi. Their product is always real: (a + bi)(a - bi) = a² + b².
  - Division: Multiply numerator and denominator by the conjugate of the denominator.
    - (3 + 2i)/(1 - i) = (3 + 2i)(1 + i)/((1 - i)(1 + i)) = (3 + 3i + 2i + 2i²)/(1 + 1) = (1 + 5i)/2.
- Complex roots of polynomials: Solve x² + 4 = 0. x² = -4. x = ±√(-4) = ±2i.
- Quadratic formula with complex results: x² - 2x + 5 = 0. x = (2 ± √(4 - 20))/2 = (2 ± √(-16))/2 = (2 ± 4i)/2 = 1 ± 2i.
- Key property: Complex roots always come in conjugate pairs for polynomials with real coefficients.
- Practice: 15 problems — complex arithmetic, solving quadratics with complex roots, identifying conjugate pairs.

**TEKS:** §111.40(c)(7)

#### Lesson 2.7 — The Fundamental Theorem of Algebra (1.5 hrs)
**Algebra II Focus:** Every polynomial of degree n has exactly n roots (counting multiplicity and complex)
**Activity:**
- **Fundamental Theorem of Algebra:** Every polynomial of degree n ≥ 1 has at least one root in the complex numbers. By repeated factoring, it has exactly n roots (counting multiplicity).
- Examples:
  - f(x) = x³ - 1 has degree 3 → exactly 3 roots. Factor: (x - 1)(x² + x + 1). Use the quadratic formula on x² + x + 1: x = (-1 ± √(-3))/2 = -1/2 ± (√3/2)i. Three roots: 1, -1/2 + (√3/2)i, -1/2 - (√3/2)i.
  - f(x) = x⁴ - 16 has degree 4 → exactly 4 roots. Factor: (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4). Roots: 2, -2, 2i, -2i.
- Using known roots to find all roots: If f(x) is degree 4 and you know roots 1 and -3, divide out (x - 1)(x + 3) to get a quadratic, then solve it.
- Desmos: Graph x³ - 1. It crosses the x-axis only once (at x = 1). The other two roots are complex — invisible on the real graph!
- Discussion: The real graph shows real roots. Complex roots are "hidden" but still there. The degree tells you the total count.
- Practice: 8 problems — find all roots (real and complex) of polynomials.

**TEKS:** §111.40(c)(7)

#### Lesson 2.8 — Rational Functions: Introduction and Domain (2.3 hrs)
**Algebra II Focus:** Defining rational functions, finding domain, identifying vertical asymptotes and holes
**Activity:**
- A rational function is a ratio of two polynomials: f(x) = p(x)/q(x), where q(x) ≠ 0.
- Domain: All real numbers except where q(x) = 0.
  - f(x) = (x + 2)/(x - 3). Domain: all reals except x = 3.
  - f(x) = 1/(x² - 4) = 1/((x-2)(x+2)). Domain: all reals except x = 2 and x = -2.
- Vertical asymptotes vs. holes:
  - Factor both numerator and denominator.
  - If (x - c) cancels completely: the graph has a **hole** at x = c (a removable discontinuity).
  - If (x - c) remains in the denominator: the graph has a **vertical asymptote** at x = c.
  - Example: f(x) = (x² - 4)/(x - 2) = ((x-2)(x+2))/(x-2) = x + 2 for x ≠ 2. Hole at x = 2 (the graph looks like y = x + 2 with a hole at (2, 4)).
  - Example: f(x) = 1/(x - 2). Vertical asymptote at x = 2 (graph approaches ±∞ near x = 2).
- Desmos: Graph f(x) = (x² - 4)/(x - 2) and compare to y = x + 2. Zoom in at x = 2 — can you see the hole?
- Then graph f(x) = 1/(x - 2). Observe the vertical asymptote.
- Practice: 10 problems — find domain, vertical asymptotes, and holes.

**TEKS:** §111.40(c)(6)

---

### Week 3: Graphing Rational Functions and the Modeling Project (≈8.3 hours)

#### Lesson 2.9 — Horizontal and Slant Asymptotes (2 hrs)
**Algebra II Focus:** Long-run behavior of rational functions
**Activity:**
- Horizontal asymptotes — compare degrees of numerator (n) and denominator (m):
  - n < m: Horizontal asymptote at y = 0 (numerator grows slower).
    - f(x) = 3/(x² + 1) → y = 0 as x → ±∞.
  - n = m: Horizontal asymptote at y = (leading coefficient of numerator)/(leading coefficient of denominator).
    - f(x) = (2x + 1)/(3x - 5) → y = 2/3.
  - n > m: No horizontal asymptote (numerator grows faster). If n = m + 1, there is a slant (oblique) asymptote found by long division.
    - f(x) = (x² + 1)/(x - 1). Long division: x² + 1 = (x - 1)(x + 1) + 2. So f(x) = x + 1 + 2/(x - 1). Slant asymptote: y = x + 1.
- Desmos: Graph each example. Add the asymptote as a separate line to verify.
- Intuition: An asymptote describes what the function "wants to be" in the long run — it's the simplified version when x is enormous.
- Practice: 10 problems — identify horizontal or slant asymptotes for various rational functions.

**TEKS:** §111.40(c)(6)

#### Lesson 2.10 — Graphing Rational Functions (2.5 hrs)
**Algebra II Focus:** Complete graphing strategy for rational functions
**Activity:**
- Step-by-step graphing strategy:
  1. Factor numerator and denominator.
  2. Find the domain (exclude zeros of denominator).
  3. Identify holes (common factors that cancel).
  4. Find vertical asymptotes (remaining zeros of denominator).
  5. Find horizontal or slant asymptotes.
  6. Find x-intercepts (zeros of numerator that don't cancel).
  7. Find the y-intercept: f(0).
  8. Test points in each interval to determine sign.
  9. Sketch the graph.
- Worked example: f(x) = (2x² - 2)/(x² - 4) = 2(x - 1)(x + 1)/((x - 2)(x + 2)).
  1. No common factors → no holes.
  2. Vertical asymptotes: x = 2 and x = -2.
  3. Horizontal asymptote: y = 2/1 = 2 (degrees equal, ratio of leading coefficients).
  4. x-intercepts: x = 1 and x = -1.
  5. y-intercept: f(0) = -2/-4 = 1/2.
  6. Test points and sketch.
- Desmos verification: Graph the function and overlay all asymptotes and intercepts.
- RStudio: Graph a rational function with its asymptotes.

```r
x <- seq(-6, 6, by = 0.01)
x <- x[abs(x - 2) > 0.05 & abs(x + 2) > 0.05]  # avoid asymptotes
f <- (2*x^2 - 2) / (x^2 - 4)

plot(x, f, type = "l", col = "blue", ylim = c(-10, 10),
     main = "f(x) = (2x² - 2)/(x² - 4)", xlab = "x", ylab = "f(x)")
abline(v = 2, lty = 2, col = "red")
abline(v = -2, lty = 2, col = "red")
abline(h = 2, lty = 2, col = "green4")
points(c(-1, 1), c(0, 0), pch = 19, col = "orange")
points(0, 0.5, pch = 19, col = "purple")
legend("topright", legend = c("f(x)", "Vertical asymptotes", "Horizontal asymptote"),
       col = c("blue", "red", "green4"), lty = c(1, 2, 2), cex = 0.8)
```

- Practice: 6 complete graphing problems (students graph by hand, then verify with Desmos).

**TEKS:** §111.40(c)(6)

#### Lesson 2.11 — Polynomial Regression and Real-World Modeling (2 hrs)
**Algebra II Focus:** Fitting polynomial models to data using technology
**Activity:**
- Context: Real-world data often follows polynomial trends. RStudio can fit polynomial regression models to data.
- Dataset: U.S. national debt (in trillions) for selected years, or population data for a city, or temperature data over a 24-hour period.
- Example with synthetic data (average daily temperature by month):
  - Months 1-12, temperatures rise then fall — a quadratic or cubic might fit.

```r
# Monthly average temperatures (°F) for a hypothetical Texas city
month <- 1:12
temp <- c(48, 52, 60, 69, 77, 84, 88, 87, 81, 71, 59, 50)

# Fit polynomial models of degree 2 and 3
model2 <- lm(temp ~ poly(month, 2, raw = TRUE))
model3 <- lm(temp ~ poly(month, 3, raw = TRUE))

# Plot data and fits
plot(month, temp, pch = 19, col = "black",
     main = "Monthly Temperature with Polynomial Fits",
     xlab = "Month", ylab = "Temperature (°F)")
lines(month, predict(model2), col = "blue", lwd = 2)
lines(month, predict(model3), col = "red", lwd = 2)
legend("topright", legend = c("Quadratic fit", "Cubic fit"),
       col = c("blue", "red"), lwd = 2)

# Examine coefficients
summary(model2)
```

- Discussion: Which model fits better? Is a higher-degree polynomial always better? (Overfitting risk!)
- Extrapolation danger: Use the model to predict month 13, 14, 15. Do the predictions make sense? Polynomial models often fail badly outside the data range.
- Connection to M300 theme: Models are tools, not truth. Every model has limits. Understanding those limits is the difference between useful analysis and dangerous prediction.
- Practice: Students fit polynomial models to a small dataset and analyze the results.

**TEKS:** §111.40(c)(6)

#### Lesson 2.12 — Polynomial Modeling Report Workshop (2 hrs)
**Activity:**
- Students create a **Polynomial Modeling Report**:
  1. **Dataset Selection:** Choose a real-world dataset with at least 10 data points that might follow a polynomial trend. Options provided: U.S. GDP over decades, monthly electricity usage, stock index values over a year, population growth of a Texas city, or students may find their own.
  2. **Scatter Plot:** Plot the raw data in RStudio with labeled axes and title.
  3. **Model Fitting:** Fit polynomial models of degree 2, 3, and 4 to the data.
  4. **Model Comparison:** Report R² for each model. Explain which model fits best and why you chose it.
  5. **Analysis of Behavior:**
     - Identify the zeros (real and complex) of your chosen polynomial model. What do the real zeros mean in context?
     - Describe the end behavior. Does it make sense for the real-world scenario?
     - Identify any turning points. What do they represent?
  6. **Prediction and Limitation:** Use the model to predict 3 values outside the data range. Are the predictions reasonable? Where does the model break down?
  7. **Reflection (1 paragraph):** Why are polynomial models useful for interpolation but dangerous for extrapolation?
- Workshop time: data selection, RStudio analysis, writing.

#### Lesson 2.13 — Presentations & Unit 2 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5-6 students present their polynomial modeling reports (4 minutes each), showing their data, model, and the moment the model breaks down.
- Unit checkpoint quiz: Polynomial end behavior, finding zeros and factoring, synthetic division, complex number arithmetic, rational function asymptotes, graphing (25 minutes).
- Class discussion: What did we learn about trusting models? How does this connect to the M300 theme of growth, debt, and risk?

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Polynomials & Rational Functions | Individual | 25 |
| Polynomial End Behavior & Graphing Practice | Practice | 20 |
| Long Division & Synthetic Division Practice | Practice | 20 |
| Remainder & Factor Theorem Practice | Practice | 15 |
| Complex Numbers Practice | Practice | 20 |
| Rational Function Graphing Lab (Desmos) | Lab | 25 |
| Polynomial Modeling Report | Project | 55 |
| Warm-ups & Daily Work | Participation | 20 |
| **Total** | | **200** |

## Key Vocabulary

polynomial, degree, leading coefficient, constant term, standard form, end behavior, zero, root, x-intercept, multiplicity, turning point, polynomial long division, synthetic division, dividend, divisor, quotient, remainder, Division Algorithm, Remainder Theorem, Factor Theorem, Rational Root Theorem, complex number, imaginary unit, real part, imaginary part, conjugate, Fundamental Theorem of Algebra, rational function, vertical asymptote, horizontal asymptote, slant asymptote, hole, removable discontinuity, domain restriction, regression, polynomial fit, overfitting, extrapolation, interpolation
