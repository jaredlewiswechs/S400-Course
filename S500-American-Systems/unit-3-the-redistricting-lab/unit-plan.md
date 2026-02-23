# Unit 3 — The Redistricting Lab

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | The Redistricting Lab |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you draw a fair map — and how do you know when someone hasn't?* |
| Government TEKS | §113.44(c)(7), (1), (4) |
| Geometry TEKS | §111.41(c)(2), (5), (11) |
| Statistics TEKS | §111.47(c)(2) |
| R Skills | `sf` package for shapefiles, `leaflet` for interactive maps, area/perimeter calculation on polygons, Polsby-Popper compactness score, `tigris` for Census boundaries |
| Key Deliverable | Redistricting Analysis — students evaluate existing congressional district maps using geometric and demographic metrics, then draw and defend their own district plan |

## Unit Narrative

This is the unit where geometry stops being abstract. Congressional districts are polygons — they have area, perimeter, and shape. Gerrymandering distorts those shapes to manipulate elections. Students learn to detect it by calculating the **Polsby-Popper compactness score**: `4π × Area / Perimeter²`. A perfect circle scores 1.0. The more tortured the shape, the closer to 0. Students load real congressional district shapefiles, calculate compactness for every district in a state, and identify the worst offenders. Then they do it themselves: using Census block data, they draw their own district plans and evaluate the trade-offs between compactness, equal population, minority representation, and competitiveness. The geometry is rigorous — area and perimeter of composite shapes, coordinate geometry, logical reasoning about constraints. The government lesson is visceral: the people in power draw the lines that keep them in power.

## Government Concepts

- Apportionment: how seats in the House are allocated among states after each census
- Redistricting: who draws the lines (state legislatures, independent commissions, courts)
- Gerrymandering: cracking and packing as strategies; partisan and racial gerrymandering
- One person, one vote: Reynolds v. Sims (1964), equal population requirement
- Voting Rights Act §2: majority-minority districts, racial gerrymandering cases
- Key cases: Reynolds v. Sims, Shaw v. Reno, Rucho v. Common Cause (2019)
- Independent redistricting commissions: arguments for and against
- Texas redistricting: history, current map, legal challenges

## Geometry Concepts

- Area of composite/irregular shapes: calculating district area from polygon coordinates §111.41(c)(11)
- Perimeter of composite shapes §111.41(c)(11)
- Coordinate geometry: points, lines, polygons on a coordinate plane §111.41(c)(2)
- Transformations: how shifting a boundary changes area and perimeter §111.41(c)(2)
- Logical reasoning: given constraints (equal population, contiguity, compactness), what districts are possible? §111.41(c)(5)
- Ratio and proportion: Polsby-Popper as a ratio of area to perimeter squared §111.41(c)(11)
- Pi (π) in a real-world context: the compactness formula uses π §111.41(c)(11)

## Statistics Concepts

- Descriptive statistics for district demographics §111.47(c)(2)
- Comparing distributions: partisan lean, racial composition across districts §111.47(c)(2)
- Efficiency gap (intuitive): wasted votes as a measure of partisan gerrymandering §111.47(c)(2)

---

## Lesson Sequence

### Week 1: The Shape of Democracy (≈8.3 hours)

#### Lesson 3.1 — Why Do District Lines Matter? (1.5 hrs)
**Government Focus:** Apportionment, redistricting, representation
**Activity:**
- Warm-up: Show students two maps of the same state with the same population. Map A creates 4 districts where Party X wins 3. Map B creates 4 districts where Party Y wins 3. Same people, different outcome.
- Direct instruction: After each census, congressional districts are redrawn to reflect population changes. This process is called redistricting.
- Who draws the lines? In most states: the state legislature (the party in power). In some states: independent commissions.
- Texas: Lines are drawn by the Texas Legislature. Texas gained 2 seats after the 2020 Census.
- Key principle: "One person, one vote" — districts must have roughly equal populations (Reynolds v. Sims, 1964).

**TEKS:** §113.44(c)(7)(A), §113.44(c)(4)(A), §113.44(c)(1)(B)

#### Lesson 3.2 — Cracking and Packing: The Gerrymander's Toolkit (2 hrs)
**Government Focus:** Gerrymandering strategies, partisan advantage
**Geometry Focus:** Intuitive introduction to district shapes
**Activity:**
- Define gerrymandering: drawing district lines to advantage one party or group.
- Two strategies:
  - **Packing:** Concentrate the opposing party's voters into as few districts as possible (they win those big, waste votes).
  - **Cracking:** Spread the opposing party's voters across many districts so they can't win any.
- Grid exercise: Students receive a 5×5 grid of colored squares (25 "voters": 15 blue, 10 red). Task: Draw 5 districts of 5 squares each so that:
  - Version A: Blue wins 5-0 (impossible? Try it.)
  - Version B: Blue wins 3-2 (fair reflection of the 60/40 split).
  - Version C: Red wins 3-2 (possible through gerrymandering even though red is the minority!).
- Students discover that the same electorate can produce very different outcomes depending on the lines.
- Discussion: Is this fair? What rules would prevent it?

**TEKS:** §113.44(c)(7)(A), §111.41(c)(5)

#### Lesson 3.3 — Loading Real District Maps: The sf Package (2.5 hrs)
**Geometry Focus:** Polygons, coordinate geometry, spatial data
**R Focus:** `sf` for shapefiles, `tigris` for Census boundaries, basic map rendering
**Activity:**
- Introduction to shapefiles: A shapefile stores geographic shapes (polygons) along with data.
- R lab: Load Texas congressional districts:
```r
library(sf)
library(tigris)
library(tidyverse)

tx_districts <- congressional_districts(state = "TX", year = 2022)

ggplot(tx_districts) +
  geom_sf(fill = "lightblue", color = "black") +
  labs(title = "Texas Congressional Districts") +
  theme_minimal()
```
- Students observe: Some districts are compact (roughly circular or rectangular). Others have bizarre, elongated shapes.
- Identify: Which districts look gerrymandered? (Have students guess before doing the math.)
- Mini-lesson: What is a polygon in geometry? Vertices, edges, area, perimeter. Districts are polygons.

**TEKS:** §111.41(c)(2), §111.41(c)(11)

#### Lesson 3.4 — Area and Perimeter of Districts (2.3 hrs)
**Geometry Focus:** Area and perimeter of complex/composite shapes
**R Focus:** `st_area()`, `st_perimeter()` (or `st_length()` on boundary)
**Activity:**
- Review: Area and perimeter for simple shapes (rectangle, triangle, circle).
- For districts (irregular polygons), R calculates area and perimeter from the coordinates:
```r
tx_districts <- tx_districts %>%
  mutate(
    area_km2 = as.numeric(st_area(geometry)) / 1e6,
    perimeter_km = as.numeric(st_length(st_boundary(geometry))) / 1000
  )

# View the results
tx_districts %>%
  st_drop_geometry() %>%
  select(CD118FP, area_km2, perimeter_km) %>%
  arrange(desc(perimeter_km))
```
- Students observe: Which districts have the largest perimeters relative to their area? These are the most elongated.
- Geometry connection: A circle has the maximum area for a given perimeter. Highly gerrymandered districts have very large perimeters for their area — they're the opposite of circles.
- Practice: Students calculate area and perimeter for 3 simple shapes by hand, then compare to the R-calculated values for real districts.

**TEKS:** §111.41(c)(11)(A–B), §111.41(c)(2)

---

### Week 2: Compactness, Demographics, and Fairness (≈8.3 hours)

#### Lesson 3.5 — The Polsby-Popper Compactness Score (2.5 hrs)
**Geometry Focus:** Ratio of area to perimeter², π in context
**R Focus:** Custom metric calculation on spatial data
**Activity:**
- Introduce the Polsby-Popper score: `PP = 4π × Area / Perimeter²`.
- Why this formula?
  - A circle has PP = 1.0 (maximum compactness).
  - A long, thin rectangle has PP close to 0.
  - A gerrymandered district with tentacles has PP very close to 0.
- Derive for a circle: Area = πr², Perimeter = 2πr. PP = 4π(πr²) / (2πr)² = 4π²r² / 4π²r² = 1. ✓
- Students calculate PP by hand for: a square, a 10:1 rectangle, a circle.
- R lab: Calculate PP for every Texas congressional district:
```r
tx_districts <- tx_districts %>%
  mutate(
    polsby_popper = 4 * pi * area_km2 / (perimeter_km^2)
  )

ggplot(tx_districts, aes(fill = polsby_popper)) +
  geom_sf(color = "white") +
  scale_fill_viridis_c(name = "Compactness\n(Polsby-Popper)") +
  labs(title = "Compactness of Texas Congressional Districts")
```
- Identify: Which Texas districts have the lowest scores? Compare to the visual impression from Lesson 3.3.
- Discussion: Should compactness be a legal requirement for districts?

**TEKS:** §111.41(c)(11), §111.41(c)(2), §111.41(c)(5)

#### Lesson 3.6 — Interactive Maps with Leaflet (1.5 hrs)
**R Focus:** `leaflet` for interactive web maps
**Activity:**
- Static maps are useful, but interactive maps let you zoom, click, and explore.
- R lab: Build an interactive map of Texas districts colored by compactness:
```r
library(leaflet)

pal <- colorNumeric("YlOrRd", domain = tx_districts$polsby_popper, reverse = TRUE)

leaflet(tx_districts) %>%
  addTiles() %>%
  addPolygons(
    fillColor = ~pal(polsby_popper),
    fillOpacity = 0.7,
    weight = 1,
    label = ~paste0("District ", CD118FP,
                    " | PP: ", round(polsby_popper, 3))
  ) %>%
  addLegend(pal = pal, values = ~polsby_popper,
            title = "Compactness")
```
- Students interact: Zoom into Houston. How many districts carve through the city? Click to see compactness scores.
- Discussion: Are Houston's districts compact? Why might a mapmaker intentionally draw non-compact districts through a city?

**TEKS:** §111.41(c)(2), §113.44(c)(7)(A)

#### Lesson 3.7 — Demographics and Districts: Who Lives Where? (2 hrs)
**Government Focus:** Racial gerrymandering, Voting Rights Act §2, majority-minority districts
**R Focus:** Joining `tidycensus` data to district shapefiles
**Activity:**
- Pull demographic data by district: % Black, % Hispanic, % White, median income.
- Join to district shapefile and map:
```r
library(tidycensus)

district_demographics <- get_acs(
  geography = "congressional district",
  state = "TX",
  variables = c(
    total_pop = "B01001_001",
    hispanic = "B03003_003",
    black = "B02001_003"
  ),
  year = 2022,
  output = "wide"
)
```
- Color districts by % Hispanic, then by % Black. Compare to the compactness map.
- Discussion: Voting Rights Act §2 requires that minority communities have the opportunity to elect candidates of their choice. This sometimes requires drawing majority-minority districts.
- Tension: Majority-minority districts may require non-compact shapes (to connect dispersed communities). Compactness and minority representation can conflict.
- Key cases: Shaw v. Reno (1993) — race cannot be the predominant factor in redistricting. But how much is too much?

**TEKS:** §113.44(c)(7)(A), §113.44(c)(8)(A), §111.47(c)(2)

#### Lesson 3.8 — The Efficiency Gap: Measuring Partisan Gerrymandering (2.3 hrs)
**Government Focus:** Partisan gerrymandering, Rucho v. Common Cause (2019)
**Statistics Focus:** Wasted votes, efficiency gap calculation
**Geometry Focus:** Logical reasoning about constraints
**Activity:**
- The efficiency gap measures wasted votes:
  - Wasted votes for the winner: votes beyond what was needed to win (50% + 1).
  - Wasted votes for the loser: all their votes.
  - Efficiency gap = (Wasted_A - Wasted_B) / Total_votes.
- A large efficiency gap suggests one party is systematically wasting more votes.
- Students calculate the efficiency gap for a simplified state with 5 districts (hand exercise).
- R lab: Calculate the efficiency gap for Texas using recent election results:
```r
tx_results <- read_csv("tx_district_results.csv")
tx_results <- tx_results %>%
  mutate(
    total = dem_votes + rep_votes,
    winner = if_else(dem_votes > rep_votes, "D", "R"),
    needed = floor(total / 2) + 1,
    wasted_dem = if_else(winner == "D", dem_votes - needed, dem_votes),
    wasted_rep = if_else(winner == "R", rep_votes - needed, rep_votes)
  )

eg <- (sum(tx_results$wasted_dem) - sum(tx_results$wasted_rep)) /
      sum(tx_results$total)
```
- Discussion: Rucho v. Common Cause (2019) — the Supreme Court ruled that federal courts cannot adjudicate partisan gerrymandering claims. Is the efficiency gap a good measure of fairness? Is there any "right" answer?
- Logical reasoning: What constraints should redistricting satisfy? (Equal population, contiguity, compactness, preserving communities of interest, VRA compliance, competitiveness.) Can all be satisfied simultaneously?

**TEKS:** §113.44(c)(7)(A), §113.44(c)(6)(A), §111.41(c)(5), §111.47(c)(2)

---

### Week 3: Draw Your Own Map (≈8.3 hours)

#### Lesson 3.9 — Texas Redistricting History (1.5 hrs)
**Government Focus:** Texas redistricting battles, legal challenges, 2021 redistricting
**Activity:**
- Brief history: Texas has been involved in major redistricting lawsuits after almost every census.
- 2003 mid-decade redistricting (led by Tom DeLay) — controversial partisan gerrymander.
- 2011 maps — challenged under VRA; courts drew interim maps.
- 2021 maps — new seats added; accusations of racial and partisan gerrymandering.
- Students examine: How did Texas's districts change from 2010 to 2020 maps? Use R to overlay old and new boundaries.
- Discussion: Who benefited from the changes? What evidence would you use to determine if the changes were fair?

**TEKS:** §113.44(c)(7)(A), §113.44(c)(4)(A)

#### Lesson 3.10 — The Redistricting Challenge: Draw Your Own Map (4 hrs)
**Activity:**
- Students work in pairs to create their own congressional district plan for a simplified geography.
- Setup: Teacher provides a grid-based or precinct-based map of a fictional (or real) region with:
  - Population data by precinct/block
  - Racial/ethnic composition by precinct
  - Partisan voting history by precinct
- Constraints:
  1. Each district must have equal population (±1%).
  2. Each district must be contiguous (no islands).
  3. Maximize compactness (Polsby-Popper score).
  4. Comply with VRA: at least one majority-minority district where the minority population is sufficiently large and geographically compact.
- Students draw their maps, calculate compactness and efficiency gap, and compare results.
- R tools: Students can use R to calculate metrics for their districts, even if the drawing is done on paper or a simplified digital tool.
- Class debrief: Did any pair satisfy all four constraints perfectly? What trade-offs did you face?
- Key insight: Redistricting involves genuine trade-offs. Perfect compactness may violate the VRA. Perfect proportionality may require bizarre shapes. There is no objectively "correct" map — but there are maps that are clearly unfair.

**TEKS:** §111.41(c)(11), §111.41(c)(5), §111.41(c)(2), §113.44(c)(7)(A)

#### Lesson 3.11 — Unit 3 Project: Redistricting Analysis (2 hrs)
**Activity:**
- Students produce a Redistricting Analysis report for a real state (Texas or student's choice). Requirements:
  1. **Map** of the state's current congressional districts (R-generated with `sf`/`leaflet`).
  2. **Compactness analysis:** Polsby-Popper scores for all districts, with a bar chart or choropleth map. Identify the 3 least compact districts.
  3. **Demographic overlay:** Map districts by racial composition. Identify majority-minority districts.
  4. **Efficiency gap calculation** (if election data is available).
  5. **Written analysis (1.5 pages):**
     - Are the current districts fair? By what standard?
     - Which districts appear gerrymandered, and what evidence supports this?
     - What trade-offs would a redistricting commission face?
     - Reference at least 2 court cases or laws from the unit.
- R Markdown format with maps, calculations, and narrative.

#### Lesson 3.12 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Map gallery: Students display their R-generated district maps and analysis.
- Selected presentations (5–6 students, 4 minutes each).
- Unit checkpoint quiz: Area/perimeter, Polsby-Popper, cracking/packing, key cases (25 minutes).

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Redistricting & Geometry | Individual | 25 |
| Grid Gerrymandering Exercise | Practice | 15 |
| R Lab: sf District Maps | Lab | 25 |
| R Lab: Area, Perimeter, Polsby-Popper | Lab | 25 |
| R Lab: Leaflet Interactive Map | Lab | 20 |
| Efficiency Gap Calculation | Lab | 20 |
| Redistricting Challenge (Draw Your Map) | Lab | 20 |
| Redistricting Analysis Report | Project | 50 |
| **Total** | | **200** |

## Key Vocabulary

apportionment, redistricting, gerrymandering, cracking, packing, one person one vote, Reynolds v. Sims, Shaw v. Reno, Rucho v. Common Cause, Voting Rights Act §2, majority-minority district, preclearance, independent redistricting commission, compactness, Polsby-Popper score, area, perimeter, polygon, composite shape, coordinate geometry, contiguity, efficiency gap, wasted votes, shapefile, sf, leaflet, choropleth, tigris, tidycensus
