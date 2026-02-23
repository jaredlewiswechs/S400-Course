# S500 — American Systems

## Course Information

| Field | Detail |
|-------|--------|
| Course Code | S500 |
| Title | American Systems |
| Grade Band | 10–11 |
| Instructional Hours | 150 |
| Credit | 0.5 |
| Subject Area | Social Science — Government |
| Social Studies TEKS | United States Government §113.44 |
| Math Alignment | Statistics §111.47 (~55%) + Geometry §111.41 (~25%) |
| Statistics TEKS Addressed | §111.47(c)(2), (4), (7) |
| Geometry TEKS Addressed | §111.41(c)(2), (5), (11) |
| Prerequisites | S400 (Economics of Real Life) |
| Primary Tools | RStudio, tidyverse, ggplot2, sf, leaflet, tidycensus, ProPublica API |

## Course Description

How American government works — from the data it produces. Students analyze voting patterns, budgets, redistricting, and policy outcomes using real datasets from the Census, ProPublica, and state/federal agencies. The Redistricting Lab is the centerpiece geometry unit: students learn area, perimeter, and the Polsby-Popper compactness score by drawing and evaluating actual congressional districts. Mapping with `sf` and `leaflet` transforms abstract political geography into something students can see, build, and critique. The statistics strand deepens what S400 introduced: students move from correlation to regression, from bar charts to hypothesis testing (intuitive, not formula-heavy), and from single datasets to multi-source investigations. The course earns a US Government credit while covering ~55% of Statistics TEKS and ~25% of Geometry TEKS.

## Statistics §111.47 Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.47(c)(2) | Statistical process — collecting, organizing, analyzing, interpreting data | All units |
| §111.47(c)(4) | Probability and counting — survey design, sampling, margin of error | Units 1, 4 |
| §111.47(c)(7) | Bivariate data — scatterplots, regression, correlation, residuals | Units 1, 2, 5 |

## Geometry §111.41 Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.41(c)(2) | Coordinate and transformational geometry | Unit 3 |
| §111.41(c)(5) | Logical reasoning and proof | Units 3, 4 |
| §111.41(c)(11) | Two-dimensional figures — area, perimeter, composite shapes | Unit 3 |

## US Government §113.44 Alignment Summary

| Strand | Description | Primary Unit Coverage |
|--------|-------------|----------------------|
| (c)(1) | Principles of government — consent of the governed, limited government, federalism | Units 1, 4 |
| (c)(2) | Constitution — structure, amendments, separation of powers | Units 2, 4 |
| (c)(3) | Federalism — national, state, local government roles | Units 2, 4 |
| (c)(4) | Legislative branch — Congress, lawmaking process | Units 2, 5 |
| (c)(5) | Executive branch — President, agencies, bureaucracy | Unit 4 |
| (c)(6) | Judicial branch — courts, judicial review, landmark cases | Unit 4 |
| (c)(7) | Political process — voting, elections, political parties, interest groups | Units 1, 3 |
| (c)(8) | Rights and responsibilities — Bill of Rights, civic duties, voting | Units 1, 6 |
| (c)(9) | Government and free enterprise — regulation, taxation, budgets | Unit 2 |
| (c)(17–19) | Critical thinking, communication, problem solving | All units |

## Pacing Guide (150 Hours)

| Unit | Title | Hours | Weeks (~8.3 hrs/wk) |
|------|-------|-------|----------------------|
| 1 | Who Votes and Why | 25 | 3 |
| 2 | Follow the Money | 25 | 3 |
| 3 | The Redistricting Lab | 25 | 3 |
| 4 | Policy Tracing | 25 | 3 |
| 5 | Your Representative's Record | 25 | 3 |
| 6 | Capstone: The Accountability Report | 25 | 3 |
| **Total** | | **150** | **18** |

## Assessment Structure

| Component | Weight | Description |
|-----------|--------|-------------|
| R Labs & Maps | 30% | Data analysis and geospatial labs in RStudio |
| Policy Analysis Memos | 25% | Written analysis of government data using civic and statistical vocabulary |
| Unit Projects | 30% | Culminating products (maps, reports, accountability report) |
| Participation & Checkpoints | 15% | Discussion, peer review, checkpoint quizzes |

## R/RStudio Skill Progression

Students enter S500 with R fundamentals from S400 (tidyverse, ggplot2, basic R Markdown). S500 builds on that base:

| Unit | New R Skills Introduced |
|------|------------------------|
| 1 | `tidycensus` for ACS data, `prop.table()`, basic survey analysis, chi-square test (intuitive) |
| 2 | ProPublica API with `httr`/`jsonlite`, `treemapify` or proportional area charts, budget visualization |
| 3 | `sf` package for shapefiles, `leaflet` for interactive maps, area/perimeter calculation, Polsby-Popper score |
| 4 | Multi-source data joins, `gt` or `kable` for publication-quality tables, difference-in-differences (intuitive) |
| 5 | API loops (pulling data for multiple representatives), roll-call vote analysis, ideological scoring |
| 6 | Full pipeline: API → wrangle → analyze → map → narrate; polished R Markdown report with maps and tables |

## Materials & Data Sources

- **U.S. Census / ACS (via `tidycensus`):** Voting-age population, demographics, registration rates, income, education by geography
- **ProPublica Congress API:** Member info, vote records, bill sponsorship, committee assignments
- **FEC / OpenSecrets:** Campaign finance data, PAC contributions, lobbying expenditures
- **Census TIGER/Line Shapefiles (via `tigris`):** Congressional district boundaries, county boundaries, state boundaries
- **Texas Legislative Council:** Texas redistricting data, district shapefiles
- **USAspending.gov:** Federal spending by agency, program, and state
- **Ballotpedia / Vote Smart:** Election results, candidate information (teacher-curated)
- **CQ Roll Call / Voteview:** Congressional ideology scores (DW-NOMINATE), roll-call vote data
