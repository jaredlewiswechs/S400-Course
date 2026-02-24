# Unit 4 — Quadratic Functions & Graphs

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Quadratic Functions & Graphs |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What can the shape of a parabola tell you about the situation it describes?* |
| Algebra I TEKS | §111.39(c)(6), (7), (12) |
| Tools | Desmos, GeoGebra, RStudio, graphing calculators |
| Key Deliverable | Quadratic Data Modeling Report — fitting quadratic models to real datasets and interpreting the vertex, zeros, and shape in context |

## Unit Narrative

Students encountered parabolas in S400 (revenue curves) and in M100 Units 2–3 (products and factors). Now they study quadratic functions systematically. The focus is on what you can learn from the graph: the vertex tells you the maximum or minimum, the axis of symmetry shows the line of mirror balance, the zeros tell you where the function crosses the axis, and the direction of opening tells you whether the function has a max or a min. Students work with three forms — standard, vertex, and factored — and learn to convert between them. Transformations connect algebraic changes to visual changes: adding a constant shifts the parabola up, changing the leading coefficient stretches or compresses it. Every concept is grounded in data. Projectile motion, bridge arches, satellite dish cross-sections, revenue curves, and area optimization problems all produce parabolas. Students fit quadratic models to real data and interpret the parameters in context.

## Math Concepts

- Quadratic functions: `f(x) = ax^2 + bx + c` (standard form) §111.39(c)(6)
- Domain and range of quadratic functions §111.39(c)(6)
- Vertex form: `f(x) = a(x - h)^2 + k` where (h, k) is the vertex §111.39(c)(6)
- Factored form: `f(x) = a(x - r)(x - s)` where r and s are zeros §111.39(c)(7)
- Converting between forms §111.39(c)(6), (7)
- Key features: vertex, axis of symmetry, direction of opening, y-intercept, x-intercepts §111.39(c)(6)
- Transformations: vertical shift, horizontal shift, vertical stretch/compression, reflection §111.39(c)(6)
- Maximum and minimum values §111.39(c)(6)
- Fitting quadratic models to data §111.39(c)(6), (12)

---

## Lesson Sequence

### Week 1: The Parabola and Its Features (≈8.3 hours)

#### Lesson 4.1 — The Shape of a Quadratic (2 hrs)
**Math Focus:** Graphing `y = x^2` and identifying key features
**Activity:**
- Build a table of values for `y = x^2` from x = -4 to x = 4. Plot by hand on graph paper. Connect with a smooth curve.
- Identify key features:
  - Vertex: (0, 0) — the lowest point.
  - Axis of symmetry: x = 0 — the vertical line through the vertex.
  - Opens upward (the "U" shape).
  - Domain: all real numbers. Range: y ≥ 0.
- Desmos exploration: Graph `y = x^2`. Use the trace feature to find exact coordinates. Identify symmetry — `f(-3) = f(3)`, `f(-2) = f(2)`, etc.
- Compare to `y = -x^2`: Same shape, opens downward. Vertex is now the highest point. Range: y ≤ 0.
- Discussion: When would a maximum make sense? When would a minimum? (Revenue max, cost min, height max for projectiles, etc.)
- R lab:
```r
x <- seq(-4, 4, by = 0.1)
parabolas <- tibble(
  x = rep(x, 2),
  y = c(x^2, -x^2),
  type = rep(c("y = x^2 (opens up)", "y = -x^2 (opens down)"), each = length(x))
)

ggplot(parabolas, aes(x, y, color = type)) +
  geom_line(size = 1.2) +
  geom_hline(yintercept = 0) +
  labs(title = "Comparing y = x^2 and y = -x^2")
```

**TEKS:** §111.39(c)(6)

#### Lesson 4.2 — Vertex Form: f(x) = a(x - h)^2 + k (2.5 hrs)
**Math Focus:** Understanding vertex form and its connection to transformations
**Activity:**
- Vertex form: `f(x) = a(x - h)^2 + k`. The vertex is at `(h, k)`. The axis of symmetry is `x = h`.
- Desmos sliders activity: Graph `y = a(x - h)^2 + k` with sliders for a, h, and k.
  - What does changing k do? Shifts the parabola up or down.
  - What does changing h do? Shifts left or right. (Note: `x - h` shifts right, counterintuitively.)
  - What does changing a do?
    - `|a| > 1`: Narrower (vertical stretch).
    - `0 < |a| < 1`: Wider (vertical compression).
    - `a > 0`: Opens up. `a < 0`: Opens down.
- Students record observations in a structured table.
- Practice: Given vertex form, identify vertex, axis of symmetry, direction of opening, domain and range.
  - `f(x) = 2(x - 3)^2 + 1` → vertex (3, 1), opens up, min value = 1, range: y ≥ 1.
  - `g(x) = -(x + 2)^2 + 5` → vertex (-2, 5), opens down, max value = 5, range: y ≤ 5.
- 10 practice problems: identify features and sketch the graph.

**TEKS:** §111.39(c)(6)

#### Lesson 4.3 — Standard Form: Finding the Vertex (2 hrs)
**Math Focus:** Vertex formula from standard form: `x = -b/(2a)`
**Activity:**
- Given `f(x) = ax^2 + bx + c`, the vertex x-coordinate is `x = -b/(2a)`. Plug back in to find the y-coordinate.
- Derivation (accessible level): The axis of symmetry is always halfway between the x-intercepts. For the general case, this simplifies to `x = -b/(2a)`.
- Example: `f(x) = x^2 - 6x + 5`.
  - `x = -(-6)/(2·1) = 3`. `f(3) = 9 - 18 + 5 = -4`. Vertex: (3, -4).
  - y-intercept: `f(0) = 5`. Point: (0, 5).
  - Axis of symmetry: x = 3. The symmetric point is (6, 5).
  - Direction: a = 1 > 0 → opens up.
- Students graph 6 quadratics from standard form, finding vertex, y-intercept, axis of symmetry, and 2 additional symmetric points.
- Desmos verification: Graph each function and confirm the vertex coordinates.

**TEKS:** §111.39(c)(6)

#### Lesson 4.4 — Factored Form and x-Intercepts (1.8 hrs)
**Math Focus:** Connecting factored form to zeros and graphing
**Activity:**
- Factored form: `f(x) = a(x - r)(x - s)`. The x-intercepts are at x = r and x = s.
- The vertex is halfway between the x-intercepts: `x_vertex = (r + s)/2`.
- Example: `f(x) = (x - 1)(x - 5)`.
  - Zeros: x = 1, x = 5. Vertex x: `(1 + 5)/2 = 3`. `f(3) = (3-1)(3-5) = 2(-2) = -4`. Vertex: (3, -4).
- Connection to Unit 3: Factoring gives us the zeros, which give us the x-intercepts, which give us the vertex.
- Students graph 6 quadratics from factored form.
- Side-by-side: `f(x) = x^2 - 6x + 5 = (x - 1)(x - 5)`. Standard form, factored form — same function, same graph.
- GeoGebra: Dynamic graphing of factored form with sliders for r and s. Watch the parabola shift as zeros move.

**TEKS:** §111.39(c)(6), §111.39(c)(7)

---

### Week 2: Transformations and Converting Between Forms (≈8.3 hours)

#### Lesson 4.5 — Transformations of Quadratic Functions (2.5 hrs)
**Math Focus:** How algebraic changes produce geometric changes
**Activity:**
- Systematic study of transformations starting from `y = x^2`:
  - Vertical shift: `y = x^2 + k` (k > 0 shifts up, k < 0 shifts down).
  - Horizontal shift: `y = (x - h)^2` (h > 0 shifts right, h < 0 shifts left).
  - Vertical stretch/compression: `y = ax^2` (|a| > 1 narrower, 0 < |a| < 1 wider).
  - Reflection: `y = -x^2` (reflect over x-axis).
  - Combined: `y = a(x - h)^2 + k`.
- Desmos investigation: Students match 8 transformed parabolas to their equations.
- "Transformation challenge": Given a description ("Shift y = x^2 right 3, up 2, and reflect"), write the equation: `y = -(x - 3)^2 + 2`.
- Practice: 10 problems — describe the transformation OR write the equation.
- R lab: Plot `y = x^2` and 4 transformed versions on the same axes with different colors:
```r
x <- seq(-6, 8, by = 0.1)
transforms <- tibble(
  x = rep(x, 4),
  y = c(x^2, (x-3)^2, x^2 + 4, -2*x^2),
  label = rep(c("y = x^2", "y = (x-3)^2", "y = x^2 + 4", "y = -2x^2"), each = length(x))
)

ggplot(transforms, aes(x, y, color = label)) +
  geom_line(size = 1) +
  coord_cartesian(ylim = c(-10, 15)) +
  labs(title = "Transformations of y = x^2")
```

**TEKS:** §111.39(c)(6)

#### Lesson 4.6 — Converting: Standard Form to Vertex Form (2 hrs)
**Math Focus:** Completing the square (as a conversion tool — solving comes in Unit 5)
**Activity:**
- To convert `f(x) = x^2 - 6x + 5` to vertex form:
  1. Group the x-terms: `f(x) = (x^2 - 6x) + 5`.
  2. Complete the square: Half of -6 is -3. Square it: 9. Add and subtract 9 inside: `f(x) = (x^2 - 6x + 9) - 9 + 5`.
  3. Factor the perfect square trinomial: `f(x) = (x - 3)^2 - 4`.
  4. Vertex: (3, -4). Confirmed.
- When a ≠ 1: `f(x) = 2x^2 + 8x + 3`.
  1. Factor out a: `f(x) = 2(x^2 + 4x) + 3`.
  2. Complete the square inside: half of 4 is 2, squared is 4. `f(x) = 2(x^2 + 4x + 4 - 4) + 3 = 2(x + 2)^2 - 8 + 3 = 2(x + 2)^2 - 5`.
  3. Vertex: (-2, -5).
- Practice: 8 conversions from standard to vertex form.
- Desmos verification: Graph both forms on the same axes — they must overlap.

**TEKS:** §111.39(c)(6)

#### Lesson 4.7 — Converting Between All Three Forms (2 hrs)
**Math Focus:** Fluency with standard ↔ vertex ↔ factored form
**Activity:**
- Three forms summary:
  - Standard: `f(x) = ax^2 + bx + c`. Good for: y-intercept (c), vertex via formula.
  - Vertex: `f(x) = a(x - h)^2 + k`. Good for: vertex, transformations.
  - Factored: `f(x) = a(x - r)(x - s)`. Good for: x-intercepts, vertex via midpoint.
- Conversion practice (8 problems): Start with any form, produce the other two.
- Card matching activity: 12 cards — 4 standard forms, 4 vertex forms, 4 factored forms. Students match the triplets.
- R verification: For each triplet, define all three forms as R functions and verify they produce the same y-values.

**TEKS:** §111.39(c)(6), §111.39(c)(7)

#### Lesson 4.8 — Maximum and Minimum Problems (1.8 hrs)
**Math Focus:** Using the vertex to find maximum/minimum values in context
**Activity:**
- Context problems where finding the vertex solves the problem:
  1. **Projectile:** `h(t) = -16t^2 + 64t + 5`. Maximum height? Vertex: `t = -64/(2·(-16)) = 2`. `h(2) = -64 + 128 + 5 = 69` feet.
  2. **Revenue (from S400):** `R(x) = -2x^2 + 100x`. Revenue-maximizing quantity? Vertex: `x = -100/(2·(-2)) = 25`. Max revenue: `R(25) = -1250 + 2500 = $1250`.
  3. **Fencing:** You have 100 meters of fencing. What dimensions maximize the rectangular area? If width = x, length = 50 - x. Area = `x(50 - x) = -x^2 + 50x`. Vertex: x = 25, max area = 625 m^2.
  4. **Cost:** Manufacturing cost is `C(x) = 0.5x^2 - 20x + 300`. Minimum cost? Vertex: x = 20, C = 100.
- Students solve each algebraically, then verify with Desmos graph.
- Writing: For each problem, write a sentence interpreting the vertex in context.

**TEKS:** §111.39(c)(6), §111.39(c)(12)

---

### Week 3: Quadratic Data Modeling (≈8.3 hours)

#### Lesson 4.9 — Fitting Quadratic Models to Data (2.5 hrs)
**Math Focus:** Quadratic regression, comparing linear and quadratic fit
**Activity:**
- Dataset 1: Distance fallen by a dropped object over time. Students know from Unit 1 this is quadratic.
- Desmos: Enter data points. Use quadratic regression to find the best-fit equation.
- Compare: Fit both a linear and a quadratic model. Which fits better? How do you tell? (Residuals, R² value.)
- R lab:
```r
drop <- tibble(
  time = c(0, 0.5, 1, 1.5, 2, 2.5, 3),
  distance = c(0, 1.2, 4.9, 11.0, 19.6, 30.6, 44.1)
)

# Linear fit
linear_model <- lm(distance ~ time, data = drop)
# Quadratic fit
quad_model <- lm(distance ~ poly(time, 2, raw = TRUE), data = drop)

ggplot(drop, aes(time, distance)) +
  geom_point(size = 3) +
  geom_smooth(method = "lm", se = FALSE, color = "red", linetype = "dashed") +
  geom_smooth(method = "lm", formula = y ~ poly(x, 2), se = FALSE, color = "blue") +
  labs(title = "Linear vs. Quadratic Fit: Free-Fall Data",
       subtitle = "Blue = quadratic, Red = linear")
```
- Discussion: The quadratic model fits much better. The linear model systematically misses. This is why we need polynomials beyond degree 1.

**TEKS:** §111.39(c)(6), §111.39(c)(12)

#### Lesson 4.10 — Interpreting Quadratic Models (2 hrs)
**Math Focus:** Extracting meaning from fitted quadratic parameters
**Activity:**
- For a fitted model `y = ax^2 + bx + c`:
  - What does `a` tell you? Direction and steepness.
  - What does the vertex tell you? Maximum or minimum in context.
  - What do the zeros tell you? Where the quantity reaches zero.
- Dataset 2: Revenue data from a small business at different price points. Fit a quadratic model. Find the revenue-maximizing price.
- Dataset 3: Population of a species over time that rises then falls (perhaps a bacteria culture that runs out of nutrients). Fit a quadratic. When does the population peak? When does it reach zero?
- For each dataset: fit the model, report the equation, find and interpret the vertex, find and interpret the zeros.
- Write a 3-sentence interpretation for each model.

**TEKS:** §111.39(c)(6), §111.39(c)(12)

#### Lesson 4.11 — Unit 4 Project Workshop (2 hrs)
**Activity:**
- Students create a **Quadratic Data Modeling Report**:
  1. Choose a real-world dataset that exhibits a quadratic pattern. Options (teacher-provided or student-found):
     - Projectile motion data (ball toss, water fountain arc)
     - Revenue at different price points (connect to S400)
     - Bridge arch measurements
     - Braking distance vs. speed
     - Area optimization scenarios
  2. Plot the data in R or Desmos.
  3. Fit a quadratic model. Report the equation in standard form and vertex form.
  4. Identify and interpret: vertex (max/min), zeros (if applicable), y-intercept, domain (realistic range of x).
  5. Graph the data with the fitted curve.
  6. Write a 1-page analysis interpreting all key features in context.
- Workshop time: data selection, fitting, interpretation, writing.

#### Lesson 4.12 — Quadratic Art in Desmos (1 hr)
**Math Focus:** Creative application of quadratic transformations
**Activity:**
- Students use Desmos to create a picture or design using only parabolas (and lines, if needed).
- Requirements: At least 6 parabolas with different vertices, widths, and directions.
- Students must list the equation of each parabola and identify its vertex and direction.
- Display: Project student art for a gallery viewing.
- This lesson reinforces transformations in a creative, low-stakes context.

**TEKS:** §111.39(c)(6)

#### Lesson 4.13 — Presentations & Unit 4 Assessment (2.8 hrs)
**Activity:**
- Selected project presentations (5–6 students, 4 minutes each).
- Unit checkpoint quiz: Vertex form identification, standard-to-vertex conversion, graphing from all three forms, max/min problems, transformation descriptions (25 minutes).
- Collect Quadratic Data Modeling Reports for grading.

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Quadratic Functions & Graphs | Individual | 25 |
| Graphing from Standard Form Practice | Practice | 20 |
| Vertex Form & Transformations Lab | Lab | 25 |
| Converting Between Forms Practice | Practice | 20 |
| Max/Min Application Problems | Practice | 20 |
| Quadratic Data Modeling Report | Project | 50 |
| Desmos Quadratic Art | Lab | 15 |
| Warm-ups & Daily Work | Participation | 25 |
| **Total** | | **200** |

## Key Vocabulary

quadratic function, parabola, vertex, axis of symmetry, direction of opening, maximum, minimum, domain, range, standard form, vertex form, factored form, x-intercept, zero, y-intercept, leading coefficient, transformation, vertical shift, horizontal shift, vertical stretch, vertical compression, reflection, completing the square, quadratic regression, residual, R-squared, model, fit
