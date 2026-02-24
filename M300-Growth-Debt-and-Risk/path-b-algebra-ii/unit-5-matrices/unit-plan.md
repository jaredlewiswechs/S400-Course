# Unit 5 — Matrices

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Matrices |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you organize and solve problems with dozens of variables — and what does it mean to compute with entire arrays of numbers at once?* |
| Algebra II TEKS | §111.40(c)(3), (7) |
| Tools | RStudio, spreadsheets (Google Sheets / Excel), Desmos, graphing calculators |
| Key Deliverable | Matrix Applications Portfolio — students solve systems using matrices and apply matrix operations to a real-world context (network analysis, encoding/decoding, or economic modeling) |

## Unit Narrative

A matrix is a rectangular array of numbers — and it is one of the most powerful mathematical structures in modern science, engineering, and data analysis. When Unit 4 solved a 3×3 system by hand, the work was tedious and error-prone. Matrices systematize that work: the coefficient matrix captures the structure of the system, and matrix inversion or row reduction produces the solution mechanically. But matrices are far more than a system-solving shortcut. They encode transformations — rotations, reflections, and scaling of geometric objects (connecting to M200 coordinate geometry). They model networks — traffic flow, communication links, supply chains. They underpin computer graphics, machine learning, and economic input-output analysis. This unit builds matrix fluency from the ground up: notation, dimensions, arithmetic (addition, subtraction, scalar multiplication, matrix multiplication), determinants, inverses, and the application of `A⁻¹b` to solve systems. Cramer's Rule provides an elegant determinant-based alternative. Throughout, RStudio handles the computation — students learn to think in matrices and let the computer do the arithmetic.

The pedagogical arc moves from concrete to abstract and back to applied. Students begin with the notation and basic operations, building intuition about what it means to add matrices or multiply a matrix by a scalar. Matrix multiplication — the non-obvious operation where the number of columns in the first matrix must equal the number of rows in the second — is developed carefully through the row-by-column dot product. Determinants are introduced as a single number that captures essential information about a matrix (invertibility, area scaling). Inverse matrices solve systems elegantly. The portfolio project asks students to choose a real-world application and demonstrate matrix methods in that context — ensuring the mathematics never floats free of meaning.

## Math Concepts

- Matrix notation: dimensions (m × n), entries, rows, columns §111.40(c)(7)
- Matrix addition and subtraction (same dimensions required) §111.40(c)(7)
- Scalar multiplication §111.40(c)(7)
- Matrix multiplication: row-by-column dot product §111.40(c)(7)
- Identity matrix and its properties §111.40(c)(7)
- Determinant of a 2×2 matrix: `ad - bc` §111.40(c)(7)
- Determinant of a 3×3 matrix: expansion by minors §111.40(c)(7)
- Inverse of a 2×2 matrix: `(1/det) × adjugate` §111.40(c)(7)
- Solving systems using inverse matrices: `x = A⁻¹b` §111.40(c)(3), (7)
- Cramer's Rule for 2×2 and 3×3 systems §111.40(c)(3), (7)
- Matrix applications: transformations, encoding/decoding, networks §111.40(c)(7)

---

## Lesson Sequence

### Week 1: Matrix Notation and Arithmetic (≈8.3 hours)

#### Lesson 5.1 — Matrix Notation, Dimensions, and Organization (1.5 hrs)
**Algebra II Focus:** Reading and writing matrices, understanding dimensions
**Activity:**
- Motivation: A school tracks test scores for 4 students across 3 subjects. Rather than 12 separate variables, organize them into a 4×3 matrix — 4 rows (students), 3 columns (subjects).
- Notation: A matrix is written with brackets. Dimensions are rows × columns (m × n). Entry `a_{ij}` is in row i, column j.
  - A 3×2 matrix has 3 rows and 2 columns.
  - A 1×n matrix is a row vector. An m×1 matrix is a column vector.
- Examples of real-world matrices:
  - Spreadsheet data: each row is a record, each column is a field.
  - A system of equations: the coefficient matrix. `2x + 3y = 7` and `x - y = 1` becomes `A = [[2, 3], [1, -1]]`, `b = [[7], [1]]`.
  - A network adjacency matrix: rows and columns are nodes, entries indicate connections.
- Practice: Given data tables, write the corresponding matrix and state its dimensions. Given matrices, identify specific entries.
- Connection to Unit 4: Rewrite 3 systems from Unit 4 in matrix form `Ax = b`.

**TEKS:** §111.40(c)(7)

#### Lesson 5.2 — Matrix Addition, Subtraction, and Scalar Multiplication (2 hrs)
**Algebra II Focus:** Performing basic matrix arithmetic
**Activity:**
- **Addition/Subtraction:** Add (or subtract) corresponding entries. Matrices must have the same dimensions.
  - `[[1, 2], [3, 4]] + [[5, 6], [7, 8]] = [[6, 8], [10, 12]]`.
  - You cannot add a 2×3 matrix to a 3×2 matrix — dimensions don't match.
- **Scalar multiplication:** Multiply every entry by the scalar.
  - `3 × [[1, 2], [3, 4]] = [[3, 6], [9, 12]]`.
- Properties:
  - Commutative: `A + B = B + A`.
  - Associative: `(A + B) + C = A + (B + C)`.
  - Distributive: `k(A + B) = kA + kB`.
- Application — weighted averages: A teacher weights homework at 0.3 and tests at 0.7. Student homework scores: `H = [[85], [90], [78]]`. Test scores: `T = [[92], [88], [95]]`. Final: `0.3H + 0.7T = [[0.3(85)+0.7(92)], [0.3(90)+0.7(88)], [0.3(78)+0.7(95)]] = [[89.9], [88.6], [89.9]]`.
- Spreadsheet activity: Enter two matrices in Google Sheets. Use formulas to compute the sum, difference, and scalar multiples. Verify by hand.
- Practice: 12 problems — addition, subtraction, scalar multiplication, and combination operations.

**TEKS:** §111.40(c)(7)

#### Lesson 5.3 — Matrix Multiplication: The Row-Column Rule (2.5 hrs)
**Algebra II Focus:** Multiplying matrices using the dot product of rows and columns
**Activity:**
- Matrix multiplication is NOT entry-by-entry. It uses the dot product of rows from the first matrix with columns from the second.
- Dimension rule: An (m × n) matrix times an (n × p) matrix gives an (m × p) matrix. The inner dimensions must match. The outer dimensions give the result dimensions.
  - (2×3) times (3×4) = (2×4). Valid.
  - (2×3) times (2×3) = undefined. Inner dimensions (3 and 2) don't match.
- Procedure: Entry `c_{ij}` of the product C = AB is the dot product of row i of A and column j of B.
  - `c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + ... + a_{in}b_{nj}`.
- Worked example:
  ```
  A = [[1, 2, 3],    B = [[7, 10],
       [4, 5, 6]]         [8, 11],
                           [9, 12]]

  AB = [[(1)(7)+(2)(8)+(3)(9), (1)(10)+(2)(11)+(3)(12)],
        [(4)(7)+(5)(8)+(6)(9), (4)(10)+(5)(11)+(6)(12)]]
     = [[50, 68],
        [122, 167]]
  ```
- Key property: Matrix multiplication is NOT commutative. In general, `AB ≠ BA` (and `BA` may not even be defined).
- Demonstration: Compute `AB` and `BA` for two 2×2 matrices. Show they produce different results.
- **Identity matrix:** The n×n identity matrix `I` has 1s on the diagonal and 0s elsewhere. `AI = IA = A` for any compatible matrix A.
  - `I₂ = [[1, 0], [0, 1]]`. `I₃ = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]`.
- RStudio:
```r
A <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 2, byrow = TRUE)
B <- matrix(c(7, 10, 8, 11, 9, 12), nrow = 3, byrow = TRUE)
AB <- A %*% B
cat("A (2x3):\n"); print(A)
cat("B (3x2):\n"); print(B)
cat("AB (2x2):\n"); print(AB)

# Verify non-commutativity with square matrices
P <- matrix(c(1, 2, 3, 4), nrow = 2)
Q <- matrix(c(5, 6, 7, 8), nrow = 2)
cat("PQ:\n"); print(P %*% Q)
cat("QP:\n"); print(Q %*% P)
cat("PQ equals QP?", all(P %*% Q == Q %*% P), "\n")
```
- Practice: 10 matrix multiplication problems (including identifying when multiplication is undefined).

**TEKS:** §111.40(c)(7)

#### Lesson 5.4 — Matrix Multiplication Applications (2.3 hrs)
**Algebra II Focus:** Using matrix multiplication to model real scenarios
**Activity:**
- Application 1 — Store inventory and pricing:
  - A store has 3 locations. Inventory matrix (3×2): rows = locations, columns = products (shirts, pants).
    ```
    Inventory = [[50, 30],
                 [40, 45],
                 [60, 25]]
    ```
  - Price matrix (2×1): `Price = [[20], [35]]` (shirt costs $20, pants cost $35).
  - Revenue per location: `Inventory × Price = [[50(20)+30(35)], [40(20)+45(35)], [60(20)+25(35)]] = [[2050], [2375], [2075]]`.
- Application 2 — Network paths:
  - An adjacency matrix A for a 3-node network: `a_{ij} = 1` if there is a direct path from node i to node j, 0 otherwise. `A²` gives the number of 2-step paths between nodes.
  ```
  A = [[0, 1, 1],
       [1, 0, 1],
       [0, 1, 0]]
  ```
  - Compute `A²` by hand and interpret: entry (1,3) of `A²` tells you how many 2-step paths go from node 1 to node 3.
- Application 3 — Geometric transformations (connection to M200 Unit 5):
  - Rotation by 90° counterclockwise: `R = [[0, -1], [1, 0]]`. Apply to point (3, 1): `R × [[3], [1]] = [[-1], [3]]`.
  - Desmos: Plot original and transformed points. Verify the rotation visually.
- RStudio: Students implement each application, multiplying matrices and interpreting results.
- Practice: 6 application problems.

**TEKS:** §111.40(c)(7)

---

### Week 2: Determinants, Inverses, and System Solving (≈8.3 hours)

#### Lesson 5.5 — Determinants of 2×2 Matrices (1.5 hrs)
**Algebra II Focus:** Computing and interpreting 2×2 determinants
**Activity:**
- The determinant of a 2×2 matrix `A = [[a, b], [c, d]]` is `det(A) = ad - bc`.
- Notation: `det(A)` or `|A|`.
- Geometric interpretation: The absolute value of the determinant gives the area of the parallelogram formed by the column vectors. If `det(A) = 0`, the columns are parallel (linearly dependent) and the matrix is singular (not invertible).
- Connection to systems: If the coefficient matrix has `det = 0`, the system has either no solution or infinitely many solutions.
- Practice: Compute determinants for 10 matrices. For each, state whether the matrix is invertible.
- Quick application: A parallelogram has vertices at (0,0), (3,1), (1,4), (4,5). Using the column vectors (3,1) and (1,4): `det = 3(4) - 1(1) = 11`. Area = 11 square units.
- Desmos: Plot the parallelogram. Verify the area using the determinant.

**TEKS:** §111.40(c)(7)

#### Lesson 5.6 — Determinants of 3×3 Matrices (2 hrs)
**Algebra II Focus:** Computing 3×3 determinants by expansion along a row
**Activity:**
- Method: Expansion by minors along the first row (cofactor expansion).
  ```
  A = [[a, b, c],
       [d, e, f],
       [g, h, i]]

  det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
  ```
- The pattern of signs alternates: `+ - + - ...` starting from the top-left.
- Worked example:
  ```
  A = [[2, 1, 3],
       [0, 4, 1],
       [5, 2, 1]]

  det(A) = 2(4·1 - 1·2) - 1(0·1 - 1·5) + 3(0·2 - 4·5)
         = 2(2) - 1(-5) + 3(-20)
         = 4 + 5 - 60 = -51
  ```
- Alternative: The "diagonal" method (Sarrus' Rule) — copy the first two columns to the right and sum the products of the three downward diagonals minus the three upward diagonals. Only works for 3×3.
- RStudio: Verify determinants computationally:
```r
A <- matrix(c(2, 1, 3,
              0, 4, 1,
              5, 2, 1), nrow = 3, byrow = TRUE)
cat("det(A) =", det(A), "\n")  # Should be -51
```
- Practice: 8 determinant problems (3×3). Include 2 where `det = 0` and students must recognize the system is dependent or inconsistent.

**TEKS:** §111.40(c)(7)

#### Lesson 5.7 — Inverse of a 2×2 Matrix (2 hrs)
**Algebra II Focus:** Finding and using the inverse of a 2×2 matrix
**Activity:**
- The inverse of `A = [[a, b], [c, d]]` is:
  ```
  A⁻¹ = (1/det(A)) × [[d, -b], [-c, a]]
  ```
  - Swap the diagonal entries, negate the off-diagonal entries, divide by the determinant.
- Requirement: `det(A) ≠ 0`. If `det(A) = 0`, the matrix has no inverse (it is singular).
- Verification: `A × A⁻¹ = I` and `A⁻¹ × A = I`.
- Worked example:
  ```
  A = [[3, 1], [5, 2]]
  det(A) = 3(2) - 1(5) = 1
  A⁻¹ = [[2, -1], [-5, 3]]

  Check: A × A⁻¹ = [[3(2)+1(-5), 3(-1)+1(3)], [5(2)+2(-5), 5(-1)+2(3)]]
       = [[1, 0], [0, 1]] ✓
  ```
- Application to solving systems: If `Ax = b`, then `x = A⁻¹b`.
  - System: `3x + y = 7`, `5x + 2y = 13`.
  - `A = [[3, 1], [5, 2]]`, `b = [[7], [13]]`.
  - `x = A⁻¹b = [[2, -1], [-5, 3]] × [[7], [13]] = [[14-13], [-35+39]] = [[1], [4]]`.
  - Solution: x = 1, y = 4. Verify: `3(1) + 4 = 7` ✓, `5(1) + 2(4) = 13` ✓.
- Practice: 8 problems — find the inverse, verify, and use it to solve a system.

**TEKS:** §111.40(c)(3), §111.40(c)(7)

#### Lesson 5.8 — Solving Systems with Inverse Matrices: Ax = b (2.8 hrs)
**Algebra II Focus:** Extending the inverse matrix method to 3×3 systems, using technology
**Activity:**
- For 3×3 systems, finding the inverse by hand is impractical. Use technology (RStudio, graphing calculator).
- Procedure:
  1. Write the system in matrix form: `Ax = b`.
  2. Compute `A⁻¹` using technology.
  3. Compute `x = A⁻¹b`.
- Worked example (from Unit 4):
  ```
  x + 2y + z = 14
  3x - y + 2z = 11
  2x + y - z = 5
  ```
- RStudio:
```r
A <- matrix(c(1, 2, 1,
              3, -1, 2,
              2, 1, -1), nrow = 3, byrow = TRUE)
b <- c(14, 11, 5)

# Check if invertible
cat("det(A) =", det(A), "\n")

# Solve using inverse
A_inv <- solve(A)
cat("A inverse:\n"); print(round(A_inv, 4))

x <- A_inv %*% b
cat("Solution:\n"); print(x)

# Verify
cat("Check Ax = b:\n"); print(A %*% x)
```
- When does the method fail? When `det(A) = 0` — the system has no unique solution. Students test a system with dependent equations and observe the error from `solve()`.
- Graphing calculator: Students enter `[A]` and `[B]`, compute `[A]⁻¹ × [B]` on TI-84.
- Comparison: Students solve the same 3×3 system three ways — elimination (from Unit 4), inverse matrix, and Cramer's Rule (next lesson). Compare efficiency.
- Practice: 6 systems — solve using `A⁻¹b` with RStudio or graphing calculator.

**TEKS:** §111.40(c)(3), §111.40(c)(7)

---

### Week 3: Cramer's Rule, Applications, and Portfolio (≈8.3 hours)

#### Lesson 5.9 — Cramer's Rule (2 hrs)
**Algebra II Focus:** Using determinants to solve systems via Cramer's Rule
**Activity:**
- Cramer's Rule for a 2×2 system `ax + by = e`, `cx + dy = f`:
  ```
  D = det([[a, b], [c, d]])
  x = det([[e, b], [f, d]]) / D
  y = det([[a, e], [c, f]]) / D
  ```
  - Replace the column of the variable you're solving for with the constants column. Divide by the system determinant.
- Worked example:
  ```
  2x + 3y = 8
  x - y = 1

  D = det([[2, 3], [1, -1]]) = -2 - 3 = -5
  x = det([[8, 3], [1, -1]]) / (-5) = (-8-3)/(-5) = -11/(-5) = 11/5
  y = det([[2, 8], [1, 1]]) / (-5) = (2-8)/(-5) = -6/(-5) = 6/5
  ```
  - Verify: `2(11/5) + 3(6/5) = 22/5 + 18/5 = 40/5 = 8` ✓.
- Cramer's Rule for 3×3: Same idea, but with 3×3 determinants. Replace each column in turn.
- When does Cramer's Rule fail? When `D = 0` — the system has no unique solution.
- RStudio implementation:
```r
cramers_rule_2x2 <- function(a1, b1, c1, a2, b2, c2) {
  D  <- a1*b2 - a2*b1
  Dx <- c1*b2 - c2*b1
  Dy <- a1*c2 - a2*c1
  if (D == 0) {
    cat("D = 0: No unique solution (system is dependent or inconsistent)\n")
  } else {
    cat("x =", Dx/D, "\ny =", Dy/D, "\n")
  }
}

# 2x + 3y = 8, x - y = 1
cramers_rule_2x2(2, 3, 8, 1, -1, 1)
```
- Practice: 8 problems — 4 using 2×2 Cramer's Rule, 4 using 3×3 (with RStudio for computation).

**TEKS:** §111.40(c)(3), §111.40(c)(7)

#### Lesson 5.10 — Matrix Applications: Transformations and Encoding (2 hrs)
**Algebra II Focus:** Applying matrices to geometric transformations and simple encoding
**Activity:**
- Part 1 — Geometric transformations as matrix multiplication (connecting to M200 Unit 5):
  - Reflection over y-axis: `[[-1, 0], [0, 1]]`. Apply to triangle with vertices (1,2), (3,1), (2,4).
  - Rotation 90° CCW: `[[0, -1], [1, 0]]`.
  - Scaling by factor 2: `[[2, 0], [0, 2]]`.
  - Composition: Apply rotation THEN reflection = multiply the matrices in reverse order: `(Reflection)(Rotation)`.
- Desmos: Plot original triangle and transformed triangle. Verify each transformation visually.
- Part 2 — Simple encoding/decoding with matrices:
  - Assign numbers to letters: A=1, B=2, ..., Z=26, space=0.
  - Encoding matrix (2×2): `E = [[3, 1], [2, 1]]`. Group the message into pairs of numbers. Multiply each pair by E to encode.
  - Decoding: Use `E⁻¹` to decode.
  - Example: Encode "HI" → H=8, I=9 → `[[3,1],[2,1]] × [[8],[9]] = [[33],[25]]`. Decode: `E⁻¹ × [[33],[25]] = [[1,-1],[-2,3]] × [[33],[25]] = [[8],[9]]` → HI.
- RStudio:
```r
# Encoding/decoding
E <- matrix(c(3, 1, 2, 1), nrow = 2, byrow = TRUE)
E_inv <- solve(E)

# Encode "HI" (H=8, I=9)
message <- c(8, 9)
encoded <- E %*% message
cat("Encoded:", encoded, "\n")

# Decode
decoded <- E_inv %*% encoded
cat("Decoded:", decoded, "\n")
```
- Practice: Students encode a short word, exchange with a partner (giving only the encoding matrix), and decode each other's messages.

**TEKS:** §111.40(c)(7)

#### Lesson 5.11 — Matrix Applications: Networks and Economic Modeling (2 hrs)
**Algebra II Focus:** Using matrices to analyze networks and economic input-output models
**Activity:**
- Part 1 — Network analysis:
  - A city has 4 intersections connected by one-way streets. The adjacency matrix A shows which intersections connect directly: `a_{ij} = 1` if there is a direct road from intersection i to j.
  ```
  A = [[0, 1, 0, 1],
       [0, 0, 1, 0],
       [1, 0, 0, 1],
       [0, 1, 0, 0]]
  ```
  - `A²` gives the number of 2-step routes. `A³` gives 3-step routes.
  - Question: How many 2-step routes go from intersection 1 to intersection 3? Look at entry (1,3) of `A²`.
- Part 2 — Economic input-output (simplified Leontief model):
  - Two industries: agriculture (A) and manufacturing (M). Each uses some of the other's output as input.
  - Consumption matrix: `C = [[0.2, 0.3], [0.4, 0.1]]` — agriculture uses 20% of its own output and 30% of manufacturing's output; manufacturing uses 40% of agriculture's output and 10% of its own.
  - If external demand is `d = [[10], [15]]` (in millions), total production `x` satisfies `x = Cx + d` → `(I - C)x = d` → `x = (I - C)⁻¹d`.
- RStudio:
```r
# Network analysis
A <- matrix(c(0,1,0,1, 0,0,1,0, 1,0,0,1, 0,1,0,0), nrow = 4, byrow = TRUE)
A2 <- A %*% A
cat("2-step routes:\n"); print(A2)
cat("2-step routes from 1 to 3:", A2[1,3], "\n")

# Leontief model
C <- matrix(c(0.2, 0.3, 0.4, 0.1), nrow = 2, byrow = TRUE)
I <- diag(2)
d <- c(10, 15)
x <- solve(I - C, d)
cat("Total production needed:\n")
cat("Agriculture:", round(x[1], 2), "million\n")
cat("Manufacturing:", round(x[2], 2), "million\n")
```
- Discussion: How do businesses and governments use these models? What happens when demand increases?
- Practice: 4 network and economic modeling problems.

**TEKS:** §111.40(c)(7)

#### Lesson 5.12 — Matrix Applications Portfolio Workshop (2.5 hrs)
**Activity:**
- Students create a **Matrix Applications Portfolio** demonstrating matrix methods in a real-world context.
- Requirements:
  1. **System solving (required):** Solve at least one 2×2 and one 3×3 system using the inverse matrix method (`x = A⁻¹b`). Show the setup, computation (RStudio output), and verification.
  2. **Cramer's Rule (required):** Solve at least one system using Cramer's Rule. Show all determinant calculations.
  3. **Application section (choose one):**
     - **Network analysis:** Model a real or realistic network (school hallways, city streets, social media connections). Build the adjacency matrix, compute `A²` and `A³`, interpret the results.
     - **Encoding/Decoding:** Create an encoding matrix, encode a message of at least 10 characters, demonstrate decoding with the inverse matrix.
     - **Economic modeling:** Set up a simplified input-output model for 2-3 industries. Compute the production needed to meet a given demand vector.
     - **Geometric transformations:** Apply at least 3 different transformation matrices to a shape. Show the original and all transformed versions in Desmos or RStudio. Include a composition of two transformations.
  4. **Reflection (1 paragraph):** Why are matrices useful beyond solving systems? What surprised you about this unit?
  5. **Visuals:** At least 2 — RStudio output, Desmos graph, spreadsheet screenshot, or hand-drawn network diagram.
- Workshop time: topic selection, computation, visualization, writing.

#### Lesson 5.13 — Presentations & Unit 5 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5-6 students present their Matrix Applications Portfolio (4 minutes each, highlighting their chosen application).
- Peer feedback: Classmates evaluate whether matrix methods were applied correctly and whether the real-world interpretation makes sense.
- Unit checkpoint quiz: Matrix arithmetic (addition, scalar multiplication, multiplication), determinants (2×2 and 3×3), inverse of a 2×2 matrix, solving a 2×2 system with `A⁻¹b`, Cramer's Rule for a 2×2 system (25 minutes).

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Matrices & Determinants | Individual | 25 |
| Matrix Arithmetic Practice | Practice | 20 |
| Matrix Multiplication Practice | Practice | 20 |
| Determinants Practice (2×2 and 3×3) | Practice | 20 |
| Inverse Matrix & System Solving Practice | Practice | 20 |
| Cramer's Rule Practice | Practice | 15 |
| RStudio Matrix Operations Lab | Lab | 20 |
| Matrix Applications Portfolio | Project | 50 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

matrix, entry, element, row, column, dimensions, square matrix, row vector, column vector, scalar, scalar multiplication, matrix addition, matrix subtraction, matrix multiplication, dot product, commutative, non-commutative, identity matrix, zero matrix, determinant, minor, cofactor, cofactor expansion, Sarrus' Rule, singular matrix, invertible matrix, inverse matrix, adjugate, Cramer's Rule, coefficient matrix, augmented matrix, system of equations, `Ax = b`, adjacency matrix, network, transformation matrix, encoding matrix, Leontief model, input-output analysis, `solve()` function
