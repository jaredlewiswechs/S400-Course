# Social Science Curriculum — Data-Driven Sequence

This repository contains full curriculum materials for the Social Science data-integrated course sequence. Each course dual-aligns a Texas social studies credit with specific math TEKS, using RStudio and real datasets as the primary analytical tools.

## Course Sequence

| Code | Title | Grade | Hours | Credit | Social Studies TEKS | Math Alignment | Prereq |
|------|-------|-------|-------|--------|-------------------|----------------|--------|
| S400 | Economics of Real Life | 9–10 | 150 | 0.5 | Economics w/ Free Enterprise §113.31 | Algebra I §111.39 (~85%) | None |
| S500 | American Systems | 10–11 | 150 | 0.5 | US Government §113.44 | Statistics §111.47 (~55%) + Geometry §111.41 (~25%) | S400 |

## Design Principles

1. **Social studies content leads.** Every unit opens with a civic or economic question. Math and data skills are tools to answer it.
2. **Real data, not textbook data.** FRED, BLS, Census, ProPublica, and local Houston sources.
3. **RStudio is the calculator.** Students learn R progressively — from reading CSVs and making scatterplots (S400) to mapping and regression (S500).
4. **Dual alignment is structural, not cosmetic.** TEKS coverage is tracked at the lesson level; math skills are practiced through social science problems.
5. **Cumulative skill building.** S400 establishes R fundamentals and Algebra I reasoning. S500 assumes that base and layers on statistics and geospatial analysis.

## Tools & Software

- **RStudio** (Desktop or Cloud) — primary analysis environment
- **tidyverse** (dplyr, tidyr, readr, stringr) — data wrangling
- **ggplot2** — visualization
- **fredr** — Federal Reserve Economic Data (FRED) API access
- **Google Sheets** — lightweight collaboration and data entry (S400)
- **sf / leaflet** — geospatial analysis and mapping (S500)
- **tidycensus** — Census/ACS data access (S500)
- **ProPublica API** — congressional data (S500)

## Repository Structure

```
S400-Economics-of-Real-Life/
  course-overview.md          # Syllabus, pacing, TEKS alignment
  unit-1-your-money-as-data/
  unit-2-supply-demand-and-the-receipt/
  unit-3-the-wage-question/
  unit-4-houstons-economy/
  unit-5-micro-business-simulation/
  unit-6-capstone-the-economic-argument/
  resources/                  # Data dictionaries, R setup guide, rubrics
  assessments/                # Unit assessments and rubric masters

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
```

## License

Curriculum materials in this repository are intended for educational use.
