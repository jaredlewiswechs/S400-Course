# Social Science Curriculum — Data-Driven Sequence

This repository contains full curriculum materials for the Social Science data-integrated course sequence. Each course dual-aligns a Texas social studies credit with specific math TEKS, using RStudio and real datasets as the primary analytical tools.

## Course Sequence

| Code | Title | Grade | Hours | Credit | Social Studies TEKS | Math Alignment | Prereq |
|------|-------|-------|-------|--------|-------------------|----------------|--------|
| S400 | Economics of Real Life | 9–10 | 150 | 0.5 | Economics w/ Free Enterprise §113.31 | Algebra I §111.39 (~85%) | None |
| S500 | American Systems | 10–11 | 150 | 0.5 | US Government §113.44 | Statistics §111.47 (~55%) + Geometry §111.41 (~25%) | S400 |
| S600 | Global Patterns | 11–12 | 150 | 1.0 | World Geography §113.43 | Statistics §111.47 (~90%) + Algebra II §111.40 (~30%) | S500 |
| S700 | Capstone: The Brief | 12 | 180 | 1.0 | Social Studies Advanced Studies §113.46 | Statistics §111.47 (~95%) + Independent Study §111.45 (100%) | S600 |

## Design Principles

1. **Social studies content leads.** Every unit opens with a civic, economic, or geographic question. Math and data skills are tools to answer it.
2. **Real data, not textbook data.** FRED, BLS, Census, World Bank, WHO, UN, ProPublica, and local Houston sources.
3. **RStudio is the calculator.** Students learn R progressively — from reading CSVs and making scatterplots (S400) to inference, network analysis, and original research (S600–S700).
4. **Dual alignment is structural, not cosmetic.** TEKS coverage is tracked at the lesson level; math skills are practiced through social science problems.
5. **Cumulative skill building.** S400 establishes R fundamentals and Algebra I reasoning. S500 adds mapping and regression. S600 reaches near-complete Statistics coverage with inference. S700 is original research.

## Four-Course R Skill Progression

| Course | R Skills Added |
|--------|---------------|
| S400 | tidyverse basics, ggplot2, fredr, Google Sheets, R scripts |
| S500 | sf/leaflet mapping, tidycensus, API calls (httr/jsonlite), R Markdown |
| S600 | wbstats (World Bank API), igraph (network graphs), confidence intervals, hypothesis testing, multiple regression, R Markdown (advanced) |
| S700 | GitHub for version control, knitr, full reproducible research pipeline, original data acquisition, professional typesetting |

## Tools & Software

- **RStudio** (Desktop or Cloud) — primary analysis environment
- **tidyverse** (dplyr, tidyr, readr, stringr) — data wrangling
- **ggplot2** — visualization
- **fredr** — Federal Reserve Economic Data (FRED) API access
- **Google Sheets** — lightweight collaboration and data entry (S400)
- **sf / leaflet** — geospatial analysis and mapping (S500, S600)
- **tidycensus** — Census/ACS data access (S500)
- **ProPublica API** — congressional data (S500)
- **wbstats** — World Bank data API (S600)
- **igraph** — network analysis and visualization (S600)
- **GitHub** — version control and collaboration (S700)
- **knitr** — reproducible document generation (S700)

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
```

## License

Curriculum materials in this repository are intended for educational use.
