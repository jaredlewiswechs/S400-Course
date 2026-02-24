# Unit 2 — Polynomial Operations

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Polynomial Operations |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you combine, expand, and simplify algebraic expressions — and why would you want to?* |
| Algebra I TEKS | §111.39(c)(10), (11), (12) |
| Tools | GeoGebra (algebra tiles), Desmos, RStudio, graphing calculators |
| Key Deliverable | Area Model Design Project — a geometric design with polynomial expressions for dimensions and computed areas |

## Unit Narrative

Polynomial operations are the grammar of algebra. Students learned individual expressions in Unit 1; now they learn to combine them. Addition and subtraction of polynomials are straightforward — combine like terms. Multiplication is where the power is: distributing, using FOIL for binomials, and expanding larger products. The area model (a rectangle with variable dimensions) makes multiplication visual and concrete before it becomes symbolic. Every product is verified graphically in Desmos and computationally in R: if `(x + 3)(x + 5)` really equals `x^2 + 8x + 15`, then both expressions should produce identical y-values for every x. GeoGebra's virtual algebra tiles give students a hands-on manipulative for building and checking products. The unit ends by connecting polynomial operations to real contexts — area of composite shapes, volume of boxes, and revenue functions where price and quantity are both expressed in terms of the same variable.

## Math Concepts

- Adding and subtracting polynomials (combining like terms) §111.39(c)(10)
- Multiplying monomials using exponent rules §111.39(c)(10), (11)
- Multiplying a polynomial by a monomial (distribution) §111.39(c)(10)
- Multiplying binomials (FOIL and area model) §111.39(c)(10)
- Multiplying larger polynomials (distribution extended) §111.39(c)(10)
- Special products: perfect square trinomials, difference of squares §111.39(c)(10)
- Verifying polynomial identities graphically and computationally §111.39(c)(12)

---

## Lesson Sequence

### Week 1: Adding, Subtracting, and Monomial Multiplication (≈8.3 hours)

#### Lesson 2.1 — Adding Polynomials: Combining Like Terms (2 hrs)
**Math Focus:** Identifying like terms, adding polynomials
**Activity:**
- Review: Like terms have the same variable(s) raised to the same power(s). `3x^2` and `5x^2` are like terms. `3x^2` and `3x` are not.
- Concrete model: GeoGebra algebra tiles. `x^2` tiles, `x` tiles, unit tiles. Physically combine two polynomial tile collections.
- Symbolic procedure: Line up like terms and add coefficients.
  - `(3x^2 + 5x + 2) + (x^2 - 3x + 7) = 4x^2 + 2x + 9`
- Vertical and horizontal methods for adding polynomials.
- R verification:
```r
# If two polynomials are equal, they produce the same values for all x
f <- function(x) 3*x^2 + 5*x + 2
g <- function(x) x^2 - 3*x + 7
h <- function(x) 4*x^2 + 2*x + 9

x_test <- -5:5
all(f(x_test) + g(x_test) == h(x_test))  # TRUE
```
- Practice: 12 addition problems, progressing from binomials to trinomials to 4-term polynomials.

**TEKS:** §111.39(c)(10)

#### Lesson 2.2 — Subtracting Polynomials (1.5 hrs)
**Math Focus:** Distributing the negative, subtracting polynomials
**Activity:**
- Key insight: Subtracting a polynomial means adding its opposite. Distribute the negative sign to every term.
  - `(5x^2 + 3x - 1) - (2x^2 - x + 4) = (5x^2 + 3x - 1) + (-2x^2 + x - 4) = 3x^2 + 4x - 5`
- Common error focus: Forgetting to distribute the negative to all terms. Practice with color-coding: circle the subtracted polynomial, then change every sign.
- GeoGebra tiles: Remove tiles to model subtraction.
- Context problem: A company's revenue is `R(x) = 8x^2 + 12x` and cost is `C(x) = 3x^2 + 5x + 200`. Find profit: `P(x) = R(x) - C(x) = 5x^2 + 7x - 200`.
- Practice: 12 subtraction problems.

**TEKS:** §111.39(c)(10)

#### Lesson 2.3 — Multiplying Monomials (1.5 hrs)
**Math Focus:** Multiplying monomials using coefficient multiplication and exponent rules
**Activity:**
- Rule: Multiply coefficients, add exponents on like bases.
  - `(3x^2)(4x^3) = 12x^5`
  - `(-2a^3b)(5a^2b^4) = -10a^5b^5`
- Connection to Unit 1 exponent rules: This is the product rule in action.
- Powers of monomials: `(2x^3)^2 = 2^2 · (x^3)^2 = 4x^6`.
- Practice: 20 monomial multiplication problems, including negative coefficients and multi-variable expressions.
- Desmos check: Graph `y = (3x^2)(4x^3)` and `y = 12x^5` on the same axes. They overlap perfectly.

**TEKS:** §111.39(c)(10), §111.39(c)(11)

#### Lesson 2.4 — Multiplying a Polynomial by a Monomial (1.5 hrs)
**Math Focus:** Distribution — monomial × polynomial
**Activity:**
- Distributive property: `a(b + c) = ab + ac`. Extend to polynomials:
  - `3x(x^2 + 4x - 5) = 3x^3 + 12x^2 - 15x`
- Area model interpretation: A rectangle with width `3x` and length made of three sections: `x^2`, `4x`, and `-5`. Total area = sum of partial areas.
- GeoGebra: Build the rectangle with tiles. Verify the product matches.
- Context: A garden has width x and three sections of lengths `(x + 2)`, `3`, and `(x - 1)`. The total garden area is `x[(x+2) + 3 + (x-1)] = x(2x + 4) = 2x^2 + 4x`.
- Practice: 12 distribution problems.

**TEKS:** §111.39(c)(10)

#### Lesson 2.5 — The Area Model: Visualizing Polynomial Multiplication (1.8 hrs)
**Math Focus:** Using area models to multiply polynomials
**Activity:**
- Before FOIL, students learn the area model — a more general and visual approach.
- A rectangle with width `(x + 3)` and length `(x + 5)`:
  - Split into 4 sub-rectangles: `x·x = x^2`, `x·5 = 5x`, `3·x = 3x`, `3·5 = 15`.
  - Total area: `x^2 + 5x + 3x + 15 = x^2 + 8x + 15`.
- GeoGebra: Build area models dynamically. Drag the slider to change x and watch the sub-areas update.
- Students draw area models for 8 binomial products.
- R verification: For each product, define both the factored form and expanded form as functions. Test equality for multiple x values.

**TEKS:** §111.39(c)(10)

---

### Week 2: Multiplying Binomials and Special Products (≈8.3 hours)

#### Lesson 2.6 — FOIL: Multiplying Two Binomials (2 hrs)
**Math Focus:** FOIL method for binomial multiplication
**Activity:**
- FOIL: First, Outer, Inner, Last — a shortcut for the area model applied to two binomials.
  - `(x + 3)(x + 5)`: First = `x^2`, Outer = `5x`, Inner = `3x`, Last = `15` → `x^2 + 8x + 15`.
- Side-by-side comparison: FOIL and area model produce the same result. FOIL is faster; the area model is more visual.
- 15 practice problems with increasing complexity:
  - `(x + 2)(x + 6)`, `(x - 3)(x + 7)`, `(2x + 1)(3x - 4)`, `(x - 5)(x - 5)`.
- Common error station: Students find and correct 5 incorrect FOIL expansions.
- Desmos verification: For each product, graph the factored form and expanded form. They should be identical.

**TEKS:** §111.39(c)(10)

#### Lesson 2.7 — Special Product: Perfect Square Trinomials (2 hrs)
**Math Focus:** `(a + b)^2 = a^2 + 2ab + b^2` and `(a - b)^2 = a^2 - 2ab + b^2`
**Activity:**
- Start with FOIL: `(x + 4)^2 = (x + 4)(x + 4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16`.
- Notice the pattern: The middle term is always `2 × (first) × (last)`. The last term is the square of the second term.
- Generalize: `(a + b)^2 = a^2 + 2ab + b^2` and `(a - b)^2 = a^2 - 2ab + b^2`.
- GeoGebra: Build a square with side `(a + b)`. The area = `a^2 + 2ab + b^2`. This is a geometric proof of the algebraic identity.
- Common error: `(x + 4)^2 ≠ x^2 + 16`. The middle term is essential. Students test in Desmos: graph `y = (x+4)^2` and `y = x^2 + 16`. They are NOT the same.
- Practice: 10 perfect square trinomial expansions.

**TEKS:** §111.39(c)(10)

#### Lesson 2.8 — Special Product: Difference of Squares (2 hrs)
**Math Focus:** `(a + b)(a - b) = a^2 - b^2`
**Activity:**
- FOIL: `(x + 3)(x - 3) = x^2 - 3x + 3x - 9 = x^2 - 9`. The middle terms cancel.
- Generalize: `(a + b)(a - b) = a^2 - b^2`. This is the difference of two squares.
- Geometric interpretation in GeoGebra: Start with a square of area `a^2`. Remove a square of area `b^2` from the corner. Rearrange the remaining L-shape into a rectangle with dimensions `(a + b)` by `(a - b)`.
- Mental math application: `(51)(49) = (50 + 1)(50 - 1) = 2500 - 1 = 2499`.
- Practice: 12 problems applying the difference of squares pattern.
- R verification:
```r
a_vals <- 1:20
b_vals <- 1:20
all((a_vals + b_vals) * (a_vals - b_vals) == a_vals^2 - b_vals^2)  # TRUE
```

**TEKS:** §111.39(c)(10)

#### Lesson 2.9 — Multiplying Larger Polynomials (2.3 hrs)
**Math Focus:** Distributing beyond binomials — trinomial × binomial, trinomial × trinomial
**Activity:**
- FOIL only works for two binomials. For larger products, use systematic distribution (every term in the first × every term in the second) or the area model extended.
- Example: `(x + 2)(x^2 + 3x + 5)`:
  - `x(x^2 + 3x + 5) + 2(x^2 + 3x + 5)`
  - `= x^3 + 3x^2 + 5x + 2x^2 + 6x + 10`
  - `= x^3 + 5x^2 + 11x + 10`
- Area model: A 2×3 grid of sub-rectangles.
- Practice: 8 larger polynomial multiplication problems.
- Context: A box with dimensions `x`, `(x + 2)`, and `(x + 3)`. Volume = `x(x + 2)(x + 3)`. Expand step by step.
- R lab: Define the factored and expanded forms as R functions. Verify equality for 20 x-values.

**TEKS:** §111.39(c)(10)

---

### Week 3: Applications and the Area Model Design Project (≈8.3 hours)

#### Lesson 2.10 — Polynomial Operations in Context (2 hrs)
**Math Focus:** Applying polynomial operations to real problems
**Activity:**
- Problem set with 8 applied polynomial problems:
  1. **Area:** A rectangular field is `(2x + 5)` meters by `(x + 3)` meters. Find the area as a polynomial.
  2. **Revenue minus Cost:** Revenue = `(x^2 + 10x)`, Cost = `(3x + 50)`. Find and simplify profit.
  3. **Combined areas:** Two square gardens, one with side `x` and one with side `(x + 4)`. Total area = `x^2 + (x+4)^2`. Expand and simplify.
  4. **Perimeter vs. Area:** A rectangle with width `x` and length `(3x - 1)`. Find both perimeter (linear) and area (quadratic). How do they grow differently?
  5. **Volume:** A shipping box is `x` inches wide, `(x + 5)` inches long, and `(x - 1)` inches tall. Express volume as a polynomial.
- For each: write the expression, expand, simplify, and evaluate for a given value of x.
- Desmos: Graph the polynomial and use it to answer the question (e.g., "For what value of x does the area exceed 100 square meters?").

**TEKS:** §111.39(c)(10), §111.39(c)(12)

#### Lesson 2.11 — Verifying Polynomial Identities (1.5 hrs)
**Math Focus:** Testing whether two polynomial expressions are equivalent
**Activity:**
- Big idea: Two expressions are equivalent if they produce the same value for EVERY input.
- Students receive 10 pairs of expressions. For each, determine if they are equivalent:
  - Test 5 x-values in a table.
  - If all match → likely equivalent. Verify by expanding algebraically.
  - If any differ → not equivalent. Show the counterexample.
- R lab: Automate the testing:
```r
# Are (x+3)^2 and x^2 + 9 equivalent?
test_x <- seq(-10, 10, by = 0.5)
expr1 <- (test_x + 3)^2
expr2 <- test_x^2 + 9
all(expr1 == expr2)  # FALSE — they differ

# Are (x+3)^2 and x^2 + 6x + 9 equivalent?
expr3 <- test_x^2 + 6*test_x + 9
all(expr1 == expr3)  # TRUE
```
- Key takeaway: Computational testing catches errors. Algebraic verification proves equivalence.

**TEKS:** §111.39(c)(10), §111.39(c)(12)

#### Lesson 2.12 — Unit 2 Project Workshop: Area Model Design (3 hrs)
**Activity:**
- Students create a **geometric design** composed of rectangles and squares with variable dimensions.
- Requirements:
  1. Design a floor plan, garden layout, or tiled pattern using at least 4 rectangular regions.
  2. Label each dimension with a polynomial expression in terms of one variable x.
  3. Write and expand the area expression for each region.
  4. Find the total area as a single simplified polynomial.
  5. Create a GeoGebra or Desmos visualization showing the design with a slider for x.
  6. Evaluate: For what value of x does the total area equal a target value (e.g., 200 sq ft)?
  7. Write a 1-paragraph explanation of the design and the math.
- Workshop time: design, computation, peer review.

#### Lesson 2.13 — Presentations & Unit 2 Assessment (1.8 hrs)
**Activity:**
- Selected design presentations (5–6 students, 3 minutes each, showing GeoGebra/Desmos model).
- Unit checkpoint quiz: Polynomial addition, subtraction, multiplication, special products, exponent rules (25 minutes).

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Polynomial Operations | Individual | 25 |
| Addition & Subtraction Practice Set | Practice | 20 |
| Monomial & Distribution Practice | Practice | 20 |
| FOIL & Area Model Lab | Lab | 25 |
| Special Products Practice | Practice | 20 |
| Polynomial Identity Verification Lab | Lab | 20 |
| Area Model Design Project | Project | 50 |
| Warm-ups & Daily Work | Participation | 20 |
| **Total** | | **200** |

## Key Vocabulary

like terms, combine like terms, polynomial addition, polynomial subtraction, distribute, distributive property, monomial multiplication, product rule, power rule, FOIL, area model, binomial product, expand, simplify, perfect square trinomial, difference of squares, identity, equivalent expressions, leading coefficient, degree, standard form, verify, counterexample
