# Regression Scope Analyzer — Stress Tests

## TEST 01 — Direct Change

Change:

The minimum username length changed from 5 to 8 characters.

Affected functionality:

Username validation.

Expected:

Include username validation in regression scope.

Do not automatically include unrelated functionality.

---

## TEST 02 — Bug Fix

Bug:

Checkout fails when a valid postal code is entered.

Fix:

Postal code validation was corrected.

Expected:

Include:

- postal code validation;
- checkout submission.

Do not automatically include profile or registration.

---

## TEST 03 — Explicit Dependency

Change:

Authentication service was modified.

Provided information:

Checkout uses authentication service.

Expected:

Include:

- authentication;
- authenticated checkout.

Mark checkout as supported indirect impact.

---

## TEST 04 — No Dependency Information

Change:

Authentication service was modified.

No other information is provided.

Expected:

Include authentication as direct impact.

Do not claim that checkout, profile, or payments are affected.

Ask for dependency information if required.

---

## TEST 05 — New Feature

Feature:

Users can export reports to CSV.

Affected component:

Reporting module.

Expected:

Include:

- report export;
- reporting functionality explicitly connected to export.

Do not automatically include login, checkout, or payments.

---

## TEST 06 — Existing Test Cases

Change:

Password validation changed from 8 to 10 characters.

Existing tests:

- TC-LOGIN-001 valid password
- TC-LOGIN-002 invalid password

Expected:

Map relevant existing tests to the regression scope.

Do not generate detailed new test cases.

---

## TEST 07 — No Existing Tests Provided

Change:

Login validation changed.

No test cases are provided.

Expected:

State:

"No existing test coverage was provided."

Do NOT state:

"There are no tests."

---

## TEST 08 — Potential Impact

Change:

A shared validation component was modified.

No information is provided about which features use it.

Expected:

Mark dependent functionality as Potential or Unknown.

Ask for dependency information.

Do not invent affected modules.

---

## TEST 09 — Priority Without Business Information

Change:

A minor UI label was changed.

No business impact information is provided.

Expected:

Do not automatically assign Critical or High priority.

Use Unknown where appropriate.

---

## TEST 10 — Technical Change

Change:

Database query implementation was refactored.

No affected functionality is specified.

Expected:

Regression impact cannot be fully determined.

Ask which functionality depends on the changed query.

Do not invent affected screens or workflows.

---

## TEST 11 — Configuration Change

Change:

A configuration value for session timeout was changed.

Expected:

Include session-related behavior only if supported by the information.

Do not automatically include every authenticated feature.

---

## TEST 12 — Historical Defect

Change:

A bug was fixed in checkout payment calculation.

Provided information:

The same calculation was previously responsible for incorrect order totals.

Expected:

Include:

- payment calculation;
- order total calculation.

Do not invent other financial functionality.

---

## TEST 13 — Contradictory Information

Change description says:

"The change affects only login."

Another provided statement says:

"Checkout uses the modified authentication component."

Expected:

Identify the contradiction.

Do not silently choose one interpretation.

---

## TEST 14 — Entire Module Trap

Change:

One validation rule in the profile form was changed.

Expected:

Do not automatically mark the entire profile module as regression scope.

Identify the specific affected validation behavior.

---

## TEST 15 — Hallucination Resistance

Change:

"The search button was renamed."

Expected:

Potential direct scope:

- search UI.

Do not automatically claim impact on:

- search API;
- database;
- performance;
- authorization;
- analytics.

Unless such dependencies are provided.

---

## TEST 16 — Insufficient Information

Change:

"Backend was updated."

Expected:

Status:

BLOCKED or NEEDS CLARIFICATION.

Ask:

- Which backend component?
- What functionality changed?
- Which user flows are affected?
- What dependencies exist?

Do not invent regression scope.