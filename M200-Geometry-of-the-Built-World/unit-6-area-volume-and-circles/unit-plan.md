# Unit 6 — Area, Volume, Surface Area & Circles

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Area, Volume, Surface Area & Circles |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How much space does a building occupy — and how do you calculate what you need to fill, cover, or enclose it?* |
| Geometry TEKS | §111.41(c)(10), (11), (12), (13) |
| Tools | RStudio (sf), GeoGebra 3D, CAD tools (SketchUp/Tinkercad), physical models, measuring tools |
| Key Deliverable | Capstone Design Project — students design a building or structure, calculating all areas, surface areas, and volumes with full geometric justification |

## Unit Narrative

This final unit brings geometry into three dimensions and closes the circle — literally. Area and perimeter formulas for polygons are derived, not just memorized. Circle theorems — central angles, inscribed angles, arc length, sector area — reveal the elegant relationship between angle and arc. Surface area and volume extend flat geometry into space: prisms, pyramids, cylinders, cones, and spheres. The applications are intensely practical. Architects calculate floor area for building permits, wall area for paint, roof area for shingles, and volume for HVAC sizing. Students design a building or structure and compute every measurement an architect would need. RStudio's `sf` package computes areas of real land parcels. Physical models (nets, cardboard, containers) keep the geometry tangible. The capstone project ties together everything from the course: logical reasoning, congruence, similarity, trigonometry, coordinate geometry, and measurement.

## Math Concepts

- Area formulas: triangle, parallelogram, trapezoid, regular polygon, composite figures §111.41(c)(11)
- Perimeter and circumference §111.41(c)(11)
- Circle vocabulary: radius, diameter, chord, secant, tangent, central angle, inscribed angle, arc, sector §111.41(c)(10)
- Circle theorems: inscribed angle = half central angle, tangent-radius perpendicularity §111.41(c)(10)
- Arc length and sector area §111.41(c)(10)
- Surface area: prisms, cylinders, pyramids, cones §111.41(c)(12)
- Volume: prisms, cylinders, pyramids, cones, spheres §111.41(c)(12)
- Cross-sections of 3D figures §111.41(c)(12)
- Density and capacity applications §111.41(c)(12)
- Geometric probability (continued from Unit 4) §111.41(c)(13)

---

## Lesson Sequence

### Week 1: Area, Perimeter, and Circles (≈8.3 hours)

#### Lesson 6.1 — Area Formulas: Derivation, Not Memorization (2.5 hrs)
**Geometry Focus:** Deriving area formulas from the rectangle
**Activity:**
- Start with the rectangle: `A = l × w`. This is the foundation.
- **Parallelogram:** Cut a triangle from one end, move it to the other → rectangle. `A = b × h`.
- **Triangle:** A triangle is half a parallelogram. `A = ½bh`.
- **Trapezoid:** Two copies of a trapezoid form a parallelogram with base `(b₁ + b₂)` and height h. `A = ½(b₁ + b₂)h`.
- **Regular polygon:** Divide into n congruent triangles from the center. Each has base = side length (s) and height = apothem (a). Total: `A = ½ × perimeter × apothem = ½Pa`.
- GeoGebra: Animate each derivation — show the cutting, rearranging, and area calculation dynamically.
- Students derive each formula in their notes with diagrams. This is more durable than memorization.
- Practice: 15 area problems with various shapes. Include composite figures (shapes made of rectangles, triangles, and semicircles combined).

**TEKS:** §111.41(c)(11)

#### Lesson 6.2 — Composite Figures and Real Floor Plans (2 hrs)
**Geometry Focus:** Computing area and perimeter of irregular shapes
**Activity:**
- Composite figures: Break a complex shape into simpler shapes (rectangles, triangles, semicircles). Find each area separately. Add (or subtract, for holes).
- Floor plan analysis: Students receive a simplified floor plan of a Houston building (or classroom).
  - Calculate the total floor area.
  - Calculate the perimeter (for baseboard installation).
  - Calculate the area of specific rooms.
- R lab: Compute area of an irregular polygon given its vertices using the Shoelace Formula:
```r
# Shoelace formula for polygon area
shoelace_area <- function(x, y) {
  n <- length(x)
  x <- c(x, x[1])
  y <- c(y, y[1])
  area <- abs(sum(x[1:n] * y[2:(n+1)] - x[2:(n+1)] * y[1:n])) / 2
  return(area)
}

# Example: quadrilateral with vertices (0,0), (4,0), (5,3), (1,4)
shoelace_area(c(0, 4, 5, 1), c(0, 0, 3, 4))  # 15.5
```
- Practice: 8 composite figure area problems.

**TEKS:** §111.41(c)(11)

#### Lesson 6.3 — Circles: Vocabulary and Circumference (1.5 hrs)
**Geometry Focus:** Circle terminology, circumference formula
**Activity:**
- Vocabulary:
  - **Radius (r):** Distance from center to any point on the circle.
  - **Diameter (d):** Distance across the circle through the center. `d = 2r`.
  - **Chord:** Segment with both endpoints on the circle.
  - **Secant:** Line that intersects the circle at two points.
  - **Tangent:** Line that touches the circle at exactly one point.
  - **Arc:** Portion of the circumference.
  - **Central angle:** Angle at the center with sides along radii.
  - **Inscribed angle:** Angle with vertex on the circle and sides along chords.
- Circumference: `C = 2πr = πd`. Pi (π) is the ratio of circumference to diameter for any circle.
- Physical measurement: Students measure the circumference and diameter of 5 circular objects (cans, plates, wheels). Calculate C/d. Average should be ≈ 3.14159...
- GeoGebra: Construct a circle. Measure circumference and diameter. Compute the ratio.
- Practice: 8 circumference problems.

**TEKS:** §111.41(c)(10)

#### Lesson 6.4 — Circle Area, Arc Length, and Sector Area (2.3 hrs)
**Geometry Focus:** Area of circles, arcs, and sectors
**Activity:**
- **Circle area:** `A = πr²`.
  - Derivation: Cut a circle into many thin sectors. Rearrange into an approximate parallelogram with base ≈ πr and height ≈ r. Area ≈ πr × r = πr². GeoGebra: Animate this.
- **Arc length:** An arc subtended by central angle θ (in degrees): `L = (θ/360) × 2πr`.
- **Sector area:** A sector with central angle θ: `A = (θ/360) × πr²`.
- Analogy: Arc length is to circumference as sector area is to full area — both are the fraction θ/360.
- Architecture: Arched doorways, rotundas, circular windows. A semicircular arch has arc length = πr.
- Practice: 12 problems — circle area, arc length, sector area. Include composite shapes with circular parts.

**TEKS:** §111.41(c)(10), §111.41(c)(11)

---

### Week 2: Circle Theorems and 3D Figures (≈8.3 hours)

#### Lesson 6.5 — Inscribed Angles and Circle Theorems (2 hrs)
**Geometry Focus:** Inscribed angle theorem, tangent-radius relationship
**Activity:**
- **Inscribed Angle Theorem:** An inscribed angle is half the central angle that subtends the same arc.
  - GeoGebra: Construct a central angle and an inscribed angle that intercept the same arc. Measure both. The inscribed angle is always half.
  - Corollary: An inscribed angle in a semicircle is 90° (since the central angle is 180°).
- **Tangent-Radius Theorem:** A tangent line is perpendicular to the radius at the point of tangency.
  - GeoGebra: Construct a tangent to a circle. Measure the angle between the tangent and the radius. It's always 90°.
- Architecture: The Polsby-Popper compactness score (from S500) uses `4πA/P²`. This ratio measures how close a shape is to a circle (which has the maximum area-to-perimeter ratio). Now students understand the geometry behind it.
- Practice: 10 problems — find missing angles using inscribed angle theorem, tangent-radius relationship.

**TEKS:** §111.41(c)(10)

#### Lesson 6.6 — Surface Area: Prisms and Cylinders (2 hrs)
**Geometry Focus:** Computing surface area of 3D figures
**Activity:**
- **Prism:** Surface area = 2 × (base area) + (perimeter of base) × height. Think of it as two bases plus the lateral faces (rectangles wrapping around).
- **Cylinder:** Surface area = 2πr² + 2πrh. Two circular bases plus a rectangular wrap (when unrolled).
- Nets: Unfold each 3D shape into a flat net. The surface area is the total area of the net.
- Physical activity: Cut out nets on cardboard. Fold into 3D shapes. Measure and compute surface area.
- Architecture: Surface area of a building = amount of exterior cladding needed.
  - A rectangular building 30m × 20m × 12m: How many square meters of glass/cladding for the walls? How many square meters of roofing?
- Practice: 10 surface area problems (rectangular prisms, triangular prisms, cylinders).

**TEKS:** §111.41(c)(12)

#### Lesson 6.7 — Surface Area: Pyramids and Cones (1.5 hrs)
**Geometry Focus:** Surface area of pyramids and cones
**Activity:**
- **Pyramid:** Surface area = base area + ½ × perimeter × slant height. The lateral faces are triangles.
  - Slant height (l) ≠ height (h). Use Pythagorean theorem to find l from h and the apothem of the base.
- **Cone:** Surface area = πr² + πrl (base + lateral surface). The lateral surface unrolls into a sector.
- Physical: Build paper models of a pyramid and cone from nets.
- Architecture: The Luxor Hotel (Las Vegas) is a square pyramid. Estimate its surface area from known dimensions.
- Practice: 8 problems.

**TEKS:** §111.41(c)(12)

#### Lesson 6.8 — Volume: Prisms, Cylinders, Pyramids, Cones, Spheres (2.8 hrs)
**Geometry Focus:** Volume formulas and applications
**Activity:**
- **Prism/Cylinder:** `V = (base area) × height = Bh`.
  - Rectangular prism: `V = lwh`. Cylinder: `V = πr²h`.
- **Pyramid/Cone:** `V = ⅓Bh`. One-third of the corresponding prism/cylinder.
  - Demonstration: Fill a pyramid-shaped container with water. Pour into a prism with the same base and height. It takes exactly 3 fills. The ⅓ factor is real.
- **Sphere:** `V = ⁴⁄₃πr³`. Surface area: `SA = 4πr²`.
- Cross-sections: What shape do you get when you slice a 3D figure?
  - Cylinder cut parallel to base → circle.
  - Cylinder cut perpendicular to base → rectangle.
  - Cone cut parallel to base → circle.
  - Sphere cut by any plane → circle.
- Architecture/Engineering applications:
  1. Volume of a cylindrical water tank (radius 3m, height 8m): `V = π(9)(8) ≈ 226.2 m³ = 226,200 liters`.
  2. Volume of a conical pile of gravel (radius 5m, height 4m): `V = ⅓π(25)(4) ≈ 104.7 m³`.
  3. How much concrete for a spherical dome (radius 10m, half-sphere): `V = ½ × ⁴⁄₃π(1000) ≈ 2094.4 m³`.
- Practice: 12 volume problems.
- GeoGebra 3D: Construct 3D shapes. Use the volume tool. Verify calculations.

**TEKS:** §111.41(c)(12)

---

### Week 3: Applications and the Capstone Design Project (≈8.3 hours)

#### Lesson 6.9 — Density, Capacity, and Real-World Volume (1.5 hrs)
**Geometry Focus:** Applying volume to practical problems
**Activity:**
- Density = mass / volume. If you know the volume and density of a material, you can find the mass.
  - A concrete column is a cylinder with radius 0.3m and height 4m. Concrete density ≈ 2,400 kg/m³. Volume = π(0.09)(4) ≈ 1.13 m³. Mass ≈ 2,712 kg.
- Capacity: 1 m³ = 1,000 liters. 1 ft³ ≈ 7.48 gallons.
  - A swimming pool is 25m × 12.5m × 2m. Volume = 625 m³ = 625,000 liters.
- HVAC: Air volume in a room determines heating/cooling requirements. A room 5m × 4m × 3m = 60 m³ of air.
- Practice: 8 density and capacity problems.

**TEKS:** §111.41(c)(12)

#### Lesson 6.10 — Computing Areas of Real Land Parcels (2 hrs)
**Geometry Focus:** Applying area formulas to geospatial data
**Activity:**
- R lab using `sf` package: Compute the area and perimeter of real land parcels.
```r
library(sf)
library(tidyverse)

# Create a polygon from coordinates (simplified parcel)
parcel <- st_polygon(list(matrix(c(
  0, 0,
  100, 0,
  120, 80,
  50, 100,
  -10, 60,
  0, 0
), ncol = 2, byrow = TRUE)))

parcel_sf <- st_sfc(parcel)
st_area(parcel_sf)       # Area in square units
# Perimeter
st_length(st_cast(parcel_sf, "MULTILINESTRING"))

plot(parcel_sf, col = "lightblue", main = "Land Parcel")
```
- Connection to S500: The redistricting lab used `sf` for district areas. Now students understand the geometry (Shoelace formula) that `st_area()` uses internally.
- Students compute areas of 3 simplified Houston parcels from coordinates.
- Compare: hand calculation (Shoelace formula) vs. `sf` computation. They should match.

**TEKS:** §111.41(c)(11)

#### Lesson 6.11 — Capstone Design Project Workshop (3 hrs)
**Activity:**
- Students create a **Capstone Design Project** — designing a building or structure and computing all geometric measurements.
- Requirements:
  1. **Design:** Draw a floor plan (2D) and a 3D sketch (or GeoGebra/SketchUp model) of a building or structure. It must include:
     - At least 2 rectangular rooms.
     - At least 1 non-rectangular area (triangular, trapezoidal, or circular).
     - At least 1 three-dimensional feature (a cylinder, cone, pyramid, or dome).
  2. **Area calculations:**
     - Floor area of each room and total floor area.
     - Wall area (for paint/cladding).
     - Roof area.
  3. **Volume calculations:**
     - Interior volume of the building (for HVAC sizing).
     - Volume of any cylindrical/conical/spherical features.
  4. **Circle geometry:** Include at least one circular element (arch, rotunda, circular window). Calculate arc length, sector area, or circumference.
  5. **Proof:** Include one coordinate proof or congruence/similarity proof related to the design (e.g., prove the roof is an isosceles triangle, prove two rooms are congruent rectangles).
  6. **Visualizations:** At least 2 — floor plan with dimensions, and either a GeoGebra 3D model or a physical model with measurements labeled.
  7. **Written analysis** (1 page): Describe the design, list all calculations, and explain how geometry was essential to the design process.
- Workshop time: designing, computing, modeling, writing.

#### Lesson 6.12 — Capstone Presentations & Course Assessment (1.8 hrs)
**Activity:**
- Each student presents their Capstone Design Project (5 minutes + 2 minutes Q&A).
- Scoring:
  - Mathematical accuracy and completeness (35%)
  - Design quality and creativity (20%)
  - Visualizations — clear, labeled, relevant (15%)
  - Proof quality (15%)
  - Written analysis and presentation (15%)
- Unit checkpoint quiz: Area formulas, circle theorems, surface area, volume (25 minutes).
- Course reflection: "What geometric concept surprised you the most? How do you see geometry differently in the world around you now?"
- Portfolio assembly: Students compile their best work from each M200 unit.

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Area, Volume & Circles | Individual | 25 |
| Area Derivation & Practice | Practice | 20 |
| Composite Figures Lab | Lab | 20 |
| Circle Theorems Practice | Practice | 20 |
| Surface Area Practice | Practice | 15 |
| Volume Practice | Practice | 15 |
| RStudio Land Parcel Lab | Lab | 20 |
| Capstone Design Project | Project | 55 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

area, perimeter, base, height, apothem, composite figure, circle, radius, diameter, chord, secant, tangent, central angle, inscribed angle, arc, minor arc, major arc, semicircle, sector, arc length, sector area, circumference, pi, inscribed angle theorem, tangent-radius theorem, surface area, lateral surface area, net, prism, cylinder, pyramid, cone, sphere, volume, cross-section, density, capacity, Shoelace formula, floor plan, HVAC, scale, blueprint
