---
name: 03-test-scenario-generator
description: Generates high-level QA test scenarios from software requirements, covering positive, negative, boundary, validation, error handling, permissions, security, compatibility, integration and state-based scenarios without inventing unspecified behavior.
---

# QA Test Scenario Generator

## Purpose

The purpose of this Skill is to help QA engineers transform sufficiently defined software requirements into structured high-level test scenarios.

The Skill focuses on test analysis rather than detailed test case creation.

It identifies relevant test conditions and generates scenarios that can be used as a basis for detailed test cases.

The Skill must use only information explicitly provided in the requirements.

---

## Input

The Skill accepts:

- Software requirements
- User stories
- Acceptance criteria
- Functional specifications
- Business rules

The input may contain one or multiple related requirements.

The Skill should preserve the relationship between requirements and generated test scenarios whenever requirement identifiers or references are available.

---

## Preconditions

Before generating test scenarios, determine whether the provided requirements contain enough information to perform meaningful test analysis.

If critical information is missing:

1. Identify the missing information.
2. Explain why it affects test design.
3. Mark affected scenarios as requiring clarification.
4. Do not invent the missing behavior.

If the requirements contain contradictions, do not choose one interpretation.

Identify the contradiction and mark affected test scenarios as requiring clarification.

---

## Test Analysis Principles

Analyze the provided requirements and identify testable behavior.

Consider the following dimensions where applicable:

- Positive scenarios
- Negative scenarios
- Boundary scenarios
- Validation
- Error handling
- Business rules
- User roles and permissions
- Authentication and authorization
- State transitions
- Data integrity
- Integration behavior
- Security
- Compatibility
- Performance
- Recovery behavior

Only include dimensions that are relevant to the provided requirements.

Do not generate test areas merely because they are listed in this Skill.

---

## Positive Scenarios

Identify scenarios where the user or system performs an action using valid input and the stated conditions are satisfied.

Examples:

- valid data submission;
- successful authentication;
- successful creation;
- successful update;
- successful deletion;
- successful processing.

Expected behavior must come from the requirement.

Do not invent additional successful outcomes.

---

## Negative Scenarios

Identify scenarios where invalid input, invalid state, failed conditions or explicitly defined error conditions are involved.

Consider negative scenarios when the requirement provides enough information to determine expected behavior.

If the requirement does not define the expected behavior for an invalid condition:

- identify the missing information;
- create a clarification question;
- do not invent the expected result.

---

## Boundary Scenarios

Identify boundary conditions when requirements contain measurable limits.

Examples:

- minimum value;
- maximum value;
- minimum length;
- maximum length;
- exact threshold;
- number of attempts;
- time limit;
- file size limit.

Where appropriate, consider:

- just below the boundary;
- exactly at the boundary;
- just above the boundary.

Do not invent boundary values when the requirement does not provide a measurable limit.

---

## Validation Scenarios

Identify validation scenarios when requirements specify validation rules.

Consider:

- required fields;
- allowed values;
- prohibited values;
- formats;
- ranges;
- lengths;
- data types;
- dependencies between fields.

If validation behavior is not specified, identify it as missing information rather than inventing validation rules.

---

## Error Handling

Identify error scenarios when the requirement defines error conditions or expected error behavior.

Consider:

- invalid input;
- failed operations;
- unavailable dependencies;
- rejected actions;
- system errors;
- recovery behavior.

Do not invent error messages, status codes, retry counts or recovery behavior unless they are explicitly specified.

---

## Permissions and Access Control

If the requirement mentions roles, permissions, authentication or authorization, identify relevant scenarios.

Consider:

- authorized user;
- unauthorized user;
- insufficient permissions;
- access to protected functionality;
- role-specific behavior.

Do not assume roles or permissions that are not specified.

---

## State Transitions

When the requirement describes changes between system states, identify scenarios for relevant state transitions.

Consider:

- initial state;
- successful transition;
- invalid transition;
- repeated action;
- transition from boundary or restricted states.

Only use states explicitly described or clearly implied by the provided requirement.

Do not invent additional states.

---

## Security

Consider security-related scenarios when security-sensitive behavior is explicitly present in the requirement.

Examples:

- authentication;
- authorization;
- access restrictions;
- sensitive data;
- account locking;
- password changes;
- security-related validation.

Do not introduce unrelated security requirements.

---

## Compatibility

Consider compatibility scenarios only when the requirement specifies supported:

- browsers;
- operating systems;
- mobile devices;
- screen sizes;
- platforms;
- versions.

Do not assume a browser, operating system or device matrix if it is not provided.

---

## Performance

Consider performance scenarios only when measurable performance requirements are provided.

Examples:

- response time;
- throughput;
- maximum processing time;
- concurrent users;
- transaction limits.

If performance is mentioned without measurable criteria, identify the missing information.

Do not invent performance thresholds.

---

## Integration

Consider integration scenarios when the requirement describes interaction with:

- APIs;
- external services;
- databases;
- payment providers;
- authentication providers;
- messaging systems;
- other systems.

Identify relevant success and failure scenarios based only on the described integration behavior.

Do not invent external system behavior.

---

## Data Integrity

Consider data integrity scenarios when the requirement involves creating, updating, deleting or transferring data.

Check relevant behavior such as:

- data creation;
- data update;
- data deletion;
- persistence;
- consistency between related operations.

Do not invent database implementation details.

---

## Scenario Granularity

Generate high-level test scenarios.

Do not generate detailed test cases with:

- detailed step-by-step instructions;
- specific test data not provided in the requirements;
- UI selectors;
- automation code;
- implementation details.

A scenario should describe:

- what is being tested;
- under which relevant condition;
- what behavior should be verified.

---

## Expected Result Rules

Expected behavior must be directly supported by the provided requirements.

If expected behavior is not specified:

- do not guess;
- mark the scenario as requiring clarification;
- formulate a clarification question.

Never present an inferred behavior as a confirmed expected result.

---

## Requirement Traceability

When requirement identifiers, user story IDs or acceptance criteria references are available, include them in the generated scenarios.

Each scenario should be traceable to its source requirement where possible.

If no identifier is provided, do not invent one.

---

## Scenario Priority

Assign a priority to scenarios using:

### High

Core functionality, critical business rules, security-sensitive behavior, important boundaries or high-risk failures.

### Medium

Important functional, validation, negative or integration scenarios that are not considered critical.

### Low

Additional scenarios with limited impact or lower risk.

Priority must be justified by the requirement or by the direct impact of the described behavior.

Do not assign High priority merely because a scenario is negative or a boundary case.

---

## Clarification Rules

When important information is missing, create clarification questions.

Examples:

- What is the expected behavior when the input is invalid?
- What file formats are supported?
- What is the maximum allowed file size?
- Which user roles are allowed to perform this action?
- What should happen when the external service is unavailable?

Questions must be specific and actionable.

Do not answer clarification questions by making assumptions.

---

## Output Format

Always use the following structure.

# QA Test Scenario Analysis

## 1. Requirements

Summarize the requirements used for test analysis.

## 2. Scenario Generation Status

Use one of the following statuses:

### READY

Use READY when at least one meaningful test scenario can be generated from the provided requirements without inventing behavior.

The presence of missing information for additional scenarios does not change the status to NEEDS CLARIFICATION if at least one complete scenario is supported by the requirements.

### NEEDS CLARIFICATION

Use NEEDS CLARIFICATION when the requirement describes testable behavior, but no fully defined scenario can be generated without clarification.

This status may also be used when the core behavior can be identified, but the expected result of the available scenario is not sufficiently defined to establish a meaningful pass/fail condition.

### BLOCKED

Use BLOCKED when the requirement does not provide enough information to identify any meaningful testable behavior.

Do not use BLOCKED merely because some additional scenarios or edge cases require clarification.

### Scenario Completeness Rule

Do not change READY to NEEDS CLARIFICATION only because additional negative, boundary, security, performance, or edge-case scenarios require clarification.

If at least one complete scenario has:
- a defined action or condition;
- a defined expected behavior;
- and sufficient information to test it;

the overall status should be READY.

Incomplete scenarios may still be listed separately and marked as requiring clarification.

## 3. Test Scenarios

| ID | Requirement | Priority | Type | Scenario | Expected Behavior |
|---|---|---|---|---|---|

Use scenario types such as:

- Positive
- Negative
- Boundary
- Validation
- Permission
- Security
- Integration
- Performance
- Compatibility
- State Transition
- Data Integrity


## Scenario Generation Principles

The Skill must generate high-level test scenarios only.

A test scenario describes WHAT should be verified, not HOW to verify it.

Do not include:
- detailed step-by-step actions;
- exact test data values;
- UI selectors;
- browser-specific instructions;
- database queries;
- API requests;
- detailed expected results beyond the behavior stated in the requirement.

Each scenario should represent a distinct behavior, condition, state, boundary, or risk that is supported by the provided requirements.

Do not create multiple scenarios that verify the same behavior unless they represent meaningfully different conditions.

Do not treat implementation details as required behavior unless they are explicitly stated in the requirement.

### No Derived Behavior Rule

Do not derive additional behavior from a requirement unless that behavior is explicitly stated.

For example:

Requirement:
"The system should save the updated profile information."

Do not automatically create scenarios for:
- persistence after page reload;
- persistence across sessions;
- persistence across devices;
- database storage;
- save confirmation;
- automatic refresh.


## Scope Control

Generate test scenarios only for behaviors explicitly supported by the provided requirements.

Do not convert unspecified or hypothetical behavior into test scenarios.

Examples of information that must NOT become test scenarios unless explicitly required:

- out-of-stock behavior;
- maximum limits;
- duplicate item handling;
- guest access;
- persistence across sessions;
- specific error handling;
- authentication requirements;
- security controls.

If such information may be relevant for testing but is not specified, list it under "Clarification Required" or "Potential Coverage Gaps" instead.

Do not create a test scenario solely because a behavior is commonly tested in similar applications.

## Strict Scenario Eligibility Rule

A test scenario may be generated ONLY when the behavior, condition, input, state, or constraint is explicitly stated in the provided requirement or explicitly provided user context.

Before generating a scenario, verify:

1. Is the behavior explicitly mentioned?
2. Is the condition explicitly mentioned?
3. Is the scenario supported by the requirement text?

If the answer is NO, do NOT create a test scenario.

Instead, report the item under "Clarification Required" or "Potential Coverage Gaps".

Do NOT create scenarios based on:
- common QA practice;
- typical e-commerce behavior;
- hypothetical edge cases;
- possible implementation behavior;
- assumed business rules;
- general security recommendations;
- generic negative testing;
- generic boundary testing.

### Example

Requirement:

"A customer can add a product to the shopping cart."

Allowed scenario:

"Customer adds a product to the shopping cart."

NOT allowed as scenarios:

- Customer adds an out-of-stock product.
- Customer adds the same product twice.
- Customer reaches a maximum cart limit.
- Guest customer adds a product.
- Cart persists after page reload.
- Product quantity increases after duplicate addition.

These may be relevant clarification questions, but they are NOT test scenarios unless explicitly specified in the requirement.

## Scope Boundary

Focus primarily on generating test scenarios from the provided requirements.

Do not perform a full test coverage analysis.

Do not evaluate whether the entire feature has sufficient coverage.

Do not identify unrelated testing areas unless they are directly supported by the requirement.

Detailed coverage analysis is handled by the Test Coverage Analyzer Skill.



## 4. Clarification Questions

List specific questions that should be answered before detailed test case creation.

## 5. QA Risks

List risks caused by incomplete or ambiguous requirements.

## 6. Assumptions

List assumptions only when they were explicitly provided by the user.

Never present assumptions as confirmed requirements.

## 7. Recommended Next Step

Recommend one of:

- Proceed to detailed test case creation.
- Clarify the identified requirements first.
- Return the requirement for clarification.
- Block test design until critical information is provided.

---

## Evidence and Hallucination Prevention

Follow these rules strictly:

1. Use only information explicitly provided by the user.
2. Do not invent business rules.
3. Do not invent acceptance criteria.
4. Do not invent expected behavior.
5. Do not invent technical constraints.
6. Do not invent test data unless explicitly provided.
7. Do not invent status codes, error messages or response times.
8. Do not assume unspecified user roles.
9. Do not assume supported browsers, devices or operating systems.
10. Do not assume security requirements that were not provided.
11. Clearly distinguish confirmed behavior from missing information.
12. If information is missing, formulate a clarification question.
13. If requirements contradict each other, identify the contradiction rather than selecting one interpretation.
14. Do not generate detailed test cases when critical requirements are undefined.

---

## Final Validation

Before producing the final response, verify that:

- Every scenario is supported by the provided requirements.
- Positive scenarios were considered where applicable.
- Negative scenarios were considered where applicable.
- Boundary scenarios were considered where measurable limits exist.
- Validation was considered where validation rules exist.
- Permissions were considered where roles or access restrictions are specified.
- Security was considered where security-sensitive behavior is specified.
- Integration was considered where external systems are involved.
- Performance was considered only when measurable requirements exist.
- Compatibility was considered only when supported platforms are specified.
- Expected behavior was not invented.
- Missing information is clearly identified.
- Clarification questions are specific and actionable.
- Requirement traceability is preserved where possible.
- The output follows the required structure.