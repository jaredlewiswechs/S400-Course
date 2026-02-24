# Unit 2 — Parallel Lines & Angles

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Parallel Lines & Angles |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Why do buildings stand straight, floors stay flat, and roads run in grids — and how do parallel and perpendicular lines make it all possible?* |
| Geometry TEKS | §111.41(c)(1), (4), (5) |
| Tools | GeoGebra, Desmos, protractor, physical models |
| Key Deliverable | City Grid Analysis — a geometric investigation of a real street grid analyzing parallel/perpendicular relationships, angle measures, and design rationale |

## Unit Narrative

Parallel lines are everywhere in the built world — floor joists, rail tracks, highway lanes, city grids. When a transversal crosses parallel lines, it creates a predictable pattern of angle relationships that architects and engineers rely on daily. This unit develops those relationships systematically: corresponding angles, alternate interior angles, alternate exterior angles, and same-side interior angles. Students discover the patterns through GeoGebra exploration, then prove them deductively. The culminating project applies these ideas to real city grids — analyzing Houston's street layout (or another city) to verify parallelism, measure angles at intersections, and explain why grid-based urban design works geometrically. The unit also covers the Triangle Angle Sum Theorem (proved using parallel lines) and exterior angle relationships, setting up the triangle work of Units 3–4.

## Math Concepts

- Properties of parallel lines cut by a transversal §111.41(c)(5)
- Corresponding angles, alternate interior angles, alternate exterior angles, co-interior (same-side interior) angles §111.41(c)(5)
- Proving lines parallel using angle relationships §111.41(c)(5)
- Perpendicular lines and their angle properties §111.41(c)(1)
- Triangle Angle Sum Theorem (proved via parallel lines) §111.41(c)(5)
- Exterior Angle Theorem §111.41(c)(5)
- Polygon angle sums §111.41(c)(1)
- Proofs involving parallel lines §111.41(c)(4), (5)

---

## Lesson Sequence

### Week 1: Parallel Lines and Transversals (≈8.3 hours)

#### Lesson 2.1 — Parallel and Perpendicular in the Built World (1.5 hrs)
**Geometry Focus:** Identifying parallel, perpendicular, and skew lines in 3D and 2D
**Activity:**
- Photo analysis: Students examine 5 photographs of buildings, bridges, and infrastructure. Identify pairs of lines that are parallel, perpendicular, or neither.
- Definitions:
  - Parallel lines: Coplanar lines that never intersect. Symbol: `∥`. Notation: `l ∥ m`.
  - Perpendicular lines: Lines that intersect at 90°. Symbol: `⊥`.
  - Skew lines: Non-coplanar lines that don't intersect (only in 3D).
- GeoGebra: Construct two parallel lines and a transversal. Measure all 8 angles formed. Record in a table.
- Architecture connection: Floor joists are parallel to each other and perpendicular to the subfloor. If they weren't, the floor would buckle or sag.
- Practice: Identify parallel, perpendicular, and skew line pairs in 10 diagrams.

**TEKS:** §111.41(c)(1)

#### Lesson 2.2 — Angle Pairs Formed by a Transversal (2.5 hrs)
**Geometry Focus:** Naming and classifying angle pairs
**Activity:**
- When a transversal crosses two lines, it forms 8 angles. Students label them ∠1 through ∠8.
- Vocabulary:
  - **Corresponding angles:** Same position at each intersection (∠1 & ∠5, ∠2 & ∠6, etc.).
  - **Alternate interior angles:** Opposite sides of the transversal, between the lines (∠3 & ∠6, ∠4 & ∠5).
  - **Alternate exterior angles:** Opposite sides of the transversal, outside the lines (∠1 & ∠8, ∠2 & ∠7).
  - **Co-interior (same-side interior) angles:** Same side of the transversal, between the lines (∠3 & ∠5, ∠4 & ∠6).
- GeoGebra exploration: Drag one line to make it parallel to the other. Measure all angles. What pattern emerges?
  - Corresponding angles are congruent.
  - Alternate interior angles are congruent.
  - Alternate exterior angles are congruent.
  - Co-interior angles are supplementary (sum = 180°).
- Now drag the line so it's NOT parallel. Are the patterns still true? No — the relationships only hold for parallel lines.
- Card matching activity: 16 cards — 8 angle pairs and 8 relationship types. Students match.
- Practice: 15 problems — given some angles, find the others using parallel line relationships.

**TEKS:** §111.41(c)(5)

#### Lesson 2.3 — Proving Parallel Line Angle Theorems (2 hrs)
**Geometry Focus:** Two-column proofs for angle relationships
**Activity:**
- Postulate (accepted without proof): If two parallel lines are cut by a transversal, then corresponding angles are congruent. (Corresponding Angles Postulate.)
- Theorem (proved from the postulate): If two parallel lines are cut by a transversal, then alternate interior angles are congruent.
- Two-column proof:

| Statement | Reason |
|-----------|--------|
| `l ∥ m`, transversal t | Given |
| ∠1 ≅ ∠5 | Corresponding Angles Postulate |
| ∠5 ≅ ∠3 | Vertical Angles Theorem |
| ∠1 ≅ ∠3 | Transitive Property of Congruence |
| But ∠1 and ∠3 are alternate interior angles | Definition |

- Students prove the Alternate Exterior Angles Theorem and Co-Interior Angles Theorem similarly (guided).
- Practice: 4 proof problems with scaffolding (fill in missing steps).
- Key insight: One postulate (corresponding angles) plus vertical angles gives us ALL the parallel line angle relationships.

**TEKS:** §111.41(c)(4), §111.41(c)(5)

#### Lesson 2.4 — Proving Lines Parallel (Converse Theorems) (2.3 hrs)
**Geometry Focus:** Using angle relationships to prove lines are parallel
**Activity:**
- The converses are also true:
  - If corresponding angles are congruent → lines are parallel.
  - If alternate interior angles are congruent → lines are parallel.
  - If alternate exterior angles are congruent → lines are parallel.
  - If co-interior angles are supplementary → lines are parallel.
- Application: An engineer measures angles at a construction site. Two steel beams should be parallel. At the transversal, ∠3 = 72° and ∠6 = 72°. Are the beams parallel? Yes — alternate interior angles are congruent.
- GeoGebra: Students construct two lines and a transversal. Adjust angles to make specific angle pairs congruent. Does the software confirm the lines are parallel?
- Practice: 10 problems — determine if lines are parallel based on given angle measurements. Justify using a specific theorem.
- Proof practice: Write a two-column proof showing that if alternate interior angles are congruent, then the lines are parallel.

**TEKS:** §111.41(c)(5)

---

### Week 2: Triangle Angles and Polygon Angles (≈8.3 hours)

#### Lesson 2.5 — Triangle Angle Sum Theorem (2.5 hrs)
**Geometry Focus:** Proving that the sum of interior angles of a triangle is 180°
**Activity:**
- Hands-on discovery: Students draw 5 different triangles, measure all three angles with a protractor, and sum them. Result: always ≈180° (small measurement error).
- GeoGebra: Construct a triangle. Measure all three angles. Drag vertices — the sum always stays exactly 180°.
- The proof (using parallel lines):
  1. Draw triangle ABC with base BC.
  2. Through A, draw a line parallel to BC.
  3. ∠1 (between the parallel line and AB) = ∠B (alternate interior angles, since the parallel line ∥ BC).
  4. ∠2 (between the parallel line and AC) = ∠C (alternate interior angles).
  5. ∠1 + ∠A + ∠2 = 180° (angles on a straight line).
  6. Therefore ∠B + ∠A + ∠C = 180°.
- Two-column proof version written out with the class.
- This is a beautiful connection: the Triangle Angle Sum Theorem depends on parallel lines.
- Practice: 12 problems — find missing angles in triangles.
- Architecture: Triangular trusses have angles that must sum to 180°. If one angle changes, the others must adjust — this constrains the design.

**TEKS:** §111.41(c)(5)

#### Lesson 2.6 — Exterior Angle Theorem (1.5 hrs)
**Geometry Focus:** An exterior angle of a triangle equals the sum of the two non-adjacent interior angles
**Activity:**
- Define exterior angle: formed by extending one side of a triangle past a vertex.
- Theorem: The exterior angle equals the sum of the two remote (non-adjacent) interior angles.
- Proof: If the interior angles are A, B, C, and the exterior angle at C is D, then D + C = 180° (linear pair) and A + B + C = 180° (Triangle Angle Sum). Therefore D = A + B.
- GeoGebra: Construct a triangle, extend one side, measure the exterior angle and the two remote interior angles. Verify.
- Practice: 10 problems — find missing angles using the Exterior Angle Theorem.

**TEKS:** §111.41(c)(5)

#### Lesson 2.7 — Interior Angle Sum of Polygons (2 hrs)
**Geometry Focus:** Extending the triangle angle sum to any polygon
**Activity:**
- Method: Divide any polygon into triangles by drawing diagonals from one vertex.
  - Triangle: 1 triangle → 180°.
  - Quadrilateral: 2 triangles → 360°.
  - Pentagon: 3 triangles → 540°.
  - n-gon: (n - 2) triangles → (n - 2) × 180°.
- Formula: Interior angle sum = `(n - 2) × 180°`.
- For regular polygons: Each angle = `(n - 2) × 180° / n`.
- GeoGebra: Construct regular polygons (3 through 8 sides). Measure one interior angle. Verify the formula.
- Architecture connection: Regular hexagons tessellate perfectly (each angle = 120°, three fit around a point = 360°). This is why hexagonal tiles and honeycomb patterns are so common.
- Practice: 10 problems — find interior angle sums, individual angles of regular polygons, and number of sides given an angle.

**TEKS:** §111.41(c)(1)

#### Lesson 2.8 — Exterior Angle Sum of Polygons (1 hr)
**Geometry Focus:** The sum of exterior angles of any convex polygon is 360°
**Activity:**
- Walk-around proof: Imagine walking along the perimeter of a polygon. At each vertex, you turn by the exterior angle. After a full loop, you've turned 360°. So the exterior angles sum to 360° — regardless of the number of sides.
- For regular polygons: Each exterior angle = `360° / n`.
- GeoGebra: Construct a pentagon. Measure all exterior angles. Sum = 360°. Drag vertices — the sum stays 360°.
- Practice: 5 problems involving exterior angle sums.

**TEKS:** §111.41(c)(1)

#### Lesson 2.9 — Perpendicular Lines: Properties and Proofs (1.3 hrs)
**Geometry Focus:** Properties of perpendicular lines
**Activity:**
- Perpendicular lines form four right angles (all 90°).
- If two lines are perpendicular to the same line, they are parallel to each other. (Prove using corresponding angles = 90°.)
- In a coordinate plane (preview of Unit 5): Perpendicular lines have slopes that are negative reciprocals.
- Architecture: Plumb lines (vertical) and levels (horizontal) ensure perpendicularity in construction.
- Practice: 8 problems involving perpendicular line properties.

**TEKS:** §111.41(c)(1), §111.41(c)(5)

---

### Week 3: Applications and the City Grid Project (≈8.3 hours)

#### Lesson 2.10 — Parallel Lines in Coordinate Geometry (Preview) (2 hrs)
**Geometry Focus:** Parallel and perpendicular lines on the coordinate plane
**Activity:**
- Parallel lines have the same slope. Perpendicular lines have slopes that are negative reciprocals.
- Given two lines, determine if they are parallel, perpendicular, or neither by comparing slopes.
- Desmos: Graph pairs of lines and verify visually.
- Write the equation of a line parallel to `y = 3x + 2` through the point (1, 5): same slope (3), find intercept. `y = 3x + 2`.
- Write the equation of a line perpendicular to `y = 3x + 2` through (1, 5): slope = `-1/3`. `y = -1/3 x + 16/3`.
- Practice: 10 problems — parallel and perpendicular lines in the coordinate plane.
- Connection to S400: Slope was introduced in S400 Unit 2 (economics). Now it has a geometric meaning.

**TEKS:** §111.41(c)(5)

#### Lesson 2.11 — Analyzing Real City Grids (2 hrs)
**Geometry Focus:** Applying parallel line concepts to urban planning
**Activity:**
- Dataset: Google Maps screenshots or GIS data of Houston's street grid (downtown grid vs. suburban curves).
- Students overlay a coordinate system on a section of the grid.
- Tasks:
  1. Identify 3 pairs of parallel streets. Justify using visual inspection and/or slope comparison.
  2. Identify 3 intersections where streets are perpendicular. Justify.
  3. Identify an intersection where streets are NOT perpendicular. Measure the angle.
  4. Find a transversal that crosses multiple parallel streets. Identify corresponding and alternate interior angle pairs.
- Discussion: Why are city grids designed with parallel and perpendicular streets? (Navigation efficiency, lot division, building placement, traffic flow.)
- Houston context: Downtown Houston has a grid rotated about 30° from true north. Why? (Aligned with Buffalo Bayou, which runs roughly southwest-to-northeast.)

**TEKS:** §111.41(c)(1), §111.41(c)(5)

#### Lesson 2.12 — City Grid Analysis Project Workshop (2.5 hrs)
**Activity:**
- Students create a **City Grid Analysis**:
  1. Choose a section of a real city grid (Houston downtown, Midtown, another city, or a planned community).
  2. Overlay a coordinate system on the map (mark origin and scale).
  3. Identify and label:
     - At least 3 pairs of parallel streets with slopes calculated (if possible).
     - At least 2 pairs of perpendicular streets.
     - At least 4 angle pairs (corresponding, alternate interior, etc.) along a transversal street.
  4. Calculate: interior angle sum of one city block (polygon).
  5. Write a 1-page geometric analysis:
     - How does the grid use parallelism and perpendicularity?
     - Are there any non-grid streets? What geometric relationships do they create?
     - What would go wrong if the streets were NOT parallel?
- Workshop time: map selection, measurement, calculation, writing.

#### Lesson 2.13 — Presentations & Unit 2 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5–6 students present their city grid analysis (3 minutes each).
- Unit checkpoint quiz: Angle pair identification, parallel line proofs, triangle angle sum, polygon angle sums, coordinate geometry slopes (25 minutes).

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Parallel Lines & Angles | Individual | 25 |
| Angle Pair Identification Practice | Practice | 20 |
| GeoGebra Angle Exploration Lab | Lab | 25 |
| Parallel Line Proofs | Practice | 25 |
| Triangle & Polygon Angle Sum Practice | Practice | 20 |
| Coordinate Parallel/Perpendicular Practice | Practice | 15 |
| City Grid Analysis Project | Project | 50 |
| Warm-ups & Daily Work | Participation | 20 |
| **Total** | | **200** |

## Key Vocabulary

parallel lines, perpendicular lines, skew lines, transversal, corresponding angles, alternate interior angles, alternate exterior angles, co-interior angles (same-side interior), Corresponding Angles Postulate, converse, Triangle Angle Sum Theorem, exterior angle, Exterior Angle Theorem, remote interior angle, interior angle sum, regular polygon, exterior angle sum, slope, negative reciprocal, grid, urban planning, perpendicularity
