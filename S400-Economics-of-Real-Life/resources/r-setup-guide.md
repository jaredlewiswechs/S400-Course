# R & RStudio Setup Guide — S400

## Option A: RStudio Cloud (Recommended for Schools)

1. Go to [posit.cloud](https://posit.cloud)
2. Create a free account (or use school Google login)
3. Click **New Project → New RStudio Project**
4. No installation required — runs in the browser

**Advantages:** No IT permissions needed, works on Chromebooks, consistent environment.
**Limitations:** Free tier has limited compute hours per month (25 hrs). Upgrade to classroom plan if needed.

## Option B: RStudio Desktop

1. Install R from [cran.r-project.org](https://cran.r-project.org)
2. Install RStudio Desktop from [posit.co/download/rstudio-desktop](https://posit.co/download/rstudio-desktop/)
3. Open RStudio (it will find R automatically)

## Required Packages

Run this once in the RStudio Console:

```r
install.packages(c(
  "tidyverse",   # dplyr, ggplot2, readr, tidyr, stringr, etc.
  "fredr",       # FRED API access
  "scales",      # Axis formatting
  "patchwork",   # Multi-panel plots
  "rmarkdown",   # R Markdown documents
  "knitr"        # Knitting R Markdown
))
```

## FRED API Key Setup

The `fredr` package requires a free API key from the Federal Reserve:

1. Go to [fred.stlouisfed.org](https://fred.stlouisfed.org)
2. Create a free account
3. Go to **My Account → API Keys → Request API Key**
4. In RStudio, run:
```r
library(fredr)
fredr_set_key("YOUR_API_KEY_HERE")
```

**For classrooms:** The teacher can set up one API key and distribute it, or each student can get their own.

## Verifying the Installation

Run this script to confirm everything works:

```r
library(tidyverse)
library(fredr)

# Test tidyverse
test_data <- tibble(x = 1:10, y = x^2)
ggplot(test_data, aes(x, y)) + geom_point() + geom_line()

# Test fredr (requires API key)
cpi <- fredr(series_id = "CPIAUCSL", observation_start = as.Date("2020-01-01"))
head(cpi)
```

If both produce output without errors, you're ready.

## Folder Structure Convention

Each student should maintain this folder structure:

```
S400/
  unit-1/
    unit1_calculator.R
    my_budget.csv
    unit1_dashboard.Rmd
  unit-2/
    gas_prices.R
    price_investigation.Rmd
  ...
  data/
    (shared datasets go here)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Package not found" | Run `install.packages("package_name")` |
| FRED API errors | Check API key is set; check internet connection |
| CSV won't load | Check file path; use `file.choose()` to browse |
| ggplot blank | Make sure data is loaded; check for typos in column names |
| R Markdown won't knit | Check for unclosed code chunks; restart R and try again |
