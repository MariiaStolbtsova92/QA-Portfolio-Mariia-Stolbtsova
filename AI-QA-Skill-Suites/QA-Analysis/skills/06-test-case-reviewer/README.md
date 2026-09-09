# AI QA Test Case Reviewer

## Overview

AI QA Test Case Reviewer analyzes existing test cases and determines whether they are clear, complete, executable, testable, traceable, and consistent with the available requirements and scenarios.

The main question answered by this Skill is:

> Are these test cases written well enough to execute and trust?

---

## What This Skill Does

The Skill reviews:

- test case structure;
- test steps;
- expected results;
- preconditions;
- test data;
- traceability;
- consistency;
- testability;
- repeatability;
- independence;
- maintainability.

---

## What This Skill Does NOT Do

This Skill does not primarily analyze overall test coverage.

Use:

`05 Test Coverage Analyzer`

to answer:

> What have we forgotten to test?

Use this Skill to answer:

> Are the test cases we already have written correctly?

---

## Recommended Workflow

```text
01 Requirements Reviewer
        ↓
02 Test Plan Generator
        ↓
03 Test Scenario Generator
        ↓
04 Test Case Generator
        ↓
05 Test Coverage Analyzer
        ↓
06 Test Case Reviewer