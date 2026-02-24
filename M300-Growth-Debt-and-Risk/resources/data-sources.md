# Data Sources Reference — M300 Growth, Debt, and Risk

## Path A — Math Models: Data by Unit

### Unit 1: Personal Finance

| Resource | Description | Source |
|----------|-------------|--------|
| Sample pay stubs | Teacher-generated pay stubs showing gross pay, federal/state withholding, FICA, net pay | Teacher-prepared |
| IRS tax brackets | Current federal income tax brackets and standard deduction | IRS.gov |
| BLS income data | Median income by education level, occupation, and region | Bureau of Labor Statistics |
| Cost of living data | Houston-area housing, transportation, food, and utilities costs | BLS Consumer Expenditure Survey |
| Savings rate data | National personal savings rate over time | FRED (Federal Reserve Economic Data) |

### Unit 2: Loans & Interest

| Resource | Description | Source |
|----------|-------------|--------|
| FRED interest rate data | Federal funds rate, mortgage rates, auto loan rates over time | FRED |
| Mortgage rate comparison | Current 15-year vs. 30-year fixed rates from multiple lenders | Bankrate.com / Freddie Mac |
| Credit card terms | Sample credit card agreements showing APR, minimum payment formula, fees | Teacher-curated (anonymized) |
| Auto loan offers | Sample auto loan offers with varying terms, rates, and down payments | Teacher-curated |
| Student loan data | Federal student loan interest rates and repayment plan options | StudentAid.gov |
| Amortization examples | Pre-built amortization tables for classroom analysis | Teacher-prepared |

### Unit 3: Insurance & Risk

| Resource | Description | Source |
|----------|-------------|--------|
| Auto insurance quotes | Sample auto insurance quotes for different driver profiles (age, vehicle, coverage) | Teacher-curated (anonymized) |
| Health insurance plans | Simplified comparison of Bronze/Silver/Gold marketplace plans | Healthcare.gov (simplified) |
| Actuarial life tables | Age-based mortality rates for expected value calculations | Social Security Administration |
| Natural disaster frequency | Hurricane, flood, and storm frequency data for Houston area | NOAA / FEMA |
| Renters insurance scenarios | Sample renters insurance policies with coverage limits and deductibles | Teacher-curated |

### Unit 4: Depreciation

| Resource | Description | Source |
|----------|-------------|--------|
| Vehicle depreciation data | Used car prices by make, model, year, and mileage | Kelley Blue Book / Edmunds |
| Equipment depreciation schedules | IRS MACRS depreciation tables for business equipment | IRS Publication 946 |
| Houston housing prices | Historical home values in selected Houston neighborhoods | Zillow / Harris County Appraisal District |
| Technology depreciation | Price history of computers, phones, and other electronics over time | Teacher-curated |
| Commercial asset data | Simplified depreciation examples for business machinery, vehicles, and buildings | Accounting textbook references |

### Unit 5: Probability

| Resource | Description | Source |
|----------|-------------|--------|
| Lottery data | Texas Lottery odds and payout structures | Texas Lottery Commission |
| Weather probability | Historical rainfall and temperature data for Houston | NOAA Weather Data |
| Sports statistics | Win/loss records, shooting percentages, batting averages | ESPN / Baseball Reference |
| Medical screening data | Simplified sensitivity/specificity data for screening tests (for conditional probability) | Teacher-curated (published studies) |
| Game show probability | "Monty Hall Problem" and similar classic probability scenarios | Teacher-prepared |

### Unit 6: Data-Driven Decisions

| Resource | Description | Source |
|----------|-------------|--------|
| Census income data | Household income by education, race, age, and geography | U.S. Census Bureau / American Community Survey |
| FRED economic indicators | Unemployment rate, inflation, GDP growth | FRED |
| Houston demographic data | Population, income, housing, education data by neighborhood | City of Houston / Census |
| Health and outcome data | Simplified datasets linking variables (e.g., education and income, exercise and health) | CDC / published studies |
| Misleading graph examples | Collection of real-world graphs with truncated axes, cherry-picked data, or misleading scales | Teacher-curated from news media |

---

## Path B — Algebra II: Data by Unit

### Unit 1: Functions & Transformations

| Resource | Description | Source |
|----------|-------------|--------|
| Parent function reference | Catalog of parent functions with graphs, domains, ranges | Teacher-prepared |
| Temperature data | Daily temperature data for sinusoidal modeling preview | NOAA |
| Engineering design curves | Real-world parabolic and square root function examples (bridges, antenna dishes) | Engineering references |

### Unit 2: Polynomial & Rational Functions

| Resource | Description | Source |
|----------|-------------|--------|
| Roller coaster profiles | Height profiles of roller coasters modeled as polynomials | Teacher-curated |
| Population data | City and state population data for polynomial regression | Census Bureau |
| Economics data | Revenue/cost curves modeled as polynomials | Teacher-curated |
| Rational function applications | Speed-distance-time problems, concentration/dilution, resistance in parallel circuits | Physics/chemistry textbooks |

### Unit 3: Exponential & Logarithmic Growth

| Resource | Description | Source |
|----------|-------------|--------|
| Population growth data | World, U.S., and Houston population over time | Census Bureau / World Bank |
| Radioactive decay data | Half-life data for common isotopes | Physics references |
| Compound interest tables | Interest rates and growth over various periods | FRED / teacher-prepared |
| pH and decibel scales | Real-world logarithmic scale data | Chemistry/physics references |
| COVID-19 growth data | Early pandemic exponential growth curves (historical) | Johns Hopkins / Our World in Data |

### Unit 4: Complex Systems

| Resource | Description | Source |
|----------|-------------|--------|
| Break-even data | Revenue and cost functions for small business scenarios | Teacher-curated |
| Supply and demand curves | Simplified market equilibrium data | Economics textbooks |
| Projectile motion data | Height-time data for quadratic-linear system intersections | Physics labs |
| Optimization scenarios | Resource allocation, scheduling, and production problems | Operations research textbooks |

### Unit 5: Matrices

| Resource | Description | Source |
|----------|-------------|--------|
| Network diagrams | Simplified social networks, transportation networks | Teacher-curated |
| Economic input-output data | Simplified Leontief input-output models | Economics references |
| Cryptography examples | Simple Hill cipher encoding/decoding with 2×2 matrices | Mathematics references |
| Transformation matrices | 2D geometric transformations as matrix operations | Teacher-prepared |

### Unit 6: Sequences & Series

| Resource | Description | Source |
|----------|-------------|--------|
| Fibonacci in nature | Fibonacci sequence examples in plants, shells, spirals | Biology / mathematics references |
| Financial growth sequences | Compound interest as geometric sequences; annuity payments as series | Financial mathematics references |
| Population models | Discrete population growth (geometric) vs. continuous (exponential) | Ecology references |
| Fractal data | Sierpinski triangle, Koch snowflake — geometric series in perimeter and area | Mathematics references |

---

## Shared Resources (Both Paths)

| Resource | Description | Units |
|----------|-------------|-------|
| FRED Economic Data | Interest rates, inflation, unemployment, savings rates | A: 1–2, 6; B: 3 |
| Bureau of Labor Statistics | Income, employment, consumer expenditure data | A: 1, 6 |
| U.S. Census Bureau | Demographics, income, education, housing | A: 1, 6; B: 2 |
| Harris County Appraisal District | Local property data, housing prices | A: 4 |
| Houston demographic data | Local economic and social data | A: 1, 6 |
| Desmos Activity Library | Pre-built explorations for functions, regression, probability | Both paths |

---

## Data Format Conventions

When providing data to students:
- **CSV format** (`.csv`) for R and spreadsheet import
- **Columns:** lowercase, underscore-separated (e.g., `monthly_payment`, `interest_rate`)
- **Currency:** Plain numbers without dollar signs or commas (e.g., `25000` not `$25,000`)
- **Percentages:** Decimal form in data files (e.g., `0.065` not `6.5%`), with clear documentation
- **Dates:** ISO format `YYYY-MM-DD`

### Example: Loan Comparison Data (Path A)

```csv
loan_id,principal,annual_rate,term_months,monthly_payment,total_interest
A,25000,0.049,60,471.78,3306.81
B,25000,0.065,60,489.15,4349.13
C,25000,0.039,48,563.06,2026.98
```

### Example: Population Growth Data (Path B)

```csv
year,population
1900,76094000
1910,92228496
1920,106021537
1930,123202624
1940,132164569
1950,151325798
1960,179323175
1970,203211926
1980,226545805
1990,248709873
2000,281421906
2010,308745538
2020,331449281
```

---

## Teacher-Prepared Materials

Many M300 datasets work best when prepared by the teacher to match local contexts:

| Material | Preparation Notes |
|----------|-------------------|
| Sample pay stubs | Create 3–4 pay stubs with different income levels, filing statuses, and deduction patterns |
| Credit card statements | Anonymize and simplify real statements showing minimum payment calculations |
| Insurance quotes | Collect quotes for a standardized driver/renter profile from 3–4 companies |
| Vehicle depreciation tables | Pull Kelley Blue Book values for 3 popular vehicles across 5 model years |
| Local dataset for Unit 6 | Curate a Houston-specific dataset connecting two variables (e.g., education and income by zip code) |
| Loan offers for comparison | Create 3 realistic auto loan or mortgage offers with different terms |
| Break-even scenarios (Path B) | Develop 2–3 small business scenarios with revenue and cost functions |
| Sequence data (Path B) | Collect a real-world sequential dataset (weekly sales, daily temperatures, population by decade) |
