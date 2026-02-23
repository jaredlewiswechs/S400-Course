# Data Sources Reference — S400

## Federal Reserve Economic Data (FRED)

**URL:** https://fred.stlouisfed.org
**R Package:** `fredr`

### Key Series Used in S400

| Series ID | Name | Unit(s) |
|-----------|------|---------|
| FEDFUNDS | Federal Funds Effective Rate | 1, 4 |
| CPIAUCSL | Consumer Price Index for All Urban Consumers | 1, 4 |
| GDP | Gross Domestic Product | 4 |
| UNRATE | Civilian Unemployment Rate | 3, 4 |
| HOUS448URN | Houston-The Woodlands-Sugar Land Unemployment Rate | 4 |
| DCOILWTICO | Crude Oil Prices: WTI | 4 |
| FEDMINNFRWG | Federal Minimum Hourly Wage for Nonfarm Workers | 3 |
| MEHOINUSA672N | Real Median Household Income in the US | 3 |
| GFDEBTN | Federal Debt: Total Public Debt | 4 |
| GFDEGDQ188S | Federal Debt: Total Public Debt as Percent of GDP | 4 |
| MSPUS | Median Sales Price of Houses Sold for the US | 2 |
| A191RL1Q225SBEA | Real GDP Growth Rate | 4 |

### How to Pull Data

```r
library(fredr)
fredr_set_key("YOUR_KEY")

# Single series
data <- fredr(series_id = "UNRATE")

# With date range
data <- fredr(
  series_id = "UNRATE",
  observation_start = as.Date("2000-01-01"),
  observation_end = as.Date("2024-12-31")
)
```

---

## Bureau of Labor Statistics (BLS)

**URL:** https://www.bls.gov
**Key Pages:**
- Occupational Employment and Wage Statistics (OEWS): https://www.bls.gov/oes/
- Consumer Expenditure Survey: https://www.bls.gov/cex/
- "Education Pays" table: https://www.bls.gov/emp/chart-unemployment-earnings-education.htm

### Datasets Used in S400

| Dataset | Description | Unit(s) |
|---------|-------------|---------|
| OEWS | Median wages by occupation, national and metro area | 3 |
| Education & Earnings | Median weekly earnings and unemployment by education level | 3 |
| Consumer Expenditure | Average annual spending by category | 1, 2 |
| Local Area Unemployment | Monthly unemployment by metro area | 4 |

**Note:** BLS data is typically downloaded as CSV/XLSX from the website. Pre-cleaned versions should be placed in the `data/` folder for student use.

---

## U.S. Census Bureau / American Community Survey

**URL:** https://data.census.gov
**R Package:** `tidycensus` (used more in S500, but introduced here)

### Datasets Used in S400

| Dataset | Description | Unit(s) |
|---------|-------------|---------|
| Median Household Income by State | ACS 1-year estimates | 3 |
| % with Bachelor's Degree by State | ACS educational attainment | 3 |
| Income by Quintile | Historical income tables (Census) | 3 |

---

## Local Houston Data (Teacher-Curated)

These datasets are collected or compiled by the teacher and distributed to students:

| Dataset | Description | Unit(s) | Source |
|---------|-------------|---------|--------|
| Houston grocery receipts | Prices of 10 common items at 5 Houston stores | 2 | Teacher-collected |
| Harris County home prices | Sample of home sale prices by zip code | 2, 4 | HCAD public records |
| Port of Houston trade data | Top exports/imports by value | 4 | Port Houston annual report |
| Houston industry employment | Employment by sector in Houston MSA | 4 | Texas Workforce Commission |
| Houston gas prices | Monthly average retail gas prices | 2 | AAA/GasBuddy historical |

---

## Data Format Conventions

All datasets provided to students should be:
- **CSV format** (`.csv`)
- **UTF-8 encoding**
- **Column names:** lowercase, underscores instead of spaces (e.g., `median_income`, not `Median Income`)
- **Dates:** ISO 8601 format (`YYYY-MM-DD`)
- **No merged cells** (a common issue when converting from Excel)

---

## FRED API Usage Limits

- Free tier: 120 requests per minute
- For a class of 30 students working simultaneously, this is sufficient
- If rate-limited: add `Sys.sleep(1)` between requests or use pre-downloaded CSVs as backup
