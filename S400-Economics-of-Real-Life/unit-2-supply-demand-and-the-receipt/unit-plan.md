# Unit 2 — Supply, Demand & the Receipt

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Supply, Demand & the Receipt |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Why does a gallon of milk cost what it costs — and who decides?* |
| Economics TEKS | §113.31(c)(2), (3) |
| Algebra I TEKS | §111.39(c)(2), (3), (8), (12) |
| R Skills | `filter()`, `mutate()`, `ggplot()` scatterplots, `geom_smooth(method = "lm")`, interpreting slope and intercept |
| Key Deliverable | Price Investigation Report — a data-backed explanation of why a specific product costs what it does |

## Unit Narrative

Students investigate prices — on receipts, at gas pumps, and in FRED datasets — to discover that prices are not arbitrary. They are signals. The supply-and-demand model is introduced not as a textbook diagram but as a testable claim: when supply drops, do prices actually rise? Students build scatterplots, fit linear trend lines, and interpret slope as "rate of change in price." The free enterprise system is examined through the lens of what prices do in a market economy: allocate scarce resources, signal value, and coordinate millions of decisions without a central planner.

## Economics Concepts

- Demand: the law of demand, demand curves, determinants of demand (income, preferences, substitutes, complements, expectations)
- Supply: the law of supply, supply curves, determinants of supply (input costs, technology, number of sellers, expectations)
- Market equilibrium: where supply meets demand, equilibrium price and quantity
- Surplus and shortage: what happens when price is above or below equilibrium
- Price elasticity (intuitive, not formula-heavy): necessities vs. luxuries
- Free enterprise characteristics: private property, voluntary exchange, profit motive, competition
- Price controls: price ceilings (rent control) and price floors (minimum wage preview)

## Math Concepts (Algebra I)

- Linear equations in two variables: demand as `Qd = a - bP`, supply as `Qs = c + dP` §111.39(c)(2)
- Slope as rate of change — "for every $1 increase in price, quantity demanded drops by ___ units" §111.39(c)(3)
- Solving systems of linear equations: finding equilibrium (set `Qd = Qs`) §111.39(c)(2)
- Scatterplots and trend lines §111.39(c)(8)
- Evaluating expressions and solving equations §111.39(c)(12)

---

## Lesson Sequence

### Week 1: What's on the Receipt? (≈8.3 hours)

#### Lesson 2.1 — The Receipt Audit (2 hrs)
**Economics Focus:** Prices as information, market economy basics
**Activity:**
- Students examine 5 grocery receipts (teacher-curated, anonymized) from different Houston stores.
- Task: Same items, different stores, different prices. Record prices in a shared Google Sheet.
- Discussion: Why do prices differ? (Location, brand, store type, time of purchase.)
- Introduce the free enterprise system: private property, voluntary exchange, competition.
- Key insight: In a market economy, no one "sets" prices centrally — they emerge from buyers and sellers.

**TEKS:** §113.31(c)(2)(A–B), §113.31(c)(3)(A)

#### Lesson 2.2 — The Law of Demand (2 hrs)
**Economics Focus:** Law of demand, demand schedule, demand curve
**Math Focus:** Linear functions with negative slope
**Activity:**
- Present data: As the price of a Whataburger combo rises from $6 to $12 (in $1 increments), survey the class: How many would buy at each price?
- Compile a demand schedule (table). Plot: Price (y-axis) vs. Quantity Demanded (x-axis). It slopes downward.
- Express as a linear function: `Qd = 30 - 2P`. Identify slope (-2) and interpret: "For every $1 increase in price, 2 fewer students buy."
- Calculate: At what price does quantity demanded hit zero? Solve `0 = 30 - 2P`.

**TEKS:** §113.31(c)(3)(A), §111.39(c)(2)(B–C), §111.39(c)(3)

#### Lesson 2.3 — Demand Shifters (1.5 hrs)
**Economics Focus:** Determinants of demand — income, substitutes, complements, preferences, expectations
**Activity:**
- Scenario cards: "A new study says coffee prevents cancer" → demand for coffee shifts right. "The price of hot dog buns doubles" → demand for hot dogs shifts left (complements).
- Students sort 10 scenarios into: shift right, shift left, movement along the curve.
- Graph exercise: Draw the original demand curve. Draw the new demand curve after the shift.
- R preview: Load a dataset of monthly coffee prices and sales. Is there a visible demand shift after a real news event?

**TEKS:** §113.31(c)(3)(A), §111.39(c)(2)

#### Lesson 2.4 — The Law of Supply (1.5 hrs)
**Economics Focus:** Law of supply, supply schedule, supply curve
**Math Focus:** Linear functions with positive slope
**Activity:**
- Flip the perspective: Now students are sellers. At each price point ($6–$12), how many combos would you be willing to produce and sell?
- Compile a supply schedule. Plot: Price vs. Quantity Supplied. It slopes upward.
- Express as: `Qs = -10 + 3P`. Identify slope (+3) and interpret.
- Compare demand and supply graphs. Where do they cross?

**TEKS:** §113.31(c)(3)(A), §111.39(c)(2)(B–C)

#### Lesson 2.5 — Supply Shifters & R Scatterplots (1.3 hrs)
**Economics Focus:** Determinants of supply — input costs, technology, number of sellers
**R Focus:** Scatterplots with `ggplot()`
**Activity:**
- Direct instruction: What makes supply shift? (Input prices, technology improvements, government regulations, number of firms.)
- R lab: Load a dataset of Texas gasoline prices and crude oil prices (from FRED/EIA).
```r
gas <- read_csv("texas_gas_prices.csv")
ggplot(gas, aes(x = crude_oil_price, y = retail_gas_price)) +
  geom_point(alpha = 0.5) +
  labs(title = "Crude Oil vs. Retail Gas Prices in Texas",
       x = "Crude Oil ($/barrel)", y = "Retail Gas ($/gallon)")
```
- Discussion: The scatterplot shows a positive relationship. Why? (Crude oil is an input cost.)

**TEKS:** §113.31(c)(3)(A), §111.39(c)(8)

---

### Week 2: Equilibrium — Where Supply Meets Demand (≈8.3 hours)

#### Lesson 2.6 — Finding Equilibrium (2 hrs)
**Economics Focus:** Market equilibrium, equilibrium price, equilibrium quantity
**Math Focus:** Solving a system of two linear equations
**Activity:**
- Combine the class demand and supply equations: `Qd = 30 - 2P` and `Qs = -10 + 3P`.
- Set `Qd = Qs` → `30 - 2P = -10 + 3P` → solve for P.
- Find equilibrium price and quantity. Graph both lines — equilibrium is the intersection.
- R lab: Plot both functions on the same axes, mark the intersection.
```r
library(tidyverse)
prices <- seq(0, 15, by = 0.5)
market <- tibble(
  P = prices,
  Qd = 30 - 2 * prices,
  Qs = -10 + 3 * prices
)
ggplot(market) +
  geom_line(aes(x = Qd, y = P), color = "blue") +
  geom_line(aes(x = Qs, y = P), color = "red") +
  geom_point(aes(x = 14, y = 8), size = 3) +
  annotate("text", x = 16, y = 8, label = "Equilibrium") +
  labs(title = "Market Equilibrium", x = "Quantity", y = "Price ($)")
```
- Practice: 3 more systems with different slopes and intercepts.

**TEKS:** §113.31(c)(3)(B), §111.39(c)(2)(C), §111.39(c)(3)

#### Lesson 2.7 — Surplus and Shortage (1.5 hrs)
**Economics Focus:** What happens when price ≠ equilibrium?
**Math Focus:** Evaluating expressions, inequalities
**Activity:**
- Using the equilibrium model from 2.6: What if the government sets the price at $10? Calculate `Qd` and `Qs` at that price. `Qs > Qd` → surplus.
- What if price is set at $5? `Qd > Qs` → shortage.
- Students shade surplus and shortage regions on the graph.
- Real-world examples: Black Friday (shortage by design), unsold Christmas trees in January (surplus).
- Practice: Given supply and demand equations, identify surplus/shortage at 4 different prices.

**TEKS:** §113.31(c)(3)(B), §111.39(c)(2), §111.39(c)(12)

#### Lesson 2.8 — Price Controls: Ceilings and Floors (2 hrs)
**Economics Focus:** Price ceilings (rent control), price floors (minimum wage), unintended consequences
**Math Focus:** Systems of inequalities (intuitive)
**Activity:**
- Case study 1: New York City rent control. Present data on average rents, vacancy rates, and waitlists.
- Case study 2: Minimum wage as a price floor in the labor market (preview of Unit 3).
- Students use their equilibrium graphs to mark the ceiling/floor and identify the resulting surplus or shortage.
- R lab: Visualize Houston rent data over time. Annotate periods when rent control was debated.
- Debate: Should Houston implement rent control? Students prepare 2 data-supported arguments (one for, one against).

**TEKS:** §113.31(c)(3)(B), §113.31(c)(8)(A), §111.39(c)(2), §111.39(c)(3)

#### Lesson 2.9 — Trend Lines: What the Slope Tells You (2.8 hrs)
**Economics Focus:** Using data to test economic claims
**Math Focus:** Line of best fit, slope interpretation, `geom_smooth(method = "lm")`
**R Focus:** Adding trend lines to scatterplots
**Activity:**
- Return to the gas price scatterplot from Lesson 2.5. Add a trend line:
```r
ggplot(gas, aes(x = crude_oil_price, y = retail_gas_price)) +
  geom_point(alpha = 0.5) +
  geom_smooth(method = "lm", se = FALSE, color = "red") +
  labs(title = "Crude Oil vs. Retail Gas Prices")
```
- Interpret the slope: "For every $1 increase in crude oil price, retail gas increases by approximately $_____."
- Extract the equation: `lm(retail_gas_price ~ crude_oil_price, data = gas)`.
- Discuss: Is the relationship perfectly linear? What other factors affect gas prices?
- Practice: Students pick a second pair of economic variables (e.g., income vs. spending, price vs. quantity sold) and repeat the process.

**TEKS:** §111.39(c)(8)(A–B), §111.39(c)(2), §111.39(c)(3)

---

### Week 3: Elasticity and the Price Investigation (≈8.3 hours)

#### Lesson 2.10 — Elastic vs. Inelastic: Do People Stop Buying? (2 hrs)
**Economics Focus:** Price elasticity of demand (intuitive approach)
**Math Focus:** Percent change, rate of change
**Activity:**
- Question: If the price of insulin doubles, do people buy less? What about the price of movie tickets?
- Define elastic (sensitive to price) vs. inelastic (insensitive to price). Use percent change in quantity vs. percent change in price.
- Students classify 10 goods as elastic or inelastic with justification.
- R lab: Compare two scatterplots — one steep (inelastic), one flat (elastic). Connect slope to elasticity.
- Real data: Pull FRED data on gasoline consumption during price spikes. Does consumption drop proportionally?

**TEKS:** §113.31(c)(3)(A), §111.39(c)(8), §111.39(c)(12)

#### Lesson 2.11 — Houston Grocery Prices: A Local Investigation (2 hrs)
**Economics Focus:** Local price variation, competition, food deserts
**R Focus:** `filter()`, `mutate()`, grouped bar charts
**Activity:**
- Dataset: Teacher-curated prices of 10 common items at 5 Houston-area stores (H-E-B, Walmart, Fiesta, Whole Foods, corner store).
- Students use R to:
  - Calculate average price per item per store.
  - Create grouped bar charts comparing stores.
  - `mutate()` to calculate percent markup relative to the cheapest option.
- Discussion: Why is the corner store more expensive? (Supply chain, volume, competition, location.)
- Connection: Food deserts — areas where affordable groceries are inaccessible. Show a Houston food desert map.

**TEKS:** §113.31(c)(2)(A), §113.31(c)(3)(A), §111.39(c)(8), §111.39(c)(12)

#### Lesson 2.12 — Free Enterprise in Action (1.5 hrs)
**Economics Focus:** Characteristics of free enterprise — private property, competition, profit motive, consumer sovereignty, voluntary exchange
**Activity:**
- Students analyze the Houston grocery data through the free enterprise lens:
  - Private property: Each store owns its inventory and sets its own prices.
  - Competition: H-E-B vs. Walmart keeps prices lower.
  - Profit motive: Why does Whole Foods charge more? (Different market segment, higher costs, brand.)
  - Consumer sovereignty: Your receipt is a vote. Where you shop signals what you value.
- Quick write: "Name one benefit and one limitation of the free enterprise system, using evidence from the grocery price data."

**TEKS:** §113.31(c)(2)(A–C)

#### Lesson 2.13 — Unit 2 Project Workshop (2 hrs)
**Activity:**
- Students choose a product or service to investigate: *Why does [X] cost what it costs?*
- Requirements:
  1. Identify at least 2 supply-side and 2 demand-side factors affecting the price.
  2. Find or collect real price data (FRED, BLS, local observation, or teacher-provided).
  3. Create at least 2 R visualizations (scatterplot with trend line and one other chart type).
  4. Write a 1-page "Price Investigation Report" using economic vocabulary.
- Workshop time: data collection, R coding, peer review of draft visualizations.

#### Lesson 2.14 — Unit 2 Presentations & Assessment (2.8 hrs)
**Activity:**
- Students present their Price Investigation Reports (3–4 minutes each).
- Peer feedback using a structured rubric (Is the economic reasoning sound? Is the data convincing?).
- Unit checkpoint quiz: Supply, demand, equilibrium, systems of equations (20 minutes).

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Supply, Demand, Equilibrium | Individual | 25 |
| R Lab: Gas Price Scatterplot | Lab | 25 |
| R Lab: Equilibrium Graph | Lab | 25 |
| Surplus/Shortage Practice | Practice | 15 |
| Houston Grocery Price Analysis | Lab | 30 |
| Price Investigation Report | Project | 50 |
| Presentation | Project | 30 |
| **Total** | | **200** |

## Key Vocabulary

demand, supply, law of demand, law of supply, demand curve, supply curve, demand schedule, supply schedule, determinants of demand, determinants of supply, substitute, complement, equilibrium, equilibrium price, equilibrium quantity, surplus, shortage, price ceiling, price floor, elasticity, elastic, inelastic, free enterprise, private property, voluntary exchange, profit motive, competition, consumer sovereignty, scatterplot, trend line, slope, line of best fit, system of equations
