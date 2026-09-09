---
name: 09-qa-test-report-generator
description: Generates structured QA test reports from provided test execution results, defects, coverage information, risks, and release criteria without inventing test results, metrics, defects, or release decisions.
---

# QA Test Report Generator

## Purpose

The purpose of this Skill is to transform provided QA testing information into a structured test report that communicates:

- what was tested;
- what was not tested;
- test results;
- defects found;
- test coverage;
- risks;
- blocked areas;
- remaining concerns;
- release readiness based only on provided evidence.

The Skill helps QA engineers communicate testing results clearly to the team and stakeholders.

---

# Core Principle

The report must be evidence-based.

Use only information explicitly provided by the user.

Do not invent:

- test execution results;
- pass/fail numbers;
- defect counts;
- severity;
- priorities;
- coverage percentages;
- environments;
- browsers;
- devices;
- test data;
- release criteria;
- business impact;
- release decisions.

If information is missing, explicitly identify it as missing.

---

# Input

The Skill may receive:

- test execution results;
- test cases;
- test scenarios;
- test coverage information;
- requirements;
- defect reports;
- blocked tests;
- failed tests;
- passed tests;
- test environment;
- build/version;
- release criteria;
- known risks;
- regression results;
- exploratory testing results.

The Skill may work with incomplete information.

---

# Report Scope

The report should summarize the testing information provided.

It should not create new testing evidence.

For example:

If the user provides:

> 20 tests executed, 18 passed, 2 failed.

The report may state:

> 20 tests were executed: 18 passed and 2 failed.

If the user provides only:

> Login testing completed successfully.

The report must NOT invent:

- number of tests;
- pass percentage;
- browsers tested;
- devices;
- environments;
- defect count.

---

# Test Result Classification

Use the following categories when applicable:

## Passed

The provided evidence indicates that the test passed.

## Failed

The provided evidence indicates that the test failed.

## Blocked

The test could not be completed because of a blocking condition.

## Not Executed

The test was planned or provided but execution did not occur.

## Unknown

The execution status cannot be determined from the provided information.

---

# Defect Reporting

When defects are provided, summarize:

- defect ID;
- title;
- severity;
- priority;
- affected area;
- status;
- relationship to testing results.

Do not modify defect severity or priority unless explicitly requested.

Do not invent defect information.

---

# Test Coverage

If coverage information is provided, summarize:

- requirements covered;
- scenarios covered;
- test cases executed;
- areas not covered;
- areas with incomplete coverage.

If coverage metrics are provided, report them exactly.

Do not calculate or invent coverage percentages unless sufficient numerical data is explicitly provided.

---

# Metrics

The Skill may calculate metrics only when the required data is explicitly available.

For example:

If:

- 100 tests executed;
- 90 passed;
- 10 failed.

The Skill may calculate:

- Pass rate = 90%;
- Fail rate = 10%.

Do not calculate metrics when required data is missing.

Never invent metrics.

---

# Release Readiness

The Skill may provide a release recommendation only when sufficient evidence and release criteria are available.

Possible statuses:

## GO

Provided evidence satisfies the stated release criteria.

## NO-GO

Provided evidence violates stated release criteria or identifies blocking conditions.

## CONDITIONAL GO

Some risks or unresolved issues remain, but the available evidence may support release under explicitly stated conditions.

## CANNOT DETERMINE

There is insufficient information to make a release recommendation.

Do not make a release decision based on assumptions.

---

# Risk Assessment

Summarize risks based only on provided evidence.

Consider:

- failed tests;
- blocked tests;
- unresolved critical/high defects;
- uncovered requirements;
- incomplete regression;
- environment limitations;
- known technical risks.

Do not invent risk severity.

If business impact is unknown, state:

> Business impact cannot be determined from the provided information.

---

# Environment

Report environment information only when provided.

Examples:

- build/version;
- staging;
- production-like environment;
- browser;
- operating system;
- device;
- database;
- API environment.

Do not invent environment details.

---

# Test Scope

Clearly distinguish:

## Tested

Functionality for which execution evidence is provided.

## Not Tested

Functionality explicitly identified as not tested.

## Blocked

Functionality that could not be tested because of a stated blocker.

## Unknown

Functionality for which testing status was not provided.

Do not treat "not mentioned" as "not tested".

---

# Traceability

When identifiers are provided, preserve them.

Examples:

- Requirement ID;
- Test Scenario ID;
- Test Case ID;
- Defect ID.

Use these references in the report when possible.

Do not invent IDs.

---

# Hallucination Prevention

Follow these rules strictly:

1. Use only provided information.
2. Do not invent execution results.
3. Do not invent defects.
4. Do not invent severity.
5. Do not invent priority.
6. Do not invent test counts.
7. Do not invent coverage.
8. Do not invent environments.
9. Do not invent release criteria.
10. Do not invent business impact.
11. Do not convert missing information into negative results.
12. Do not assume that unmentioned tests were not executed.
13. Clearly distinguish facts from interpretation.
14. Clearly identify missing information.
15. Clearly identify when release readiness cannot be determined.

---

# Review Process

For every report:

1. Read all provided testing information.
2. Identify the test scope.
3. Identify executed tests.
4. Classify test results.
5. Summarize failed tests.
6. Summarize blocked tests.
7. Summarize defects.
8. Review provided coverage information.
9. Identify untested or unknown areas.
10. Summarize risks.
11. Review release criteria when provided.
12. Determine release readiness only when evidence supports it.
13. Identify missing information.
14. Generate the final structured report.

---

# Output Format

Always use the following structure.

# QA Test Report

## 1. Test Summary

### Build / Version

Provide if available.

### Test Environment

Provide if available.

### Test Period

Provide if available.

### Test Objective

Summarize the testing objective.

---

## 2. Test Scope

### Tested

List functionality explicitly confirmed as tested.

### Not Tested

List functionality explicitly identified as not tested.

### Blocked

List functionality blocked by provided blockers.

### Unknown

List areas where testing status cannot be determined.

---

## 3. Test Execution Summary

| Metric | Result |
|---|---:|
| Tests Executed | |
| Passed | |
| Failed | |
| Blocked | |
| Not Executed | |
| Pass Rate | |

Use only metrics supported by the provided information.

---

## 4. Test Results

| Test ID | Test / Scenario | Status | Notes |
|---|---|---|---|
| | | Passed / Failed / Blocked / Not Executed / Unknown | |

---

## 5. Defects

| Defect ID | Title | Severity | Priority | Status | Impact |
|---|---|---|---|---|---|
| | | | | | |

Only include provided defect information.

---

## 6. Test Coverage

Summarize:

- requirements covered;
- scenarios covered;
- test cases covered;
- uncovered areas;
- incomplete coverage.

If coverage cannot be determined, state so explicitly.

---

## 7. Risks

| Risk | Evidence | Impact | Status |
|---|---|---|---|
| | | | |

Do not invent impact when it was not provided.

---

## 8. Blockers

List current testing blockers.

If none were provided:

> No blockers were reported in the provided information.

Do not interpret missing information as proof that no blockers exist.

---

## 9. Release Readiness

Status:

GO / NO-GO / CONDITIONAL GO / CANNOT DETERMINE

### Rationale

Explain the decision using only provided evidence.

If release criteria were not provided and evidence is insufficient:

> Release readiness cannot be determined from the provided information.

---

## 10. Open Questions

List unresolved questions that affect:

- test completeness;
- risk assessment;
- release readiness;
- interpretation of results.

---

## 11. QA Recommendation

Provide a concise recommendation based only on the evidence.

Clearly distinguish:

- confirmed facts;
- risks;
- limitations;
- required actions.

---

# Final Validation

Before producing the final report, verify that:

- all reported results are supported by evidence;
- no tests were invented;
- no defects were invented;
- no metrics were invented;
- no coverage was invented;
- no environment information was invented;
- release readiness is evidence-based;
- unknown information is clearly identified;
- missing information is not treated as a failure;
- provided IDs are preserved;
- the report follows the required structure.