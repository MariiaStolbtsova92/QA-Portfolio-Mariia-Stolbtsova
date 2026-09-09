---

name: 03-playwright-test-agent
description: Generates a Playwright test using 01-playwright-test-generator and then reviews the generated test using 02-playwright-test-reviewer. Does not execute the test or automatically modify the generated code.
---

# Playwright Test Agent

## Purpose

Create a Playwright test and have a second Skill review it against the requirement.

The goal is to simulate a simple QA workflow:

**Generate → Review → Final Verdict**

Do not execute the test.

## Workflow

### Step 1 — Generate

Use `01-playwright-test-generator` with the user's:

* requirement;
* test scenario;
* URL;
* selectors;
* test data;
* expected results;
* other provided technical information.

Use only information provided by the user.

If required technical information is missing, do not invent it.

### Step 2 — Review

Pass the following to `02-playwright-test-reviewer`:

* original requirement;
* generated Playwright test;
* any relevant test scenario or technical information.

The reviewer must evaluate whether the generated test correctly verifies the requirement and whether the Playwright implementation has meaningful issues.

### Step 3 — Final Verdict

Present the generated test, review result, and final verdict.

Do not automatically modify or regenerate the test.

The user will decide whether the generated code should be changed.

## Important Rules

* Do NOT execute the Playwright test.
* Do NOT open a browser.
* Do NOT run commands.
* Do NOT perform additional execution checks.
* Do NOT automatically fix the generated test.
* Do NOT start another generation/review cycle.
* Do NOT invent missing selectors, URLs, test data, application behavior, or technical details.
* Keep the workflow to exactly one generation and one review.
* The reviewer must evaluate the test against the requirement, not only its Playwright syntax.
* A test passing code review does not mean that it has been executed.

## Output

Keep the result concise.

### 1. Generated Test

Show the Playwright code produced by `01-playwright-test-generator`.

### 2. Review

Show the result from `02-playwright-test-reviewer`.

Include only meaningful issues or observations.

### 3. Final Verdict

Use one of:

* `APPROVED`
* `APPROVED WITH OBSERVATIONS`
* `NEEDS IMPROVEMENT`
* `CANNOT BE DETERMINED`

Briefly explain the verdict.

If there are issues, do not rewrite the code. State what should be changed.

## Final Validation

Before returning the result, verify:

* exactly one generation was performed;
* exactly one review was performed;
* the test was not executed;
* no automatic code modification was performed;
* review is based on the provided requirement and generated code;
* no technical details were invented;
* output is concise and useful for manual QA evaluation.
