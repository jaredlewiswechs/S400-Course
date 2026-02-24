# Unit 4 — Similarity, Right Triangles & Trigonometry

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Similarity, Right Triangles & Trigonometry |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you measure what you can't reach — and how do scale, proportion, and trigonometry make it possible?* |
| Geometry TEKS | §111.41(c)(7), (8), (9), (13) |
| Tools | GeoGebra, Desmos, clinometer (DIY or app), measuring tape, graphing calculators |
| Key Deliverable | Land Survey Report — students use trigonometry and similar triangles to survey a section of their school campus, calculating heights and distances they cannot directly measure |

## Unit Narrative

Similar figures are the geometry of scale. Architects build scale models. Cartographers draw maps. Engineers test prototypes. In every case, the shape is preserved but the size changes — and the mathematics of similarity (proportional reasoning) governs the relationship. This unit begins with similar polygons and the criteria for triangle similarity (AA, SAS~, SSS~). It then moves to the crown jewel of applied geometry: right-triangle trigonometry. Sine, cosine, and tangent allow students to find any side or angle of a right triangle given minimal information — exactly the problem surveyors face. Students build clinometers, measure angles of elevation and depression, and compute heights of buildings and trees they can't reach directly. The Pythagorean Theorem (proved in multiple ways) is the foundation. Special right triangles (30-60-90 and 45-45-90) provide exact values. By the end, students are functioning as land surveyors — measuring, calculating, and mapping real spaces.

## Math Concepts

- Similar figures: same shape, different size §111.41(c)(7)
- Scale factor and proportional reasoning §111.41(c)(7)
- Triangle similarity criteria: AA, SAS~, SSS~ §111.41(c)(7)
- Pythagorean Theorem and its converse §111.41(c)(8)
- Special right triangles: 45-45-90 and 30-60-90 §111.41(c)(8)
- Trigonometric ratios: sine, cosine, tangent §111.41(c)(8)
- Solving right triangles §111.41(c)(9)
- Angle of elevation and angle of depression §111.41(c)(9)
- Applications of trigonometry to surveying, architecture, and navigation §111.41(c)(9)
- Geometric probability (area-based) §111.41(c)(13)

---

## Lesson Sequence

### Week 1: Similarity and Proportional Reasoning (≈8.3 hours)

#### Lesson 4.1 — Scale Models and Similar Figures (2 hrs)
**Geometry Focus:** Definition of similar figures, scale factor
**Activity:**
- Warm-up: Show a floor plan of a building. The plan says "Scale: 1 inch = 4 feet." A room is 3 inches wide on the plan. How wide is the actual room? (12 feet.)
- Definition: Two figures are similar if they have the same shape — all corresponding angles are congruent and all corresponding sides are proportional.
- Scale factor: The ratio of corresponding side lengths. If the scale factor from figure A to figure B is 3, every side of B is 3 times the corresponding side of A.
- Notation: △ABC ~ △DEF (~ means "is similar to").
- Examples:
  - All circles are similar (any circle can be scaled to any other).
  - All squares are similar.
  - Not all rectangles are similar (a 2×3 rectangle is not similar to a 2×5 rectangle).
- GeoGebra: Construct a triangle. Use the dilation tool to create a similar triangle with scale factor 2. Measure all sides and angles. Verify proportionality and angle congruence.
- Practice: 10 problems involving scale factor, finding missing sides of similar figures, and real-world scale problems.

**TEKS:** §111.41(c)(7)

#### Lesson 4.2 — Triangle Similarity Criteria: AA (2 hrs)
**Geometry Focus:** Angle-Angle similarity
**Activity:**
- **AA (Angle-Angle):** If two angles of one triangle are congruent to two angles of another, the triangles are similar.
  - Why only two angles? The third angle is determined (angle sum = 180°).
  - This is the most commonly used similarity criterion.
- GeoGebra: Construct two triangles with the same two angles but different sizes. Measure all sides. Verify that corresponding sides are proportional.
- Example: A tree casts a shadow 30 feet long. A 5-foot pole casts a shadow 3 feet long at the same time. The sun creates the same angle of elevation for both. The triangles formed are similar by AA. Height of tree: `5/3 = h/30` → `h = 50` feet.
- Architecture: Blueprint reading relies on AA similarity — the angles in the plan match the angles in the building.
- Practice: 10 problems — identify AA similarity, set up proportions, solve for missing sides.

**TEKS:** §111.41(c)(7)

#### Lesson 4.3 — SSS~ and SAS~ Similarity (1.5 hrs)
**Geometry Focus:** SSS and SAS criteria for triangle similarity
**Activity:**
- **SSS~ (Side-Side-Side Similarity):** If all three pairs of corresponding sides are proportional (same ratio), the triangles are similar.
- **SAS~ (Side-Angle-Side Similarity):** If two pairs of corresponding sides are proportional AND the included angles are congruent, the triangles are similar.
- Note: These parallel the congruence criteria but use proportionality instead of equality for sides.
- Practice: 12 problems — determine which similarity criterion (if any) applies, and find missing measurements.
- GeoGebra: Construct triangles meeting SSS~ and SAS~ conditions. Verify similarity by measuring all parts.

**TEKS:** §111.41(c)(7)

#### Lesson 4.4 — Proportional Reasoning in Similar Figures (2.8 hrs)
**Geometry Focus:** Setting up and solving proportions, applications
**Activity:**
- Cross-multiplication method for solving proportions: `a/b = c/d` → `ad = bc`.
- Extended problems:
  1. A map scale is 1:50,000. Two cities are 8.4 cm apart on the map. What is the actual distance? `8.4 × 50,000 = 420,000 cm = 4.2 km`.
  2. A model building is built at 1:200 scale. The actual building is 80 meters tall. How tall is the model? `80/200 = 0.4 m = 40 cm`.
  3. Two similar triangles have a scale factor of 3:5. The smaller triangle has perimeter 24 cm. What is the perimeter of the larger? `24 × 5/3 = 40 cm`.
  4. Similar figures and area: If the scale factor is k, the area ratio is k². A room on a 1:50 floor plan measures 2 cm × 3 cm. Actual area = `(2×50)(3×50) = 100 × 150 = 15,000 cm² = 1.5 m²`.
- R lab: Calculate actual dimensions from a set of scale drawings. Create a summary table comparing model and actual measurements.
- Practice: 12 proportional reasoning problems mixing maps, models, and similar figures.

**TEKS:** §111.41(c)(7)

---

### Week 2: Right Triangles and Trigonometry (≈8.3 hours)

#### Lesson 4.5 — The Pythagorean Theorem (2 hrs)
**Geometry Focus:** Statement, proof, and applications of a² + b² = c²
**Activity:**
- Statement: In a right triangle, the square of the hypotenuse equals the sum of the squares of the legs: `a² + b² = c²`.
- Proof 1 (geometric): Arrange four copies of a right triangle (legs a, b, hypotenuse c) inside a large square of side (a+b). The inner uncovered area is c². The four triangles have total area 2ab. The large square has area (a+b)². So: `(a+b)² - 2ab = c²` → `a² + 2ab + b² - 2ab = c²` → `a² + b² = c²`.
- GeoGebra: Build the proof visually. Drag the triangle — the relationship holds for all right triangles.
- Converse: If `a² + b² = c²`, then the triangle is a right triangle. Application: Check if a triangle with sides 5, 12, 13 is right. `25 + 144 = 169 = 13²`. Yes.
- Practice: 12 problems — find missing sides, determine if triangles are right, word problems.
- Architecture: The 3-4-5 rule — builders use it to ensure corners are square. Measure 3 feet along one wall, 4 feet along the other. If the diagonal is exactly 5 feet, the corner is a right angle.

**TEKS:** §111.41(c)(8)

#### Lesson 4.6 — Special Right Triangles: 45-45-90 and 30-60-90 (2 hrs)
**Geometry Focus:** Exact side ratios for special right triangles
**Activity:**
- **45-45-90 Triangle:** Legs are equal. If each leg = 1, hypotenuse = √2. Ratio: `1 : 1 : √2`. If leg = x, then hypotenuse = `x√2`.
  - Derivation: Isosceles right triangle. By Pythagorean Theorem: `x² + x² = c²` → `c = x√2`.
  - Application: Diagonal of a square with side s is `s√2`.
- **30-60-90 Triangle:** Short leg : long leg : hypotenuse = `1 : √3 : 2`. If short leg = x, then long leg = `x√3`, hypotenuse = `2x`.
  - Derivation: Start with an equilateral triangle of side 2x. Cut in half with an altitude. The altitude creates a 30-60-90 triangle. By Pythagorean Theorem: altitude = `√(4x² - x²) = x√3`.
  - Application: Height of an equilateral triangle with side s is `s√3/2`.
- GeoGebra: Construct both special triangles. Measure all sides. Verify the ratios.
- Practice: 15 problems — find missing sides in special right triangles. Include context: diagonal of a square room, height of an equilateral roof truss.

**TEKS:** §111.41(c)(8)

#### Lesson 4.7 — Trigonometric Ratios: SOH-CAH-TOA (2.5 hrs)
**Geometry Focus:** Defining sine, cosine, and tangent
**Activity:**
- In a right triangle with an acute angle θ:
  - `sin(θ) = opposite / hypotenuse` (SOH)
  - `cos(θ) = adjacent / hypotenuse` (CAH)
  - `tan(θ) = opposite / adjacent` (TOA)
- Key insight: The trig ratios depend only on the angle, not on the size of the triangle. This is because all right triangles with the same acute angle are similar (AA).
- GeoGebra exploration: Construct a right triangle. Measure the angle and the three trig ratios. Drag to change the triangle size (but keep the angle the same). The ratios stay constant.
- Calculator practice: Find sin(30°), cos(45°), tan(60°). Verify against the special triangle ratios:
  - sin(30°) = 1/2, cos(45°) = √2/2, tan(60°) = √3.
- Practice: Given a right triangle with some measurements, find all missing sides and angles using trig ratios.
  1. Given: angle = 35°, adjacent side = 10. Find opposite: `tan(35°) = opp/10` → `opp = 10 × tan(35°) ≈ 7.0`.
  2. Given: angle = 50°, hypotenuse = 15. Find opposite: `sin(50°) = opp/15` → `opp = 15 × sin(50°) ≈ 11.5`.
- 12 practice problems.

**TEKS:** §111.41(c)(8)

#### Lesson 4.8 — Inverse Trig: Finding Angles (1.8 hrs)
**Geometry Focus:** Using inverse trig functions to find angle measures
**Activity:**
- If you know the sides but not the angle, use inverse trig functions:
  - `θ = sin⁻¹(opposite / hypotenuse)`
  - `θ = cos⁻¹(adjacent / hypotenuse)`
  - `θ = tan⁻¹(opposite / adjacent)`
- Calculator: The `sin⁻¹`, `cos⁻¹`, `tan⁻¹` keys (or `arcsin`, `arccos`, `arctan`).
- Example: A ramp rises 3 feet over a horizontal distance of 20 feet. What angle does it make with the ground? `θ = tan⁻¹(3/20) ≈ 8.5°`.
- ADA compliance: Wheelchair ramps must have a slope no steeper than 1:12 (rise:run). What angle is that? `tan⁻¹(1/12) ≈ 4.8°`.
- Practice: 10 problems — find angles using inverse trig.
- Desmos: Graph `y = sin(x)`, `y = cos(x)`, `y = tan(x)` and their inverses. Explore the relationship.

**TEKS:** §111.41(c)(8), §111.41(c)(9)

---

### Week 3: Applications and the Land Survey (≈8.3 hours)

#### Lesson 4.9 — Angles of Elevation and Depression (2 hrs)
**Geometry Focus:** Solving real-world problems with trig
**Activity:**
- Angle of elevation: Looking UP from horizontal. Angle of depression: Looking DOWN from horizontal.
- Both create right triangles with the horizontal distance, the vertical height, and the line of sight.
- Problem set:
  1. You stand 50 meters from a building. The angle of elevation to the top is 62°. How tall is the building? `h = 50 × tan(62°) ≈ 94.0 m`.
  2. A lighthouse keeper 40 meters above the water sees a boat at an angle of depression of 15°. How far is the boat from the base of the lighthouse? `d = 40 / tan(15°) ≈ 149.3 m`.
  3. A surveyor needs to find the width of a river. Standing on one bank, they measure the angle to a tree on the opposite bank at 28°. They walk 100 meters upstream and the angle is now 35°. How wide is the river? (Requires setting up two trig equations — more challenging.)
- For each: draw the diagram, identify the right triangle, label known and unknown parts, solve.
- Practice: 8 problems.

**TEKS:** §111.41(c)(9)

#### Lesson 4.10 — Building a Clinometer and Outdoor Measurements (2.5 hrs)
**Geometry Focus:** Hands-on surveying
**Activity:**
- Students build a simple clinometer using a protractor, string, and a small weight (washer or binder clip).
  - OR use a clinometer/inclinometer app on a phone.
- Outdoor activity: Students go outside and measure:
  1. The angle of elevation to the top of the school building from a measured distance.
  2. The angle of elevation to the top of a flagpole, tree, or light pole.
  3. The angle of elevation between two points on a slope (to find the slope angle).
- Back inside: Calculate each height using `tan(angle) = height / distance`.
- Record all measurements in a table: distance, angle, calculated height.
- Compare: If possible, get the actual height from school records and calculate percent error.
- Surveying context: This is exactly how land surveyors measure terrain. Before GPS and LiDAR, trigonometry was the ONLY way to map the world.

**TEKS:** §111.41(c)(9)

#### Lesson 4.11 — Geometric Probability (1.5 hrs)
**Geometry Focus:** Probability using area ratios
**Activity:**
- Geometric probability: The probability of landing in a region is proportional to its area.
  - A circular dartboard has radius 10 inches. The bullseye has radius 2 inches. Probability of hitting the bullseye: `π(2)²/π(10)² = 4/100 = 4%`.
- Applications:
  1. A square target (side 20 cm) with a circular bullseye (radius 5 cm). P(bullseye) = `π(25)/400 ≈ 19.6%`.
  2. A park (area 50,000 m²) has a pond (area 3,000 m²). A randomly thrown ball lands in the pond with probability `3000/50000 = 6%`.
  3. Rain falls uniformly on a roof (area 200 m²). What fraction is collected by a gutter (area 10 m²)? `10/200 = 5%`.
- R lab: Simulate geometric probability with random points:
```r
n <- 10000
x <- runif(n, -10, 10)
y <- runif(n, -10, 10)
in_circle <- x^2 + y^2 <= 4
cat("Simulated probability:", mean(in_circle), "\n")
cat("Theoretical probability:", pi * 4 / 400, "\n")
```
- Practice: 8 geometric probability problems.

**TEKS:** §111.41(c)(13)

#### Lesson 4.12 — Land Survey Report Workshop (2 hrs)
**Activity:**
- Students create a **Land Survey Report**:
  1. Choose a section of the school campus (or nearby area) to survey.
  2. Measure at least 3 heights or distances that cannot be measured directly, using:
     - Clinometer measurements (angles of elevation/depression).
     - Similar triangle setups (shadow method).
     - Pythagorean theorem applications.
  3. For each measurement:
     - Draw a labeled diagram showing the right triangle.
     - Show all calculations (trig ratios, proportions, or Pythagorean theorem).
     - Compare to a verified or estimated actual value (if available).
  4. Create a simple map of the surveyed area with calculated dimensions.
  5. Write a 1-paragraph reflection: How did trigonometry allow you to measure what you couldn't reach?
- Workshop time: outdoor data collection (if not done in Lesson 4.10), calculations, mapping, writing.

#### Lesson 4.13 — Presentations & Unit 4 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5–6 students present their Land Survey Reports (4 minutes each, showing diagrams and calculations).
- Unit checkpoint quiz: Similar triangles, Pythagorean theorem, special right triangles, trig ratios, angle of elevation/depression (25 minutes).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Similarity & Trigonometry | Individual | 25 |
| Similar Figures & Proportions Practice | Practice | 20 |
| Triangle Similarity Criteria Lab | Lab | 20 |
| Pythagorean Theorem Practice | Practice | 20 |
| Special Right Triangles Practice | Practice | 15 |
| Trig Ratio Practice | Practice | 20 |
| Clinometer Outdoor Lab | Lab | 20 |
| Geometric Probability Lab | Lab | 15 |
| Land Survey Report | Project | 45 |
| **Total** | | **200** |

## Key Vocabulary

similar, similarity, scale factor, proportion, cross-multiply, AA similarity, SSS~ similarity, SAS~ similarity, Pythagorean Theorem, converse, hypotenuse, leg, special right triangle, 45-45-90, 30-60-90, trigonometric ratio, sine, cosine, tangent, SOH-CAH-TOA, opposite, adjacent, inverse trig, angle of elevation, angle of depression, clinometer, surveying, triangulation, geometric probability, area ratio
