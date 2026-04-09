# WebR Learning Suite

A standalone in-browser web app for learning R fundamentals and executing custom R code through [WebR](https://webr.r-wasm.org/).

## Features

- Built-in lesson path with progressive R examples.
- Browser-based R editor and code runner (no local R install required).
- Console output panel for instant feedback.
- Local snippet saving/loading using browser storage.
- Fully static app: open with any simple web server.

## Run locally

From the repository root:

```bash
cd webr-learning-suite
python3 -m http.server 8080
```

Then open: <http://localhost:8080>

## Notes

- WebR is loaded from `https://webr.r-wasm.org/latest/webr.mjs`.
- Snippets are stored in `localStorage` under the key `webr-learning-suite-snippets`.
