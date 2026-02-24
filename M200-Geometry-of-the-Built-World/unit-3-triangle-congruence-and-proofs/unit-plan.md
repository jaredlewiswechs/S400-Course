# Unit 3 — Triangle Congruence & Proofs

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | Triangle Congruence & Proofs |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do engineers know that two structural components are exactly the same — without measuring every dimension?* |
| Geometry TEKS | §111.41(c)(4), (5), (6) |
| Tools | GeoGebra, compass, straightedge, protractor, physical triangle models (cardboard, straws) |
| Key Deliverable | Structural Proof Report — students analyze a real or designed truss bridge, identify congruent triangles, and write proofs demonstrating congruence using at least 3 criteria |

## Unit Narrative

The triangle is the strongest shape in engineering. It is rigid — unlike a rectangle, which can be pushed into a parallelogram, a triangle keeps its shape. This structural truth makes triangle congruence the most important concept in geometric proofs. Students learn the minimum information needed to guarantee that two triangles are identical: SSS, SAS, ASA, AAS, and HL. They discover that SSA (the ambiguous case) does NOT guarantee congruence. The proof work deepens: students move from fill-in-the-blank proofs to writing their own two-column and paragraph proofs. The engineering connection runs throughout — truss bridges, roof frames, and transmission towers all depend on congruent triangles for structural integrity. CPCTC (Corresponding Parts of Congruent Triangles are Congruent) emerges as the key tool for proving additional relationships once congruence is established.

## Math Concepts

- Triangle classification by sides (scalene, isosceles, equilateral) and angles (acute, right, obtuse) §111.41(c)(1)
- Triangle congruence: definition and notation §111.41(c)(6)
- Congruence criteria: SSS, SAS, ASA, AAS §111.41(c)(6)
- Hypotenuse-Leg (HL) for right triangles §111.41(c)(6)
- Why SSA does not work (the ambiguous case) §111.41(c)(6)
- CPCTC: Corresponding Parts of Congruent Triangles are Congruent §111.41(c)(6)
- Two-column and paragraph proofs involving triangle congruence §111.41(c)(4), (5)
- Isosceles triangle properties: base angles theorem and converse §111.41(c)(5)
- Equilateral triangle properties §111.41(c)(5)

---

## Lesson Sequence

### Week 1: What Makes Triangles Congruent? (≈8.3 hours)

#### Lesson 3.1 — Triangle Classification and Properties (1.5 hrs)
**Geometry Focus:** Classifying triangles, triangle inequality
**Activity:**
- Classify by sides: Scalene (no equal sides), Isosceles (at least two equal), Equilateral (all equal).
- Classify by angles: Acute (all < 90°), Right (one = 90°), Obtuse (one > 90°).
- Triangle Inequality Theorem: The sum of any two sides must be greater than the third side.
  - Can you build a triangle with sides 3, 4, 5? Yes (3+4=7>5). With sides 1, 2, 5? No (1+2=3<5).
- Physical activity: Students use straws or sticks cut to various lengths. Try to form triangles. Which combinations work?
- GeoGebra: Construct triangles with given side lengths. When does GeoGebra refuse to build the triangle? (When the triangle inequality is violated.)
- Practice: 10 problems — classify triangles and determine if given side lengths can form a triangle.

**TEKS:** §111.41(c)(1)

#### Lesson 3.2 — Congruent Triangles: Definition and Notation (1.5 hrs)
**Geometry Focus:** What congruence means, correspondence notation
**Activity:**
- Two triangles are congruent if ALL corresponding sides and angles are equal (6 measurements).
- Notation: △ABC ≅ △DEF means A↔D, B↔E, C↔F. The order of letters matters — it tells you the correspondence.
- From the notation, you can identify all 6 congruencies:
  - `AB = DE`, `BC = EF`, `AC = DF`, `∠A = ∠D`, `∠B = ∠E`, `∠C = ∠F`.
- Practice: Given congruence statements, list all corresponding parts. Given diagrams with tick marks and arc marks, write the congruence statement.
- Engineering connection: When a manufacturer produces structural components, they need congruent pieces. Triangle congruence criteria tell them the minimum measurements to check.

**TEKS:** §111.41(c)(6)

#### Lesson 3.3 — SSS and SAS Congruence (2.5 hrs)
**Geometry Focus:** Side-Side-Side and Side-Angle-Side criteria
**Activity:**
- **SSS (Side-Side-Side):** If three sides of one triangle are congruent to three sides of another, the triangles are congruent.
  - Physical test: Give two students 3 straw pieces of the same lengths. Can they build different triangles? No — SSS determines the triangle uniquely.
  - GeoGebra: Construct a triangle with sides 5, 7, 9. Is there only one triangle possible (up to position/orientation)? Yes.
- **SAS (Side-Angle-Side):** If two sides and the INCLUDED angle of one triangle are congruent to two sides and the included angle of another, the triangles are congruent.
  - Physical test: Set two straws at a fixed angle. Only one triangle results.
  - The angle must be BETWEEN the two sides (included angle). If it's not, the criterion doesn't work (this is the SSA problem — covered later).
- GeoGebra exploration: Build triangles by specifying SSS and SAS. Verify congruence by measuring all parts.
- Practice: 12 problems — determine if given information is sufficient for SSS or SAS, and if so, identify the congruence.

**TEKS:** §111.41(c)(6)

#### Lesson 3.4 — ASA and AAS Congruence (2.8 hrs)
**Geometry Focus:** Angle-Side-Angle and Angle-Angle-Side criteria
**Activity:**
- **ASA (Angle-Side-Angle):** If two angles and the INCLUDED side of one triangle are congruent to two angles and the included side of another, the triangles are congruent.
  - Note: If you know two angles, you know the third (angle sum = 180°). So ASA determines all angles and the included side.
- **AAS (Angle-Angle-Side):** If two angles and a NON-included side are congruent, the triangles are still congruent.
  - Why: Two angles being congruent means the third is too (angle sum). So the "non-included side" effectively becomes an included side relative to another pair of angles.
- GeoGebra: Build triangles by specifying ASA and AAS. Verify congruence.
- Comparison: We now have 4 criteria — SSS, SAS, ASA, AAS. Each specifies the minimum information needed.
- Practice: 15 problems — identify which congruence criterion (if any) applies to given pairs of triangles.
- Engineering: A surveyor measures two angles and the distance between them (ASA). This is enough to determine the triangle — a principle used in triangulation surveying since ancient times.

**TEKS:** §111.41(c)(6)

---

### Week 2: Special Cases, CPCTC, and Proofs (≈8.3 hours)

#### Lesson 3.5 — HL Congruence and Why SSA Fails (2 hrs)
**Geometry Focus:** Hypotenuse-Leg for right triangles, the ambiguous case
**Activity:**
- **HL (Hypotenuse-Leg):** For right triangles ONLY: if the hypotenuse and one leg are congruent, the triangles are congruent.
  - Why it works: The Pythagorean theorem determines the third side, so HL is really SSS in disguise.
- **Why SSA does not work (the ambiguous case):**
  - GeoGebra demonstration: Given two sides and a non-included angle, construct the triangle. Show that TWO different triangles can be formed (the "swinging door" effect).
  - Students construct the ambiguous case: Given AB = 5, ∠A = 30°, BC = 3. Two triangles exist.
  - Therefore SSA is NOT a valid congruence criterion. (Common student error!)
- Mnemonic: SSA is not a valid criterion — remember it by its reverse.
- Practice: 12 problems — identify the criterion or determine that the given information is insufficient.

**TEKS:** §111.41(c)(6)

#### Lesson 3.6 — CPCTC: Using Congruence to Prove More (2 hrs)
**Geometry Focus:** Corresponding Parts of Congruent Triangles are Congruent
**Activity:**
- Once you prove two triangles congruent, ALL corresponding parts are congruent. This lets you prove that specific sides or angles are congruent.
- Strategy: To prove that two segments or angles are congruent:
  1. Find (or construct) two triangles that contain them as corresponding parts.
  2. Prove the triangles congruent (SSS, SAS, ASA, AAS, or HL).
  3. Conclude the parts are congruent by CPCTC.
- Guided proof: Given a parallelogram ABCD with diagonal AC. Prove AB = CD.
  - △ABC and △CDA share side AC.
  - ∠BAC = ∠DCA (alternate interior angles, AB ∥ CD).
  - ∠BCA = ∠DAC (alternate interior angles, BC ∥ AD).
  - △ABC ≅ △CDA by ASA.
  - AB = CD by CPCTC.
- Students work through 3 more guided CPCTC proofs.
- Practice: 4 independent CPCTC proof problems.

**TEKS:** §111.41(c)(5), §111.41(c)(6)

#### Lesson 3.7 — Isosceles and Equilateral Triangle Properties (2 hrs)
**Geometry Focus:** Base angles theorem, equilateral triangle properties
**Activity:**
- **Base Angles Theorem:** If two sides of a triangle are congruent, then the angles opposite those sides are congruent.
  - Proof: Draw the angle bisector from the vertex angle to the base. This creates two congruent triangles (SAS). By CPCTC, the base angles are congruent.
- **Converse:** If two angles are congruent, then the sides opposite them are congruent.
- **Equilateral Triangle:** All three sides equal → all three angles equal → each angle = 60°.
- GeoGebra: Construct isosceles triangles. Measure base angles. Drag the vertex — as long as the sides stay equal, the base angles stay equal.
- Architecture: Many roof trusses use isosceles triangles for symmetry. Gothic arches are constructed from equilateral triangles.
- Practice: 10 problems using isosceles and equilateral triangle properties to find missing angles and sides.

**TEKS:** §111.41(c)(5)

#### Lesson 3.8 — Writing Proofs: Practice and Strategy (2.3 hrs)
**Geometry Focus:** Building fluency with two-column and paragraph proofs
**Activity:**
- Proof-writing strategies:
  1. Mark the diagram with given information (tick marks, angle arcs).
  2. Identify the triangles you need to prove congruent.
  3. List what you know about corresponding parts.
  4. Determine which criterion applies.
  5. Write the proof — statement by statement, reason by reason.
- Proof workout: 6 problems of increasing difficulty.
  - Level 1: Given information directly states enough for a criterion (2 problems).
  - Level 2: Need to use vertical angles or shared sides to get enough information (2 problems).
  - Level 3: Need CPCTC to prove the final conclusion (2 problems).
- Paragraph proofs: Rewrite one two-column proof as a paragraph. Compare — which format is clearer?
- Partner proof review: Exchange proofs with a partner. Check each reason. Flag any logical gaps.

**TEKS:** §111.41(c)(4), §111.41(c)(5)

---

### Week 3: Applications and the Structural Proof Report (≈8.3 hours)

#### Lesson 3.9 — Triangles in Engineering: Truss Bridges and Roof Frames (2 hrs)
**Geometry Focus:** Identifying congruent triangles in real structures
**Activity:**
- Why triangles? A triangle is rigid — it cannot be deformed without changing a side length. A rectangle can be pushed into a parallelogram. This is why trusses use triangles.
- Truss analysis: Students examine diagrams of truss bridge designs (Pratt, Warren, Howe).
  - Identify all triangles in the truss.
  - Identify pairs of congruent triangles.
  - For each pair, determine which congruence criterion applies (using the symmetry and equal-length members of the truss).
- Physical model: Students build a simple truss from straws/popsicle sticks. Test its rigidity vs. a rectangular frame.
- Discussion: If a truss has a pair of non-congruent triangles, what does that mean for the structure? (Uneven load distribution — potential failure.)

**TEKS:** §111.41(c)(5), §111.41(c)(6)

#### Lesson 3.10 — Advanced Proof Practice (2 hrs)
**Geometry Focus:** Multi-step proofs and overlapping triangles
**Activity:**
- Overlapping triangles: When two triangles share a side or angle, students must carefully identify the two separate triangles.
- Technique: Redraw the triangles separately, labeling all known parts.
- 4 multi-step proofs involving:
  - Overlapping triangles sharing a common side.
  - Auxiliary lines (adding a line segment to create triangles that don't exist in the original figure).
  - Proofs requiring two rounds of congruence (prove △1 ≅ △2, use CPCTC, then prove △3 ≅ △4).
- This is the most challenging proof work in the course. Students work in pairs with teacher support.

**TEKS:** §111.41(c)(4), §111.41(c)(5), §111.41(c)(6)

#### Lesson 3.11 — Structural Proof Report Workshop (2.5 hrs)
**Activity:**
- Students create a **Structural Proof Report**:
  1. Choose a truss design (bridge truss, roof truss, or transmission tower — diagrams provided by teacher, or students find their own).
  2. Identify at least 4 pairs of congruent triangles in the structure.
  3. For each pair, state the congruence criterion (SSS, SAS, ASA, AAS, or HL).
  4. Write formal two-column proofs for at least 3 of the pairs, using properties of the structure (equal-length members, right angles from vertical supports, etc.) as given information.
  5. Use CPCTC in at least one proof to establish a further result.
  6. Include a diagram with all congruent triangles highlighted (different colors for different pairs).
  7. Write a 1-paragraph reflection: Why does triangle congruence matter for structural integrity?
- Workshop time: selecting structure, marking diagrams, writing proofs.

#### Lesson 3.12 — Presentations & Unit 3 Assessment (1.8 hrs)
**Activity:**
- Selected presentations: 5–6 students present their structural proof reports (4 minutes each, showing truss diagram and one proof).
- Unit checkpoint quiz: Triangle classification, congruence criteria identification, fill-in-the-blank proof, CPCTC application (25 minutes).

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Triangle Congruence & Proofs | Individual | 25 |
| Triangle Classification Practice | Practice | 15 |
| Congruence Criteria Identification | Practice | 20 |
| SSS/SAS GeoGebra Lab | Lab | 20 |
| ASA/AAS/HL Practice | Practice | 20 |
| CPCTC Proof Practice | Practice | 20 |
| Multi-Step Proof Practice | Practice | 15 |
| Structural Proof Report | Project | 55 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

triangle, scalene, isosceles, equilateral, acute, right, obtuse, congruent, congruence, correspondence, SSS, SAS, ASA, AAS, HL, SSA (ambiguous case), CPCTC, corresponding parts, two-column proof, paragraph proof, given, prove, rigid, truss, structural integrity, base angles, vertex angle, base, isosceles triangle theorem, triangle inequality, included angle, included side, auxiliary line, overlapping triangles
