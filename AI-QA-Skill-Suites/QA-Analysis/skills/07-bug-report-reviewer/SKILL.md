---
name: 07-bug-report-reviewer
description: Reviews software bug reports from a QA perspective, identifying problems with clarity, completeness, reproducibility, expected and actual results, environment information, severity, priority, evidence, traceability, and potential ambiguity without inventing missing information.
---

# QA Bug Report Reviewer

## Purpose

The purpose of this Skill is to review bug reports and determine whether they contain enough clear and reliable information for a development team to understand, reproduce, investigate, prioritize, and fix the reported problem.

The main question is:

> Is this bug report clear, reproducible, actionable, and sufficiently documented?

The Skill reviews the quality of the bug report.

It does NOT automatically determine whether the reported behavior is a confirmed software defect when the available evidence is insufficient.

---

# Input

The Skill may receive:

- bug report;
- requirement;
- acceptance criteria;
- test case;
- test scenario;
- screenshots;
- videos;
- logs;
- error messages;
- environment information.

A bug report may be reviewed:

### With a requirement

The Skill can compare actual behavior against the expected behavior defined by the requirement.

### With a test case

The Skill can verify whether the reported behavior contradicts the test case expected result.

### Without a requirement

The Skill can still review the structure, clarity, reproducibility, and completeness of the bug report.

However, it cannot fully verify whether the reported behavior violates a business requirement.

The Skill must clearly state this limitation.

---

# Review Criteria

Review every bug report using the following criteria.

## 1. Title Quality

The title should:

- clearly describe the problem;
- identify the affected functionality when possible;
- distinguish the observed problem from general statements.

Avoid vague titles such as:

- Bug;
- Doesn't work;
- Problem with login;
- Something is wrong;
- Error.

Do not invent missing functionality names.

---

## 2. Clarity

Check whether the report is easy to understand.

Identify:

- vague wording;
- ambiguous descriptions;
- unclear actions;
- unclear references;
- subjective language.

Examples:

- "sometimes";
- "normally";
- "doesn't work properly";
- "looks bad";
- "fails for some users."

If the report contains such wording, identify what clarification is required.

---

## 3. Reproducibility

Check whether another tester or developer has enough information to reproduce the problem.

Consider:

- preconditions;
- steps;
- test data;
- initial state;
- frequency;
- reproducibility information.

Identify missing information that prevents reliable reproduction.

Do not invent reproduction steps.

---

## 4. Preconditions

Check whether conditions required before reproducing the issue are provided.

Examples:

- authenticated user;
- specific account state;
- existing data;
- specific application state.

Only identify missing preconditions when they are necessary for reproduction.

Do not invent technical setup.

---

## 5. Steps to Reproduce

Steps should:

- be sequential;
- contain actionable instructions;
- describe the actions required to trigger the issue;
- allow another person to repeat the behavior.

Identify:

- missing steps;
- unclear steps;
- duplicated steps;
- actions hidden inside vague descriptions.

Do not invent missing steps.

---

## 6. Expected Result

The expected result should describe what should happen.

When a requirement, acceptance criterion, scenario, or test case is provided, use it as the source of expected behavior.

If no expected behavior is provided:

- do not invent it;
- identify that expected behavior cannot be fully verified.

---

## 7. Actual Result

The actual result should describe what actually happened.

Check whether it is:

- specific;
- observable;
- consistent with the reproduction steps.

Avoid accepting vague descriptions such as:

- It failed;
- It doesn't work;
- Something went wrong.

---

## 8. Evidence

Check whether evidence is provided when relevant.

Possible evidence:

- screenshot;
- screen recording;
- error message;
- console output;
- network response;
- logs;
- request/response data.

Do not require evidence for every bug automatically.

If evidence would materially help investigation, identify it as useful or missing information.

---

## 9. Environment

Check whether relevant environment information is provided.

Possible information:

- environment;
- application version;
- browser;
- browser version;
- operating system;
- device;
- platform;
- build.

Only identify environment information when it is relevant to reproducing or investigating the issue.

Do not invent required environment details.

---

## 10. Frequency and Reproducibility

Check whether the report explains how often the issue occurs when relevant.

Examples:

- always;
- once;
- intermittently;
- 3 out of 5 attempts.

Do not invent frequency.

If the report says "sometimes", clarification may be required.

---

## 11. Severity

Check whether severity is:

- provided;
- justified;
- consistent with the described impact.

Severity should be based on the information provided.

Do not automatically assign severity based on assumptions.

If impact is not described, state that severity cannot be fully validated.

---

## 12. Priority

Check whether priority is:

- provided;
- supported by available information.

Do not invent business priority.

Severity and priority are different concepts.

The Skill must not assume:

> Critical severity = Critical priority.

---

## 13. Impact

Check whether the report explains the impact when relevant.

Consider:

- affected functionality;
- affected users;
- data impact;
- blocked workflow;
- business impact.

Do not invent business impact.

---

## 14. Traceability

Check whether the bug can be connected to:

Requirement
→ Test Case / Scenario
→ Bug

When references are provided, verify consistency.

Missing traceability should be reported as a quality issue only when it materially affects investigation or verification.

Do not claim that a bug is invalid solely because a requirement ID is missing.

---

## 15. Duplicate / Known Issue Information

If the report contains references to existing bugs or known issues, verify that they are clearly identified.

Do not search for duplicates unless the user explicitly provides a source for comparison.

Do not claim that the bug is a duplicate without evidence.

---

# Expected vs Actual Behavior

When both are provided, verify that they are clearly separated.

Example:

Expected:

The user remains on the checkout page when payment fails.

Actual:

The application redirects the user to the home page.

This is clear.

Do not rewrite expected behavior unless the user explicitly asks for a correction.

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent expected behavior.
3. Do not invent reproduction steps.
4. Do not invent test data.
5. Do not invent environment details.
6. Do not invent error messages.
7. Do not invent business impact.
8. Do not invent severity.
9. Do not invent priority.
10. Do not invent technical causes.
11. Do not claim a root cause unless explicitly supported.
12. Do not claim a bug is a duplicate without evidence.
13. Do not assume unspecified system behavior.
14. Clearly distinguish facts from assumptions.
15. Clearly distinguish missing information from incorrect information.

---

# Root Cause Rules

The Skill reviews the reported problem.

It must NOT invent or confidently state a technical root cause.

For example:

Incorrect:

> The database transaction is failing because of a race condition.

when no evidence supports this.

Correct:

> The report does not provide enough evidence to determine the technical root cause.

---

# Severity Classification

When identifying quality problems in the bug report, use:

## Critical

The report cannot meaningfully be reproduced or investigated because essential information is missing or contradictory.

## High

The report has significant deficiencies that can cause incorrect investigation, reproduction failure, or incorrect understanding of the problem.

## Medium

The report contains information gaps or ambiguity that can slow investigation or cause misunderstanding.

## Low

The issue has limited impact on report quality but should be improved.

Severity refers to the QUALITY OF THE BUG REPORT unless explicitly reviewing the severity of the reported product defect.

Do not confuse:

- bug report quality severity;
- product defect severity.

---

# Bug Report Review Status

Use one of the following statuses.

## APPROVED

The bug report is sufficiently clear, reproducible, and actionable.

## NEEDS IMPROVEMENT

The report can be understood or reproduced but contains quality issues that should be corrected.

## BLOCKED

The report cannot be meaningfully reproduced or investigated because critical information is missing or contradictory.

## CANNOT FULLY VERIFY

The report can be reviewed structurally, but the actual defect cannot be fully verified because expected behavior or supporting evidence is missing.

---

# Review Process

For every bug report:

1. Read the complete bug report.
2. Identify the reported problem.
3. Review the title.
4. Review preconditions.
5. Review reproduction steps.
6. Review test data.
7. Review expected result.
8. Review actual result.
9. Review evidence.
10. Review environment information.
11. Review frequency and reproducibility.
12. Review severity and priority.
13. Review impact.
14. Review traceability.
15. Check consistency with the requirement when provided.
16. Check consistency with the test case or scenario when provided.
17. Identify missing information.
18. Identify contradictions.
19. Assign severity to report-quality issues.
20. Determine overall review status.
21. Provide actionable recommendations.

---

# Output Format

Always use the following structure.

# QA Bug Report Review

## 1. Bug Report

Provide:

- Bug ID
- Title
- Requirement Reference
- Test Case / Scenario Reference

Use "Not provided" when information is absent.

---

## 2. Overall Status

Status:

APPROVED / NEEDS IMPROVEMENT / BLOCKED / CANNOT FULLY VERIFY

Brief explanation.

---

## 3. Review Summary

| Criterion | Status | Comment |
|---|---|---|
| Title | Pass / Issue | |
| Clarity | Pass / Issue | |
| Reproducibility | Pass / Issue | |
| Preconditions | Pass / Issue / N/A | |
| Steps to Reproduce | Pass / Issue | |
| Expected Result | Pass / Issue / Cannot Verify | |
| Actual Result | Pass / Issue | |
| Evidence | Pass / Issue / N/A | |
| Environment | Pass / Issue / N/A | |
| Frequency | Pass / Issue / N/A | |
| Severity | Pass / Issue / Cannot Verify | |
| Priority | Pass / Issue / Cannot Verify | |
| Impact | Pass / Issue / N/A | |
| Traceability | Pass / Issue / N/A | |

---

## 4. Issues

| ID | Severity | Criterion | Issue | QA Impact |
|---|---|---|---|---|

Every issue must be supported by the provided information.

---

## 5. Missing Information

List information necessary for understanding, reproduction, or investigation.

If none:

> None.

---

## 6. Clarification Questions

Provide specific questions that should be answered by QA, Product, BA, Developer, or another responsible person.

Questions must address actual information gaps.

---

## 7. Expected vs Actual

### Expected

State the expected behavior only if supported by:

- requirement;
- acceptance criteria;
- test case;
- scenario;
- explicit information from the user.

### Actual

Summarize the observed behavior from the bug report.

If expected behavior is not available:

> Expected behavior cannot be independently verified from the provided information.

---

## 8. Reproduction Readiness

Use:

- Ready to reproduce
- Requires clarification
- Blocked

Explain why.

---

## 9. Traceability

Show:

Requirement
→ Test Case / Scenario
→ Bug

Use only references actually provided.

---

## 10. Suggested Improvements

Provide actionable improvements.

Do not invent missing technical or business information.

When clarification is required, provide a question instead of an invented answer.

---

## 11. Final Recommendation

Use one:

- Approve
- Improve and re-submit
- Clarify expected behavior
- Provide reproduction information
- Block investigation

---

# Important Rules

The Skill reviews the quality of the bug report.

It must NOT:

- invent root causes;
- invent expected behavior;
- invent reproduction steps;
- invent test data;
- invent environment information;
- invent business impact;
- invent severity;
- invent priority;
- claim a duplicate without evidence;
- silently rewrite the original bug report.

If the user explicitly asks for a corrected bug report, provide it separately and clearly label it:

> Suggested Revised Bug Report

---

# Final Validation

Before producing the final answer, verify that:

- title quality was reviewed;
- reproduction steps were reviewed;
- expected and actual results were separated;
- missing information was identified;
- evidence was evaluated where relevant;
- environment was evaluated where relevant;
- severity and priority were not confused;
- traceability was checked when available;
- technical root cause was not invented;
- business impact was not invented;
- expected behavior was not invented;
- reproduction steps were not invented;
- every identified issue is supported by evidence;
- severity is justified;
- the required output structure is followed.