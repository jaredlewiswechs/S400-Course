# S700 — Capstone: The Brief

## Course Information

| Field | Detail |
|-------|--------|
| Course Code | S700 |
| Title | Capstone: The Brief |
| Grade Band | 12 |
| Instructional Hours | 180 |
| Credit | 1.0 |
| Subject Area | Social Science — Advanced Studies |
| Social Studies TEKS | Social Studies Advanced Studies §113.46 |
| Math Alignment | Statistics §111.47 (~95%) + Independent Study in Mathematics §111.45 (100%) |
| Statistics TEKS Addressed | §111.47(c)(2)–(7) — functionally complete |
| Independent Study TEKS Addressed | §111.45(c)(2)–(3) |
| Prerequisites | S600 (Global Patterns) |
| Primary Tools | Full RStudio stack, R Markdown, GitHub, knitr |

## Course Description

The culminating course. Students identify a real policy problem, design a research question, acquire and clean their own data, conduct original statistical analysis, write a professional policy brief (3,000–5,000 words in R Markdown), and defend it before an external panel. There are no new statistics concepts — S700 is about applying everything from S400–S600 at a professional level. The course structure mirrors a research process: problem scoping, literature review, data acquisition, methodology design, analysis, writing, revision, and defense. Students use GitHub for version control and knitr for reproducible document generation. The policy brief is a publication-quality deliverable that students can include in college applications, scholarship portfolios, or civic presentations. This course satisfies both Social Studies Advanced Studies and the Independent Study in Mathematics credit through its emphasis on original research methodology.

## Advanced Studies §113.46 Alignment

§113.46 requires students to:
- (c)(1) Identify a research problem in social studies
- (c)(2) Conduct research using primary and secondary sources
- (c)(3) Analyze information using established research methodologies
- (c)(4) Communicate findings in written, oral, and visual forms
- (c)(5) Apply critical-thinking skills to organize and use information

All five strands are satisfied through the capstone brief process.

## Independent Study in Mathematics §111.45 Alignment

§111.45 requires students to:
- (c)(2) Design and execute a research project using mathematical methods
- (c)(3) Communicate mathematical ideas through written and oral forms

Both strands are satisfied through the original statistical analysis, R Markdown report, and panel defense.

## Statistics §111.47 — Cumulative Coverage (~95%)

S700 does not introduce new TEKS but provides the deepest application of all prior coverage:

| TEKS | S700 Application |
|------|-----------------|
| (c)(2) Statistical process | Full cycle: design → collect → analyze → interpret |
| (c)(3) Probability | Conditional probability in research context; independence testing |
| (c)(4) Distributions | Verifying assumptions; normality checks; sampling distributions |
| (c)(5) Confidence intervals | CI for all reported estimates; CI comparison across groups |
| (c)(6) Hypothesis testing | All formal tests; multiple testing awareness; effect sizes |
| (c)(7) Bivariate/multivariate | Multiple regression, logistic regression, model selection |

## Pacing Guide (180 Hours)

S700 is structured as six phases, not units. The course is longer (180 hours, 1.0 credit) to accommodate original research.

| Phase | Title | Hours | Weeks (~8.3 hrs/wk) |
|-------|-------|-------|----------------------|
| 1 | Problem Scoping | 25 | 3 |
| 2 | Data Acquisition & Cleaning | 30 | 3.5 |
| 3 | Analysis Sprint | 35 | 4 |
| 4 | The Brief | 35 | 4 |
| 5 | The Defense | 25 | 3 |
| 6 | Portfolio & Reflection | 30 | 3.5 |
| **Total** | | **180** | **~21** |

## Assessment Structure

S700 is primarily assessed through the capstone project. The grading reflects this:

| Component | Weight | Description |
|-----------|--------|-------------|
| Process Documentation | 15% | Research journal, GitHub commits, weekly check-ins |
| Methodology Review | 10% | Peer-reviewed methodology section (Phase 2–3) |
| Draft Brief | 15% | Complete first draft with analysis (Phase 4) |
| Final Policy Brief | 35% | Publication-quality R Markdown report (3,000–5,000 words) |
| Panel Defense | 15% | Oral defense before external panel |
| Portfolio & Reflection | 10% | Course portfolio and reflective essay |

## Tools

| Tool | Purpose |
|------|---------|
| RStudio | Primary analysis and writing environment |
| R Markdown | Document format — code, output, and narrative in one file |
| knitr | Rendering R Markdown to HTML or PDF |
| GitHub | Version control — track changes, collaborate, submit |
| tidyverse | Data wrangling |
| ggplot2 | Visualization |
| sf / leaflet | Mapping (if geographic) |
| gt / kable | Publication-quality tables |
| broom | Tidy model output |
| All prior packages | Available as needed based on topic |

## GitHub Workflow

Students learn basic Git/GitHub in Phase 1 and use it throughout:

```bash
# Daily workflow
git add -A
git commit -m "Add regression analysis for education spending"
git push
```

- **Repository:** Each student maintains a private GitHub repository for their project.
- **Commits:** Students are expected to commit at least 3 times per week.
- **History:** The commit history serves as a process log — evidence of sustained work.
- **Teacher access:** Teacher has read access to all repositories for monitoring and feedback.
