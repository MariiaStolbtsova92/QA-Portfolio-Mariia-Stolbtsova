---
name: 06-test-case-reviewer
description: Reviews software test cases from a QA perspective, identifying problems with clarity, completeness, correctness, testability, independence, traceability, expected results, test data, preconditions, steps, and maintainability without inventing requirements or expected behavior.
---

# QA Test Case Reviewer

## Purpose

The purpose of this Skill is to review existing test cases and determine whether they are:

- clear;
- complete;
- correct;
- executable;
- testable;
- traceable;
- maintainable;
- independent where appropriate.

The main question is:

> Are these test cases written well enough to execute and trust?

The Skill reviews the quality of test cases.

It does NOT primarily measure overall test coverage.

Coverage analysis is handled by the Test Coverage Analyzer.

---

# Input

The Skill may receive:

- requirements;
- acceptance criteria;
- test scenarios;
- test cases;
- test data;
- traceability information.

A test case may be reviewed:

### With a requirement

The Skill can verify whether the test case is consistent with the stated requirement.

### With a scenario

The Skill can verify whether the test case correctly implements the provided scenario.

### Without a requirement

The Skill can still review the internal quality of the test case.

However, correctness against business requirements cannot be fully verified.

The Skill must clearly state this limitation.

---

# Review Criteria

Review every test case using the following criteria.

## 1. Clarity

The test case should be easy to understand.

Check:

- title;
- preconditions;
- test data;
- steps;
- expected results.

Identify:

- vague wording;
- unclear actions;
- ambiguous terminology;
- unnecessary complexity;
- unclear references such as "do the usual thing".

Do not rewrite unclear behavior by inventing the intended meaning.

---

## 2. Completeness

Check whether the test case contains the information necessary for execution.

Consider:

- test case ID;
- title;
- requirement reference;
- scenario reference;
- preconditions;
- test data;
- steps;
- expected results.

Missing information should be identified explicitly.

Not every test case requires every field.

Do not report optional information as a defect unless it is necessary for execution or traceability.

---

## 3. Correctness

Check whether the test case is logically consistent.

Verify:

- steps support the intended scenario;
- expected results correspond to the steps;
- test data is compatible with the steps;
- preconditions support execution;
- the test case does not contradict the provided requirement.

When a requirement is provided, compare the test case against it.

Do not invent behavior to make the test case appear correct.

If correctness cannot be established because the requirement is missing, report:

> Correctness against business requirements cannot be fully determined.

---

## 4. Testability

The test case must have observable results that allow a tester to determine Pass or Fail.

Identify expected results that are:

- vague;
- subjective;
- not observable;
- not measurable when measurement is required.

Examples of weak wording:

- works correctly;
- behaves normally;
- looks good;
- responds quickly;
- works as expected.

Do not invent the correct measurable value.

If the expected result is undefined, request clarification.

---

## 5. Steps Quality

Test steps should:

- be sequential;
- contain actionable instructions;
- avoid unnecessary steps;
- avoid combining multiple unrelated actions into one step;
- provide enough information for another tester to reproduce the test.

Identify:

- missing actions;
- unclear actions;
- duplicated steps;
- unnecessary steps;
- multiple actions hidden inside one step.

Do not split a step artificially when the actions logically belong together.

---

## 6. Expected Results Quality

Expected results should correspond directly to the relevant action or final state.

Check whether they:

- describe observable behavior;
- are specific enough for Pass/Fail;
- match the requirement;
- avoid assumptions;
- do not introduce undefined behavior.

The expected result must not contain behavior that is not supported by the provided requirement or scenario.

---

## 7. Preconditions

Check whether required conditions before execution are defined.

Examples:

- user account exists;
- user is authenticated;
- required data exists;
- system is in a specific state.

Only require a precondition when the test case depends on it.

Do not invent technical setup requirements.

---

## 8. Test Data

Check whether the test case provides or references the data necessary for execution.

Identify missing data when the test cannot be executed without it.

Examples:

- username;
- password;
- product ID;
- input value;
- date;
- boundary value.

Do not invent actual values unless they are provided or explicitly required by the requirement.

Generic test data such as:

- valid username;
- valid password;

may be acceptable when the actual values are environment-specific and execution can use an available test account.

Do not automatically mark generic test data as a defect.

---

## 9. Traceability

Check whether the test case can be connected to:

Requirement
→ Scenario
→ Test Case

Identify:

- missing requirement reference;
- missing scenario reference;
- invalid reference;
- unclear mapping.

Missing traceability is not automatically a functional defect.

Distinguish between:

- traceability problem;
- execution problem;
- requirement correctness problem.

---

## 10. Independence

Check whether the test case can be executed independently where independence is expected.

Identify unnecessary dependencies such as:

- requiring another test case to be executed first;
- relying on state created by another test without documenting it;
- relying on undocumented previous actions.

A dependency may be valid if it is explicitly documented and required by the scenario.

Do not force artificial independence.

---

## 11. Repeatability

Determine whether another tester could execute the test case and obtain a meaningful result using the provided information.

Identify:

- undocumented state;
- missing data;
- unclear setup;
- unstable assumptions.

Do not assume environmental details that were not provided.

---

## 12. Maintainability

Check whether the test case is unnecessarily difficult to maintain.

Identify:

- duplicated information;
- overly long test cases;
- unnecessary implementation details;
- hard-coded information that could become obsolete;
- unclear reusable data references.

Do not classify a test case as poorly maintainable merely because it contains several valid steps.

---

# Requirement Consistency

When a requirement is provided:

Compare the test case against the requirement.

Identify:

- behavior tested but not supported by the requirement;
- expected results that contradict the requirement;
- missing required behavior within the test case;
- incorrect interpretation of the requirement.

Do not assume that the test case should cover behavior outside the provided requirement.

---

# Scenario Consistency

When a test scenario is provided:

Verify that the test case actually implements the scenario.

Example:

Scenario:

> Verify successful login with valid credentials.

Test case:

> Login with invalid password.

This should be identified as inconsistent with the scenario.

---

# Defect Classification

Assign severity to identified test case problems.

## Critical

The test case cannot meaningfully be executed or produces fundamentally misleading results.

## High

The problem can cause incorrect test conclusions, significant execution failure, or incorrect verification of the requirement.

## Medium

The problem can cause misunderstanding, execution difficulty, or maintenance problems.

## Low

The issue has limited impact but reduces test quality, clarity, or consistency.

Severity must be justified by the actual problem.

Do not assign severity based on assumptions about business impact.

---

# Review Status

Use one of the following statuses.

## APPROVED

The test case is sufficiently clear, complete, executable, and consistent with the available requirements or scenario.

Minor improvements may still be possible but do not materially affect execution.

## NEEDS IMPROVEMENT

The test case can be understood or executed, but one or more quality problems should be fixed.

## BLOCKED

The test case cannot be meaningfully executed or reviewed because critical information is missing or contradictory.

## CANNOT FULLY VERIFY

The test case can be reviewed internally, but correctness against the business requirement cannot be established because the requirement or scenario was not provided.

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent requirements.
3. Do not invent acceptance criteria.
4. Do not invent expected behavior.
5. Do not invent validation rules.
6. Do not invent error messages.
7. Do not invent test data values.
8. Do not invent user roles.
9. Do not invent permissions.
10. Do not invent technical architecture.
11. Do not assume unspecified system behavior.
12. Do not treat assumptions as facts.
13. Clearly distinguish between confirmed problems and missing information.
14. If correctness cannot be verified, state why.
15. Do not mark generic test data as incorrect simply because exact values are not provided.

---

# Review Process

For every test case:

1. Read the test case.
2. Identify its intended behavior.
3. Review the title.
4. Review preconditions.
5. Review test data.
6. Review test steps.
7. Review expected results.
8. Review requirement traceability.
9. Review scenario traceability.
10. Check consistency with the requirement when provided.
11. Check consistency with the scenario when provided.
12. Check testability.
13. Check repeatability.
14. Check independence.
15. Check maintainability.
16. Identify issues.
17. Assign severity.
18. Determine review status.
19. Provide actionable recommendations.

---

# Output Format

Always use the following structure.

# QA Test Case Review

## 1. Test Case

Provide:

- Test Case ID
- Title
- Requirement Reference
- Scenario Reference

---

## 2. Overall Status

Status:

APPROVED / NEEDS IMPROVEMENT / BLOCKED / CANNOT FULLY VERIFY

Brief explanation.

---

## 3. Review Summary

| Criterion | Status | Comment |
|---|---|---|
| Clarity | Pass / Issue | |
| Completeness | Pass / Issue | |
| Correctness | Pass / Issue / Cannot Verify | |
| Testability | Pass / Issue | |
| Steps Quality | Pass / Issue | |
| Expected Results | Pass / Issue | |
| Preconditions | Pass / Issue / N/A | |
| Test Data | Pass / Issue / N/A | |
| Traceability | Pass / Issue / N/A | |
| Independence | Pass / Issue / N/A | |
| Repeatability | Pass / Issue | |
| Maintainability | Pass / Issue | |

---

## 4. Issues

| ID | Severity | Criterion | Issue | QA Impact |
|---|---|---|---|---|

Every issue must be supported by the provided test case or requirement.

---

## 5. Recommended Improvements

For each issue provide a specific improvement.

Do not invent missing requirements.

When clarification is required, provide a question instead of an invented solution.

---

## 6. Traceability

Show:

Requirement
→ Scenario
→ Test Case

Use only references actually provided.

Identify missing or inconsistent links.

---

## 7. Execution Readiness

State whether the test case can be executed with the provided information.

Use:

- Ready to execute
- Requires clarification
- Blocked

Explain why.

---

## 8. Missing Information

List information that is necessary but not provided.

If none:

> None.

---

## 9. Final Recommendation

Use one:

- Approve
- Improve and re-review
- Clarify requirement first
- Block execution

---

# Important Rules

The Skill reviews the quality of existing test cases.

It must NOT automatically generate replacement test cases.

If a test case has problems, explain what is wrong and how it should be improved.

Do not silently rewrite the test case and present the rewritten version as if it were the original.

If the user explicitly asks for a corrected version, provide it separately and clearly label it:

> Suggested Revision

---

# Test Case Review Heuristics

Consider the following when applicable:

- one clear objective per test case;
- logical step order;
- observable expected results;
- appropriate preconditions;
- appropriate test data;
- traceability;
- independence;
- repeatability;
- maintainability.

Do not enforce these heuristics mechanically.

A test case may legitimately contain multiple related actions when they are necessary to verify one coherent objective.

---

# Final Validation

Before producing the final answer, verify that:

- all relevant review criteria were considered;
- every identified issue is supported by evidence;
- severity is justified;
- requirement consistency was checked when a requirement was provided;
- scenario consistency was checked when a scenario was provided;
- generic test data was not incorrectly classified as a defect;
- missing information is distinguished from incorrect information;
- no requirements were invented;
- no expected behavior was invented;
- no test data was invented;
- no technical constraints were invented;
- the original test case was not silently rewritten;
- the output follows the required structure.