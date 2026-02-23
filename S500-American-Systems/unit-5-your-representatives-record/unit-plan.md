# Unit 5 — Your Representative's Record

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Your Representative's Record |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *What has your representative actually done — and does the record match the rhetoric?* |
| Government TEKS | §113.44(c)(4), (7), (8) |
| Statistics TEKS | §111.47(c)(2), (7) |
| R Skills | API loops (pulling data for multiple representatives), roll-call vote analysis, ideological scoring (DW-NOMINATE), multi-variable analysis |
| Key Deliverable | Representative Report Card — a comprehensive, data-driven evaluation of a specific member of Congress |

## Unit Narrative

This unit makes government personal and empirical. Students pick a member of Congress (ideally their own representative) and build a complete data profile: voting record, bill sponsorship, committee assignments, campaign funding, and ideological positioning. The ProPublica Congress API provides the raw data; students use R to wrangle, analyze, and visualize it. The central question — "Does the record match the rhetoric?" — requires students to compare what representatives say (campaign websites, floor speeches) to what they do (votes, sponsorships, committee work). The statistics strand applies regression and correlation in a new context: How well does party affiliation predict voting? How well does campaign funding predict legislative priorities? Students practice the skill that defines informed citizenship: evaluating elected officials on evidence, not vibes.

## Government Concepts

- Congress structure: House vs. Senate, terms, qualifications
- Representation: delegate model (do what constituents want) vs. trustee model (use judgment)
- Roll-call votes: what they mean, how to read them
- Bill sponsorship and cosponsorship: what it signals
- Committee assignments: why they matter, how they shape legislation
- Party loyalty vs. independence: whips, party-line votes, bipartisanship
- Ideology and the political spectrum: liberal-conservative, DW-NOMINATE scores
- Constituent services: case work, town halls, responsiveness
- Accountability: elections as the check on representatives

## Statistics Concepts

- Data from APIs at scale: looping through multiple members/votes §111.47(c)(2)
- Bivariate analysis in a political context: ideology vs. vote, funding vs. priority §111.47(c)(7)
- Regression: predicting vote share from voting record §111.47(c)(7)
- Comparing distributions: voting patterns by party, ideology scores across a delegation §111.47(c)(2)

---

## Lesson Sequence

### Week 1: Building the Profile (≈8.3 hours)

#### Lesson 5.1 — Who Represents You? (1.5 hrs)
**Government Focus:** Congressional representation, districts, House vs. Senate
**Activity:**
- Warm-up: "Name your U.S. representative. Name your two U.S. senators." (Most students can't. That's the point.)
- Use address lookup to identify each student's representative and senators.
- Direct instruction: House (435 members, 2-year terms, represent districts) vs. Senate (100 members, 6-year terms, represent states).
- Qualifications: House (25+ years old, 7+ years a citizen, resident of state). Senate (30+, 9+ years, resident of state).
- Delegate model: "I vote the way my constituents want." Trustee model: "I vote based on my judgment of what's best."
- Students begin a "Representative Profile" document: Name, party, district/state, committee assignments, years in office.

**TEKS:** §113.44(c)(4)(A), §113.44(c)(7)(A), §113.44(c)(8)(B)

#### Lesson 5.2 — Pulling Congressional Data at Scale (2 hrs)
**R Focus:** API loops, building datasets from ProPublica
**Activity:**
- In Unit 2, students made single API calls. Now they scale up.
- R lab: Pull voting records for a specific member:
```r
library(httr)
library(jsonlite)
library(tidyverse)

api_key <- "YOUR_PROPUBLICA_KEY"
member_id <- "A000370"  # Example: Alma Adams

# Get recent votes for this member
response <- GET(
  paste0("https://api.propublica.org/congress/v1/members/",
         member_id, "/votes.json"),
  add_headers("X-API-Key" = api_key)
)
content <- fromJSON(rawToChar(response$content))
votes <- as_tibble(content$results[[1]]$votes)
head(votes)
```
- Students pull vote data for their chosen representative.
- Calculate: What percentage of votes did they participate in? (Missed votes.)
- Calculate: What percentage of votes were with their party? (Party loyalty rate.)
- Discussion: Is high party loyalty a good thing or a bad thing? Does it depend on your perspective?

**TEKS:** §113.44(c)(4)(B), §111.47(c)(2)

#### Lesson 5.3 — Roll-Call Votes: Reading the Record (2 hrs)
**Government Focus:** Roll-call votes, party-line votes, bipartisan votes
**R Focus:** Filtering, categorizing, summarizing vote data
**Activity:**
- Not all votes are equal. Types:
  - Procedural votes (rules, adjournment) — usually party-line.
  - Substantive votes (final passage of bills) — sometimes bipartisan.
  - Amendment votes — can reveal priorities within a bill.
- Students filter their representative's votes:
```r
votes <- votes %>%
  mutate(
    with_party = (position == "Yes" & result == "Passed") |
                 (position == "No" & result == "Failed"),
    vote_type = case_when(
      str_detect(description, "On Passage") ~ "Final Passage",
      str_detect(description, "On Motion") ~ "Procedural",
      str_detect(description, "Amendment") ~ "Amendment",
      TRUE ~ "Other"
    )
  )

votes %>%
  group_by(vote_type) %>%
  summarize(n = n(), pct_with_party = mean(with_party, na.rm = TRUE))
```
- Students identify the 3 most interesting votes where their representative broke with their party. What were the issues?
- Writing prompt: "Based on the voting data, does your representative vote independently or follow party leadership? Cite specific numbers."

**TEKS:** §113.44(c)(4)(B–C), §111.47(c)(2)

#### Lesson 5.4 — Bill Sponsorship: What Does Your Representative Care About? (1.5 hrs)
**Government Focus:** Bills, sponsorship, cosponsorship, legislative priorities
**R Focus:** API data pull, text categorization
**Activity:**
- Pull bill sponsorship data from ProPublica:
```r
bills_response <- GET(
  paste0("https://api.propublica.org/congress/v1/members/",
         member_id, "/bills/introduced.json"),
  add_headers("X-API-Key" = api_key)
)
bills_content <- fromJSON(rawToChar(bills_response$content))
bills <- as_tibble(bills_content$results[[1]]$bills)
```
- Students categorize bills by topic: healthcare, education, defense, economy, environment, etc.
- Create a bar chart of bills sponsored by category.
- Compare to campaign promises: Visit the representative's official website. What issues do they highlight? Does the sponsorship record match?
- Discussion: Sponsoring a bill doesn't mean it passes. Only ~5% of introduced bills become law. What does sponsorship signal?

**TEKS:** §113.44(c)(4)(A–C), §111.47(c)(2)

#### Lesson 5.5 — Committee Assignments: The Real Power (1.3 hrs)
**Government Focus:** Congressional committees, specialization, gatekeeping
**Activity:**
- Direct instruction: Committees are where bills live or die. The chair controls the agenda.
- Key committees: Appropriations (spending), Ways and Means (taxes), Armed Services (military), Judiciary (courts), Education, etc.
- Students look up their representative's committee assignments (from ProPublica data or house.gov/senate.gov).
- Analysis: Do the committee assignments align with the representative's sponsored bills? With their district's needs?
  - Example: A representative from a rural Texas district on the Agriculture Committee makes sense. A representative from Houston on the Energy and Commerce Committee makes sense (energy sector).
- Discussion: Committee assignments are partly chosen and partly assigned by party leadership. What incentive does party leadership have in committee assignments?

**TEKS:** §113.44(c)(4)(A–B)

---

### Week 2: Ideology, Funding, and Accountability (≈8.3 hours)

#### Lesson 5.6 — DW-NOMINATE: Mapping Ideology with Data (2.5 hrs)
**Government Focus:** Political spectrum, polarization, ideological scoring
**Statistics Focus:** Bivariate data, interpreting scaling
**R Focus:** Scatterplots of ideology scores
**Activity:**
- Introduction: DW-NOMINATE scores use every roll-call vote to place each member on a liberal-conservative scale (-1 = most liberal, +1 = most conservative).
- Dataset: Voteview.com data — DW-NOMINATE scores for the current Congress.
- R lab: Create a dot plot of all House members by ideology score, colored by party:
```r
members <- read_csv("dw_nominate_current.csv")

ggplot(members, aes(x = nominate_dim1, y = 0, color = party)) +
  geom_jitter(height = 0.3, alpha = 0.5) +
  scale_color_manual(values = c("Democrat" = "blue", "Republican" = "red")) +
  labs(title = "House Members by Ideology (DW-NOMINATE)",
       x = "Liberal ← → Conservative", y = "") +
  theme_minimal()
```
- Observation: The parties barely overlap. This is polarization.
- Find your representative on the plot. Are they near the center of their party or on the extreme?
- Historical comparison: Pull DW-NOMINATE data from 1980, 2000, and today. Create three panels. How has the distribution changed? (The center has hollowed out.)

**TEKS:** §113.44(c)(7)(D), §111.47(c)(2), §111.47(c)(7)

#### Lesson 5.7 — Follow the Money to Your Representative (2 hrs)
**Government Focus:** Campaign funding sources, who funds your representative
**Statistics Focus:** Proportional analysis, bivariate relationships
**R Focus:** Donor data analysis
**Activity:**
- Dataset: FEC/OpenSecrets data on your representative's campaign contributions (teacher-curated or pulled from ProPublica).
- R lab: Analyze funding sources:
  - Individual contributions vs. PAC contributions.
  - Top industry donors.
  - Small-dollar vs. large-dollar contributions.
- Create a treemap of the representative's top 10 funding sources.
- Question: Do the industries that fund your representative align with their committee assignments and sponsored bills?
  - Example: If the representative sits on Energy & Commerce and receives substantial funding from oil & gas PACs, is there a conflict of interest?
- Important framing: Correlation between funding and legislative action doesn't prove corruption. Members may receive money from industries they already support. But the pattern is worth examining.
- Writing prompt: "Using funding data, identify one potential area of concern about your representative's independence. Explain why you find it notable, and acknowledge an alternative explanation."

**TEKS:** §113.44(c)(7)(E), §113.44(c)(8)(B), §111.47(c)(7)

#### Lesson 5.8 — Party Loyalty vs. District Interests (2 hrs)
**Government Focus:** Representation, constituency, party discipline
**Statistics Focus:** Regression — predicting vote from ideology
**Activity:**
- Do representatives vote for their party or their district?
- R lab: For the Texas delegation, regress party-loyalty rate on DW-NOMINATE score:
```r
tx_members <- read_csv("tx_delegation_data.csv")
model <- lm(party_loyalty_pct ~ nominate_dim1, data = tx_members)
summary(model)

ggplot(tx_members, aes(x = nominate_dim1, y = party_loyalty_pct,
                        color = party, label = last_name)) +
  geom_point(size = 3) +
  geom_text(nudge_y = 1, size = 2) +
  geom_smooth(method = "lm", se = FALSE, color = "gray") +
  labs(title = "Ideology vs. Party Loyalty: Texas Delegation",
       x = "DW-NOMINATE Score", y = "% Votes with Party")
```
- Identify outliers: Which Texas members are most independent? Which are most partisan?
- Compare: Members from competitive districts vs. safe districts. Do competitive-district members vote more independently?
- Discussion: Is party loyalty a feature or a bug of the system? Should representatives follow their party, their constituents, or their own judgment?

**TEKS:** §113.44(c)(4)(B), §113.44(c)(7)(D), §111.47(c)(7)

#### Lesson 5.9 — Constituent Services and Town Halls (1.8 hrs)
**Government Focus:** Case work, town halls, responsiveness, accountability
**Activity:**
- Not everything a representative does is about votes and bills. Constituent services:
  - Help navigating federal agencies (VA benefits, Social Security, passport issues).
  - Town halls and listening sessions.
  - Responding to constituent letters/calls.
- Students investigate: Does your representative hold town halls? Are they accessible? (Check official website, news reports.)
- Data: Some organizations track responsiveness (e.g., TownHallProject.com). How often does your representative hold public events?
- Discussion: Representatives are supposed to be accountable to voters. How can voters hold them accountable between elections?
- Connection to Unit 6: The capstone will synthesize all this data into an accountability report.

**TEKS:** §113.44(c)(8)(B–C), §113.44(c)(7)(A)

---

### Week 3: The Representative Report Card (≈8.3 hours)

#### Lesson 5.10 — Building the Report Card (3 hrs)
**Activity:**
- Students compile all data from the unit into a "Representative Report Card" for their chosen member of Congress.
- Required sections:
  1. **Profile:** Name, party, district, years in office, committees.
  2. **Voting Record:** Total votes, participation rate, party loyalty rate. Top 3 votes where they broke with party.
  3. **Legislative Priorities:** Bills sponsored by category (bar chart). Comparison to campaign rhetoric.
  4. **Ideology:** DW-NOMINATE score, placement within party and within state delegation. Polarization context.
  5. **Funding:** Top donors/industries (treemap). Alignment between funding and legislative activity.
  6. **Grade and Justification:** Student assigns a letter grade (A–F) with a 1-paragraph evidence-based justification. The grade can be from any perspective (constituent-focused, bipartisan, ideological) but must be justified with data.
- R Markdown format. At least 4 R visualizations. At least 5 government vocabulary terms used correctly.

#### Lesson 5.11 — Peer Review and Revision (2 hrs)
**Activity:**
- Structured peer review in pairs:
  - [ ] Profile is complete and accurate
  - [ ] Voting record analysis cites specific numbers
  - [ ] At least 4 R visualizations are included and well-labeled
  - [ ] Ideology score is contextualized (within party, over time, vs. delegation)
  - [ ] Funding analysis addresses the independence question
  - [ ] Grade is supported by evidence, not just opinion
  - [ ] Government vocabulary is used correctly (5+ terms)
- Revision time.

#### Lesson 5.12 — Presentations: Holding Representatives Accountable (2 hrs)
**Activity:**
- Students present their Report Cards (4 minutes + 2 minutes Q&A).
- Format: Show key visualizations. State the grade and the evidence.
- Audience questions: "What data would change your grade?" "Is there a data point you wish you had?"
- Discussion: Is this kind of accountability report something citizens should do regularly? Why don't more people look at the data?

#### Lesson 5.13 — Unit Assessment (1 hrs)
**Activity:**
- Unit checkpoint quiz: Congressional structure, roll-call votes, DW-NOMINATE, campaign finance, representation models (25 minutes).
- Collect final Report Cards for grading.

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Congress & Representation | Individual | 25 |
| R Lab: Voting Record Pull | Lab | 20 |
| R Lab: Bill Sponsorship Analysis | Lab | 20 |
| R Lab: DW-NOMINATE Ideology Plot | Lab | 25 |
| Campaign Funding Analysis | Lab | 20 |
| Voting Record Memo | Analysis Memo | 15 |
| Representative Report Card | Project | 55 |
| Presentation | Project | 20 |
| **Total** | | **200** |

## Key Vocabulary

U.S. House of Representatives, U.S. Senate, representative, senator, congressional district, term of office, roll-call vote, party-line vote, bipartisan, bill, sponsorship, cosponsorship, committee, committee chair, gatekeeping, delegate model, trustee model, DW-NOMINATE, ideology, political spectrum, liberal, conservative, polarization, party loyalty, whip, campaign contribution, PAC, donor industry, constituent services, town hall, accountability, case work, representation
