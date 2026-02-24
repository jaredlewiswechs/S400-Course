# M200 — Geometry of the Built World

## Course Information

| Field | Detail |
|-------|--------|
| Course Code | M200 |
| Title | Geometry of the Built World |
| Grade Band | 10–11 |
| Instructional Hours | 150 |
| Credit | 1 (Geometry — full credit) |
| Subject Area | Mathematics — Geometry |
| Math TEKS | Geometry §111.41 |
| Geometry TEKS Addressed | §111.41(c)(1)–(13) |
| Prerequisites | M100 or Algebra I equivalent |
| Primary Tools | RStudio (sf), GeoGebra, Desmos, CAD tools, physical models |

## Course Description

M200 teaches the full Texas Geometry curriculum through architecture, urban planning, land surveying, and spatial data. Every theorem, postulate, and proof is grounded in something built, measured, or mapped. Logical reasoning is introduced through architectural design constraints — you can't build a stable structure if your angles don't work. Triangle congruence and proofs are taught through structural engineering: why triangles are the strongest shape, and how you prove two structural components are identical. Similarity and proportional reasoning power scale models and blueprints. Right-triangle trigonometry is taught through land surveying — measuring heights and distances you can't reach directly. Coordinate geometry connects to S500's redistricting and mapping work, giving students who took S500 a ~25% head start. Transformations are explored through architectural symmetry, tessellations, and design. Area, volume, and surface area are computed for real buildings, rooms, and containers. Circles appear in arches, rotundas, and city planning.

RStudio's `sf` (simple features) package brings geospatial data into the course, connecting geometry to real-world spatial analysis. GeoGebra provides dynamic construction tools for exploration and proof. Desmos handles graphing and coordinate geometry. Physical models — cardboard, rulers, protractors, string — keep the geometry tangible.

## Geometry TEKS Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.41(c)(1) | Mathematical process standards | All units |
| §111.41(c)(2) | Coordinate and transformational geometry — distance, midpoint | Unit 5 |
| §111.41(c)(3) | Coordinate and transformational geometry — transformations | Unit 5 |
| §111.41(c)(4) | Logical argument and constructions — deductive reasoning | Units 1, 3 |
| §111.41(c)(5) | Logical argument and constructions — congruence, proofs | Unit 3 |
| §111.41(c)(6) | Proof and congruence — triangle congruence criteria | Unit 3 |
| §111.41(c)(7) | Similarity, proof, and trigonometry — similar figures | Unit 4 |
| §111.41(c)(8) | Similarity, proof, and trigonometry — right triangle trig | Unit 4 |
| §111.41(c)(9) | Similarity, proof, and trigonometry — applications | Unit 4 |
| §111.41(c)(10) | Two-dimensional and three-dimensional figures — circles | Unit 6 |
| §111.41(c)(11) | Two-dimensional and three-dimensional figures — area, perimeter | Unit 6 |
| §111.41(c)(12) | Two-dimensional and three-dimensional figures — surface area, volume | Unit 6 |
| §111.41(c)(13) | Probability and statistics (geometric contexts) | Units 4, 6 |

## Connection to S500

Students who took S500 (American Systems) before M200 have a ~25% head start. S500's Redistricting Lab (Unit 3) covers:

| S500 Concept | M200 TEKS Addressed | How M200 Extends It |
|-------------|--------------------|--------------------|
| Area and perimeter of districts | §111.41(c)(11) | M200 formalizes area formulas for all polygons and circles |
| Polsby-Popper compactness score | §111.41(c)(10), (11) | M200 teaches the circle geometry underlying the score |
| Coordinate geometry of boundaries | §111.41(c)(2) | M200 adds distance formula, midpoint, and slope proofs |
| `sf` package for shapefiles | §111.41(c)(2), (3) | M200 uses `sf` for geometric computations on spatial data |
| Logical reasoning about fairness | §111.41(c)(4), (5) | M200 formalizes deductive reasoning and proof structure |

## Pacing Guide (150 Hours)

| Unit | Title | Hours | Weeks (~8.3 hrs/wk) |
|------|-------|-------|----------------------|
| 1 | Foundations & Logical Reasoning | 25 | 3 |
| 2 | Parallel Lines & Angles | 25 | 3 |
| 3 | Triangle Congruence & Proofs | 25 | 3 |
| 4 | Similarity, Right Triangles & Trigonometry | 25 | 3 |
| 5 | Coordinate Geometry & Transformations | 25 | 3 |
| 6 | Area, Volume, Surface Area & Circles | 25 | 3 |
| **Total** | | **150** | **18** |

## Assessment Structure

| Component | Weight | Description |
|-----------|--------|-------------|
| Construction & Measurement Labs | 30% | GeoGebra constructions, physical models, RStudio spatial labs |
| Proofs & Problem Sets | 25% | Formal and informal geometric proofs, application problems |
| Unit Projects | 30% | Culminating architecture/design/surveying projects |
| Participation & Checkpoints | 15% | Warm-ups, peer review, checkpoint quizzes |

## Tool Progression

| Unit | Tools & Skills |
|------|----------------|
| 1 | GeoGebra constructions (points, lines, circles, angles), physical tools (ruler, compass, protractor), logical reasoning frameworks |
| 2 | GeoGebra angle measurement and parallel line constructions, Desmos for graphing lines and verifying slopes |
| 3 | GeoGebra triangle constructions (SSS, SAS, ASA, AAS), two-column proof templates, physical triangle models |
| 4 | Desmos for similar figure exploration, surveying tools (clinometer/protractor for measuring angles of elevation), trig table/calculator |
| 5 | RStudio with `sf` for coordinate geometry and spatial data, Desmos for transformation graphing, GeoGebra for transformation sequences |
| 6 | CAD tools or GeoGebra 3D for volume/surface area visualization, RStudio for computing areas of real parcels, physical models (nets, containers) |

## Materials & Data Sources

- **GeoGebra:** Dynamic geometry constructions, proofs, 3D visualization
- **Desmos:** Coordinate geometry, transformations, function graphing
- **RStudio (sf package):** Geospatial analysis, area/perimeter computation, coordinate transformations
- **CAD tools (SketchUp Free, Tinkercad):** 3D modeling for volume and surface area
- **Physical materials:** Graph paper, rulers, compasses, protractors, string, cardboard, scissors
- **Architectural references:** Building blueprints, floor plans, city maps
- **Surveying data:** Land survey plats, property boundaries, topographic maps
- **Houston spatial data:** Harris County parcel data, building footprints, city block layouts
- **Google Earth/Maps:** Satellite imagery for real-world measurement
