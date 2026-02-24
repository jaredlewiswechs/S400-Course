# Unit 5 — Coordinate Geometry & Transformations

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Coordinate Geometry & Transformations |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do architects design symmetry into buildings — and how does the coordinate plane turn geometry into computation?* |
| Geometry TEKS | §111.41(c)(2), (3), (5) |
| Tools | RStudio (sf), Desmos, GeoGebra, graph paper |
| Key Deliverable | Architectural Symmetry Analysis — students analyze the geometric transformations in a real or designed building, documenting reflections, rotations, and translations with coordinate proofs |

## Unit Narrative

The coordinate plane turns geometry into algebra. Every point has an address. Every line has an equation. Distance, midpoint, and slope become formulas. This unit brings together the algebraic skills from M100 and the geometric reasoning from M200 Units 1–4. Students prove geometric properties using coordinates — showing that the diagonals of a rectangle are congruent by computing their lengths, or that a quadrilateral is a parallelogram by showing opposite sides have equal slopes. Transformations — translations, reflections, rotations, and dilations — are the geometry of motion and design. Architectural symmetry (bilateral, rotational, translational) is the application context. Students analyze real buildings and decorative patterns, identifying the transformations that create their visual impact. RStudio's `sf` package connects to S500's mapping work — transformations applied to geographic shapes.

## Math Concepts

- Distance formula: `d = √((x₂-x₁)² + (y₂-y₁)²)` §111.41(c)(2)
- Midpoint formula: `M = ((x₁+x₂)/2, (y₁+y₂)/2)` §111.41(c)(2)
- Slope and its geometric meaning §111.41(c)(2)
- Equations of lines: parallel and perpendicular conditions §111.41(c)(2)
- Coordinate proofs §111.41(c)(5)
- Translations: `(x, y) → (x + a, y + b)` §111.41(c)(3)
- Reflections: over x-axis, y-axis, y = x, y = -x §111.41(c)(3)
- Rotations: 90°, 180°, 270° about the origin §111.41(c)(3)
- Dilations: `(x, y) → (kx, ky)` centered at origin §111.41(c)(3)
- Composition of transformations §111.41(c)(3)
- Symmetry: line symmetry, rotational symmetry §111.41(c)(3)
- Congruence and similarity via transformations §111.41(c)(3)

---

## Lesson Sequence

### Week 1: Coordinate Geometry Formulas and Proofs (≈8.3 hours)

#### Lesson 5.1 — Distance and Midpoint Formulas (2 hrs)
**Geometry Focus:** Computing distances and midpoints on the coordinate plane
**Activity:**
- Distance formula: `d = √((x₂-x₁)² + (y₂-y₁)²)`. This IS the Pythagorean theorem applied to the coordinate plane.
- Midpoint formula: `M = ((x₁+x₂)/2, (y₁+y₂)/2)`. The midpoint is the average of the coordinates.
- GeoGebra: Plot two points. Use the distance tool. Then compute the distance by hand. Compare.
- Practice: 10 distance problems, 10 midpoint problems.
- Application: Find the distance between two Houston landmarks given their coordinates. Find the midpoint of a property boundary.
- R lab: Write distance and midpoint functions (extending the M100 Unit 6 distance function):
```r
distance <- function(x1, y1, x2, y2) {
  sqrt((x2 - x1)^2 + (y2 - y1)^2)
}

midpoint <- function(x1, y1, x2, y2) {
  c((x1 + x2) / 2, (y1 + y2) / 2)
}

distance(1, 2, 4, 6)   # 5
midpoint(1, 2, 4, 6)    # 2.5, 4.0
```

**TEKS:** §111.41(c)(2)

#### Lesson 5.2 — Slope and Line Equations Review (1.5 hrs)
**Geometry Focus:** Slope as a geometric property, parallel and perpendicular slopes
**Activity:**
- Review from S400/M100: Slope = rise/run = `(y₂-y₁)/(x₂-x₁)`.
- Geometric meaning: Slope measures steepness and direction.
- Parallel lines: Same slope. Perpendicular lines: Slopes are negative reciprocals (`m₁ × m₂ = -1`).
- Practice: Given pairs of points, find slopes and determine if lines are parallel, perpendicular, or neither.
- Desmos: Graph lines with given slopes and verify relationships visually.
- Quick exercises: Write the equation of a line through a given point, parallel or perpendicular to a given line.

**TEKS:** §111.41(c)(2)

#### Lesson 5.3 — Coordinate Proofs: Setup and Strategy (2.5 hrs)
**Geometry Focus:** Proving geometric properties using coordinates
**Activity:**
- Strategy for coordinate proofs:
  1. Place the figure on the coordinate plane (choose convenient coordinates — often use the origin and axes).
  2. Use formulas (distance, midpoint, slope) to establish the property.
- Example 1: Prove that the diagonals of a rectangle are congruent.
  - Place the rectangle with vertices at A(0,0), B(a,0), C(a,b), D(0,b).
  - Diagonal AC: `d = √(a² + b²)`.
  - Diagonal BD: `d = √((a-0)² + (0-b)²) = √(a² + b²)`.
  - AC = BD. Proven.
- Example 2: Prove that the midpoint of the hypotenuse of a right triangle is equidistant from all three vertices.
  - Place the right angle at the origin: A(0,0), B(2a,0), C(0,2b). Midpoint of hypotenuse BC: M(a,b).
  - AM = √(a² + b²). BM = √((2a-a)² + (0-b)²) = √(a² + b²). CM = √((0-a)² + (2b-b)²) = √(a² + b²).
  - All three distances are equal. Proven.
- Students work through 3 guided coordinate proofs, then attempt 2 independently.

**TEKS:** §111.41(c)(2), §111.41(c)(5)

#### Lesson 5.4 — Classifying Quadrilaterals with Coordinates (2.3 hrs)
**Geometry Focus:** Using slopes and distances to classify quadrilaterals
**Activity:**
- Given four vertices, determine what type of quadrilateral is formed:
  - Parallelogram: Both pairs of opposite sides are parallel (equal slopes).
  - Rectangle: Parallelogram with consecutive sides perpendicular.
  - Rhombus: Parallelogram with all sides equal.
  - Square: Both rectangle and rhombus.
  - Trapezoid: Exactly one pair of parallel sides.
- Worked example: A(1,1), B(4,5), C(8,5), D(5,1).
  - Slope AB = (5-1)/(4-1) = 4/3. Slope CD = (1-5)/(5-8) = -4/-3 = 4/3. AB ∥ CD.
  - Slope BC = 0. Slope AD = 0. BC ∥ AD.
  - Both pairs parallel → parallelogram.
  - AB = √(9+16) = 5. BC = 4. Consecutive sides not equal, not perpendicular → parallelogram, not rectangle or rhombus.
- Practice: 6 quadrilateral classification problems.
- R lab: Given vertices, compute all slopes and distances, classify the quadrilateral:
```r
# Quadrilateral classifier
classify_quad <- function(A, B, C, D) {
  slope <- function(P, Q) (Q[2]-P[2]) / (Q[1]-P[1])
  dist <- function(P, Q) sqrt((Q[1]-P[1])^2 + (Q[2]-P[2])^2)

  cat("Slope AB:", slope(A,B), " Slope CD:", slope(C,D), "\n")
  cat("Slope BC:", slope(B,C), " Slope AD:", slope(A,D), "\n")
  cat("AB:", dist(A,B), " BC:", dist(B,C), "\n")
  cat("CD:", dist(C,D), " AD:", dist(A,D), "\n")
}

classify_quad(c(1,1), c(4,5), c(8,5), c(5,1))
```

**TEKS:** §111.41(c)(2), §111.41(c)(5)

---

### Week 2: Transformations (≈8.3 hours)

#### Lesson 5.5 — Translations (1.5 hrs)
**Geometry Focus:** Sliding figures without changing shape or orientation
**Activity:**
- Translation rule: `(x, y) → (x + a, y + b)`. Every point moves the same direction and distance.
- Properties preserved: size, shape, angle measures, side lengths, orientation.
- GeoGebra: Construct a triangle. Translate it by vector (3, -2). Measure all parts — everything is congruent.
- Desmos: Plot a triangle and its translated image.
- Architecture: Repeating patterns in building facades — each window is a translation of the one next to it.
- Practice: 8 problems — apply translations, find translation vectors, determine coordinates of translated images.

**TEKS:** §111.41(c)(3)

#### Lesson 5.6 — Reflections (2 hrs)
**Geometry Focus:** Mirror images over a line
**Activity:**
- Reflection rules:
  - Over x-axis: `(x, y) → (x, -y)`.
  - Over y-axis: `(x, y) → (-x, y)`.
  - Over y = x: `(x, y) → (y, x)`.
  - Over y = -x: `(x, y) → (-y, -x)`.
- Properties preserved: size, shape, angle measures, side lengths. Changed: orientation (mirror image).
- GeoGebra: Construct a triangle. Reflect over the x-axis, then y-axis, then y = x. Observe the results.
- Architecture: Bilateral symmetry in building facades — the left half is a reflection of the right half. The Taj Mahal, the US Capitol, most classical architecture.
- Line of symmetry: A figure has line symmetry if a reflection over that line maps it onto itself.
  - Rectangle: 2 lines of symmetry. Square: 4. Circle: infinite. Scalene triangle: 0.
- Practice: 10 problems — reflect figures, find lines of symmetry, determine reflection rules.

**TEKS:** §111.41(c)(3)

#### Lesson 5.7 — Rotations (2 hrs)
**Geometry Focus:** Turning figures about a center point
**Activity:**
- Rotation rules (about the origin):
  - 90° counterclockwise: `(x, y) → (-y, x)`.
  - 180°: `(x, y) → (-x, -y)`.
  - 270° counterclockwise (= 90° clockwise): `(x, y) → (y, -x)`.
- Properties preserved: size, shape, angle measures, side lengths, orientation.
- GeoGebra: Construct a triangle. Rotate by 90°, 180°, 270° about the origin. Observe.
- Rotational symmetry: A figure has rotational symmetry of order n if it maps onto itself n times during a full 360° rotation.
  - Square: order 4 (90°, 180°, 270°, 360°). Equilateral triangle: order 3. Circle: infinite.
- Architecture: Rotational symmetry in rose windows, rotundas, domed buildings. The Pentagon (order 5).
- Practice: 10 problems — rotate figures, identify rotational symmetry, determine rotation rules.

**TEKS:** §111.41(c)(3)

#### Lesson 5.8 — Dilations and Similarity Revisited (1.5 hrs)
**Geometry Focus:** Scaling figures from a center point
**Activity:**
- Dilation rule (center at origin): `(x, y) → (kx, ky)` where k is the scale factor.
  - k > 1: Enlargement. 0 < k < 1: Reduction. k = 1: No change.
- Properties preserved: shape, angle measures, proportionality. Changed: size (unless k = 1), distances multiplied by |k|.
- Dilation produces similar figures (not congruent, unless k = 1).
- Connection to Unit 4: Scale models are dilations. A scale factor of 1:200 means k = 1/200.
- GeoGebra: Construct a triangle. Dilate by scale factor 2, then 0.5, from the origin. Measure all parts.
- Practice: 8 problems — apply dilations, find scale factors, determine coordinates of dilated images.

**TEKS:** §111.41(c)(3)

#### Lesson 5.9 — Composition of Transformations (1.3 hrs)
**Geometry Focus:** Performing multiple transformations in sequence
**Activity:**
- A composition applies one transformation, then another to the result.
- Key results:
  - Two reflections over parallel lines = a translation.
  - Two reflections over intersecting lines = a rotation (angle = 2× the angle between the lines).
  - A glide reflection = translation + reflection.
- GeoGebra: Perform composition sequences and observe the results.
- Architecture: Wallpaper patterns and tessellations use compositions of transformations.
- Practice: 6 composition problems — apply a sequence of 2–3 transformations and determine the final coordinates.

**TEKS:** §111.41(c)(3)

---

### Week 3: Congruence/Similarity via Transformations and the Symmetry Project (≈8.3 hours)

#### Lesson 5.10 — Congruence and Similarity Through Transformations (2 hrs)
**Geometry Focus:** Defining congruence and similarity in terms of transformations
**Activity:**
- Modern definition:
  - Two figures are **congruent** if one can be mapped onto the other by a sequence of rigid motions (translations, reflections, rotations).
  - Two figures are **similar** if one can be mapped onto the other by a sequence of rigid motions AND a dilation.
- Students identify the transformation sequence that maps one figure onto another:
  1. Triangle A → Triangle B: "Reflect over the y-axis, then translate right 4."
  2. Small triangle → Large triangle: "Dilate by scale factor 3 from the origin."
  3. Triangle A → Triangle C: "Rotate 90° about the origin."
- GeoGebra: For each pair of congruent or similar triangles, find the transformation sequence.
- R lab using `sf`: Apply coordinate transformations to geometric shapes:
```r
library(sf)

# Create a triangle
triangle <- st_polygon(list(matrix(c(0,0, 2,0, 1,2, 0,0), ncol = 2, byrow = TRUE)))

# Reflect over x-axis (negate y)
reflected <- triangle * matrix(c(1,0, 0,-1), ncol = 2)

# Translate by (3, 1)
translated <- triangle + c(3, 1)

# Plot
plot(st_sfc(triangle, reflected, translated),
     col = c("blue", "red", "green"), main = "Transformations with sf")
```

**TEKS:** §111.41(c)(3), §111.41(c)(5)

#### Lesson 5.11 — Tessellations and Architectural Patterns (2 hrs)
**Geometry Focus:** Applying transformations to create repeating patterns
**Activity:**
- A tessellation is a pattern that covers the plane with no gaps and no overlaps.
- Regular tessellations: Only 3 regular polygons tessellate — equilateral triangles (60° × 6 = 360°), squares (90° × 4 = 360°), and regular hexagons (120° × 3 = 360°).
- Semi-regular tessellations: Combinations of regular polygons at each vertex.
- Students create a tessellation using GeoGebra:
  1. Start with a polygon.
  2. Apply translations, reflections, and/or rotations to tile the plane.
  3. Identify the transformation rules used.
- Architecture: Islamic geometric patterns, tiled floors, brick patterns, honeycombs.
- Art connection: M.C. Escher's tessellations used transformations to create interlocking animal shapes.
- Students design their own simple tessellation using one polygon and transformations.

**TEKS:** §111.41(c)(3)

#### Lesson 5.12 — Architectural Symmetry Analysis Workshop (2.5 hrs)
**Activity:**
- Students create an **Architectural Symmetry Analysis**:
  1. Choose a building or architectural element with visible symmetry (suggestions: a cathedral facade, a government building, a bridge, a Houston landmark, or a decorative pattern).
  2. Overlay a coordinate system on a photograph or diagram of the structure.
  3. Identify and document:
     - All lines of symmetry (reflections).
     - Any rotational symmetry (order and angle).
     - Any translational symmetry (repeating elements).
     - At least one specific transformation with coordinate rules (e.g., "The left window at (-3, 5) maps to the right window at (3, 5) by reflection over the y-axis").
  4. Classify at least 2 pairs of congruent shapes within the building and state the transformation sequence that maps one to the other.
  5. Include a coordinate proof showing one geometric property of the building (e.g., "The roof is an isosceles triangle because the two sloping sides have equal length").
  6. Write a 1-paragraph analysis: How does the architect use symmetry, and what effect does it create?
- Workshop time: image selection, coordinate overlay, analysis, writing.

#### Lesson 5.13 — Presentations & Unit 5 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5–6 students present their Architectural Symmetry Analysis (4 minutes each).
- Unit checkpoint quiz: Distance/midpoint formulas, coordinate proofs (setup), transformation rules, symmetry identification (25 minutes).

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Coordinate Geometry & Transformations | Individual | 25 |
| Distance & Midpoint Practice | Practice | 20 |
| Coordinate Proof Practice | Practice | 25 |
| Quadrilateral Classification Lab | Lab | 20 |
| GeoGebra Transformation Lab | Lab | 25 |
| Tessellation Design | Lab | 15 |
| Architectural Symmetry Analysis | Project | 50 |
| Warm-ups & Daily Work | Participation | 20 |
| **Total** | | **200** |

## Key Vocabulary

coordinate plane, distance formula, midpoint formula, slope, parallel, perpendicular, negative reciprocal, coordinate proof, transformation, pre-image, image, rigid motion, translation, reflection, rotation, dilation, scale factor, composition, line of symmetry, bilateral symmetry, rotational symmetry, order of symmetry, tessellation, congruence (via transformations), similarity (via transformations), glide reflection, `sf` package
