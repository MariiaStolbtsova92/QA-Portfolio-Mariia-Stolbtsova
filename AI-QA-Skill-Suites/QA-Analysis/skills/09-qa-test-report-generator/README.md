# AI QA Test Report Generator

## Overview

AI QA Test Report Generator transforms provided testing information into a structured QA test report.

It answers:

> What was tested, what failed, what risks remain, and are we ready to release?

---

## What This Skill Does

The Skill can summarize:

- test execution;
- passed tests;
- failed tests;
- blocked tests;
- defects;
- test coverage;
- regression results;
- risks;
- blockers;
- release readiness.

---

## What This Skill Does NOT Do

The Skill does not:

- invent test results;
- invent defects;
- invent metrics;
- invent coverage;
- invent environments;
- invent release criteria;
- make unsupported release decisions.

---

## Release Readiness

The Skill uses four possible statuses:

### GO

The provided evidence satisfies the provided release criteria.

### NO-GO

The evidence violates release criteria or contains blocking conditions.

### CONDITIONAL GO

Release may be possible under explicitly stated conditions.

### CANNOT DETERMINE

There is insufficient information to make a release recommendation.

---

## Important Rule

Missing information does not mean failure.

For example:

If the user provides:

> Login testing passed.

The Skill must NOT report:

> 100% of tests passed.

It must report only the provided result.

---

## Metrics

Metrics can only be calculated when sufficient numerical information is provided.

Example:

100 tests executed:

- 90 passed;
- 10 failed.

The Skill may calculate:

- Pass rate: 90%;
- Fail rate: 10%.

---

## Test Statuses

The Skill recognizes:

- Passed;
- Failed;
- Blocked;
- Not Executed;
- Unknown.

---

## Recommended Workflow

```text
Requirements
     ↓
Test Plan
     ↓
Test Scenarios
     ↓
Test Cases
     ↓
Coverage Analysis
     ↓
Test Case Review
     ↓
Bug Review
     ↓
Regression Scope
     ↓
TEST REPORT