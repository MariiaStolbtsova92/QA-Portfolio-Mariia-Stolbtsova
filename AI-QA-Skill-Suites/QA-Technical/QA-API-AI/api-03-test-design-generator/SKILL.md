---

name: api-03-test-design-generator
description: Generates traceable API test scenarios and test cases from requirements, acceptance criteria, OpenAPI or Swagger, schemas, examples, and documented business rules. Covers positive, negative, validation, boundary, authorization, authentication, status code, and schema testing only when supported by the provided evidence.
---

# API Test Design Generator

## Purpose

Design practical, traceable API tests from documented requirements and API contracts.

Determine:

1. What API behavior must be tested?
2. What test cases are needed to verify it?

Never invent API behavior, rules, fields, values, status codes, roles, authentication, business logic, or expected results.

If required information is missing, mark it as **Not Specified** or **Needs Clarification**.

---

# Input

Use any provided:

* Requirements
* Acceptance Criteria
* OpenAPI / Swagger
* Request / response schemas
* Examples
* Business rules
* API Contract Analyzer results

Previous Skill output is supporting evidence, not a new requirement.

---

# Test Design Rules

Extract only explicitly testable behavior.

### Positive

Create valid-data scenarios when successful behavior is documented.

### Negative

Test documented invalid conditions such as:

* missing required fields;
* invalid values;
* invalid formats;
* documented unauthorized/forbidden conditions;
* nonexistent resources;
* invalid states.

Do not invent security or invalid-input cases that are not supported.

### Boundaries

When a measurable limit exists, cover:

* minimum;
* maximum;
* just below minimum;
* just above maximum.

Example:

```text
8–20 characters
```

→ 7, 8, 20, 21.

Do not invent boundaries.

### Validation

Cover explicitly defined:

* requiredness;
* min/max length;
* ranges;
* types;
* formats;
* allowed values;
* uniqueness;
* nullability.

### Authentication / Authorization

Generate only when explicitly documented.

Example:

```text
Only administrators can delete users.
```

→ Admin can delete user.
→ Non-admin cannot delete user.

Do not invent additional roles or authentication mechanisms.

### Status Codes

Test documented status codes and conditions only.

### Request / Response Schema

Cover documented:

* fields;
* types;
* requiredness;
* formats;
* nested objects;
* arrays;
* nullability;
* documented headers.

### State Transitions

Test documented state transitions only.

---

# Test Design Principles

## Traceability

Every scenario should map to its source requirement when an ID exists.

```text
Requirement → Scenario → Test Case
```

Never invent requirement IDs.

## Deduplication

Do not create duplicate scenarios or test cases.

Keep cases separate when they differ in:

* input;
* boundary;
* role;
* state;
* condition;
* expected result.

## Test Data

Use representative generic data when the contract defines the data type but not specific business values.

Do not present invented test data as an API rule.

## Expected Results

Expected results must come from documented requirements, acceptance criteria, contract, or examples.

Do not add assumptions such as database persistence unless explicitly documented.

---

# Coverage Check

Before finalizing:

* Every explicitly testable requirement should map to at least one scenario.
* Every generated test case must map to a scenario.
* Identify partially covered or uncovered requirements.
* Identify requirements that cannot be tested because information is missing.

Do not claim full coverage when evidence is insufficient.

---

# Priority

Use priority only when supported by provided business impact.

Allowed:

* Critical
* High
* Medium
* Low
* Not Specified

Never infer business priority without evidence.

---

# Hallucination Guard

Before creating a test, verify that the required behavior is supported by the input.

Never invent:

* endpoints or methods;
* request/response fields;
* validation rules;
* status codes;
* boundary values without defined limits;
* roles or permissions;
* authentication mechanisms;
* error messages;
* business rules;
* database behavior;
* integrations;
* performance/security/compatibility requirements.

If behavior is undefined, report the missing information instead of creating an expected result.

---

# Output

Keep output concise and proportional to the input.

Do not repeat the requirements or explain obvious testing concepts.

## Mode A — Scenarios

When asked for scenarios only:

### API Test Scenarios

| ID | Requirement | Endpoint | Category | Scenario | Expected Behavior | Priority |
| -- | ----------- | -------- | -------- | -------- | ----------------- | -------- |

Then include only if relevant:

### Coverage Gaps

Requirements that are partially covered, uncovered, or blocked.

### Missing Information

Information required to design additional tests.

---

## Mode B — Test Cases

When asked for detailed test cases:

### API Test Cases

| ID | Scenario | Requirement | Title | Preconditions | Test Data | Request | Expected Result | Priority |
| -- | -------- | ----------- | ----- | ------------- | --------- | ------- | --------------- | -------- |

Include detailed steps only when they add value or are requested.

For each case:

```text
TC-001 — <Title>
Scenario: <scenario>
Requirement: <reference>
Preconditions: <if needed>
Test Data: <data>
Request: <request>
Steps:
1. ...
2. ...
Expected: <documented result>
Status: <documented status or Not Specified>
Validation: <relevant checks>
Priority: <priority>
```

---

## Mode C — Complete Test Design

When scenarios and test cases are requested:

### API Test Design

1. **Scenarios**
2. **Test Cases**
3. **Traceability**
4. **Coverage Gaps**
5. **Missing Information**

Do not duplicate the same information across sections.

---

# Final Quality Check

Before answering:

* Requirements and contract were considered.
* Positive cases were included when supported.
* Negative cases were included when supported.
* Boundaries were covered when measurable limits exist.
* Validation rules were covered.
* Authentication/authorization were covered only when documented.
* Request/response schemas were considered.
* Documented status codes were considered.
* Every test case maps to a scenario.
* Traceability is preserved.
* Duplicate tests are minimized.
* Missing information is identified.
* Expected results are evidence-based.
* No undocumented behavior was invented.
* Output is concise and actionable.
