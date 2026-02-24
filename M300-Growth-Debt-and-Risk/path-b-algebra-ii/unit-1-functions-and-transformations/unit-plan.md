# Unit 1 — Functions & Transformations

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Functions & Transformations |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do mathematical functions model real-world relationships — and what happens when you shift, stretch, or flip a model?* |
| Algebra II TEKS | §111.40(c)(2), (4) |
| Tools | Desmos, RStudio, graphing calculators, spreadsheets |
| Key Deliverable | Function Transformation Gallery — a visual portfolio showing how transformations modify parent functions, with algebraic justification for each transformation |

## Unit Narrative

Functions are the central organizing idea of Algebra II. Every model students will build in this course — from polynomial fits to exponential growth to logarithmic scales — begins with a function. This unit establishes the foundation: What is a function? How do we describe its behavior? How do we modify it systematically? Students begin by reviewing function notation, domain, and range, then catalog the parent functions they will use all year: linear, quadratic, absolute value, and square root. The heart of the unit is transformations — students learn to translate, reflect, stretch, and compress any parent function by manipulating its equation. Desmos sliders make these transformations visible and interactive, so students build geometric intuition before formalizing the algebra.

The unit deepens into quadratic functions (completing the square, vertex form, and the connection between algebraic manipulation and graphical transformation) and inverse functions (reflecting across y = x). By the end, students can look at any transformed function and describe — both graphically and algebraically — what happened to the parent. The culminating project, the Function Transformation Gallery, asks students to create a visual portfolio demonstrating mastery of each transformation type, with algebraic reasoning linking equation changes to graphical changes. This project establishes the visual and analytical habits students will use throughout the course.

## Math Concepts

- Function notation: f(x), evaluating functions, input-output interpretation §111.40(c)(2)
- Domain and range: identifying from equations, graphs, and context §111.40(c)(2)
- Parent functions: linear f(x) = x, quadratic f(x) = x², absolute value f(x) = |x|, square root f(x) = √x §111.40(c)(2)
- Vertical and horizontal translations: f(x) + k, f(x - h) §111.40(c)(2)
- Reflections: -f(x), f(-x) §111.40(c)(2)
- Vertical and horizontal stretches/compressions: a·f(x), f(bx) §111.40(c)(2)
- Combining multiple transformations in sequence §111.40(c)(2)
- Quadratic functions: standard form, vertex form, completing the square §111.40(c)(4)
- Function composition: (f ∘ g)(x) = f(g(x)) §111.40(c)(2)
- Inverse functions: definition, finding algebraically, graphical reflection over y = x §111.40(c)(2)

---

## Lesson Sequence

### Week 1: Functions and Parent Functions (≈8.3 hours)

#### Lesson 1.1 — Function Notation and Evaluation (2 hrs)
**Algebra II Focus:** Function notation, evaluating functions, determining whether a relation is a function
**Activity:**
- Warm-up: Show three real-world scenarios — the price of gas per gallon, the temperature over a 24-hour day, and a person's height at different ages. Ask: "What makes these relationships? What is the input? What is the output?"
- Direct instruction: A function is a rule that assigns exactly one output to each input. Notation: f(x) reads "f of x" — x is the input, f(x) is the output.
- Evaluating functions:
  - Given f(x) = 3x² - 2x + 5, find f(0), f(2), f(-1), f(a), f(x + h).
  - Emphasize: f(x + h) ≠ f(x) + f(h). Functions are not distributive over addition.
- Vertical Line Test: A graph represents a function if every vertical line crosses it at most once.
- RStudio introduction: Define and evaluate functions in R.

```r
# Defining and evaluating a function in R
f <- function(x) { 3*x^2 - 2*x + 5 }
f(0)    # returns 5
f(2)    # returns 13
f(-1)   # returns 10

# Evaluate over a range of inputs
x_vals <- seq(-5, 5, by = 0.1)
y_vals <- f(x_vals)
plot(x_vals, y_vals, type = "l", col = "blue",
     main = "f(x) = 3x² - 2x + 5",
     xlab = "x", ylab = "f(x)")
```

- Practice: 15 problems — evaluate functions, determine if relations are functions from tables, graphs, and equations.

**TEKS:** §111.40(c)(2)

#### Lesson 1.2 — Domain and Range (2 hrs)
**Algebra II Focus:** Determining domain and range from equations, graphs, tables, and real-world context
**Activity:**
- Domain: the set of all valid inputs. Range: the set of all possible outputs.
- From equations:
  - f(x) = 2x + 1 → Domain: all real numbers. Range: all real numbers.
  - f(x) = √(x - 3) → Domain: x ≥ 3 (cannot take the square root of a negative). Range: y ≥ 0.
  - f(x) = 1/(x - 2) → Domain: x ≠ 2 (cannot divide by zero). Range: y ≠ 0.
- Notation: Interval notation vs. set-builder notation vs. inequality notation.
  - [3, ∞) means x ≥ 3. {x | x ≥ 3}. x ≥ 3.
- From graphs: Domain = horizontal extent, Range = vertical extent.
- Real-world context: A taxi charges $2.50 plus $0.75 per mile. f(x) = 2.50 + 0.75x. Domain: x ≥ 0 (can't drive negative miles). Range: y ≥ 2.50.
- Desmos: Graph f(x) = √(x - 3), f(x) = 1/(x - 2), f(x) = x². Identify domain and range from each graph.
- Practice: 12 problems — find domain and range from equations, graphs, and word problems.

**TEKS:** §111.40(c)(2)

#### Lesson 1.3 — Parent Functions Catalog (2.5 hrs)
**Algebra II Focus:** Identifying and graphing the four parent functions: linear, quadratic, absolute value, square root
**Activity:**
- A parent function is the simplest form of a function family — the starting point before any transformations.
- The four parent functions for this unit:

| Parent Function | Equation | Shape | Domain | Range | Key Features |
|----------------|----------|-------|--------|-------|--------------|
| Linear | f(x) = x | Line through origin | All reals | All reals | Slope = 1, y-int = 0 |
| Quadratic | f(x) = x² | Parabola (U-shape) | All reals | y ≥ 0 | Vertex at (0,0), symmetric |
| Absolute Value | f(x) = \|x\| | V-shape | All reals | y ≥ 0 | Vertex at (0,0), symmetric |
| Square Root | f(x) = √x | Half-parabola | x ≥ 0 | y ≥ 0 | Starts at origin, increases |

- Students graph all four by hand (plotting at least 5 points each), then verify in Desmos.
- For each, identify: domain, range, intercepts, symmetry, end behavior, and whether the function is increasing/decreasing.
- RStudio: Plot all four on a single graph for comparison.

```r
par(mfrow = c(2, 2))
x <- seq(-5, 5, by = 0.1)

plot(x, x, type = "l", col = "blue", main = "Linear: f(x) = x", ylab = "f(x)")
abline(h = 0, v = 0, lty = 2, col = "gray")

plot(x, x^2, type = "l", col = "red", main = "Quadratic: f(x) = x²", ylab = "f(x)")
abline(h = 0, v = 0, lty = 2, col = "gray")

plot(x, abs(x), type = "l", col = "green4", main = "Absolute Value: f(x) = |x|", ylab = "f(x)")
abline(h = 0, v = 0, lty = 2, col = "gray")

x_pos <- seq(0, 5, by = 0.1)
plot(x_pos, sqrt(x_pos), type = "l", col = "purple", main = "Square Root: f(x) = √x", ylab = "f(x)")
abline(h = 0, v = 0, lty = 2, col = "gray")
```

- Memory strategy: Students create a "parent function reference card" with the graph, equation, domain, range, and key features of each.
- Practice: Given a graph, identify which parent function it belongs to.

**TEKS:** §111.40(c)(2)

#### Lesson 1.4 — Vertical and Horizontal Translations (1.8 hrs)
**Algebra II Focus:** Shifting graphs up, down, left, and right
**Activity:**
- Vertical translation: f(x) + k shifts the graph UP by k units (k > 0) or DOWN by |k| units (k < 0).
  - Example: f(x) = x² + 3 is the parabola shifted up 3.
- Horizontal translation: f(x - h) shifts the graph RIGHT by h units. f(x + h) shifts LEFT by h.
  - This is counterintuitive! f(x - 3) shifts RIGHT because x must be 3 larger to produce the same output.
  - Example: f(x) = (x - 2)² is the parabola shifted right 2.
- Desmos exploration: Use sliders to visualize translations interactively.
  - Type `y = (x - h)² + k` and add sliders for h and k. Drag them and watch the parabola move.
  - Repeat with `y = |x - h| + k` and `y = √(x - h) + k`.
- Key pattern: (h, k) identifies the new "center" or "starting point" of the function.
- Practice: 12 problems — write the equation of a translated function given a description, and describe the translation given an equation.

**TEKS:** §111.40(c)(2)

---

### Week 2: Transformations in Depth (≈8.3 hours)

#### Lesson 1.5 — Reflections and Stretches/Compressions (2.5 hrs)
**Algebra II Focus:** Reflecting across axes, vertical and horizontal scaling
**Activity:**
- Reflections:
  - -f(x): Reflects the graph across the x-axis (negate the output — every y-value flips sign).
    - Example: -x² is an upside-down parabola.
  - f(-x): Reflects the graph across the y-axis (negate the input — the graph mirrors left-to-right).
    - Example: √(-x) is the square root function mirrored to the left side.
- Vertical stretch/compression (a · f(x)):
  - |a| > 1: vertical stretch (graph gets taller/narrower).
  - 0 < |a| < 1: vertical compression (graph gets shorter/wider).
  - a < 0: vertical stretch/compression AND reflection over x-axis.
- Horizontal stretch/compression (f(bx)):
  - |b| > 1: horizontal compression (graph gets narrower — counterintuitive!).
  - 0 < |b| < 1: horizontal stretch (graph gets wider).
- Desmos exploration: `y = a · x²` with a slider for a. Students observe: a = 2 makes the parabola narrower, a = 0.5 makes it wider, a = -1 flips it.
- Then: `y = (bx)²` with a slider for b. Students observe the horizontal effect.
- Side-by-side comparison: vertical stretch by 2 vs. horizontal compression by 1/2 on a quadratic — they look the same! Why? Because (2x)² = 4x² = 2²·x². The distinction matters for non-quadratic functions.
- Practice: 15 problems — identify and describe reflections and stretches/compressions from equations and graphs.

**TEKS:** §111.40(c)(2)

#### Lesson 1.6 — Combining Multiple Transformations (2.5 hrs)
**Algebra II Focus:** Applying multiple transformations in the correct order
**Activity:**
- The general transformed function: `y = a · f(b(x - h)) + k`
  - a = vertical stretch/compression and reflection over x-axis
  - b = horizontal stretch/compression and reflection over y-axis
  - h = horizontal translation
  - k = vertical translation
- Order of operations for graphing:
  1. Start with the parent function.
  2. Apply horizontal stretch/compression and reflection (b).
  3. Apply horizontal translation (h).
  4. Apply vertical stretch/compression and reflection (a).
  5. Apply vertical translation (k).
- Example: Graph y = -2(x + 3)² + 4.
  - Parent: y = x²
  - No horizontal stretch (b = 1).
  - Shift left 3 (h = -3).
  - Vertical stretch by 2 and reflect over x-axis (a = -2).
  - Shift up 4 (k = 4).
  - Result: upside-down parabola, vertex at (-3, 4), narrower than the parent.
- Desmos: Students graph each step of the transformation sequence to see the progression.
- Reverse direction: Given a graph, determine the equation by identifying the parent function and each transformation.
- Practice: 10 problems — graph multi-step transformations and write equations from graphs.

**TEKS:** §111.40(c)(2)

#### Lesson 1.7 — Quadratic Functions and Completing the Square (2 hrs)
**Algebra II Focus:** Standard form vs. vertex form, completing the square
**Activity:**
- Two forms of a quadratic:
  - Standard form: f(x) = ax² + bx + c — useful for finding y-intercept (c) and using the quadratic formula.
  - Vertex form: f(x) = a(x - h)² + k — useful for identifying vertex (h, k) and transformations.
- Converting standard → vertex form by completing the square:
  - f(x) = x² + 6x + 2
  - f(x) = (x² + 6x + 9) - 9 + 2  [add and subtract (6/2)² = 9]
  - f(x) = (x + 3)² - 7
  - Vertex: (-3, -7). The parabola is the parent x² shifted left 3 and down 7.
- When a ≠ 1: f(x) = 2x² - 12x + 5
  - f(x) = 2(x² - 6x) + 5
  - f(x) = 2(x² - 6x + 9 - 9) + 5
  - f(x) = 2(x - 3)² - 18 + 5
  - f(x) = 2(x - 3)² - 13
  - Vertex: (3, -13). Vertical stretch by 2, shifted right 3 and down 13.
- Desmos: Graph both forms simultaneously — they produce the same graph. Toggle between them to see the equivalence.
- Connection to transformations: Vertex form IS the transformation form. Completing the square reveals the hidden transformations in any quadratic.
- Practice: 10 problems — convert standard to vertex form and identify vertex and transformations.

**TEKS:** §111.40(c)(4)

#### Lesson 1.8 — Quadratic Functions: Applications and Features (1.3 hrs)
**Algebra II Focus:** Axis of symmetry, maximum/minimum values, quadratic modeling
**Activity:**
- Axis of symmetry: x = h (vertex form) or x = -b/(2a) (standard form).
- Maximum/minimum: If a > 0, the parabola opens up → minimum at the vertex. If a < 0, opens down → maximum.
- Application: A ball is thrown upward from a 48-foot building with initial velocity 32 ft/s. Its height is h(t) = -16t² + 32t + 48.
  - Find the vertex: t = -32/(2·(-16)) = 1 second. h(1) = -16 + 32 + 48 = 64 feet.
  - Maximum height: 64 feet at t = 1 second.
  - When does it hit the ground? Set h(t) = 0: -16t² + 32t + 48 = 0 → t² - 2t - 3 = 0 → (t-3)(t+1) = 0 → t = 3 seconds.
- RStudio: Model and visualize the projectile.

```r
h <- function(t) { -16*t^2 + 32*t + 48 }
t <- seq(0, 3.5, by = 0.01)
plot(t, h(t), type = "l", col = "blue",
     main = "Projectile Height: h(t) = -16t² + 32t + 48",
     xlab = "Time (seconds)", ylab = "Height (feet)")
abline(h = 0, lty = 2, col = "gray")
points(1, 64, col = "red", pch = 19, cex = 1.5)
text(1.4, 64, "Max: (1, 64)", col = "red")
```

- Practice: 5 application problems — find maximum/minimum values and interpret in context.

**TEKS:** §111.40(c)(4)

---

### Week 3: Composition, Inverses, and the Gallery Project (≈8.3 hours)

#### Lesson 1.9 — Function Composition (2 hrs)
**Algebra II Focus:** Composing two functions, evaluating and simplifying compositions
**Activity:**
- Composition: (f ∘ g)(x) = f(g(x)) — "f of g of x." Apply g first, then apply f to the result.
- Example: f(x) = 2x + 1, g(x) = x².
  - (f ∘ g)(x) = f(g(x)) = f(x²) = 2x² + 1.
  - (g ∘ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1.
  - Key point: f ∘ g ≠ g ∘ f in general. Composition is NOT commutative.
- Real-world example: A store offers a 20% discount, then charges 8.25% sales tax.
  - Discount: d(x) = 0.80x. Tax: t(x) = 1.0825x.
  - (t ∘ d)(x) = t(0.80x) = 1.0825(0.80x) = 0.866x.
  - (d ∘ t)(x) = d(1.0825x) = 0.80(1.0825x) = 0.866x.
  - In this case they are equal! Why? Both are linear — multiplication is commutative.
- Domain of a composition: The domain of f ∘ g includes only x-values in the domain of g whose outputs are in the domain of f.
- Practice: 12 problems — evaluate compositions at specific values, find composition formulas, determine domains.

**TEKS:** §111.40(c)(2)

#### Lesson 1.10 — Inverse Functions (2.5 hrs)
**Algebra II Focus:** Definition of inverse, finding inverses algebraically, graphical relationship
**Activity:**
- An inverse function "undoes" the original: if f(a) = b, then f⁻¹(b) = a.
- Notation: f⁻¹(x) does NOT mean 1/f(x). It means the inverse function.
- Verification: f and g are inverses if f(g(x)) = x AND g(f(x)) = x.
- Finding an inverse algebraically:
  1. Replace f(x) with y.
  2. Swap x and y.
  3. Solve for y.
  4. Replace y with f⁻¹(x).
- Example: f(x) = 3x - 7. y = 3x - 7 → x = 3y - 7 → x + 7 = 3y → y = (x + 7)/3. So f⁻¹(x) = (x + 7)/3.
- Verify: f(f⁻¹(x)) = 3·((x+7)/3) - 7 = x + 7 - 7 = x. Confirmed.
- Graphical relationship: The graph of f⁻¹ is the reflection of f across the line y = x.
- Desmos: Graph f(x) = 3x - 7, its inverse, and y = x on the same axes. Observe the reflection.
- Not every function has an inverse! A function must be one-to-one (passes the Horizontal Line Test) to have an inverse.
  - f(x) = x² does not have an inverse on all reals (fails HLT). But restrict to x ≥ 0, and the inverse is f⁻¹(x) = √x.
- RStudio: Plot a function and its inverse together.

```r
f <- function(x) { 3*x - 7 }
f_inv <- function(x) { (x + 7) / 3 }
x <- seq(-5, 10, by = 0.1)

plot(x, f(x), type = "l", col = "blue", ylim = c(-15, 15),
     main = "f(x) and its Inverse", xlab = "x", ylab = "y")
lines(x, f_inv(x), col = "red")
lines(x, x, lty = 2, col = "gray")
legend("topleft", legend = c("f(x) = 3x - 7", "f⁻¹(x) = (x+7)/3", "y = x"),
       col = c("blue", "red", "gray"), lty = c(1, 1, 2))
```

- Practice: 10 problems — find inverses, verify, graph, and apply the Horizontal Line Test.

**TEKS:** §111.40(c)(2)

#### Lesson 1.11 — Function Transformation Gallery Workshop (2 hrs)
**Activity:**
- Students create a **Function Transformation Gallery** — a visual portfolio demonstrating mastery of transformations:
  1. **Parent Function Pages (4 pages):** For each parent function (linear, quadratic, absolute value, square root), create a reference page with the graph, equation, domain, range, and key features.
  2. **Transformation Demonstrations (6 panels):** For each transformation type (vertical translation, horizontal translation, reflection over x-axis, reflection over y-axis, vertical stretch/compression, horizontal stretch/compression), show:
     - The parent function and the transformed function on the same Desmos graph.
     - The equation of each.
     - A 2-3 sentence algebraic explanation of why the transformation produces that graphical change.
  3. **Combined Transformation Showcase (2 panels):** Choose two parent functions and apply at least 3 transformations to each. Show step-by-step progression.
  4. **Inverse Function Pair:** Graph a function and its inverse on the same axes with y = x. Verify algebraically.
  5. **Real-World Application:** Find a real-world scenario that can be modeled by a transformed function. Write the equation, graph it, and explain each parameter.
- Workshop time: creating Desmos graphs, writing algebraic justifications, assembling the portfolio.

#### Lesson 1.12 — Gallery Presentations & Unit 1 Assessment (1.8 hrs)
**Activity:**
- Gallery walk: Students display their transformation portfolios. Each student visits at least 4 other galleries and leaves one piece of written feedback.
- Selected presentations: 5-6 students present their real-world application panel (3 minutes each), explaining the parent function, transformations, and contextual meaning.
- Unit checkpoint quiz: Function notation, domain/range, parent function identification, writing transformation equations, completing the square, inverse functions (25 minutes).

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Functions & Transformations | Individual | 25 |
| Function Notation & Evaluation Practice | Practice | 20 |
| Domain & Range Practice | Practice | 15 |
| Desmos Transformation Exploration Labs | Lab | 25 |
| Completing the Square Practice | Practice | 20 |
| Function Composition & Inverses Practice | Practice | 20 |
| Function Transformation Gallery | Project | 55 |
| Warm-ups & Daily Work | Participation | 20 |
| **Total** | | **200** |

## Key Vocabulary

function, input, output, function notation, f(x), domain, range, interval notation, set-builder notation, parent function, linear function, quadratic function, absolute value function, square root function, transformation, translation, vertical shift, horizontal shift, reflection, x-axis reflection, y-axis reflection, vertical stretch, vertical compression, horizontal stretch, horizontal compression, vertex form, standard form, completing the square, vertex, axis of symmetry, maximum, minimum, parabola, composition, f of g, inverse function, one-to-one, Horizontal Line Test, Vertical Line Test, end behavior, increasing, decreasing
