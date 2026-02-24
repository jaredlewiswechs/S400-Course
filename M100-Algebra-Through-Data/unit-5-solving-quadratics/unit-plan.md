# Unit 5 — Solving Quadratics

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Solving Quadratics |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Given a quadratic equation, how many ways can you solve it — and which method should you use when?* |
| Algebra I TEKS | §111.39(c)(6), (7), (10), (12) |
| Tools | Desmos, GeoGebra, RStudio, graphing calculators |
| Key Deliverable | Quadratic Solving Methods Comparison — a data-driven investigation applying all four solving methods to real-world problems and analyzing when each is most efficient |

## Unit Narrative

This is the algebraic climax of the course. Students have factored quadratics, graphed them, and found their key features. Now they learn to solve quadratic equations — to find the exact values of x that make `ax^2 + bx + c = 0`. Four methods are taught in sequence: factoring (familiar from Unit 3), square roots (for equations with no linear term), completing the square (a powerful general technique), and the quadratic formula (the universal solver). Each method has its place. Factoring is fastest when it works. Square roots handle special cases elegantly. Completing the square reveals the vertex. The quadratic formula always works — even when the equation has no real solutions, which introduces the discriminant. Students learn to recognize which method is most efficient for a given equation and to verify solutions graphically and computationally. The unit culminates in applied problems where solving a quadratic answers a real question: When does the ball hit the ground? What price maximizes revenue? What dimensions give the required area?

## Math Concepts

- Solving quadratics by factoring (Zero Product Property) §111.39(c)(7), (10)
- Solving quadratics by taking square roots §111.39(c)(7)
- Solving quadratics by completing the square §111.39(c)(7)
- Solving quadratics using the quadratic formula §111.39(c)(7)
- The discriminant: `b^2 - 4ac` and the nature of solutions §111.39(c)(6), (7)
- Choosing a solving method §111.39(c)(7)
- Verifying solutions by substitution and graphically §111.39(c)(12)
- Applied quadratic equations §111.39(c)(6), (12)

---

## Lesson Sequence

### Week 1: Factoring and Square Roots (≈8.3 hours)

#### Lesson 5.1 — Solving by Factoring (Review and Extension) (2 hrs)
**Math Focus:** Zero Product Property, solving factorable quadratics
**Activity:**
- Review from Unit 3: If `(x - r)(x - s) = 0`, then `x = r` or `x = s`.
- Procedure:
  1. Set the equation equal to zero.
  2. Factor the quadratic.
  3. Set each factor equal to zero.
  4. Solve each linear equation.
- Examples with increasing complexity:
  - `x^2 - 5x + 6 = 0` → `(x - 2)(x - 3) = 0` → `x = 2` or `x = 3`.
  - `x^2 + 2x = 15` → `x^2 + 2x - 15 = 0` → `(x + 5)(x - 3) = 0` → `x = -5` or `x = 3`.
  - `2x^2 - 7x + 3 = 0` → `(2x - 1)(x - 3) = 0` → `x = 1/2` or `x = 3`.
  - `3x^2 + 12x = 0` → `3x(x + 4) = 0` → `x = 0` or `x = -4`.
- Verification: Substitute each solution back into the original equation. Also verify in Desmos.
- Practice: 12 equations to solve by factoring.

**TEKS:** §111.39(c)(7), §111.39(c)(10)

#### Lesson 5.2 — Solving by Taking Square Roots (2 hrs)
**Math Focus:** Isolating the squared term and taking square roots
**Activity:**
- When there is no linear term (no bx), isolate the squared expression and take the square root of both sides.
- Key principle: If `x^2 = k`, then `x = ±√k`. Always two solutions (when k > 0).
- Examples:
  - `x^2 = 25` → `x = ±5`.
  - `x^2 - 49 = 0` → `x^2 = 49` → `x = ±7`.
  - `3x^2 = 75` → `x^2 = 25` → `x = ±5`.
  - `(x - 3)^2 = 16` → `x - 3 = ±4` → `x = 7` or `x = -1`.
  - `2(x + 1)^2 - 18 = 0` → `(x + 1)^2 = 9` → `x + 1 = ±3` → `x = 2` or `x = -4`.
- Cases:
  - `x^2 = k` where k > 0: two real solutions.
  - `x^2 = 0`: one solution (x = 0).
  - `x^2 = k` where k < 0: no real solutions (preview — you can't square a real number and get negative).
- Desmos: Graph `y = x^2 - 25`. The x-intercepts at ±5 confirm the solutions.
- Practice: 12 equations to solve by square roots, including cases in the form `(x - h)^2 = k`.

**TEKS:** §111.39(c)(7)

#### Lesson 5.3 — Introduction to Square Roots and Radicals (2 hrs)
**Math Focus:** Simplifying square roots, rational vs. irrational solutions
**Activity:**
- When `x^2 = 12`, the answer is `x = ±√12 = ±2√3`. This is irrational — it can't be written as a fraction.
- Simplifying radicals:
  - `√12 = √(4·3) = 2√3`.
  - `√50 = √(25·2) = 5√2`.
  - `√72 = √(36·2) = 6√2`.
- Rule: Find the largest perfect square factor. Factor it out.
- Practice: Simplify 15 square roots.
- Connection to measurement: `√2 ≈ 1.414` appears in the diagonal of a unit square. `√3 ≈ 1.732` appears in equilateral triangle heights. These are exact values — decimals are approximations.
- R verification:
```r
# Verify: sqrt(12) = 2*sqrt(3)
sqrt(12)        # 3.464102
2 * sqrt(3)     # 3.464102
all.equal(sqrt(12), 2 * sqrt(3))  # TRUE
```
- Desmos: Plot `y = √x`. Identify perfect square inputs (1, 4, 9, 16, ...) and note that most outputs are irrational.

**TEKS:** §111.39(c)(11)

#### Lesson 5.4 — Practice: Factoring vs. Square Roots (2.3 hrs)
**Math Focus:** Choosing between the two methods learned so far
**Activity:**
- Decision guide:
  - Has a bx term? → Try factoring.
  - No bx term, or already in `(expression)^2 = number` form? → Square roots.
  - Has a bx term but doesn't factor? → Need a new method (preview of completing the square).
- Mixed practice: 16 equations. For each, students choose the better method, solve, and verify.
- Error analysis: 6 problems with common mistakes:
  - Forgetting the ± when taking square roots.
  - Setting factors equal to the wrong value (e.g., setting `(x+3)(x-2) = 6` and solving each factor = 6 — wrong!).
  - Losing the x = 0 solution when factoring out x (e.g., `x^2 - 5x = 0` → `x(x-5) = 0`, don't forget x = 0).
- R lab: Write a function that finds zeros numerically:
```r
library(polynom)
# Or manually:
find_zeros <- function(a, b, c) {
  discriminant <- b^2 - 4*a*c
  if (discriminant < 0) return("No real solutions")
  x1 <- (-b + sqrt(discriminant)) / (2*a)
  x2 <- (-b - sqrt(discriminant)) / (2*a)
  return(c(x1, x2))
}
find_zeros(1, -5, 6)  # 3, 2
```

**TEKS:** §111.39(c)(7)

---

### Week 2: Completing the Square and the Quadratic Formula (≈8.3 hours)

#### Lesson 5.5 — Completing the Square (2.5 hrs)
**Math Focus:** Solving quadratic equations by completing the square
**Activity:**
- Completing the square converts any quadratic into the form `(x - h)^2 = k`, which can be solved by square roots.
- Procedure for `x^2 + bx + c = 0`:
  1. Move c to the other side: `x^2 + bx = -c`.
  2. Take half of b, square it: `(b/2)^2`.
  3. Add `(b/2)^2` to both sides: `x^2 + bx + (b/2)^2 = -c + (b/2)^2`.
  4. Factor the left side as a perfect square: `(x + b/2)^2 = -c + (b/2)^2`.
  5. Take square roots and solve.
- Example: `x^2 + 6x + 2 = 0`.
  1. `x^2 + 6x = -2`.
  2. `(6/2)^2 = 9`.
  3. `x^2 + 6x + 9 = -2 + 9 = 7`.
  4. `(x + 3)^2 = 7`.
  5. `x + 3 = ±√7` → `x = -3 ± √7`.
- Connection to Unit 4: Completing the square also converts to vertex form. So solving and graphing are linked.
- GeoGebra: Visual demonstration of "completing the square" — literally adding area tiles to complete a geometric square.
- Practice: 10 equations solved by completing the square.
- Desmos verification: Graph each equation and confirm the x-intercepts match the solutions.

**TEKS:** §111.39(c)(7)

#### Lesson 5.6 — Completing the Square with a ≠ 1 (1.5 hrs)
**Math Focus:** Extending completing the square when the leading coefficient isn't 1
**Activity:**
- When a ≠ 1, divide through by a first:
  - `2x^2 + 8x - 10 = 0` → `x^2 + 4x - 5 = 0` → `x^2 + 4x = 5` → `x^2 + 4x + 4 = 9` → `(x + 2)^2 = 9` → `x = -2 ± 3` → `x = 1` or `x = -5`.
- Alternatively: This one also factors as `2(x - 1)(x + 5) = 0`. Completing the square is more work here, but it always works.
- Practice: 8 equations with a ≠ 1. Some are also factorable (students can verify both methods give the same answer).

**TEKS:** §111.39(c)(7)

#### Lesson 5.7 — The Quadratic Formula (2.5 hrs)
**Math Focus:** Deriving (informally) and applying the quadratic formula
**Activity:**
- The quadratic formula: For `ax^2 + bx + c = 0`, `x = (-b ± √(b^2 - 4ac)) / (2a)`.
- Informal derivation: Complete the square on `ax^2 + bx + c = 0` in general. The result is the formula.
- The formula always works — even when factoring fails and completing the square is messy.
- Example: `3x^2 - 5x + 1 = 0`.
  - `a = 3, b = -5, c = 1`.
  - `x = (5 ± √(25 - 12)) / 6 = (5 ± √13) / 6`.
  - `x ≈ 1.43` or `x ≈ 0.23`.
- Calculator practice: Students solve 10 equations using the formula on their graphing calculators.
- R lab: Use the `find_zeros` function from Lesson 5.4 (which IS the quadratic formula) to solve all 10.
- Desmos verification: Graph each quadratic and verify x-intercepts match.
- Mnemonic: The quadratic formula song (to the tune of "Pop Goes the Weasel") — teach it, practice it, embed it.

**TEKS:** §111.39(c)(7)

#### Lesson 5.8 — The Discriminant: How Many Solutions? (1.8 hrs)
**Math Focus:** `b^2 - 4ac` determines the nature of solutions
**Activity:**
- The expression under the radical, `b^2 - 4ac`, is called the discriminant.
  - `b^2 - 4ac > 0`: Two distinct real solutions (parabola crosses x-axis twice).
  - `b^2 - 4ac = 0`: One repeated real solution (parabola touches x-axis at the vertex).
  - `b^2 - 4ac < 0`: No real solutions (parabola doesn't cross x-axis).
- Desmos investigation: Students graph 9 quadratics (3 of each type) and connect the discriminant to the graph.
- Practice: Calculate the discriminant for 12 equations. Predict the number of solutions before solving.
- R lab: Modify the `find_zeros` function to report the discriminant and classify the number of solutions:
```r
analyze_quadratic <- function(a, b, c) {
  disc <- b^2 - 4*a*c
  cat("Discriminant:", disc, "\n")
  if (disc > 0) {
    x1 <- (-b + sqrt(disc)) / (2*a)
    x2 <- (-b - sqrt(disc)) / (2*a)
    cat("Two real solutions:", x1, "and", x2, "\n")
  } else if (disc == 0) {
    x <- -b / (2*a)
    cat("One repeated solution:", x, "\n")
  } else {
    cat("No real solutions\n")
  }
}

analyze_quadratic(1, -6, 9)   # Discriminant: 0, one solution: 3
analyze_quadratic(1, 0, 4)    # Discriminant: -16, no real solutions
analyze_quadratic(1, -5, 6)   # Discriminant: 1, two solutions: 3 and 2
```

**TEKS:** §111.39(c)(6), §111.39(c)(7)

---

### Week 3: Choosing Methods and Applications (≈8.3 hours)

#### Lesson 5.9 — Choosing the Best Method (2.5 hrs)
**Math Focus:** Method selection decision tree
**Activity:**
- Decision tree for solving quadratics:
  1. Is it easily factorable? → Factor and use Zero Product Property.
  2. Is it in the form `(expression)^2 = number` or has no bx term? → Square roots.
  3. Do you need vertex form as well? → Completing the square.
  4. None of the above / complex coefficients / just need the answer? → Quadratic formula.
- Mixed practice: 20 equations. For each, students identify the best method, justify their choice, solve, and verify.
- Speed challenge: Students solve 4 equations (one of each type) and time themselves. The quadratic formula always works but may not be fastest.
- Partner comparison: Two students solve the same equation by different methods. Do they get the same answer? They should.

**TEKS:** §111.39(c)(7)

#### Lesson 5.10 — Quadratic Equations in Context (2.5 hrs)
**Math Focus:** Solving applied quadratic equations
**Activity:**
- Applied problem set:
  1. **Projectile motion:** A ball is launched upward with `h(t) = -16t^2 + 80t + 6`. When does it hit the ground? Set `h(t) = 0`, solve by quadratic formula: `t = (-80 ± √(6400 + 384)) / (-32)`. Take the positive solution.
  2. **Area:** A rectangular garden has area 84 m^2. The length is 5 meters more than the width. Find the dimensions. `w(w + 5) = 84` → `w^2 + 5w - 84 = 0` → `(w + 12)(w - 7) = 0` → `w = 7` (reject -12). Dimensions: 7 m × 12 m.
  3. **Revenue:** Revenue is `R(p) = -3p^2 + 120p`. At what prices is revenue exactly $900? `900 = -3p^2 + 120p` → `3p^2 - 120p + 900 = 0` → `p^2 - 40p + 300 = 0` → `(p - 10)(p - 30) = 0`. Prices: $10 or $30.
  4. **Geometry:** A right triangle has legs x and (x + 7). The hypotenuse is (x + 8). Find x. `x^2 + (x+7)^2 = (x+8)^2` → expand and simplify → `x^2 + 14x + 49 = x^2 + 16x + 64` → wait, re-expand: `x^2 + x^2 + 14x + 49 = x^2 + 16x + 64` → `x^2 - 2x - 15 = 0` → `(x-5)(x+3) = 0` → `x = 5`.
  5. **Stopping distance:** Stopping distance `d = 0.05v^2 + v` where v is speed in mph. At what speed is stopping distance 120 feet? `0.05v^2 + v - 120 = 0`. Use quadratic formula.
- For each: identify which method is most efficient, solve, verify, and interpret the answer in context. Reject non-sensical solutions (negative time, negative distance).
- Desmos: Graph each function and confirm solutions graphically.

**TEKS:** §111.39(c)(6), §111.39(c)(7), §111.39(c)(12)

#### Lesson 5.11 — Unit 5 Project Workshop (2 hrs)
**Activity:**
- Students create a **Quadratic Solving Methods Comparison**:
  1. Choose 4 real-world problems that result in quadratic equations (one per solving method).
  2. For each problem:
     - State the real-world context.
     - Write the quadratic equation.
     - Solve using the method best suited to the problem.
     - Also solve by one other method to verify.
     - Graph in Desmos showing the solution(s).
     - Write 2 sentences interpreting the solution in context.
  3. Include a reflection: "Which method do you find most reliable? Most efficient? When would you avoid each method?"
- Workshop time: problem selection, solving, graphing, writing.

#### Lesson 5.12 — Presentations & Unit 5 Assessment (1.3 hrs)
**Activity:**
- Selected presentations: 5 students share one problem from their comparison (3 minutes each).
- Unit checkpoint quiz: Solve by factoring, square roots, completing the square, and quadratic formula; discriminant analysis; applied problems (25 minutes).
- Collect projects.

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Solving Quadratics | Individual | 25 |
| Solving by Factoring Practice | Practice | 20 |
| Solving by Square Roots Practice | Practice | 15 |
| Completing the Square Practice | Practice | 20 |
| Quadratic Formula Practice | Practice | 20 |
| Discriminant Analysis Lab | Lab | 20 |
| Applied Quadratics Problem Set | Practice | 20 |
| Quadratic Solving Methods Comparison | Project | 50 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

solve, solution, root, zero, x-intercept, Zero Product Property, factoring, square root method, completing the square, quadratic formula, discriminant, two real solutions, one repeated solution, no real solutions, irrational solution, simplify radicals, perfect square, verify, substitute, extraneous solution, projectile, maximum height, break-even, optimization
