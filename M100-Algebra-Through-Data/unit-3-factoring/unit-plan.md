# Unit 3 — Factoring Trinomials

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | Factoring Trinomials |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you reverse-engineer a polynomial — and why does breaking it apart reveal its secrets?* |
| Algebra I TEKS | §111.39(c)(10), (7), (12) |
| Tools | GeoGebra (algebra tiles), Desmos, RStudio |
| Key Deliverable | Factoring Field Guide — a student-authored reference with examples, methods, and data applications for each factoring technique |

## Unit Narrative

Factoring is multiplication in reverse. Unit 2 taught students to expand `(x + 3)(x + 5)` into `x^2 + 8x + 15`. Now they learn to go backward: given `x^2 + 8x + 15`, find the factors `(x + 3)(x + 5)`. This skill is critical because factoring reveals structure — the x-intercepts of a quadratic, the break-even points of a business model, the zeros of a projectile's height function. The unit builds systematically: GCF first, then factoring `x^2 + bx + c` (leading coefficient 1), then `ax^2 + bx + c` (leading coefficient ≠ 1), then special patterns (difference of squares, perfect square trinomials — recognized now in reverse). Algebra tiles make factoring tactile: arrange the tiles into a rectangle, and the dimensions are the factors. Every factored form is verified by multiplying back and checking in Desmos.

## Math Concepts

- Greatest Common Factor (GCF) of polynomial terms §111.39(c)(10)
- Factoring out the GCF §111.39(c)(10)
- Factoring trinomials of the form `x^2 + bx + c` §111.39(c)(10)
- Factoring trinomials of the form `ax^2 + bx + c` (a ≠ 1) §111.39(c)(10)
- Factoring difference of squares: `a^2 - b^2 = (a + b)(a - b)` §111.39(c)(10)
- Factoring perfect square trinomials §111.39(c)(10)
- Choosing a factoring strategy §111.39(c)(10)
- Connecting factors to zeros/x-intercepts (preview of Unit 5) §111.39(c)(7)
- Verifying factors by multiplication §111.39(c)(12)

---

## Lesson Sequence

### Week 1: GCF and Factoring x^2 + bx + c (≈8.3 hours)

#### Lesson 3.1 — The Reverse Question (1.5 hrs)
**Math Focus:** Factoring as the reverse of multiplication
**Activity:**
- Warm-up: Students are given 5 expanded polynomials from Unit 2. Challenge: Can you figure out the two binomials that were multiplied to produce each one?
  - `x^2 + 7x + 12` → what two numbers multiply to 12 and add to 7? (3 and 4) → `(x + 3)(x + 4)`.
- Introduce factoring as reverse-engineering. Multiplication puts things together; factoring takes them apart.
- Analogy: 12 = 4 × 3. We "factored" 12 into 4 and 3. Now we factor polynomials the same way.
- Desmos: Graph `y = x^2 + 7x + 12`. Where does the parabola cross the x-axis? At x = -3 and x = -4. Those are the negatives of the numbers in the factors. Preview: factors reveal x-intercepts.
- Students attempt 5 more trinomials by trial and inspection.

**TEKS:** §111.39(c)(10), §111.39(c)(7)

#### Lesson 3.2 — Greatest Common Factor (GCF) (2 hrs)
**Math Focus:** Finding and factoring out the GCF of polynomial terms
**Activity:**
- Review GCF for numbers: GCF(12, 18) = 6. GCF(8, 20, 36) = 4.
- Extend to monomials: GCF(`6x^3`, `9x^2`) = `3x^2`. GCF(`4x^2y`, `8xy^2`, `12xy`) = `4xy`.
- Factor out the GCF:
  - `6x^3 + 9x^2 = 3x^2(2x + 3)`
  - `4x^2 - 8x + 12 = 4(x^2 - 2x + 3)`
  - `5x^3y - 10x^2y^2 + 15xy = 5xy(x^2 - 2xy + 3)`
- Verification: Distribute back to confirm. Always check by multiplying.
- Context: Factor the expression for combined profit of two product lines: `P = 6x^2 + 18x = 6x(x + 3)`. The GCF tells you 6x is a common scaling factor.
- Practice: 15 GCF factoring problems.

**TEKS:** §111.39(c)(10)

#### Lesson 3.3 — Factoring x^2 + bx + c: The Diamond Method (2.5 hrs)
**Math Focus:** Factoring trinomials with leading coefficient 1
**Activity:**
- The diamond (or X) method: Find two numbers that multiply to c and add to b.
  - `x^2 + 8x + 15`: Two numbers that multiply to 15 and add to 8 → 3 and 5 → `(x + 3)(x + 5)`.
  - `x^2 - 5x + 6`: Multiply to 6 and add to -5 → -2 and -3 → `(x - 2)(x - 3)`.
  - `x^2 + 2x - 8`: Multiply to -8 and add to 2 → 4 and -2 → `(x + 4)(x - 2)`.
- GeoGebra algebra tiles: Arrange `x^2 + 8x + 15` tiles into a rectangle. The dimensions are `(x + 3)` and `(x + 5)`.
- Sign analysis: When c is positive, both factors have the same sign (both + or both -). When c is negative, the factors have different signs.
- Practice: 15 trinomials to factor, including cases with negative b, negative c, or both.
- R verification for each:
```r
# Factor check: does (x+3)(x+5) = x^2 + 8x + 15?
x <- -10:10
all((x + 3) * (x + 5) == x^2 + 8*x + 15)  # TRUE
```

**TEKS:** §111.39(c)(10)

#### Lesson 3.4 — When Factoring Doesn't Work (1 hr)
**Math Focus:** Recognizing prime (unfactorable) trinomials
**Activity:**
- Not every trinomial factors over the integers. Try `x^2 + 3x + 5`: Need two integers that multiply to 5 and add to 3. Options: (1,5) adds to 6, (-1,-5) adds to -6. No integer pair works.
- This trinomial is prime (over the integers). It's the polynomial equivalent of a prime number.
- Students test 10 trinomials: Factor if possible, or identify as prime.
- Desmos check: Graph `y = x^2 + 3x + 5`. It doesn't cross the x-axis — no real x-intercepts, consistent with no integer factors.
- Preview: In Unit 5, students will learn methods (quadratic formula) that handle these cases.

**TEKS:** §111.39(c)(10)

#### Lesson 3.5 — Practice Day: Fluency Building (1.3 hrs)
**Activity:**
- Timed factoring practice: 20 trinomials in 15 minutes (aiming for fluency, not just accuracy).
- Factoring relay race (team activity): Each team member factors one trinomial, passes to the next. First team to correctly factor all 8 wins.
- Error analysis: Students receive 6 incorrectly factored trinomials. Find and fix each error.
- Self-assessment: Students rate their confidence on a 1–5 scale and identify which types (positive c, negative c, both negative) they find hardest.

**TEKS:** §111.39(c)(10)

---

### Week 2: Factoring ax^2 + bx + c and Special Patterns (≈8.3 hours)

#### Lesson 3.6 — Factoring ax^2 + bx + c: The AC Method (2.5 hrs)
**Math Focus:** Factoring trinomials with leading coefficient ≠ 1
**Activity:**
- When a ≠ 1, the diamond method needs modification. Use the AC method:
  1. Multiply a × c.
  2. Find two numbers that multiply to ac and add to b.
  3. Rewrite the middle term using those two numbers.
  4. Factor by grouping.
- Example: `2x^2 + 7x + 3`
  - ac = 2 × 3 = 6. Two numbers: 1 and 6 (multiply to 6, add to 7).
  - Rewrite: `2x^2 + x + 6x + 3`
  - Group: `x(2x + 1) + 3(2x + 1)`
  - Factor: `(2x + 1)(x + 3)`
- Verify: FOIL `(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3`. Correct.
- GeoGebra tiles: Build the rectangle for `2x^2 + 7x + 3`. The dimensions are `(2x + 1)` and `(x + 3)`.
- Practice: 12 trinomials with leading coefficient ≠ 1.
- Desmos: Graph each trinomial and verify x-intercepts match the zeros predicted by factors.

**TEKS:** §111.39(c)(10)

#### Lesson 3.7 — Factoring by Grouping (1.5 hrs)
**Math Focus:** Factoring four-term polynomials by grouping
**Activity:**
- Sometimes polynomials have 4 terms that can be grouped in pairs:
  - `x^3 + 3x^2 + 2x + 6 = x^2(x + 3) + 2(x + 3) = (x^2 + 2)(x + 3)`
- This is the same technique used in the AC method, but applied to naturally four-term expressions.
- Practice: 8 grouping problems, including some that require rearranging terms first.
- Context: Factor `xy + xz + 3y + 3z = x(y + z) + 3(y + z) = (x + 3)(y + z)`. If this represents an area, the dimensions are `(x + 3)` and `(y + z)`.

**TEKS:** §111.39(c)(10)

#### Lesson 3.8 — Factoring Difference of Squares (2 hrs)
**Math Focus:** Recognizing and factoring `a^2 - b^2 = (a + b)(a - b)`
**Activity:**
- Recall from Unit 2: `(a + b)(a - b) = a^2 - b^2`. Now reverse it.
- Pattern recognition: The expression must be a subtraction of two perfect squares.
  - `x^2 - 9 = (x + 3)(x - 3)` ✓
  - `4x^2 - 25 = (2x + 5)(2x - 5)` ✓
  - `x^2 + 9` — NOT a difference of squares (it's a sum). Cannot factor over the reals.
- Quick test: Is it a binomial? Is one term subtracted? Are both terms perfect squares?
- Practice: 12 problems, including some that require factoring out a GCF first:
  - `3x^2 - 27 = 3(x^2 - 9) = 3(x + 3)(x - 3)`
- Desmos: Graph `y = x^2 - 9`. X-intercepts at x = 3 and x = -3, matching the factors.

**TEKS:** §111.39(c)(10)

#### Lesson 3.9 — Factoring Perfect Square Trinomials (1.5 hrs)
**Math Focus:** Recognizing and factoring `a^2 + 2ab + b^2 = (a + b)^2` and `a^2 - 2ab + b^2 = (a - b)^2`
**Activity:**
- Recall from Unit 2: `(a + b)^2 = a^2 + 2ab + b^2`. Now reverse it.
- Pattern recognition:
  - First term is a perfect square: `a^2`.
  - Last term is a perfect square: `b^2`.
  - Middle term is `2ab` (twice the product of the square roots of first and last terms).
- Examples:
  - `x^2 + 10x + 25`: Is `25 = 5^2`? Yes. Is `10x = 2(x)(5)`? Yes. → `(x + 5)^2`.
  - `4x^2 - 12x + 9`: Is `4x^2 = (2x)^2`? Yes. Is `9 = 3^2`? Yes. Is `12x = 2(2x)(3)`? Yes. → `(2x - 3)^2`.
- Warning: Not every trinomial with perfect square first and last terms is a perfect square trinomial. Check the middle term.
- Practice: 10 problems — identify as perfect square trinomial or not, then factor if applicable.
- GeoGebra: Build a square with side `(x + 5)`. The area is `x^2 + 10x + 25`.

**TEKS:** §111.39(c)(10)

#### Lesson 3.10 — Choosing a Factoring Strategy (2.8 hrs)
**Math Focus:** Decision tree for selecting the right factoring method
**Activity:**
- Factoring decision tree:
  1. Is there a GCF? Factor it out first. Always.
  2. How many terms?
     - 2 terms: Check for difference of squares.
     - 3 terms, a = 1: Diamond method.
     - 3 terms, a ≠ 1: AC method. (Also check for perfect square trinomial.)
     - 4 terms: Try grouping.
  3. Check: Is the result fully factored? Can any factor be factored further?
- Mixed practice: 20 polynomials requiring different strategies. Students must identify the method before factoring.
- Desmos challenge: For each quadratic, graph the original and the factored form. They must overlap perfectly.
- Partner quiz: Students write 5 factoring problems for a partner, each requiring a different strategy. Partners solve and verify.

**TEKS:** §111.39(c)(10), §111.39(c)(12)

---

### Week 3: Applications and the Factoring Field Guide (≈8.3 hours)

#### Lesson 3.11 — Factors and Zeros: The Connection (2 hrs)
**Math Focus:** If `f(x) = (x - r)(x - s)`, then `f(r) = 0` and `f(s) = 0`
**Activity:**
- Zero Product Property: If `ab = 0`, then `a = 0` or `b = 0`.
- Apply to factored polynomials: If `(x + 3)(x - 5) = 0`, then `x + 3 = 0` or `x - 5 = 0` → `x = -3` or `x = 5`.
- These are the x-intercepts (zeros) of the function `f(x) = x^2 - 2x - 15`.
- Students factor 8 quadratics and find the zeros. Verify by graphing in Desmos.
- Connection to S400: "In S400, you found the break-even point by setting Revenue = Cost. That's the same as setting Profit = 0 and solving. If Profit factors, the zeros are the break-even quantities."
- R lab:
```r
# Find zeros of x^2 - 2x - 15 = (x+3)(x-5)
f <- function(x) x^2 - 2*x - 15
x_vals <- seq(-5, 7, by = 0.1)
plot_data <- tibble(x = x_vals, y = f(x_vals))

ggplot(plot_data, aes(x, y)) +
  geom_line(color = "blue") +
  geom_hline(yintercept = 0, linetype = "dashed") +
  geom_point(data = tibble(x = c(-3, 5), y = c(0, 0)),
             color = "red", size = 3) +
  labs(title = "Zeros of f(x) = x^2 - 2x - 15")
```

**TEKS:** §111.39(c)(7), §111.39(c)(10)

#### Lesson 3.12 — Factoring in Context (2 hrs)
**Math Focus:** Applied factoring problems
**Activity:**
- Problem set:
  1. **Projectile:** A ball's height is `h(t) = -16t^2 + 48t`. When does it hit the ground? Factor: `h(t) = -16t(t - 3)`. Zeros at t = 0 (launch) and t = 3 seconds.
  2. **Area:** A rectangular garden has area `x^2 + 9x + 20` square feet. If one dimension is `(x + 4)`, what is the other? Factor: `(x + 4)(x + 5)` → the other dimension is `(x + 5)`.
  3. **Revenue:** Revenue is `R(x) = -x^2 + 12x`. When is revenue zero? Factor: `R(x) = -x(x - 12)`. At x = 0 (no sales) and x = 12.
  4. **Profit:** Profit = `P(x) = 2x^2 - 10x - 28`. Factor: `2(x^2 - 5x - 14) = 2(x - 7)(x + 2)`. Break even at x = 7 (the positive solution).
- For each: factor, find zeros, graph in Desmos, and write a sentence interpreting the zeros in context.

**TEKS:** §111.39(c)(7), §111.39(c)(10), §111.39(c)(12)

#### Lesson 3.13 — Factoring Field Guide Workshop (2 hrs)
**Activity:**
- Students create their **Factoring Field Guide** — a student-authored reference document.
- Required sections:
  1. **GCF Factoring:** Method, 3 worked examples (one with numerical GCF, one with variable GCF, one with both).
  2. **Trinomial Factoring (a = 1):** Diamond method, 3 worked examples (positive c, negative c, both signs).
  3. **Trinomial Factoring (a ≠ 1):** AC method, 3 worked examples.
  4. **Difference of Squares:** Pattern, 3 worked examples (including one requiring GCF first).
  5. **Perfect Square Trinomials:** Pattern, 2 worked examples.
  6. **Decision Tree:** Flowchart for choosing the right method.
  7. **Application:** One real-world problem where factoring reveals a meaningful answer, with graph.
- Workshop time: writing, computing, creating the decision tree visual.

#### Lesson 3.14 — Presentations & Unit 3 Assessment (2 hrs)
**Activity:**
- Field Guide peer review: Partners exchange guides, test by solving one problem from each section.
- Unit checkpoint quiz: Mixed factoring (GCF, trinomial, difference of squares, perfect square), finding zeros (25 minutes).
- Collect Field Guides for grading.

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Mixed Factoring | Individual | 25 |
| GCF Factoring Practice | Practice | 15 |
| Trinomial Factoring (a = 1) Practice | Practice | 20 |
| Trinomial Factoring (a ≠ 1) Practice | Practice | 20 |
| Special Patterns Practice | Practice | 15 |
| Factors and Zeros Lab | Lab | 25 |
| Factoring in Context Problem Set | Practice | 20 |
| Factoring Field Guide | Project | 50 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

factor, factoring, reverse of multiplication, Greatest Common Factor (GCF), factor out, trinomial factoring, diamond method, AC method, factor by grouping, difference of squares, perfect square trinomial, prime polynomial, zero, x-intercept, root, Zero Product Property, leading coefficient, verify, decision tree
