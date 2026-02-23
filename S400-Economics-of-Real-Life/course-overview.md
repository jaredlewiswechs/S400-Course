# S400 — Economics of Real Life

## Course Information

| Field | Detail |
|-------|--------|
| Course Code | S400 |
| Title | Economics of Real Life |
| Grade Band | 9–10 |
| Instructional Hours | 150 |
| Credit | 0.5 |
| Subject Area | Social Science — Economics |
| Social Studies TEKS | Economics with Emphasis on the Free Enterprise System and Its Benefits §113.31 |
| Math Alignment | Algebra I §111.39 (~85% coverage) |
| Algebra I TEKS Addressed | §111.39(c)(2), (3), (4), (5), (8), (9), (12) |
| Prerequisites | None |
| Primary Tools | RStudio, tidyverse, ggplot2, fredr, BLS data, Google Sheets |

## Course Description

Students use economic data to answer questions about money, work, prices, and markets. RStudio is introduced as the calculator — every economic concept is explored through real numbers from FRED, BLS, and local Houston sources. The course is dual-aligned: students earn an Economics with Free Enterprise credit while covering ~85% of Algebra I TEKS through economic applications. Linear functions model cost and revenue. Correlation measures the relationship between education and income. Exponential functions capture inflation and compound interest. Systems of equations solve break-even problems. The math is never abstract — it always answers an economic question.

## Algebra I TEKS Alignment Summary

| TEKS | Description | Primary Unit Coverage |
|------|-------------|----------------------|
| §111.39(c)(2) | Linear functions, equations, and inequalities | Units 1, 2, 3, 5 |
| §111.39(c)(3) | Linear functions, equations, and inequalities (applications) | Units 2, 3, 4 |
| §111.39(c)(4) | Quadratic functions and equations | Unit 5 |
| §111.39(c)(5) | Exponential functions and equations | Units 1, 4 |
| §111.39(c)(8) | Data and statistical analysis — scatterplots, trend lines | Units 2, 3, 4 |
| §111.39(c)(9) | Data and statistical analysis — correlation, regression | Units 3, 4, 6 |
| §111.39(c)(12) | Number and algebraic methods | Units 1, 2, 5 |

## Economics TEKS Alignment Summary (§113.31)

| Strand | Description | Primary Unit Coverage |
|--------|-------------|----------------------|
| (c)(1) | Basics of economics — scarcity, opportunity cost, factors of production | Units 1, 2 |
| (c)(2) | Economic systems — free enterprise characteristics | Units 2, 4 |
| (c)(3) | Supply and demand — price determination, market equilibrium | Unit 2 |
| (c)(4) | Market structures — competition, monopoly, oligopoly | Units 4, 5 |
| (c)(5) | Factors of production — labor, wages, human capital | Unit 3 |
| (c)(6) | GDP, business cycles, economic indicators | Unit 4 |
| (c)(7) | Money, banking, Federal Reserve | Unit 1 |
| (c)(8) | Government role — taxation, regulation, fiscal/monetary policy | Units 4, 6 |
| (c)(9) | Personal financial literacy — budgeting, credit, saving | Unit 1 |
| (c)(10) | International trade and comparative advantage | Unit 4 |
| (c)(11) | Entrepreneurs and free enterprise | Unit 5 |
| (c)(21–23) | Critical thinking, communication, problem solving | All units |

## Pacing Guide (150 Hours)

| Unit | Title | Hours | Weeks (~8.3 hrs/wk) |
|------|-------|-------|----------------------|
| 1 | Your Money as Data | 25 | 3 |
| 2 | Supply, Demand & the Receipt | 25 | 3 |
| 3 | The Wage Question | 25 | 3 |
| 4 | Houston's Economy | 25 | 3 |
| 5 | Micro-Business Simulation | 25 | 3 |
| 6 | Capstone: The Economic Argument | 25 | 3 |
| **Total** | | **150** | **18** |

## Assessment Structure

Each unit follows a consistent assessment pattern:

| Component | Weight | Description |
|-----------|--------|-------------|
| R Labs | 30% | Guided and independent data-analysis labs in RStudio |
| Economic Analysis Memos | 25% | Written interpretations of data findings using economic vocabulary |
| Unit Project | 30% | Culminating product (visualization, simulation, or argument) |
| Participation & Checkpoints | 15% | Daily warm-ups, peer review, checkpoint quizzes |

## R/RStudio Skill Progression

| Unit | New R Skills Introduced |
|------|------------------------|
| 1 | RStudio interface, `<-` assignment, `read_csv()`, `head()`, `summary()`, basic `ggplot()` bar charts, Google Sheets import |
| 2 | `filter()`, `mutate()`, `ggplot()` scatterplots, `geom_smooth(method = "lm")`, interpreting slope |
| 3 | `group_by()`, `summarize()`, `cor()`, faceted plots, `fredr()` API calls |
| 4 | `left_join()`, multi-dataset analysis, time-series line plots, `scale_y_log10()`, exponential trend lines |
| 5 | `if_else()`, custom functions, iterative simulation, multi-panel dashboards |
| 6 | Full pipeline: import → wrangle → visualize → narrate; reproducible R Markdown reports |

## Materials & Data Sources

- **FRED (Federal Reserve Economic Data):** CPI, unemployment rate, GDP, federal funds rate, median income
- **BLS (Bureau of Labor Statistics):** Occupational Employment and Wage Statistics, Consumer Expenditure Survey, local area unemployment
- **Census / ACS:** Household income by zip code, demographic breakdowns
- **Local Houston data:** Harris County Appraisal District, Houston grocery store receipts (teacher-curated), METRO ridership, Port of Houston trade data
- **Google Sheets:** Used for collaborative data entry and lightweight analysis in Unit 1 before full R transition
