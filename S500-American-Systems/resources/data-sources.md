# Data Sources Reference — S500

## U.S. Census Bureau / American Community Survey (via `tidycensus`)

**URL:** https://data.census.gov
**R Package:** `tidycensus`

### Key Variables Used in S500

| Variable Code | Name | Unit(s) |
|---------------|------|---------|
| B01001_001 | Total Population | 1, 3, 6 |
| B19013_001 | Median Household Income | 1, 6 |
| B15003_022 | Bachelor's Degree or Higher | 1 |
| B02001_003 | Black or African American Population | 1, 3 |
| B03003_003 | Hispanic or Latino Population | 1, 3 |
| B29001_001 | Citizen Voting-Age Population | 1, 3 |
| B25077_001 | Median Home Value | 2 |

### Usage

```r
library(tidycensus)

# Pull by county
county_data <- get_acs(
  geography = "county",
  state = "TX",
  variables = c(median_income = "B19013_001"),
  year = 2022
)

# Pull by congressional district
district_data <- get_acs(
  geography = "congressional district",
  state = "TX",
  variables = c(total_pop = "B01001_001"),
  year = 2022
)

# Pull with geometry (for mapping)
district_shapes <- get_acs(
  geography = "congressional district",
  state = "TX",
  variables = "B01001_001",
  year = 2022,
  geometry = TRUE
)
```

---

## Census TIGER/Line Shapefiles (via `tigris`)

**R Package:** `tigris`

### Key Geographies

| Function | Geography | Unit(s) |
|----------|-----------|---------|
| `congressional_districts()` | Congressional districts | 3, 5, 6 |
| `counties()` | Counties | 1, 6 |
| `states()` | State boundaries | 1, 4, 6 |
| `tracts()` | Census tracts | 3 |
| `voting_districts()` | Voting tabulation districts (precincts) | 3 |

### Usage

```r
library(tigris)
options(tigris_use_cache = TRUE)

tx_districts <- congressional_districts(state = "TX", year = 2022)
tx_counties <- counties(state = "TX")
```

---

## ProPublica Congress API

**URL:** https://projects.propublica.org/api-docs/congress-api/
**R Access:** `httr` + `jsonlite`

### Key Endpoints Used in S500

| Endpoint | Description | Unit(s) |
|----------|-------------|---------|
| `/members/house/{state}/current.json` | Current House members by state | 2, 5 |
| `/members/senate/{state}/current.json` | Current senators by state | 5 |
| `/members/{member-id}.json` | Detailed member info (committees, roles) | 2, 5 |
| `/members/{member-id}/votes.json` | Member's recent vote positions | 5 |
| `/members/{member-id}/bills/introduced.json` | Bills sponsored by member | 5 |
| `/{congress}/house/votes/{session}/{roll-call}.json` | Specific roll-call vote | 5 |

### Usage

```r
library(httr)
library(jsonlite)

api_key <- Sys.getenv("PROPUBLICA_API_KEY")

# Get Texas House members
response <- GET(
  "https://api.propublica.org/congress/v1/members/house/TX/current.json",
  add_headers("X-API-Key" = api_key)
)
members <- fromJSON(rawToChar(response$content))$results
```

### Rate Limits
- 5,000 requests per day
- For a class of 30, this is ~166 requests per student per day — sufficient
- Cache responses where possible to avoid redundant calls

---

## FEC / OpenSecrets Campaign Finance

**URL (FEC):** https://www.fec.gov/data/
**URL (OpenSecrets):** https://www.opensecrets.org

### Datasets Used

| Dataset | Description | Unit(s) |
|---------|-------------|---------|
| Candidate summary | Total raised, spent, cash on hand by candidate | 2 |
| PAC contributions | Contributions from PACs to candidates | 2, 5 |
| Industry contributions | Contributions grouped by industry sector | 5 |
| Independent expenditures | Super PAC spending for/against candidates | 2 |

**Note:** FEC data is bulk-downloadable. OpenSecrets provides curated summaries. Teacher should pre-download and clean datasets for student use due to the complexity of raw FEC data.

---

## Voteview / DW-NOMINATE

**URL:** https://voteview.com
**Data Download:** https://voteview.com/data

### Datasets Used

| File | Description | Unit(s) |
|------|-------------|---------|
| `HSall_members.csv` | All House/Senate members with DW-NOMINATE scores, all Congresses | 5, 6 |
| `HSall_rollcalls.csv` | All roll-call votes with descriptions | 5 |
| `HSall_votes.csv` | Individual member vote positions (Yea/Nay) for each roll call | 5 |

### Usage

```r
members <- read_csv("https://voteview.com/static/data/out/members/HSall_members.csv")

# Filter to current Congress
current <- members %>% filter(congress == 118)
```

---

## USAspending.gov

**URL:** https://www.usaspending.gov
**Bulk Download:** https://www.usaspending.gov/download_center/custom_award_data

### Datasets Used

| Dataset | Description | Unit(s) |
|---------|-------------|---------|
| Federal spending by state | Contracts, grants, loans, direct payments | 2 |
| Agency spending | Spending by federal agency | 2 |
| Spending by congressional district | Federal dollars by district | 2, 6 |

**Note:** USAspending bulk data is very large. Teacher should pre-filter to Texas/Houston and provide manageable extracts.

---

## Additional Sources (Teacher-Curated)

| Source | Description | Unit(s) |
|--------|-------------|---------|
| MIT Election Data + Science Lab | County-level election returns | 1, 3 |
| NCSL (National Conference of State Legislatures) | State policy comparisons (voter ID, registration, etc.) | 1 |
| Texas Legislative Council | Redistricting data, district shapefiles | 3 |
| EPA Air Quality Data | Historical air pollution measurements | 4 |
| TEA (Texas Education Agency) | Per-pupil spending by district | 4 |
| Ballotpedia | Election results, candidate information | 1, 5 |
| TownHallProject.com | Town hall events by representative | 5 |

---

## Data Format Conventions

Same as S400:
- **CSV format** (`.csv`)
- **UTF-8 encoding**
- **Column names:** lowercase with underscores
- **Dates:** ISO 8601 (`YYYY-MM-DD`)
- **Shapefiles:** Use `sf` package to read; prefer GeoJSON or GeoPackage for smaller file sizes when possible
