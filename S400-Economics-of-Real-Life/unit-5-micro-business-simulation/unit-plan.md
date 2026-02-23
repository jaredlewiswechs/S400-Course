# Unit 5 — Micro-Business Simulation

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Micro-Business Simulation |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Can you build a business that survives the math?* |
| Economics TEKS | §113.31(c)(11), (2), (4) |
| Algebra I TEKS | §111.39(c)(2), (4), (5), (12) |
| R Skills | `if_else()`, custom functions, iterative simulation, multi-panel dashboards |
| Key Deliverable | Micro-Business Plan with R-powered financial projections and a live simulation pitch |

## Unit Narrative

This unit shifts from analysis to creation. Students design a micro-business — a small, local venture they could realistically start (food cart, tutoring service, custom T-shirts, lawn care). The economics of entrepreneurship meet the math of break-even analysis. Revenue and cost functions are linear; profit is the difference. But when students model growth, they encounter quadratic and exponential patterns. The R work becomes more sophisticated: students write custom functions, use `if_else()` for conditional logic, and run simple simulations to test "what if" scenarios. The free enterprise system is not just a concept — students experience it by making production, pricing, and marketing decisions under constraints.

## Economics Concepts

- Entrepreneurship as a factor of production
- Free enterprise: risk, reward, profit motive, competition
- Types of business organizations (sole proprietorship, partnership, LLC)
- Revenue, cost, and profit: `Profit = Revenue - Cost`
- Fixed costs vs. variable costs (revisited with business context)
- Break-even analysis: where Revenue = Cost
- Pricing strategies: cost-plus, competitive, value-based
- Competition and market entry
- Supply-side decisions: production quantity, quality, differentiation
- Role of profit in a market economy (signal to enter/exit)

## Math Concepts (Algebra I)

- Linear functions for revenue and cost: `R(x) = px`, `C(x) = F + vx` §111.39(c)(2)
- Systems of equations: break-even point where `R(x) = C(x)` §111.39(c)(2)
- Quadratic functions: revenue maximization when price depends on quantity (`R = x(a - bx)`) §111.39(c)(4)
- Exponential functions: modeling business growth scenarios §111.39(c)(5)
- Evaluating and writing expressions with variables §111.39(c)(12)
- Domain and range in business contexts (you can't produce negative units) §111.39(c)(2)

---

## Lesson Sequence

### Week 1: The Entrepreneurship Framework (≈8.3 hours)

#### Lesson 5.1 — What Makes an Entrepreneur? (1.5 hrs)
**Economics Focus:** Entrepreneurship, risk, reward, innovation
**Activity:**
- Warm-up: Name a business in your neighborhood. Who started it? What risk did they take?
- Direct instruction: Entrepreneurship as the 4th factor of production. Entrepreneurs combine land, labor, and capital to create something new.
- Case studies (brief): Three Houston entrepreneurs — a food truck owner, a tech startup founder, a nail salon owner. What did each risk? What did each gain?
- Discussion: Why do people start businesses when most fail? (Profit motive, independence, solving a problem.)
- Activity: Students brainstorm 3 micro-business ideas they could realistically start with less than $500.

**TEKS:** §113.31(c)(11)(A–B), §113.31(c)(2)(C)

#### Lesson 5.2 — Revenue, Cost, and Profit Functions (2 hrs)
**Economics Focus:** Revenue, cost, profit, fixed vs. variable costs
**Math Focus:** Linear functions, writing equations from contexts
**Activity:**
- Define:
  - Revenue: `R(x) = p × x` where p = price per unit, x = units sold.
  - Cost: `C(x) = F + v × x` where F = fixed costs, v = variable cost per unit.
  - Profit: `π(x) = R(x) - C(x) = px - F - vx = (p - v)x - F`.
- Example: Lemonade stand. Price = $3. Fixed costs (table, signage) = $50. Variable cost (per cup) = $0.75.
  - `R(x) = 3x`, `C(x) = 50 + 0.75x`, `π(x) = 2.25x - 50`.
- Students graph R(x) and C(x) on the same axes. Where do they cross? → break-even point.
- R lab: Students define revenue and cost functions in R and plot them:
```r
x <- seq(0, 100, by = 1)
revenue <- 3 * x
cost <- 50 + 0.75 * x
profit <- revenue - cost

biz <- tibble(units = x, revenue, cost, profit)
ggplot(biz) +
  geom_line(aes(x = units, y = revenue), color = "green") +
  geom_line(aes(x = units, y = cost), color = "red") +
  geom_vline(xintercept = 50/2.25, linetype = "dashed") +
  labs(title = "Revenue vs. Cost", y = "Dollars", x = "Units Sold")
```
- Practice: 3 additional business scenarios with different prices, fixed costs, and variable costs.

**TEKS:** §113.31(c)(11)(A), §111.39(c)(2)(A–C), §111.39(c)(12)

#### Lesson 5.3 — Break-Even Analysis (2 hrs)
**Economics Focus:** Break-even point, viability of a business
**Math Focus:** Solving systems of linear equations (algebraic and graphical)
**Activity:**
- The break-even point is where `R(x) = C(x)`: `px = F + vx` → `x = F / (p - v)`.
- Students solve break-even for 5 different business scenarios algebraically and verify graphically in R.
- Extension: What if you want to earn a profit of $500/month? Set `π(x) = 500` and solve for x.
- Real-world complication: What if you can only sell 30 units per day? Domain constraint: `0 ≤ x ≤ 30`. Can you still break even?
- Discussion: If your break-even point is 200 units/day but you can only sell 50, what do you do? (Lower costs, raise price, increase demand.)

**TEKS:** §111.39(c)(2)(C), §111.39(c)(12)

#### Lesson 5.4 — Choose Your Micro-Business (1 hr)
**Economics Focus:** Market research, identifying opportunities
**Activity:**
- Students formally select their micro-business idea. Requirements:
  - Could realistically operate in Houston.
  - Startup cost under $500.
  - Clear product or service.
  - Identifiable target customer.
- Students complete a one-page "Business Concept Sheet":
  - Business name, product/service, target customer, location/channel.
  - Estimated price, estimated variable cost per unit, estimated fixed costs.
  - Why does this business make sense? (What need does it fill?)

**TEKS:** §113.31(c)(11)(A–B)

#### Lesson 5.5 — Pricing Strategy and Competition (1.8 hrs)
**Economics Focus:** Pricing strategies, market structure, competition
**Math Focus:** How price changes affect break-even and profit
**Activity:**
- Three pricing strategies:
  - Cost-plus: Set price = cost + markup. Simple but ignores demand.
  - Competitive: Match competitor prices. What if competitors undercut you?
  - Value-based: Price based on perceived value to customer. Higher margin but riskier.
- Students research competitors for their micro-business. (What do similar products/services cost in Houston?)
- R exercise: Create a sensitivity analysis. Vary price from $1 to $10. For each price, calculate break-even quantity.
```r
prices <- seq(1, 10, by = 0.5)
fixed_cost <- 200
var_cost <- 2
breakeven <- fixed_cost / (prices - var_cost)
sensitivity <- tibble(price = prices, breakeven_units = breakeven)

ggplot(sensitivity, aes(x = price, y = breakeven_units)) +
  geom_line() +
  geom_point() +
  labs(title = "Break-Even Sensitivity to Price",
       x = "Price ($)", y = "Units to Break Even")
```
- Students choose their price point and justify it in writing.

**TEKS:** §113.31(c)(4)(A), §113.31(c)(11)(A), §111.39(c)(2), §111.39(c)(12)

---

### Week 2: Financial Projections and Simulation (≈8.3 hours)

#### Lesson 5.6 — Revenue Maximization: When Demand Depends on Price (2 hrs)
**Economics Focus:** Demand curves and revenue, elastic vs. inelastic demand (revisited)
**Math Focus:** Quadratic functions — revenue as a parabola
**Activity:**
- Reality check: Lower prices mean more sales. If `Q = a - bP`, then `Revenue = P × Q = P(a - bP) = aP - bP²`. This is a quadratic (downward parabola).
- Example: `Q = 100 - 5P`. Revenue = `P(100 - 5P) = 100P - 5P²`.
- Students find the vertex (maximum revenue point): `P* = a/(2b) = 100/10 = $10`.
- R lab: Plot revenue as a function of price. Identify the peak.
```r
P <- seq(0, 20, by = 0.5)
Q <- 100 - 5 * P
R <- P * Q
quad <- tibble(price = P, quantity = pmax(Q, 0), revenue = pmax(R, 0))

ggplot(quad, aes(x = price, y = revenue)) +
  geom_line(color = "darkgreen", size = 1.2) +
  geom_vline(xintercept = 10, linetype = "dashed") +
  labs(title = "Revenue vs. Price (Quadratic)",
       x = "Price ($)", y = "Revenue ($)")
```
- Connection to Unit 2: The demand curve determines this relationship. More elastic demand → flatter parabola, more sensitive to price changes.
- Students estimate a demand function for their micro-business and calculate revenue-maximizing price.

**TEKS:** §111.39(c)(4)(A–B), §113.31(c)(3)(A), §113.31(c)(11)(A)

#### Lesson 5.7 — Writing Custom R Functions (1.5 hrs)
**R Focus:** Function definition, arguments, return values
**Activity:**
- Students learn to write custom functions in R:
```r
calc_profit <- function(units, price, fixed_cost, var_cost) {
  revenue <- price * units
  cost <- fixed_cost + var_cost * units
  profit <- revenue - cost
  return(profit)
}

calc_profit(units = 100, price = 5, fixed_cost = 200, var_cost = 1.50)
```
- Students write a `calc_profit()` function customized to their micro-business.
- Extension: Write a `break_even()` function that calculates break-even units given price, fixed cost, and variable cost.
- Apply `if_else()` to classify months as profitable or not:
```r
months <- tibble(month = 1:12, units_sold = c(20, 25, 30, ...))
months <- months %>%
  mutate(profit = calc_profit(units_sold, 5, 200, 1.50),
         status = if_else(profit > 0, "Profit", "Loss"))
```

**TEKS:** §111.39(c)(12)

#### Lesson 5.8 — Growth Projections: Linear vs. Exponential (2 hrs)
**Economics Focus:** Business growth, scaling, realistic projections
**Math Focus:** Comparing linear and exponential growth models
**Activity:**
- Scenario A (linear): You gain 5 new customers per month. `Customers_t = 20 + 5t`.
- Scenario B (exponential): Your customer base grows 10% per month. `Customers_t = 20 × (1.10)^t`.
- Students project both for 24 months and graph in R.
- Discussion: Which is realistic for a micro-business? (Early growth might be exponential via word-of-mouth, but it levels off — logistic growth, briefly introduced.)
- Students choose a growth model for their micro-business and justify it.
- R lab: Project monthly revenue for 12 months under both models. Display in a side-by-side panel.

**TEKS:** §111.39(c)(2), §111.39(c)(5), §113.31(c)(11)(A)

#### Lesson 5.9 — What-If Simulation (2.8 hrs)
**Economics Focus:** Risk, uncertainty, decision-making under constraints
**R Focus:** Iterative simulation, `for` loops, random variation
**Activity:**
- Real businesses don't sell exactly the same number of units every month. Add randomness:
```r
set.seed(42)
months <- 12
results <- tibble(month = 1:months)
results <- results %>%
  mutate(
    units_sold = round(rnorm(months, mean = 50, sd = 15)),
    units_sold = pmax(units_sold, 0),
    revenue = units_sold * 5,
    cost = 200 + units_sold * 1.50,
    profit = revenue - cost,
    cumulative_profit = cumsum(profit)
  )

ggplot(results, aes(x = month, y = cumulative_profit)) +
  geom_line() + geom_point() +
  geom_hline(yintercept = 0, linetype = "dashed", color = "red") +
  labs(title = "Cumulative Profit: 12-Month Simulation",
       y = "Cumulative Profit ($)", x = "Month")
```
- Students run the simulation 5 times (different seeds). How often does the business turn profitable?
- Vary assumptions: What if variable costs increase 20%? What if demand drops by 10 units?
- Students run scenarios for their own micro-business and record results in a summary table.

**TEKS:** §111.39(c)(12), §111.39(c)(2), §113.31(c)(11)(A)

---

### Week 3: The Business Plan and Pitch (≈8.3 hours)

#### Lesson 5.10 — Business Organization: Sole Proprietorship, Partnership, LLC (1 hr)
**Economics Focus:** Types of business organizations, liability, taxation
**Activity:**
- Brief direct instruction: Sole proprietorship (simplest, personal liability), partnership (shared ownership), LLC (limited liability, more paperwork).
- Students choose the organizational form for their micro-business and explain why.
- Quick worksheet: Match 6 business scenarios to the most appropriate organizational form.

**TEKS:** §113.31(c)(11)(B)

#### Lesson 5.11 — Building the Business Plan (3 hrs)
**Activity:**
- Students compile their micro-business plan. Required sections:
  1. **Executive Summary** (1 paragraph): What is the business? Who is the customer? What problem does it solve?
  2. **Market Analysis** (1 paragraph): Who are your competitors? How are you different? What pricing strategy do you use and why?
  3. **Financial Projections** (R-generated):
     - Revenue and cost functions (graph with break-even point marked)
     - 12-month profit projection (with the simulation showing best, worst, and average case)
     - Revenue-maximizing price analysis (quadratic model, if applicable)
     - Break-even sensitivity chart (from Lesson 5.5)
  4. **Growth Model** (1 paragraph + graph): Linear or exponential? Justify with reasoning.
  5. **Risk Assessment** (1 paragraph): What could go wrong? How does the simulation show this?

- Workshop time with teacher and peer feedback.

#### Lesson 5.12 — The Pitch: Shark Tank Style (2 hrs)
**Activity:**
- Each team/individual presents a 4-minute pitch:
  - 2 minutes: Business concept and market analysis.
  - 2 minutes: Financial projections (showing R visualizations on screen).
- "Investors" (classmates and teacher) ask 2 questions each.
- Scoring rubric (peer + teacher):
  - Business viability (25%)
  - Economic reasoning and vocabulary (25%)
  - R visualizations — clarity and accuracy (25%)
  - Presentation quality (25%)

#### Lesson 5.13 — Reflection: Free Enterprise and Entrepreneurship (1 hr)
**Economics Focus:** Synthesizing the role of entrepreneurs in a free enterprise system
**Activity:**
- Class discussion: What did you learn about running a business that surprised you?
- Writing prompt: "Explain how the free enterprise system encourages and supports entrepreneurship. Use evidence from your micro-business simulation to support your argument." (1 page)
- Connection: Profit as a signal — if your business is profitable, it means you're providing something people value. If it's not, the market is telling you to adjust.

**TEKS:** §113.31(c)(2)(A–C), §113.31(c)(11)(A–B)

#### Lesson 5.14 — Unit 5 Assessment (1.3 hrs)
**Activity:**
- Unit checkpoint quiz: Break-even analysis, linear and quadratic revenue functions, exponential growth, business organization types (25 minutes).
- Collect final business plans for grading.

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Business Math | Individual | 25 |
| Business Concept Sheet | Practice | 15 |
| R Lab: Break-Even & Sensitivity Analysis | Lab | 25 |
| R Lab: Quadratic Revenue | Lab | 25 |
| R Lab: Simulation | Lab | 25 |
| Micro-Business Plan (written) | Project | 50 |
| Pitch Presentation | Project | 35 |
| **Total** | | **200** |

## Key Vocabulary

entrepreneur, entrepreneurship, sole proprietorship, partnership, LLC, limited liability, revenue, cost, profit, fixed cost, variable cost, break-even point, break-even analysis, pricing strategy, cost-plus pricing, competitive pricing, value-based pricing, market entry, quadratic function, vertex, revenue maximization, parabola, exponential growth, linear growth, simulation, projection, sensitivity analysis, domain, range, risk, profit motive, free enterprise
