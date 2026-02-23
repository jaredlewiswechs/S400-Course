# Unit 3 — Trade Networks

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | Trade Networks |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *Who trades with whom, why, and what does the network structure tell us about global power?* |
| Geography TEKS | §113.43(c)(2), (5), (6), (7) |
| Statistics TEKS | §111.47(c)(7) |
| R Skills | `igraph` for network graphs, adjacency matrices, `graph_from_data_frame()`, network metrics (degree, betweenness centrality), trade gravity model regression |
| Key Deliverable | Trade Network Analysis — a network visualization and regression-based analysis of bilateral trade patterns |

## Unit Narrative

Global trade is not a random web — it has structure. Countries trade more with neighbors, with partners who share a language or colonial history, and with larger economies. The "gravity model" of trade — trade volume is proportional to economic size and inversely proportional to distance — is one of the most robust empirical regularities in economics. Students build this model with regression and discover that it explains a surprising amount of trade variation. But the visual power of this unit comes from network graphs. Using `igraph`, students construct and visualize the global trade network: countries are nodes, trade flows are edges, and network metrics (degree centrality, betweenness centrality) reveal which countries are hubs and which are peripheral. The geography is about interdependence, comparative advantage, and the political implications of trade relationships.

## Geography Concepts

- Global trade patterns: who trades what with whom
- Comparative advantage (revisited from S400): why countries specialize
- Trade and distance: gravity model, transportation costs
- Trade blocs and agreements: EU, USMCA, ASEAN, African Continental Free Trade Area
- Commodity dependence: countries reliant on a single export (oil, minerals, agriculture)
- Supply chains: global production networks, intermediate goods
- Political geography of trade: sanctions, trade wars, strategic dependencies
- Trade and development: does trade openness promote growth?

## Statistics Concepts

- Multiple regression with log-transformed variables: the gravity model §111.47(c)(7)
- Interpreting coefficients in log-log regression: elasticities §111.47(c)(7)
- Model comparison: R² across specifications §111.47(c)(7)
- Residual analysis: which trade relationships are larger or smaller than the model predicts? §111.47(c)(7)

## Network Analysis Concepts (New)

- Graphs: nodes and edges
- Directed vs. undirected networks
- Adjacency matrices
- Degree centrality: how many trade partners
- Betweenness centrality: how often a country sits on the shortest path between two others
- Community detection: clusters of tightly connected traders

---

## Lesson Sequence

### Week 1: The Structure of Global Trade (≈8.3 hours)

#### Lesson 3.1 — What Does the World Trade? (1.5 hrs)
**Geography Focus:** Global trade flows, top exporters/importers, trade composition
**Activity:**
- Warm-up: "What are the top 5 traded goods in the world?" Students guess, then check.
- Data: World Bank trade data via `wbstats` — total exports and imports by country.
- R lab: Bar chart of top 20 exporting countries. Bar chart of top 20 importing countries.
- Discussion: The same countries dominate both lists (US, China, Germany, Japan). Why? (Large economies both produce and consume a lot.)
- Composition: What does each country export? Some countries export manufactured goods (Germany, Japan), others export raw materials (Saudi Arabia, Chile).
- Geographic patterns: Show a world map of total trade volume. Trade is concentrated in North America, Europe, and East Asia.

**TEKS:** §113.43(c)(7)(A), §113.43(c)(6)(A)

#### Lesson 3.2 — Comparative Advantage: Why Countries Specialize (1.5 hrs)
**Geography Focus:** Comparative advantage, specialization, factor endowments
**Activity:**
- Review from S400: Comparative advantage means producing what you're relatively best at (lowest opportunity cost).
- Extensions for global context:
  - Factor endowments: Countries with lots of labor (Bangladesh) specialize in labor-intensive manufacturing. Countries with lots of capital (Germany) specialize in capital-intensive manufacturing. Countries with natural resources (Saudi Arabia) export resources.
  - Heckscher-Ohlin model (intuitive): You export goods that use your abundant factor intensively.
- Data exercise: Classify 10 countries by their top export category (agriculture, minerals, manufactured goods, services). Map the results. Is there a geographic pattern?
- Discussion: Is specialization always good? What if you specialize in a commodity whose price crashes? (Commodity dependence problem.)

**TEKS:** §113.43(c)(6)(B), §113.43(c)(7)(A)

#### Lesson 3.3 — Bilateral Trade Data and the Gravity Model (2.5 hrs)
**Statistics Focus:** Multiple regression with log-transformed variables
**Geography Focus:** Distance, borders, and trade
**Activity:**
- The gravity model of trade: `Trade_ij ∝ (GDP_i × GDP_j) / Distance_ij`
- In log form: `log(Trade) = β₀ + β₁·log(GDP_i) + β₂·log(GDP_j) + β₃·log(Distance) + ε`
- Dataset: CEPII bilateral trade data (teacher-curated extract: ~5,000 country pairs with trade value, GDP, distance).
- R lab:
```r
gravity <- read_csv("bilateral_trade.csv")

model_gravity <- lm(log(trade_value) ~ log(gdp_origin) + log(gdp_dest) +
                     log(distance), data = gravity)
summary(model_gravity)
```
- Interpret coefficients as elasticities:
  - β₁ ≈ 1: A 1% increase in origin GDP → ~1% increase in trade. (Larger economies trade more.)
  - β₃ ≈ -1: A 1% increase in distance → ~1% decrease in trade. (Distance kills trade.)
- R² is often 0.60+. The gravity model explains most of the variation in bilateral trade with just three variables.
- Students create a scatterplot of actual vs. predicted trade (on log scale). Points on the 45° line = well-predicted. Points above = more trade than expected.

**TEKS:** §111.47(c)(7)(B–C), §113.43(c)(7)(A)

#### Lesson 3.4 — What Else Matters? Borders, Language, Colonial Ties (2.8 hrs)
**Statistics Focus:** Adding categorical predictors to regression, model comparison
**Geography Focus:** Cultural and political factors in trade
**Activity:**
- Expand the gravity model with dummy variables:
  - `shared_border` (1 if countries share a land border)
  - `shared_language` (1 if they share an official language)
  - `colonial_tie` (1 if they share colonial history)
  - `trade_agreement` (1 if they're in the same trade bloc)
```r
model_extended <- lm(log(trade_value) ~ log(gdp_origin) + log(gdp_dest) +
                     log(distance) + shared_border + shared_language +
                     colonial_tie + trade_agreement, data = gravity)
summary(model_extended)
```
- Interpret: Sharing a border increases trade by ~___%. Sharing a language increases it by ~___%.
- Compare R²: How much did the model improve?
- Geographic discussion: Why does colonial history still shape trade 60+ years after independence? (Common legal systems, language, business networks, institutional similarity.)
- Map exercise: Choose one country (e.g., France). Map its top 20 trade partners. How many are former colonies? How many share a border?

**TEKS:** §113.43(c)(2)(A), §113.43(c)(5)(A), §113.43(c)(7)(A), §111.47(c)(7)

---

### Week 2: Network Analysis — Trade as a Graph (≈8.3 hours)

#### Lesson 3.5 — Introduction to Network Graphs (2 hrs)
**New Skill:** Network analysis concepts
**R Focus:** `igraph` basics
**Activity:**
- Trade is not just bilateral — it forms a network. Every country trades with many others, creating a web of connections.
- Network vocabulary:
  - Node (vertex): A country.
  - Edge (link): A trade relationship.
  - Directed edge: Trade flows from A to B (exports) and from B to A (imports).
  - Weighted edge: The dollar value of trade.
- R lab: Build a simple trade network:
```r
library(igraph)

# Top 30 bilateral trade flows
top_trade <- gravity %>%
  arrange(desc(trade_value)) %>%
  slice_head(n = 100)

trade_net <- graph_from_data_frame(
  d = top_trade %>% select(origin, destination, trade_value),
  directed = TRUE
)

plot(trade_net,
     vertex.size = 8,
     vertex.label.cex = 0.6,
     edge.width = log10(E(trade_net)$trade_value) / 3,
     edge.arrow.size = 0.3,
     main = "Top 100 Global Trade Flows")
```
- Observation: A few countries (US, China, Germany) are highly connected. Others have only 1–2 links.
- Discussion: What does it mean to be at the center of the trade network? What does it mean to be at the periphery?

**TEKS:** §113.43(c)(7)(A–B)

#### Lesson 3.6 — Degree Centrality: Who Has the Most Partners? (2 hrs)
**Network Focus:** Degree centrality, in-degree, out-degree
**Activity:**
- Degree centrality: How many trade partners does a country have?
  - In-degree: How many countries export TO this country.
  - Out-degree: How many countries this country exports TO.
- R lab:
```r
degree_data <- tibble(
  country = V(trade_net)$name,
  in_degree = degree(trade_net, mode = "in"),
  out_degree = degree(trade_net, mode = "out"),
  total_degree = degree(trade_net, mode = "all")
) %>% arrange(desc(total_degree))
head(degree_data, 20)
```
- Visualize: Size nodes by degree centrality in the network plot.
- Compare: Degree centrality vs. GDP. High correlation — but not perfect. Some smaller countries (Singapore, Netherlands) have disproportionately many trade partners.
- Geographic analysis: Map degree centrality as a world choropleth. Where are the most connected countries?

**TEKS:** §113.43(c)(7)(A), §111.47(c)(7)

#### Lesson 3.7 — Betweenness Centrality: Who Controls the Flow? (2 hrs)
**Network Focus:** Betweenness centrality, network power
**Geography Focus:** Strategic position in trade networks
**Activity:**
- Betweenness centrality: How often does a country sit on the shortest path between two other countries? High betweenness = gatekeeper or bridge.
- R lab:
```r
between_data <- tibble(
  country = V(trade_net)$name,
  betweenness = betweenness(trade_net, directed = TRUE)
) %>% arrange(desc(betweenness))
head(between_data, 15)
```
- Observation: Some countries have high betweenness even without the highest GDP (e.g., Singapore, Panama, UAE). They are trade hubs — positioned between regions.
- Discussion: What gives these countries their network power? (Geography: strait of Malacca, Suez/Panama canals. Infrastructure: ports, airports. Policy: free trade zones, low tariffs.)
- Geopolitical implications: If trade flows through a few key nodes, disrupting those nodes has outsized effects. Examples: Suez Canal blockage (2021), US-China trade war, Russia sanctions.

**TEKS:** §113.43(c)(5)(A), §113.43(c)(7)(B)

#### Lesson 3.8 — Community Detection: Trade Blocs from Data (2.3 hrs)
**Network Focus:** Community detection algorithms, trade clusters
**Geography Focus:** Trade blocs, regional integration
**Activity:**
- Question: Can an algorithm identify trade blocs from the data alone (without knowing about EU, USMCA, etc.)?
- R lab: Run community detection on the trade network:
```r
communities <- cluster_louvain(as.undirected(trade_net))
V(trade_net)$community <- membership(communities)

plot(trade_net,
     vertex.color = membership(communities),
     vertex.size = 8,
     vertex.label.cex = 0.5,
     main = "Trade Communities (Louvain Algorithm)")
```
- Students compare algorithm-detected communities to actual trade blocs:
  - Does the algorithm identify a European cluster? An Asia-Pacific cluster? A North American cluster?
  - Where are the mismatches? Why?
- Discussion: Trade blocs are politically defined, but trade patterns emerge from economics and geography. Sometimes the data and the politics align; sometimes they don't.
- Writing prompt: "Choose one trade community identified by the algorithm. How well does it match a formal trade agreement? What geographic or historical factors explain the cluster?"

**TEKS:** §113.43(c)(5)(A), §113.43(c)(7)(A–B)

---

### Week 3: Trade, Development, and the Project (≈8.3 hours)

#### Lesson 3.9 — Commodity Dependence and the Resource Curse (2 hrs)
**Geography Focus:** Resource extraction, Dutch Disease, commodity price volatility
**Statistics Focus:** Regression — resource dependence vs. growth
**Activity:**
- Some countries depend heavily on a single commodity export (oil, copper, cocoa, diamonds).
- The "resource curse" hypothesis: Resource-rich countries grow more slowly due to corruption, conflict, Dutch Disease (currency appreciation harming other exports), and institutional deterioration.
- R lab: Merge resource rent data (% GDP from natural resources, World Bank) with GDP growth.
- Scatterplot: Resource rents vs. GDP growth. Is there a negative correlation?
- t-test: Compare mean GDP growth for high-resource vs. low-resource countries.
- Case studies: Norway (escaped the curse with a sovereign wealth fund) vs. Nigeria (oil wealth has not translated to broad development).
- Map: Choropleth of resource rents as % of GDP.

**TEKS:** §113.43(c)(6)(B), §113.43(c)(7)(A), §111.47(c)(7)

#### Lesson 3.10 — Trade Residuals: Who Trades More or Less Than Expected? (1.5 hrs)
**Statistics Focus:** Residual analysis from the gravity model
**Geography Focus:** Political factors in trade
**Activity:**
- Return to the gravity model from Lesson 3.3. Calculate residuals for each country pair.
- Positive residuals: Country pairs that trade MORE than the gravity model predicts. Why? (Trade agreements, shared language, historical ties, complementary economies.)
- Negative residuals: Country pairs that trade LESS than expected. Why? (Sanctions, political hostility, poor infrastructure, conflict.)
- R lab: Identify the 10 most "over-trading" and "under-trading" country pairs.
- Case study: US-Cuba (massive under-trading due to sanctions). China-Australia (formerly over-trading, now under pressure due to political tensions).
- Discussion: The gravity model tells you what trade should look like based on economics. The residuals tell you where politics overrides economics.

**TEKS:** §113.43(c)(5)(A), §113.43(c)(7)(B), §111.47(c)(7)

#### Lesson 3.11 — Unit 3 Project Workshop (3 hrs)
**Activity:**
- Students create a Trade Network Analysis. Choose one:

**Option A: Country Trade Profile.** Choose a country and analyze its trade network:
  1. Who are its top 10 trade partners (exports and imports)?
  2. What does it export and import (composition)?
  3. How well does the gravity model predict its trade?
  4. Network position: degree centrality, betweenness, community membership.
  5. One policy question: Should this country join a particular trade bloc? Diversify away from a commodity?

**Option B: Trade Bloc Analysis.** Choose a trade bloc (EU, ASEAN, USMCA, AU) and analyze:
  1. Do member countries trade more with each other than the gravity model predicts?
  2. Has intra-bloc trade grown since the agreement was formed?
  3. Network visualization of the bloc.
  4. What countries outside the bloc are most connected to it?

- Requirements: Network graph, gravity model results (regression table), at least 2 maps, 2-page R Markdown report.

#### Lesson 3.12 — Presentations & Assessment (1.8 hrs)
**Activity:**
- Trade network presentations (5 minutes each + Q&A).
- Checkpoint quiz: Gravity model, log-log regression, network vocabulary (degree, betweenness), trade blocs, comparative advantage (25 min).

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Trade & Networks | Individual | 25 |
| R Lab: Gravity Model Regression | Lab | 30 |
| R Lab: Network Construction & Visualization | Lab | 25 |
| R Lab: Centrality Metrics | Lab | 20 |
| Community Detection Analysis | Lab | 20 |
| Trade Residual Analysis | Analysis Memo | 20 |
| Trade Network Analysis Project | Project | 60 |
| **Total** | | **200** |

## Key Vocabulary

bilateral trade, exports, imports, trade balance, comparative advantage, factor endowments, specialization, trade bloc, USMCA, EU, ASEAN, gravity model, elasticity, log-log regression, distance decay, shared border, colonial tie, network graph, node, edge, directed graph, weighted graph, adjacency matrix, degree centrality, in-degree, out-degree, betweenness centrality, community detection, trade hub, commodity dependence, resource curse, Dutch Disease, sanctions, residual analysis, gravity model residual
