# Unit 3 — Insurance & Risk

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 3 of 6 |
| Title | Insurance & Risk |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you put a price on risk — and when is paying for insurance a mathematically sound decision?* |
| Math Models TEKS | §111.43(c)(4), (5), (6) |
| Tools | RStudio, Spreadsheets (Google Sheets / Excel), Desmos, financial calculators |
| Key Deliverable | Insurance Decision Analysis — students analyze whether specific insurance policies are worth the cost using expected value calculations, Monte Carlo simulation, and cost-benefit comparison |

## Unit Narrative

Every insurance product is a bet — the insurer bets you will not have a loss, and you bet that you might. The mathematics that governs this exchange is expected value, a concept that bridges probability and financial decision-making. This unit begins with the foundations: probability of discrete events, expected value as a weighted average of outcomes, and the realization that a "fair" game is one where the expected value is zero. From there, students apply expected value to real-world insurance decisions. They learn the vocabulary — premiums, deductibles, copays, coverage limits, exclusions — and then do the math: given the probability of a loss event and the cost of that loss, is the insurance premium worth paying? The answer depends on whether the expected payout exceeds the premium, but it also depends on something the math alone cannot capture: risk tolerance. A mathematically "bad" bet (paying $1,200/year in premiums for $800 in expected claims) can still be rational if the worst-case scenario ($50,000 medical bill) would be catastrophic.

The second half of the unit introduces Monte Carlo simulation in RStudio. Students simulate thousands of years of driving, health events, or apartment incidents and observe how often rare but expensive events occur. The simulation makes abstract probabilities concrete: a 2% annual chance of a major car accident means that over a 50-year driving career, there is a 64% chance it happens at least once. The unit culminates in an Insurance Decision Analysis in which students evaluate real insurance scenarios — auto, health, and renters — using expected value calculations, simulation results, and a written cost-benefit argument. Students learn that insurance is not about "winning" — it is about managing the financial risk of low-probability, high-cost events.

## Math Concepts

- Probability of discrete events: P(A) = favorable outcomes / total outcomes §111.43(c)(6)
- Complement rule: P(not A) = 1 - P(A) §111.43(c)(6)
- Expected value: E(X) = Σ [x_i * P(x_i)] §111.43(c)(6)
- Expected value as a decision-making tool §111.43(c)(5)
- Risk assessment: probability of loss × magnitude of loss §111.43(c)(4), §111.43(c)(5)
- Insurance as a risk transfer mechanism §111.43(c)(5)
- Premium pricing from an actuarial perspective §111.43(c)(4)
- Deductibles, copays, and out-of-pocket maximums as cost-sharing models §111.43(c)(5)
- Law of Large Numbers: why insurance companies profit even when individual outcomes are unpredictable §111.43(c)(6)
- Monte Carlo simulation: estimating expected values through repeated random trials §111.43(c)(4), §111.43(c)(6)
- Compound probability over multiple years: P(at least one event in n years) = 1 - (1-p)^n §111.43(c)(6)
- Cost-benefit analysis as mathematical comparison §111.43(c)(5)

---

## Lesson Sequence

### Week 1: Probability and Expected Value (≈8.3 hours)

#### Lesson 3.1 — Probability Foundations: Quantifying Uncertainty (2 hrs)
**Math Models Focus:** Probability of discrete events, complement rule, interpreting probability
**Activity:**
- Warm-up: "What's the chance your car gets broken into this year? What's the chance your apartment floods? You probably have an intuition — but can you put a number on it?" Insurance companies can, and they use that number to set prices.
- Probability review:
  - P(A) = number of favorable outcomes / total possible outcomes (for equally likely outcomes).
  - P(A) is always between 0 and 1 (or 0% and 100%).
  - P(not A) = 1 - P(A). The complement rule.
- Real-world probability data (actuarial tables):
  - Annual probability of a car accident (any severity): ~6.3% (roughly 1 in 16 drivers)
  - Annual probability of a serious car accident (injury/major damage): ~2.0%
  - Annual probability of a house fire: ~0.35%
  - Annual probability of a theft from a vehicle: ~2.5%
  - Annual probability of an ER visit: ~20%
- Interpreting probability: "A 2% annual chance sounds small. But over a 50-year driving career, what's the chance you experience at least one serious accident?"
  - P(at least one in 50 years) = 1 - (1 - 0.02)^50 = 1 - (0.98)^50 = 1 - 0.364 = 63.6%
  - A "rare" annual event becomes a likely lifetime event.
- Desmos: Graph `y = 1 - (1-0.02)^x` for x = 1 to 60 years. Watch the probability rise. Add a slider for the annual probability to see how even small changes affect lifetime risk.
- Practice: 10 problems — compute P(A), P(not A), and lifetime probability for events with given annual rates.

**TEKS:** §111.43(c)(6)

#### Lesson 3.2 — Expected Value: The Mathematics of Average Outcomes (2.5 hrs)
**Math Models Focus:** Expected value formula, applying EV to financial decisions
**Activity:**
- Expected value: The weighted average of all possible outcomes, where each outcome is weighted by its probability.
  ```
  E(X) = x₁·P(x₁) + x₂·P(x₂) + ... + xₙ·P(xₙ)
  ```
- Simple example — a carnival game: Pay $5 to spin a wheel.
  - 50% chance: win $0 (lose $5 net)
  - 30% chance: win $5 (break even)
  - 15% chance: win $10 (net +$5)
  - 5% chance: win $50 (net +$45)
  - E(net outcome) = (-5)(0.50) + (0)(0.30) + (5)(0.15) + (45)(0.05) = -2.50 + 0 + 0.75 + 2.25 = $0.50
  - Expected value is +$0.50 per play. This game favors the player (unusual for a carnival!).
- Insurance framing: Redefine outcomes as financial losses.
  - No accident (94% chance): loss = $0. Cost = premium only.
  - Minor accident (4% chance): loss = $2,000.
  - Major accident (1.5% chance): loss = $15,000.
  - Catastrophic accident (0.5% chance): loss = $50,000.
  - E(loss) = 0(0.94) + 2000(0.04) + 15000(0.015) + 50000(0.005) = $0 + $80 + $225 + $250 = $555
  - If the insurance premium is $1,200/year and covers all losses above a $500 deductible, is it worth it?
  - Expected payout from insurance: E(claim) = 0(0.94) + 1500(0.04) + 14500(0.015) + 49500(0.005) = $0 + $60 + $217.50 + $247.50 = $525
  - Expected value of buying insurance: $525 (expected claims) - $1,200 (premium) = -$675. On average, you "lose" $675/year.
  - But: Without insurance, there's a 0.5% chance of a $50,000 loss. Can you absorb that? This is where risk tolerance matters.
- Spreadsheet lab: Students build an expected value calculator. Input: list of outcomes and probabilities. Output: E(X).
- Practice: 8 expected value problems — games, investments, and insurance scenarios.

**TEKS:** §111.43(c)(5), §111.43(c)(6)

#### Lesson 3.3 — Insurance Terminology and How Insurance Works (1.5 hrs)
**Math Models Focus:** Insurance vocabulary, cost-sharing models, reading policy documents
**Activity:**
- Key insurance concepts:
  - **Premium:** The amount you pay (monthly or annually) for coverage.
  - **Deductible:** The amount you pay out of pocket before insurance kicks in.
  - **Copay:** A fixed amount you pay for a specific service (e.g., $30 for a doctor visit).
  - **Coinsurance:** The percentage you pay after the deductible (e.g., 20% coinsurance means insurance pays 80%).
  - **Out-of-pocket maximum:** The most you pay in a year. After this, insurance covers 100%.
  - **Coverage limit:** The maximum the insurer will pay.
  - **Exclusion:** What the policy does NOT cover.
- How insurance companies profit — the Law of Large Numbers:
  - Individual outcomes are unpredictable. But with millions of policyholders, the average outcome is very predictable.
  - If the expected loss per policyholder is $555/year and the premium is $1,200/year, the insurer collects $645/person in expected profit — enough to cover overhead, reserves, and actual profit.
  - This is risk pooling: many people pay premiums, few make claims, and the premiums of the many fund the claims of the few.
- Spreadsheet exercise: Given a pool of 10,000 drivers with the accident probabilities from Lesson 3.2:
  - Expected number of minor accidents: 10,000 * 0.04 = 400
  - Expected claims from minor accidents: 400 * $1,500 = $600,000
  - Expected claims from major: 150 * $14,500 = $2,175,000
  - Expected claims from catastrophic: 50 * $49,500 = $2,475,000
  - Total expected claims: $5,250,000
  - Total premiums collected: 10,000 * $1,200 = $12,000,000
  - Expected profit: $6,750,000 (before operating costs)
- Discussion: "Is the insurance company 'taking advantage' of customers? Or is it providing a valuable service — absorbing risk that individuals cannot handle alone?"

**TEKS:** §111.43(c)(4), §111.43(c)(5)

#### Lesson 3.4 — Auto Insurance Analysis (2.3 hrs)
**Math Models Focus:** Comparing auto insurance plans using expected value and cost analysis
**Activity:**
- Auto insurance components:
  - **Liability:** Covers damage you cause to others (required by law in Texas — minimum 30/60/25).
  - **Collision:** Covers damage to your car from an accident.
  - **Comprehensive:** Covers non-collision damage (theft, weather, animals).
  - **Uninsured motorist:** Covers you if the at-fault driver has no insurance.
- Comparing two plans for a 20-year-old driver:
  - **Plan A (Low deductible):** $500 deductible, $1,800/year premium.
  - **Plan B (High deductible):** $1,500 deductible, $1,200/year premium.
  - Premium savings with Plan B: $600/year.
  - But if you have an accident, you pay $1,000 more out of pocket ($1,500 - $500).
  - Break-even: If you have fewer than 0.6 accidents per year (600/1000), Plan B is cheaper.
  - Since the average driver has about 0.06 accidents per year, Plan B saves money in expectation.
- Expected annual cost for each plan:
  - Plan A: $1,800 premium + E(deductible costs) = $1,800 + $500 * 0.06 = $1,830
  - Plan B: $1,200 premium + E(deductible costs) = $1,200 + $1,500 * 0.06 = $1,290
  - Plan B saves ~$540/year in expected cost.
- Spreadsheet comparison: Students build a side-by-side comparison for three insurance quotes with different deductibles and premiums. Calculate expected annual cost for each.
- Desmos: Graph expected annual cost as a function of accident probability for both plans. At what accident rate are they equal?
- Practice: 4 auto insurance comparison problems.

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

---

### Week 2: Health, Renters, and Simulation (≈8.3 hours)

#### Lesson 3.5 — Health Insurance: Premiums vs. Deductibles (2.5 hrs)
**Math Models Focus:** Comparing health insurance plans, total annual cost modeling
**Activity:**
- Health insurance plan structure (simplified):
  - Monthly premium + annual deductible + coinsurance + copays + out-of-pocket maximum.
- Comparing two plans:
  - **Silver Plan:** $350/month premium, $2,000 deductible, 20% coinsurance, $7,000 out-of-pocket max.
  - **Bronze Plan:** $200/month premium, $5,000 deductible, 40% coinsurance, $9,000 out-of-pocket max.
- Scenario analysis — Total annual cost at different usage levels:
  - Healthy year (medical bills = $500):
    - Silver: $4,200 premium + $500 (under deductible) = $4,700
    - Bronze: $2,400 premium + $500 (under deductible) = $2,900
    - Bronze wins by $1,800.
  - Moderate year (medical bills = $8,000):
    - Silver: $4,200 premium + $2,000 deductible + 20% * ($8,000 - $2,000) = $4,200 + $2,000 + $1,200 = $7,400
    - Bronze: $2,400 premium + $5,000 deductible + 40% * ($8,000 - $5,000) = $2,400 + $5,000 + $1,200 = $8,600
    - Silver wins by $1,200.
  - Major year (medical bills = $50,000):
    - Silver: $4,200 premium + $7,000 out-of-pocket max = $11,200
    - Bronze: $2,400 premium + $9,000 out-of-pocket max = $11,400
    - Roughly equal. The out-of-pocket max caps the damage.
- Spreadsheet lab: Students build a health insurance cost model. Input: total medical bills. Output: total annual cost for each plan. Use an IF/MIN function chain:
  ```
  Patient pays = MIN(bills, deductible) + coinsurance * MAX(bills - deductible, 0)
  Patient pays = MIN(patient_pays, oop_max)
  Total cost = premium * 12 + patient_pays
  ```
- Desmos: Graph total annual cost as a function of medical bills for both plans. Find the crossover point where Silver becomes cheaper than Bronze.
- Discussion: "If you're young and healthy, the Bronze plan usually wins. But health is unpredictable. How do you decide?"

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

#### Lesson 3.6 — Renters Insurance and Life Insurance (1.5 hrs)
**Math Models Focus:** Expected value analysis for low-cost insurance products
**Activity:**
- Renters insurance: Covers personal property in a rental (theft, fire, water damage). Also provides liability coverage.
  - Typical cost: $15–$30/month ($180–$360/year).
  - Typical coverage: $20,000–$50,000 in personal property.
  - Expected value analysis: If probability of a claim-worthy event is 3% per year and average claim is $5,000:
    - E(claim) = 0.03 * $5,000 = $150/year.
    - Premium: $240/year. Expected "loss" on the insurance: $90/year.
    - But without insurance, a 3% chance of losing $5,000+ in belongings (laptop, phone, furniture, clothing) is significant for someone with limited savings.
- Life insurance basics (brief introduction):
  - Term life: Covers a fixed period (10, 20, 30 years). If you die during the term, beneficiaries receive the payout. If you survive the term, you've paid premiums for nothing — and that's the good outcome.
  - Expected value for a healthy 30-year-old, $500,000 term life (20-year):
    - Annual premium: ~$300. Total premiums over 20 years: $6,000.
    - Probability of death before age 50: ~3%.
    - E(payout) = 0.03 * $500,000 = $15,000.
    - E(net value) = $15,000 - $6,000 = +$9,000 (favorable expected value — rare for insurance!).
    - Life insurance for young people is cheap because the probability of death is low. It becomes essential when others depend on your income.
- Spreadsheet exercise: Calculate the expected value of renters insurance and term life insurance for different scenarios.
- Practice: 6 problems — should this person buy renters/life insurance? Use expected value and risk tolerance arguments.

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

#### Lesson 3.7 — Monte Carlo Simulation: Making Probability Concrete (2.5 hrs)
**Math Models Focus:** Simulation methodology, using random number generation to estimate expected values
**Activity:**
- What is Monte Carlo simulation? Using random numbers to simulate thousands of possible outcomes, then analyzing the distribution of results.
- Why simulate? When scenarios are complex (multiple types of losses, varying severities, correlated events), formulas get complicated. Simulation lets us estimate the answer empirically.
- RStudio: Simulate 10,000 years of driving for one person.
  ```r
  set.seed(42)
  n_simulations <- 10000
  annual_cost <- numeric(n_simulations)

  for (i in 1:n_simulations) {
    # Generate random outcome for the year
    outcome <- runif(1)

    if (outcome < 0.94) {
      # No accident
      annual_cost[i] <- 0
    } else if (outcome < 0.98) {
      # Minor accident: loss between $500 and $3,000
      annual_cost[i] <- runif(1, 500, 3000)
    } else if (outcome < 0.995) {
      # Major accident: loss between $5,000 and $25,000
      annual_cost[i] <- runif(1, 5000, 25000)
    } else {
      # Catastrophic accident: loss between $25,000 and $100,000
      annual_cost[i] <- runif(1, 25000, 100000)
    }
  }

  # Analyze results
  cat("Mean annual loss:", round(mean(annual_cost), 2), "\n")
  cat("Median annual loss:", round(median(annual_cost), 2), "\n")
  cat("95th percentile:", round(quantile(annual_cost, 0.95), 2), "\n")
  cat("Maximum loss:", round(max(annual_cost), 2), "\n")
  ```
- Visualization:
  ```r
  library(ggplot2)
  df <- data.frame(cost = annual_cost)

  ggplot(df, aes(x = cost)) +
    geom_histogram(bins = 50, fill = "steelblue", color = "white") +
    geom_vline(xintercept = mean(annual_cost), color = "red",
               linetype = "dashed", linewidth = 1) +
    labs(title = "Distribution of Annual Driving Losses (10,000 Simulations)",
         x = "Annual Loss ($)", y = "Frequency") +
    annotate("text", x = mean(annual_cost) + 3000, y = 8000,
             label = paste("Mean =", scales::dollar(mean(annual_cost))),
             color = "red") +
    theme_minimal()
  ```
- Key observations:
  - The distribution is heavily right-skewed: most years cost $0, but some cost $50,000+.
  - The mean (~$555) tells you the expected cost. The 95th percentile tells you the "bad year" cost.
  - Insurance protects against the tail — the rare, expensive events.
- Students modify the simulation: Change the probabilities. Add a deductible. Compute annual cost WITH insurance vs. WITHOUT.

**TEKS:** §111.43(c)(4), §111.43(c)(6)

#### Lesson 3.8 — Simulating Insurance vs. Self-Insurance (1.8 hrs)
**Math Models Focus:** Comparing insured and uninsured outcomes over a lifetime using simulation
**Activity:**
- Extend the Monte Carlo simulation to a 50-year driving career.
- RStudio: Simulate 1,000 lifetimes of 50 years each.
  ```r
  set.seed(123)
  n_lifetimes <- 1000
  years <- 50
  premium <- 1200
  deductible <- 500

  total_cost_insured <- numeric(n_lifetimes)
  total_cost_uninsured <- numeric(n_lifetimes)

  for (i in 1:n_lifetimes) {
    for (y in 1:years) {
      outcome <- runif(1)
      if (outcome < 0.94) {
        loss <- 0
      } else if (outcome < 0.98) {
        loss <- runif(1, 500, 3000)
      } else if (outcome < 0.995) {
        loss <- runif(1, 5000, 25000)
      } else {
        loss <- runif(1, 25000, 100000)
      }

      # Insured: pay premium + deductible (if loss > deductible)
      total_cost_insured[i] <- total_cost_insured[i] + premium +
        min(loss, deductible)

      # Uninsured: pay the full loss
      total_cost_uninsured[i] <- total_cost_uninsured[i] + loss
    }
  }

  cat("Insured - Mean lifetime cost:", scales::dollar(mean(total_cost_insured)), "\n")
  cat("Uninsured - Mean lifetime cost:", scales::dollar(mean(total_cost_uninsured)), "\n")
  cat("Uninsured - 95th percentile:", scales::dollar(quantile(total_cost_uninsured, 0.95)), "\n")
  ```
- Results discussion:
  - Insured mean: ~$61,500 (mostly premiums). Very consistent across lifetimes.
  - Uninsured mean: ~$27,750. Cheaper on average — but with enormous variance.
  - Uninsured 95th percentile: ~$65,000+. The worst 5% of uninsured lifetimes cost more than insurance.
  - Uninsured worst case: One bad year could produce a $100,000 loss. Can you absorb that?
- Side-by-side histogram: Plot the distribution of lifetime costs for insured vs. uninsured.
- Key takeaway: Insurance costs more on average (that's how insurers profit), but it eliminates the catastrophic tail. The question is not "will insurance save me money?" but "can I afford the worst case without it?"

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

---

### Week 3: Cost-Benefit Analysis and the Insurance Project (≈8.3 hours)

#### Lesson 3.9 — The Cost-Benefit Framework for Insurance Decisions (2 hrs)
**Math Models Focus:** Formalizing the decision framework, combining expected value with risk tolerance
**Activity:**
- The insurance decision framework:
  1. **Identify the risk:** What event are you insuring against? What's its probability?
  2. **Quantify the loss:** How much would the event cost without insurance?
  3. **Calculate expected loss:** E(loss) = P(event) * cost of event.
  4. **Compare to the premium:** Is the premium more or less than the expected loss?
  5. **Assess the tail risk:** What's the worst-case scenario? Can you absorb it?
  6. **Decision rule:**
     - If the worst case is affordable → self-insure (save the premium).
     - If the worst case is catastrophic → buy insurance (even if EV is negative).
     - If you're unsure → choose a high-deductible plan (lower premium, you absorb small losses).
- Worked examples:
  - Extended warranty on a $1,200 laptop: $200 for 3 years. Probability of failure: ~5%. E(claim) = 0.05 * $1,200 = $60. Premium $200 >> $60. Worst case: losing $1,200, which is manageable. Decision: skip the warranty.
  - Umbrella liability policy: $300/year for $1,000,000 in liability coverage. Probability of a major liability claim: ~0.1%. E(claim) = 0.001 * $1,000,000 = $1,000. Premium $300 < $1,000. And the worst case ($1,000,000 lawsuit) would be life-destroying. Decision: buy the umbrella policy. This is rare — insurance with positive expected value.
- Spreadsheet: Students build a decision matrix for 6 insurance scenarios. Columns: risk description, probability, loss amount, expected loss, premium, EV of insurance, worst case, recommendation.
- Practice: 6 insurance decisions — students use the framework to make and justify a recommendation.

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

#### Lesson 3.10 — Actuarial Thinking: How Insurers Set Prices (1.5 hrs)
**Math Models Focus:** Basic actuarial pricing, risk classification, adverse selection
**Activity:**
- How insurers price premiums:
  1. Estimate expected claims per policyholder (using actuarial tables, historical data).
  2. Add a loading factor for operating expenses (20–35% of premium).
  3. Add a profit margin.
  4. Premium = Expected claims + Operating costs + Profit.
- Risk classification: Insurers charge different premiums based on risk factors.
  - Auto insurance: age (younger = higher risk), driving record, vehicle type, location, credit score.
  - Health insurance: age, tobacco use (under ACA, these are the only two factors allowed).
  - Life insurance: age, health status, occupation, tobacco use.
- Adverse selection: If premiums are the same for everyone, high-risk people are more likely to buy insurance and low-risk people are more likely to skip it. This drives up the average claims cost and makes insurance more expensive for everyone.
- Spreadsheet exercise: Students act as actuaries for a fictional auto insurance company.
  - Given a pool of 5,000 drivers with known risk profiles (age, driving record), set premiums that cover expected claims + 25% operating costs + 10% profit margin.
  - Calculate: What happens to the company's finances if 20% of low-risk drivers drop their policies? (Adverse selection increases the average cost per remaining policyholder.)
- Discussion: "Is it fair to charge young drivers more for auto insurance? They haven't done anything wrong — they're just young. But the data shows higher accident rates. Where's the ethical line?"

**TEKS:** §111.43(c)(4), §111.43(c)(5)

#### Lesson 3.11 — Insurance Decision Analysis: Project Workshop (2.5 hrs)
**Math Models Focus:** Integrating expected value, simulation, and cost-benefit analysis
**Activity:**
- Students receive an **insurance scenario packet** containing three real-world insurance decisions:
  - **Decision 1 — Auto insurance:** Choose between three plans with different deductibles and premiums. Given: annual accident probabilities and loss distributions.
  - **Decision 2 — Health insurance:** Choose between a Silver and Bronze plan. Given: probability distribution of annual medical expenses (healthy, moderate, major, catastrophic).
  - **Decision 3 — Renters insurance:** Decide whether to purchase renters insurance at all. Given: annual probabilities of theft, fire, and water damage; estimated value of possessions.
- Project requirements:
  1. **Expected value analysis (spreadsheet):** For each decision, calculate the expected annual cost with and without each option. Present in a clear comparison table.
  2. **Monte Carlo simulation (RStudio):** For one of the three decisions, simulate 10,000 years of outcomes. Plot the distribution of annual costs. Report the mean, median, and 95th percentile.
  3. **Cost-benefit summary (spreadsheet):** For each decision, complete the decision framework: risk, probability, expected loss, premium, EV comparison, worst case, recommendation.
  4. **Written analysis (1–2 pages):** For each decision, state your recommendation and justify it mathematically. Address: When is the insurance worth it? When is it not? How does risk tolerance affect the answer?
- Workshop time: Students build spreadsheets, run simulations, and draft their analysis.

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

#### Lesson 3.12 — Project Completion and Presentations (2.3 hrs)
**Activity:**
- Final workshop time (45 minutes): Students complete and polish their Insurance Decision Analysis.
- Peer review (20 minutes): Partners verify:
  - Are the expected value calculations correct?
  - Does the simulation code run and produce reasonable results?
  - Does the recommendation follow logically from the numbers?
  - Is risk tolerance addressed in the written analysis?
- Selected presentations (30 minutes): 6 students present one of their three decisions (3 minutes each). The class discusses whether they agree with the recommendation.
- Unit checkpoint quiz (25 minutes): Probability calculations, expected value computations, insurance terminology, cost-benefit analysis questions, interpret a simulation histogram.

**TEKS:** §111.43(c)(4), §111.43(c)(5), §111.43(c)(6)

---

## Unit 3 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Insurance & Risk | Individual | 25 |
| Probability & Expected Value Practice | Practice | 20 |
| Insurance Terminology & Concepts | Practice | 15 |
| Auto Insurance Comparison Lab (Spreadsheet) | Lab | 20 |
| Health Insurance Cost Model (Spreadsheet) | Lab | 15 |
| Monte Carlo Simulation Lab (RStudio) | Lab | 25 |
| Insurance Decision Analysis Project | Project | 60 |
| Peer Review Participation | Participation | 10 |
| Warm-ups & Daily Work | Participation | 10 |
| **Total** | | **200** |

## Key Vocabulary

probability, complement rule, expected value, weighted average, risk, risk assessment, risk tolerance, risk pooling, insurance, premium, deductible, copay, coinsurance, out-of-pocket maximum, coverage limit, exclusion, liability insurance, collision insurance, comprehensive insurance, uninsured motorist, health insurance, Bronze plan, Silver plan, renters insurance, life insurance, term life, beneficiary, actuary, actuarial table, Law of Large Numbers, adverse selection, risk classification, loading factor, Monte Carlo simulation, random number generation, distribution, right-skewed distribution, tail risk, cost-benefit analysis, self-insurance, extended warranty, umbrella policy
