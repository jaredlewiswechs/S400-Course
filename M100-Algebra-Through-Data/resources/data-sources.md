# Data Sources Reference — M100 Algebra Through Data

## Real-World Datasets by Unit

M100 uses real-world data to ground algebraic concepts. Unlike S400 (which relies heavily on FRED and BLS economic data), M100 draws from physics, engineering, architecture, biology, and business contexts.

### Unit 1: Patterns in Data

| Dataset | Description | Source |
|---------|-------------|--------|
| Free-fall distance vs. time | Distance (m) fallen by a dropped object at 0.5-second intervals | Physics textbook / teacher-generated |
| Bacteria population doubling | Colony count every hour for 12 hours | Biology lab simulation |
| Car rental cost | Daily rental rates at fixed rate per day | Teacher-curated |
| Square dimensions and areas | Side length vs. area for squares (sizes 1–20) | Teacher-generated |
| Stacking patterns | Number of objects in each row of a pyramid or triangular arrangement | Teacher-generated |

### Unit 2: Polynomial Operations

| Dataset | Description | Source |
|---------|-------------|--------|
| Room dimensions and area | Rectangular room measurements with variable expressions | Architecture/floor plan contexts |
| Shipping box volumes | Box dimensions expressed as polynomials; computed volumes | Logistics contexts |
| Garden layout areas | Composite garden designs with polynomial dimensions | Landscape design |

### Unit 3: Factoring

| Dataset | Description | Source |
|---------|-------------|--------|
| Projectile height data | Ball toss height at time intervals (quadratic model) | Physics / teacher-collected |
| Revenue at different quantities | Revenue = price × quantity with price dependent on quantity | Business/economics context |
| Area and dimension relationships | Area given as trinomial; factor to find dimensions | Geometry context |

### Unit 4: Quadratic Functions & Graphs

| Dataset | Description | Source |
|---------|-------------|--------|
| Projectile motion (ball toss) | Height vs. time for a thrown ball (video analysis or simulation) | Physics / Vernier or Tracker software |
| Bridge arch measurements | (x, y) coordinates along a parabolic arch | Architecture / teacher-measured or sourced from engineering references |
| Braking distance vs. speed | Stopping distance at various speeds | NHTSA / driver education data |
| Revenue vs. price | Revenue data at different price points for a product | Business simulation |
| Water fountain arc | (x, y) coordinates of a drinking fountain stream | Teacher-measured |

### Unit 5: Solving Quadratics

| Dataset | Description | Source |
|---------|-------------|--------|
| Projectile landing problems | Launch angle, initial velocity → when does it land? | Physics applications |
| Rectangular area optimization | Given perimeter, maximize area (fencing problems) | Geometry / agriculture |
| Break-even analysis | Revenue and cost functions → find break-even quantities | Business / S400 extension |

### Unit 6: Radicals, Sequences & Exponent Laws

| Dataset | Description | Source |
|---------|-------------|--------|
| Distance between landmarks | Coordinate pairs for Houston landmarks; compute distances | Google Maps / teacher-curated |
| Salary growth (arithmetic) | Annual salary with fixed raises | Personal finance |
| Investment growth (geometric) | Monthly balance with compound interest | S400 extension |
| Viral spread simulation | Daily counts with multiplicative growth | Epidemiology simulation |
| Astronomical distances | Planet distances in scientific notation | NASA |
| Cell sizes | Measurements in micrometers, requiring scientific notation | Biology textbook |

---

## Data Format Conventions

All datasets provided to students should be:
- **CSV format** (`.csv`)
- **UTF-8 encoding**
- **Column names:** lowercase, underscores instead of spaces (e.g., `side_length`, not `Side Length`)
- **Numerical values:** no commas in numbers, no dollar signs (clean before distribution)
- **Units noted:** in a header comment or separate data dictionary

---

## Teacher-Generated Datasets

Many M100 datasets are simple enough to generate in class or provide as pre-built CSVs. Templates:

### Free-Fall Data
```csv
time_s,distance_m
0,0
0.5,1.2
1.0,4.9
1.5,11.0
2.0,19.6
2.5,30.6
3.0,44.1
```

### Braking Distance Data
```csv
speed_mph,stopping_distance_ft
10,12
20,36
30,75
40,120
50,175
60,240
70,315
```

### Bridge Arch Coordinates
```csv
x_m,y_m
-10,0
-8,5.4
-6,9.6
-4,12.6
-2,14.4
0,15.0
2,14.4
4,12.6
6,9.6
8,5.4
10,0
```

---

## External Resources

| Resource | URL | Use in M100 |
|----------|-----|-------------|
| Desmos Graphing Calculator | desmos.com/calculator | Primary graphing tool |
| GeoGebra | geogebra.org | Algebra tiles, dynamic geometry |
| PhET Simulations | phet.colorado.edu | Projectile motion simulator |
| Tracker Video Analysis | physlets.org/tracker | Analyze projectile motion from video |
| Wolfram Alpha | wolframalpha.com | Verify factoring and solutions (teacher reference) |
