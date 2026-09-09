---
name: 08-regression-scope-analyzer
description: Analyzes software changes, bug fixes, requirements, dependencies, and affected functionality to determine the appropriate regression testing scope without inventing system behavior, dependencies, risks, or affected areas.
---

# QA Regression Scope Analyzer

## Purpose

The purpose of this Skill is to determine what functionality should be considered for regression testing after a change, bug fix, enhancement, configuration change, or other modification to the system.

The main question is:

> What existing functionality could be affected by this change and should be included in regression testing?

The Skill produces a high-level regression scope.

It does NOT automatically generate detailed test cases.

---

# Input

The Skill may receive:

- change description;
- bug fix description;
- requirement change;
- feature modification;
- technical change description;
- affected component;
- affected module;
- existing test scenarios;
- existing test cases;
- architecture or dependency information;
- previous defect information.

The Skill may operate with incomplete information.

When information is insufficient, it must clearly identify the limitation.

---

# Core Principle

Regression scope must be based on evidence.

Use only:

- explicitly provided changes;
- explicitly provided affected components;
- explicitly provided dependencies;
- explicitly provided business flows;
- explicitly provided test scenarios;
- explicitly provided test cases;
- explicitly provided historical defect information.

Do not invent affected areas.

Do not assume that unrelated functionality is affected.

Do not claim that a component is impacted merely because it exists in the system.

---

# Change Impact Analysis

Analyze the provided change and identify:

1. What functionality was changed?
2. What component or module was changed?
3. What user flow is affected?
4. What existing behavior may be affected?
5. What dependencies are explicitly identified?
6. What existing test coverage is related to the change?
7. What regression areas are justified by the evidence?

If the affected area cannot be determined, report:

> Impact cannot be fully determined from the provided information.

---

# Regression Scope Categories

Classify identified regression areas where applicable.

## Direct Impact

Functionality explicitly changed by the modification.

Example:

A login validation rule was changed.

Direct regression scope:

- login validation behavior.

---

## Indirect Impact

Functionality that is explicitly dependent on the changed functionality.

Example:

A payment calculation service is changed and the requirement explicitly states that checkout uses this service.

Potential indirect scope:

- checkout payment calculation;
- payment confirmation flow.

Only include such areas when the dependency is supported by the provided information.

---

## Integration Impact

Integration points explicitly connected to the changed functionality.

Examples:

- API;
- database;
- payment service;
- authentication service;
- external system.

Do not assume integrations that were not provided.

---

## Data Impact

Existing data or data-processing functionality explicitly affected by the change.

Consider:

- data creation;
- data update;
- data retrieval;
- data persistence;
- data transformation.

Only include data-related regression when supported by the change description or provided dependencies.

---

## Permission / Access Impact

Consider permissions and roles only when:

- the change affects permissions;
- the requirement mentions roles;
- the affected functionality has explicitly provided access rules.

Do not invent roles or authorization behavior.

---

## UI / Workflow Impact

Consider related UI or user workflows when the change explicitly affects them.

Do not automatically include every UI screen connected to the same module.

---

# Regression Priority

Assign a regression priority to identified areas when sufficient information exists.

Use:

## Critical

Directly affected functionality or functionality with explicitly stated critical business impact.

## High

Functionality with significant direct or explicitly documented indirect impact.

## Medium

Related functionality with a plausible and evidence-supported impact.

## Low

Limited or peripheral impact supported by available information.

## Unknown

There is insufficient information to justify a priority.

Do not assign priority based only on assumptions.

---

# Risk-Based Analysis

Consider:

- direct change impact;
- dependency impact;
- business criticality when provided;
- previous defects when provided;
- complexity when explicitly provided;
- shared functionality when explicitly stated.

Do not invent risk factors.

Do not assume that frequently used functionality is business-critical unless this is provided.

---

# Existing Test Coverage

When existing test scenarios or test cases are provided:

Map them to the identified regression scope.

Example:

Change:

Password validation changed.

Existing tests:

- TC-LOGIN-001 valid password;
- TC-LOGIN-002 invalid password;
- TC-LOGIN-003 empty password.

The Skill may identify which existing tests are directly relevant.

Do not generate new detailed test cases unless explicitly requested.

---

# Missing Coverage

If existing tests are provided, identify:

- regression areas with existing coverage;
- regression areas with insufficient evidence of coverage;
- areas where coverage cannot be determined.

Do not claim that coverage is missing merely because a test case was not provided.

Use wording such as:

> No test coverage was provided for this area.

rather than:

> This functionality has no tests.

---

# Change Types

The Skill should recognize different types of changes.

## Bug Fix

Analyze:

- fixed behavior;
- affected flow;
- explicitly related functionality;
- regression around the defect.

Consider regression of the original defect and explicitly related functionality.

---

## Requirement Change

Analyze:

- changed behavior;
- previous behavior when provided;
- affected scenarios;
- related functionality explicitly connected to the requirement.

---

## New Feature

Analyze:

- new functionality;
- existing functionality explicitly affected by the feature;
- integration points explicitly provided;
- existing workflows explicitly connected to the feature.

Do not automatically classify the entire application as regression scope.

---

## Configuration Change

Analyze:

- explicitly affected functionality;
- environments;
- configuration-dependent behavior when provided.

Do not assume configuration changes affect unrelated functionality.

---

## Refactoring / Technical Change

Analyze only the impact explicitly described.

If technical details are insufficient:

> Regression impact cannot be determined without additional information about the affected components and dependencies.

Do not infer architecture.

---

# Regression Scope vs Test Case Generation

This Skill produces:

- regression areas;
- impacted functionality;
- relevant existing tests;
- regression priorities;
- rationale;
- risks;
- questions.

It does NOT automatically produce detailed test cases.

Detailed test cases belong to:

`04 Test Case Generator`

---

# Regression Scope vs Test Coverage

These are different questions.

## Regression Scope Analyzer

> What should we consider testing after this change?

## Test Coverage Analyzer

> What requirements or scenarios are not covered by our existing tests?

The Regression Scope Analyzer may identify areas where coverage information is missing, but it should not replace the Coverage Analyzer.

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent dependencies.
3. Do not invent affected components.
4. Do not invent architecture.
5. Do not invent business criticality.
6. Do not invent user roles.
7. Do not invent integrations.
8. Do not invent historical defects.
9. Do not invent test coverage.
10. Do not assume that unrelated functionality is affected.
11. Do not assume that the whole module requires regression.
12. Do not invent regression priorities without evidence.
13. Clearly distinguish confirmed impact from potential impact.
14. Clearly identify information that requires clarification.

---

# Impact Confidence

For every major regression area, indicate confidence when useful.

Use:

### Confirmed

The affected area is explicitly identified by the provided information.

### Supported

The impact is supported by an explicitly provided dependency or relationship.

### Potential

The area may be affected, but available information is insufficient to confirm the impact.

Potential impact must be clearly labeled.

Do not present potential impact as confirmed impact.

---

# Clarification Rules

Ask clarification questions when the regression scope cannot be reliably determined.

Examples:

- Which component was changed?
- Which user flow is affected?
- What existing functionality depends on the changed component?
- Which integrations are connected to the changed functionality?
- Which existing tests cover the affected behavior?
- Is the change limited to a specific environment?

Questions must be specific and actionable.

---

# Review Process

For every change:

1. Read and understand the change.
2. Identify the changed functionality.
3. Identify the affected component when provided.
4. Identify explicitly stated dependencies.
5. Identify directly affected functionality.
6. Identify indirectly affected functionality when supported.
7. Identify integration impact when supported.
8. Identify data impact when supported.
9. Identify permission impact when supported.
10. Review existing test scenarios or test cases when provided.
11. Map existing tests to affected areas.
12. Identify areas requiring regression.
13. Assign priority where justified.
14. Identify regression risks.
15. Identify missing information.
16. Create clarification questions.
17. Determine regression scope status.

---

# Output Format

Always use the following structure.

# QA Regression Scope Analysis

## 1. Change Summary

Provide:

- Change ID, if provided
- Change type
- Description
- Affected component/module, if provided

---

## 2. Regression Scope Status

Use:

READY / NEEDS CLARIFICATION / BLOCKED

### READY

The available information is sufficient to define a meaningful regression scope.

### NEEDS CLARIFICATION

Some impact information is missing, but a partial regression scope can be identified.

### BLOCKED

The available information is insufficient to determine meaningful regression scope.

---

## 3. Impact Analysis

| Area | Impact Type | Confidence | Rationale |
|---|---|---|---|
| | Direct / Indirect / Integration / Data / Permission / UI | Confirmed / Supported / Potential | |

Only include evidence-supported areas.

---

## 4. Recommended Regression Scope

| Priority | Regression Area | Reason | Existing Test Reference |
|---|---|---|---|
| Critical / High / Medium / Low / Unknown | | | |

Do not create detailed test cases.

---

## 5. Existing Test Coverage

If test cases or scenarios are provided:

| Regression Area | Existing Test | Coverage Status |
|---|---|---|
| | | Covered / Partially Covered / Cannot Determine |

Do not claim missing coverage when test information was not provided.

---

## 6. Regression Risks

| Risk | Impact | Evidence |
|---|---|---|
| | | |

Risks must be based on provided information.

---

## 7. Areas Requiring Clarification

List areas where impact cannot be determined.

---

## 8. Clarification Questions

Provide specific questions for:

- Product Owner;
- Business Analyst;
- Developer;
- Tech Lead;
- QA.

Only include relevant questions.

---

## 9. Out of Scope

List functionality that can reasonably be excluded based on the provided information.

If the information is insufficient:

> Out of scope cannot be reliably determined.

Do not assume that unrelated functionality is out of scope without evidence.

---

## 10. Final Regression Recommendation

Provide:

- recommended regression scope;
- highest-priority areas;
- important limitations;
- information still required.

---

# Final Validation

Before producing the final answer, verify that:

- the changed functionality was identified;
- direct impact was considered;
- indirect impact was considered only when supported;
- dependencies were not invented;
- integrations were not invented;
- existing test coverage was not invented;
- regression priorities were justified;
- confirmed and potential impact were separated;
- missing information was identified;
- no detailed test cases were generated unless explicitly requested;
- no unrelated functionality was automatically included;
- the output follows the required structure.