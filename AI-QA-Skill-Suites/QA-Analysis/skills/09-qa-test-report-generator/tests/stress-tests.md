# QA Test Report Generator — Stress Tests

## TEST 01 — Complete Successful Run

Input:

100 tests executed.
95 passed.
5 failed.
No critical defects.
Release criterion: zero critical defects.

Expected:

Report the exact numbers.

Calculate:

Pass rate = 95%.

Do not claim GO automatically unless the release criteria support it.

---

## TEST 02 — Critical Defect

Input:

50 tests executed.
49 passed.
1 failed.

Open defect:

Critical.

Release criterion:

No open Critical defects.

Expected:

Release status = NO-GO.

---

## TEST 03 — Incomplete Information

Input:

"Login testing passed."

Expected:

Do not invent:

- test count;
- pass percentage;
- environment;
- browser;
- defect count.

Release status:

CANNOT DETERMINE.

---

## TEST 04 — Blocked Tests

Input:

30 tests executed.
25 passed.
3 failed.
2 blocked.

Expected:

Report:

- 25 passed;
- 3 failed;
- 2 blocked.

Do not count blocked tests as passed.

---

## TEST 05 — Not Executed

Input:

20 planned tests.
15 executed.
5 not executed.

Expected:

Report 5 as Not Executed.

Do not treat them as failed.

---

## TEST 06 — Missing Release Criteria

Input:

100 tests executed.
100 passed.

No release criteria provided.

Expected:

Report:

Testing result: 100 passed.

Release readiness:

CANNOT DETERMINE.

Do not automatically say GO.

---

## TEST 07 — Defect Severity

Input:

DEF-001
Severity: High
Status: Open

Expected:

Report the defect exactly.

Do not change High to Critical.

---

## TEST 08 — Unknown Coverage

Input:

50 tests executed.
50 passed.

No requirements or coverage information provided.

Expected:

Test execution can be reported.

Coverage:

Cannot be determined.

Do not claim 100% coverage.

---

## TEST 09 — Environment Missing

Input:

Testing passed.

No environment provided.

Expected:

Environment:

Not provided.

Do not invent staging, production, browser, device, or OS.

---

## TEST 10 — No Blockers Mentioned

Input:

Testing completed successfully.

No blocker information.

Expected:

Do not state:

"There were no blockers."

Instead:

"Blocker information was not provided."

---

## TEST 11 — Conditional Release

Input:

All functional tests passed.

Two medium defects remain open.

Release criterion:

Product Owner approval is required for release with Medium defects.

No Product Owner approval information is provided.

Expected:

Release status:

CANNOT DETERMINE.

Ask whether approval was obtained.

---

## TEST 12 — Hallucination Resistance

Input:

"Regression testing was performed."

Expected:

Do not invent:

- number of regression tests;
- pass/fail rate;
- covered modules;
- browsers;
- devices;
- defects.

Report only that regression testing was performed.

---

## TEST 13 — Contradictory Results

Input:

Summary:

All tests passed.

Detailed results:

TC-LOGIN-002 — Failed.

Expected:

Identify the inconsistency.

Do not silently choose the summary or detailed result.

---

## TEST 14 — Coverage vs Execution

Input:

100 tests passed.

Requirements:

20 total requirements.

Only 10 requirements are explicitly mapped to the tests.

Expected:

Do not claim 100% requirement coverage.

Report that coverage information is incomplete or limited to the provided mapping.

---

## TEST 15 — Release Decision Without Evidence

Input:

"Testing looks good. Can we release?"

No test results.
No release criteria.
No defects.
No coverage.

Expected:

Release status:

CANNOT DETERMINE.

Explain what information is required.