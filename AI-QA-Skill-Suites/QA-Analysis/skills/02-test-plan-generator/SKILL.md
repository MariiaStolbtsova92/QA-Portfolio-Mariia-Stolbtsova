---
name: 02-test-plan-generator
description: Generates structured QA test plans from software requirements and project information, defining test scope, test objectives, test types, risks, environments, data, dependencies, entry and exit criteria, and deliverables without inventing unspecified project information.
---

# QA Test Plan Generator

## Purpose

The purpose of this Skill is to help QA engineers create structured test plans based on available software requirements and project information.

The Skill defines how the software feature, release, or project should be tested.

It focuses on test strategy, scope, risks, resources, environments, dependencies, and completion criteria.

The Skill does not generate detailed test cases.

---

# Input

The Skill may accept:

- Software requirements
- User stories
- Acceptance criteria
- Feature specifications
- Release information
- Project information
- Known risks
- Technical constraints
- Supported platforms
- Environment information
- Test data requirements
- Timeline or testing deadlines

Use only information explicitly provided by the user.

---

# Core Principle

The Test Plan must describe how testing should be approached based on the available information.

The Skill must not invent project-specific information.

When information is missing:

1. Identify the missing information.
2. Explain why it affects the test plan.
3. Mark the affected section as requiring clarification.
4. Create specific clarification questions.

Do not replace missing information with assumptions.

---

# Test Plan Scope

The Skill must define the following areas where applicable:

1. Test Objective
2. Test Scope
3. Out of Scope
4. Test Strategy
5. Test Types
6. Test Levels
7. Test Environment
8. Test Data
9. Dependencies
10. Risks
11. Entry Criteria
12. Exit Criteria
13. Resources and Responsibilities
14. Test Deliverables
15. Schedule or Timeline
16. Assumptions
17. Open Questions

Only include areas supported by the provided information.

---

# Test Objective

Define what testing is intended to achieve.

Examples:

- verify that the implemented functionality satisfies the stated requirements;
- identify functional defects;
- verify critical business behavior;
- validate integration behavior.

Do not invent business objectives.

---

# Test Scope

Identify functionality that should be tested based on the provided requirements.

The scope should describe:

- features;
- functionality;
- workflows;
- integrations;
- platforms;
- user roles;

only when they are explicitly provided.

Do not expand the scope with unrelated functionality.

---

# Out of Scope

Identify functionality that should not be included in the current testing effort only when it is explicitly excluded or clearly outside the stated feature scope.

Do not arbitrarily exclude areas simply because they were not mentioned.

If the scope boundary is unclear, create a clarification question.

---

# Test Strategy

Define the overall approach to testing.

Consider, where relevant:

- functional testing;
- regression testing;
- integration testing;
- exploratory testing;
- usability testing;
- compatibility testing;
- security testing;
- performance testing;
- accessibility testing;
- smoke testing;
- sanity testing;
- API testing;
- UI testing.

Only recommend a test type when it is relevant to the provided feature or project information.

Do not claim that a test type is required if the requirement provides no basis for it.

---

# Test Levels

Consider applicable testing levels:

- Unit testing
- Integration testing
- System testing
- End-to-end testing
- Acceptance testing

Do not assign responsibility for a test level unless the project information specifies who performs it.

---

# Test Priorities

Prioritize testing based on:

- business criticality;
- user impact;
- security impact;
- complexity;
- integration dependencies;
- known risks;
- frequency of use;

when this information is available.

Do not invent business criticality or risk levels.

---

# Test Environment

Identify required environments based on provided information.

Consider:

- test environment;
- staging environment;
- production-like environment;
- supported browsers;
- operating systems;
- mobile devices;
- databases;
- external services.

If the environment is not specified, identify the missing information.

Do not invent a browser, operating system, device or infrastructure configuration.

---

# Test Data

Identify data required for testing.

Consider:

- valid data;
- invalid data;
- boundary data;
- test users;
- roles;
- existing records;
- empty datasets;
- integration data.

Do not invent specific business values unless they are provided.

If sensitive or production-like data is required, identify the need for appropriate test data handling.

---

# Dependencies

Identify dependencies that may affect testing.

Examples:

- external APIs;
- databases;
- authentication services;
- payment providers;
- third-party systems;
- test environments;
- test accounts;
- test data;
- other features.

Only identify dependencies supported by the provided information.

If dependencies are not mentioned in the provided requirements, report:

"Dependencies: Not specified."

Do not assume internal or external dependencies.

Do not create clarification questions about dependencies unless their absence materially affects test planning or execution.

---

# Risks

Identify QA risks based on available information.

Examples:

- unclear requirements;
- missing acceptance criteria;
- unavailable test environment;
- unavailable test data;
- external integration dependency;
- high-risk functionality;
- limited testing time.

Do not invent risks that have no basis in the provided information.

For each risk include:

- Risk
- Impact
- Likelihood, when sufficient information exists
- Mitigation

Do not invent numerical risk scores.

---

# Entry Criteria

Define conditions that should be satisfied before testing starts.

Examples:

- testable build is available;
- required environment is available;
- requirements are sufficiently defined;
- required test data is available;
- required dependencies are available.

Only include criteria relevant to the provided project.

If a criterion is recommended rather than explicitly defined, clearly mark it as a recommendation.

---

# Exit Criteria

Define conditions for completing the testing effort.

Possible criteria include:

- planned test scenarios executed;
- critical defects resolved or accepted;
- agreed test coverage achieved;
- required test evidence collected.

Do not invent numerical thresholds such as:

- 95% test pass rate;
- zero defects;
- 100% coverage;

unless explicitly provided.

---

# Resources and Responsibilities

Identify QA resources and responsibilities only when project information provides them.

Do not invent team members, roles or ownership.

If responsibilities are unclear, create a clarification question.

---

# Test Deliverables

Identify expected testing artifacts.

Examples:

- test plan;
- test scenarios;
- test cases;
- defect reports;
- test execution results;
- regression results;
- final QA report.

Only include deliverables relevant to the provided testing scope.

---

# Schedule and Timeline

If a testing deadline or release date is provided, incorporate it into the plan.

If no timeline is provided:

- do not invent dates;
- identify timeline as missing information.

Do not create an arbitrary testing schedule.

---

# Assumptions

Only list assumptions explicitly provided by the user.

Do not convert common QA practices into project assumptions.

For example:

Do not write:

> Assume Chrome is supported.

unless this information was provided.

---

# Open Questions

Identify unanswered questions that affect:

- scope;
- strategy;
- environment;
- data;
- risks;
- timeline;
- responsibilities;
- entry criteria;
- exit criteria.

Questions must be specific and actionable.

---

# Output Format

Always use the following structure.

# QA Test Plan

## 1. Test Objective

Describe the purpose of testing.

## 2. Scope

### In Scope

List functionality included in testing.

### Out of Scope

List explicitly excluded functionality.

If the scope boundary is unclear, state that clarification is required.

### Scope Discipline

Define scope based on the functionality explicitly described in the provided requirements.

Do not treat every unspecified feature as a scope gap.

Features that are not mentioned should be considered out of scope for this test plan unless there is evidence that they are affected by the described functionality.

Request clarification only when the missing information affects the ability to plan or execute testing.

## 3. Test Strategy

Describe the overall testing approach.

## 4. Test Types

| Test Type | Applicable | Reason |
|---|---|---|

Use only relevant test types.

## 5. Test Levels

List applicable test levels.

### Test Level Restraint

Do not infer test levels from user-facing behavior alone.

If the requirement does not specify system components, architecture, or test-level expectations, mark the test level as "Not specified".

Do not assume that system, integration, unit, or acceptance testing is required unless supported by the provided information.

## 6. Test Priorities

Identify high-priority testing areas based on available information.

## 7. Test Environment

Describe required environment information.

Clearly identify missing environment details.

## 8. Test Data

Describe required test data.

## 9. Dependencies

List dependencies that may affect testing.

## 10. Risks

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|

Use "Not specified" when likelihood cannot be determined from the provided information.

## 11. Entry Criteria

List conditions required before testing starts.

Clearly distinguish confirmed criteria from recommendations.

### Entry and Exit Criteria Discipline

Do not present standard QA practices as project-specific requirements.

If a criterion is recommended based on common QA practice but is not stated in the provided information, explicitly label it as:

"Recommended — not specified in the provided requirements."

Never present recommendations as confirmed project criteria.

## 12. Exit Criteria

List conditions for completing testing.

Do not invent numerical thresholds.

## 13. Resources and Responsibilities

List known QA resources and responsibilities.

Identify unclear ownership.

## 14. Test Deliverables

List expected QA artifacts.

## 15. Schedule

Use provided dates or deadlines.

If no schedule is provided, identify this as missing information.

## 16. Assumptions

List only explicitly provided assumptions.

## 17. Open Questions

List questions requiring clarification.

## 18. Test Plan Status

Use:

- READY
- NEEDS CLARIFICATION
- BLOCKED

### READY

Enough information exists to create a meaningful test plan.

### NEEDS CLARIFICATION

Testing can be planned, but important information is missing.

### BLOCKED

Critical information is missing or contradictory and prevents meaningful test planning.

---

# Relationship With Test Scenario Generator

This Skill defines:

> HOW the feature should be tested.

The Test Scenario Generator defines:

> WHAT should be tested.

The Test Plan must not generate detailed test scenarios.

The expected workflow is:

Requirements Reviewer
↓
Test Plan Generator
↓
Test Scenario Generator
↓
Test Case Generator

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent project information.
3. Do not invent timelines.
4. Do not invent team members.
5. Do not invent environments.
6. Do not invent browsers or devices.
7. Do not invent test data.
8. Do not invent business priorities.
9. Do not invent risk scores.
10. Do not invent acceptance criteria.
11. Do not invent coverage targets.
12. Do not invent defect thresholds.
13. Do not invent entry or exit criteria as confirmed project rules.
14. Clearly distinguish confirmed information from recommendations.
15. If information is missing, identify it as missing.
16. Create clarification questions for important missing information.

---


## Test Plan vs Requirement Review

The purpose of this Skill is to create a practical test plan, not to perform a full requirement review.

Do not list every missing requirement detail.

Identify missing information only when it materially affects:

- test scope;
- test strategy;
- test type;
- environment;
- test data;
- dependencies;
- entry criteria;
- exit criteria;
- execution;
- risk assessment.

Do not create clarification questions for information that is irrelevant to the current test plan.

# Final Validation

Before producing the final answer, verify that:

- Test objective is defined.
- Scope is based on provided information.
- Out-of-scope areas are not invented.
- Relevant test types were considered.
- Test levels were considered where applicable.
- Environment requirements are identified.
- Test data requirements are identified.
- Dependencies are identified.
- QA risks are supported by available information.
- Entry criteria are clearly distinguished from recommendations.
- Exit criteria do not contain invented thresholds.
- Resources and responsibilities are not invented.
- Deliverables are relevant.
- Timeline is not invented.
- Assumptions are clearly separated.
- Open questions are actionable.
- No test cases or detailed scenarios were generated.
- The output follows the required structure.