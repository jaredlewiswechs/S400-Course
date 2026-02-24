# Unit 4 — Depreciation & Decay Models

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 4 of 6 |
| Title | Depreciation & Decay Models |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you figure out what something is really worth — and why does every car, computer, and building lose value differently?* |
| Math Models TEKS | §111.43(c)(4), (8) |
| Tools | RStudio, Google Sheets/Excel, Desmos, financial calculators |
| Key Deliverable | Asset Depreciation Report — students model the depreciation of a vehicle or piece of equipment using multiple methods and recommend which method best reflects reality |

## Unit Narrative

Everything you own starts losing value the moment you buy it. A new car driven off the lot drops thousands of dollars in the first year. A laptop purchased for school will be nearly worthless in five years. Businesses and the IRS need precise, defensible methods for calculating that loss — and those methods are mathematical models. This unit explores depreciation as a real-world application of linear and exponential decay. Students learn three core methods — straight-line, declining balance, and sum-of-years-digits — and discover that each produces a different depreciation curve with different financial implications. The choice of method affects taxes, resale decisions, and balance sheets. Students build depreciation schedules in spreadsheets, fit exponential decay models in RStudio, and compare methods graphically on Desmos.

The unit culminates in an Asset Depreciation Report where students select a real asset (a vehicle, piece of equipment, or technology product), gather actual pricing data, model its depreciation using all three methods, compare the results, and recommend the method that best matches observed market reality. This connects directly to Units 1–3: depreciation affects loan-to-value ratios (Unit 2), insurance replacement costs (Unit 3), and long-term financial planning (Unit 1).

## Math Concepts

- Depreciation as a mathematical model for loss of value over time §111.43(c)(4)
- Straight-line depreciation: constant annual decrease (linear model) §111.43(c)(4)
- Declining balance depreciation: constant percentage decrease (exponential decay) §111.43(c)(4)
- Sum-of-years-digits depreciation: accelerated method with decreasing fractions §111.43(c)(4)
- Book value, salvage value, useful life, and depreciable base §111.43(c)(4)
- Depreciation schedules and cumulative depreciation §111.43(c)(4)
- Exponential decay functions: `V(t) = V₀(1 - r)^t` §111.43(c)(8)
- Curve fitting: modeling real depreciation data with exponential functions §111.43(c)(8)
- Comparing linear vs. exponential models graphically and numerically §111.43(c)(4), (8)
- Financial applications: tax deductions, asset management, replacement timing §111.43(c)(4)

---

## Lesson Sequence

### Week 1: Depreciation Fundamentals (≈8.3 hours)

#### Lesson 4.1 — What Is Depreciation? (2 hrs)
**Math Models Focus:** Understanding depreciation as a mathematical concept
**Activity:**
- Warm-up: Show students a listing for a 2024 Honda Civic at $28,000 new, then show the same model from 2021 listed at $19,500, and 2018 at $13,000. Ask: What pattern do you see? Can you predict the 2015 price?
- Definition: Depreciation is the decrease in value of an asset over time. It is the mathematical opposite of growth (Unit 2's compound interest).
- Key terms:
  - **Original cost (C):** The purchase price of the asset.
  - **Salvage value (S):** The estimated value at the end of the asset's useful life.
  - **Useful life (n):** The number of years the asset is expected to be productive.
  - **Depreciable base:** `C - S` — the total amount of value that will be lost.
  - **Book value:** The asset's value on paper at any given time. `Book value = Cost - Accumulated depreciation`.
- Why it matters: Businesses deduct depreciation on taxes. The IRS allows specific methods. Choosing the wrong method can cost or save thousands of dollars.
- Class discussion: What assets depreciate? (Cars, computers, machinery, buildings.) What assets appreciate? (Land, some collectibles, some real estate.) Why the difference?
- Desmos exploration: Plot the car prices from the warm-up as points. What kind of curve fits — linear or exponential? Students experiment with both.
- Practice: 8 problems identifying cost, salvage value, useful life, and depreciable base for various assets.

**TEKS:** §111.43(c)(4)

#### Lesson 4.2 — Straight-Line Depreciation (2.5 hrs)
**Math Models Focus:** Linear depreciation model
**Activity:**
- The simplest method: Straight-line depreciation assumes the asset loses the same dollar amount every year.
- Formula: `Annual depreciation = (C - S) / n`
- Book value at year t: `V(t) = C - t × (C - S) / n`
- This is a linear function: slope = `-(C - S)/n`, y-intercept = C.
- Worked example: A delivery truck costs $45,000, has a salvage value of $5,000, and a useful life of 8 years.
  - Annual depreciation = `(45,000 - 5,000) / 8 = $5,000/year`.
  - Book value after 3 years: `45,000 - 3(5,000) = $30,000`.
  - Book value after 8 years: `45,000 - 8(5,000) = $5,000` (salvage value — it checks out).
- Spreadsheet lab: Build a straight-line depreciation schedule in Google Sheets:
  - Column A: Year (0, 1, 2, ..., 8).
  - Column B: Beginning book value.
  - Column C: Depreciation expense (constant).
  - Column D: Accumulated depreciation.
  - Column E: Ending book value.
- Students create a chart from the spreadsheet — the book value graph is a straight line.
- Desmos: Graph `V(t) = 45000 - 5000t` and verify it matches the spreadsheet.
- Practice: 10 problems — compute annual depreciation, book value at year t, and build mini depreciation schedules.

**TEKS:** §111.43(c)(4)

#### Lesson 4.3 — Declining Balance Depreciation (2.5 hrs)
**Math Models Focus:** Exponential depreciation model
**Activity:**
- The declining balance method applies a fixed percentage rate to the current book value each year. The depreciation amount decreases each year because the book value decreases.
- Formula: `V(t) = C × (1 - r)^t` where r is the depreciation rate.
- Common rates: Double-declining balance (DDB) uses `r = 2/n`. For an 8-year life, `r = 2/8 = 0.25` (25% per year).
- Connection to Unit 2: This is the compound interest formula in reverse. Growth: `A = P(1 + r)^t`. Decay: `V = C(1 - r)^t`.
- Worked example: Same truck — $45,000, 8-year life, DDB method.
  - Rate: `r = 2/8 = 0.25`.
  - Year 1: `45,000 × 0.25 = $11,250` depreciation. Book value: $33,750.
  - Year 2: `33,750 × 0.25 = $8,437.50` depreciation. Book value: $25,312.50.
  - Year 3: `25,312.50 × 0.25 = $6,328.13` depreciation. Book value: $18,984.38.
  - Notice: More depreciation in early years, less in later years.
- Important: DDB does not use salvage value in the calculation, but you stop depreciating once book value reaches salvage value.
- Spreadsheet lab: Build a DDB schedule. Compare it side-by-side with the straight-line schedule from Lesson 4.2.
- Desmos: Graph `V(t) = 45000(0.75)^t` alongside `V(t) = 45000 - 5000t`. When does each model predict the truck is worth $10,000?
- Practice: 8 problems — compute DDB depreciation for various assets.

**TEKS:** §111.43(c)(4), §111.43(c)(8)

#### Lesson 4.4 — Sum-of-Years-Digits Depreciation (1.3 hrs)
**Math Models Focus:** Accelerated depreciation with decreasing fractions
**Activity:**
- Sum-of-years-digits (SYD) is another accelerated method. It front-loads depreciation like DDB but uses a fraction based on remaining life.
- SYD denominator: For useful life n, `SYD = n(n+1)/2`. For 8 years: `SYD = 8(9)/2 = 36`.
- Year t depreciation: `Depreciation = (Remaining life / SYD) × (C - S)`.
  - Year 1: `(8/36) × 40,000 = $8,888.89`.
  - Year 2: `(7/36) × 40,000 = $7,777.78`.
  - Year 3: `(6/36) × 40,000 = $6,666.67`.
  - ...Year 8: `(1/36) × 40,000 = $1,111.11`.
- Check: Sum of all depreciation = `(8+7+6+5+4+3+2+1)/36 × 40,000 = 36/36 × 40,000 = $40,000`. Equals the depreciable base.
- Spreadsheet lab: Add a SYD schedule to the workbook. Students now have three methods side-by-side.
- Discussion: Why would a business choose SYD over straight-line? (Larger tax deductions in early years when the asset is most productive.)
- Practice: 6 problems computing SYD depreciation.

**TEKS:** §111.43(c)(4)

---

### Week 2: Real-World Depreciation and Modeling (≈8.3 hours)

#### Lesson 4.5 — Vehicle Depreciation with Real Data (2.5 hrs)
**Math Models Focus:** Modeling real depreciation data
**Activity:**
- Students research actual vehicle prices using online listings (Kelley Blue Book, Edmunds, or provided data sets). Each student selects a vehicle make and model and collects prices for years 0 (new) through 8–10.
- Data collection template (spreadsheet):
  - Column A: Age (years).
  - Column B: Average market price.
- Plot the data in Desmos. Does it look linear or exponential?
- RStudio lab: Fit both a linear and exponential model to the data:
```r
# Vehicle depreciation data (example: Toyota Camry)
age <- 0:10
price <- c(28000, 23500, 20200, 17800, 15500, 13200, 11400, 9800, 8500, 7300, 6200)

# Linear model
linear_fit <- lm(price ~ age)
summary(linear_fit)

# Exponential model (log-transform)
log_price <- log(price)
exp_fit <- lm(log_price ~ age)
r <- 1 - exp(coef(exp_fit)[2])  # decay rate
cat("Exponential decay rate:", round(r, 4), "\n")

# Plot both models
plot(age, price, pch = 19, col = "darkblue",
     xlab = "Age (years)", ylab = "Market Price ($)",
     main = "Vehicle Depreciation: Linear vs. Exponential")
abline(linear_fit, col = "red", lwd = 2)
curve(exp(coef(exp_fit)[1]) * exp(coef(exp_fit)[2] * x),
      add = TRUE, col = "forestgreen", lwd = 2)
legend("topright", legend = c("Data", "Linear", "Exponential"),
       col = c("darkblue", "red", "forestgreen"), pch = c(19, NA, NA),
       lty = c(NA, 1, 1), lwd = 2)
```
- Key question: Which model fits better? Compute R-squared for each. For most vehicles, the exponential model fits better — steep initial drop, then flattening.
- Discussion: The first-year depreciation "cliff" — why do new cars lose 15–25% in the first year? (Market psychology, "used" label, dealer markup.)
- Practice: 4 problems interpreting fitted models and predicting future values.

**TEKS:** §111.43(c)(4), §111.43(c)(8)

#### Lesson 4.6 — Property and Equipment Depreciation (2 hrs)
**Math Models Focus:** Depreciation in business contexts
**Activity:**
- Different assets depreciate differently:
  - **Vehicles:** 5-year useful life (IRS MACRS), steep initial decline.
  - **Office equipment/computers:** 5–7 year life, very fast decline.
  - **Commercial buildings:** 39-year life (IRS), slow decline.
  - **Residential rental property:** 27.5-year life (IRS).
- The IRS Modified Accelerated Cost Recovery System (MACRS) assigns specific useful lives and methods. Businesses don't get to pick arbitrarily.
- Worked example: A restaurant buys a commercial oven for $12,000 with a 7-year useful life and $500 salvage value.
  - Straight-line: `(12,000 - 500) / 7 = $1,642.86/year`.
  - DDB: rate = `2/7 ≈ 28.6%`. Year 1: `12,000 × 0.286 = $3,429`.
  - SYD: denominator = 28. Year 1: `(7/28)(11,500) = $2,875`.
- Spreadsheet: Students build all three schedules for the oven.
- Graph all three book value curves on one chart. Discuss: Which method gives the biggest tax deduction in Year 1? (DDB.) Which is simplest? (Straight-line.) Which is most predictable? (Straight-line.)
- Practice: 6 problems involving different asset types and depreciation methods.

**TEKS:** §111.43(c)(4)

#### Lesson 4.7 — Comparing Depreciation Methods Graphically (2 hrs)
**Math Models Focus:** Visual and numerical comparison of models
**Activity:**
- Students take the delivery truck example ($45,000, $5,000 salvage, 8-year life) and graph all three methods on one coordinate plane.
- RStudio lab: Generate and compare all three methods programmatically:
```r
# Depreciation comparison
cost <- 45000
salvage <- 5000
life <- 8
dep_base <- cost - salvage
years <- 0:life

# Straight-line
sl_bv <- cost - (dep_base / life) * years

# Double-declining balance
ddb_bv <- numeric(life + 1)
ddb_bv[1] <- cost
rate <- 2 / life
for (t in 1:life) {
  depreciation <- ddb_bv[t] * rate
  ddb_bv[t + 1] <- max(ddb_bv[t] - depreciation, salvage)
}

# Sum-of-years-digits
syd_denom <- life * (life + 1) / 2
syd_bv <- numeric(life + 1)
syd_bv[1] <- cost
for (t in 1:life) {
  fraction <- (life - t + 1) / syd_denom
  syd_bv[t + 1] <- syd_bv[t] - fraction * dep_base
}

# Plot
plot(years, sl_bv, type = "b", col = "blue", pch = 19, lwd = 2,
     ylim = c(0, 50000), xlab = "Year", ylab = "Book Value ($)",
     main = "Depreciation Method Comparison")
lines(years, ddb_bv, type = "b", col = "red", pch = 17, lwd = 2)
lines(years, syd_bv, type = "b", col = "darkgreen", pch = 15, lwd = 2)
abline(h = salvage, lty = 2, col = "gray")
legend("topright",
       legend = c("Straight-Line", "Double-Declining", "Sum-of-Years-Digits"),
       col = c("blue", "red", "darkgreen"), pch = c(19, 17, 15), lwd = 2)
```
- Analysis questions:
  1. At what year does DDB drop below straight-line? What does this mean for taxes?
  2. Which method reaches salvage value first? Why?
  3. If you were selling the truck after 3 years, which method makes the book value closest to the likely market price?
  4. If you wanted the largest tax deduction in Year 1, which method would you choose?
- Desmos: Students recreate the comparison using sliders for cost, salvage, and life. They adjust the parameters and observe how the curves shift.
- Practice: 6 comparison problems with different assets.

**TEKS:** §111.43(c)(4), §111.43(c)(8)

#### Lesson 4.8 — Exponential Decay Models Deep Dive (1.8 hrs)
**Math Models Focus:** The mathematics of exponential decay
**Activity:**
- General exponential decay: `V(t) = V₀ × (1 - r)^t` or equivalently `V(t) = V₀ × b^t` where `b = 1 - r` and `0 < b < 1`.
- Half-life: The time it takes for the value to drop to half. If `V(t) = V₀ × b^t`, then half-life = `ln(0.5) / ln(b)`.
  - Example: A computer depreciates at 30% per year. `b = 0.70`. Half-life = `ln(0.5)/ln(0.70) ≈ 1.94 years`. The computer loses half its value in under 2 years.
- Solving decay equations:
  - When will the truck be worth $15,000? `15000 = 45000(0.75)^t` → `(0.75)^t = 1/3` → `t = ln(1/3)/ln(0.75) ≈ 3.82 years`.
- Desmos: Graph `y = 45000(0.75)^x` and trace to find when y = 15000. Verify algebraically.
- Connection: Radioactive decay, cooling, and population decline all follow the same mathematical model. Depreciation is just the financial version.
- Practice: 10 problems — solve exponential decay equations, find half-life, predict future values.

**TEKS:** §111.43(c)(8)

---

### Week 3: Schedules, Applications, and the Report (≈8.3 hours)

#### Lesson 4.9 — Building Professional Depreciation Schedules (2.5 hrs)
**Math Models Focus:** Complete depreciation schedules in spreadsheets
**Activity:**
- Students build a comprehensive depreciation workbook in Google Sheets with four tabs:
  - **Tab 1: Inputs** — Cost, salvage value, useful life, DDB rate. Use named cells so formulas reference names, not cell addresses.
  - **Tab 2: Straight-Line Schedule** — Year, beginning book value, depreciation expense, accumulated depreciation, ending book value. Formulas reference the Inputs tab.
  - **Tab 3: DDB Schedule** — Same columns. Use `MAX()` function to prevent book value from dropping below salvage: `=MAX(previous_BV * rate, previous_BV - salvage)` for the depreciation, capped so ending BV does not go below salvage.
  - **Tab 4: SYD Schedule** — Same columns. Fractions decrease each year.
- Each tab includes a chart showing the book value curve.
- A summary tab compares total depreciation expense per year across all three methods (they should all sum to the same depreciable base by the end).
- Spreadsheet skills: `IF()` statements, `MAX()`, `MIN()`, absolute cell references ($), named ranges, chart formatting.
- Students practice with two different assets: one with a short life (5 years) and one with a long life (15 years).

**TEKS:** §111.43(c)(4)

#### Lesson 4.10 — When to Replace an Asset (1.5 hrs)
**Math Models Focus:** Using depreciation models to make decisions
**Activity:**
- The replacement decision: When does the cost of maintaining an old asset exceed the cost of replacing it?
- Total cost of ownership: Purchase price + maintenance costs - resale value.
- Example: A company truck costs $45,000 new. Maintenance costs increase over time:
  - Year 1: $500. Year 2: $800. Year 3: $1,200. Year 4: $2,000. Year 5: $3,500. Year 6: $5,500. Year 7: $8,000.
  - The resale value follows the exponential model: `V(t) = 45000(0.80)^t`.
- Spreadsheet analysis: For each year, compute:
  - Cumulative maintenance cost.
  - Current resale value.
  - Average annual cost = (Purchase price + Cumulative maintenance - Resale value) / Years.
  - The optimal replacement year minimizes average annual cost.
- RStudio: Plot average annual cost vs. year. Find the minimum.
```r
purchase <- 45000
maintenance <- c(500, 800, 1200, 2000, 3500, 5500, 8000)
resale <- 45000 * 0.80^(1:7)
cum_maint <- cumsum(maintenance)
avg_annual <- (purchase + cum_maint - resale) / (1:7)
plot(1:7, avg_annual, type = "b", pch = 19, col = "darkred",
     xlab = "Year", ylab = "Average Annual Cost ($)",
     main = "Optimal Replacement Timing")
cat("Optimal replacement year:", which.min(avg_annual), "\n")
```
- Discussion: How do businesses actually make replacement decisions? What other factors matter besides math? (Reliability, safety, new features, cash flow.)

**TEKS:** §111.43(c)(4), §111.43(c)(8)

#### Lesson 4.11 — Asset Depreciation Report Workshop (Day 1) (2 hrs)
**Activity:**
- Students begin the **Asset Depreciation Report**. Requirements:
  1. **Asset selection:** Choose a specific vehicle, piece of equipment, or technology product. Research its actual purchase price.
  2. **Data collection:** Find real market prices for the asset at different ages (at least 5 data points). Sources: Kelley Blue Book, eBay, equipment reseller sites, manufacturer data.
  3. **Three depreciation models:** Compute straight-line, DDB, and SYD depreciation schedules for the asset. Choose a reasonable salvage value and useful life based on research.
  4. **Exponential curve fit:** Use RStudio to fit an exponential decay model to the real market data. Report the decay rate and R-squared.
  5. **Comparison graph:** Plot all three accounting methods AND the real market data on one graph. Use RStudio or Desmos.
  6. **Analysis (1–2 pages):**
     - Which method best matches the real market data? Support with R-squared or visual comparison.
     - Why might a business choose a different method than the one that matches reality?
     - When would you recommend replacing this asset? Support with a cost analysis.
  7. **Depreciation schedule:** Include a clean, formatted spreadsheet schedule for the recommended method.
- Workshop time: asset research, data collection, initial model building.

#### Lesson 4.12 — Asset Depreciation Report Workshop (Day 2) (1.5 hrs)
**Activity:**
- Continued workshop: Students finalize their RStudio analysis, comparison graphs, and written analysis.
- Peer review: Students exchange drafts with a partner and provide feedback on:
  - Are the three methods computed correctly?
  - Does the comparison graph clearly show the differences?
  - Is the recommendation well-supported by data?
- Teacher circulates for individual check-ins. Common issues: forgetting to stop DDB at salvage value, mislabeling axes, not computing R-squared for the exponential fit.
- Students revise based on feedback and prepare final documents.

#### Lesson 4.13 — Presentations & Unit 4 Assessment (0.8 hrs)
**Activity:**
- Selected presentations: 5–6 students present their Asset Depreciation Reports (4 minutes each, showing their comparison graph and recommendation).
- Class discussion: Did different assets favor different methods? Did anyone find a case where straight-line was the best fit?
- Unit checkpoint quiz: Straight-line depreciation, DDB depreciation, SYD depreciation, exponential decay, book value calculations, interpreting depreciation graphs (20 minutes).

---

## Unit 4 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Depreciation Methods & Exponential Decay | Individual | 25 |
| Straight-Line Depreciation Practice | Practice | 20 |
| Declining Balance Depreciation Practice | Practice | 20 |
| SYD Depreciation Practice | Practice | 15 |
| Vehicle Depreciation Data Lab (RStudio) | Lab | 25 |
| Depreciation Method Comparison Lab | Lab | 20 |
| Professional Depreciation Schedule (Spreadsheet) | Lab | 25 |
| Asset Depreciation Report | Project | 50 |
| **Total** | | **200** |

## Key Vocabulary

depreciation, appreciate, original cost, salvage value, useful life, depreciable base, book value, accumulated depreciation, straight-line depreciation, declining balance, double-declining balance (DDB), sum-of-years-digits (SYD), depreciation schedule, depreciation rate, accelerated depreciation, MACRS, exponential decay, decay rate, half-life, curve fitting, R-squared, residual, replacement cost, total cost of ownership, linear model, exponential model
