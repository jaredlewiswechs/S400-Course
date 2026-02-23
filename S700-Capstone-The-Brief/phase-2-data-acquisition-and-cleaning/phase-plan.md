# Phase 2 — Data Acquisition & Cleaning

## Phase Overview

| Field | Detail |
|-------|--------|
| Phase | 2 of 6 |
| Title | Data Acquisition & Cleaning |
| Duration | 30 hours (~3.5 weeks) |
| Driving Question | *Can you get the data you need, and can you trust it?* |
| Key Deliverable | Clean Dataset Package — documented, reproducible data pipeline with a data dictionary and quality report |

## Phase Narrative

This is where the real work begins — and where most novice researchers fail. Getting data is never as simple as downloading a CSV. APIs time out. Columns have cryptic names. Missing data is coded as -999, or 0, or blank (and these mean different things). Geographic levels don't match across sources. Dates are formatted five different ways. Phase 2 is devoted entirely to acquiring, inspecting, cleaning, joining, and documenting the data. Students write reproducible R scripts that take raw inputs and produce clean, analysis-ready datasets. Every decision is documented: what was removed, what was recoded, what assumptions were made. This is the "boring" work that makes everything else possible — and students learn that data cleaning is typically 60–80% of any data project.

## Learning Objectives

- Acquire data from multiple sources (APIs, downloads, web scraping if appropriate)
- Inspect data for quality issues: missing values, outliers, inconsistent coding, format problems
- Clean data systematically using reproducible R scripts
- Join multiple datasets by common keys (geography, time, ID)
- Create a data dictionary documenting all variables
- Write a data quality report assessing limitations

---

## Lesson Sequence

### Week 1: Data Acquisition (≈8.3 hours)

#### Lesson 2.1 — Pulling Your Data: APIs, Downloads, and Requests (3 hrs)
**Activity:**
- Students begin acquiring their planned data sources.
- Common acquisition methods:
  - **API:** `wbstats`, `tidycensus`, `fredr`, ProPublica — code a script that pulls the data.
  - **Download:** Go to the source website, download CSV/Excel, save to project `data/raw/` folder.
  - **Request:** Some data requires an email request or FOIA submission (plan ahead — teacher may need to assist).
- For each source, students write an acquisition script:
```r
# data_acquisition.R
library(tidyverse)
library(wbstats)
library(tidycensus)

# Source 1: World Bank
wb_raw <- wb_data(
  indicator = c("NY.GDP.PCAP.CD", "SP.DYN.LE00.IN"),
  start_date = 2000, end_date = 2023
)
write_csv(wb_raw, "data/raw/world_bank_raw.csv")

# Source 2: Census
census_raw <- get_acs(
  geography = "county", state = "TX",
  variables = c("B19013_001", "B15003_022"),
  year = 2022
)
write_csv(census_raw, "data/raw/census_raw.csv")

# Source 3: Downloaded CSV (already in data/raw/)
```
- Key principle: Raw data is NEVER modified. Save raw files to `data/raw/`. All cleaning happens in scripts that produce files in `data/clean/`.
- Commit all acquisition scripts to GitHub.

#### Lesson 2.2 — Inspecting Your Data: What Do You Actually Have? (2.5 hrs)
**Activity:**
- For each dataset, run a standard inspection protocol:
```r
raw_data <- read_csv("data/raw/world_bank_raw.csv")

# Dimensions
dim(raw_data)

# Column names and types
str(raw_data)

# First and last rows
head(raw_data)
tail(raw_data)

# Summary statistics
summary(raw_data)

# Missing values by column
colSums(is.na(raw_data))

# Unique values for categorical variables
raw_data %>% count(region, sort = TRUE)
```
- Students write an "Inspection Report" for each dataset:
  - How many rows and columns?
  - What time period does it cover?
  - What geographic level?
  - How much missing data? Which variables have the most?
  - Any obvious problems (negative values where they shouldn't be, unreasonable ranges)?

#### Lesson 2.3 — Common Data Problems and How to Fix Them (2.8 hrs)
**Activity:**
- Mini-lectures with practice on the most common data cleaning tasks:
  1. **Missing values:** NA, -999, blank strings, "N/A". Detect and standardize.
  2. **Inconsistent naming:** "United States" vs. "US" vs. "USA" vs. "United States of America". Standardize with `case_when()` or lookup tables.
  3. **Date formats:** "01/15/2023" vs. "2023-01-15" vs. "Jan 15, 2023". Use `lubridate` to parse.
  4. **Mismatched keys:** Joining by county name fails because one source says "Harris County" and the other says "Harris". Use FIPS codes or ISO codes instead.
  5. **Duplicate rows:** Check with `duplicated()`. Decide whether to keep, remove, or investigate.
  6. **Outliers:** Values that are technically possible but extreme. Document and decide.
- Students identify which problems exist in their own data and begin cleaning.

---

### Week 2: Data Cleaning and Joining (≈8.3 hours)

#### Lesson 2.4 — Writing the Cleaning Script (3.5 hrs)
**Activity:**
- Students write a `data_cleaning.R` script that takes raw data and produces clean data:
```r
# data_cleaning.R
library(tidyverse)

# Load raw data
wb_raw <- read_csv("data/raw/world_bank_raw.csv")

# Clean World Bank data
wb_clean <- wb_raw %>%
  # Rename columns for clarity
  rename(
    gdp_pc = NY.GDP.PCAP.CD,
    life_exp = SP.DYN.LE00.IN
  ) %>%
  # Remove rows with no data
  filter(!is.na(gdp_pc) | !is.na(life_exp)) %>%
  # Remove non-country aggregates (regions, income groups)
  filter(!is.na(iso3c)) %>%
  # Create log-GDP variable
  mutate(log_gdp_pc = log10(gdp_pc)) %>%
  # Arrange
  arrange(country, date)

# Save clean data
write_csv(wb_clean, "data/clean/world_bank_clean.csv")
```
- Every cleaning decision is commented in the script.
- The script must be reproducible: delete `data/clean/`, re-run the script, and get the same output.
- Commit to GitHub with a clear commit message.

#### Lesson 2.5 — Joining Datasets (2.5 hrs)
**Activity:**
- Most projects require merging data from multiple sources. The key challenge: finding a common identifier.
- Common join keys:
  - ISO country codes (iso3c) for international data.
  - FIPS codes for US counties/states.
  - Congressional district numbers for political data.
  - Date/year for time-series joins.
- R lab: Students join their datasets:
```r
# data_joining.R
library(tidyverse)

wb_clean <- read_csv("data/clean/world_bank_clean.csv")
health_clean <- read_csv("data/clean/who_health_clean.csv")

# Join by country and year
combined <- wb_clean %>%
  left_join(health_clean, by = c("iso3c", "date"))

# Check: How many rows matched? How many didn't?
nrow(wb_clean)
nrow(combined)
sum(is.na(combined$health_variable))
```
- Students diagnose join problems: rows that didn't match, duplicated rows after join, many-to-many issues.
- Final combined dataset saved to `data/clean/analysis_ready.csv`.

#### Lesson 2.6 — The Data Dictionary (2.3 hrs)
**Activity:**
- A data dictionary describes every variable in the analysis-ready dataset:

| Variable | Description | Source | Type | Unit | Range | Missing |
|----------|-------------|--------|------|------|-------|---------|
| iso3c | ISO 3-letter country code | World Bank | Character | — | 3-letter codes | 0% |
| gdp_pc | GDP per capita (current USD) | World Bank | Numeric | USD | $280–$120,000 | 4% |
| life_exp | Life expectancy at birth | World Bank | Numeric | Years | 52–85 | 2% |
| log_gdp_pc | Log10 of GDP per capita | Derived | Numeric | Log-USD | 2.4–5.1 | 4% |

- Students create a complete data dictionary as a table in their R Markdown document.
- This is a professional practice — no one can use your data (or replicate your analysis) without a data dictionary.

---

### Week 3: Quality Assessment and Documentation (≈8.3 hours)

#### Lesson 2.7 — Missing Data Analysis (2 hrs)
**Activity:**
- Missing data is not random — it's often systematic. Students analyze their missingness:
```r
# Missingness by region
analysis_data %>%
  group_by(region) %>%
  summarize(across(everything(), ~mean(is.na(.x)))) %>%
  pivot_longer(-region) %>%
  ggplot(aes(x = name, y = value, fill = region)) +
  geom_col(position = "dodge") +
  coord_flip() +
  labs(title = "Missing Data Rate by Region", y = "% Missing")
```
- Questions to answer:
  - Which variables have the most missing data?
  - Is missingness concentrated in certain countries/regions/time periods?
  - Does missingness correlate with the outcome variable? (If so, your analysis may be biased.)
- Document decisions: "I excluded countries with >50% missing data because..."
- Important: In S700, students must explicitly address missing data in their brief.

#### Lesson 2.8 — Exploratory Data Analysis (3 hrs)
**Activity:**
- Before formal analysis (Phase 3), students conduct EDA:
  - Histograms of all key variables.
  - Scatterplots of the outcome vs. each predictor.
  - Boxplots comparing groups.
  - Summary statistics table.
  - Correlation matrix.
- Purpose: EDA reveals surprises — unexpected distributions, surprising relationships, potential problems — before you commit to a formal analysis.
- Students write a 1-page EDA Summary:
  - Key distributions (symmetric? skewed? outliers?)
  - Strongest bivariate relationships
  - Preliminary hypotheses (refined from Phase 1 if needed)
  - Red flags (data quality, unexpected patterns)

#### Lesson 2.9 — Data Quality Report and Phase 2 Submission (3.3 hrs)
**Activity:**
- Students compile a Data Quality Report (R Markdown, 2–3 pages):
  1. **Data Sources** (table): Source, access method, date acquired, raw file location.
  2. **Cleaning Process** (1 paragraph per source): What problems were found and how were they resolved?
  3. **Data Dictionary** (table): Complete variable documentation.
  4. **Missing Data Assessment** (visualizations + paragraph): Patterns, implications, decisions.
  5. **EDA Summary** (visualizations + paragraph): Key preliminary findings.
  6. **Limitations** (paragraph): What can't the data tell you? What biases exist?
- All scripts committed to GitHub: `data_acquisition.R`, `data_cleaning.R`, `data_joining.R`.
- Folder structure verified:
```
project/
  data/
    raw/          # Untouched downloads
    clean/        # Cleaned, analysis-ready files
  scripts/
    data_acquisition.R
    data_cleaning.R
    data_joining.R
  docs/
    data_quality_report.Rmd
    research_proposal.Rmd
  brief/
    (empty — for Phase 4)
```
- Teacher review and sign-off before proceeding to Phase 3.

---

## Phase 2 Assessment

| Assessment | Type | Points |
|------------|------|--------|
| Data Acquisition Scripts (reproducible) | Process | 20 |
| Inspection Report (per dataset) | Process | 15 |
| Cleaning Script (commented, reproducible) | Process | 25 |
| Data Join (correct, documented) | Process | 15 |
| Data Dictionary | Milestone | 20 |
| Missing Data Analysis | Milestone | 15 |
| EDA Summary | Milestone | 20 |
| Data Quality Report | Milestone | 30 |
| GitHub Commit History (≥10 commits) | Process | 10 |
| **Total** | | **170** |
