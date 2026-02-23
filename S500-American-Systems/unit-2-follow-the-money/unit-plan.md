# Unit 2 — Follow the Money

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 2 of 6 |
| Title | Follow the Money |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Where does the government's money come from, where does it go, and who decides?* |
| Government TEKS | §113.44(c)(2), (3), (4), (9) |
| Statistics TEKS | §111.47(c)(2), (7) |
| R Skills | ProPublica API access with `httr`/`jsonlite`, treemap/proportional area visualizations, budget data wrangling, multi-year trend analysis |
| Key Deliverable | Money Trail Report — tracking a federal dollar from taxation through appropriation to local impact |

## Unit Narrative

Money is the most honest record of government priorities. This unit follows two money trails: the federal budget (taxes in, spending out) and campaign finance (who funds elections). Students pull data from USAspending.gov and the ProPublica/FEC databases to see where federal dollars actually go — and who lobbies to direct them. The government content deepens: students learn how a bill becomes a law (specifically an appropriations bill), the role of Congress in spending, and the tension between the executive branch's budget proposal and Congress's power of the purse. Campaign finance connects to Unit 1: does money predict election outcomes? Students test this with data. The statistics strand emphasizes proportional reasoning, bivariate relationships, and the distinction between correlation and influence.

## Government Concepts

- Constitutional basis of taxation: Article I, Section 8; 16th Amendment (income tax)
- Federal budget process: President's proposal → Congressional Budget Resolution → Appropriations bills
- Revenue sources: individual income tax, corporate tax, payroll tax, excise tax, tariffs
- Mandatory vs. discretionary spending: Social Security, Medicare, Medicaid vs. defense, education, infrastructure
- National debt and deficit (revisited from S400 with government/policy lens)
- Congress: structure (House/Senate), committees, appropriations process
- Separation of powers: executive proposes, Congress disposes, judiciary reviews
- Campaign finance: FEC, contribution limits, PACs, Super PACs, Citizens United v. FEC
- Lobbying: who lobbies, how it works, transparency requirements

## Statistics Concepts

- Proportional reasoning: percent of budget, percent of revenue §111.47(c)(2)
- Bivariate data: campaign spending vs. election outcomes §111.47(c)(7)
- Regression in a new context: spending vs. vote share §111.47(c)(7)
- Data from APIs: structured data retrieval and parsing §111.47(c)(2)
- Time-series trends: budget composition over decades §111.47(c)(2)

---

## Lesson Sequence

### Week 1: Your Tax Dollar (≈8.3 hours)

#### Lesson 2.1 — Where Does the Federal Government Get Its Money? (2 hrs)
**Government Focus:** Federal revenue sources, Article I taxation power, 16th Amendment
**Statistics Focus:** Proportional reasoning, pie/treemap charts
**Activity:**
- Warm-up: "If the federal government collected $4.4 trillion last year, where did it come from?" Students guess.
- Present the data: Individual income tax (~50%), payroll taxes (~35%), corporate tax (~10%), excise/tariffs (~5%).
- Direct instruction: Constitutional basis — Article I, Section 8 gives Congress the power to tax. 16th Amendment (1913) authorized income tax.
- R lab: Create a treemap of federal revenue sources:
```r
library(treemapify)
revenue <- tibble(
  source = c("Individual Income Tax", "Payroll Taxes",
             "Corporate Income Tax", "Excise & Other"),
  amount = c(2200, 1500, 425, 275)
)
ggplot(revenue, aes(area = amount, fill = source, label = source)) +
  geom_treemap() +
  geom_treemap_text(place = "centre", size = 12) +
  labs(title = "Federal Revenue Sources (FY2023, Billions $)")
```
- Discussion: Why does the income tax produce the most revenue? Who pays it? (Progressive tax structure — brief introduction.)

**TEKS:** §113.44(c)(9)(A), §113.44(c)(2)(A), §111.47(c)(2)

#### Lesson 2.2 — Where Does the Money Go? Mandatory vs. Discretionary (2 hrs)
**Government Focus:** Federal spending categories, mandatory vs. discretionary, entitlements
**Statistics Focus:** Proportional area charts, percent of total
**Activity:**
- Federal spending breakdown: Social Security (~21%), Medicare (~14%), Medicaid (~10%), Defense (~13%), Interest on debt (~10%), everything else (~32%).
- Key distinction: Mandatory spending (entitlements — automatic, set by law) vs. Discretionary spending (Congress must appropriate each year).
- R lab: Create side-by-side treemaps: mandatory vs. discretionary.
- Time-series analysis: Pull historical budget composition data. How has the share of mandatory spending changed since 1970?
```r
budget_history <- read_csv("federal_budget_history.csv")
ggplot(budget_history, aes(x = year, y = pct_of_total, fill = category)) +
  geom_area() +
  labs(title = "Federal Spending Composition (1970–Present)",
       y = "% of Total Spending")
```
- Discussion: Mandatory spending has grown from ~30% to ~60% of the budget. Why? (Aging population, rising healthcare costs.) What are the implications?

**TEKS:** §113.44(c)(9)(A), §113.44(c)(3)(A), §111.47(c)(2)

#### Lesson 2.3 — How a Budget Becomes Law (1.5 hrs)
**Government Focus:** Budget process, separation of powers, Congress and the appropriations process
**Activity:**
- The federal budget process (simplified):
  1. President submits a budget proposal (February).
  2. Congressional Budget Office (CBO) scores it.
  3. House and Senate pass a budget resolution (framework).
  4. Appropriations committees write 12 spending bills.
  5. Both chambers pass each bill; President signs.
  6. If they can't agree: continuing resolution or government shutdown.
- Direct instruction: This is separation of powers in action. The President proposes, but Congress controls the purse.
- Case study: A recent government shutdown. What happened? What programs were affected?
- Students map the process on a flowchart. Identify where each branch has power.

**TEKS:** §113.44(c)(2)(A–B), §113.44(c)(4)(A), §113.44(c)(3)(A)

#### Lesson 2.4 — Federal Spending in Your Community (2.8 hrs)
**Government Focus:** Federalism — how federal dollars flow to state and local governments
**Statistics Focus:** Data from APIs, per-capita calculations
**R Focus:** Working with USAspending.gov data
**Activity:**
- Question: How much federal money comes to Houston / Harris County / Texas?
- Dataset: USAspending.gov download (teacher-curated) showing federal spending by agency, program, and recipient in Texas.
- R lab: Filter and summarize spending by category:
```r
tx_spending <- read_csv("usaspending_texas.csv")

tx_spending %>%
  group_by(agency_name) %>%
  summarize(total = sum(amount)) %>%
  arrange(desc(total)) %>%
  slice_head(n = 10) %>%
  ggplot(aes(x = reorder(agency_name, total), y = total / 1e9)) +
  geom_col(fill = "darkblue") +
  coord_flip() +
  labs(title = "Top 10 Federal Agencies Spending in Texas",
       x = "", y = "Billions ($)")
```
- Students identify: Which agencies spend the most in Texas? (HHS for Medicaid, DOD for military bases, Education for student loans, etc.)
- Calculate per-capita federal spending for Texas vs. national average.
- Discussion: Is Texas a "donor state" (sends more to DC than it receives) or a "receiver state"? What data would you need to answer this?

**TEKS:** §113.44(c)(3)(A–B), §113.44(c)(9)(A), §111.47(c)(2)

---

### Week 2: Campaign Finance — Who Funds Democracy? (≈8.3 hours)

#### Lesson 2.5 — Campaign Finance 101: Rules of the Game (1.5 hrs)
**Government Focus:** FEC, contribution limits, PACs, Super PACs, Citizens United v. FEC
**Activity:**
- Direct instruction: How are campaigns funded?
  - Individual contributions (limited: $3,300 per candidate per election in 2024).
  - PACs (Political Action Committees): pool contributions from members.
  - Super PACs: unlimited spending, cannot coordinate with candidates (Citizens United v. FEC, 2010).
  - Small-dollar fundraising: the rise of ActBlue/WinRed.
- Citizens United v. FEC: The Supreme Court ruled that political spending is protected speech. Corporations and unions can spend unlimited amounts through Super PACs.
- Discussion: Is political spending "speech"? Does unlimited spending distort democracy? Students examine arguments on both sides.

**TEKS:** §113.44(c)(7)(E), §113.44(c)(6)(A)

#### Lesson 2.6 — The ProPublica API: Accessing Congressional Data (2 hrs)
**R Focus:** API calls with `httr` and `jsonlite`, parsing JSON, building tibbles from API data
**Activity:**
- Introduction to APIs: An API (Application Programming Interface) lets you request data programmatically instead of downloading files.
- ProPublica Congress API: Free, requires an API key.
- R lab: Make your first API call:
```r
library(httr)
library(jsonlite)

api_key <- "YOUR_PROPUBLICA_KEY"

# Get list of current House members from Texas
response <- GET(
  "https://api.propublica.org/congress/v1/members/house/TX/current.json",
  add_headers("X-API-Key" = api_key)
)
content <- fromJSON(rawToChar(response$content))
tx_reps <- as_tibble(content$results)
head(tx_reps)
```
- Students explore the data: Name, party, district, next election, API ID.
- Discussion: Why is it powerful to access this data programmatically? (Scale, reproducibility, automation.)

**TEKS:** §113.44(c)(4)(A), §111.47(c)(2)

#### Lesson 2.7 — Does Money Win Elections? (2.5 hrs)
**Government Focus:** Campaign spending and electoral outcomes
**Statistics Focus:** Bivariate analysis, regression, correlation ≠ causation
**Activity:**
- Dataset: FEC/OpenSecrets data on campaign spending and vote share for House races (teacher-curated, recent election cycle).
- R lab: Scatterplot of campaign spending vs. vote share:
```r
elections <- read_csv("house_spending_results.csv")
ggplot(elections, aes(x = total_spending / 1e6, y = vote_pct)) +
  geom_point(aes(color = winner), alpha = 0.5) +
  geom_smooth(method = "lm", se = FALSE) +
  labs(title = "Campaign Spending vs. Vote Share (House 2022)",
       x = "Total Spending (Millions $)",
       y = "Vote Share (%)")
```
- Calculate correlation and R². Is the relationship strong?
- Key complexity: Winners raise more money, but they also attract more money *because* they're likely to win. Direction of causation is ambiguous.
- Examine edge cases: Are there candidates who spent very little and won? Candidates who spent a lot and lost?
- Writing prompt: "Based on the data, does money buy elections? Explain your reasoning, including at least one limitation of this analysis."

**TEKS:** §113.44(c)(7)(E), §111.47(c)(7)(A–C)

#### Lesson 2.8 — Lobbying: Who Has Access? (1 hr)
**Government Focus:** Lobbying, interest groups, transparency
**Activity:**
- Direct instruction: Lobbying is legal and protected by the First Amendment (right to petition). But who lobbies?
- Data: Top 20 lobbying spenders (from OpenSecrets). Industries: pharmaceutical, insurance, electronics, oil & gas, real estate.
- Discussion: Is lobbying democratic? It's legal access, but it's concentrated among wealthy interests.
- Quick R exercise: Bar chart of lobbying spending by industry sector.
- Connection to Unit 4 (Policy Tracing): When we trace a policy later, we'll see if lobbying spending correlates with policy outcomes.

**TEKS:** §113.44(c)(7)(E), §113.44(c)(9)(B)

#### Lesson 2.9 — The National Debt: A Bipartisan Problem (1.3 hrs)
**Government Focus:** National debt, deficit, debt ceiling, partisan dynamics
**Statistics Focus:** Time-series analysis, exponential growth (review)
**Activity:**
- Return to the debt-to-GDP data from S400, now with a government lens.
- Debt has grown under both parties. Pull data and annotate by presidential party.
- Discussion: Why does the debt keep growing? (Mandatory spending grows automatically. Tax cuts reduce revenue. Neither party wants to cut popular programs or raise taxes enough.)
- The debt ceiling: What is it? What happens when Congress refuses to raise it?
- Student analysis: Compare federal revenue vs. spending over the past 20 years. In how many years was there a surplus?

**TEKS:** §113.44(c)(9)(A), §113.44(c)(2)(A), §111.47(c)(2)

---

### Week 3: The Money Trail Report (≈8.3 hours)

#### Lesson 2.10 — Congress Deep Dive: Committees and the Power of the Purse (1.5 hrs)
**Government Focus:** Congressional structure, committees, Appropriations Committee, House vs. Senate
**Activity:**
- Direct instruction: Congress has 535 members (435 House + 100 Senate). Real work happens in committees.
- Key committees for money: House Appropriations, Senate Appropriations, House Ways and Means (taxes), Senate Finance.
- Students use ProPublica API to pull committee assignments for their representative:
```r
# Get specific member's committee assignments
member_response <- GET(
  paste0("https://api.propublica.org/congress/v1/members/", member_id, ".json"),
  add_headers("X-API-Key" = api_key)
)
```
- Discussion: Does committee membership affect what money flows to their district?
- Connection: Students will investigate this question in Unit 5.

**TEKS:** §113.44(c)(4)(A–B), §113.44(c)(2)(B)

#### Lesson 2.11 — Federalism and Money: National, State, and Local (1.5 hrs)
**Government Focus:** Federalism — federal grants, block grants, categorical grants, unfunded mandates
**Activity:**
- The federal government doesn't just spend directly — it sends money to states with conditions.
- Types: Block grants (flexible), categorical grants (specific purpose), unfunded mandates (requirements without funding).
- Example: Federal highway money — states must set drinking age at 21 to receive it. Is this coercion or cooperation?
- Data: Federal grants to Texas by program (teacher-curated). Students calculate what percentage of the Texas state budget comes from federal sources.
- Discussion: Does federal funding make states dependent? Does it ensure national standards?

**TEKS:** §113.44(c)(3)(A–C), §113.44(c)(9)(A)

#### Lesson 2.12 — Unit 2 Project Workshop: The Money Trail Report (3 hrs)
**Activity:**
- Students trace the path of a federal dollar. Choose one:
  - **Option A: A policy dollar.** Pick a federal program (e.g., SNAP, Pell Grants, highway funding). Trace: Where does the revenue come from? How is the spending authorized? How much reaches Texas/Houston? Who benefits?
  - **Option B: A campaign dollar.** Pick a recent Texas congressional race. Trace: Who funded the candidates? How much did each side spend? Did spending predict the outcome? Who lobbied on the key issues?
- Requirements:
  1. At least 3 R visualizations (treemap, bar chart, time series, or scatterplot).
  2. At least one data source from an API or government database.
  3. At least 3 government vocabulary terms used correctly (e.g., appropriation, mandatory spending, PAC, federalism).
  4. A 2-page R Markdown report answering the question: "Who decided where this money went, and was the outcome fair?"
- Workshop time with teacher conferences.

#### Lesson 2.13 — Presentations & Assessment (2.3 hrs)
**Activity:**
- Money Trail Report presentations (4 minutes each + 2 minutes Q&A).
- Unit checkpoint quiz: Federal budget process, revenue sources, campaign finance rules, Congress structure (25 minutes).

---

## Unit 2 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Budget & Campaign Finance | Individual | 25 |
| R Lab: Federal Revenue Treemap | Lab | 20 |
| R Lab: Budget Time Series | Lab | 20 |
| R Lab: ProPublica API | Lab | 25 |
| R Lab: Money & Elections Regression | Lab | 25 |
| Lobbying Analysis | Analysis Memo | 15 |
| Money Trail Report | Project | 50 |
| Presentation | Project | 20 |
| **Total** | | **200** |

## Key Vocabulary

Article I Section 8, 16th Amendment, income tax, payroll tax, corporate tax, excise tax, progressive tax, federal budget, mandatory spending, discretionary spending, entitlement, Social Security, Medicare, Medicaid, appropriation, Appropriations Committee, continuing resolution, government shutdown, deficit, surplus, national debt, debt ceiling, FEC, PAC, Super PAC, Citizens United v. FEC, lobbying, interest group, campaign finance, federalism, block grant, categorical grant, unfunded mandate, CBO, separation of powers, power of the purse, API, JSON, treemap
