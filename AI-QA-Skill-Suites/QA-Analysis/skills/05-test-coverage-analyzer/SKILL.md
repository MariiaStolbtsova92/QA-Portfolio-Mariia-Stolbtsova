---
name: 05-test-coverage-analyzer
description: Analyzes requirements, test scenarios, and test cases to identify missing coverage, uncovered requirements, missing positive, negative and boundary scenarios, traceability gaps, and potential QA risks without inventing unspecified behavior.
---

# QA Test Coverage Analyzer

## Purpose

The purpose of this Skill is to analyze existing QA test coverage and identify what may be missing.

The Skill compares the provided:

- requirements;
- acceptance criteria;
- test scenarios;
- test cases;

and identifies coverage gaps.

The main question is:

> What have we forgotten to test?

The Skill should help QA engineers identify:

- uncovered requirements;
- partially covered requirements;
- missing test scenarios;
- missing positive coverage;
- missing negative coverage;
- missing boundary coverage;
- missing validation coverage;
- missing role or permission coverage;
- missing state or transition coverage;
- traceability gaps;
- potential QA risks.

---

# Core Principle

Analyze coverage based only on the information provided by the user.

Do not invent:

- business rules;
- requirements;
- expected behavior;
- validation rules;
- user roles;
- permissions;
- system states;
- boundary values;
- error messages;
- technical architecture;
- integrations;
- security requirements;
- performance requirements.

If information is not provided, do not treat it as a confirmed requirement.

Clearly distinguish between:

- Covered
- Partially Covered
- Not Covered
- Missing Information
- Potential Risk

---

# Input

The Skill may receive:

- requirements;
- user stories;
- acceptance criteria;
- test scenarios;
- test cases;
- test plans;
- traceability information.

The Skill may analyze:

### Requirements only

Determine whether sufficient testing information exists and identify areas where test coverage cannot yet be evaluated.

### Requirements + Test Scenarios

Compare requirements against scenarios and identify uncovered or partially covered behavior.

### Requirements + Test Cases

Compare requirements against detailed test cases and identify coverage gaps.

### Requirements + Scenarios + Test Cases

Perform full traceability and coverage analysis.

---

# Coverage Model

Evaluate coverage using the following dimensions.

## 1. Requirement Coverage

Determine whether each requirement is:

- Fully Covered
- Partially Covered
- Not Covered
- Cannot Be Determined

A requirement is Fully Covered when the provided tests sufficiently verify the behavior explicitly defined by the requirement.

A requirement is Partially Covered when some but not all relevant behavior is covered.

A requirement is Not Covered when no provided test or scenario verifies the requirement.

Use Cannot Be Determined when the available information is insufficient to assess coverage.

---

## 2. Positive Coverage

Check whether successful or valid behavior is covered when the requirement defines successful behavior.

Example:

Requirement:

> A registered user can log in using valid credentials.

Test:

> Login with valid credentials.

Positive coverage exists.

Do not require additional positive scenarios unless the requirement supports them.

---

## 3. Negative Coverage

Check for negative scenarios when the requirement explicitly defines:

- invalid input;
- failure conditions;
- rejected values;
- validation rules;
- error handling;
- denied access.

Do not invent negative behavior when the requirement does not define it.

Example:

Requirement:

> Password must contain at least 8 characters.

A boundary or invalid-input test may be relevant.

However, do not invent the exact error message.

---

## 4. Boundary Coverage

Check for boundary scenarios when the requirement contains measurable limits.

Examples:

- minimum;
- maximum;
- lower boundary;
- upper boundary;
- values immediately below the minimum;
- values immediately above the maximum.

Example:

Requirement:

> Username must contain between 5 and 20 characters.

Relevant boundary values:

- 4;
- 5;
- 20;
- 21.

Do not invent boundaries when the requirement does not contain measurable limits.

---

## 5. Validation Coverage

Check validation coverage when explicit validation rules exist.

Consider:

- required fields;
- allowed values;
- length;
- format;
- range;
- data type.

Do not invent validation rules.

---

## 6. Role and Permission Coverage

Check role and permission coverage only when roles or access restrictions are explicitly mentioned.

Example:

Requirement:

> Only administrators can delete users.

Relevant coverage includes:

- administrator can delete;
- non-administrator cannot delete.

Do not introduce roles that are not mentioned.

---

## 7. State and Transition Coverage

Check state transitions when the requirement explicitly describes different system states or transitions.

Examples:

- draft → submitted;
- pending → approved;
- active → suspended.

Do not invent states or transitions.

---

## 8. Error Handling Coverage

Check error handling when the requirement defines behavior for errors or failures.

Do not assume that every functional requirement requires a specific error scenario.

If error behavior is not defined, identify it as a clarification only when it materially affects coverage.

---

## 9. Integration Coverage

Consider integration coverage only when the requirement explicitly mentions interaction with another system, service, API, database, or external component.

Do not invent integrations.

---

## 10. Security Coverage

Consider security coverage when the requirement explicitly includes:

- authentication;
- authorization;
- permissions;
- sensitive data;
- security controls;
- security-specific behavior.

Do not automatically classify every application requirement as requiring security tests.

---

## 11. Compatibility Coverage

Consider compatibility coverage when platforms, browsers, devices, operating systems, or versions are explicitly specified.

Do not invent supported platforms.

---

## 12. Performance Coverage

Consider performance coverage when performance requirements or measurable performance expectations are explicitly provided.

Examples:

- response time;
- throughput;
- concurrent users;
- processing time.

Do not invent performance thresholds.

---

# Traceability Analysis

Compare:

Requirement
→ Test Scenario
→ Test Case

Identify:

- requirements without scenarios;
- scenarios without requirements;
- requirements without test cases;
- test cases without requirement references;
- test cases linked to the wrong requirement;
- duplicate coverage;
- partial coverage.

Do not invent missing IDs.

---

# Coverage Status

Use the following statuses.

## FULLY COVERED

The provided tests sufficiently verify the requirement based on the available information.

## PARTIALLY COVERED

Some relevant behavior is tested, but additional coverage is supported by the requirement.

## NOT COVERED

No provided test or scenario verifies the requirement.

## CANNOT BE DETERMINED

There is insufficient information to determine whether the requirement is adequately covered.

---

# Coverage Gap Classification

Classify identified gaps using:

### Critical

A significant requirement or high-impact behavior is not covered, or a major gap may prevent meaningful verification.

### High

Important functionality or significant behavior is insufficiently covered.

### Medium

A relevant coverage gap exists but does not appear to block the main functionality.

### Low

A minor coverage or traceability improvement is recommended.

Do not assign severity based on assumptions about business impact unless such impact is provided.

---

# Coverage Percentage

If enough information exists, calculate:

Coverage % = covered requirements / total assessable requirements × 100

Only include requirements that can actually be assessed.

Clearly state the calculation basis.

Example:

> 4 of 5 assessable requirements are fully covered = 80%.

Do not present a coverage percentage if the available information does not support a meaningful calculation.

Do not treat requirements marked Cannot Be Determined as covered.

---

# Duplicate Coverage

Identify duplicate or overlapping test coverage when multiple tests verify essentially the same behavior.

Do not classify tests as duplicates solely because they share the same requirement.

Different:

- inputs;
- boundaries;
- roles;
- states;
- conditions;

may justify separate tests.

---

# Missing Coverage

When a coverage gap is identified, provide:

- Gap ID
- Requirement Reference
- Coverage Area
- Current Coverage
- Missing Coverage
- Severity
- QA Risk
- Recommendation

Recommendations must be based on the provided requirement.

Do not invent a new business rule.

---

# Missing Information

Distinguish between:

### Coverage Gap

The requirement contains enough information to identify something that should be tested, but no corresponding test exists.

### Missing Requirement Information

The requirement itself does not provide enough information to determine what should be tested.

Example:

Requirement:

> The system should process payments correctly.

If no payment rules or expected behavior are provided, do not invent payment scenarios.

Instead report:

> Expected payment behavior is not sufficiently defined.

---

# Test Design Heuristics

Use the following heuristics when relevant:

- positive scenarios;
- negative scenarios;
- boundary values;
- validation;
- permissions;
- state transitions;
- error handling;
- integration;
- compatibility;
- security;
- performance.

Only apply a heuristic when supported by the requirement.

Do not create coverage gaps simply because a generic testing category was not used.

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided.
2. Do not invent requirements.
3. Do not invent expected behavior.
4. Do not invent test cases.
5. Do not invent validation rules.
6. Do not invent roles.
7. Do not invent permissions.
8. Do not invent boundaries.
9. Do not invent error messages.
10. Do not invent technical architecture.
11. Do not assume unspecified integrations.
12. Do not assume unspecified platforms.
13. Do not assume unspecified performance requirements.
14. Do not treat potential risks as confirmed defects.
15. Clearly distinguish coverage gaps from missing requirement information.

---

# Output Format

Always use the following structure.

# QA Test Coverage Analysis

## 1. Analysis Scope

List what was provided:

- Requirements
- Test Scenarios
- Test Cases
- Traceability information

State what can and cannot be assessed.

---

## 2. Coverage Summary

| Metric | Result |
|---|---|
| Total assessable requirements | X |
| Fully Covered | X |
| Partially Covered | X |
| Not Covered | X |
| Cannot Be Determined | X |
| Coverage Percentage | X% / Not Applicable |

---

## 3. Requirement Coverage Matrix

| Requirement ID | Requirement | Scenario Coverage | Test Case Coverage | Status |
|---|---|---|---|---|

Use:

- Fully Covered
- Partially Covered
- Not Covered
- Cannot Be Determined

---

## 4. Coverage Gaps

| Gap ID | Requirement | Coverage Area | Missing Coverage | Severity | QA Risk |
|---|---|---|---|---|---|

---

## 5. Traceability Gaps

List:

- requirements without scenarios;
- scenarios without requirements;
- requirements without test cases;
- test cases without requirement references;
- incorrect references.

---

## 6. Risk Areas

List potential QA risks caused by identified coverage gaps.

Do not present assumptions as confirmed risks.

---

## 7. Recommendations

Provide actionable recommendations for improving coverage.

Recommendations must be supported by the provided requirements.

---

## 8. Missing Information

List information that prevents meaningful coverage analysis.

If none:

> None.

---

## 9. Coverage Status

Use one:

READY
PARTIALLY COVERED
INSUFFICIENT INFORMATION

### READY

Coverage can be meaningfully assessed and no significant gaps are identified.

### PARTIALLY COVERED

Coverage can be assessed, but one or more relevant gaps exist.

### INSUFFICIENT INFORMATION

The provided requirements or test artifacts do not contain enough information to perform meaningful coverage analysis.

---

# Important Rules

The Skill must not automatically assume that every requirement needs:

- positive testing;
- negative testing;
- boundary testing;
- security testing;
- performance testing;
- compatibility testing;
- integration testing.

These areas should be identified only when supported by the requirement.

A missing generic test category is not automatically a coverage gap.

---

# Final Validation

Before producing the final answer, verify that:

- every assessable requirement was considered;
- every test scenario was considered;
- every test case was considered;
- traceability was evaluated where possible;
- coverage status is justified;
- coverage gaps are supported by requirements;
- no business rules were invented;
- no test cases were invented;
- no boundaries were invented;
- no roles were invented;
- no expected behavior was invented;
- missing requirement information is distinguished from missing test coverage;
- severity is justified;
- coverage percentage is calculated only when meaningful;
- the output follows the required structure.