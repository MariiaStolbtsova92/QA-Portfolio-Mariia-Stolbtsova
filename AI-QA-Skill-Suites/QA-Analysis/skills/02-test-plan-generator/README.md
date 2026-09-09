# AI QA Test Plan Generator

AI Skill for creating structured QA test plans from software requirements and project information.

## Purpose

This Skill helps QA engineers define how a feature, release, or project should be tested.

It transforms available requirements and project information into a structured test plan covering:

- test objectives;
- test scope;
- test strategy;
- test types;
- test levels;
- test priorities;
- test environment;
- test data;
- dependencies;
- QA risks;
- entry criteria;
- exit criteria;
- resources and responsibilities;
- test deliverables;
- schedule;
- open questions.

## Key Principle

The Skill uses only information explicitly provided by the user.

It must not invent:

- business rules;
- project deadlines;
- browsers or devices;
- environments;
- test data;
- team members;
- risk scores;
- coverage targets;
- defect thresholds;
- acceptance criteria;
- technical limitations.

When important information is missing, the Skill identifies it and creates clarification questions.

## Input

The Skill can work with:

- software requirements;
- user stories;
- acceptance criteria;
- feature specifications;
- release information;
- known risks;
- technical constraints;
- environment information;
- test data information;
- project timelines.

## Output

The Skill produces a structured:

**QA Test Plan**

containing:

1. Test Objective
2. Scope
3. Test Strategy
4. Test Types
5. Test Levels
6. Test Priorities
7. Test Environment
8. Test Data
9. Dependencies
10. Risks
11. Entry Criteria
12. Exit Criteria
13. Resources and Responsibilities
14. Test Deliverables
15. Schedule
16. Assumptions
17. Open Questions
18. Test Plan Status

## Test Plan Status

The Skill uses three statuses:

### READY

Enough information is available to create a meaningful test plan.

### NEEDS CLARIFICATION

Testing can be planned, but important information is missing.

### BLOCKED

Critical information is missing or contradictory and prevents meaningful test planning.

## Important Boundary

This Skill defines:

> HOW the feature should be tested.

It does not generate detailed test scenarios or test cases.

The QA workflow is:

Requirements
↓
01 Requirements Reviewer
↓
02 Test Plan Generator
↓
03 Test Scenario Generator
↓
04 Test Case Generator

### Example

Requirement:

> Users can reset their password using their registered email address.

The Test Plan Generator may identify:

- functional testing;
- validation testing;
- security considerations;
- email integration;
- test data requirements;
- relevant risks.

It should not generate detailed scenarios such as:

> Verify that the user can reset the password using a valid email.

That task belongs to the Test Scenario Generator.

## Handling Missing Information

Example:

> Users can upload documents.

The Skill should identify missing information such as:

- supported file formats;
- maximum file size;
- supported platforms;
- user roles;
- error handling;
- test environment;
- timeline.

It should not assume:

> PDF and DOCX are supported with a 10 MB limit.

## Handling Recommendations

The Skill may recommend common QA practices, but recommendations must be clearly distinguished from confirmed project requirements.

For example:

**Confirmed:**
> Testing will be performed in the staging environment.

**Recommendation:**
> A production-like staging environment may be useful for integration testing.

The recommendation must never be presented as a project fact.

## Validation

The Skill should be tested against:

- complete requirements;
- incomplete requirements;
- missing scope;
- missing environment information;
- missing test data;
- performance requirements;
- compatibility requirements;
- external dependencies;
- high-risk functionality;
- hallucination traps;
- scope-boundary cases.

Test cases are located in:

`tests/stress-tests.md`

## Relationship to Other Skills

This Skill is part of the AI QA Skill Suite.

Current suite:

| Skill | Purpose |
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

## Scope

This Skill creates a test planning strategy.

It does not:

- execute tests;
- create detailed test cases;
- write automation code;
- modify application code;
- invent project information;
- replace QA decision-making.

## Portfolio Value

This Skill demonstrates practical AI-assisted QA skills:

- test planning;
- risk-based thinking;
- test strategy;
- requirements analysis;
- AI hallucination prevention;
- structured QA documentation;
- AI workflow design.