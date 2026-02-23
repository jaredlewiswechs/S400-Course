# R, RStudio & GitHub Setup Guide — S700

S700 students arrive with the full R stack from S400–S600. The primary new tool is **GitHub** for version control and **knitr** for reproducible document generation.

## New Tools for S700

### Git and GitHub

**Git** is version control software. **GitHub** is a platform that hosts Git repositories online.

#### Installation

1. **Git:** Download from https://git-scm.com. Install with default settings.
   - On Mac: May already be installed. Test with `git --version` in Terminal.
   - On Chromebook/RStudio Cloud: Pre-installed.
2. **GitHub Account:** Create at https://github.com (free).
3. **Configure Git in RStudio:** Tools → Global Options → Git/SVN. Set the path to Git executable.
4. **Configure identity:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@school.edu"
```

#### Creating the Project Repository

1. On GitHub: Click **New Repository**. Name it `s700-brief-lastname`.
2. Check "Add a README file." Set to Private.
3. In RStudio: File → New Project → Version Control → Git. Paste the repository URL.
4. This creates a local copy linked to GitHub.

#### Daily Workflow

```bash
# After making changes:
git add -A                              # Stage all changes
git commit -m "Descriptive message"     # Commit with a message
git push                                # Push to GitHub
```

Or use the RStudio Git pane: Stage files → Commit → Push.

#### Commit Message Convention

Good: `"Add regression analysis for education spending model"`
Good: `"Fix missing data handling in cleaning script"`
Bad: `"updated stuff"`
Bad: `"asdf"`

### knitr for Reproducible Documents

`knitr` converts R Markdown to HTML or PDF. Students have used it since S500, but S700 demands professional-quality output.

#### PDF Output (Optional but Recommended)

For PDF output, students need LaTeX:
```r
install.packages("tinytex")
tinytex::install_tinytex()
```

Then in the R Markdown YAML header:
```yaml
output:
  pdf_document:
    toc: true
    number_sections: true
```

#### HTML Output (Default)

```yaml
output:
  html_document:
    toc: true
    toc_float: true
    theme: flatly
    code_folding: hide
```

### Additional Packages

```r
# Most packages are already installed from S400-S600. Add:
install.packages(c(
  "tinytex",      # LaTeX for PDF output (optional)
  "broom",        # Tidy model output (if not already)
  "kableExtra",   # Enhanced table formatting
  "bookdown"      # Cross-referencing figures/tables (optional)
))
```

## Project Folder Structure

```
s700-brief-lastname/
├── README.md                    # Project description
├── data/
│   ├── raw/                     # Untouched original data files
│   └── clean/                   # Cleaned, analysis-ready files
├── scripts/
│   ├── data_acquisition.R       # How data was obtained
│   ├── data_cleaning.R          # Cleaning and transformation
│   ├── data_joining.R           # Merging multiple sources
│   ├── analysis_descriptive.R   # EDA and descriptive stats
│   ├── analysis_inferential.R   # Hypothesis tests
│   ├── analysis_regression.R    # Regression models
│   └── analysis_visualizations.R # Publication-quality figures
├── docs/
│   ├── research_proposal.Rmd    # Phase 1 deliverable
│   ├── data_quality_report.Rmd  # Phase 2 deliverable
│   └── analysis_summary.Rmd     # Phase 3 deliverable
├── brief/
│   ├── policy_brief.Rmd         # THE deliverable
│   ├── defense_slides.Rmd       # Presentation
│   └── figures/                 # Exported high-res figures
├── portfolio/
│   ├── portfolio.Rmd            # Compiled portfolio
│   └── reflective_essay.Rmd     # Final reflection
└── .gitignore                   # Exclude large data files if needed
```

## .gitignore Template

```
# Data files (large files shouldn't be on GitHub)
data/raw/*.csv
data/raw/*.xlsx
data/raw/*.zip

# Keep clean data for reproducibility
# (or exclude it too if files are very large)

# R artifacts
.Rhistory
.RData
.Rproj.user/

# OS files
.DS_Store
Thumbs.db

# Rendered output (can be regenerated)
*.html
*.pdf
```

**Note:** If data files are small (<50MB), they can be included in the repository. If large, include only the acquisition script so someone can reproduce the download.

## Verifying the Full Stack

```r
# This script tests every major package used across S400-S700
library(tidyverse)     # S400+
library(ggplot2)       # S400+
library(fredr)         # S400+
library(sf)            # S500+
library(leaflet)       # S500+
library(tidycensus)    # S500+
library(httr)          # S500+
library(jsonlite)      # S500+
library(gt)            # S500+
library(wbstats)       # S600+
library(igraph)        # S600+
library(rnaturalearth) # S600+
library(broom)         # S600+
library(scales)        # S400+
library(patchwork)     # S400+

cat("All packages loaded successfully. Ready for S700.\n")
```

## GitHub Grading

Teachers should have read access to all student repositories. GitHub provides:
- **Commit history:** Evidence of sustained work (not last-minute cramming).
- **Diff view:** See exactly what changed in each commit.
- **File history:** Track the evolution of any file.
- **Issues:** Can be used for teacher feedback (optional).

**Minimum commit expectations by phase:**
| Phase | Minimum Commits |
|-------|----------------|
| 1 (Problem Scoping) | 5 |
| 2 (Data) | 10 |
| 3 (Analysis) | 15 |
| 4 (Brief) | 20 |
| 5 (Defense) | 5 |
| 6 (Portfolio) | 5 |
| **Total** | **60** |
