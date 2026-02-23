# R & RStudio Setup Guide — S600

S600 builds on the full S400–S500 R stack. Students enter with tidyverse fluency, ggplot2, sf/leaflet mapping, API calls, and R Markdown.

## Additional Packages (Beyond S400–S500)

```r
install.packages(c(
  "wbstats",        # World Bank data API
  "igraph",         # Network analysis and visualization
  "ggrepel",        # Non-overlapping text labels
  "rnaturalearth",  # World map shapefiles
  "rnaturalearthdata",  # Support data for rnaturalearth
  "corrplot",       # Correlation matrix visualization
  "broom",          # Tidy model output (tidy(), glance(), augment())
  "gt",             # Publication-quality tables (if not already installed)
  "patchwork"       # Multi-panel plots (if not already installed)
))
```

### Note on `sf` and `igraph`

Both `sf` (from S500) and `igraph` require compiled C/C++ libraries:
- **RStudio Cloud:** Pre-installed. No action needed.
- **Desktop:** May require system library installation. See package documentation.

## API Keys Required

### World Bank (wbstats)

No API key required. The `wbstats` package accesses the World Bank API freely:
```r
library(wbstats)
# No key needed — just call wb_data()
test <- wb_data(indicator = "NY.GDP.PCAP.CD", country = "USA", mrv = 5)
head(test)
```

### Census API Key (from S500)

Needed if using `tidycensus` for comparison to US data. Students should already have this.

### FRED API Key (from S400)

Needed for occasional US economic comparisons.

## Verifying the S600 Installation

```r
# Test wbstats
library(wbstats)
gdp <- wb_data(indicator = "NY.GDP.PCAP.CD", mrv = 1)
head(gdp)

# Test igraph
library(igraph)
g <- make_ring(10)
plot(g)

# Test rnaturalearth
library(rnaturalearth)
library(sf)
world <- ne_countries(scale = "medium", returnclass = "sf")
plot(st_geometry(world))

# Test inference functions
t.test(rnorm(30, mean = 5), mu = 4)  # One-sample t-test
chisq.test(matrix(c(20, 30, 15, 35), nrow = 2))  # Chi-square

# Test logistic regression
glm(am ~ mpg + wt, data = mtcars, family = binomial)
```

## Key World Bank Indicator Codes

| Code | Indicator | Unit(s) |
|------|-----------|---------|
| NY.GDP.PCAP.CD | GDP per capita (current US$) | 1, 2, 3, 6 |
| SP.DYN.LE00.IN | Life expectancy at birth | 1, 4, 6 |
| SP.DYN.IMRT.IN | Infant mortality rate (per 1,000) | 1, 4, 6 |
| SE.ADT.LITR.ZS | Literacy rate, adult total (%) | 1, 6 |
| SH.XPD.CHEX.GD.ZS | Health expenditure (% of GDP) | 4 |
| SH.MLR.INCD.P3 | Malaria incidence (per 1,000 at risk) | 4 |
| SH.DYN.AIDS.ZS | HIV prevalence (% ages 15-49) | 4 |
| NY.GDP.TOTL.RT.ZS | Total natural resources rents (% GDP) | 3, 5 |
| TM.VAL.MRCH.CD.WT | Merchandise imports | 3 |
| TX.VAL.MRCH.CD.WT | Merchandise exports | 3 |
| SP.POP.TOTL | Total population | 1, 6 |
| SP.URB.TOTL.IN.ZS | Urban population (%) | 4 |
| SI.POV.GINI | Gini coefficient | 2 |
| CC.EST | Control of Corruption (WGI) | 2, 5 |
| RL.EST | Rule of Law (WGI) | 2, 5 |

## Folder Structure

```
S600/
  unit-1/
    measuring_country.Rmd
  unit-2/
    development_analysis.Rmd
  unit-3/
    trade_network.Rmd
  unit-4/
    health_investigation.Rmd
  unit-5/
    conflict_assessment.Rmd
  unit-6/
    country_brief.Rmd
  data/
    bilateral_trade.csv
    ucdp_conflicts.csv
    country_decade_conflict.csv
    (other teacher-curated datasets)
```
