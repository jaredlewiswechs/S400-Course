# Unit 4 — Complex Systems

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Complex Systems |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *When multiple constraints collide — prices, resources, capacities — how does algebra find the best possible outcome?* |
| Algebra II TEKS | §111.40(c)(3), (4) |
| Tools | RStudio, Desmos, spreadsheets (Google Sheets / Excel), graphing calculators |
| Key Deliverable | Optimization Report — students solve a real-world linear programming or system optimization problem and present the solution with graphical justification |

## Unit Narrative

Every real decision involves constraints. A manufacturer has limited materials and labor. A logistics company has capacity limits on trucks and warehouses. A city has a finite budget and competing infrastructure needs. The mathematics of systems — two equations, three equations, inequalities, and optimization — is the mathematics of navigating these constraints simultaneously. This unit begins with a review of two-variable linear systems (solved algebraically and graphically), then extends to three-variable systems using elimination. Students learn to graph systems of linear inequalities and identify feasible regions, which leads directly to linear programming — the method businesses and governments use to optimize outcomes under constraints. The unit then pushes into nonlinear territory: quadratic-linear and quadratic-quadratic systems introduce the idea that intersections between curves produce richer, more complex solution sets. Throughout, Desmos provides immediate visual feedback, RStudio handles computation and visualization at scale, and every system is anchored to a real-world context — break-even analysis, resource allocation, intersection of growth models.

The progression is deliberate. Linear systems are familiar ground from M100; the new work is extending to three variables and to inequality constraints. Linear programming is the payoff — a genuine application of systems and inequalities that students can see used in industry. Nonlinear systems introduce the algebraic challenge of substitution into quadratic equations and the geometric surprise of zero, one, or two intersection points. The Optimization Report asks students to formulate a real problem, set up constraints, graph the feasible region, evaluate the objective function at corner points, and justify their solution — a complete mathematical modeling cycle.

## Math Concepts

- Systems of two linear equations: graphical and algebraic solutions §111.40(c)(3)
- Systems of three linear equations: elimination method §111.40(c)(3)
- Systems of linear inequalities: graphing and feasible regions §111.40(c)(3)
- Linear programming: objective functions, constraints, corner-point principle §111.40(c)(3)
- Nonlinear systems: quadratic-linear intersections §111.40(c)(3), (4)
- Nonlinear systems: quadratic-quadratic intersections §111.40(c)(3), (4)
- Systems involving square root functions §111.40(c)(4)
- Substitution method for nonlinear systems §111.40(c)(3)
- Break-even analysis: revenue = cost §111.40(c)(3)
- Applications of systems to optimization and modeling §111.40(c)(3)

---

## Lesson Sequence

### Week 1: Linear Systems and Inequalities (≈8.3 hours)

#### Lesson 4.1 — Review: Two-Variable Linear Systems (2 hrs)
**Algebra II Focus:** Solving 2×2 linear systems by graphing, substitution, and elimination
**Activity:**
- Warm-up: A food truck sells tacos for $3 and burritos for $5. On Monday, they sold 80 items and made $340. How many of each did they sell? Set up: `t + b = 80` and `3t + 5b = 340`. Solve by substitution: `t = 80 - b`, so `3(80 - b) + 5b = 340` → `240 - 3b + 5b = 340` → `2b = 100` → `b = 50, t = 30`.
- Review three methods:
  1. **Graphing:** Graph both lines. The intersection point is the solution. Limitation: only gives approximate answers for non-integer solutions.
  2. **Substitution:** Solve one equation for one variable, substitute into the other. Best when one variable has coefficient 1 or -1.
  3. **Elimination (addition):** Add or subtract equations to eliminate one variable. Best when coefficients are easily matched.
- Types of solutions:
  - **One solution:** Lines intersect at one point (consistent, independent). Different slopes.
  - **No solution:** Lines are parallel (inconsistent). Same slope, different intercept.
  - **Infinitely many solutions:** Lines are identical (consistent, dependent). Same slope, same intercept.
- Desmos: Graph each type. Students enter two equations and identify the intersection (or lack thereof) visually before solving algebraically.
- Practice: 10 systems — a mix of one-solution, no-solution, and infinitely-many-solutions. Students must solve algebraically AND verify graphically.

**TEKS:** §111.40(c)(3)

#### Lesson 4.2 — Three-Variable Linear Systems (2.5 hrs)
**Algebra II Focus:** Solving 3×3 systems using elimination
**Activity:**
- Motivation: Some problems have three unknowns. A chemist mixes three solutions. An investor splits money across three accounts. A nutritionist balances three nutrients. Two equations are not enough — you need three.
- Strategy for 3×3 systems:
  1. Use elimination to reduce the 3×3 system to a 2×2 system (eliminate the same variable from two different pairs of equations).
  2. Solve the 2×2 system.
  3. Back-substitute to find the third variable.
- Worked example:
  ```
  x + 2y + z = 14     ...(1)
  3x - y + 2z = 11    ...(2)
  2x + y - z = 5      ...(3)
  ```
  - Eliminate z from (1) and (3): Add them → `3x + 3y = 19` ...(4)
  - Eliminate z from (2) and (1): Multiply (1) by -2 and add to (2) → `3x - 5y + 0z = 11 - 28` → `x - 5y = -17` ...(5)
  - Solve (4) and (5): From (4), `x = (19 - 3y)/3`. Substitute into (5) and solve for y, then x, then z.
- Special cases: No solution (inconsistent — planes don't share a common point), infinitely many solutions (planes intersect along a line).
- RStudio: Solve 3×3 systems computationally:
```r
# Solve the system Ax = b
A <- matrix(c(1, 3, 2,
              2, -1, 1,
              1, 2, -1), nrow = 3, byrow = TRUE)
b <- c(14, 11, 5)
solution <- solve(A, b)
cat("x =", solution[1], "\ny =", solution[2], "\nz =", solution[3], "\n")
```
- Practice: 6 three-variable systems (including 1 with no solution, 1 with infinitely many).

**TEKS:** §111.40(c)(3)

#### Lesson 4.3 — Systems of Linear Inequalities (2 hrs)
**Algebra II Focus:** Graphing systems of inequalities, identifying feasible regions
**Activity:**
- Review: Graphing a single linear inequality in two variables.
  - Graph the boundary line (solid for ≤ or ≥, dashed for < or >).
  - Shade the half-plane that satisfies the inequality. Test point (0,0) if it's not on the line.
- A system of linear inequalities: Graph each inequality. The **feasible region** is the intersection of all shaded regions — the set of all points that satisfy every inequality simultaneously.
- Worked example:
  ```
  x + y ≤ 10
  2x + y ≤ 16
  x ≥ 0
  y ≥ 0
  ```
  - Graph each. The feasible region is a polygon in the first quadrant. Vertices (corner points): (0, 0), (8, 0), (6, 4), (0, 10).
- Desmos: Enter all four inequalities. Desmos shades the feasible region automatically. Students identify corner points.
  - Enter: `x + y <= 10`, `2x + y <= 16`, `x >= 0`, `y >= 0`.
- Finding corner points algebraically: Solve pairs of boundary equations as systems.
  - Intersection of `x + y = 10` and `2x + y = 16`: subtract → `x = 6`, `y = 4`. Corner point: (6, 4).
- Practice: 6 systems of linear inequalities — graph the feasible region, identify all corner points.

**TEKS:** §111.40(c)(3)

#### Lesson 4.4 — Linear Programming: Setting Up the Problem (1.8 hrs)
**Algebra II Focus:** Formulating objective functions and constraints
**Activity:**
- Linear programming is the method for finding the maximum or minimum value of a linear function subject to linear constraints.
- Components:
  1. **Decision variables:** The unknowns you control (e.g., number of chairs and tables to produce).
  2. **Objective function:** The linear expression you want to maximize or minimize (e.g., Profit = 25x + 40y).
  3. **Constraints:** Linear inequalities that limit the decision variables (e.g., wood available, labor hours, non-negativity).
- **Corner Point Theorem:** The maximum (or minimum) of a linear objective function over a convex feasible region occurs at a vertex (corner point) of the region.
- Worked example: A furniture workshop makes chairs and tables. Each chair requires 2 hours of carpentry and 1 hour of finishing. Each table requires 3 hours of carpentry and 2 hours of finishing. Available: 120 hours of carpentry, 80 hours of finishing. Profit: $25 per chair, $40 per table.
  - Let x = chairs, y = tables.
  - Maximize: `P = 25x + 40y`
  - Subject to: `2x + 3y ≤ 120`, `x + 2y ≤ 80`, `x ≥ 0`, `y ≥ 0`.
- Students set up (not solve yet) 3 linear programming problems from word descriptions. Identifying decision variables, writing the objective function, and translating verbal constraints into inequalities.

**TEKS:** §111.40(c)(3)

---

### Week 2: Linear Programming and Nonlinear Systems (≈8.3 hours)

#### Lesson 4.5 — Linear Programming: Solving and Interpreting (2.5 hrs)
**Algebra II Focus:** Graphing feasible regions, evaluating the objective function at corner points
**Activity:**
- Continue the furniture workshop example from Lesson 4.4.
  - Graph the feasible region. Find corner points: (0, 0), (60, 0), (0, 40), (24, 28) — this last point found by solving `2x + 3y = 120` and `x + 2y = 80` simultaneously.
  - Wait: check (24, 28): `2(24) + 3(28) = 48 + 84 = 132 > 120`. Recalculate. From `x + 2y = 80` → `x = 80 - 2y`. Substitute into `2(80 - 2y) + 3y = 120` → `160 - 4y + 3y = 120` → `-y = -40` → `y = 40`, `x = 0`. That gives (0, 40). Try another pair: `2x + 3y = 120` and `x + 2y = 80`. Multiply second by -2: `-2x - 4y = -160`. Add: `-y = -40` → `y = 40`, `x = 0`. So (0, 40) is the intersection. Corner points: (0, 0), (60, 0), (0, 40).
  - Evaluate P at each: P(0,0) = 0, P(60,0) = 1500, P(0,40) = 1600.
  - Maximum profit: $1,600 at (0, 40) — make 0 chairs and 40 tables.
- Desmos: Graph the feasible region with the objective function as a slider: `P = 25x + 40y`. Students drag the level curve `25x + 40y = k` across the feasible region to visually find the maximum.
- New problem: A bakery makes cakes ($12 profit) and pies ($8 profit). Constraints on oven time, ingredients, and labor. Students graph, find corners, evaluate, and interpret.
- RStudio visualization:
```r
# Linear programming visualization
library(ggplot2)

# Feasible region for: 2x + 3y <= 120, x + 2y <= 80, x >= 0, y >= 0
x <- seq(0, 70, length.out = 300)

# Boundary lines solved for y
y1 <- (120 - 2*x) / 3
y2 <- (80 - x) / 2

df <- data.frame(x = x, y1 = y1, y2 = y2)

ggplot(df, aes(x)) +
  geom_line(aes(y = y1), color = "blue") +
  geom_line(aes(y = y2), color = "red") +
  geom_ribbon(aes(ymin = 0, ymax = pmin(pmax(y1, 0), pmax(y2, 0))),
              fill = "lightgreen", alpha = 0.4) +
  geom_point(data = data.frame(x = c(0, 60, 0), y = c(0, 0, 40)),
             aes(x = x, y = y), size = 3, color = "black") +
  labs(title = "Feasible Region — Furniture Workshop",
       x = "Chairs (x)", y = "Tables (y)") +
  coord_cartesian(xlim = c(0, 70), ylim = c(0, 50)) +
  theme_minimal()
```
- Practice: 4 complete linear programming problems — set up, graph, solve, interpret.

**TEKS:** §111.40(c)(3)

#### Lesson 4.6 — Break-Even Analysis (1.8 hrs)
**Algebra II Focus:** Solving systems where revenue equals cost
**Activity:**
- Break-even point: The production level where total revenue equals total cost — no profit, no loss.
  - Cost function: `C(x) = fixed costs + variable cost per unit × x`. Example: `C(x) = 5000 + 12x`.
  - Revenue function: `R(x) = price per unit × x`. Example: `R(x) = 25x`.
  - Break-even: `R(x) = C(x)` → `25x = 5000 + 12x` → `13x = 5000` → `x ≈ 385 units`.
- Graphical interpretation: The cost and revenue lines cross at the break-even point. Left of it: loss. Right of it: profit.
- Connection to S400 Economics: Supply and demand equilibrium is the same idea — two functions intersecting.
- Desmos: Graph `C(x)` and `R(x)`. Identify the break-even point. Shade the profit region.
- Extended problem: A startup sells handmade candles online. Fixed costs: $2,400/month (rent, equipment). Variable cost: $6 per candle (wax, wick, packaging, shipping). Selling price: $18 per candle.
  - Break-even: `18x = 2400 + 6x` → `12x = 2400` → `x = 200 candles/month`.
  - Profit function: `P(x) = R(x) - C(x) = 12x - 2400`.
  - How many candles for $1,000 profit? `12x - 2400 = 1000` → `x ≈ 284`.
- Practice: 6 break-even problems from different business contexts (food truck, app developer, T-shirt company).

**TEKS:** §111.40(c)(3)

#### Lesson 4.7 — Quadratic-Linear Systems (2 hrs)
**Algebra II Focus:** Finding intersections of a parabola and a line
**Activity:**
- A quadratic-linear system has one quadratic equation and one linear equation. Geometrically: Where does a line intersect a parabola?
- Possible outcomes: 0 intersections (line misses the parabola), 1 intersection (line is tangent), 2 intersections (line crosses the parabola twice).
- Solving by substitution:
  - System: `y = x² - 4x + 3` and `y = 2x - 5`.
  - Set equal: `x² - 4x + 3 = 2x - 5` → `x² - 6x + 8 = 0` → `(x - 2)(x - 4) = 0` → `x = 2, x = 4`.
  - Points: (2, -1) and (4, 3).
- Using the discriminant to predict the number of solutions:
  - After substitution, you get a quadratic. The discriminant `b² - 4ac` tells you: positive → 2 solutions, zero → 1 solution (tangent), negative → 0 solutions.
- Desmos: Graph `y = x² - 4x + 3` and `y = 2x - 5`. Verify the intersection points. Use a slider to move the line up and down — watch solutions appear and disappear.
- RStudio: Solve and visualize:
```r
# Quadratic-linear system
curve(x^2 - 4*x + 3, from = -1, to = 6, ylab = "y", main = "Quadratic-Linear System")
abline(a = -5, b = 2, col = "red")

# Solve: x^2 - 6x + 8 = 0
roots <- polyroot(c(8, -6, 1))
cat("Intersection x-values:", Re(roots), "\n")
cat("Intersection points: (", Re(roots[1]), ",", 2*Re(roots[1]) - 5, ") and (",
    Re(roots[2]), ",", 2*Re(roots[2]) - 5, ")\n")
```
- Practice: 8 quadratic-linear systems. For each, predict the number of solutions using the discriminant, then solve.

**TEKS:** §111.40(c)(3), §111.40(c)(4)

#### Lesson 4.8 — Quadratic-Quadratic and Other Nonlinear Systems (2 hrs)
**Algebra II Focus:** Intersections of two parabolas, a parabola and a circle, and other nonlinear combinations
**Activity:**
- Quadratic-quadratic systems: Two quadratic equations. Where do two parabolas (or a parabola and a circle) intersect?
- Example 1 (two parabolas):
  - `y = x² + 1` and `y = -x² + 5`.
  - Set equal: `x² + 1 = -x² + 5` → `2x² = 4` → `x² = 2` → `x = ±√2`.
  - Points: (√2, 3) and (-√2, 3).
- Example 2 (parabola and circle):
  - `y = x²` and `x² + y² = 6`.
  - Substitute: `x² + (x²)² = 6` → `x⁴ + x² - 6 = 0`. Let `u = x²`: `u² + u - 6 = 0` → `(u + 3)(u - 2) = 0` → `u = 2` (reject `u = -3`). So `x² = 2`, `x = ±√2`, `y = 2`. Points: (√2, 2) and (-√2, 2).
- Systems with square root functions:
  - `y = √x` and `y = x - 2`.
  - Set equal: `√x = x - 2` → `x = (x-2)²` → `x = x² - 4x + 4` → `x² - 5x + 4 = 0` → `(x-1)(x-4) = 0`.
  - Check: x = 1: `√1 = 1` but `1 - 2 = -1`. Not equal. Extraneous. x = 4: `√4 = 2` and `4 - 2 = 2`. Valid. Only solution: (4, 2).
  - Critical point: Squaring both sides can introduce extraneous solutions. Always check.
- Desmos: Graph each system. Visually confirm solutions and extraneous solutions.
- Practice: 8 nonlinear systems (mix of quadratic-quadratic, circle-parabola, and square root-linear).

**TEKS:** §111.40(c)(3), §111.40(c)(4)

---

### Week 3: Applications and the Optimization Report (≈8.3 hours)

#### Lesson 4.9 — Real-World System Applications (2 hrs)
**Algebra II Focus:** Modeling real scenarios with systems
**Activity:**
- Application 1 — Investment allocation: An investor has $50,000 to split among three accounts earning 3%, 5%, and 7% annually. They want total annual interest of $2,800, and the amount in the safest account (3%) should be twice the amount in the riskiest (7%). Set up and solve the 3×3 system.
  - `x + y + z = 50000`, `0.03x + 0.05y + 0.07z = 2800`, `x = 2z`.
- Application 2 — Mixture problem: A chemist needs 100 mL of a 40% acid solution. They have 20% and 60% solutions. How much of each? `x + y = 100`, `0.20x + 0.60y = 40`.
- Application 3 — Supply and demand equilibrium: Supply: `p = 2q + 10`. Demand: `p = -3q + 60`. Find equilibrium: `2q + 10 = -3q + 60` → `q = 10`, `p = 30`.
- Application 4 — Projectile intersection: A ball is thrown upward from a 20-foot platform: `h = -16t² + 48t + 20`. A second ball is thrown upward from the ground: `h = -16t² + 64t`. When are they at the same height? `48t + 20 = 64t` → `t = 1.25 sec`, `h = 50 ft`.
- Students solve all four in pairs, then present solutions to the class.
- Practice: 4 additional application problems.

**TEKS:** §111.40(c)(3), §111.40(c)(4)

#### Lesson 4.10 — Systems in RStudio: Computation and Visualization (2 hrs)
**Algebra II Focus:** Using technology to solve and visualize systems
**Activity:**
- Part 1: Solving linear systems with `solve()`:
```r
# 3-variable investment problem
A <- matrix(c(1, 1, 1,
              0.03, 0.05, 0.07,
              1, 0, -2), nrow = 3, byrow = TRUE)
b <- c(50000, 2800, 0)
solution <- solve(A, b)
cat("3% account: $", solution[1],
    "\n5% account: $", solution[2],
    "\n7% account: $", solution[3], "\n")
```
- Part 2: Visualizing nonlinear systems:
```r
library(ggplot2)

# Quadratic-linear system
x <- seq(-2, 6, length.out = 500)
parabola <- x^2 - 4*x + 3
line <- 2*x - 5

df <- data.frame(x = x, parabola = parabola, line = line)

ggplot(df, aes(x)) +
  geom_line(aes(y = parabola), color = "blue", linewidth = 1) +
  geom_line(aes(y = line), color = "red", linewidth = 1) +
  geom_point(data = data.frame(x = c(2, 4), y = c(-1, 3)),
             aes(x = x, y = y), size = 3, color = "black") +
  labs(title = "Quadratic-Linear System",
       subtitle = "y = x^2 - 4x + 3 and y = 2x - 5",
       x = "x", y = "y") +
  theme_minimal()
```
- Part 3: Linear programming feasible region with labeled corner points:
```r
library(ggplot2)

# Bakery problem: maximize P = 12x + 8y
# subject to: 2x + y <= 60, x + y <= 40, x >= 0, y >= 0
corners <- data.frame(x = c(0, 0, 20, 30), y = c(0, 40, 20, 0))
corners$profit <- 12 * corners$x + 8 * corners$y

ggplot(corners, aes(x, y)) +
  geom_polygon(fill = "lightgreen", alpha = 0.5) +
  geom_point(size = 3) +
  geom_text(aes(label = paste0("(", x, ",", y, ")\nP=", profit)),
            vjust = -0.8, size = 3.5) +
  labs(title = "Bakery Optimization — Feasible Region",
       x = "Cakes (x)", y = "Pies (y)") +
  theme_minimal()
```
- Students replicate these examples, then modify parameters to explore different scenarios.

**TEKS:** §111.40(c)(3)

#### Lesson 4.11 — Optimization Report Workshop (2.5 hrs)
**Activity:**
- Students create an **Optimization Report** — a complete linear programming or system optimization analysis.
- Requirements:
  1. **Problem formulation:** Choose or create a real-world optimization problem. Suggestions: a small business production plan, a school cafeteria menu optimization, an event planning budget, a shipping/logistics problem.
  2. **Mathematical model:** Define decision variables, write the objective function, and list all constraints as inequalities.
  3. **Graphical solution:** Graph the feasible region (Desmos or RStudio). Label all boundary lines, shade the feasible region, and identify all corner points with coordinates.
  4. **Algebraic solution:** Find each corner point by solving the appropriate pairs of boundary equations.
  5. **Evaluation:** Evaluate the objective function at every corner point. State the optimal solution and its meaning in context.
  6. **Sensitivity discussion (1 paragraph):** What happens if one constraint changes? For example, if the budget increases by 10%, how does the optimal solution shift? Test at least one modified constraint and compare results.
  7. **Presentation:** Prepare a 1-page summary with graph, table of corner-point evaluations, and written interpretation.
- Workshop time: problem selection, model formulation, graphing, computation, writing.

#### Lesson 4.12 — Presentations & Unit 4 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5-6 students present their Optimization Reports (4 minutes each, showing their feasible region graph and optimal solution).
- Peer feedback: For each presentation, classmates identify whether the constraints are realistic and the solution is correctly computed.
- Unit checkpoint quiz: Two-variable and three-variable linear systems, systems of inequalities, linear programming setup, quadratic-linear system solving (25 minutes).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Systems & Optimization | Individual | 25 |
| Two-Variable Linear Systems Practice | Practice | 20 |
| Three-Variable Systems Practice | Practice | 20 |
| Systems of Inequalities Lab (Desmos) | Lab | 20 |
| Linear Programming Practice | Practice | 20 |
| Nonlinear Systems Practice | Practice | 20 |
| Break-Even Analysis Problems | Practice | 15 |
| RStudio Systems Lab | Lab | 15 |
| Optimization Report | Project | 45 |
| **Total** | | **200** |

## Key Vocabulary

system of equations, consistent, inconsistent, independent, dependent, substitution, elimination, three-variable system, back-substitution, linear inequality, boundary line, half-plane, feasible region, system of inequalities, linear programming, objective function, constraint, decision variable, corner point, corner-point theorem, optimization, maximize, minimize, break-even point, cost function, revenue function, profit function, quadratic-linear system, nonlinear system, quadratic-quadratic system, discriminant, tangent line, extraneous solution, square root function, intersection point, sensitivity analysis
