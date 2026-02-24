# Unit 6 — Data-Driven Decisions

## Unit Overview

| Field | Detail |
|-------|--------|
| Unit | 6 of 6 |
| Title | Data-Driven Decisions |
| Duration | 25 hours (~3 weeks) |
| Driving Question | *How do you use data to tell the truth — and how do you spot it when data is being used to lie?* |
| Math Models TEKS | §111.43(c)(2), (5), (7) |
| Tools | RStudio, Google Sheets/Excel, Desmos, publicly available datasets |
| Key Deliverable | Data-Driven Policy Brief — students use a real dataset to analyze a social or economic question and present findings with statistical evidence |

## Unit Narrative

This is the capstone unit for Path A — the place where every tool, concept, and habit of mind from the course converges. Students have modeled growth (Unit 2), risk (Unit 3), decay (Unit 4), and uncertainty (Unit 5) using linear, exponential, and probabilistic models. Now they face the full data analysis pipeline: collect data, describe it, visualize it, model it, and communicate findings to a real audience. The unit begins with the unglamorous but critical question of where data comes from and what can go wrong — sampling bias, response bias, confounding variables. Students then review and deepen their understanding of descriptive statistics (center, spread, shape) and learn to formalize distributions through the normal curve and z-scores. Correlation and regression, introduced informally in earlier units, are now treated rigorously: fitting lines, computing residuals, distinguishing correlation from causation.

The second half of the unit focuses on the ethical and rhetorical dimensions of data. Misleading graphs, cherry-picked statistics, and p-hacking are not abstract concepts — they appear in news articles, political campaigns, and advertising every day. Students learn to be both producers and consumers of data-driven arguments. The capstone Data-Driven Policy Brief asks each student to select a real dataset, formulate a social or economic question, conduct a full statistical analysis in RStudio, and write a policy recommendation supported by evidence. This connects to every social studies course in the program: the economic data of S400, the political data of S500, and the global indicators of S600. Math Models students finish the course not just with mathematical skills but with the capacity to use data to make and defend real decisions.

## Math Concepts

- Data collection methods: census, sample survey, observational study, experiment §111.43(c)(2)
- Sampling methods: random, stratified, cluster, convenience §111.43(c)(2)
- Bias: sampling bias, response bias, nonresponse bias §111.43(c)(2)
- Measures of center: mean, median, mode §111.43(c)(5)
- Measures of spread: range, interquartile range, standard deviation, variance §111.43(c)(5)
- Data displays: histogram, box plot, dot plot, scatter plot §111.43(c)(5)
- Normal distribution: the bell curve, 68-95-99.7 rule §111.43(c)(5)
- Z-scores: `z = (x - μ) / σ` §111.43(c)(5)
- Correlation coefficient (r) and its interpretation §111.43(c)(7)
- Linear regression: least-squares line, slope and intercept interpretation §111.43(c)(7)
- Residuals and residual analysis §111.43(c)(7)
- Interpolation vs. extrapolation §111.43(c)(7)
- Correlation vs. causation §111.43(c)(2), (7)
- Misleading statistics and data ethics §111.43(c)(2)

---

## Lesson Sequence

### Week 1: Data Collection and Descriptive Statistics (≈8.3 hours)

#### Lesson 6.1 — Where Data Comes From: Collection Methods and Bias (2 hrs)
**Math Models Focus:** Understanding data sources and their limitations
**Activity:**
- Warm-up: Show two headlines — "90% of dentists recommend Brand X" and "Brand X rated lowest in independent consumer survey." How can both be true? (The first surveyed dentists paid by Brand X. The second surveyed a random sample.)
- Data collection methods:
  - **Census:** Collect data from every member of the population. Accurate but expensive and slow. (U.S. Census, school enrollment records.)
  - **Sample survey:** Collect data from a subset. Faster and cheaper, but subject to sampling error.
  - **Observational study:** Observe without intervening. Can find correlations but cannot establish causation.
  - **Experiment:** Deliberately manipulate a variable (treatment) and observe the effect. The gold standard for causation.
- Sampling methods:
  - **Simple random sample (SRS):** Every member has an equal chance of selection. The gold standard.
  - **Stratified:** Divide the population into groups (strata), then random sample from each.
  - **Cluster:** Divide into clusters, then randomly select entire clusters.
  - **Convenience:** Use whoever is available. Fast but biased.
- Types of bias:
  - **Sampling bias:** The sample doesn't represent the population (e.g., surveying only mall shoppers about economic conditions).
  - **Response bias:** The question wording influences answers (e.g., "Don't you agree that taxes are too high?").
  - **Nonresponse bias:** People who don't respond differ systematically from those who do.
- Case study: The 1936 Literary Digest poll predicted Landon would defeat Roosevelt in a landslide. They surveyed 2.4 million people — but from telephone directories and car registrations (wealthy people). Roosevelt won 61% of the actual vote. Sampling bias.
- Practice: 10 problems — identify the data collection method, sampling method, and potential biases in described studies.

**TEKS:** §111.43(c)(2)

#### Lesson 6.2 — Measures of Center and Spread (2.5 hrs)
**Math Models Focus:** Descriptive statistics for summarizing data
**Activity:**
- **Measures of center:**
  - **Mean:** `x̄ = Σx / n`. Sensitive to outliers.
  - **Median:** Middle value when sorted. Resistant to outliers.
  - **Mode:** Most frequent value. Useful for categorical data.
  - When to use each: Salary data (median, because of extreme high earners). Test scores (mean, typically symmetric). Favorite color (mode).
- **Measures of spread:**
  - **Range:** `max - min`. Simple but sensitive to outliers.
  - **Interquartile Range (IQR):** `Q3 - Q1`. The spread of the middle 50%. Resistant to outliers.
  - **Standard deviation:** `s = √(Σ(x - x̄)² / (n-1))`. Average distance from the mean. The most important measure of spread.
  - **Variance:** `s² = Σ(x - x̄)² / (n-1)`. Standard deviation squared.
- Spreadsheet lab: Given a dataset of Houston home prices (30 values), compute all measures using formulas:
  - `=AVERAGE()`, `=MEDIAN()`, `=MODE()`, `=STDEV()`, `=VAR()`, `=QUARTILE()`.
  - Compare mean vs. median. If mean > median, the distribution is right-skewed (pulled by expensive homes).
- RStudio:
```r
# Houston home prices (sample data, thousands)
prices <- c(145, 162, 178, 185, 192, 198, 205, 210, 215, 220,
            225, 230, 235, 240, 245, 250, 260, 275, 285, 300,
            320, 340, 365, 400, 425, 475, 550, 620, 750, 1200)

cat("Mean:", mean(prices), "\n")
cat("Median:", median(prices), "\n")
cat("Std Dev:", sd(prices), "\n")
cat("IQR:", IQR(prices), "\n")

# The mean (315.8) is higher than the median (247.5)
# because the distribution is right-skewed (a few very expensive homes)
```
- Discussion: A real estate agent says "The average home price in this neighborhood is $315,800." Is this misleading? What would be a more honest summary?
- Practice: 10 problems — compute and interpret measures of center and spread for different contexts.

**TEKS:** §111.43(c)(5)

#### Lesson 6.3 — Data Displays: Histograms and Box Plots (2 hrs)
**Math Models Focus:** Visualizing distributions
**Activity:**
- **Histogram:** Shows the distribution of a quantitative variable. X-axis = bins (intervals), Y-axis = frequency or relative frequency.
  - Shape vocabulary: symmetric, left-skewed, right-skewed, uniform, bimodal.
- **Box plot (box-and-whisker):** Shows the five-number summary: min, Q1, median, Q3, max. Outliers are plotted individually.
  - Outlier rule: Any value below `Q1 - 1.5 × IQR` or above `Q3 + 1.5 × IQR`.
- RStudio lab: Create both displays for the home price data:
```r
prices <- c(145, 162, 178, 185, 192, 198, 205, 210, 215, 220,
            225, 230, 235, 240, 245, 250, 260, 275, 285, 300,
            320, 340, 365, 400, 425, 475, 550, 620, 750, 1200)

par(mfrow = c(1, 2))

# Histogram
hist(prices, breaks = 10, col = "steelblue",
     xlab = "Price (thousands)", ylab = "Frequency",
     main = "Houston Home Prices")

# Box plot
boxplot(prices, col = "lightcoral",
        ylab = "Price (thousands)",
        main = "Houston Home Prices")
```
- Reading box plots: Students interpret 4 different box plots (home prices, test scores, commute times, salaries) and describe center, spread, shape, and outliers.
- Side-by-side box plots: Compare two groups. Example: home prices in two neighborhoods. Which has higher median? Which has more variability?
- Desmos: Input a dataset and toggle between histogram and box plot views.
- Practice: 8 problems — create and interpret histograms and box plots.

**TEKS:** §111.43(c)(5)

#### Lesson 6.4 — The Normal Distribution and the 68-95-99.7 Rule (1.8 hrs)
**Math Models Focus:** The bell curve as a model for symmetric data
**Activity:**
- Many real-world datasets are approximately normal (bell-shaped): heights, test scores, measurement errors, blood pressure.
- The normal distribution is defined by two parameters: mean (μ) and standard deviation (σ).
- The **68-95-99.7 Rule (Empirical Rule):**
  - 68% of data falls within 1 standard deviation of the mean: `μ ± σ`.
  - 95% within 2 standard deviations: `μ ± 2σ`.
  - 99.7% within 3 standard deviations: `μ ± 3σ`.
- Example: SAT scores have μ = 1060, σ = 200.
  - 68% of scores fall between 860 and 1260.
  - 95% between 660 and 1460.
  - A score of 1460 is at the boundary of the top 2.5%.
- Desmos: Graph the normal distribution `y = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))` with sliders for μ and σ. Observe how μ shifts the curve and σ controls the spread.
- RStudio visualization:
```r
x <- seq(400, 1700, length = 300)
y <- dnorm(x, mean = 1060, sd = 200)
plot(x, y, type = "l", lwd = 2, col = "darkblue",
     xlab = "SAT Score", ylab = "Density",
     main = "Normal Distribution of SAT Scores")
abline(v = c(860, 1060, 1260), col = c("red", "black", "red"), lty = c(2, 1, 2))
text(1060, max(y) * 1.05, "μ = 1060", pos = 3)
```
- Practice: 8 problems applying the 68-95-99.7 rule to estimate percentages and identify unusual values.

**TEKS:** §111.43(c)(5)

---

### Week 2: Z-Scores, Correlation, and Regression (≈8.3 hours)

#### Lesson 6.5 — Z-Scores and Standardization (2 hrs)
**Math Models Focus:** Comparing values across different distributions
**Activity:**
- **Z-score:** `z = (x - μ) / σ`. Tells you how many standard deviations a value is from the mean.
  - z = 0: At the mean. z = 1: One SD above. z = -2: Two SDs below.
- Why z-scores matter: They allow comparison across different scales.
  - A student scores 720 on SAT Math (μ = 530, σ = 110) and 28 on ACT Math (μ = 20.5, σ = 5.5).
  - SAT z-score: `(720 - 530) / 110 = 1.73`.
  - ACT z-score: `(28 - 20.5) / 5.5 = 1.36`.
  - The SAT score is relatively higher (1.73 SDs above the mean vs. 1.36 SDs).
- Using z-scores to find percentiles: A z-score of 1.73 means the student scored higher than approximately 95.8% of test takers.
- RStudio: The `pnorm()` function converts z-scores to percentiles:
```r
# What percentile is a z-score of 1.73?
pnorm(1.73)  # 0.9582 → 95.8th percentile

# What z-score corresponds to the 90th percentile?
qnorm(0.90)  # 1.2816

# What SAT score is the 90th percentile?
530 + 1.2816 * 110  # 671
```
- Spreadsheet: Build a z-score calculator. Input: raw score, mean, standard deviation. Output: z-score and percentile (using `=NORM.S.DIST()`).
- Practice: 10 problems — compute z-scores, compare scores across distributions, and find percentiles.

**TEKS:** §111.43(c)(5)

#### Lesson 6.6 — Correlation: Measuring Linear Association (2 hrs)
**Math Models Focus:** The correlation coefficient r
**Activity:**
- **Scatter plot review:** Plot two quantitative variables. Look for direction (positive/negative), form (linear/curved), and strength (tight/scattered).
- **Correlation coefficient (r):** A number between -1 and 1 that measures the strength and direction of a linear association.
  - r = 1: Perfect positive linear. r = -1: Perfect negative linear. r = 0: No linear association.
  - Rules of thumb: |r| > 0.8 strong, 0.5–0.8 moderate, < 0.5 weak.
- RStudio lab: Compute and visualize correlations:
```r
# Study hours vs. exam score (simulated data)
set.seed(42)
hours <- round(runif(30, 1, 10), 1)
score <- round(50 + 4.5 * hours + rnorm(30, 0, 8), 1)

plot(hours, score, pch = 19, col = "darkblue",
     xlab = "Study Hours", ylab = "Exam Score",
     main = paste("r =", round(cor(hours, score), 3)))

cat("Correlation:", cor(hours, score), "\n")
```
- **Correlation does NOT imply causation.** Famous spurious correlations:
  - Ice cream sales and drowning deaths (both increase in summer — confounding variable: temperature).
  - Number of firefighters at a fire and damage caused (confounding: fire size).
  - Per capita cheese consumption and deaths by bedsheet tangling (pure coincidence).
- Desmos: Use the regression tool to plot data and display r. Add/remove outliers and observe how r changes. A single outlier can dramatically affect r.
- Practice: 8 problems — estimate r from scatter plots, compute r, and identify confounding variables.

**TEKS:** §111.43(c)(7), §111.43(c)(2)

#### Lesson 6.7 — Linear Regression: The Least-Squares Line (2.5 hrs)
**Math Models Focus:** Fitting a line to data and interpreting slope and intercept
**Activity:**
- **Least-squares regression line:** The line `ŷ = a + bx` that minimizes the sum of squared residuals.
  - Slope (b): For each 1-unit increase in x, the predicted y changes by b.
  - Intercept (a): The predicted y when x = 0 (may or may not be meaningful).
- RStudio lab: Fit a regression line and interpret:
```r
hours <- c(1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0,
           6.5, 7.0, 7.5, 8.0, 8.5, 9.0)
score <- c(55, 58, 62, 60, 68, 72, 70, 78, 75, 82, 80, 85, 88, 90, 92, 95)

model <- lm(score ~ hours)
summary(model)

# Interpretation
cat("Slope:", coef(model)[2], "\n")
cat("Intercept:", coef(model)[1], "\n")
cat("R-squared:", summary(model)$r.squared, "\n")

# Plot with regression line
plot(hours, score, pch = 19, col = "darkblue",
     xlab = "Study Hours", ylab = "Exam Score",
     main = "Study Hours vs. Exam Score")
abline(model, col = "red", lwd = 2)
```
- Interpretation example: "For each additional hour of study, the model predicts an increase of about 5.2 points on the exam. A student who studies 0 hours is predicted to score about 46 (the intercept). The R-squared of 0.97 means 97% of the variation in scores is explained by study hours."
- **R-squared (r²):** The proportion of variance in y explained by the model. `r² = r × r`. If r = 0.90, then r² = 0.81 — 81% of the variation is explained.
- Desmos: Fit a regression line to student-entered data. Adjust points and watch the line shift.
- Practice: 6 problems — fit regression lines (by hand for small datasets, by software for larger ones), interpret slope, intercept, and R-squared.

**TEKS:** §111.43(c)(7)

#### Lesson 6.8 — Residuals and Predictions (1.8 hrs)
**Math Models Focus:** Evaluating model quality and making predictions
**Activity:**
- **Residual:** `residual = observed y - predicted ŷ`. A positive residual means the model underpredicted. Negative means overpredicted.
- **Residual plot:** Plot residuals vs. x. If the linear model is appropriate, the residual plot should show random scatter (no pattern). A curved pattern means a linear model is a poor fit.
- RStudio:
```r
model <- lm(score ~ hours)
residuals <- resid(model)

plot(hours, residuals, pch = 19, col = "darkred",
     xlab = "Study Hours", ylab = "Residual",
     main = "Residual Plot")
abline(h = 0, lty = 2, col = "gray")
```
- **Interpolation vs. extrapolation:**
  - Interpolation: Predicting within the range of the data. Generally reliable.
  - Extrapolation: Predicting beyond the data. Dangerous — the pattern may not continue.
  - Example: The study-hours model predicts that 20 hours of study yields a score of 150. But exam scores cap at 100. Extrapolation fails.
- Connection to Unit 4: Vehicle depreciation extrapolation — the exponential model predicts a 20-year-old car is worth $800, but maybe it's a classic and worth $15,000. Models have limits.
- Practice: 6 problems — compute residuals, create residual plots, identify interpolation vs. extrapolation, and evaluate model appropriateness.

**TEKS:** §111.43(c)(7)

---

### Week 3: Misleading Statistics and the Policy Brief (≈8.3 hours)

#### Lesson 6.9 — Misleading Statistics and Data Ethics (2 hrs)
**Math Models Focus:** Recognizing and avoiding statistical manipulation
**Activity:**
- Statistics can be used to inform or to deceive. This lesson teaches students to spot the difference.
- **Misleading graph techniques:**
  1. Truncated y-axis: Starting the y-axis above zero makes small differences look enormous.
  2. Manipulated scale: Unequal intervals on axes.
  3. Cherry-picked time frame: Showing only the period that supports your argument.
  4. 3D effects and pictographs: Distort perceived proportions.
- RStudio lab: Create an honest graph and a misleading graph from the same data:
```r
# Same data, two presentations
year <- 2020:2025
revenue <- c(500, 510, 520, 535, 545, 560)

par(mfrow = c(1, 2))

# Honest version
plot(year, revenue, type = "b", pch = 19, col = "darkblue",
     ylim = c(0, 600), xlab = "Year", ylab = "Revenue (millions)",
     main = "Honest: Revenue Growth")

# Misleading version (truncated y-axis)
plot(year, revenue, type = "b", pch = 19, col = "darkred",
     ylim = c(495, 565), xlab = "Year", ylab = "Revenue (millions)",
     main = "Misleading: 'Explosive' Growth")
```
- **Other deceptions:**
  - Using mean instead of median for skewed data (average salary inflated by CEO pay).
  - Confusing correlation with causation ("People who eat breakfast earn more" — but correlation is driven by socioeconomic factors).
  - Reporting relative risk without base rates ("Drug doubles your risk!" — from 1 in 10,000 to 2 in 10,000).
  - Small sample sizes ("4 out of 5 dentists" — surveyed 5 dentists).
- Case studies: Students analyze 4 real misleading graphs and statistics from news sources. For each, identify the deception and create an honest alternative.
- Discussion: Is it ever acceptable to simplify data for a general audience? Where is the line between simplification and deception?
- Practice: 6 problems identifying misleading techniques and correcting them.

**TEKS:** §111.43(c)(2)

#### Lesson 6.10 — Communicating with Data (1.5 hrs)
**Math Models Focus:** Writing clear, evidence-based data arguments
**Activity:**
- The policy brief format:
  1. **Question:** What social or economic question are you investigating?
  2. **Data source:** Where did the data come from? How was it collected? What are its limitations?
  3. **Descriptive statistics:** Summarize the key variables (center, spread, distribution shape).
  4. **Visualizations:** At least 2 well-designed graphs that reveal patterns.
  5. **Analysis:** Regression, correlation, comparison of groups — whatever is appropriate.
  6. **Finding:** State the main finding clearly, supported by specific numbers.
  7. **Recommendation:** What action should be taken, based on the evidence?
  8. **Limitations:** What can't the data tell you? What are the confounds?
- Model example: The teacher presents a short policy brief analyzing whether higher teacher pay correlates with student performance across states. Students critique it: Is the data source credible? Are the visualizations honest? Does the analysis support the conclusion? Are limitations acknowledged?
- Writing practice: Students write a 1-paragraph data argument using a provided dataset (e.g., "Students who slept more than 7 hours scored, on average, 12 points higher on the exam (mean = 84 vs. 72, n = 45, r = 0.64). This moderate positive correlation suggests sleep duration is associated with exam performance, though other factors such as study habits may confound this relationship.")
- Peer review: Exchange paragraphs and evaluate for clarity, evidence, and honesty.

**TEKS:** §111.43(c)(2), §111.43(c)(7)

#### Lesson 6.11 — Data-Driven Policy Brief Workshop (Day 1) (2.5 hrs)
**Activity:**
- Students begin the **Data-Driven Policy Brief**. Requirements:
  1. **Dataset:** Choose a real, publicly available dataset. Suggested sources:
     - Census Bureau (population, income, housing)
     - Bureau of Labor Statistics (employment, wages)
     - CDC WONDER (health data)
     - Texas Education Agency (school performance)
     - City of Houston Open Data Portal
     - World Bank (global development indicators, connects to S600)
     - Any dataset with at least 30 observations and 2+ quantitative variables.
  2. **Question:** Formulate a specific, answerable question. Examples:
     - Does higher education spending correlate with graduation rates across Texas school districts?
     - Is there a relationship between neighborhood income and air quality in Houston?
     - Do countries with higher healthcare spending have longer life expectancy?
  3. **Full analysis in RStudio:**
     - Load and clean the data.
     - Compute descriptive statistics (mean, median, SD, IQR).
     - Create at least 3 visualizations (histogram, box plot, scatter plot with regression line).
     - Fit a regression model. Report slope, intercept, r, r², and interpret.
     - Create a residual plot and assess model appropriateness.
     - Compute z-scores for notable data points.
  4. **Written brief (2–3 pages):**
     - Introduction: the question and why it matters.
     - Data source and methods: where the data came from and how it was analyzed.
     - Findings: key statistics and what the visualizations reveal.
     - Policy recommendation: what action the data supports.
     - Limitations: biases, confounds, and what the data cannot prove.
  5. **Presentation slide deck (4–5 slides):** Question, key visualization, main finding, recommendation.
- Workshop time: dataset selection, loading data into R, initial exploration and cleaning.

#### Lesson 6.12 — Data-Driven Policy Brief Workshop (Day 2) (2 hrs)
**Activity:**
- Continued workshop: Students complete their RStudio analysis, finalize visualizations, and write the policy brief.
- RStudio template to guide the analysis:
```r
# ---- Load Data ----
data <- read.csv("my_dataset.csv")
str(data)
summary(data)

# ---- Descriptive Statistics ----
cat("Mean of Y:", mean(data$y_var, na.rm = TRUE), "\n")
cat("Median of Y:", median(data$y_var, na.rm = TRUE), "\n")
cat("SD of Y:", sd(data$y_var, na.rm = TRUE), "\n")

# ---- Visualizations ----
par(mfrow = c(2, 2))

# Histogram of key variable
hist(data$y_var, col = "steelblue", main = "Distribution of Y",
     xlab = "Y Variable")

# Box plot comparison
boxplot(y_var ~ group_var, data = data, col = "lightcoral",
        main = "Y by Group")

# Scatter plot with regression
plot(data$x_var, data$y_var, pch = 19, col = "darkblue",
     xlab = "X Variable", ylab = "Y Variable",
     main = paste("r =", round(cor(data$x_var, data$y_var, use = "complete"), 3)))
model <- lm(y_var ~ x_var, data = data)
abline(model, col = "red", lwd = 2)

# Residual plot
plot(data$x_var, resid(model), pch = 19, col = "darkred",
     xlab = "X Variable", ylab = "Residual", main = "Residual Plot")
abline(h = 0, lty = 2)

# ---- Model Summary ----
summary(model)
```
- Peer review: Students exchange drafts. Reviewers check:
  - Is the question clear and specific?
  - Are the visualizations honest and labeled correctly?
  - Does the regression analysis support the conclusion?
  - Are limitations acknowledged?
- Teacher check-ins: Common issues — using a dataset that's too small, making causal claims from correlational data, unlabeled axes, missing units.

#### Lesson 6.13 — Presentations, Assessment & Course Reflection (0.3 hrs + 1.5 hrs)
**Activity:**
- Student presentations: Each student presents their Data-Driven Policy Brief (5 minutes + 2 minutes Q&A). Scoring:
  - Statistical accuracy and completeness (30%)
  - Quality of visualizations (20%)
  - Clarity of written brief (20%)
  - Strength of evidence-based recommendation (15%)
  - Acknowledgment of limitations (15%)
- Unit checkpoint quiz: Sampling methods and bias, descriptive statistics, normal distribution and z-scores, correlation and regression interpretation, residuals, misleading statistics (25 minutes).
- Course reflection: "What is the most important thing you learned about using mathematics to make decisions? How will you use data differently in your life?"
- Portfolio assembly: Students compile their best work from each M300 unit — financial plan (Unit 1), loan analysis (Unit 2), insurance evaluation (Unit 3), depreciation report (Unit 4), probability simulation (Unit 5), and policy brief (Unit 6).

---

## Unit 6 Assessment Overview

| Assessment | Type | Points |
|------------|------|--------|
| Checkpoint Quiz: Data Analysis & Statistics | Individual | 25 |
| Data Collection & Bias Practice | Practice | 15 |
| Descriptive Statistics Practice | Practice | 15 |
| Histogram & Box Plot Lab | Lab | 15 |
| Normal Distribution & Z-Score Practice | Practice | 20 |
| Correlation & Regression Lab (RStudio) | Lab | 25 |
| Residual Analysis Practice | Practice | 15 |
| Misleading Statistics Case Studies | Lab | 15 |
| Data-Driven Policy Brief | Project | 55 |
| **Total** | | **200** |

## Key Vocabulary

data collection, census, sample survey, observational study, experiment, simple random sample, stratified sample, cluster sample, convenience sample, sampling bias, response bias, nonresponse bias, confounding variable, mean, median, mode, range, interquartile range (IQR), standard deviation, variance, five-number summary, histogram, box plot, scatter plot, normal distribution, bell curve, 68-95-99.7 rule, z-score, percentile, standardization, correlation, correlation coefficient (r), positive correlation, negative correlation, linear regression, least-squares line, slope, intercept, R-squared, residual, residual plot, interpolation, extrapolation, correlation vs. causation, spurious correlation, misleading graph, truncated axis, cherry-picking, policy brief
