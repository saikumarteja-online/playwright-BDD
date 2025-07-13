# Copilot Instructions for playwright-BDD

## Project Overview
- This is a Playwright + Cucumber BDD automation project using TypeScript.
- Test scenarios are written in `.feature` files (Gherkin syntax) under `src/test/feature/`.
- Step definitions are implemented in TypeScript under `src/test/steps/`.
- Page Object Model (POM) is used: reusable page logic is in `src/pageobj/`.
- Test hooks and fixtures (browser/page/context management) are in `src/hooks/`.
- Helper utilities (date formatting, selectors, etc.) are in `src/helper/`.

## Key Workflows
- **Run all tests:** `npm test` or `npx cucumber-js`
- **Run a specific feature:** `npx cucumber-js src/test/feature/yourfile.feature`
- **Generate Allure report:**
  - After running tests: `npm run allugen`
  - Open report: `npm run alluopen`
- **Step definition generation:**
  - If a step is undefined, Cucumber will print a snippet in the terminal. Copy it to a `.ts` file in `src/test/steps/` and implement it.

## Project Conventions
- All Playwright browser/page/context management is handled in `src/hooks/pagefixture.ts` using Cucumber hooks (`BeforeAll`, `Before`, `After`, `AfterAll`).
- Always access the Playwright `page` via `pageFixture.page`.
- Page objects should use lazy getter methods to access locators, not constructor-initialized fields.
- Attach screenshots to Allure in hooks or steps using `this.attach(await pageFixture.page.screenshot(), 'image/png')`.
- Use `async function (this: IWorld)` for step/hook functions that use `this.attach`.
- Do not use Playwright's native test runner for `.feature` files; always use Cucumber.

## External Integrations
- Allure reporting: results in `allure-results/`, report generated to `allure-report/`.
- No custom test runner or build system; all scripts are in `package.json`.

## Example File Structure
- `src/test/feature/*.feature` — Gherkin scenarios
- `src/test/steps/*.ts` — Step definitions
- `src/pageobj/*.ts` — Page objects
- `src/hooks/pagefixture.ts` — Playwright/Cucumber hooks
- `src/helper/*.ts` — Utility functions

## Troubleshooting
- If steps are not recognized, check that step files are in `src/test/steps/` and exported correctly.
- If browser/process hangs, ensure all Playwright resources are closed in `After`/`AfterAll` hooks.
- If you see `EISDIR` errors, do not use `fs.readFileSync` on directories; use Playwright's screenshot API directly.

---

If you need to update these instructions, review recent changes in the codebase and scripts in `package.json`.
