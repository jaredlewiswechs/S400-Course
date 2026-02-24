# Data Sources Reference — M200 Geometry of the Built World

## Spatial and Architectural Data by Unit

### Unit 1: Foundations & Logical Reasoning

| Resource | Description | Use |
|----------|-------------|-----|
| Building photographs | Photos of structures showing geometric elements | Identifying points, lines, planes, angles |
| Building code excerpts | Simplified building code conditional statements | Logic and conditional statement practice |

### Unit 2: Parallel Lines & Angles

| Resource | Description | Source |
|----------|-------------|--------|
| City grid maps | Street maps of Houston downtown, Midtown, or other grid-based neighborhoods | Google Maps / OpenStreetMap |
| Street intersection angles | Measured or estimated angles at non-perpendicular intersections | Teacher-measured or Google Earth |
| Urban planning diagrams | Simplified city block layouts with dimensions | Teacher-curated |

### Unit 3: Triangle Congruence & Proofs

| Resource | Description | Source |
|----------|-------------|--------|
| Truss bridge diagrams | Pratt, Warren, Howe, and K-truss designs with labeled dimensions | Engineering textbooks / public domain |
| Roof truss specifications | Common roof truss designs with angles and member lengths | Building supply catalogs |
| Transmission tower diagrams | Lattice tower cross-sections showing triangular components | Engineering references |

### Unit 4: Similarity, Right Triangles & Trigonometry

| Resource | Description | Source |
|----------|-------------|--------|
| Building heights | Known heights of school buildings, flagpoles, and Houston landmarks | School facilities / public records |
| Shadow length data | Measured shadow lengths at known times for shadow method calculations | Teacher-collected |
| Ramp specifications | ADA-compliant ramp dimensions and angle requirements | ADA Standards for Accessible Design |
| Topographic maps | Elevation data for slope angle calculations | USGS / Google Earth |

### Unit 5: Coordinate Geometry & Transformations

| Resource | Description | Source |
|----------|-------------|--------|
| Building facades | Photographs of symmetrical buildings (US Capitol, Taj Mahal, local examples) | Public domain photographs |
| Tessellation patterns | Islamic geometric art, tile patterns, brick layouts | Art history / architecture references |
| Houston landmark coordinates | Latitude/longitude of Houston landmarks (converted to local coordinate system) | Google Maps |

### Unit 6: Area, Volume, Surface Area & Circles

| Resource | Description | Source |
|----------|-------------|--------|
| Floor plans | Simplified floor plans of classrooms, homes, or commercial buildings | Teacher-curated / architectural references |
| Land parcel coordinates | Vertex coordinates of simplified Houston land parcels | Harris County Appraisal District (simplified) |
| Building dimensions | Length, width, height of real buildings for volume calculations | Public records / Google Earth |
| Tank and container specifications | Dimensions of water tanks, grain silos, swimming pools | Manufacturer specifications |

---

## Houston-Specific Resources

| Resource | Description | Units |
|----------|-------------|-------|
| Harris County Appraisal District (HCAD) | Property boundaries, building footprints, lot dimensions | 5, 6 |
| Houston city grid | Downtown Houston street layout (grid rotated ~30° from north) | 2 |
| School campus | Building heights, room dimensions, outdoor spaces for surveying | 4, 6 |
| Houston landmarks | Coordinates and dimensions of notable buildings | 4, 5 |
| Buffalo Bayou | Curved path for non-grid geometry analysis | 2, 5 |

---

## Digital Tools and Online Resources

| Resource | URL | Use in M200 |
|----------|-----|-------------|
| GeoGebra | geogebra.org | Primary construction and exploration tool |
| Desmos | desmos.com/calculator | Graphing, coordinate geometry, trig exploration |
| Google Earth | earth.google.com | Measuring real-world distances, angles, areas |
| SketchUp Free | app.sketchup.com | 3D modeling for capstone project |
| Tinkercad | tinkercad.com | Simpler 3D modeling alternative |
| PhET Simulations | phet.colorado.edu | Geometric optics, projectile motion |

---

## Data Format Conventions

When providing coordinate data to students:
- **CSV format** (`.csv`)
- **Columns:** `point_id`, `x`, `y` (or `latitude`, `longitude` for geographic data)
- **Units clearly specified:** meters, feet, or coordinate units
- **Polygons:** List vertices in order (clockwise or counterclockwise), with first vertex repeated at the end to close the polygon

### Example: Land Parcel Coordinates
```csv
point_id,x_m,y_m
A,0,0
B,100,0
C,120,80
D,50,100
E,-10,60
A,0,0
```

---

## Teacher-Prepared Materials

Many M200 datasets are best prepared by the teacher to match local contexts:

| Material | Preparation Notes |
|----------|-------------------|
| Building photographs | Collect 10–15 photos of local buildings showing geometric features |
| Truss diagrams | Annotate with accurate dimensions (from engineering references) |
| Floor plans | Simplify real floor plans to appropriate complexity; add clear dimensions |
| Campus survey baseline | Pre-measure key distances on campus for student verification |
| City grid overlay | Print Google Maps sections at a known scale; add coordinate axes |
| Clinometer targets | Identify 5–8 measurable heights on campus; record actual heights for verification |
