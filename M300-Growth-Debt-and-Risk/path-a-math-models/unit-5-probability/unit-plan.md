# Unit 5 — Probability & Simulation

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 5 of 6 |
| Title | Probability & Simulation |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you make smart decisions when the outcome is uncertain — and how can you use simulation to see the invisible patterns in randomness?* |
| Math Models TEKS | §111.43(c)(6), (7) |
| Tools | RStudio, Google Sheets/Excel, Desmos, standard dice and coins (physical or virtual) |
| Key Deliverable | Probability Simulation Report — students design and run a Monte Carlo simulation in R to answer a real-world probability question |

## Unit Narrative

Uncertainty is everywhere. Will it rain tomorrow? Will the insurance claim pay out? Will the investment gain or lose? Probability is the mathematics of uncertainty — it gives us a precise language for reasoning about events that haven't happened yet. This unit builds probability from the ground up: sample spaces, theoretical calculations, compound events, conditional probability, and independence. Students discover that probability is not just about coins and dice — it governs insurance pricing (Unit 3), loan default rates (Unit 2), and risk assessment in every domain. The unit deepens the expected value concept introduced in Unit 3 and extends it through the lens of the binomial distribution.

The second half of the unit introduces Monte Carlo simulation — using computers to run thousands of random trials and estimate probabilities that are difficult or impossible to calculate by hand. Students learn that the law of large numbers guarantees convergence: run enough trials and the experimental probability approaches the theoretical probability. The capstone Probability Simulation Report asks students to formulate a real-world probability question, design a simulation in RStudio, run it, analyze the results, and present their findings. This is computational thinking applied to uncertainty — a skill that powers actuarial science, finance, epidemiology, and game design.

## Math Concepts

- Sample spaces and systematic listing of outcomes §111.43(c)(6)
- Theoretical probability: `P(A) = favorable outcomes / total outcomes` §111.43(c)(6)
- Experimental probability and the law of large numbers §111.43(c)(6)
- Complement rule: `P(not A) = 1 - P(A)` §111.43(c)(6)
- Compound events: union (OR) and intersection (AND) §111.43(c)(6)
- Addition rule: `P(A or B) = P(A) + P(B) - P(A and B)` §111.43(c)(6)
- Multiplication rule: `P(A and B) = P(A) × P(B|A)` §111.43(c)(6)
- Conditional probability: `P(A|B) = P(A and B) / P(B)` §111.43(c)(6)
- Independence: `P(A|B) = P(A)` iff A and B are independent §111.43(c)(6)
- Permutations: `nPr = n! / (n-r)!` §111.43(c)(7)
- Combinations: `nCr = n! / (r!(n-r)!)` §111.43(c)(7)
- Binomial probability: `P(X = k) = C(n,k) × p^k × (1-p)^(n-k)` §111.43(c)(7)
- Expected value: `E(X) = Σ x × P(x)` §111.43(c)(7)
- Monte Carlo simulation §111.43(c)(6), (7)

---

## Lesson Sequence

### Week 1: Foundations of Probability (≈8.3 hours)

#### Lesson 5.1 — Sample Spaces and Counting (2 hrs)
**Math Models Focus:** Systematic listing of outcomes
**Activity:**
- Warm-up: You flip a coin and roll a die. How many possible outcomes are there? Students brainstorm, then systematically list all 12 outcomes.
- Sample space: The set of all possible outcomes of an experiment.
- Methods for listing sample spaces:
  - **Organized list:** Write out all outcomes systematically.
  - **Tree diagram:** Each branch represents a choice or outcome. Total outcomes = product of branches at each level.
  - **Table/grid:** For two-event experiments, a 2D table shows all combinations.
- Fundamental Counting Principle: If event 1 has m outcomes and event 2 has n outcomes, the combined experiment has `m × n` outcomes.
  - Example: A restaurant offers 4 entrees, 3 sides, and 5 drinks. Total meal combinations: `4 × 3 × 5 = 60`.
- Spreadsheet lab: Build a two-way table for all outcomes of rolling two dice. Color-code cells where the sum equals 7. Count: 6 out of 36 outcomes sum to 7.
- Practice: 10 problems — list sample spaces using organized lists, tree diagrams, and the counting principle.

**TEKS:** §111.43(c)(6)

#### Lesson 5.2 — Theoretical Probability (2 hrs)
**Math Models Focus:** Computing probability from sample spaces
**Activity:**
- Definition: `P(A) = (number of favorable outcomes) / (total number of equally likely outcomes)`.
- Properties:
  - `0 ≤ P(A) ≤ 1` for any event A.
  - `P(certain event) = 1`. `P(impossible event) = 0`.
  - `P(not A) = 1 - P(A)` (complement rule).
- Dice problems (using the sample space from Lesson 5.1):
  - P(sum = 7) = 6/36 = 1/6.
  - P(sum = 2) = 1/36.
  - P(sum ≥ 10) = P(10) + P(11) + P(12) = 3/36 + 2/36 + 1/36 = 6/36 = 1/6.
  - P(doubles) = 6/36 = 1/6.
- Card problems: A standard deck has 52 cards — 4 suits, 13 ranks.
  - P(ace) = 4/52 = 1/13.
  - P(heart) = 13/52 = 1/4.
  - P(face card) = 12/52 = 3/13.
- Connection to Unit 3 (Insurance): If 1 in 50 drivers file a claim, the probability of a randomly selected driver filing is 1/50 = 0.02 = 2%. This is how insurers set premiums.
- Desmos: Use the random number generator to simulate coin flips. Compare theoretical P(heads) = 0.5 to experimental results with 10, 100, and 1000 flips.
- Practice: 12 problems — compute theoretical probabilities for dice, cards, and real-world scenarios.

**TEKS:** §111.43(c)(6)

#### Lesson 5.3 — Compound Events: AND and OR (2.5 hrs)
**Math Models Focus:** Addition and multiplication rules
**Activity:**
- **OR (Union):** `P(A or B) = P(A) + P(B) - P(A and B)`.
  - The subtraction corrects for double-counting the overlap.
  - Mutually exclusive events: `P(A and B) = 0`, so `P(A or B) = P(A) + P(B)`.
  - Example: P(heart or ace) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13.
  - Example: P(king or queen) = 4/52 + 4/52 - 0/52 = 8/52 = 2/13 (mutually exclusive).
- **AND (Intersection):** `P(A and B) = P(A) × P(B|A)`.
  - If independent: `P(A and B) = P(A) × P(B)`.
  - Example (independent): P(heads on first flip AND heads on second flip) = 0.5 × 0.5 = 0.25.
  - Example (dependent): Drawing two cards without replacement. P(both aces) = 4/52 × 3/51 = 12/2652 = 1/221.
- Venn diagrams: Draw Venn diagrams for union and intersection. Shade the relevant regions.
- Spreadsheet: Create a Venn diagram calculator — input P(A), P(B), and P(A and B), and compute P(A or B), P(only A), P(only B), P(neither).
- Practice: 12 problems — compute compound probabilities using addition and multiplication rules.

**TEKS:** §111.43(c)(6)

#### Lesson 5.4 — Conditional Probability and Independence (1.8 hrs)
**Math Models Focus:** Probability given prior information
**Activity:**
- Conditional probability: `P(A|B) = P(A and B) / P(B)`. "The probability of A, given that B has occurred."
- Example: In a class of 30 students, 18 play sports, 10 play music, and 5 play both. If a student plays sports, what is the probability they also play music? `P(music | sports) = 5/18 ≈ 0.278`.
- Two-way table method:
  |  | Sports | No Sports | Total |
  |--|--------|-----------|-------|
  | Music | 5 | 5 | 10 |
  | No Music | 13 | 7 | 20 |
  | Total | 18 | 12 | 30 |
  - `P(music | sports) = 5/18`. `P(music | no sports) = 5/12`. Playing sports makes music LESS likely in this group.
- Independence test: Events A and B are independent if `P(A|B) = P(A)`. Equivalently, `P(A and B) = P(A) × P(B)`.
  - Are sports and music independent? `P(music) = 10/30 = 1/3 ≈ 0.333`. `P(music | sports) = 5/18 ≈ 0.278`. These are not equal, so sports and music are NOT independent.
- Connection to Unit 3: Insurance companies use conditional probability constantly. P(claim | young driver) differs from P(claim | experienced driver). This is why premiums vary by age.
- Practice: 8 problems — compute conditional probabilities from two-way tables and determine independence.

**TEKS:** §111.43(c)(6)

---

### Week 2: Counting, Binomial Probability, and Expected Value (≈8.3 hours)

#### Lesson 5.5 — Permutations (1.5 hrs)
**Math Models Focus:** Counting ordered arrangements
**Activity:**
- A permutation is an arrangement where order matters.
- Formula: `nPr = n! / (n-r)!` — the number of ways to arrange r items chosen from n distinct items.
- Factorial: `n! = n × (n-1) × (n-2) × ... × 1`. Convention: `0! = 1`.
- Examples:
  - How many ways can 5 runners finish first, second, and third? `5P3 = 5!/(5-3)! = 120/2 = 60`.
  - How many 4-digit PINs (0–9, no repeats)? `10P4 = 10!/6! = 5040`.
  - How many ways to arrange all 7 books on a shelf? `7P7 = 7! = 5040`.
- When to use permutations: Passwords, rankings, race finishes, seating arrangements — anything where order matters.
- Calculator practice: Use the `nPr` function on a calculator. In R: `factorial(n) / factorial(n - r)`.
- Practice: 10 problems — identify permutation situations and compute.

**TEKS:** §111.43(c)(7)

#### Lesson 5.6 — Combinations (1.5 hrs)
**Math Models Focus:** Counting unordered selections
**Activity:**
- A combination is a selection where order does NOT matter.
- Formula: `nCr = n! / (r!(n-r)!)` — the number of ways to choose r items from n distinct items.
- Key distinction: Permutation = ordered, combination = unordered. `nCr = nPr / r!` (divide out the redundant orderings).
- Examples:
  - How many ways to choose a committee of 3 from 10 people? `10C3 = 10!/(3!×7!) = 120`.
  - A pizza shop offers 8 toppings. How many 3-topping pizzas? `8C3 = 56`.
  - A lottery picks 6 numbers from 49. How many possible tickets? `49C6 = 13,983,816`.
- When to use combinations: Committees, teams, lottery, card hands — anything where order doesn't matter.
- RStudio: Use the `choose()` function:
```r
# Combinations in R
choose(10, 3)    # 120
choose(49, 6)    # 13983816
choose(52, 5)    # 2598960 (poker hands)

# Probability of a specific poker hand
# P(royal flush) = 4 / choose(52, 5)
cat("P(royal flush):", 4 / choose(52, 5), "\n")
```
- Practice: 10 problems — identify combination situations and compute. Include 3 problems where students must decide whether a situation calls for permutations or combinations.

**TEKS:** §111.43(c)(7)

#### Lesson 5.7 — Binomial Probability (2.5 hrs)
**Math Models Focus:** Probability of exactly k successes in n trials
**Activity:**
- Setup: An experiment with exactly two outcomes (success/failure), fixed probability p, and n independent trials. This is a binomial experiment.
- Formula: `P(X = k) = C(n,k) × p^k × (1-p)^(n-k)`.
  - `C(n,k)` = number of ways to choose which k trials are successes.
  - `p^k` = probability of k successes.
  - `(1-p)^(n-k)` = probability of (n-k) failures.
- Worked example: A free-throw shooter makes 70% of shots. In 10 shots, what is the probability of making exactly 7?
  - `P(X = 7) = C(10,7) × 0.70^7 × 0.30^3 = 120 × 0.0824 × 0.027 = 0.2668`.
- Extending: P(at least 8) = P(8) + P(9) + P(10).
- RStudio lab: Compute and visualize binomial probabilities:
```r
# Binomial probability for free-throw shooter
n <- 10
p <- 0.70
k <- 0:n

probs <- dbinom(k, n, p)

barplot(probs, names.arg = k, col = "steelblue",
        xlab = "Number of Made Shots", ylab = "Probability",
        main = "Binomial Distribution: n=10, p=0.70")

# P(exactly 7)
cat("P(X = 7):", dbinom(7, 10, 0.70), "\n")

# P(at least 8)
cat("P(X >= 8):", sum(dbinom(8:10, 10, 0.70)), "\n")
# Or equivalently:
cat("P(X >= 8):", 1 - pbinom(7, 10, 0.70), "\n")
```
- Desmos: Use sliders to adjust n and p. Watch the binomial distribution change shape. When p = 0.5, it's symmetric. When p is far from 0.5, it's skewed.
- Connection to Insurance (Unit 3): If each policyholder has a 2% chance of filing a claim, and you have 500 policyholders, the number of claims follows a binomial distribution with n = 500, p = 0.02.
- Practice: 8 problems — compute binomial probabilities by hand and verify with R.

**TEKS:** §111.43(c)(7)

#### Lesson 5.8 — Expected Value (2.8 hrs)
**Math Models Focus:** The long-run average outcome
**Activity:**
- Review from Unit 3: Expected value `E(X) = Σ x × P(x)` — the weighted average of all possible outcomes.
- For a binomial distribution: `E(X) = n × p`. The free-throw shooter expects `10 × 0.70 = 7` makes on average.
- Deeper applications:
  1. **Lottery:** A ticket costs $2. The jackpot is $1,000,000 with probability 1/13,983,816. Other prizes total $0.50 in expected value. `E(ticket) = 1,000,000/13,983,816 + 0.50 - 2.00 = 0.07 + 0.50 - 2.00 = -$1.43`. Every ticket is a $1.43 expected loss.
  2. **Insurance:** A policy costs $1,200/year. There's a 3% chance of a $30,000 claim. `E(insurer profit) = 0.97(1200) + 0.03(1200 - 30000) = 1164 + (-864) = $300`. The insurer expects $300 profit per policy.
  3. **Business decision:** Launch a product with 60% chance of $500,000 profit and 40% chance of $200,000 loss. `E = 0.60(500,000) + 0.40(-200,000) = 300,000 - 80,000 = $220,000`. Positive expected value — launch.
- Spreadsheet lab: Build an expected value calculator. Input outcomes and probabilities. Output the expected value and create a probability distribution bar chart.
- Fair games: A game is "fair" if E(X) = 0. Students design a carnival game and adjust the payouts until it's fair.
- Practice: 10 problems — compute expected value for games, insurance, business decisions, and investments.

**TEKS:** §111.43(c)(7)

---

### Week 3: Simulation and the Report (≈8.3 hours)

#### Lesson 5.9 — Introduction to Monte Carlo Simulation (2.5 hrs)
**Math Models Focus:** Using random sampling to estimate probabilities
**Activity:**
- What is Monte Carlo simulation? Run a random experiment thousands of times on a computer and use the results to estimate probabilities.
- Named after the Monte Carlo casino — it's all about randomness.
- Classic example: Estimate P(sum of two dice = 7) by simulation.
```r
# Monte Carlo simulation: sum of two dice
set.seed(42)
n_trials <- 100000
die1 <- sample(1:6, n_trials, replace = TRUE)
die2 <- sample(1:6, n_trials, replace = TRUE)
sums <- die1 + die2

# Estimate P(sum = 7)
p_seven <- mean(sums == 7)
cat("Simulated P(sum = 7):", p_seven, "\n")
cat("Theoretical P(sum = 7):", 6/36, "\n")

# Distribution of sums
hist(sums, breaks = seq(1.5, 12.5, 1), col = "steelblue",
     xlab = "Sum", ylab = "Frequency",
     main = "Distribution of Two-Dice Sums (100,000 Trials)")
```
- Key idea: With enough trials, the simulated probability converges to the theoretical probability. This is the Law of Large Numbers.
- Students run the simulation with 10, 100, 1000, 10000, and 100000 trials. Record how the estimate improves.
- Second example: Estimate pi using random points in a square:
```r
n <- 100000
x <- runif(n, -1, 1)
y <- runif(n, -1, 1)
in_circle <- x^2 + y^2 <= 1
pi_estimate <- 4 * mean(in_circle)
cat("Estimated pi:", pi_estimate, "\n")
cat("Actual pi:", pi, "\n")
```
- Practice: 4 guided simulation exercises — students write the R code, run it, and compare to theoretical answers.

**TEKS:** §111.43(c)(6), §111.43(c)(7)

#### Lesson 5.10 — The Law of Large Numbers (1.5 hrs)
**Math Models Focus:** Convergence of experimental to theoretical probability
**Activity:**
- Statement: As the number of trials increases, the experimental probability approaches the theoretical probability.
- RStudio demonstration: Flip a fair coin 10,000 times and track the running proportion of heads:
```r
set.seed(123)
n <- 10000
flips <- sample(c(0, 1), n, replace = TRUE)  # 0 = tails, 1 = heads
running_prop <- cumsum(flips) / (1:n)

plot(1:n, running_prop, type = "l", col = "darkblue",
     xlab = "Number of Flips", ylab = "Proportion of Heads",
     main = "Law of Large Numbers: Coin Flips", ylim = c(0.3, 0.7))
abline(h = 0.5, col = "red", lty = 2, lwd = 2)
```
- The graph shows wild fluctuations early (small sample) but steady convergence to 0.5 (the true probability) as trials increase.
- Common misconception (Gambler's Fallacy): "I've flipped 5 heads in a row, so tails is due." FALSE. Each flip is independent. The law of large numbers works through dilution, not correction.
- Spreadsheet activity: Students simulate 100 coin flips using `=RAND()` and track the running proportion. Refresh the sheet 5 times and observe different paths all converging.
- Discussion: Why does insurance work? Because insurers have millions of policyholders — the law of large numbers guarantees that actual claims will be close to expected claims. One policyholder is unpredictable. A million are very predictable.
- Practice: 4 problems interpreting convergence graphs and identifying the gambler's fallacy.

**TEKS:** §111.43(c)(6)

#### Lesson 5.11 — Simulation Design Patterns (1.5 hrs)
**Math Models Focus:** Structuring simulations for real-world problems
**Activity:**
- Students learn common simulation design patterns:
  1. **Direct sampling:** Simulate the random event directly (dice, coins, draws).
  2. **Probability-weighted sampling:** Use `sample()` with probability weights for unequal outcomes.
  3. **Repeated Bernoulli trials:** Loop through n trials, each with probability p.
  4. **Tracking a process:** Simulate a multi-step process (like a random walk or game).
- Example: The Birthday Problem — what is the probability that in a group of 23 people, at least two share a birthday?
```r
birthday_sim <- function(n_people, n_sims = 100000) {
  match_count <- 0
  for (i in 1:n_sims) {
    birthdays <- sample(1:365, n_people, replace = TRUE)
    if (length(birthdays) != length(unique(birthdays))) {
      match_count <- match_count + 1
    }
  }
  return(match_count / n_sims)
}

# Test for groups of different sizes
sizes <- c(10, 15, 20, 23, 30, 40, 50)
probs <- sapply(sizes, birthday_sim, n_sims = 50000)
plot(sizes, probs, type = "b", pch = 19, col = "darkred",
     xlab = "Group Size", ylab = "P(at least one match)",
     main = "Birthday Problem Simulation")
abline(h = 0.5, col = "gray", lty = 2)
```
- Result: With just 23 people, P(match) exceeds 50%. With 50 people, it's over 97%. Most students find this counterintuitive.
- Students choose one of three practice problems and write a complete simulation:
  1. What is the probability of getting at least one 6 in four rolls of a die?
  2. In a best-of-7 series where Team A wins each game with probability 0.55, what is P(Team A wins the series)?
  3. If you randomly guess on a 20-question multiple-choice test (4 choices each), what is P(passing with at least 60%)?

**TEKS:** §111.43(c)(6), §111.43(c)(7)

#### Lesson 5.12 — Probability Simulation Report Workshop (Day 1) (2 hrs)
**Activity:**
- Students begin the **Probability Simulation Report**. Requirements:
  1. **Question:** Formulate a real-world probability question that is difficult to solve analytically. Examples:
     - What is the probability of drawing a full house in poker?
     - If a basketball player shoots 80% from the free-throw line, what is the probability of making at least 18 out of 20?
     - In a game where you roll two dice and win if the sum is 7 or 11, what are your expected winnings per game if you bet $5 and win $20?
     - How many boxes of cereal do you need to buy, on average, to collect all 6 different toys?
  2. **Theoretical analysis:** Attempt to solve the problem analytically (by formula or counting). If this is difficult, explain why.
  3. **Simulation design:** Write a clear plan for the simulation — what is being randomized, what is being counted, how many trials.
  4. **R code:** Write clean, commented R code that runs the simulation.
  5. **Results:** Run at least 100,000 trials. Report the simulated probability with a histogram or bar chart of results.
  6. **Convergence plot:** Show how the estimate stabilizes as trials increase (law of large numbers).
  7. **Analysis (1 page):** Compare simulated result to theoretical (if available). Discuss what the result means in the real-world context. Comment on how many trials were needed for stability.
- Workshop time: brainstorming questions, initial theoretical analysis, starting R code.

#### Lesson 5.13 — Probability Simulation Report Workshop (Day 2) & Assessment (0.8 hrs)
**Activity:**
- Continued workshop: Finalize R code, generate visualizations, write analysis.
- Selected presentations: 4–5 students present their simulation questions and results (3 minutes each, showing their convergence plot and key finding).
- Unit checkpoint quiz: Sample spaces, probability rules (AND/OR/complement), conditional probability, permutations vs. combinations, binomial probability, expected value (20 minutes).

---

## Unit 5 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Probability & Counting | Individual | 25 |
| Sample Spaces & Theoretical Probability Practice | Practice | 20 |
| Compound Events Practice (AND/OR) | Practice | 15 |
| Conditional Probability & Independence Practice | Practice | 15 |
| Permutations & Combinations Practice | Practice | 15 |
| Binomial Probability Lab (RStudio) | Lab | 20 |
| Expected Value Practice | Practice | 15 |
| Monte Carlo Simulation Exercises | Lab | 25 |
| Probability Simulation Report | Project | 50 |
| **Total** | | **200** |

## Key Vocabulary

probability, sample space, outcome, event, theoretical probability, experimental probability, complement, mutually exclusive, compound event, union (OR), intersection (AND), addition rule, multiplication rule, conditional probability, independence, dependent events, two-way table, Venn diagram, factorial, permutation, combination, binomial experiment, binomial probability, binomial distribution, expected value, fair game, Monte Carlo simulation, trial, random number generator, law of large numbers, gambler's fallacy, convergence, birthday problem, simulation design
