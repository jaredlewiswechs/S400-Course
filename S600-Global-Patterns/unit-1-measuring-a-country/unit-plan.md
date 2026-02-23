# Unit 1 — Measuring a Country

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 1 of 6 |
| Title | Measuring a Country |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you reduce a country to a number — and should you?* |
| Geography TEKS | §113.43(c)(4), (6), (12) |
| Statistics TEKS | §111.47(c)(4), (7) |
| Algebra II TEKS | §111.40(c)(4) |
| R Skills | `wbstats` (World Bank API), log-scale axes, `geom_text_repel()`, multi-indicator scatterplots, distributions |
| Key Deliverable | Country Measurement Dashboard — a multi-panel visualization comparing 3+ development indicators across world regions with statistical commentary |

## Unit Narrative

Before you can ask "why do countries differ," you have to ask "how do we measure the difference?" This unit introduces the World Bank as a data source and the `wbstats` R package as the access tool. Students encounter GDP per capita, life expectancy, literacy rate, infant mortality, and the Human Development Index — and immediately confront the fact that these numbers are distributed wildly asymmetrically. GDP per capita is not normally distributed; it's right-skewed and spans orders of magnitude. This is where log transformations become essential — not as abstract math but as the only way to see patterns in development data. The statistics strand formalizes distributions: shape, center, spread, and outliers. The normal distribution is introduced as a model — useful when it fits, misleading when it doesn't.

## Geography Concepts

- Human geography: population distribution, settlement patterns, demographic indicators
- Economic geography: GDP, GNI, income classification (low/middle/high income)
- Development indicators: HDI, literacy, life expectancy, infant mortality
- World regions: Sub-Saharan Africa, South Asia, East Asia & Pacific, Latin America & Caribbean, Europe & Central Asia, Middle East & North Africa, North America
- Data as geographic tool: measuring spatial patterns of human well-being
- Limitations of country-level data: inequality within countries, data quality variation

## Statistics Concepts

- Distributions: shape (skewed, symmetric, bimodal), center (mean, median), spread (SD, IQR) §111.47(c)(4)
- The normal distribution: properties, empirical rule (68-95-99.7), z-scores §111.47(c)(4)
- When the normal model fails: skewed data, heavy tails §111.47(c)(4)
- Scatterplots and bivariate relationships (review from S500, extended) §111.47(c)(7)
- Log transformations: why and when to use them §111.40(c)(4)
- Multiple summary statistics: comparing groups with means, medians, SDs

## Algebra II Concepts

- Logarithmic functions: `log10()`, `ln()`, why log transforms linearize exponential relationships §111.40(c)(4)
- Exponential and logarithmic scales in real-world contexts §111.40(c)(4)

---

## Lesson Sequence

### Week 1: The World in Numbers (≈8.3 hours)

#### Lesson 1.1 — How Rich Is a Country? GDP Per Capita (2 hrs)
**Geography Focus:** Economic geography, GDP, income classification
**Statistics Focus:** Distributions, skewness
**Activity:**
- Warm-up: Rank these 10 countries from richest to poorest. Students guess, then check.
- Direct instruction: GDP per capita = total economic output / population. The World Bank classifies countries as Low Income (<$1,135), Lower-Middle ($1,136–$4,465), Upper-Middle ($4,466–$13,845), High Income (>$13,845).
- R lab: Pull GDP per capita for all countries using `wbstats`:
```r
library(wbstats)
library(tidyverse)

gdp_pc <- wb_data(indicator = "NY.GDP.PCAP.CD", mrv = 1)
gdp_pc <- gdp_pc %>% filter(!is.na(NY.GDP.PCAP.CD))

ggplot(gdp_pc, aes(x = NY.GDP.PCAP.CD)) +
  geom_histogram(bins = 50, fill = "steelblue") +
  labs(title = "Distribution of GDP Per Capita (All Countries)",
       x = "GDP Per Capita (USD)", y = "Count")
```
- Observation: The histogram is massively right-skewed. Most countries cluster below $20,000; a few exceed $80,000.
- Calculate: Mean vs. median GDP per capita. Why are they so different? (Skewness.)
- Vocabulary: distribution, skewness, right-skewed, mean, median, outlier.

**TEKS:** §113.43(c)(6)(A), §111.47(c)(4)

#### Lesson 1.2 — The Log Scale: Seeing What You're Missing (2 hrs)
**Statistics Focus:** Log transformation, when and why
**Algebra II Focus:** Logarithmic functions
**Activity:**
- Problem: On a linear scale, the difference between $500 and $5,000 looks the same as $70,000 and $74,500. But going from $500 to $5,000 is a 10x increase — a transformation.
- Solution: Log scale. On a log10 scale, each step is a multiplication by 10.
- Math: If `y = 10^x`, then `x = log10(y)`. `log10(1000) = 3`, `log10(10000) = 4`.
- R lab: Replot GDP per capita on a log scale:
```r
ggplot(gdp_pc, aes(x = NY.GDP.PCAP.CD)) +
  geom_histogram(bins = 50, fill = "steelblue") +
  scale_x_log10(labels = scales::dollar) +
  labs(title = "Distribution of GDP Per Capita (Log Scale)",
       x = "GDP Per Capita (USD, log scale)", y = "Count")
```
- The log-transformed distribution is much closer to symmetric — closer to normal.
- Students calculate `log10()` by hand for 5 GDP values. Interpret: "A country with log-GDP of 4 has GDP per capita of $10,000."
- Discussion: When should you use a log scale? (When data spans orders of magnitude, when you care about proportional differences, when the raw distribution is heavily skewed.)

**TEKS:** §111.40(c)(4), §111.47(c)(4)

#### Lesson 1.3 — Life Expectancy: A Different Kind of Indicator (1.5 hrs)
**Geography Focus:** Health geography, demographic patterns
**Statistics Focus:** Distributions — bimodal, comparing shapes
**Activity:**
- Pull life expectancy data:
```r
life_exp <- wb_data(indicator = "SP.DYN.LE00.IN", mrv = 1)
ggplot(life_exp, aes(x = SP.DYN.LE00.IN)) +
  geom_histogram(bins = 30, fill = "darkgreen") +
  labs(title = "Distribution of Life Expectancy at Birth",
       x = "Life Expectancy (years)", y = "Count")
```
- Observation: This distribution is left-skewed (most countries have high life expectancy; a tail of low values).
- Compare to GDP: GDP is right-skewed; life expectancy is left-skewed. Why? (There's a ceiling on life expectancy but no ceiling on GDP.)
- Color by region:
```r
ggplot(life_exp, aes(x = SP.DYN.LE00.IN, fill = region)) +
  geom_histogram(bins = 30, alpha = 0.7, position = "stack") +
  labs(title = "Life Expectancy by World Region")
```
- Students identify which regions cluster where. Sub-Saharan Africa forms the lower tail.

**TEKS:** §113.43(c)(4)(A), §111.47(c)(4)

#### Lesson 1.4 — The Normal Distribution (2 hrs)
**Statistics Focus:** Normal model, empirical rule, z-scores
**Activity:**
- Not all distributions are normal, but many are approximately normal — and the normal model is the foundation of inference (coming in Unit 2).
- Properties of the normal distribution:
  - Symmetric, bell-shaped.
  - Defined by two parameters: mean (μ) and standard deviation (σ).
  - Empirical rule: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.
- R lab: Generate a normal distribution and verify the empirical rule:
```r
set.seed(42)
normal_data <- tibble(x = rnorm(10000, mean = 70, sd = 8))

ggplot(normal_data, aes(x = x)) +
  geom_histogram(aes(y = after_stat(density)), bins = 50, fill = "lightblue") +
  stat_function(fun = dnorm, args = list(mean = 70, sd = 8), color = "red", linewidth = 1) +
  labs(title = "Normal Distribution: μ = 70, σ = 8")

# Verify empirical rule
mean(normal_data$x > 62 & normal_data$x < 78)  # ~68%
mean(normal_data$x > 54 & normal_data$x < 86)  # ~95%
```
- Z-scores: `z = (x - μ) / σ`. A z-score tells you how many standard deviations a value is from the mean.
- Practice: If mean life expectancy in Europe is 78 years with SD = 3, what is the z-score for a country with life expectancy of 72? Is that unusual?
- `pnorm()` and `qnorm()`: Finding probabilities and percentiles from the normal distribution.
```r
pnorm(72, mean = 78, sd = 3)  # What % of European countries have LE < 72?
qnorm(0.10, mean = 78, sd = 3)  # Below what LE is the bottom 10%?
```

**TEKS:** §111.47(c)(4)(A–C)

#### Lesson 1.5 — The Human Development Index: One Number to Rule Them All? (0.8 hrs)
**Geography Focus:** HDI — what it measures, how it's constructed, limitations
**Activity:**
- The HDI combines three dimensions: health (life expectancy), education (mean and expected years of schooling), and standard of living (GNI per capita, log-transformed).
- Students pull HDI data and rank countries.
- Discussion: Is it fair to reduce a country's development to one number? What does HDI miss? (Inequality within the country, environmental sustainability, political freedom, happiness.)
- The Inequality-adjusted HDI (IHDI) — countries with high inequality lose more than countries with low inequality.
- Quick R exercise: Plot HDI vs. GDP per capita. The relationship is strong but logarithmic — additional income helps less for already-rich countries.

**TEKS:** §113.43(c)(6)(A), §113.43(c)(4)(A), §111.40(c)(4)

---

### Week 2: Comparing Countries and Regions (≈8.3 hours)

#### Lesson 1.6 — Boxplots and Comparing Distributions (2 hrs)
**Statistics Focus:** Five-number summary, boxplots, IQR, comparing groups
**Activity:**
- The five-number summary: min, Q1, median, Q3, max. IQR = Q3 - Q1.
- Boxplots visualize the five-number summary and highlight outliers.
- R lab: GDP per capita by World Bank income group:
```r
ggplot(gdp_data, aes(x = income_group, y = gdp_pc)) +
  geom_boxplot(fill = "lightblue") +
  scale_y_log10(labels = scales::dollar) +
  coord_flip() +
  labs(title = "GDP Per Capita by Income Group",
       x = "", y = "GDP Per Capita (log scale)")
```
- Compare: Life expectancy by region (side-by-side boxplots). Which region has the most variation? The lowest median?
- Students calculate five-number summaries by hand for a small dataset, then verify in R.
- Key takeaway: Boxplots let you compare distributions at a glance. They show center, spread, and outliers simultaneously.

**TEKS:** §111.47(c)(4), §113.43(c)(4)(A)

#### Lesson 1.7 — Scatterplots at Global Scale: Income vs. Life Expectancy (2.5 hrs)
**Geography Focus:** Development patterns, the "Preston Curve"
**Statistics Focus:** Bivariate data, log-transformed scatterplots, labeling
**R Focus:** `geom_text_repel()`, multi-aesthetic scatterplots
**Activity:**
- The classic development scatterplot: GDP per capita vs. life expectancy (the "Preston Curve").
- R lab:
```r
library(ggrepel)

combined <- left_join(gdp_pc, life_exp, by = "iso3c")

ggplot(combined, aes(x = gdp_pc, y = life_exp)) +
  geom_point(aes(size = population, color = region), alpha = 0.7) +
  scale_x_log10(labels = scales::dollar) +
  geom_text_repel(aes(label = iso3c), size = 2, max.overlaps = 15) +
  labs(title = "GDP Per Capita vs. Life Expectancy",
       x = "GDP Per Capita (log scale)", y = "Life Expectancy (years)")
```
- Observation: The relationship is strong, positive, and logarithmic. Moving from $1,000 to $10,000 gains ~15 years of life expectancy. Moving from $40,000 to $50,000 gains almost nothing.
- Students identify outliers: Countries with high income but low life expectancy? Low income but high life expectancy? What explains the outliers?
- Fit a regression on log-GDP: `lm(life_exp ~ log10(gdp_pc), data = combined)`. Interpret slope.
- This scatterplot is the visual anchor for the course — students will return to it repeatedly.

**TEKS:** §113.43(c)(6)(A), §113.43(c)(4)(A), §111.47(c)(7), §111.40(c)(4)

#### Lesson 1.8 — Multiple Indicators: Building a Country Profile (2 hrs)
**Geography Focus:** Multi-dimensional view of development
**R Focus:** Faceted plots, combining multiple World Bank indicators
**Activity:**
- Single indicators tell partial stories. Students pull 5 indicators for all countries:
  - GDP per capita
  - Life expectancy
  - Literacy rate (adult)
  - Infant mortality rate
  - CO2 emissions per capita
- R lab: Create a correlation matrix of all 5 variables:
```r
library(corrplot)
indicators <- combined_data %>%
  select(gdp_pc, life_exp, literacy, infant_mortality, co2_per_cap)
cor_matrix <- cor(indicators, use = "complete.obs")
corrplot(cor_matrix, method = "color", type = "upper",
         addCoef.col = "black", tl.col = "black")
```
- Students observe: GDP, life expectancy, and literacy are positively correlated. Infant mortality is negatively correlated with all of them. CO2 is positively correlated with GDP (rich countries pollute more per capita).
- Discussion: Does development always come with environmental cost? Which countries break the pattern?
- Geographic framing: Map one of the indicators as a world choropleth using leaflet.

**TEKS:** §113.43(c)(4)(A), §113.43(c)(11)(A), §111.47(c)(7)

#### Lesson 1.9 — Limitations: What the Numbers Don't Tell You (1.8 hrs)
**Geography Focus:** Data quality, inequality within countries, cultural context
**Activity:**
- GDP per capita tells you the average — but averages hide inequality. Qatar has one of the highest GDP per capita values, but migrant workers live in poverty.
- Data quality varies: Some countries have robust statistical offices; others rely on estimates. Missing data is informative — the countries with the least data are often the ones most in need.
- R exercise: Count missing values by region:
```r
combined_data %>%
  group_by(region) %>%
  summarize(
    n_countries = n(),
    missing_literacy = sum(is.na(literacy)),
    missing_infant_mort = sum(is.na(infant_mortality))
  )
```
- Discussion: What does it mean when a country doesn't report data? Is missing data random or systematic?
- Cultural context: GDP doesn't measure happiness, community, spiritual life, or ecological health. Bhutan's "Gross National Happiness" as an alternative framework.
- Writing prompt: "Choose one country that performs differently than its GDP would predict. Using at least two other indicators, explain what GDP misses about this country's development."

**TEKS:** §113.43(c)(12), §113.43(c)(10)(A), §111.47(c)(4)

---

### Week 3: The Country Measurement Dashboard (≈8.3 hours)

#### Lesson 1.10 — Standard Deviation in Context (1.5 hrs)
**Statistics Focus:** Standard deviation as a measure of spread, comparing SDs across groups
**Activity:**
- SD measures how far typical values are from the mean. Small SD = clustered; large SD = spread out.
- Students calculate SD by hand for a small dataset (5 countries), then verify with `sd()` in R.
- Compare SDs: Is there more variation in life expectancy within Sub-Saharan Africa or within Europe? What does that tell you about the regions?
- R exercise: Calculate mean and SD for each indicator by region. Create a summary table with `gt`.
- Connection to the normal model: If data is approximately normal, mean ± 1 SD captures ~68% of values.

**TEKS:** §111.47(c)(4)

#### Lesson 1.11 — World Choropleth Maps: Visualizing Global Patterns (2.5 hrs)
**R Focus:** `rnaturalearth` + `leaflet` for world maps, choropleth design
**Activity:**
- R lab: Build a world choropleth map of GDP per capita:
```r
library(rnaturalearth)
library(leaflet)

world <- ne_countries(scale = "medium", returnclass = "sf")
world <- world %>%
  left_join(gdp_data, by = c("iso_a3" = "iso3c"))

pal <- colorNumeric("YlOrRd", domain = log10(world$gdp_pc), na.color = "gray")

leaflet(world) %>%
  addTiles() %>%
  addPolygons(
    fillColor = ~pal(log10(gdp_pc)),
    fillOpacity = 0.7, weight = 1, color = "white",
    label = ~paste0(name, ": $", round(gdp_pc))
  ) %>%
  addLegend(pal = pal, values = ~log10(gdp_pc),
            title = "GDP/cap (log10)")
```
- Students create 3 world maps (GDP, life expectancy, one indicator of their choice).
- Geographic analysis: Are there clear spatial patterns? (North-South divide, Sub-Saharan Africa, East Asia's rise.)

**TEKS:** §113.43(c)(4)(A), §113.43(c)(6)(A)

#### Lesson 1.12 — Unit 1 Project Workshop (2.5 hrs)
**Activity:**
- Students build a Country Measurement Dashboard:
  1. **World map** (choropleth) of one development indicator.
  2. **Distribution plot** (histogram or boxplot) of one indicator by region.
  3. **Scatterplot** of two indicators (e.g., income vs. life expectancy) with log scale where appropriate, labeled with country codes, colored by region.
  4. **Summary table** (using `gt`) of mean, median, SD by region.
  5. **1-page statistical commentary** interpreting all four visualizations. Must discuss: shape of distribution (skewed? normal?), center and spread, relationship strength (r value), and at least one outlier with geographic explanation.
- R Markdown format.

#### Lesson 1.13 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Dashboard gallery walk with structured feedback.
- Selected presentations (5–6 students, 4 minutes each).
- Checkpoint quiz: Distributions, normal model, z-scores, log transformation, World Bank indicators (25 min).

---

## Unit 1 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Distributions & Indicators | Individual | 25 |
| R Lab: wbstats Data Pull & Histogram | Lab | 20 |
| R Lab: Log Scale & Preston Curve | Lab | 25 |
| R Lab: Correlation Matrix | Lab | 20 |
| Normal Distribution Practice | Practice | 20 |
| World Choropleth Map | Lab | 25 |
| Country Measurement Dashboard | Project | 50 |
| Statistical Commentary | Analysis Memo | 15 |
| **Total** | | **200** |

## Key Vocabulary

GDP per capita, GNI, life expectancy, infant mortality, literacy rate, Human Development Index (HDI), income classification, distribution, histogram, skewness, right-skewed, left-skewed, symmetric, mean, median, mode, standard deviation, IQR, five-number summary, boxplot, outlier, normal distribution, empirical rule, z-score, `pnorm()`, `qnorm()`, logarithm, log scale, log transformation, Preston Curve, choropleth, World Bank, `wbstats`, region, Sub-Saharan Africa, correlation matrix
