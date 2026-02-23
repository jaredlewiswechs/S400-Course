# Data Sources Reference — S600

## World Bank (via `wbstats`)

**URL:** https://data.worldbank.org
**R Package:** `wbstats`

### Usage
```r
library(wbstats)

# Single indicator, most recent value for all countries
gdp <- wb_data(indicator = "NY.GDP.PCAP.CD", mrv = 1)

# Multiple indicators, specific country, date range
nigeria <- wb_data(
  country = "NGA",
  indicator = c("NY.GDP.PCAP.CD", "SP.DYN.LE00.IN", "SP.DYN.IMRT.IN"),
  start_date = 2000, end_date = 2023
)

# Search for indicators by keyword
wb_search("literacy")
wb_search("infant mortality")
```

### Key Indicators by Unit

| Unit | Indicators |
|------|-----------|
| 1 | GDP per capita, life expectancy, infant mortality, literacy, HDI, CO2/cap, population |
| 2 | Governance indicators (WGI), education (mean years schooling), Polity score (external), Gini |
| 3 | Merchandise trade, exports, imports, resource rents, trade openness (% GDP) |
| 4 | Health spending, vaccination rates, disease prevalence, water/sanitation access, birth/death rates |
| 5 | Conflict data (external UCDP), resource rents, governance, Polity score |
| 6 | All of the above |

---

## WHO Global Health Observatory

**URL:** https://www.who.int/data/gho
**Access:** Direct download or via `WHO` R package (limited)

### Key Datasets
- Maternal mortality ratio
- Under-5 mortality rate by cause
- Vaccination coverage by antigen
- Disease prevalence (malaria, HIV, TB, NTDs)
- Health workforce density

**Note:** WHO data often requires manual download and cleaning. Teacher should pre-process and provide as CSVs.

---

## UCDP (Uppsala Conflict Data Program)

**URL:** https://ucdp.uu.se
**Download:** https://ucdp.uu.se/downloads/

### Key Datasets

| Dataset | Description | Unit(s) |
|---------|-------------|---------|
| UCDP/PRIO Armed Conflict Dataset | Country-year level: conflict type, intensity, parties | 5 |
| UCDP Georeferenced Event Dataset (GED) | Individual conflict events with coordinates | 5 |
| UCDP Battle-Related Deaths | Annual fatality estimates by conflict | 5 |

### Usage
```r
# Conflicts are typically pre-downloaded as CSV
conflicts <- read_csv("ucdp_armed_conflict.csv")
events <- read_csv("ucdp_ged.csv")
```

---

## CEPII Bilateral Trade Data

**URL:** http://www.cepii.fr/CEPII/en/bdd_modele/bdd_modele.asp
**Key Dataset:** BACI (harmonized bilateral trade data) or Gravity dataset

### Gravity Dataset Variables
- Bilateral trade value
- GDP of origin and destination
- Distance (population-weighted)
- Shared border (dummy)
- Common language (dummy)
- Colonial relationship (dummy)
- Trade agreement (dummy)

**Note:** The full BACI dataset is very large. Teacher should pre-filter to a manageable subset (e.g., top 1,000 bilateral pairs, or all pairs involving a specific region).

---

## Natural Earth (via `rnaturalearth`)

**R Package:** `rnaturalearth`, `rnaturalearthdata`

### Usage
```r
library(rnaturalearth)
library(sf)

# World countries
world <- ne_countries(scale = "medium", returnclass = "sf")

# Specific country
nigeria <- ne_countries(country = "Nigeria", returnclass = "sf")
```

---

## UNHCR Refugee Data

**URL:** https://www.unhcr.org/refugee-statistics/
**R Package:** `refugees` (or direct download)

### Key Variables
- Country of origin
- Country of asylum
- Year
- Number of refugees
- Internally displaced persons (IDPs)

---

## Polity Project (Regime Type)

**URL:** https://www.systemicpeace.org/polityproject.html
**Download:** Polity5 dataset

- Polity score: -10 (full autocracy) to +10 (full democracy)
- Used in Units 2 and 5 for regime type analysis

---

## Ethnic Fractionalization Data

**Source:** Alesina et al. (2003), "Fractionalization"
- Ethnic, linguistic, and religious fractionalization indices by country
- Probability that two randomly selected people are from different groups
- Used in Unit 5 for conflict analysis

---

## Data Quality Notes

| Source | Quality | Notes |
|--------|---------|-------|
| World Bank | High | Official government-reported data; varies by country capacity |
| WHO | High | Some indicators are modeled estimates, not direct counts |
| UCDP | High | Academic dataset; conservative coding rules; updated annually |
| CEPII | High | Based on UN Comtrade; harmonized |
| Polity | Moderate | Subjective expert scoring; some codings are debated |
| Ethnic fractionalization | Moderate | Static (from early 2000s); doesn't capture change |

### Missing Data Strategy

1. **Identify:** Always check `sum(is.na(variable))` and note which countries/years are missing.
2. **Report:** Missing data should be reported in analysis memos and briefs.
3. **Handle:** Use `na.rm = TRUE` for calculations. Do NOT impute unless specifically instructed.
4. **Interpret:** Missing data is often informative — the least developed countries have the most missing data.
