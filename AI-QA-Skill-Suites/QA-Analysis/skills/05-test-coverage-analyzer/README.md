# AI QA Test Coverage Analyzer

## Overview

AI QA Test Coverage Analyzer reviews existing requirements, test scenarios, and test cases to identify missing or insufficient test coverage.

The main question answered by this Skill is:

> What have we forgotten to test?

The Skill helps QA engineers identify:

- uncovered requirements;
- partially covered requirements;
- missing positive scenarios;
- missing negative scenarios;
- missing boundary coverage;
- missing validation coverage;
- missing permission coverage;
- missing state transition coverage;
- traceability gaps;
- potential QA risks.

---

## What This Skill Does

The Skill compares:

Requirements
↓
Test Scenarios
↓
Test Cases

and identifies gaps between them.

It does not automatically generate a new complete test suite.

Its main purpose is coverage analysis.

---

## Input

You can provide:

- requirements;
- acceptance criteria;
- test scenarios;
- test cases;
- requirement IDs;
- scenario IDs;
- test case IDs.

The more complete the input, the more meaningful the coverage analysis.

---

## Example Input

```text
Requirement ID: REQ-LOGIN-001

Requirement:
The user can log in using a valid username and password.

Scenario ID: TS-LOGIN-001

Scenario:
Verify successful login with valid credentials.

Test Case ID: TC-LOGIN-001

Test Case:
Login with valid username and password.