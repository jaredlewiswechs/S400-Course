# S600 — Global Patterns

## Course Information

| Field | Detail |
|-------|--------|
| Course Code | S600 |
| Title | Global Patterns |
| Grade Band | 11–12 |
| Instructional Hours | 150 |
| Credit | 1.0 |
| Subject Area | Social Science — World Geography |
| Social Studies TEKS | World Geography Studies §113.43 |
| Math Alignment | Statistics §111.47 (~90%) + Algebra II §111.40 (~30%) |
| Statistics TEKS Addressed | §111.47(c)(3), (4), (5), (6), (7) |
| Algebra II TEKS Addressed | §111.40(c)(4) |
| Prerequisites | S500 (American Systems) |
| Primary Tools | RStudio, tidyverse, ggplot2, wbstats, leaflet, igraph, R Markdown |

## Course Description

Why do countries develop differently? Students enter S600 with two courses of R experience and a strong foundation in correlation and regression. Now they go global — and go deeper into statistics. World Bank, UN, and WHO data replace FRED and BLS as the primary sources. The geography is not about memorizing capitals; it's about understanding why some countries are rich and others poor, why life expectancy varies by 30 years across borders, why trade flows in certain directions, and why conflict clusters where it does. The statistics strand reaches near-complete coverage: confidence intervals, hypothesis testing, p-values, Type I and II errors, chi-square tests (formal), ANOVA (intuitive), and multiple regression. Network graphs (with `igraph`) model trade relationships. By the end, students can conduct a full bivariate and inferential analysis — the core of AP/college-level statistics — through global social science questions. This is a full-credit (1.0) course.

## Statistics §111.47 Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.47(c)(3) | Probability — sample spaces, conditional probability, independence | Units 2, 4 |
| §111.47(c)(4) | Probability distributions — normal distribution, sampling distributions, CLT | Units 1, 2, 4 |
| §111.47(c)(5) | Confidence intervals — constructing and interpreting | Units 2, 4, 6 |
| §111.47(c)(6) | Hypothesis testing — null/alternative, p-values, Type I/II errors, significance | Units 2, 4, 5, 6 |
| §111.47(c)(7) | Bivariate data — regression, residuals, multiple regression, categorical associations | Units 1, 2, 3, 5, 6 |

## Algebra II §111.40 Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.40(c)(4) | Exponential and logarithmic functions and equations | Units 1, 2, 4 |

## World Geography §113.43 Alignment Summary

| Strand | Description | Primary Unit Coverage |
|--------|-------------|----------------------|
| (c)(1) | History — how geography influences historical events | Units 2, 5 |
| (c)(2) | History — physical/human geography interactions over time | Units 2, 3 |
| (c)(3) | Geography — physical processes shaping patterns | Unit 5 |
| (c)(4) | Geography — human geography patterns | Units 1, 2, 4, 6 |
| (c)(5) | Geography — impact of political boundaries | Units 3, 5 |
| (c)(6) | Economics — economic development patterns | Units 1, 2, 3 |
| (c)(7) | Economics — global trade and interdependence | Unit 3 |
| (c)(8) | Government — political systems and governance | Units 2, 5 |
| (c)(9) | Citizenship — rights, responsibilities, international organizations | Units 4, 5 |
| (c)(10) | Culture — cultural patterns, diffusion, diversity | Units 2, 4 |
| (c)(11) | Science/technology — technology's impact on development | Units 2, 4 |
| (c)(12–14) | Critical thinking, communication, problem solving | All units |

## Pacing Guide (150 Hours)

| Unit | Title | Hours | Weeks (~8.3 hrs/wk) |
|------|-------|-------|----------------------|
| 1 | Measuring a Country | 25 | 3 |
| 2 | The Development Question | 25 | 3 |
| 3 | Trade Networks | 25 | 3 |
| 4 | Health as Data | 25 | 3 |
| 5 | Conflict Mapping | 25 | 3 |
| 6 | Capstone: The Country Brief | 25 | 3 |
| **Total** | | **150** | **18** |

## Assessment Structure

| Component | Weight | Description |
|-----------|--------|-------------|
| R Labs & Inference Exercises | 30% | Data analysis, hypothesis testing, and visualization labs |
| Geographic Analysis Memos | 25% | Written interpretations connecting data to geographic/development concepts |
| Unit Projects | 30% | Culminating products (analyses, network maps, country briefs) |
| Participation & Checkpoints | 15% | Discussion, peer review, checkpoint quizzes |

## R/RStudio Skill Progression (Building on S400–S500)

Students enter with: tidyverse fluency, ggplot2, sf/leaflet mapping, API calls, R Markdown, regression, correlation.

| Unit | New R Skills Introduced |
|------|------------------------|
| 1 | `wbstats` (World Bank API), `scale_*_log10()` for development data, `geom_text_repel()`, multiple summary statistics |
| 2 | Normal distribution functions (`dnorm()`, `pnorm()`, `qnorm()`), `sample_n()`, bootstrapping, `t.test()`, confidence intervals |
| 3 | `igraph` for network graphs, adjacency matrices, `graph_from_data_frame()`, network metrics (degree, betweenness) |
| 4 | `prop.test()`, chi-square formal test, ANOVA with `aov()`, multiple regression with `lm()`, interaction terms |
| 5 | Spatial joins, conflict data overlays, logistic regression (intuitive), time-series decomposition |
| 6 | Full pipeline: multi-source → wrangle → infer → map → narrate; professional R Markdown with citations |

## Materials & Data Sources

- **World Bank (via `wbstats`):** GDP per capita, life expectancy, literacy, infant mortality, Gini coefficient, trade data, 200+ countries
- **WHO (Global Health Observatory):** Disease prevalence, healthcare spending, vaccination rates, maternal mortality
- **UN Data:** Human Development Index (HDI), refugee flows, peacekeeping missions, Sustainable Development Goals
- **UCDP (Uppsala Conflict Data Program):** Armed conflict events, fatalities, conflict types by country and year
- **CEPII (Centre d'Études Prospectives et d'Informations Internationales):** Bilateral trade data (gravity model)
- **Natural Earth / rnaturalearth:** World shapefiles for mapping
- **CIA World Factbook:** Quick reference for country-level facts
