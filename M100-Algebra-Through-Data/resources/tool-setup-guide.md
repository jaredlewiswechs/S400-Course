# Tool Setup Guide — M100 Algebra Through Data

## RStudio

Students entering M100 from S400 should already have RStudio set up. If not, follow the S400 R Setup Guide.

### Additional Packages for M100

Run this once in the RStudio Console:

```r
install.packages(c(
  "tidyverse",   # dplyr, ggplot2, readr, tidyr (should already be installed from S400)
  "patchwork",   # Multi-panel plots (should already be installed from S400)
  "scales",      # Axis formatting
  "rmarkdown",   # R Markdown documents
  "knitr"        # Knitting R Markdown
))
```

### R Skills Expected from S400

Students should be comfortable with:
- `read_csv()`, `head()`, `summary()`, `str()`
- `filter()`, `mutate()`, `group_by()`, `summarize()`
- `ggplot()` with `geom_point()`, `geom_line()`, `geom_col()`, `geom_smooth()`
- `labs()`, `theme_minimal()`
- Writing and saving R scripts

### New R Skills in M100

| Unit | R Skills Used |
|------|---------------|
| 1 | Defining custom functions, generating sequences with `seq()`, evaluating polynomial functions |
| 2 | Verifying polynomial identities computationally, testing equality of expressions |
| 3 | Plotting quadratics with `geom_line()`, marking zeros with `geom_point()` |
| 4 | Quadratic regression with `lm()` and `poly()`, comparing linear vs. quadratic fit |
| 5 | Writing root-finding functions, discriminant analysis |
| 6 | Radical computations, sequence generation, scientific notation in R |

---

## Desmos

**URL:** [desmos.com/calculator](https://www.desmos.com/calculator)

Desmos is the primary graphing tool in M100. It is free, browser-based, and requires no installation.

### Key Desmos Features Used in M100

| Feature | How It's Used |
|---------|---------------|
| **Graphing functions** | Plot polynomials, quadratics, radicals, and exponentials |
| **Sliders** | Explore transformations (`a`, `h`, `k` in vertex form); see the effect of changing coefficients |
| **Tables** | Enter (x, y) data and fit regression models |
| **Regression** | Fit linear (`y ~ mx + b`) and quadratic (`y ~ ax^2 + bx + c`) models to data |
| **Restrictions** | Restrict domain: `y = x^2 {0 ≤ x ≤ 5}` |
| **Points** | Plot specific points (intercepts, vertex) with labels |
| **Multiple graphs** | Compare factored and expanded forms — they should overlap |

### Desmos Activities by Unit

| Unit | Desmos Activity |
|------|-----------------|
| 1 | Pattern exploration — graph data and identify function type |
| 2 | Verify polynomial products — graph factored and expanded forms |
| 3 | Visual factoring — graph quadratics and identify x-intercepts |
| 4 | Slider exploration of transformations; quadratic art project |
| 5 | Discriminant visualization; verify solutions graphically |
| 6 | Radical function graphs; sequence vs. function comparison |

---

## GeoGebra

**URL:** [geogebra.org](https://www.geogebra.org)

GeoGebra provides virtual algebra tiles and dynamic geometry tools.

### Key GeoGebra Features Used in M100

| Feature | How It's Used |
|---------|---------------|
| **Algebra Tiles (Algebra view)** | Visual model for polynomial multiplication and factoring |
| **Dynamic Geometry** | Area models with variable dimensions; perfect square proof |
| **CAS (Computer Algebra System)** | Symbolic verification of algebraic identities |
| **Sliders** | Change variable values and see area/expression update dynamically |

### GeoGebra Activities by Unit

| Unit | GeoGebra Activity |
|------|-------------------|
| 1 | Dynamic rectangle — area changes as dimensions change |
| 2 | Algebra tiles for multiplication; area model construction |
| 3 | Algebra tiles for factoring; arrange tiles into rectangles |
| 4 | Dynamic parabola with labeled features |
| 5 | Geometric proof of completing the square |
| 6 | Square root geometry (diagonal of a square) |

### GeoGebra Algebra Tiles Guide

Virtual algebra tiles represent:
- **Blue large square:** `x^2`
- **Green rectangle:** `x` (or `1 · x`)
- **Yellow small square:** `1`
- **Red versions:** Negative values (`-x^2`, `-x`, `-1`)

To multiply `(x + 3)(x + 2)`:
1. Place `(x + 3)` along one side.
2. Place `(x + 2)` along the other side.
3. Fill in the rectangle: `x^2 + 2x + 3x + 6 = x^2 + 5x + 6`.

To factor `x^2 + 5x + 6`:
1. Lay out all the tiles: one `x^2`, five `x`s, six `1`s.
2. Arrange them into a rectangle.
3. Read the dimensions: `(x + 2)` by `(x + 3)`.

---

## Graphing Calculators

Any graphing calculator (TI-84, TI-Nspire, Casio fx-CG50, etc.) can supplement Desmos.

### Calculator Skills for M100

| Skill | Keys (TI-84) |
|-------|--------------|
| Enter a function | `Y=`, type expression |
| Graph | `GRAPH` |
| Find zeros | `2nd` → `CALC` → `2:zero` |
| Find vertex (max/min) | `2nd` → `CALC` → `3:minimum` or `4:maximum` |
| Table of values | `2nd` → `TABLE` |
| Evaluate | Store value: `5` → `STO→` → `X`, then type expression and `ENTER` |

---

## Folder Structure Convention

Each student should maintain this folder structure:

```
M100/
  unit-1/
    pattern_exploration.R
    sequence_practice.R
    pattern_portfolio.Rmd
  unit-2/
    polynomial_operations.R
    area_model_design.Rmd
  unit-3/
    factoring_practice.R
    factoring_field_guide.Rmd
  unit-4/
    quadratic_graphing.R
    quadratic_data_report.Rmd
  unit-5/
    solving_methods.R
    methods_comparison.Rmd
  unit-6/
    radicals_and_exponents.R
    capstone_portfolio.Rmd
  data/
    (shared datasets go here)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Desmos won't load | Check internet connection; try a different browser |
| GeoGebra tiles not showing | Use the Classic version (geogebra.org/classic); some browsers block Java |
| R polynomial function gives wrong values | Check parentheses and order of operations; use `*` explicitly for multiplication |
| Quadratic regression in R gives errors | Ensure `poly(x, 2, raw = TRUE)` — the `raw = TRUE` is essential |
| Calculator shows scientific notation | Press `MODE` → select `FLOAT` or `FIX` to control decimal display |
