# NLP Midsem Study Hub

A colourful, multi-page study website for the **EC2 Natural Language Processing** mid-semester examination (30 marks). Built from Dr. Chetana Gavankar's lecture slides (Sessions 1–7).

## What's inside

Each of the seven examinable topics has its own page, split into four colour-coded blocks — **Theory · Intuition · Numerical (worked) · Real-life example** — with diagrams, key formulas (rendered via MathJax) and exam-focus notes.

| # | Topic | Marks |
|---|-------|-------|
| 1 | Introduction & Applications | 4 |
| 2 | Language Models (N-gram) | 4 |
| 3 | Neural LM · LLM · Prompt Engineering | 4 |
| 4 | Vector Semantics | 4 |
| 5 | Word Embeddings | 5 |
| 6 | POS Tagging | 4 |
| 7 | Statistical / ML / Neural POS models | 4 |

A dedicated **`revision.html`** reproduces the exam pattern and provides **3 fully-solved problems per topic (21 total)** with step-by-step solutions, including the SGNS update and a full Viterbi decode.

## Run it

Open `index.html` in any browser — no build step. Math equations load MathJax from a CDN (needs internet on first open).

## Structure

```
index.html              Home / landing
01-introduction.html … 07-pos-models.html   Topic pages
revision.html           Exam pattern + 21 solved problems
styles.css              Shared styling
app.js                  Sidebar nav, mobile menu, MathJax config
```
