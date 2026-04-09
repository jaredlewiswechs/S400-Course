import { WebR } from "https://webr.r-wasm.org/latest/webr.mjs";

const lessons = [
  {
    title: "1) Basic arithmetic",
    code: `# Basic math in R\n2 + 2\n12 / 3\n5 ^ 2`,
  },
  {
    title: "2) Vectors and summary",
    code: `# Vectors and quick summary\nscores <- c(85, 91, 77, 98, 88)\nmean(scores)\nmedian(scores)\nsummary(scores)`,
  },
  {
    title: "3) Data frame and filtering",
    code: `# Data frame basics\nitems <- data.frame(\n  name = c("Notebook", "Pen", "Backpack", "Snack"),\n  price = c(3.5, 1.2, 28, 2.8),\n  in_stock = c(TRUE, TRUE, FALSE, TRUE)\n)\nitems\nsubset(items, price < 5 & in_stock == TRUE)`,
  },
  {
    title: "4) Quick visualization",
    code: `# Build a simple chart\nx <- 1:10\ny <- x^2\nplot(x, y, type = "b", pch = 19, col = "steelblue", main = "x vs x^2")`,
  },
  {
    title: "5) Mini project challenge",
    code: `# Challenge: edit this data and explore\nbudget <- data.frame(\n  category = c("Food", "Transport", "Phone", "Fun", "Savings"),\n  amount = c(210, 80, 45, 60, 120)\n)\nprint(budget)\nbarplot(budget$amount, names.arg = budget$category, col = "tomato", main = "Monthly Budget")\nsum(budget$amount)`,
  },
];

const snippetStorageKey = "webr-learning-suite-snippets";
let selectedLesson = 0;

const lessonList = document.querySelector("#lesson-list");
const codeInput = document.querySelector("#code-input");
const runButton = document.querySelector("#run-code");
const clearButton = document.querySelector("#clear-output");
const loadExampleButton = document.querySelector("#load-example");
const statusEl = document.querySelector("#status");
const consoleOutput = document.querySelector("#console-output");
const plotOutput = document.querySelector("#plot-output");
const saveSnippetButton = document.querySelector("#save-snippet");
const loadSnippetButton = document.querySelector("#load-snippet");
const deleteSnippetButton = document.querySelector("#delete-snippet");
const snippetSelect = document.querySelector("#snippet-select");

function setStatus(message, state = "") {
  statusEl.textContent = message;
  statusEl.className = `status ${state}`.trim();
}

function addConsole(text) {
  consoleOutput.textContent += `${text}\n`;
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function clearOutput() {
  consoleOutput.textContent = "";
  plotOutput.innerHTML = "";
}

function getSavedSnippets() {
  const raw = localStorage.getItem(snippetStorageKey);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveSnippets(snippets) {
  localStorage.setItem(snippetStorageKey, JSON.stringify(snippets));
}

function refreshSnippetSelect() {
  const snippets = getSavedSnippets();
  snippetSelect.innerHTML = '<option value="">Choose a saved snippet</option>';
  Object.keys(snippets)
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      snippetSelect.appendChild(option);
    });
}

function renderLessons() {
  lessonList.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const item = document.createElement("li");
    item.textContent = lesson.title;
    if (index === selectedLesson) item.classList.add("active");
    item.addEventListener("click", () => {
      selectedLesson = index;
      renderLessons();
      codeInput.value = lessons[selectedLesson].code;
    });
    lessonList.appendChild(item);
  });
}

renderLessons();
codeInput.value = lessons[selectedLesson].code;
refreshSnippetSelect();

let webR;

async function capturePlot() {
  const shelter = await webR.evalR("if (dev.cur() == 1) NULL else { p <- recordPlot(); png(); replayPlot(p); dev.off(); }");
  if (shelter === null) {
    return;
  }

  const files = await webR.FS.readdir("/");
  const pngFiles = files.filter((name) => name.endsWith(".png"));
  if (!pngFiles.length) {
    return;
  }

  const latest = pngFiles[pngFiles.length - 1];
  const data = await webR.FS.readFile(`/${latest}`);
  const blob = new Blob([data], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.alt = "R generated plot";
  img.src = url;
  plotOutput.innerHTML = "";
  plotOutput.appendChild(img);
  await webR.FS.unlink(`/${latest}`);
}

async function initWebR() {
  try {
    webR = new WebR();
    await webR.init();
    setStatus("WebR is ready.", "ready");
    addConsole("WebR initialized successfully.");
  } catch (error) {
    setStatus(`Failed to initialize WebR: ${error.message}`, "error");
    addConsole(error.stack || error.message);
  }
}

loadExampleButton.addEventListener("click", () => {
  codeInput.value = lessons[selectedLesson].code;
});

clearButton.addEventListener("click", clearOutput);

saveSnippetButton.addEventListener("click", () => {
  const name = window.prompt("Name this snippet:");
  if (!name) return;
  const snippets = getSavedSnippets();
  snippets[name] = codeInput.value;
  saveSnippets(snippets);
  refreshSnippetSelect();
  snippetSelect.value = name;
  addConsole(`Saved snippet: ${name}`);
});

loadSnippetButton.addEventListener("click", () => {
  const selected = snippetSelect.value;
  if (!selected) return;
  const snippets = getSavedSnippets();
  if (snippets[selected]) {
    codeInput.value = snippets[selected];
    addConsole(`Loaded snippet: ${selected}`);
  }
});

deleteSnippetButton.addEventListener("click", () => {
  const selected = snippetSelect.value;
  if (!selected) return;
  const snippets = getSavedSnippets();
  delete snippets[selected];
  saveSnippets(snippets);
  refreshSnippetSelect();
  addConsole(`Deleted snippet: ${selected}`);
});

runButton.addEventListener("click", async () => {
  if (!webR) {
    addConsole("WebR is not initialized yet.");
    return;
  }

  clearOutput();
  setStatus("Running code...", "");

  const code = codeInput.value.trim();
  if (!code) {
    setStatus("Add R code before running.", "error");
    return;
  }

  try {
    const output = await webR.evalRString(code);
    if (output?.trim()) {
      addConsole(output);
    } else {
      addConsole("Code executed with no console text.");
    }

    await capturePlot();
    setStatus("Execution complete.", "ready");
  } catch (error) {
    addConsole(error.stack || error.message);
    setStatus("Execution failed. Check the console output.", "error");
  }
});

initWebR();
