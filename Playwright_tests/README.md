# Playwright Registration Tests — Portfolio Project

![Playwright Tests](https://github.com/MariiaStolbtsova92/QA-Portfolio-Mariia-Stolbtsova/actions/workflows/playwright-registration-tests.yml/badge.svg)

## Project Overview

This portfolio project focuses on automated testing of the sign-up (registration) flow on the QAuto demo website, covering both the UI and the underlying API.
The main goal is to demonstrate practical skills in test automation with Playwright, the Page Object Model, API testing, and CI integration.

## Project Goals

- Automate key validation scenarios of a registration form
- Validate both UI behavior and API responses for the same flow
- Demonstrate a clean, maintainable automation structure (POM)
- Integrate automated tests into a CI pipeline (GitHub Actions)

## Test Object

- **Platform:** QAuto Demo
- **URL:** https://qauto.forstudy.space/

**Modules in Scope:**
- User registration — UI (field validation, form state, happy path)
- User registration — API (`/api/auth/signup`: success, missing fields, password mismatch)

## Tech Stack

Playwright · TypeScript · Node.js · GitHub Actions

## Structure

```
├── pom/
│   ├── pages/HomePage.ts      # navigation, opening the sign-up form
│   └── forms/SignUpForm.ts    # form fields, validation triggers, error checks
├── tests/
│   ├── registration.spec.ts   # UI tests
│   └── api-signup.spec.ts     # API tests
├── playwright.config.ts
└── package.json
```

## Running Tests

```bash
npm install
npx playwright install
npm test              # all tests, headless
npm run test:headed   # visible browser
npm run test:ui       # interactive UI Mode (best for debugging)
npm run report        # view last HTML report
```

Single browser only:
```bash
npx playwright test --project=chromium
```

## Possible Improvements

- Test that submitting a fully empty form shows the correct error under each field at once
- Move credentials/base URL to `.env`