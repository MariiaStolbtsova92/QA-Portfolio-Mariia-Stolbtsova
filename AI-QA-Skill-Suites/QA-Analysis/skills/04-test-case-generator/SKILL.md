---
name: 04-test-case-generator
description: Generates detailed, executable QA test cases from requirements and high-level test scenarios, including preconditions, test data, steps, expected results, priority, test type, and traceability while preventing invented behavior.
---

# QA Test Case Generator

## Purpose

The purpose of this Skill is to transform software requirements and high-level test scenarios into detailed, executable test cases.

The generated test cases should be clear enough for another QA engineer to execute without needing to interpret the intended behavior.

The Skill focuses on:

- test case design;
- test steps;
- expected results;
- preconditions;
- test data;
- priority;
- test type;
- requirement traceability.

---

# Input

The Skill may receive:

- requirements;
- user stories;
- acceptance criteria;
- high-level test scenarios;
- test plan information;
- business rules;
- validation rules;
- user roles;
- test data;
- environment information.

Use only information explicitly provided by the user.

If high-level scenarios are provided, use them as the primary basis for test case generation.

---

# Core Principle

Every test case must be directly supported by the provided requirements or test scenarios.

Do not invent:

- business rules;
- validation rules;
- error messages;
- UI elements;
- system behavior;
- database behavior;
- API responses;
- permissions;
- test data values;
- performance thresholds;
- security requirements.

If information required to create an executable test case is missing, identify the gap instead of guessing.

---

# Test Case Structure

Each test case should contain:

- Test Case ID
- Title
- Requirement Reference
- Scenario Reference
- Priority
- Test Type
- Preconditions
- Test Data
- Test Steps
- Expected Results

Use only fields that are relevant and supported by the input.

---

# Test Case ID

Use unique and readable identifiers.

Example:

TC-LOGIN-001

IDs should be sequential within the generated set.

Do not reuse IDs.

Do not invent requirement IDs or scenario IDs.

---

# Title

The title should clearly describe the behavior being verified.

Good:

> Login with valid username and password

Bad:

> Check login

Titles should be concise and specific.

---

# Requirement Reference

Link the test case to the provided requirement or requirement ID when available.

If no requirement ID exists, reference the requirement by a short description or indicate:

> Not provided

Do not invent requirement IDs.

---

# Scenario Reference

If test scenarios are provided, link each test case to its corresponding scenario.

If no scenario ID exists, reference the scenario by its short description.

Do not invent scenario IDs.

---

# Priority

Assign priority only when priority information is available.

If priority is not provided:

> Not specified

Do not invent High, Medium, or Low priority based only on personal assumptions.

If the user explicitly asks for risk-based prioritization, explain the basis for the assigned priority.

---

# Test Type

Identify the test type when it can be determined from the provided information.

Possible types include:

- Functional
- Negative
- Boundary
- Validation
- Integration
- Compatibility
- Security
- Performance
- Regression
- Usability

Do not assign a test type without a reasonable basis.

---

# Preconditions

List conditions that must exist before test execution.

Examples:

- User has a registered account.
- User is logged in.
- Required test data exists.
- Required environment is available.

Only include confirmed or explicitly provided conditions.

Do not invent account states or environment conditions.

---

# Test Data

List the data required to execute the test case.

Test data may be described generically when concrete values are not provided.

Examples:

- valid username;
- valid password;
- registered user account;
- invalid email;
- boundary value;
- username containing 5 characters.

Do not invent concrete values unless they are provided by the user.

The absence of concrete test data values does not automatically prevent test case generation.

If a generic test data description is sufficient for execution, use the generic description.

Example:

Requirement:

> The user can log in using a valid username and password.

Correct:

Test Data:

- Valid registered username
- Valid password

Incorrect:

Test Data:

- test@example.com
- Password123

Do not invent concrete credentials.

If a specific test data value or test account is explicitly required to determine expected behavior and cannot be reasonably described generically, identify it as a clarification.

---

# Test Data Availability

Concrete test data values are not required in the requirement itself.

When the requirement defines a data category but does not provide a concrete value, use a generic test data description.

Examples:

- Valid username
- Valid password
- Registered user account
- Invalid email
- Username with 5 characters

Do NOT mark generic test data as missing solely because a concrete value was not provided.

Do NOT create clarification questions for concrete values unless the value itself is part of the requirement or is necessary to determine expected behavior.

Example:

Requirement:

> The user can log in using a valid username and password.

Correct:

Test Data:

- Valid registered username
- Valid password

Incorrect:

Test Data:

- Valid username — clarification required
- Valid password — clarification required

Do not invent concrete credentials such as:

- test@example.com
- Password123

---

# Test Steps

Test steps must be:

- sequential;
- actionable;
- independently executable;
- concise;
- observable.

Each step should contain one clear action where practical.

Example:

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Select Login.

Do not include actions that are not supported by the requirement.

Do not add unnecessary implementation details.

---

# Expected Results

Expected results must describe the behavior that is explicitly stated or directly supported by the requirement or test scenario.

The expected result does not need to describe every possible UI detail.

If the requirement states a successful outcome, that outcome may be used directly as the expected result.

Example:

Requirement:

> The user can log in using a valid username and password.

Correct:

> The user is successfully logged in.

Do NOT require additional UI details such as:

- redirect destination;
- dashboard name;
- confirmation message;
- session token;
- specific page;
- specific UI state;

unless these are explicitly provided.

Do not invent additional behavior.

If the requirement does not define the expected behavior at all, identify the missing behavior and request clarification.

Do not mark a test case as requiring clarification merely because additional UI or implementation details are not specified.

---

# Positive Test Cases

Generate positive test cases when successful behavior is explicitly defined.

Example:

Requirement:

> User can log in using valid credentials.

Possible test case:

> Verify successful login using valid credentials.

Do not add unrelated successful scenarios.

---

# Negative Test Cases

Generate negative test cases only when expected behavior for invalid input or failure is defined or directly supported by the requirement.

Example:

Requirement:

> If the email field is empty, the system displays a validation error.

A negative test case can be generated.

If the requirement only states:

> The user can register using an email address.

Do not invent the expected behavior for invalid email addresses.

Instead identify:

> Negative behavior requires clarification.

Do not invent:

- error messages;
- validation behavior;
- account blocking;
- redirects;
- notifications.

---

# Boundary Test Cases

Generate boundary test cases when the requirement contains measurable limits.

Example:

> Password must contain between 8 and 20 characters.

Relevant boundaries include:

- 7 characters;
- 8 characters;
- 20 characters;
- 21 characters.

Do not invent boundaries when no measurable limit exists.

If a boundary value is known but the expected behavior outside the boundary is not specified, identify the expected behavior as requiring clarification.

---

### Boundary Validation Rule

When a requirement defines a valid range (e.g., 2–50 characters):

- Generate the lower valid boundary.
- Generate the upper valid boundary.
- Generate just below the lower boundary.
- Generate just above the upper boundary.

For values outside the defined valid range:

- Do NOT assume that the system rejects the value.
- Do NOT assume an error message, UI behavior, truncation, prevention, or validation mechanism.
- If the requirement does not explicitly define the system behavior for out-of-range values, mark the test case as NEEDS CLARIFICATION.
- The fact that a value violates a stated constraint does not by itself define the application's observable rejection behavior.

### UI Assumption Rule

Do not invent UI elements, controls, buttons, pages, navigation paths, or interaction mechanisms unless they are explicitly stated in the requirement or scenario.

If the interaction mechanism is not specified, use neutral wording such as:

"Provide/update the profile name value."

If a specific UI interaction is required but not defined, mark the relevant detail as NEEDS CLARIFICATION.

# Validation Test Cases

Generate validation test cases when validation rules are explicitly provided.

Consider:

- required fields;
- allowed values;
- length limits;
- formats;
- ranges;
- data types.

Do not invent validation rules.

Example:

Requirement:

> The email field is required.

Possible test:

> Submit the form with the email field empty.

Expected behavior:

> The system displays a validation error.

Only use this expected behavior if it is explicitly stated.

---

# Test Case Independence

Each test case should be independently executable where practical.

Avoid unnecessary dependencies between test cases.

If a dependency is required by the requirement, document it as a precondition.

Do not reference another test case as a prerequisite unless the dependency is explicitly required.

---

# Duplicate Prevention

Do not generate multiple test cases that verify the same behavior unless different:

- inputs;
- boundaries;
- roles;
- states;
- conditions;
- expected results

justify the distinction.

Avoid superficial variations.

---

# Traceability

Maintain traceability between:

Requirement
→ Scenario
→ Test Case

When identifiers are available, include them.

Example:

Requirement:

REQ-LOGIN-001

Scenario:

TS-LOGIN-001

Test Case:

TC-LOGIN-001

Do not invent missing identifiers.

---

# Incomplete Requirements

If the input is insufficient to create an executable test case:

1. Identify what information is missing.
2. Explain why it is needed.
3. Do not invent the expected behavior.
4. Create a clarification question.
5. Generate only test cases that are fully supported by the available information.

However, do not request clarification for information that is not necessary to determine whether the test case passes or fails.

For example:

Requirement:

> The user can log in using a valid username and password.

The following are sufficient:

- Valid registered username
- Valid password
- Successful login

The following are NOT required unless explicitly relevant:

- exact username value;
- exact password value;
- dashboard name;
- redirect URL;
- confirmation message.

---

# Clarification Threshold

Do not mark the entire test case set as NEEDS CLARIFICATION only because concrete test data values are not provided.

Use generic test data descriptions when they are sufficient.

Clarification is required when missing information affects:

- expected behavior;
- test scope;
- required conditions;
- required input;
- ability to determine pass/fail;
- ability to execute the intended test.

The following are NOT automatically clarification blockers:

- missing concrete test data values when generic test data is sufficient;
- missing UI details when the requirement defines the expected business outcome;
- missing implementation details that are irrelevant to test execution.

---

# Test Case Quality Rules

Every generated test case should be:

- clear;
- specific;
- testable;
- executable;
- traceable where possible;
- independent where practical;
- free from invented behavior.

Avoid:

- vague steps;
- combined actions that obscure execution;
- expected results that cannot be verified;
- assumptions presented as facts;
- unnecessary implementation details;
- invented UI behavior;
- invented test data.

---

# Output Format

Always use the following structure.

# Test Case Set

## Test Case Summary

| ID | Title | Priority | Type | Requirement | Scenario |
|---|---|---|---|---|---|

## Detailed Test Cases

### TC-XXX-001 — Title

**Requirement Reference:**  
REQ-XXX

**Scenario Reference:**  
TS-XXX

**Priority:**  
Not specified

**Test Type:**  
Functional

**Preconditions:**

- ...

**Test Data:**

- ...

**Steps:**

1. ...
2. ...
3. ...

**Expected Results:**

1. ...
2. ...
3. ...

---

# Clarifications Required

List information that prevents complete or reliable test case creation.

For each clarification include:

- Missing information
- Why it is required
- Specific question

Do not list information merely because a more detailed specification would be useful.

If no clarification is required:

> None.

---

# Test Case Generation Status

Use:

### READY

Test cases can be generated completely from the provided information.

### NEEDS CLARIFICATION

Some test cases can be generated, but important behavior, conditions, or required data are missing.

### BLOCKED

Critical information is missing and prevents meaningful test case generation.

Do not use NEEDS CLARIFICATION only because concrete test data values are not provided when generic test data is sufficient.

---

# Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent expected behavior.
3. Do not invent UI elements.
4. Do not invent error messages.
5. Do not invent business rules.
6. Do not invent validation rules.
7. Do not invent concrete test data values.
8. Do not invent priorities.
9. Do not invent requirement IDs.
10. Do not invent scenario IDs.
11. Do not invent technical implementation details.
12. Do not assume unspecified system states.
13. Clearly distinguish confirmed behavior from clarification requirements.
14. If expected behavior is missing, do not guess it.
15. Do not treat optional details as mandatory clarification blockers.
16. Do not turn reasonable QA execution details into invented requirements.

---

# Relationship With Other Skills

The expected QA workflow is:

01 Requirements Reviewer
↓
02 Test Plan Generator
↓
03 Test Scenario Generator
↓
04 Test Case Generator

This Skill consumes:

- requirements;
- test scenarios;
- test plan information.

This Skill produces:

- detailed executable test cases.

The Skill should not replace the Requirements Reviewer or Test Scenario Generator.

---

# Boundary With Test Scenario Generator

The Test Scenario Generator creates high-level testing scenarios.

The Test Case Generator converts those scenarios into detailed executable test cases.

Example:

Scenario:

> Verify login with valid credentials.

Test Case:

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Select Login.
5. Verify that the user is successfully logged in.

Do not create additional high-level scenarios unless explicitly requested.

---

# Final Validation

Before producing the final answer, verify that:

- Every test case has a clear purpose.
- Test steps are executable.
- Expected results are observable or directly supported by the requirement.
- Test cases are traceable where references are available.
- Test data is identified.
- Generic test data is used when appropriate.
- Preconditions are justified.
- Priority is not invented.
- Test type is justified.
- Boundary cases are included when measurable boundaries exist.
- Negative cases do not contain invented expected behavior.
- Duplicate test cases are avoided.
- Missing information is clearly identified.
- Clarifications are requested only when necessary.
- No business rules were invented.
- No UI behavior was invented.
- No technical behavior was invented.
- No concrete test data was invented.
- The output follows the required structure.