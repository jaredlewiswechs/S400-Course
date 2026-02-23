# Unit 5 — Conflict Mapping

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Conflict Mapping |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Where does conflict happen, what predicts it, and what can data tell us about prevention?* |
| Geography TEKS | §113.43(c)(1), (3), (5), (8), (9) |
| Statistics TEKS | §111.47(c)(6), (7) |
| R Skills | Spatial joins, conflict data overlays, logistic regression (intuitive), time-series decomposition, event-level data analysis |
| Key Deliverable | Conflict Risk Assessment — a data-driven analysis of conflict patterns in a chosen region with regression-based risk modeling |

## Unit Narrative

Conflict is geographic. Wars cluster in certain regions, along certain fault lines — ethnic boundaries, resource deposits, colonial-era borders, weak states. This unit uses the Uppsala Conflict Data Program (UCDP) — the gold standard in conflict data — to map every armed conflict since 1946. Students overlay conflict events on physical geography (resources, terrain), political geography (borders, regime type), and human geography (ethnic fragmentation, poverty). The statistics strand introduces logistic regression intuitively: instead of predicting a continuous outcome (like GDP or life expectancy), students predict a binary outcome — did this country experience conflict in this decade? The unit is handled with sensitivity; the goal is not to trivialize suffering but to understand patterns that might help prevent it.

## Geography Concepts

- Political geography: borders, sovereignty, state failure, territorial disputes
- Physical geography and conflict: resources (oil, diamonds, water), terrain (mountains as rebel strongholds), climate stress
- Ethnic geography: ethnic fragmentation, ethnic polarization, language groups, colonial borders cutting across ethnic territories
- Governance and conflict: democracy, autocracy, anocracy (partial democracy — highest conflict risk)
- International organizations: UN, NATO, African Union, peacekeeping missions
- Refugees and internally displaced people: geographic patterns of displacement
- Post-conflict reconstruction: how countries rebuild after war

## Statistics Concepts

- Logistic regression (intuitive): predicting binary outcomes, odds ratios §111.47(c)(7)
- Multiple regression with binary predictors §111.47(c)(7)
- Hypothesis testing for regression coefficients §111.47(c)(6)
- Time-series patterns: trends, seasonality in conflict data §111.47(c)(7)
- Spatial analysis: overlaying point data on polygon data

---

## Lesson Sequence

### Week 1: The Geography of Conflict (≈8.3 hours)

#### Lesson 5.1 — Where Are the Wars? Mapping Global Conflict (2 hrs)
**Geography Focus:** Global conflict patterns, conflict types
**Activity:**
- Dataset: UCDP/PRIO Armed Conflict Dataset — every armed conflict (25+ battle deaths/year) from 1946 to present.
- Conflict types: Interstate (between states), Intrastate (civil war), Intrastate with external involvement, Extrasystemic (colonial wars, now rare).
- R lab: Map all active conflicts in the most recent year:
```r
conflicts <- read_csv("ucdp_conflicts.csv")

world <- ne_countries(scale = "medium", returnclass = "sf")
active <- conflicts %>% filter(year == max(year))

ggplot() +
  geom_sf(data = world, fill = "gray95") +
  geom_point(data = active, aes(x = longitude, y = latitude,
             color = type_of_conflict, size = best_est),
             alpha = 0.6) +
  labs(title = paste("Armed Conflicts,", max(conflicts$year)),
       size = "Fatalities", color = "Type")
```
- Observations: Conflicts cluster in Sub-Saharan Africa, Middle East/North Africa, South Asia, and parts of Southeast Asia. Very few in Europe, East Asia, or the Americas.
- Discussion: What geographic patterns do you notice? Why might conflict cluster where it does?

**TEKS:** §113.43(c)(5)(A), §113.43(c)(8)(A)

#### Lesson 5.2 — Conflict Over Time: Are We Getting More or Less Peaceful? (2 hrs)
**Geography Focus:** Historical conflict trends, Cold War, post-Cold War era
**Statistics Focus:** Time-series visualization, trend analysis
**Activity:**
- R lab: Plot number of active conflicts per year (1946–present):
```r
conflicts_per_year <- conflicts %>%
  group_by(year) %>%
  summarize(n_conflicts = n_distinct(conflict_id),
            total_deaths = sum(best_est))

ggplot(conflicts_per_year, aes(x = year, y = n_conflicts)) +
  geom_line() +
  geom_smooth(method = "loess", se = FALSE, color = "red") +
  geom_vline(xintercept = 1991, linetype = "dashed") +
  annotate("text", x = 1992, y = max(conflicts_per_year$n_conflicts),
           label = "Cold War Ends", hjust = 0) +
  labs(title = "Number of Active Armed Conflicts (1946–Present)")
```
- Observations: Conflicts increased through the Cold War, peaked in the early 1990s, declined through the 2000s, then rose again after 2010.
- Separate time series for deaths: Fewer conflicts doesn't always mean fewer deaths. Some recent conflicts (Syria, Yemen) are extremely deadly.
- Discussion: Steven Pinker's "Better Angels" thesis — has the world become more peaceful overall? What does the data actually show?

**TEKS:** §113.43(c)(1)(A), §113.43(c)(8)(A), §111.47(c)(7)

#### Lesson 5.3 — Colonial Borders and Ethnic Fragmentation (2 hrs)
**Geography Focus:** Colonial legacy, arbitrary borders, ethnic geography
**Activity:**
- Many African and Middle Eastern borders were drawn by European colonial powers, often ignoring ethnic, linguistic, and religious boundaries. This split ethnic groups across countries and forced rival groups into the same state.
- Data: Ethnic fractionalization index (from Alesina et al.) — probability that two randomly selected people are from different ethnic groups.
- R lab: Scatterplot of ethnic fractionalization vs. conflict incidence. Is there a correlation?
- Map: Choropleth of ethnic fractionalization. Overlay conflict locations. Do they align?
- Important nuance: High fractionalization doesn't automatically cause conflict. Switzerland is highly fractionalized (German, French, Italian, Romansh) but stable. What differs? (Institutions, federalism, power-sharing.)
- Students compare two countries with similar fractionalization but different conflict outcomes. What institutional or geographic factors explain the difference?

**TEKS:** §113.43(c)(1)(A), §113.43(c)(5)(A), §113.43(c)(10)(A)

#### Lesson 5.4 — Resources and Conflict: Oil, Diamonds, and Water (2.3 hrs)
**Geography Focus:** Resource conflicts, "blood diamonds," water scarcity
**Statistics Focus:** Hypothesis testing for group differences
**Activity:**
- The resource-conflict link: Countries with valuable point-source resources (oil, diamonds, minerals) may face higher conflict risk due to:
  - Competition for resource control (rebel financing).
  - Weak institutions (resource curse from Unit 3).
  - Grievances over unequal distribution of resource wealth.
- R lab: Compare conflict incidence in oil-producing vs. non-oil-producing countries:
```r
t.test(conflict_years ~ oil_producer, data = country_data)
```
- Water scarcity: Growing concern. Students map water stress index and overlay conflict locations. Is there a spatial relationship?
- Case studies: Congo (coltan, cobalt), Sierra Leone (diamonds), Sudan (oil, water).
- Discussion: Resources don't cause conflict alone — they interact with institutions, grievances, and geography.

**TEKS:** §113.43(c)(3)(A), §113.43(c)(5)(A), §111.47(c)(6)

---

### Week 2: Predicting Conflict (≈8.3 hours)

#### Lesson 5.5 — Logistic Regression: Predicting a Binary Outcome (2.5 hrs)
**Statistics Focus:** Logistic regression (intuitive), odds, log-odds, interpretation
**Activity:**
- So far, all regression has predicted continuous outcomes (GDP, life expectancy). Conflict is binary: a country either had a conflict in a given year or it didn't (0/1).
- Logistic regression models the probability of the outcome being 1, given the predictors.
- Intuitive explanation: Instead of fitting a straight line to 0/1 data (which would predict probabilities below 0 or above 1), logistic regression fits an S-curve (the logistic function).
- R lab:
```r
# Did the country experience any conflict in this decade?
country_decade <- read_csv("country_decade_conflict.csv")

logit_model <- glm(had_conflict ~ log(gdp_pc) + ethnic_frac + polity_score,
                   data = country_decade, family = binomial)
summary(logit_model)
```
- Interpret coefficients as log-odds:
  - Negative coefficient on GDP: Higher income → lower conflict probability.
  - Positive coefficient on ethnic fractionalization: Higher fragmentation → higher probability.
  - Polity score: The relationship is often non-linear (anocracies have highest risk — "inverted U").
- Predicted probabilities:
```r
country_decade <- country_decade %>%
  mutate(predicted_prob = predict(logit_model, type = "response"))

ggplot(country_decade, aes(x = log(gdp_pc), y = predicted_prob)) +
  geom_point(aes(color = factor(had_conflict)), alpha = 0.3) +
  geom_smooth(method = "loess") +
  labs(title = "Predicted Conflict Probability vs. GDP Per Capita",
       y = "Predicted Probability of Conflict")
```
- Key takeaway: Logistic regression doesn't prove causation, but it identifies the strongest risk factors in the data.

**TEKS:** §111.47(c)(7)(B–C), §111.47(c)(6)

#### Lesson 5.6 — The Anocracy Trap: Regime Type and Conflict Risk (2 hrs)
**Geography Focus:** Democracy, autocracy, anocracy, political stability
**Statistics Focus:** Non-linear relationships, quadratic terms
**Activity:**
- The Polity score ranges from -10 (full autocracy) to +10 (full democracy). Anocracies (scores -5 to +5) — partial democracies — have the highest conflict risk.
- Why? Autocracies suppress dissent by force. Democracies channel dissent through elections. Anocracies have neither effective repression nor effective representation.
- R lab: Plot conflict incidence vs. Polity score. Observe the inverted-U shape.
- Add a quadratic term to the logistic model:
```r
logit_quad <- glm(had_conflict ~ polity_score + I(polity_score^2) +
                  log(gdp_pc), data = country_decade, family = binomial)
summary(logit_quad)
```
- If the quadratic term is significant and negative, it confirms the inverted-U: conflict peaks at intermediate polity scores.
- Map: Color countries by regime type and overlay conflict points.
- Discussion: Countries transitioning from autocracy to democracy pass through the dangerous anocracy zone. Does this mean democracy promotion can initially increase conflict risk?

**TEKS:** §113.43(c)(8)(A–B), §111.47(c)(7)

#### Lesson 5.7 — Refugees and Displacement: Where Do People Go? (2 hrs)
**Geography Focus:** Refugee flows, internally displaced people, UNHCR
**R Focus:** Spatial analysis, flow maps
**Activity:**
- Data: UNHCR refugee data — origin country, asylum country, year, number.
- R lab: Bar chart of top 10 refugee-origin countries (Syria, Ukraine, Afghanistan, Venezuela, South Sudan...).
- Bar chart of top 10 host countries (Turkey, Iran, Colombia, Germany, Pakistan...).
- Key insight: Most refugees don't go to rich Western countries. They go to neighboring countries, which are often poor themselves.
- Map: Arrows from origin to asylum (flow map) for the top 20 refugee corridors.
- Discussion: What geographic factors determine where refugees go? (Proximity, shared language/ethnicity, border openness, existing diaspora communities.)
- Statistical analysis: Is there a correlation between conflict intensity (deaths) and refugee outflows? (Yes, but some conflicts produce more displacement than others due to targeting of civilians.)

**TEKS:** §113.43(c)(5)(A), §113.43(c)(9)(B)

#### Lesson 5.8 — UN Peacekeeping: Does It Work? (1.8 hrs)
**Geography Focus:** United Nations, peacekeeping missions, international cooperation
**Statistics Focus:** Before/after comparison of conflict intensity
**Activity:**
- The UN has deployed ~70 peacekeeping missions since 1948. Are they effective?
- Data: Conflict deaths before and after peacekeeping deployment (teacher-curated from UCDP and UN data).
- R lab: For 10 major missions, calculate the change in average annual deaths (5 years before vs. 5 years after deployment).
- Create a dot plot showing change for each mission.
- t-test: Is the average decline statistically significant across all missions?
- Discussion: Peacekeeping has a mixed record. Successes (Mozambique, Liberia) and failures (Rwanda, Srebrenica). What factors distinguish successful missions?
- Limitations: Before/after comparison is not a clean experiment. Peacekeepers are deployed to the worst conflicts, creating selection bias.

**TEKS:** §113.43(c)(9)(A–B), §111.47(c)(6)

---

### Week 3: The Conflict Risk Assessment (≈8.3 hours)

#### Lesson 5.9 — Climate and Conflict: A Growing Concern (1.5 hrs)
**Geography Focus:** Climate change, water scarcity, climate-conflict link
**Activity:**
- Hypothesis: Climate stress (drought, temperature increase) increases conflict risk by reducing agricultural output, causing migration, and straining resources.
- Data: Climate variability (temperature anomaly, precipitation anomaly) merged with conflict data.
- R lab: Scatterplot of temperature anomaly vs. conflict incidence. Weak but visible positive correlation.
- Discussion: The climate-conflict link is real but contested. Climate is rarely the sole cause — it interacts with poverty, institutions, and ethnic tensions. Climate is a "threat multiplier."
- Map: Overlay climate stress zones and conflict locations. Where do they coincide?

**TEKS:** §113.43(c)(3)(A), §113.43(c)(5)(A)

#### Lesson 5.10 — Unit 5 Project Workshop (3.5 hrs)
**Activity:**
- Students create a Conflict Risk Assessment for a chosen region or country:
  - Option A: **Regional analysis.** Choose a region (Sahel, Horn of Africa, Middle East, Central America). Map conflicts, analyze risk factors with regression, assess trends.
  - Option B: **Country case study.** Choose a country with significant conflict history. Trace the conflict over time, identify risk factors, compare to similar countries that avoided conflict.
- Requirements:
  1. **Conflict map** of the region/country with event data overlaid on geography.
  2. **Regression analysis:** Logistic regression (or multiple linear regression on conflict intensity) with at least 3 predictors.
  3. **Time-series:** Conflict trend over time, with contextual annotations.
  4. **Hypothesis test:** At least one formal test (t-test, chi-square, or regression coefficient test).
  5. **Geographic analysis:** Connect statistical findings to physical, political, and human geography.
  6. **Policy recommendation:** Based on the data, what should the international community prioritize?
  7. **R Markdown report** (2–3 pages).

#### Lesson 5.11 — Peer Review (1.5 hrs)
**Activity:**
- Structured peer review in pairs.
- Checklist includes: map quality, statistical rigor, geographic reasoning, sensitivity of topic handling.

#### Lesson 5.12 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Conflict Risk Assessment presentations (5 minutes + Q&A).
- Checkpoint quiz: Logistic regression, conflict geography, regime types, refugee patterns, chi-square, ANOVA (25 min).

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Conflict & Advanced Inference | Individual | 25 |
| R Lab: Conflict Mapping (UCDP) | Lab | 25 |
| R Lab: Logistic Regression | Lab | 30 |
| R Lab: Refugee Flow Analysis | Lab | 20 |
| Peacekeeping Effectiveness Analysis | Analysis Memo | 20 |
| Conflict Risk Assessment | Project | 60 |
| Presentation | Project | 20 |
| **Total** | | **200** |

## Key Vocabulary

armed conflict, interstate conflict, intrastate conflict (civil war), battle deaths, conflict intensity, UCDP, ethnic fractionalization, ethnic polarization, anocracy, Polity score, democracy, autocracy, political stability, colonial borders, resource conflict, blood diamonds, water stress, climate-conflict nexus, threat multiplier, logistic regression, binary outcome, odds, log-odds, predicted probability, logistic function, S-curve, refugee, internally displaced person (IDP), UNHCR, asylum, peacekeeping, UN Security Council, selection bias, before/after comparison
