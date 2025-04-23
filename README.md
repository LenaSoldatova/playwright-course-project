# QA Automation Coursework Project

![GitHub Workflow Status](https://github.com/LenaSoldatova/playwright-course-project/actions/workflows/tests.yml/badge.svg)

This project was created as part of a QA automation course. It contains end-to-end and API automated tests for [fophelp.pro](https://www.fophelp.pro) using [Playwright](https://playwright.dev/), TypeScript, GitHub Actions, and Allure for reporting.

---

## 🚀 Features

- ✅ E2E tests for UI flows (income, expenses, taxes, reports)
- 🌐 API tests using Playwright's `request` API
- 📄 Reports:
  - [Playwright HTML Report (GitHub Pages)](https://lenasoldatova.github.io/playwright-course-project/)
  - Allure Report (downloadable from Actions)

---

## ⚙️ Setup and Run Tests

### 1. Install dependencies

```bash
npm ci
```

### 2. Install browsers

```bash
npx playwright install --with-deps
```

### 3. Create a `.env` file

Use the example below to set up credentials:

```env
TEST_EMAIL=your-email@example.com
TEST_PASSWORD=yourSecurePassword123
```

### 4. Run all tests

```bash
npx playwright test
```

### 5. View Playwright HTML report

```bash
npx playwright show-report
```

---

## 🧪 Example Test Files

- `login.spec.ts` — login validation scenarios
- `incomings.spec.ts` — add income flow
- `expenses.spec.ts` — add expense flow
- `e2e-tax-flow.spec.ts` — full flow: add income + expense → post tax → check report
- `api/public-api.spec.ts` — currency conversion API test
- `api/github-api.spec.ts` — GitHub API user test

---

## 📊 Reports

### Allure Report (local)

Generate and open:

```bash
npm run allure:report
```

or using `npx`:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

Install globally (if needed):

```bash
npm install -g allure-commandline --save-dev
```

### HTML Report (CI/CD)

- ✅ [View hosted report](https://lenasoldatova.github.io/playwright-course-project/)
- ✅ Download Allure + HTML artifacts from the [Actions tab](https://github.com/LenaSoldatova/playwright-course-project/actions)

---

## 📁 Project Structure

```
.
├── .github/workflows/         # GitHub Actions workflow
├── tests/                     # UI + API test files
├── src/pages/                 # Page Object Model (POM)
├── playwright-report/         # Playwright HTML report
├── allure-results/            # Allure raw results
├── .env                       # Environment secrets (not tracked)
├── README.md
└── package.json
```

---

## 📜 Scripts

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "allure:generate": "allure generate ./allure-results --clean -o ./allure-report",
  "allure:open": "allure open ./allure-report",
  "allure:report": "npm run allure:generate && npm run allure:open"
}
```

---

## ✅ .gitignore Notes

```gitignore
.env
allure-results/
allure-report/
playwright-report/
```

---