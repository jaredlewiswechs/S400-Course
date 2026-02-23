# R & RStudio Setup Guide — S500

S500 builds on the R foundation from S400. Students should already be comfortable with tidyverse, ggplot2, and basic R Markdown. This guide covers the additional packages and API keys needed for S500.

## Additional Packages (Beyond S400)

Run this in the RStudio Console:

```r
install.packages(c(
  "sf",           # Simple Features — geospatial data handling
  "leaflet",      # Interactive web maps
  "tigris",       # Census TIGER/Line shapefiles
  "tidycensus",   # Census/ACS data via API
  "httr",         # HTTP requests for APIs
  "jsonlite",     # JSON parsing
  "gt",           # Publication-quality tables
  "treemapify",   # Treemap visualizations
  "scales",       # Axis and color scale formatting
  "viridis"       # Colorblind-friendly palettes
))
```

**Note:** The `sf` package requires system-level geospatial libraries (GDAL, GEOS, PROJ). On RStudio Cloud, these are pre-installed. On school desktops, IT may need to install them. See: https://r-spatial.github.io/sf/#installing

## API Keys Required

### 1. Census API Key (for `tidycensus`)

1. Go to https://api.census.gov/data/key_signup.html
2. Enter your name, email, and organization
3. You'll receive a key by email
4. In R:
```r
library(tidycensus)
census_api_key("YOUR_KEY", install = TRUE)
# This saves the key to your .Renviron file so you don't have to set it each session
```

### 2. ProPublica Congress API Key

1. Go to https://www.propublica.org/datastore/api/propublica-congress-api
2. Fill out the request form (free for educational use)
3. You'll receive a key by email
4. In R:
```r
# Set for each session
propublica_key <- "YOUR_KEY"

# Or save to .Renviron:
# Add this line to your .Renviron file:
# PROPUBLICA_API_KEY=your_key_here
# Then access with: Sys.getenv("PROPUBLICA_API_KEY")
```

### 3. FRED API Key (from S400)

Students should already have this from S400. If not, see the S400 setup guide.

## Verifying the S500 Installation

Run this script to confirm everything works:

```r
# Test tidycensus
library(tidycensus)
tx <- get_acs(geography = "county", state = "TX",
              variables = "B19013_001", year = 2022)
head(tx)

# Test sf and tigris
library(sf)
library(tigris)
tx_counties <- counties(state = "TX")
plot(st_geometry(tx_counties))

# Test leaflet
library(leaflet)
leaflet() %>%
  addTiles() %>%
  setView(lng = -95.37, lat = 29.76, zoom = 10)  # Houston

# Test ProPublica API
library(httr)
library(jsonlite)
response <- GET(
  "https://api.propublica.org/congress/v1/members/house/TX/current.json",
  add_headers("X-API-Key" = propublica_key)
)
content <- fromJSON(rawToChar(response$content))
head(content$results)
```

If all produce output without errors, you're ready for S500.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `sf` won't install | System libraries needed — see sf installation guide; use RStudio Cloud if desktop fails |
| `tidycensus` returns 403 error | API key not set or expired; re-run `census_api_key()` |
| ProPublica returns 401 | API key incorrect; check for extra spaces |
| `leaflet` map is blank | Check internet connection; leaflet requires web access for tile layers |
| `tigris` downloads slowly | Shapefiles are large; use `options(tigris_use_cache = TRUE)` to cache them |
| R Markdown won't knit with maps | Ensure `leaflet` maps use `widgetframe` or set `self_contained: false` in YAML |

## Folder Structure Convention

```
S500/
  unit-1/
    voter_analysis.Rmd
    voter_data.csv
  unit-2/
    money_trail.Rmd
  unit-3/
    redistricting_lab.Rmd
    district_maps/
  unit-4/
    policy_trace.Rmd
  unit-5/
    representative_report.Rmd
  unit-6/
    accountability_report.Rmd
  data/
    (shared datasets)
  shapefiles/
    (cached shapefiles from tigris)
```
