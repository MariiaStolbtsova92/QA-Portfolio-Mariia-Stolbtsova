# Test Plan Generator — Stress Tests

## TP-001 — Basic Feature

### Input

Users can log in using a valid username and password.

### Expected

The Skill should create a basic test plan focused on:

- functional testing;
- authentication-related behavior;
- positive and negative testing where applicable.

It should not invent:

- MFA;
- password complexity;
- supported browsers;
- session timeout.

---

## TP-002 — Missing Scope

### Input

The application will be updated.

### Expected

Status:

NEEDS CLARIFICATION or BLOCKED.

The Skill should ask what functionality is being changed and what is included in the release.

It must not invent the testing scope.

---

## TP-003 — Mobile Requirement

### Input

The website must work on mobile devices.

### Expected

Consider compatibility testing.

Identify missing:

- mobile operating systems;
- browsers;
- supported devices;
- screen sizes.

Do not invent a device matrix.

---

## TP-004 — Performance

### Input

The application should respond quickly.

### Expected

Identify missing measurable performance criteria.

Ask for:

- response-time target;
- relevant operations;
- load conditions.

Do not invent "2 seconds".

---

## TP-005 — Timeline

### Input

The feature must be tested before release on September 15.

### Expected

Include the provided deadline.

Do not invent:

- start date;
- number of QA engineers;
- daily testing capacity.

---

## TP-006 — Test Environment

### Input

The feature will be tested in the staging environment.

### Expected

Include staging as the test environment.

Do not invent:

- browser versions;
- operating systems;
- server configuration.

---

## TP-007 — Test Data

### Input

The system processes customer payments.

### Expected

Identify payment-related test data as required.

Do not invent:

- card numbers;
- currencies;
- payment providers;
- transaction amounts.

---

## TP-008 — External Dependency

### Input

The application sends customer information to an external CRM system.

### Expected

Include integration testing and identify the CRM as a dependency.

Consider integration failure testing.

Do not invent:

- API status codes;
- retry mechanism;
- timeout values.

---

## TP-009 — Entry Criteria

### Input

Testing can start after a test build is deployed to the staging environment.

### Expected

Include this as a confirmed entry criterion.

Do not invent additional entry criteria as confirmed project rules.

---

## TP-010 — Exit Criteria Hallucination

### Input

Testing must be completed before release.

### Expected

Do not invent:

- 100% test execution;
- 95% pass rate;
- zero critical defects.

Identify that detailed exit criteria require clarification.

---

## TP-011 — High-Risk Feature

### Input

The application processes business-critical payments through an external payment provider.

### Expected

Consider:

- functional testing;
- integration testing;
- security;
- data integrity;
- negative scenarios;
- regression;
- external dependency risk.

Do not invent provider-specific behavior.

---

## TP-012 — Out of Scope Trap

### Input

The requirement describes a new password-reset feature.

Nothing is stated about other application features.

### Expected

The Skill must not declare:

> Profile management is out of scope.

unless this is explicitly stated.

It should identify the scope boundary as requiring clarification if necessary.



## TP-013 — Do Not Generate Scenarios

### Input

Feature:

Users can reset their password using their registered email address.

The password reset link is valid for 30 minutes.

### Expected

The Skill should define the testing approach.

It may say:

- functional testing;
- validation testing;
- boundary testing;
- security considerations;
- email integration dependency.

It must NOT produce detailed scenarios such as:

"Verify that the user can reset the password with a valid email."

Those belong to the Test Scenario Generator.