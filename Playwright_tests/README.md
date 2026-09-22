# Playwright Sign-Up Form Automation

 E2E UI tests for the registration form on [qauto.forstudy.space](https://qauto.forstudy.space/), built with Playwright + TypeScript using the Page Object Model.

## Tech stack

Playwright · TypeScript · Node.js

## Structure

```
├── pom/
│   ├── pages/HomePage.ts      # navigation, opening the sign-up form
│   └── forms/SignUpForm.ts    # form fields, validation triggers, error checks
├── tests/
│   ├── registration.spec.ts    # UI tests
│   └── api-signup.spec.ts      # API tests
├── playwright.config.ts
└── package.json
```

Locators and interactions live in `pom/`, test scenarios and assertions live in `tests/` — a UI change only needs a fix in one place.

## What's covered

**UI**
- Name / Last name — required, invalid characters, length limits
- Email — required, invalid format
- Password — required, complexity rules
- Re-enter password — required, mismatch check
- Register button — disabled until the form is valid
- Successful registration — full happy path
- Invalid field shows a red border

**API** (`/api/auth/signup`)
- Successful signup, including cleanup of the created account
- Validation error when a required field (email) is missing
- Validation error on password mismatch

## Getting started

```bash
git clone <this-repo-url>
cd Playwright_tests
npm install
npx playwright install
```

## Running tests

```bash
npm test              # all tests, headless, all browsers
npm run test:headed   # visible browser
npm run test:ui       # Playwright UI Mode (best for debugging)
npm run report        # open last HTML report
```

Single browser only:
```bash
npx playwright test --project=chromium
```

## Possible improvements

- Test that submitting a fully empty form shows the correct error under each field at once
- Move credentials/base URL to `.env`
- Add CI (GitHub Actions)