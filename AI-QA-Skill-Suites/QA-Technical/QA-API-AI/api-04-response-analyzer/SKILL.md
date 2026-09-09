---

name: api-04-response-analyzer
description: Analyzes actual API responses against documented requirements, test cases, API contracts, and schemas. Identifies failed assertions, status and schema mismatches, data inconsistencies, undocumented behavior, and potential defects without inventing expected behavior.
---

# API Response Analyzer

## Purpose

Analyze an actual API response against documented expected behavior.

Compare only available evidence from:

* Actual request/response
* Test case and expected result
* Requirements / acceptance criteria
* OpenAPI / Swagger / schemas
* Documented examples

Determine for each assessable check:

* PASS
* FAIL
* CANNOT BE DETERMINED
* NOT APPLICABLE

Never invent expected behavior.

## Evidence Priority

When multiple sources define expected behavior, use this order:

1. Acceptance criteria
2. Requirements
3. Test case expected result
4. API contract / OpenAPI
5. Documented examples

If sources conflict, report the conflict. Do not silently choose one.

Actual response is evidence, not expected behavior.

## Analysis Rules

Check only what is explicitly defined.

### HTTP Status

Compare actual status with the documented expected status.

If expected status is not defined:

> CANNOT BE DETERMINED

Never assume `200` means success.

### Response Body

Check body presence or absence only when explicitly defined.

Do not assume successful responses must contain JSON.

### Content Type

Validate Content-Type only when expected by the contract, requirement, or test case.

### Schema

When a response schema is available, check:

* Object / array structure
* Required fields
* Field names
* Data types
* Formats
* Nested objects
* Arrays
* Nullability
* Explicit constraints

Do not invent schema rules.

### Field Values

Compare actual values with expected values only when explicitly provided.

Do not infer expected values from typical API behavior.

### Headers

Check documented headers such as:

* Content-Type
* Location
* Correlation/request ID
* Documented custom headers

Do not assume undocumented headers are required.

### Error Responses

For documented error responses, check:

* Status code
* Error structure
* Error code
* Required fields
* Documented validation details

Do not validate exact error messages unless explicitly specified.

### Request → Response Relationships

Check relationships only when documented.

Examples:

* Submitted value is returned
* Created resource ID is returned
* Updated field contains requested value

Do not infer business logic or persistence behavior.

### Additional Fields

If actual response contains fields not defined in the schema:

* If additional fields are allowed/unspecified → report as undocumented behavior.
* If schema explicitly forbids them → FAIL.

Do not automatically treat extra fields as defects.

## Failure Classification

Classify a failed check as:

**CONTRACT VIOLATION** — actual response conflicts with an explicit API contract.

**REQUIREMENT VIOLATION** — actual response conflicts with an explicit requirement or acceptance criterion.

**TEST CASE FAILURE** — actual response does not satisfy the test case expected result.

**DOCUMENTATION CONFLICT** — provided sources define different expected behavior.

**CANNOT BE DETERMINED** — evidence is insufficient to establish correctness.

If multiple sources conflict, report the conflict instead of treating the response as definitively wrong.

## Defect Assessment

A failed assertion is not automatically a confirmed defect.

Use:

* **Confirmed Defect** — expected behavior is explicit and actual behavior clearly violates it.
* **Potential Defect** — unexpected behavior is observed but evidence is insufficient for confirmation.
* **Requires Investigation** — additional evidence is needed.

Do not create a defect when expected behavior is undefined.

### Severity

Use severity only when supported by evidence:

* **Critical** — documented failure prevents a fundamental operation.
* **High** — significant documented behavior fails.
* **Medium** — relevant behavior fails without evidence of critical impact.
* **Low** — minor documented inconsistency.
* **Not Specified** — impact cannot be established.

Do not infer business impact.

## Multiple Failures

Report independent failures separately.

Avoid duplicates caused by the same underlying mismatch.

Preserve exact field paths.

Example:

If `user.id` is `"123"` but the contract requires integer:

> `user.id` type mismatch — FAIL.

Do not create additional defects merely because related assertions depend on the same mismatch.

## Missing Information

List only information that prevents complete analysis.

Examples:

* Expected status not defined
* Response schema missing
* Expected field value not provided
* Nullability undefined
* Expected error structure missing
* Request/response relationship undefined

Do not use Missing Information for behavior that is simply undocumented unless it prevents the requested analysis.

## Output

Keep the response concise and proportional to the evidence.

# API Response Analysis

## 1. Analysis Scope

| Evidence            | Available |
| ------------------- | --------- |
| Request             | Yes/No    |
| Actual Response     | Yes/No    |
| Status Code         | Yes/No    |
| Headers             | Yes/No    |
| Response Body       | Yes/No    |
| Test Case           | Yes/No    |
| Expected Result     | Yes/No    |
| API Contract        | Yes/No    |
| Requirements        | Yes/No    |
| Acceptance Criteria | Yes/No    |

Briefly state what can and cannot be assessed.

## 2. Execution Summary

| Metric               | Count |
| -------------------- | ----: |
| Total Checks         |     X |
| Passed               |     X |
| Failed               |     X |
| Cannot Be Determined |     X |
| Not Applicable       |     X |

## 3. Assertion Results

| ID   | Check       | Expected | Actual | Result |
| ---- | ----------- | -------- | ------ | ------ |
| A-01 | HTTP Status | 201      | 201    | PASS   |
| A-02 | `id` type   | integer  | string | FAIL   |

Include only assessable checks.

## 4. Failed Checks

| ID   | Check     | Expected | Actual | Classification     | Severity |
| ---- | --------- | -------- | ------ | ------------------ | -------- |
| F-01 | `id` type | integer  | string | Contract Violation | Medium   |

Include this section only when failures exist.

## 5. Undocumented Behavior

List observable behavior not explicitly defined by the available documentation.

Examples:

* Additional response field
* Additional header
* Undocumented response structure

Do not classify it as a defect unless the documentation explicitly prohibits it.

If none:

> None identified.

## 6. Potential Defects

Create a defect only when evidence supports it.

### DEF-001 — <Short Title>

**Observed:** <actual behavior>

**Expected:** <documented behavior>

**Evidence:**
<requirement / test case / contract>

**Impact:** <only evidence-supported impact>

**Severity:** <severity or Not Specified>

**Status:**
Confirmed Defect / Potential Defect / Requires Investigation

## 7. Missing Information

List only information required to complete the analysis.

If none:

> None.

## 8. Final Assessment

Choose one:

**PASS** — all assessable checks passed.

**FAIL** — one or more explicit expected-behavior checks failed.

**PARTIALLY PASSING** — some checks passed and others cannot be determined.

**CANNOT BE DETERMINED** — insufficient evidence to assess correctness.

**REQUIRES INVESTIGATION** — unexpected behavior was observed, but available evidence is insufficient for confident classification.

## Hallucination Guard

Always follow these rules:

1. Expected behavior must come from provided evidence.
2. Never invent fields, values, schemas, status codes, validation rules, error messages, headers, or business rules.
3. Never assume undocumented behavior is incorrect.
4. Never treat a missing field as a failure unless it is explicitly required.
5. Never treat an unexpected status as wrong without a documented expected status.
6. Never infer database, backend, security, performance, or business behavior.
7. Separate failed assertions from defect classification.
8. Separate Missing Information from undocumented behavior.
9. Preserve observable evidence and exact field paths.
10. If evidence is insufficient, use CANNOT BE DETERMINED.

## Final Quality Check

Before answering, verify:

* Actual response was compared with documented expectations.
* Status was checked when expected status exists.
* Schema/types/required fields/nullability were checked when defined.
* Headers/content type were checked when defined.
* Expected values were compared when provided.
* Error behavior was checked when documented.
* Extra fields were not automatically treated as defects.
* Every failure has evidence.
* Defect status and severity are evidence-based.
* Missing information is clearly separated.
* No expected behavior was invented.
* Output is concise and actionable.
