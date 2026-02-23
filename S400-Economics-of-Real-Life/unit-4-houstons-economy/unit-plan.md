# Unit 4 — Houston's Economy

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Houston's Economy |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What drives Houston's economy — and how do you know when it's in trouble?* |
| Economics TEKS | §113.31(c)(4), (6), (8), (10) |
| Algebra I TEKS | §111.39(c)(2), (5), (8), (9) |
| R Skills | `left_join()`, multi-dataset analysis, time-series line plots, `scale_y_log10()`, exponential trend lines, layered `ggplot()` compositions |
| Key Deliverable | Houston Economic Dashboard — a multi-panel R visualization package with written analysis |

## Unit Narrative

Units 1–3 built the fundamentals: personal finance, markets, and labor. Now students zoom out to the macroeconomic scale — but through a local lens. Houston is not a generic city; it is the energy capital, a port city, the most diverse metro in America, and a place where oil prices ripple through every sector. Students learn GDP, business cycles, unemployment, and inflation not as textbook abstractions but as measurable phenomena visible in Houston data. The math strand advances to multi-dataset joins, time-series analysis, and exponential modeling. Students discover that GDP growth is exponential, not linear — and that a log scale reveals patterns invisible on a standard axis.

## Economics Concepts

- Gross Domestic Product (GDP): what it measures and what it misses
- Business cycles: expansion, peak, recession, trough, recovery
- Economic indicators: leading, lagging, coincident
- Unemployment: types (frictional, structural, cyclical, seasonal)
- Inflation and deflation: revisited with macroeconomic framing
- Fiscal policy: government spending and taxation
- Monetary policy: Federal Reserve tools (revisited from Unit 1 with deeper treatment)
- International trade: comparative advantage, exports, imports, trade balance
- Houston-specific: energy sector dependence, Port of Houston, petrochemical industry, diversification

## Math Concepts (Algebra I)

- Exponential functions and equations: GDP growth, population growth §111.39(c)(5)
- Logarithmic scale interpretation §111.39(c)(5)
- Multi-dataset joins and layered visualizations §111.39(c)(8)
- Time-series data: independent variable as time §111.39(c)(2)
- Rate of change in nonlinear contexts §111.39(c)(9)
- Correlation with time-lagged variables §111.39(c)(9)

---

## Lesson Sequence

### Week 1: Measuring the Economy (≈8.3 hours)

#### Lesson 4.1 — What Is GDP? (2 hrs)
**Economics Focus:** GDP definition, components (C + I + G + NX), what GDP measures and what it doesn't
**Activity:**
- Warm-up: "If you had to measure how well the Houston economy is doing with one number, what would you measure?" Students brainstorm.
- Direct instruction: GDP = Consumption + Investment + Government Spending + Net Exports.
- Breakdown with Houston examples:
  - C: Houstonians buying groceries, cars, Astros tickets.
  - I: A company building a new refinery on the Ship Channel.
  - G: HISD spending on schools, TxDOT building highways.
  - NX: Port of Houston exporting petroleum products minus importing consumer goods.
- R lab: Pull US GDP data from FRED and create a time-series line plot:
```r
gdp <- fredr(series_id = "GDP")
ggplot(gdp, aes(x = date, y = value)) +
  geom_line() +
  labs(title = "US Gross Domestic Product (1947–Present)",
       y = "GDP (Billions $)", x = "")
```
- Observation: The line curves upward — is this linear or exponential?

**TEKS:** §113.31(c)(6)(A), §111.39(c)(2), §111.39(c)(5)

#### Lesson 4.2 — GDP on a Log Scale: Seeing Exponential Growth (2 hrs)
**Economics Focus:** GDP growth rate, real vs. nominal GDP
**Math Focus:** Exponential functions, logarithmic scale
**Activity:**
- Why does the GDP graph curve up? Because growth is multiplicative, not additive. GDP grows by a percentage each year → exponential.
- Model: If GDP grows at 3% per year: `GDP_t = GDP_0 × (1.03)^t`. Compare to linear: `GDP_t = GDP_0 + g × t`.
- Students plot GDP on a regular scale and then on a log scale:
```r
ggplot(gdp, aes(x = date, y = value)) +
  geom_line() +
  scale_y_log10() +
  labs(title = "US GDP (Log Scale)", y = "GDP (Billions $, log scale)")
```
- On the log scale, constant growth = straight line. Deviations from the line = recessions or booms.
- Students identify recessions as dips below the log-linear trend.
- Math practice: Given GDP of $20 trillion growing at 2.5%/year, calculate GDP in 5, 10, and 20 years.

**TEKS:** §111.39(c)(5)(A–C), §113.31(c)(6)(A)

#### Lesson 4.3 — The Business Cycle (1.5 hrs)
**Economics Focus:** Expansion, peak, contraction/recession, trough, recovery
**Activity:**
- Use the GDP time-series to identify business cycle phases. NBER recession dates as shaded regions.
- R lab: Add recession shading to the GDP plot using `annotate()` or `geom_rect()`.
- Students label: 2001 recession (dot-com), 2008–09 (Great Recession), 2020 (COVID).
- Discussion: What caused each recession? (Technology bust, housing/financial crisis, pandemic.)
- Key question for Houston: Oil price crashes in 1986, 2014–16, and 2020 — did Houston's economy follow the national business cycle or have its own pattern?

**TEKS:** §113.31(c)(6)(A–B)

#### Lesson 4.4 — Economic Indicators: Leading, Lagging, Coincident (1 hr)
**Economics Focus:** Indicators that predict, track, or follow the economy
**Activity:**
- Leading indicators: stock market, building permits, consumer confidence.
- Coincident indicators: GDP, employment, industrial production.
- Lagging indicators: unemployment rate, CPI, corporate profits.
- Students classify 12 indicators into the three categories.
- Brief R exercise: Overlay two time series (e.g., building permits and GDP) to see if one "leads" the other.

**TEKS:** §113.31(c)(6)(B)

#### Lesson 4.5 — Unemployment: Types and Measurement (1.8 hrs)
**Economics Focus:** Frictional, structural, cyclical, seasonal unemployment; labor force participation
**Math Focus:** Rate calculations, interpreting time-series data
**Activity:**
- Define each type with Houston examples:
  - Frictional: A Rice grad looking for their first job.
  - Structural: A laid-off oil rig worker whose skills don't match available tech jobs.
  - Cyclical: Restaurant workers laid off during COVID lockdowns.
  - Seasonal: Houston rodeo temporary workers.
- R lab: Pull Houston-area unemployment rate from FRED (series: HOUST48XXXURN or similar).
- Compare Houston unemployment to national rate. When do they diverge? (Oil busts.)
- Calculate: If the labor force is 3.2 million and 160,000 are unemployed, what is the unemployment rate?

**TEKS:** §113.31(c)(6)(B), §113.31(c)(5)(A), §111.39(c)(2), §111.39(c)(8)

---

### Week 2: Houston's Economic Engine (≈8.3 hours)

#### Lesson 4.6 — Energy Capital: Houston and Oil (2.5 hrs)
**Economics Focus:** Industry dependence, commodity prices, economic diversification
**R Focus:** Multi-dataset joins, layered plots
**Activity:**
- Pull two FRED series: crude oil price (DCOILWTICO) and Houston unemployment rate.
- R lab: Join datasets by date and create a dual-panel plot:
```r
oil <- fredr(series_id = "DCOILWTICO") %>% rename(oil_price = value)
houston_unemp <- fredr(series_id = "HOUS448URN") %>% rename(unemp_rate = value)

combined <- left_join(oil, houston_unemp, by = "date")
```
- Students create side-by-side time-series plots. Does Houston unemployment spike when oil prices crash?
- Calculate correlation between oil prices and Houston unemployment (expect negative correlation with a lag).
- Discussion: Is it good for a city to depend on one industry? What is economic diversification?
- Houston context: The city has diversified since the 1980s (medical center, NASA, tech, port) — but oil still matters.

**TEKS:** §113.31(c)(4)(A), §113.31(c)(6)(A–B), §111.39(c)(8), §111.39(c)(9)

#### Lesson 4.7 — The Port of Houston: Trade and Comparative Advantage (2 hrs)
**Economics Focus:** International trade, exports, imports, comparative advantage, trade balance
**Activity:**
- Direct instruction: Why do countries trade? Comparative advantage — produce what you're relatively best at.
- Houston example: Texas exports petroleum products, chemicals, and agricultural goods. Imports consumer electronics, vehicles, and machinery.
- Data: Port of Houston trade data (teacher-curated from Port Houston annual reports).
- R lab: Create a bar chart of top exports and top imports by value through the Port of Houston.
- Calculate: trade balance = exports - imports. Is Houston a net exporter or importer?
- Discussion: Who benefits from trade? Are there losers? (Connect to structural unemployment from Lesson 4.5.)

**TEKS:** §113.31(c)(10)(A–B), §111.39(c)(8), §111.39(c)(12)

#### Lesson 4.8 — Fiscal Policy: Taxes and Government Spending (2 hrs)
**Economics Focus:** Government budget, taxes, spending, deficit, national debt, fiscal policy
**Math Focus:** Exponential growth of national debt, percent of GDP
**Activity:**
- Direct instruction: Government collects taxes (revenue) and spends on services. Deficit = spending > revenue. National debt = accumulated deficits.
- R lab: Pull national debt from FRED (GFDEBTN) and plot over time.
- Apply log scale — is debt growth exponential? Yes.
- Better metric: Debt-to-GDP ratio (GFDEGDQ188S). Plot this — it tells a different story than raw debt.
- Students calculate: If the national debt is $34 trillion and GDP is $28 trillion, what is the debt-to-GDP ratio?
- Discussion: Is the national debt a problem? Compare US debt-to-GDP to other countries.
- Houston connection: What federal spending flows into Houston? (NASA/Johnson Space Center, military bases, flood control, Medicaid.)

**TEKS:** §113.31(c)(8)(A–C), §111.39(c)(5), §111.39(c)(12)

#### Lesson 4.9 — Monetary Policy Revisited: The Fed's Toolkit (1.8 hrs)
**Economics Focus:** Federal funds rate, open market operations, quantitative easing, inflation targeting
**Activity:**
- Return to the Fed funds rate graph from Unit 1, now with deeper understanding.
- The Fed's dual mandate: maximum employment and stable prices (2% inflation target).
- R lab: Overlay three time series on one graph: Fed funds rate, inflation rate (CPI), unemployment rate.
- Students observe the "Phillips Curve" relationship: When unemployment is low, does inflation tend to be high?
- Calculate correlation between unemployment and inflation. Is the relationship consistent over time?
- Discussion: What did the Fed do during COVID? (Dropped rates to zero, printed money.) What are the consequences?

**TEKS:** §113.31(c)(7)(B–C), §113.31(c)(8)(B), §111.39(c)(9)

---

### Week 3: The Houston Economic Dashboard (≈8.3 hours)

#### Lesson 4.10 — Market Structures: Competition in Houston (2 hrs)
**Economics Focus:** Perfect competition, monopolistic competition, oligopoly, monopoly
**Activity:**
- Four market structures with Houston examples:
  - Perfect competition: Houston farmers' markets (many sellers, identical products).
  - Monopolistic competition: Houston restaurants (many sellers, differentiated products).
  - Oligopoly: Airlines at IAH (United, Spirit, a few others dominate).
  - Monopoly: CenterPoint Energy (regulated utility monopoly).
- Students classify 10 Houston businesses/industries into market structures.
- R visualization: Create a comparison table or infographic-style chart showing characteristics of each structure.
- Discussion: Which structure is best for consumers? For producers? For the economy?

**TEKS:** §113.31(c)(4)(A–C)

#### Lesson 4.11 — Building the Dashboard: Multi-Panel R Visualizations (2.5 hrs)
**R Focus:** `patchwork` or `gridExtra` for multi-panel layouts, refinement of all plot types
**Activity:**
- Students will create a 4-panel Houston Economic Dashboard for their unit project.
- Guided lab: Build a template dashboard:
  - Panel 1: Houston unemployment rate (time series)
  - Panel 2: Oil prices (time series)
  - Panel 3: Houston vs. national GDP growth (bar chart)
  - Panel 4: Top industries by employment (horizontal bar)
- Use `patchwork` to combine:
```r
library(patchwork)
(p1 + p2) / (p3 + p4) +
  plot_annotation(title = "Houston Economic Dashboard")
```
- Students begin customizing with their own chosen indicators.

**TEKS:** §111.39(c)(8)

#### Lesson 4.12 — Unit 4 Project Workshop (2 hrs)
**Activity:**
- Students build their Houston Economic Dashboard:
  - Choose 4 economic indicators relevant to Houston (at least 2 from FRED, at least 1 local).
  - Create 4 polished R visualizations arranged in a dashboard layout.
  - Write a 1-page "State of Houston's Economy" memo interpreting all four panels.
- Must include:
  - At least one time-series plot
  - At least one comparison (Houston vs. national, or industry vs. industry)
  - At least one reference to a business cycle phase
  - Correct economic and mathematical vocabulary
- Workshop time: coding, data wrangling, peer feedback.

#### Lesson 4.13 — Unit 4 Presentations & Assessment (1.8 hrs)
**Activity:**
- Dashboard gallery walk with structured feedback forms.
- Selected presentations (5–6 students, 3 minutes each).
- Unit checkpoint quiz: GDP, business cycles, unemployment types, fiscal/monetary policy, exponential growth (25 minutes).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Macro Concepts | Individual | 25 |
| R Lab: GDP Time Series & Log Scale | Lab | 25 |
| R Lab: Oil & Houston Unemployment | Lab | 30 |
| Port of Houston Trade Analysis | Lab | 20 |
| Fiscal/Monetary Policy Analysis | Analysis Memo | 20 |
| Market Structures Classification | Practice | 15 |
| Houston Economic Dashboard | Project | 50 |
| Dashboard Memo | Project | 15 |
| **Total** | | **200** |

## Key Vocabulary

GDP, gross domestic product, consumption, investment, government spending, net exports, nominal GDP, real GDP, business cycle, expansion, peak, contraction, recession, trough, recovery, economic indicator, leading indicator, lagging indicator, coincident indicator, unemployment rate, frictional unemployment, structural unemployment, cyclical unemployment, seasonal unemployment, labor force participation rate, fiscal policy, taxes, government spending, deficit, national debt, debt-to-GDP ratio, monetary policy, Federal Reserve, federal funds rate, inflation targeting, dual mandate, comparative advantage, exports, imports, trade balance, Port of Houston, market structure, perfect competition, monopolistic competition, oligopoly, monopoly, exponential growth, logarithmic scale, diversification
