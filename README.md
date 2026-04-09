# Integrated Curriculum — Data-Driven Social Science & Mathematics

This repository contains full curriculum materials for an integrated course sequence spanning social science and mathematics. Social science courses (S-series) dual-align Texas social studies credits with specific math TEKS through data analysis and RStudio. Mathematics courses (M-series) complete full math credits using real-world applications and technology tools.

## Course Sequence

### Social Science Courses (S-Series)

| Code | Title | Grade | Hours | Credit | Social Studies TEKS | Math Alignment | Prereq |
|------|-------|-------|-------|--------|-------------------|----------------|--------|
| S400 | Economics of Real Life | 9–10 | 150 | 0.5 | Economics w/ Free Enterprise §113.31 | Algebra I §111.39 (~85%) | None |
| S500 | American Systems | 10–11 | 150 | 0.5 | US Government §113.44 | Statistics §111.47 (~55%) + Geometry §111.41 (~25%) | S400 |
| S600 | Global Patterns | 11–12 | 150 | 1.0 | World Geography §113.43 | Statistics §111.47 (~90%) + Algebra II §111.40 (~30%) | S500 |
| S700 | Capstone: The Brief | 12 | 180 | 1.0 | Social Studies Advanced Studies §113.46 | Statistics §111.47 (~95%) + Independent Study §111.45 (100%) | S600 |

### Mathematics Courses (M-Series)

| Code | Title | Grade | Hours | Credit | Math TEKS | TEKS Addressed | Prereq |
|------|-------|-------|-------|--------|-----------|----------------|--------|
| M100 | Algebra Through Data | 9–10 | 150 | 1 (Algebra I, full — paired w/ S400) | Algebra I §111.39 | §111.39(c)(6–7, 10–11) | S400 (co-req or prior) |
| M200 | Geometry of the Built World | 10–11 | 150 | 1 (Geometry, full) | Geometry §111.41 | §111.41(c)(1–13) | M100 or Algebra I equivalent |

### How the Courses Fit Together

```
Grade 9–10:   S400 (Economics) ──────────┐
              M100 (Algebra) ←── co-req ─┘   Together = 100% Algebra I

Grade 10–11:  S500 (Government) ──── 25% Geometry head start
              M200 (Geometry) ←── benefits from S500 head start

Grade 11–12:  S600 (World Geography)
Grade 12:     S700 (Capstone)
```

**S400 + M100:** S400 covers ~85% of Algebra I through economic applications (linear functions, exponential functions, scatterplots, correlation, systems of equations). M100 fills the remaining ~15%: polynomial operations, factoring, quadratic solving methods, radical expressions, and sequences. Together they deliver 100% Algebra I §111.39 coverage.

**S500 + M200:** S500's Redistricting Lab gives students ~25% of Geometry TEKS through area, perimeter, coordinate geometry, and logical reasoning. M200 completes the full Geometry credit through architecture, surveying, and spatial analysis.

## Design Principles

1. **Context leads.** Every unit opens with a civic, economic, geographic, or architectural question. Math and data skills are tools to answer it.
2. **Real data, not textbook data.** FRED, BLS, Census, World Bank, WHO, UN, ProPublica, and local Houston sources for social science. Architectural, engineering, and physics contexts for math.
3. **Technology as a thinking tool.** RStudio, Desmos, GeoGebra, and graphing calculators are used throughout — not for shortcuts, but for exploration, verification, and visualization.
4. **Dual alignment is structural, not cosmetic.** TEKS coverage is tracked at the lesson level; skills are practiced through real problems.
5. **Cumulative skill building.** S400 establishes R fundamentals and Algebra I reasoning. M100 deepens algebraic manipulation. S500 adds mapping and regression. M200 adds geometric proof and measurement. S600–S700 reach advanced statistics and original research.

## Four-Course R Skill Progression (S-Series)

| Course | R Skills Added |
|--------|---------------|
| S400 | tidyverse basics, ggplot2, fredr, Google Sheets, R scripts |
| S500 | sf/leaflet mapping, tidycensus, API calls (httr/jsonlite), R Markdown |
| S600 | wbstats (World Bank API), igraph (network graphs), confidence intervals, hypothesis testing, multiple regression, R Markdown (advanced) |
| S700 | GitHub for version control, knitr, full reproducible research pipeline, original data acquisition, professional typesetting |

## M-Series Tool Progression

| Course | Tools & Skills |
|--------|---------------|
| M100 | RStudio (polynomial evaluation, quadratic regression, sequence generation), Desmos (graphing, sliders, regression), GeoGebra (algebra tiles, area models), graphing calculators |
| M200 | RStudio/sf (spatial data, area computation), GeoGebra (constructions, proofs, 3D), Desmos (coordinate geometry, transformations), CAD tools (SketchUp/Tinkercad), physical tools (compass, protractor, clinometer) |

## Tools & Software

- **RStudio** (Desktop or Cloud) — primary analysis environment
- **tidyverse** (dplyr, tidyr, readr, stringr) — data wrangling
- **ggplot2** — visualization
- **fredr** — Federal Reserve Economic Data (FRED) API access
- **Google Sheets** — lightweight collaboration and data entry (S400)
- **sf / leaflet** — geospatial analysis and mapping (S500, S600, M200)
- **tidycensus** — Census/ACS data access (S500)
- **ProPublica API** — congressional data (S500)
- **wbstats** — World Bank data API (S600)
- **igraph** — network analysis and visualization (S600)
- **GitHub** — version control and collaboration (S700)
- **knitr** — reproducible document generation (S700)
- **Desmos** — interactive graphing and exploration (M100, M200)
- **GeoGebra** — dynamic geometry, algebra tiles, 3D modeling (M100, M200)
- **Graphing calculators** — computation and exploration (M100, M200)

## Repository Structure

```
S400-Economics-of-Real-Life/
  course-overview.md
  unit-1-your-money-as-data/
  unit-2-supply-demand-and-the-receipt/
  unit-3-the-wage-question/
  unit-4-houstons-economy/
  unit-5-micro-business-simulation/
  unit-6-capstone-the-economic-argument/
  resources/
  assessments/

S500-American-Systems/
  course-overview.md
  unit-1-who-votes-and-why/
  unit-2-follow-the-money/
  unit-3-the-redistricting-lab/
  unit-4-policy-tracing/
  unit-5-your-representatives-record/
  unit-6-capstone-the-accountability-report/
  resources/
  assessments/

S600-Global-Patterns/
  course-overview.md
  unit-1-measuring-a-country/
  unit-2-the-development-question/
  unit-3-trade-networks/
  unit-4-health-as-data/
  unit-5-conflict-mapping/
  unit-6-capstone-the-country-brief/
  resources/
  assessments/

S700-Capstone-The-Brief/
  course-overview.md
  phase-1-problem-scoping/
  phase-2-data-acquisition-and-cleaning/
  phase-3-analysis-sprint/
  phase-4-the-brief/
  phase-5-the-defense/
  phase-6-portfolio-and-reflection/
  resources/
  assessments/

M100-Algebra-Through-Data/
  course-overview.md
  unit-1-patterns-in-data/
  unit-2-polynomial-operations/
  unit-3-factoring/
  unit-4-quadratic-functions/
  unit-5-solving-quadratics/
  unit-6-radicals-sequences-and-exponent-laws/
  resources/
  assessments/

M200-Geometry-of-the-Built-World/
  course-overview.md
  unit-1-foundations-and-logical-reasoning/
  unit-2-parallel-lines-and-triangles/
  unit-3-triangle-congruence-and-proofs/
  unit-4-similarity-and-right-triangles/
  unit-5-coordinate-geometry-and-transformations/
  unit-6-area-volume-and-circles/
  resources/
  assessments/
```

## License

Curriculum materials in this repository are intended for educational use.


## WebR Standalone Learning App

A standalone browser app for learning and executing R code via WebR is available in:

- `webr-learning-suite/`

Run it locally with:

```bash
cd webr-learning-suite
python3 -m http.server 8080
```

Then visit <http://localhost:8080>.
