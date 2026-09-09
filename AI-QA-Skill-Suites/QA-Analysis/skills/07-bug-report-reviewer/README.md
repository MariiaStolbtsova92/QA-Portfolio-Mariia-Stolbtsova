# AI QA Bug Report Reviewer

## Overview

AI QA Bug Report Reviewer analyzes bug reports and determines whether they are clear, reproducible, actionable, and sufficiently documented for investigation and fixing.

The main question is:

> Is this bug report good enough for another QA engineer or developer to understand and reproduce the problem?

---

## What This Skill Does

The Skill reviews:

- title;
- clarity;
- reproduction steps;
- preconditions;
- test data;
- expected result;
- actual result;
- evidence;
- environment;
- reproducibility;
- severity;
- priority;
- impact;
- traceability.

---

## What This Skill Does NOT Do

The Skill does not:

- invent missing information;
- determine a technical root cause without evidence;
- decide that a bug is a duplicate without evidence;
- invent expected behavior;
- automatically confirm that a reported issue is a real product defect.

---

## Recommended QA Workflow

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
        ↓
07 Bug Report Reviewer
        ↓
08 Regression Scope Analyzer
        ↓
09 QA Test Report Generator