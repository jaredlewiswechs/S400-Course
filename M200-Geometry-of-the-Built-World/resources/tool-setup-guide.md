# Tool Setup Guide — M200 Geometry of the Built World

## GeoGebra

**URL:** [geogebra.org](https://www.geogebra.org)

GeoGebra is the primary construction and exploration tool in M200. It is free, browser-based, and requires no installation.

### Recommended Versions

| Version | URL | Use in M200 |
|---------|-----|-------------|
| GeoGebra Classic | geogebra.org/classic | General constructions, proofs, 2D geometry |
| GeoGebra Geometry | geogebra.org/geometry | Compass-and-straightedge style constructions |
| GeoGebra 3D Calculator | geogebra.org/3d | Surface area, volume, cross-sections (Unit 6) |

### Key GeoGebra Skills by Unit

| Unit | Skills |
|------|--------|
| 1 | Construct points, lines, segments, rays; measure angles and lengths; compass and straightedge tools; perpendicular bisector, angle bisector |
| 2 | Construct parallel lines and transversals; measure angle pairs; construct polygons; measure interior angles |
| 3 | Construct triangles from given parts (SSS, SAS, ASA, AAS); verify congruence by measurement; build truss diagrams |
| 4 | Similar triangle constructions; dilation tool; Pythagorean theorem visualization; trig ratio exploration |
| 5 | Transformation tools (translate, reflect, rotate, dilate); symmetry identification; tessellation construction |
| 6 | 3D shapes (GeoGebra 3D); nets; cross-sections; circle constructions; arc and sector measurement |

---

## Desmos

**URL:** [desmos.com/calculator](https://www.desmos.com/calculator)

### Key Desmos Features Used in M200

| Feature | How It's Used |
|---------|---------------|
| **Graphing lines** | Parallel and perpendicular line verification (Unit 2, 5) |
| **Points and segments** | Coordinate geometry — distance, midpoint, quadrilateral classification (Unit 5) |
| **Sliders** | Explore transformations; change triangle dimensions (Units 4, 5) |
| **Polygons** | Plot and calculate areas (Unit 6) |
| **Trig functions** | Graph sin, cos, tan; inverse trig exploration (Unit 4) |

---

## RStudio (sf package)

Students entering M200 from S400/S500 may already have R experience. The `sf` (simple features) package is new for most.

### Installing sf

```r
install.packages(c(
  "sf",          # Simple features for spatial data
  "tidyverse",   # dplyr, ggplot2, etc. (should already be installed)
  "ggplot2"      # Visualization (included in tidyverse)
))
```

### Basic sf Usage for M200

```r
library(sf)
library(tidyverse)

# Create a polygon from coordinates
polygon <- st_polygon(list(matrix(c(
  0, 0,
  4, 0,
  4, 3,
  0, 3,
  0, 0
), ncol = 2, byrow = TRUE)))

# Make it an sf object
poly_sf <- st_sfc(polygon)

# Compute area and perimeter
st_area(poly_sf)            # 12
st_length(st_cast(poly_sf, "MULTILINESTRING"))  # 14

# Plot
plot(poly_sf, col = "lightblue", main = "Rectangle")
```

### sf Skills by Unit

| Unit | sf Skills |
|------|-----------|
| 5 | Apply coordinate transformations to geometric shapes; translate, reflect, rotate polygons |
| 6 | Compute area and perimeter of irregular polygons; Shoelace formula verification; land parcel analysis |

---

## CAD Tools (Unit 6)

For 3D modeling in the Capstone Design Project, students can use:

| Tool | URL | Notes |
|------|-----|-------|
| SketchUp Free | app.sketchup.com | Browser-based 3D modeling; good for buildings |
| Tinkercad | tinkercad.com | Browser-based; simpler than SketchUp; good for basic shapes |
| GeoGebra 3D | geogebra.org/3d | Already used in class; can create prisms, cylinders, cones, spheres |

Students should choose ONE tool for their 3D model. GeoGebra 3D is recommended for students who prefer to stay within familiar software.

---

## Physical Tools

M200 uses physical tools extensively. Each student (or pair) needs:

| Tool | Use |
|------|-----|
| **Ruler (30 cm)** | Measuring segments, drawing straight lines |
| **Compass** | Constructions (Unit 1), circle drawing |
| **Protractor** | Measuring and constructing angles |
| **Graph paper** | Coordinate geometry, scale drawings |
| **Scissors** | Cutting nets for 3D models |
| **Cardboard/poster board** | Building physical models (truss, nets) |
| **String** | Measuring circumference, demonstrating concepts |
| **Clinometer (DIY)** | Measuring angles of elevation (Unit 4) |

### Building a DIY Clinometer

Materials: Protractor, string (12 inches), small weight (washer, binder clip), straw or tube (for sighting).

1. Tape the straw along the flat edge of the protractor (this is the sighting tube).
2. Tie the string to the center hole of the protractor.
3. Attach the weight to the other end of the string.
4. To measure: Look through the straw at the top of the object. The string falls across the protractor, indicating the angle.
5. The angle of elevation = 90° - the reading on the protractor.

Alternative: Use a free clinometer/inclinometer app on a smartphone.

---

## Graphing Calculators

### Key Calculator Skills for M200

| Skill | Keys (TI-84) |
|-------|--------------|
| Compute trig ratios | `SIN`, `COS`, `TAN` (ensure degree mode: `MODE` → `DEGREE`) |
| Inverse trig | `2nd` → `SIN⁻¹`, `COS⁻¹`, `TAN⁻¹` |
| Square root | `2nd` → `√` |
| Pythagorean computation | Enter expression directly: `√(3^2 + 4^2)` → 5 |

**Important:** Ensure calculators are in DEGREE mode, not radian mode, for all M200 work.

---

## Folder Structure Convention

Each student should maintain this folder structure:

```
M200/
  unit-1/
    constructions/           (GeoGebra files or photos)
    logic_portfolio.Rmd
  unit-2/
    city_grid_analysis.Rmd
  unit-3/
    structural_proofs.Rmd
  unit-4/
    survey_data.csv
    land_survey_report.Rmd
  unit-5/
    transformations.R
    symmetry_analysis.Rmd
  unit-6/
    capstone_design.Rmd
    3d_model/               (SketchUp or Tinkercad files)
  data/
    (shared datasets, parcel coordinates, etc.)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| GeoGebra constructions aren't precise | Use snap-to-grid or snap-to-point; zoom in for fine adjustments |
| sf package won't install | Run `install.packages("sf")` — may need system libraries on Linux; try RStudio Cloud |
| Clinometer readings are inconsistent | Ensure the weight hangs freely; sight through the straw at the same point each time |
| Calculator gives wrong trig values | Check MODE — must be in DEGREE, not RADIAN |
| GeoGebra 3D won't load | Try a different browser (Chrome recommended); enable WebGL |
| Physical compass slips | Use a compass with a locking mechanism; press firmly at the center point |
