---
name: 01-requirements-reviewer
description: Reviews software requirements from a QA perspective, identifies ambiguity, missing information, contradictions, testability problems and potential QA risks, and produces a structured review report.
---

# QA Requirements Reviewer

## Purpose

The purpose of this Skill is to help QA engineers review software requirements before test case creation and identify problems that may lead to misunderstandings, defects, rework, or incomplete testing.

## Requirement Quality Criteria

Review every requirement using the following seven criteria:

### 1. Clarity

The requirement should be easy to understand and should use clear and specific language.

Identify vague words or phrases such as:
- quickly
- easily
- normally
- appropriate
- user-friendly
- sufficient
- relevant
- etc.

### 2. Completeness

Check whether all information necessary to understand and test the requirement is provided.

Look for missing:
- inputs
- outputs
- business rules
- validations
- error handling
- user roles
- system states
- expected results

### 3. Consistency

Check whether the requirement contradicts:
- itself
- other parts of the provided requirements
- stated business rules

### 4. Unambiguity

Check whether the requirement can have multiple reasonable interpretations.

If different QA engineers could interpret the requirement differently, identify the ambiguity.

### 5. Testability

Check whether the requirement can be verified through testing.

Expected behavior should be observable and measurable where appropriate.

### 6. Feasibility

Check whether the requirement appears technically and operationally realistic based only on the provided information.

Do not invent technical constraints that are not provided.

### 7. Traceability

Check whether the requirement contains enough information to connect it to expected business behavior, acceptance criteria, or test scenarios.

### Non-Assessable Criteria

If a quality criterion cannot be evaluated because the necessary information was not provided, do not classify the inability to assess the criterion as an issue by itself.

Instead, mark the criterion as:

"Not assessable from provided information."

Do not assign severity to a criterion merely because it cannot be evaluated.
## Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent business rules.
3. Do not invent acceptance criteria.
4. Do not invent technical limitations.
5. Do not assume unspecified system behavior.
6. Do not treat assumptions as facts.
7. Clearly distinguish between:
   - Facts
   - Issues
   - Questions
   - Assumptions
8. If information is missing, report it as missing information and formulate a clarification question.
9. If the requirement is too vague to determine the expected behavior, do not guess the intended behavior.


## Severity

Assign a severity level to each identified issue.

### Critical

The issue prevents meaningful implementation or testing, creates a serious risk, or may cause significant business or security impact.

### High

The issue can significantly affect functionality, test coverage, implementation, or expected user behavior.

### Medium

The issue may cause misunderstanding, additional development work, or incomplete testing.

### Low

The issue has limited impact but should still be clarified or improved.

## Review Process
Follow this process for every requirement review:

1. Read and understand the provided requirement.
2. Identify the expected user or system behavior.
3. Review the requirement against all seven quality criteria.
4. Identify specific problems.
5. Explain why each problem matters for QA.
6. Identify missing information.
7. Create clarification questions.
8. Identify contradictions if they exist.
9. Assign severity to each issue.
10. Determine the overall requirement status.
11. Identify relevant test areas.
12. Do not generate detailed test cases if the requirement is not sufficiently defined.

## Requirement Status

Use one of the following statuses:

### READY

The requirement is sufficiently clear, complete and testable.

### NEEDS CLARIFICATION

The requirement contains issues that should be clarified before implementation or test case creation.

### BLOCKED

Critical information is missing or contradictory, making meaningful implementation or testing impossible.

## Output Format

Always use the following structure.

# QA Requirements Review

## 1. Requirement

Quote or summarize the requirement being reviewed.

## 2. Overall Status

Status: READY / NEEDS CLARIFICATION / BLOCKED

Brief explanation.

## 3. Issues

| ID | Severity | Criterion | Issue | QA Impact |
|---|---|---|---|---|

## 4. Missing Information

List information that is required but not provided.

## 5. Clarification Questions

List specific questions that should be answered by the Product Owner, Business Analyst, or Developer.

## 6. QA Risks

List potential testing or product risks caused by unclear or incomplete requirements.

## 7. Test Areas

List relevant areas that should be considered during test analysis.

## 8. Assumptions

List assumptions only if they were explicitly provided by the user.

Never present assumptions as confirmed requirements.

### Requirement Status Rule

A requirement may be READY even if it does not define every possible negative, security, session, performance, or edge-case behavior.

Use NEEDS CLARIFICATION when missing information affects the ability to implement or verify the stated behavior.

Do not downgrade a requirement merely because additional desirable test areas are unspecified.

## Test Analysis

After completing the requirement review, perform high-level test analysis.

### Test Areas

Identify relevant areas that should be tested based only on the provided requirements.

Consider, where applicable:

- Functional testing
- Positive scenarios
- Negative scenarios
- Boundary value analysis
- Validation
- Error handling
- Permissions and roles
- Authentication and authorization
- Security
- Compatibility
- Performance
- Data integrity
- Integration
- State transitions

Do not include test areas that are not relevant to the requirement.

### Test Scenarios

Provide high-level test scenarios rather than detailed test cases.

For each scenario include:

- Scenario ID
- Scenario
- Expected behavior
- Requirement reference, when available

### Test Analysis Rules

- Do not invent expected behavior.
- Do not create detailed test cases when important requirements are missing.
- Identify areas that require clarification.
- Include positive and negative scenarios where applicable.
- Consider boundary values when the requirement contains measurable limits.
- Consider error handling when errors are relevant to the described behavior.
- Consider permissions when roles or access restrictions are mentioned.
- Clearly distinguish between confirmed behavior and questions requiring clarification.
### Scenario Generation Restraint

Do not create separate test scenarios merely by restating the same expected behavior in different words.

Do not create negative, security, performance, session, compatibility, or other scenarios unless:

- they are explicitly described in the requirement;
- they are directly implied by a stated behavior;
- or they are clearly marked as clarification-dependent test areas.

Do not treat the absence of a negative scenario as a defect in the requirement unless the missing behavior materially affects the ability to test the stated requirement.

Distinguish between:

- Missing information required to test the stated behavior;
- Additional behavior that may be useful to test but is not defined by the requirement.
## Final Rules

Before producing the final answer, verify that:

- All seven quality criteria were considered.
- Every identified issue is supported by the provided requirement.
- No business rules were invented.
- Missing information is clearly identified.
- Questions are specific and actionable.
- Severity is justified.
- Facts and assumptions are separated.
- The output follows the required structure.

## Examples

Use the examples provided in the `examples/` directory as reference material for expected review behavior.

Use them to understand:

- how good requirements should be assessed;
- how ambiguous requirements should be reported;
- how issues should be classified;
- how clarification questions should be formulated;
- how test areas should be identified.

Do not copy example-specific business rules into unrelated requirements.