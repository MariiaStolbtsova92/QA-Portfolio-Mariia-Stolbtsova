---

name: 01-playwright-test-generator
description: Generates Playwright test scenarios and executable Playwright tests from requirements, acceptance criteria, user flows, and test cases. Uses only provided application behavior, UI information, selectors, URLs, test data, and expected results. Never invents missing technical details.
---

# Playwright Test Generator

## Purpose

Generate Playwright automation from provided QA information.

The Skill supports two tasks:

1. Generate test scenarios suitable for Playwright.
2. Generate Playwright code for a provided scenario or test case.

Do not perform both tasks unless needed.

## Core Principle

Use only information provided by the user or explicitly available in the input.

Never invent:

* application behavior;
* UI elements;
* selectors;
* URLs;
* test data;
* credentials;
* roles;
* API endpoints;
* expected results;
* application states;
* environment configuration.

If required information is missing, do not guess.

## Input

The Skill may receive:

* requirements;
* user stories;
* acceptance criteria;
* user flows;
* manual test cases;
* test scenarios;
* UI descriptions;
* existing Playwright tests.

Optional:

* DOM/HTML;
* screenshots;
* selectors;
* test data;
* URLs;
* environment information.

## Scenario Generation

When the user asks to identify scenarios for automation:

Provide concise scenarios with:

* Scenario ID;
* requirement reference;
* scenario;
* preconditions;
* expected result;
* automation suitability.

Classify suitability as:

* Recommended for Automation
* Possible for Automation
* Better suited for Manual Testing
* Cannot Be Determined

Do not automatically generate Playwright code unless requested.

## Playwright Code Generation

When the user asks to generate a Playwright test:

Generate executable code only when the required technical information is available.

Required information may include:

* page URL or navigation path;
* UI elements and their selectors or reliable locator information;
* test data;
* expected result / assertion criteria.

Use the information provided by the user.

Prefer stable user-facing locators when supported by the provided UI information:

* `getByRole`
* `getByLabel`
* `getByText`
* `getByPlaceholder`
* `getByTestId`

Do not assume that an element has a particular role, label, text, placeholder, or test ID.

### Missing Technical Information

If required information is missing:

Do not invent it.

Instead:

1. Clearly list the missing information.
2. If useful, provide a non-executable template using explicit placeholders such as:

   * `<LOGIN_URL>`
   * `<EMAIL_SELECTOR>`
   * `<PASSWORD_SELECTOR>`
   * `<LOGIN_BUTTON_SELECTOR>`
   * `<DASHBOARD_URL>`

Never present a template as executable code.

## Assertions

Assertions must be directly supported by:

* requirements;
* acceptance criteria;
* test cases;
* provided expected results;
* provided UI behavior.

Do not add assertions for unspecified behavior.

## Test Data

Use only provided test data.

If test data is missing:

* request it when required;
* or use an explicit placeholder.

Never invent credentials, usernames, passwords, IDs, or business values.

## Code Quality

Generated tests should:

* use Playwright Test;
* have clear test names;
* use stable locators when supported;
* use web-first assertions;
* avoid unnecessary hard waits;
* avoid arbitrary timeouts;
* keep tests focused;
* avoid duplicated setup when reusable setup is clearly appropriate.

Do not introduce Page Object Models, fixtures, custom helpers, or other architecture unless the provided context requires it or the user asks for it.

## Output

### When generating a Playwright test

Keep the response concise:

1. Playwright code.
2. Short note only if assumptions or missing information exist.

### When generating scenarios

Provide:

| ID | Scenario | Expected Result | Automation Suitability |
| -- | -------- | --------------- | ---------------------- |

Do not generate Playwright code unless requested.

### Missing Information

List only information that is actually required to complete the requested task.

Do not add generic QA or Playwright recommendations.

## Final Validation

Before returning Playwright code, verify:

* every selector is supported by provided information;
* every URL is supported by provided information;
* every test value is provided or explicitly marked as a placeholder;
* every assertion is supported by expected behavior;
* no application behavior was invented;
* no business rules were invented;
* the code is syntactically coherent;
* executable code is not presented when required information is missing.
