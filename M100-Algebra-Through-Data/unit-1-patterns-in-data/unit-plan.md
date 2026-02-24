# Unit 1 — Patterns in Data: From Tables to Expressions

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Patterns in Data: From Tables to Expressions |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What hidden patterns live inside a table of numbers — and how do you write them down?* |
| Algebra I TEKS | §111.39(c)(10), (11), (12) |
| Tools | RStudio, Desmos, graphing calculators |
| Key Deliverable | Pattern Portfolio — a collection of 5 real-world data patterns expressed algebraically with R/Desmos visualizations |

## Unit Narrative

This unit is the bridge from S400 into M100. Students already know how to load data, make charts, and write linear equations from their economics work. Now they learn to see structure in numbers more broadly. Given a table of values, what kind of expression describes it — linear, quadratic, exponential, or something else? The unit reviews and extends the algebraic language students need for the rest of the course: variables, terms, coefficients, degree, and the distinction between expressions, equations, and functions. Exponent notation is formalized, and students encounter polynomial expressions for the first time as descriptions of real patterns — area that changes with a variable dimension, populations that grow in steps, distances that follow power rules. Every lesson starts with data; the algebra follows from the need to describe what the data does.

## Math Concepts

- Variables, constants, coefficients, terms, and degree
- Expressions vs. equations vs. functions (review and clarify)
- Evaluating algebraic expressions §111.39(c)(12)
- Exponent notation: `a^n` means multiply a by itself n times §111.39(c)(11)
- Basic exponent rules: product rule (`a^m · a^n = a^(m+n)`), power rule (`(a^m)^n = a^(mn)`) §111.39(c)(11)
- Classifying expressions by degree: linear (degree 1), quadratic (degree 2), cubic (degree 3)
- Identifying polynomial expressions: monomial, binomial, trinomial §111.39(c)(10)
- Writing expressions from tables and verbal descriptions §111.39(c)(12)

---

## Lesson Sequence

### Week 1: Patterns Everywhere (≈8.3 hours)

#### Lesson 1.1 — The Pattern Hunt (2 hrs)
**Math Focus:** Identifying numerical patterns in tables
**Activity:**
- Warm-up: Students receive 5 tables of (x, y) values. For each, they describe the pattern in words: "y goes up by 3 each time," "y doubles," "y increases then decreases."
- Sort the tables: Which are linear? Which are not? How do you know? (Constant first difference = linear.)
- Introduce second differences: If first differences are not constant but second differences are → quadratic.
- R lab: Load a dataset of square dimensions and areas. Create a scatterplot. The curve is quadratic, not linear — `geom_smooth(method = "lm")` fits poorly. Preview: We need a different kind of expression.
- Define: expression, variable, constant, term, coefficient.

**TEKS:** §111.39(c)(12), §111.39(c)(10)

#### Lesson 1.2 — Variables and Expressions Review (1.5 hrs)
**Math Focus:** Writing and evaluating algebraic expressions
**Activity:**
- Review from S400: `Net = Gross × (1 - tax_rate)` is an expression with variables.
- Practice: Translate 10 verbal descriptions into algebraic expressions:
  - "A square with side length s has area ___" → `s^2`
  - "A rectangle is 3 cm longer than it is wide; if width = w, area = ___" → `w(w + 3)`
  - "You start with 100 bacteria and the population doubles every hour for t hours" → `100 · 2^t`
- Evaluate each expression for given values.
- Desmos activity: Enter each expression and use a slider to change the variable. Watch the output change.
- Key vocabulary: evaluate, substitute, simplify.

**TEKS:** §111.39(c)(12)

#### Lesson 1.3 — Exponents: What Repeated Multiplication Means (2 hrs)
**Math Focus:** Exponent notation, evaluating powers, product and power rules
**Activity:**
- Direct instruction: `a^n` means a multiplied by itself n times. `2^3 = 2 · 2 · 2 = 8`. `x^4 = x · x · x · x`.
- Explore with a table: Powers of 2 from `2^0` to `2^10`. Students notice the doubling pattern. Connection to S400: compound interest and exponential growth used this notation informally.
- Derive the product rule: `2^3 · 2^4 = (2·2·2)(2·2·2·2) = 2^7`. Generalize: `a^m · a^n = a^(m+n)`.
- Derive the power rule: `(2^3)^2 = 2^3 · 2^3 = 2^6`. Generalize: `(a^m)^n = a^(mn)`.
- R verification: Students check rules computationally:
```r
# Product rule
2^3 * 2^4 == 2^7  # TRUE

# Power rule
(2^3)^2 == 2^6    # TRUE
```
- Practice: 15 problems applying product and power rules with numerical and variable bases.

**TEKS:** §111.39(c)(11)

#### Lesson 1.4 — More Exponent Rules: Quotient, Zero, and Negative Exponents (2.8 hrs)
**Math Focus:** Quotient rule, zero exponent, negative exponent
**Activity:**
- Quotient rule: `a^m / a^n = a^(m-n)`. Derive from canceling: `2^5 / 2^3 = (2·2·2·2·2)/(2·2·2) = 2^2`.
- What happens when `m = n`? `a^n / a^n = a^0 = 1` (anything divided by itself is 1). So `a^0 = 1` for any `a ≠ 0`.
- What happens when `m < n`? `2^2 / 2^5 = 2^(-3) = 1/2^3 = 1/8`. So `a^(-n) = 1/a^n`.
- Students build a complete table of powers of 2 from `2^(-4)` to `2^4`. Notice the symmetry around `2^0 = 1`.
- Desmos exploration: Graph `y = 2^x` and trace through negative, zero, and positive x values.
- Practice: 20 problems mixing all exponent rules. Include expressions with variables: simplify `(x^3 · x^5) / x^2`.
- R verification: Students check 5 problems computationally.

**TEKS:** §111.39(c)(11)

---

### Week 2: Naming and Classifying Expressions (≈8.3 hours)

#### Lesson 1.5 — Polynomial Vocabulary: Monomials, Binomials, Trinomials (2 hrs)
**Math Focus:** Classifying polynomial expressions by number of terms and degree
**Activity:**
- Define polynomial: an expression with variables raised to whole-number exponents, combined by addition and subtraction.
- Classify by number of terms:
  - Monomial: `3x^2` (1 term)
  - Binomial: `x^2 + 5x` (2 terms)
  - Trinomial: `x^2 + 5x + 6` (3 terms)
- Classify by degree: the highest exponent on any variable.
  - Degree 1 (linear): `3x + 7`
  - Degree 2 (quadratic): `x^2 - 4x + 1`
  - Degree 3 (cubic): `2x^3 + x`
- Standard form: Write terms in descending order of degree. Identify leading coefficient.
- Sorting activity: 20 expression cards. Students sort into: monomial/binomial/trinomial and linear/quadratic/cubic/other.
- Connection to S400: "In economics, `R(x) = -5x^2 + 100x` was a quadratic trinomial in standard form. The leading coefficient was -5, telling us the parabola opens downward."

**TEKS:** §111.39(c)(10)

#### Lesson 1.6 — Evaluating Polynomials with Technology (2 hrs)
**Math Focus:** Evaluating polynomial expressions, connecting algebra to graphs
**Activity:**
- Given `f(x) = x^2 - 3x + 2`, evaluate at x = 0, 1, 2, 3, -1, -2. Build a table.
- Plot the table in Desmos. Connect with a curve. Identify: x-intercepts, vertex, axis of symmetry (preview — formal treatment in Unit 4).
- R lab: Define and evaluate polynomial functions:
```r
f <- function(x) x^2 - 3*x + 2
x_vals <- seq(-2, 5, by = 0.5)
results <- tibble(x = x_vals, y = f(x_vals))

ggplot(results, aes(x, y)) +
  geom_line(color = "blue") +
  geom_point() +
  geom_hline(yintercept = 0, linetype = "dashed") +
  labs(title = "f(x) = x^2 - 3x + 2", y = "f(x)")
```
- Students evaluate 3 more polynomials (including a cubic) and graph each.
- Discussion: How does the degree affect the shape? Linear = line, quadratic = parabola, cubic = S-curve.

**TEKS:** §111.39(c)(10), §111.39(c)(12)

#### Lesson 1.7 — Data Patterns: Linear vs. Quadratic vs. Exponential (2.5 hrs)
**Math Focus:** Distinguishing function types from tables and graphs
**Activity:**
- Three datasets (teacher-provided):
  1. Distance fallen by a dropped object over time (quadratic: `d = 4.9t^2`)
  2. Population of bacteria doubling every hour (exponential: `P = P_0 · 2^t`)
  3. Cost of renting a car at $50/day (linear: `C = 50d`)
- For each dataset:
  - Calculate first differences. Constant? → linear.
  - Calculate second differences. Constant? → quadratic.
  - Calculate ratios of consecutive terms. Constant? → exponential.
- R lab: Plot all three datasets. Try fitting `geom_smooth(method = "lm")` to each. Which fits well? Which doesn't? Why?
- Desmos: Use regression to find the best-fit expression for each dataset (linear, quadratic, exponential regression).
- Summary chart: Students create a reference card for identifying function types from data.

**TEKS:** §111.39(c)(10), §111.39(c)(11), §111.39(c)(12)

#### Lesson 1.8 — Writing Expressions from Contexts (1.8 hrs)
**Math Focus:** Translating real-world situations into polynomial expressions
**Activity:**
- 10 context-to-expression problems:
  1. A garden is x meters wide and (x + 4) meters long. Write an expression for the area. → `x(x + 4) = x^2 + 4x`
  2. A picture frame is 2 inches wide around a photo that is x by (x + 3). Write an expression for the total area of the frame and photo. → `(x + 4)(x + 7)`
  3. A ball is thrown upward from 5 feet with initial velocity 40 ft/s. Height after t seconds: `h = -16t^2 + 40t + 5`.
  4. A company's profit (in thousands) after x years: `P = -2x^2 + 20x - 18`.
- Students write the expression, identify it as polynomial (type and degree), and evaluate for 2–3 given values.
- GeoGebra exploration: Build a dynamic rectangle with variable dimensions. Watch the area expression change as you drag.

**TEKS:** §111.39(c)(10), §111.39(c)(12)

---

### Week 3: Putting It All Together (≈8.3 hours)

#### Lesson 1.9 — Sequences: Arithmetic and Geometric (2.5 hrs)
**Math Focus:** Arithmetic and geometric sequences, explicit formulas
**Activity:**
- Define sequence: an ordered list of numbers following a pattern.
- Arithmetic sequence: constant difference between terms. Formula: `a_n = a_1 + (n-1)d`.
  - Example: 3, 7, 11, 15, ... → `a_1 = 3`, `d = 4`, `a_n = 3 + 4(n-1) = 4n - 1`.
- Geometric sequence: constant ratio between terms. Formula: `a_n = a_1 · r^(n-1)`.
  - Example: 2, 6, 18, 54, ... → `a_1 = 2`, `r = 3`, `a_n = 2 · 3^(n-1)`.
- Connection to S400: Compound interest (`A = P(1+r)^t`) is a geometric sequence. Monthly savings deposits form an arithmetic sequence.
- R lab: Generate and plot both sequence types:
```r
n <- 1:15
arith <- 3 + 4 * (n - 1)
geom <- 2 * 3^(n - 1)

sequences <- tibble(
  n = rep(n, 2),
  value = c(arith, geom),
  type = rep(c("Arithmetic", "Geometric"), each = 15)
)

ggplot(sequences, aes(x = n, y = value, color = type)) +
  geom_point() + geom_line() +
  facet_wrap(~type, scales = "free_y") +
  labs(title = "Arithmetic vs. Geometric Sequences")
```
- Practice: Identify 8 sequences as arithmetic or geometric, find the explicit formula, and predict the 20th term.

**TEKS:** §111.39(c)(11), §111.39(c)(12)

#### Lesson 1.10 — Sequences in the Real World (2 hrs)
**Math Focus:** Applying sequence formulas to data
**Activity:**
- Dataset 1: Annual salary with a $2,000 raise each year (arithmetic). Write the formula. Calculate salary in year 10.
- Dataset 2: A viral post gets 3x the shares each day (geometric). Write the formula. How many shares on day 8?
- Dataset 3: Stacking rows of cans in a pyramid — each row has 2 fewer cans than the row below (arithmetic, decreasing).
- R lab: Students model each situation, generate terms, and plot. For the geometric sequence, add a log-scale version to show linearity on the log axis (connecting to S400 Unit 4 log-scale GDP).
- Critical thinking: Not everything is a sequence. Give students 3 datasets that are NOT well-modeled by arithmetic or geometric sequences. How do you know?

**TEKS:** §111.39(c)(11), §111.39(c)(12)

#### Lesson 1.11 — Unit 1 Project Workshop (2 hrs)
**Activity:**
- Students build their **Pattern Portfolio**: a collection of 5 real-world data patterns expressed algebraically.
- Requirements:
  1. At least one linear pattern (review from S400).
  2. At least one quadratic pattern.
  3. At least one exponential or geometric pattern.
  4. At least one sequence (arithmetic or geometric).
  5. One pattern of the student's choice (could be cubic, radical, or other).
- For each pattern:
  - Source of the data (or context description).
  - Table of at least 6 data points.
  - Algebraic expression that models the pattern.
  - Desmos or R visualization showing the data and the model.
  - 2-sentence interpretation: What does the expression tell you about the real situation?
- Workshop time: data selection, expression writing, visualization.

#### Lesson 1.12 — Pattern Portfolio Presentations & Assessment (2.8 hrs)
**Activity:**
- Gallery walk: Portfolios displayed (printed or projected). Students circulate and identify which function type each pattern represents.
- 5 selected presentations (3 minutes each).
- Unit checkpoint quiz: Exponent rules, polynomial classification, sequence formulas, expression evaluation (25 minutes).

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Exponents, Polynomials, Sequences | Individual | 25 |
| Exponent Rules Practice Set | Practice | 20 |
| R Lab: Polynomial Evaluation & Graphing | Lab | 25 |
| Sequence Identification & Formulas | Practice | 20 |
| Data Pattern Classification Lab | Lab | 25 |
| Pattern Portfolio Project | Project | 50 |
| Gallery Walk Participation | Participation | 10 |
| Warm-ups & Daily Work | Participation | 25 |
| **Total** | | **200** |

## Key Vocabulary

variable, constant, coefficient, term, degree, expression, equation, function, evaluate, substitute, simplify, exponent, base, power, product rule, quotient rule, power rule, zero exponent, negative exponent, polynomial, monomial, binomial, trinomial, standard form, leading coefficient, linear, quadratic, cubic, first differences, second differences, sequence, arithmetic sequence, geometric sequence, common difference, common ratio, explicit formula, nth term
