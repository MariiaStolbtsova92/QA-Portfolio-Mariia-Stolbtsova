# AI QA Test Scenario Generator

AI Skill for generating high-level QA test scenarios from software requirements.

## Purpose

This Skill helps QA engineers transform sufficiently defined requirements into structured high-level test scenarios.

It focuses on test analysis rather than detailed test case creation.

The Skill identifies relevant:

* positive scenarios
* negative scenarios
* boundary scenarios
* validation scenarios
* permission scenarios
* security scenarios
* integration scenarios
* state transition scenarios
* data integrity scenarios
* performance scenarios
* compatibility scenarios

Only relevant test dimensions are included.

## Key Principle

The Skill generates test scenarios based only on explicitly provided requirements.

It must not invent:

* business rules
* expected behavior
* validation rules
* test data
* technical limitations
* error messages
* API status codes
* performance thresholds
* supported browsers or devices
* user roles or permissions

When important information is missing, the Skill identifies the gap and creates clarification questions.

## Input

The Skill accepts:

* User Stories
* Software Requirements
* Acceptance Criteria
* Functional Specifications
* Business Rules

Example:

> A username must contain between 5 and 20 characters.

## Output

The Skill produces a structured QA Test Scenario Analysis containing:

1. Requirements
2. Analysis Status
3. Test Scenarios
4. Coverage Summary
5. Missing Information
6. Clarification Questions
7. QA Risks
8. Assumptions
9. Recommended Next Step

## Scenario Format

Each scenario contains:

| Field             | Description                                  |
| ----------------- | -------------------------------------------- |
| ID                | Unique scenario identifier                   |
| Requirement       | Source requirement                           |
| Priority          | High / Medium / Low                          |
| Type              | Positive / Negative / Boundary / etc.        |
| Scenario          | What should be tested                        |
| Expected Behavior | Expected result supported by the requirement |

## Example

### Requirement

> A username must contain between 5 and 20 characters.

### Generated scenarios

| ID     | Priority | Type     | Scenario                                |
| ------ | -------- | -------- | --------------------------------------- |
| TS-001 | High     | Boundary | Username contains 4 characters          |
| TS-002 | High     | Boundary | Username contains exactly 5 characters  |
| TS-003 | High     | Boundary | Username contains exactly 20 characters |
| TS-004 | High     | Boundary | Username contains 21 characters         |

The Skill must not invent additional username rules such as allowed characters unless they are specified in the requirement.

## Handling Incomplete Requirements

Example:

> Users can upload documents.

The Skill should identify missing information such as:

* supported file formats
* maximum file size
* invalid file behavior
* upload failure behavior
* allowed user roles

It should ask clarification questions instead of inventing values.

For example, it must not assume:

> PDF and PNG are supported, with a maximum size of 10 MB.

## Handling Contradictions

If requirements contradict each other, the Skill must identify the contradiction.

Example:

> The account is locked after 5 failed login attempts.

and:

> The account is locked after 10 failed login attempts.

The Skill must not choose one value.

The affected test scenarios should be marked as requiring clarification.

## Test Strategy

The Skill is validated against positive, negative, boundary, incomplete, contradictory, security, compatibility, integration and hallucination-trap requirements.

The validation tests are located in:

`tests/stress-tests.md`

Examples of expected behavior are located in:

`examples/`

## Relationship to Other QA Skills

This Skill is part of the AI QA Skill Suite.

Current workflow:

```text
Requirements
     ↓
01 Requirements Reviewer
     ↓
READY
     ↓
02 Test Scenario Generator
     ↓
High-Level Test Scenarios
```

Future workflow:

```text
Test Scenarios
     ↓
03 Test Case Reviewer
     ↓
04 Test Coverage Analyzer
     ↓
Testing
     ↓
05 Bug Report Reviewer
     ↓
06 Regression Scope Analyzer
```

## Scope

This Skill generates high-level test scenarios.

It does not:

* create detailed step-by-step test cases;
* write automation code;
* execute tests;
* modify application code;
* invent unspecified requirements.

## Author

AI-assisted QA portfolio project.

Focus: Manual QA + AI-assisted test analysis + structured QA workflows.
