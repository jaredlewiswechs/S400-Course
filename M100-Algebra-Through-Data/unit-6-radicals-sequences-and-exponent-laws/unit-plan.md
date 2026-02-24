# Unit 6 — Radical Expressions, Sequences & Exponent Laws

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Radical Expressions, Sequences & Exponent Laws |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do roots, powers, and patterns connect — and what can they model in the real world?* |
| Algebra I TEKS | §111.39(c)(11), (12), (6) |
| Tools | RStudio, Desmos, GeoGebra, graphing calculators |
| Key Deliverable | Capstone Algebra Portfolio — a cumulative project demonstrating mastery of all Algebra I TEKS covered in M100, applied to a data context of the student's choice |

## Unit Narrative

This final unit ties together three strands that complete the Algebra I framework: radical expressions, sequences, and exponent laws. Radical expressions — square roots, cube roots, and their algebraic manipulation — appear in distance formulas, Pythagorean theorem applications, and scientific measurement. Sequences formalize the patterns introduced in Unit 1: arithmetic sequences connect to linear functions, and geometric sequences connect to exponential functions, completing the bridge between the discrete (sequences) and the continuous (functions). Exponent laws, introduced informally in Unit 1 and applied in Unit 2, are now treated in full generality — including rational exponents, which reveal that radicals and exponents are two views of the same operation. The unit culminates in a capstone project where students demonstrate mastery of the Algebra I content covered across M100, applied to real data.

## Math Concepts

- Simplifying radical expressions §111.39(c)(11)
- Operations with radicals: adding, subtracting, multiplying §111.39(c)(11)
- Rationalizing the denominator §111.39(c)(11)
- Rational exponents: `a^(1/n) = nth root of a`, `a^(m/n) = (nth root of a)^m` §111.39(c)(11)
- Complete exponent law summary (product, quotient, power, zero, negative, rational) §111.39(c)(11)
- Arithmetic sequences and series (introduction) §111.39(c)(11), (12)
- Geometric sequences and series (introduction) §111.39(c)(11), (12)
- Sequences as functions: `f(n) = a_1 + (n-1)d` and `f(n) = a_1 · r^(n-1)` §111.39(c)(12)
- Connecting sequences to linear and exponential functions §111.39(c)(11), (6)

---

## Lesson Sequence

### Week 1: Radical Expressions (≈8.3 hours)

#### Lesson 6.1 — Review and Extension of Square Roots (2 hrs)
**Math Focus:** Simplifying square roots (review from Unit 5, now deeper)
**Activity:**
- Review: `√(ab) = √a · √b`. Factor out perfect squares.
  - `√48 = √(16·3) = 4√3`
  - `√200 = √(100·2) = 10√2`
  - `√(x^2 · y) = x√y` (assuming x ≥ 0)
- Variables under radicals:
  - `√(x^4) = x^2`
  - `√(18x^3) = √(9·2·x^2·x) = 3x√(2x)`
- Practice: 15 radical simplification problems with numbers and variables.
- Desmos: Graph `y = √x`. Domain: x ≥ 0. Range: y ≥ 0. The function increases but at a decreasing rate — the opposite of exponential growth.
- Connection: In S400, students saw that GDP growth is exponential. The square root function is its inverse behavior — rapid growth early, then leveling off (like diminishing returns).

**TEKS:** §111.39(c)(11)

#### Lesson 6.2 — Adding and Subtracting Radicals (1.5 hrs)
**Math Focus:** Combining like radicals
**Activity:**
- Like radicals have the same radicand (number/expression under the radical sign).
  - `3√5 + 7√5 = 10√5` (same as combining like terms: `3x + 7x = 10x`).
  - `√12 + √27 = 2√3 + 3√3 = 5√3` (simplify first, then combine).
  - `√8 - √2 = 2√2 - √2 = √2`.
- Cannot combine: `√3 + √5` stays as is (they are not like radicals).
- Practice: 12 addition/subtraction problems. Students must simplify before combining.
- R verification:
```r
# Verify: sqrt(12) + sqrt(27) = 5*sqrt(3)
all.equal(sqrt(12) + sqrt(27), 5 * sqrt(3))  # TRUE
```

**TEKS:** §111.39(c)(11)

#### Lesson 6.3 — Multiplying Radicals (1.5 hrs)
**Math Focus:** Multiplying radical expressions
**Activity:**
- Product rule: `√a · √b = √(ab)`.
  - `√3 · √12 = √36 = 6`.
  - `2√5 · 3√10 = 6√50 = 6 · 5√2 = 30√2`.
- Distributive property with radicals:
  - `√3(√6 + √15) = √18 + √45 = 3√2 + 3√5`.
- Multiplying binomials with radicals:
  - `(√3 + 2)(√3 - 5) = 3 - 5√3 + 2√3 - 10 = -7 - 3√3`.
  - `(√5 + √2)(√5 - √2) = 5 - 2 = 3` (difference of squares with radicals!).
- Practice: 12 multiplication problems.
- Connection to Unit 2: Multiplying radical binomials uses the same FOIL/area model structure.

**TEKS:** §111.39(c)(11)

#### Lesson 6.4 — Rationalizing the Denominator (1.5 hrs)
**Math Focus:** Eliminating radicals from denominators
**Activity:**
- Convention: Final answers should not have radicals in the denominator.
- Single-term denominator: Multiply numerator and denominator by the radical.
  - `5/√3 = 5/√3 · √3/√3 = 5√3/3`.
  - `8/√2 = 8√2/2 = 4√2`.
- Binomial denominator (conjugate): Multiply by the conjugate.
  - `3/(√5 + 2) = 3(√5 - 2)/((√5 + 2)(√5 - 2)) = 3(√5 - 2)/(5 - 4) = 3√5 - 6`.
- Why rationalize? Convention, and it often simplifies comparison and computation.
- Practice: 10 rationalization problems (single-term and binomial denominators).
- Desmos check: Verify that `5/√3` and `5√3/3` produce the same decimal value.

**TEKS:** §111.39(c)(11)

#### Lesson 6.5 — Radicals in Context: Distance and Measurement (1.8 hrs)
**Math Focus:** Applications of radical expressions
**Activity:**
- Distance formula: `d = √((x_2 - x_1)^2 + (y_2 - y_1)^2)`. Students compute distances between points and simplify the radicals.
  - Distance from (1, 2) to (4, 6): `√(9 + 16) = √25 = 5`.
  - Distance from (0, 0) to (3, 5): `√(9 + 25) = √34` (irrational — leave as `√34 ≈ 5.83`).
- Pythagorean theorem applications:
  - A 10-foot ladder leans against a wall. The base is 6 feet from the wall. How high does it reach? `h = √(100 - 36) = √64 = 8` feet.
  - A television is 42 inches diagonally. If the width is 36 inches, what is the height? `h = √(1764 - 1296) = √468 = 6√13 ≈ 21.6` inches.
- R lab: Compute distances between pairs of Houston landmarks given coordinates. Which two are farthest apart?
```r
distance <- function(x1, y1, x2, y2) {
  sqrt((x2 - x1)^2 + (y2 - y1)^2)
}

distance(0, 0, 3, 5)  # sqrt(34) ≈ 5.831
```
- Practice: 8 distance and Pythagorean problems, simplifying all radical answers.

**TEKS:** §111.39(c)(11), §111.39(c)(12)

---

### Week 2: Exponent Laws and Rational Exponents (≈8.3 hours)

#### Lesson 6.6 — Complete Exponent Law Review (2 hrs)
**Math Focus:** All exponent rules in one place
**Activity:**
- Comprehensive exponent law summary:
  1. Product rule: `a^m · a^n = a^(m+n)`
  2. Quotient rule: `a^m / a^n = a^(m-n)`
  3. Power rule: `(a^m)^n = a^(mn)`
  4. Power of a product: `(ab)^n = a^n · b^n`
  5. Power of a quotient: `(a/b)^n = a^n / b^n`
  6. Zero exponent: `a^0 = 1` (a ≠ 0)
  7. Negative exponent: `a^(-n) = 1/a^n`
- Students create a one-page "Exponent Laws Cheat Sheet" with the rule, an example, and a visual/verbal explanation for each.
- Practice: 25 mixed exponent problems requiring multiple rules in combination.
  - `(2x^3)^4 · x^(-2) = 16x^{12} · x^{-2} = 16x^{10}`
  - `(3a^2b^{-1})^3 / (9a^{-1}b^2) = 27a^6b^{-3} / (9a^{-1}b^2) = 3a^7b^{-5} = 3a^7/b^5`
- R verification: Students check 5 complex expressions computationally.

**TEKS:** §111.39(c)(11)

#### Lesson 6.7 — Rational Exponents: Radicals Meet Exponents (2.5 hrs)
**Math Focus:** `a^(1/n) = nth root of a`, `a^(m/n) = (nth root of a)^m`
**Activity:**
- Big idea: Radicals and exponents are two notations for the same operation.
  - `a^(1/2) = √a` (square root).
  - `a^(1/3) = ∛a` (cube root).
  - `a^(2/3) = (∛a)^2 = ∛(a^2)`.
- Why this works: If `(a^(1/2))^2 = a^1 = a`, then `a^(1/2)` must be `√a`.
- Converting between forms:
  - `√(x^3) = x^(3/2)`.
  - `8^(2/3) = (∛8)^2 = 2^2 = 4`.
  - `27^(-1/3) = 1/(∛27) = 1/3`.
- Practice: 15 conversion problems (radical to rational exponent and vice versa) + 10 simplification problems using rational exponents.
- Desmos: Graph `y = x^(1/2)` and `y = √x` on the same axes. They are the same function.
- R verification:
```r
8^(2/3)       # 4
27^(-1/3)     # 0.3333...
all.equal(8^(2/3), (8^(1/3))^2)  # TRUE
```

**TEKS:** §111.39(c)(11)

#### Lesson 6.8 — Exponents in Scientific Contexts (1.5 hrs)
**Math Focus:** Scientific notation and exponent manipulation in measurement
**Activity:**
- Scientific notation review: `3.2 × 10^5 = 320,000`. `7.1 × 10^{-3} = 0.0071`.
- Operations with scientific notation:
  - `(3 × 10^4)(2 × 10^5) = 6 × 10^9`.
  - `(8 × 10^6) / (4 × 10^2) = 2 × 10^4`.
- Real-world data: Distances in astronomy (light-years), sizes in biology (cells, viruses), economic quantities (national debt in trillions).
- R lab: Work with large and small numbers. R uses scientific notation by default for extreme values.
```r
# National debt
debt <- 3.4e13  # $34 trillion
gdp <- 2.8e13   # $28 trillion
debt / gdp       # Debt-to-GDP ratio ≈ 1.21

# Speed of light in different units
c_mps <- 3e8     # meters per second
c_mph <- c_mps * 2.237  # convert to mph
format(c_mph, scientific = FALSE)  # 671,080,888
```
- Practice: 12 scientific notation problems mixing multiplication, division, and exponent rules.

**TEKS:** §111.39(c)(11), §111.39(c)(12)

#### Lesson 6.9 — Exponent Laws Challenge Lab (2.3 hrs)
**Math Focus:** Complex exponent simplification combining all rules
**Activity:**
- Challenge problem set: 15 multi-step simplification problems requiring 3+ exponent rules per problem.
- Group competition: Teams of 3 solve problems on whiteboards. First team with a correct, fully simplified answer earns a point.
- Error hunt: 8 "worked solutions" with deliberate errors. Students find and correct each mistake.
- Connection to polynomial operations: Simplify expressions like `(2x^3y^{-2})^2 · (3x^{-1}y^4)`. This combines Unit 2 (polynomial operations) with exponent laws.
- Self-assessment: Students rate their exponent law mastery and identify rules they still find tricky.

**TEKS:** §111.39(c)(11)

---

### Week 3: Sequences Formalized and Capstone Portfolio (≈8.3 hours)

#### Lesson 6.10 — Arithmetic Sequences as Linear Functions (2 hrs)
**Math Focus:** Connecting arithmetic sequences to linear functions
**Activity:**
- Review from Unit 1: Arithmetic sequence has constant difference d. Formula: `a_n = a_1 + (n-1)d`.
- Rewrite: `a_n = dn + (a_1 - d)`. This is `y = mx + b` with slope = d and y-intercept = `a_1 - d`.
- An arithmetic sequence IS a linear function sampled at integer inputs.
- R lab: Generate an arithmetic sequence, plot it, and overlay the corresponding linear function:
```r
n <- 1:20
a_n <- 5 + 3 * (n - 1)  # a_1 = 5, d = 3

seq_data <- tibble(n = n, value = a_n)

ggplot(seq_data, aes(n, value)) +
  geom_point(color = "blue", size = 2) +
  geom_abline(slope = 3, intercept = 2, color = "red", linetype = "dashed") +
  labs(title = "Arithmetic Sequence as a Linear Function",
       subtitle = "Points = sequence, Line = f(n) = 3n + 2")
```
- Applications:
  - Monthly rent that increases by $50/month: `R_n = 1200 + 50(n-1)`.
  - Stacking blocks: each row has 2 more blocks than the one above.
- Practice: 8 problems — write the explicit formula, connect to linear function, find specific terms.
- Partial sums (brief introduction): Sum of first n terms of an arithmetic sequence: `S_n = n/2 · (a_1 + a_n)`. Apply to: total rent paid over 12 months, total blocks in a stack.

**TEKS:** §111.39(c)(11), §111.39(c)(12)

#### Lesson 6.11 — Geometric Sequences as Exponential Functions (2 hrs)
**Math Focus:** Connecting geometric sequences to exponential functions
**Activity:**
- Review from Unit 1: Geometric sequence has constant ratio r. Formula: `a_n = a_1 · r^(n-1)`.
- Rewrite: `a_n = (a_1/r) · r^n`. This is `y = ab^x` with `a = a_1/r` and `b = r`.
- A geometric sequence IS an exponential function sampled at integer inputs.
- R lab: Generate a geometric sequence, plot it, and overlay the corresponding exponential function:
```r
n <- 1:12
a_n <- 100 * 1.1^(n - 1)  # a_1 = 100, r = 1.1 (10% growth)

seq_data <- tibble(n = n, value = a_n)

# Continuous exponential function
x_cont <- seq(1, 12, by = 0.1)
y_cont <- 100 * 1.1^(x_cont - 1)

ggplot() +
  geom_point(data = seq_data, aes(n, value), color = "blue", size = 2) +
  geom_line(data = tibble(x = x_cont, y = y_cont), aes(x, y),
            color = "red", linetype = "dashed") +
  labs(title = "Geometric Sequence as an Exponential Function",
       subtitle = "Points = sequence, Curve = f(n) = 100(1.1)^(n-1)")
```
- Connection to S400: Compound interest `A = P(1 + r)^t` is a geometric sequence with `a_1 = P(1+r)` and ratio `r = 1 + interest_rate`.
- Applications:
  - Bacteria doubling every hour: `P_n = P_0 · 2^n`.
  - Depreciation: A car loses 15% of its value each year: `V_n = 25000 · 0.85^n`.
- Practice: 8 problems — write the formula, connect to exponential function, find specific terms.

**TEKS:** §111.39(c)(11), §111.39(c)(12)

#### Lesson 6.12 — Capstone Portfolio Workshop (2.5 hrs)
**Activity:**
- Students create a **Capstone Algebra Portfolio** demonstrating mastery of all M100 content applied to a real-world context of their choice.
- Requirements:
  1. **Context selection:** Choose a real-world domain (sports, music, architecture, biology, business, physics, etc.).
  2. **Polynomial operations** (Unit 2): Write and expand a polynomial expression relevant to the context (e.g., area of a variable-dimension room).
  3. **Factoring** (Unit 3): Factor a relevant quadratic and interpret the factors.
  4. **Quadratic graphing** (Unit 4): Graph a quadratic function, identify vertex, zeros, and axis of symmetry, and interpret in context.
  5. **Solving a quadratic** (Unit 5): Pose and solve a question that requires solving a quadratic equation. Use two different methods and verify.
  6. **Radicals** (Unit 6): Include at least one calculation involving radical expressions (e.g., distance, Pythagorean theorem, simplified radical answer).
  7. **Sequences** (Units 1, 6): Model a pattern in the context as an arithmetic or geometric sequence. Write the explicit formula and connect to the corresponding function type.
  8. **Exponent laws** (Units 1, 6): Include at least one calculation requiring exponent manipulation.
  9. **Visualizations:** At least 3 R or Desmos visualizations supporting the analysis.
  10. **Reflection** (1 paragraph): How does the algebra you learned in M100 connect to and extend the data skills from S400?
- Workshop time: topic selection, computation, visualization, writing.

#### Lesson 6.13 — Capstone Presentations (2 hrs)
**Activity:**
- Each student presents their Capstone Algebra Portfolio (5 minutes + 2 minutes Q&A).
- Scoring:
  - Mathematical accuracy and completeness (40%)
  - Visualizations — clear, labeled, relevant (20%)
  - Real-world connection — meaningful, not forced (20%)
  - Presentation clarity (10%)
  - Reflection quality (10%)
- Peer evaluation forms for each presentation.

#### Lesson 6.14 — Unit 6 Assessment & Course Wrap-Up (1.8 hrs)
**Activity:**
- Unit checkpoint quiz: Radical simplification, exponent laws (including rational exponents), sequence formulas, radical operations (25 minutes).
- Course reflection: "What concept from M100 was hardest for you? What concept connects most to your S400 learning? How has your understanding of algebra changed?"
- Portfolio assembly: Students compile their best work from each M100 unit into a course portfolio (physical or digital folder).
- Celebration of completion: Students have now completed 100% of Algebra I §111.39.

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Radicals, Exponents, Sequences | Individual | 25 |
| Radical Operations Practice | Practice | 20 |
| Rationalizing & Radical Applications | Practice | 15 |
| Exponent Laws Comprehensive Set | Practice | 25 |
| Rational Exponents Lab | Lab | 20 |
| Arithmetic & Geometric Sequences Lab | Lab | 20 |
| Capstone Algebra Portfolio | Project | 65 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

radical, radicand, square root, cube root, simplify, like radicals, rationalize the denominator, conjugate, rational exponent, nth root, product rule (radicals), quotient rule (radicals), scientific notation, arithmetic sequence, geometric sequence, common difference, common ratio, explicit formula, nth term, partial sum, linear function, exponential function, discrete, continuous, Pythagorean theorem, distance formula, portfolio, capstone
