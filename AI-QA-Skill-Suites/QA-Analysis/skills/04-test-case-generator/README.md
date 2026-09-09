# AI QA Test Case Generator

AI Skill for converting requirements and high-level test scenarios into detailed, executable QA test cases.

## Purpose

The Skill helps QA engineers transform:

> What should we test?

into:

> How exactly do we test it?

It creates structured test cases containing:

- preconditions;
- test data;
- test steps;
- expected results;
- priority;
- test type;
- requirement traceability.

## Input

The Skill can use:

- requirements;
- user stories;
- acceptance criteria;
- high-level test scenarios;
- test plan information;
- business rules;
- validation rules;
- user roles;
- test data.

## Output

The Skill generates:

1. Test Case Summary
2. Detailed Test Cases
3. Clarifications Required
4. Test Case Generation Status

## Example

### Input

Requirement:

> A username must contain between 5 and 20 characters.

Scenario:

> Verify username length boundaries.

### Output

The Skill should generate test cases for:

- 4 characters;
- 5 characters;
- 20 characters;
- 21 characters.

It must not invent additional username rules.

For example, it must not assume:

> Username may contain only letters.

unless this is explicitly stated.

## Negative Testing

Negative test cases require defined expected behavior.

For example, if the requirement states:

> The system displays an error when an invalid email is entered.

The Skill can create a negative test case.

If the requirement only states:

> The user can register using an email address.

The Skill must not invent the behavior for invalid email addresses.

Instead, it should request clarification.

## Traceability

The Skill maintains traceability where identifiers are available:

Requirement
→ Test Scenario
→ Test Case

Example:

REQ-LOGIN-001
→ TS-LOGIN-001
→ TC-LOGIN-001

Missing identifiers must not be invented.

## Boundary Testing

When measurable limits are provided, the Skill should consider boundary values.

Example:

> Username length: 5–20 characters.

Expected boundary coverage:

- below minimum;
- minimum;
- maximum;
- above maximum.

## Hallucination Prevention

The Skill must not invent:

- error messages;
- UI elements;
- validation rules;
- business rules;
- test data values;
- API responses;
- database behavior;
- priorities;
- technical implementation details.

Missing information must be clearly identified.

## Relationship With Other Skills

This Skill is part of the AI QA Skill Suite.

| Skill | Main Question |
|---|---|
| 01 Requirements Reviewer | What exactly is required? |
| 02 Test Plan Generator | How will we test it? |
| 03 Test Scenario Generator | What should we test? |
| 04 Test Case Generator | How exactly should we test it? |
| 05 Test Coverage Analyzer | What did we miss? |
| 06 Test Case Reviewer | Are the tests well written? |
| 07 Bug Report Reviewer | Is the bug report well written? |
| 08 Regression Scope Analyzer | What else could break? |
| 09 QA Test Report Generator | What is the testing outcome? |

## Important Boundary

The Test Scenario Generator creates high-level scenarios.

The Test Case Generator converts those scenarios into detailed executable tests.

Example:

**Scenario:**

> Verify login with valid credentials.

**Test Case:**

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click Login.
5. Verify that the user is logged in.

## Scope

This Skill:

- generates detailed test cases;
- structures test steps;
- defines expected results;
- identifies test data;
- maintains traceability;
- identifies missing information.

This Skill does not:

- execute tests;
- modify application code;
- create automation scripts;
- invent requirements;
- replace QA judgment.

## Validation

Test the Skill using:

- positive scenarios;
- negative scenarios;
- boundary values;
- validation rules;
- missing information;
- ambiguous expected behavior;
- traceability;
- hallucination traps;
- duplicate scenarios.

Test cases for validation are stored in:

`tests/stress-tests.md`

## Portfolio Value

This Skill demonstrates practical AI-assisted QA capabilities:

- test design;
- boundary analysis;
- negative testing;
- traceability;
- structured test documentation;
- AI hallucination prevention;
- reusable QA workflow design.