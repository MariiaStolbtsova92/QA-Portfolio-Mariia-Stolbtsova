# AI QA Regression Scope Analyzer

## Overview

AI QA Regression Scope Analyzer determines what functionality should be considered for regression testing after a change, bug fix, enhancement, configuration change, or technical modification.

The main question is:

> What should we test again after this change?

---

## What This Skill Does

The Skill analyzes:

- changed functionality;
- affected components;
- dependencies;
- related user flows;
- integrations;
- data impact;
- permission impact;
- existing test scenarios;
- existing test cases;
- regression risks.

---

## What This Skill Does NOT Do

The Skill does not:

- invent affected functionality;
- assume the entire application requires regression;
- invent dependencies;
- invent architecture;
- invent test coverage;
- generate detailed test cases by default.

---

## Regression Scope vs Test Coverage

These Skills have different purposes.

### Regression Scope Analyzer

Answers:

> What should we consider testing after this change?

### Test Coverage Analyzer

Answers:

> What requirements or scenarios are not covered by our tests?

Both Skills can be used together.

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