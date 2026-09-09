# Test Case Generator — Stress Tests

## TC-GEN-01 — Basic Functional Test

Requirement:

The user can log in using a valid username and password.

Scenario:

Verify successful login with valid credentials.

Expected:

Generate a detailed executable test case.

Must include:

- preconditions;
- test data;
- steps;
- expected results.

Must not invent:

- MFA;
- CAPTCHA;
- password expiration.

---

## TC-GEN-02 — Boundary Testing

Requirement:

A username must contain between 5 and 20 characters.

Scenario:

Verify username length boundaries.

Expected:

Generate coverage for:

- 4 characters;
- 5 characters;
- 20 characters;
- 21 characters.

Do not invent character restrictions.

---

## TC-GEN-03 — Missing Negative Behavior

Requirement:

The user can log in using valid credentials.

Scenario:

Verify login with an invalid password.

Expected:

Do not invent:

- error message;
- account lockout;
- redirect;
- password reset.

Identify that expected behavior for an invalid password requires clarification.

---

## TC-GEN-04 — Validation

Requirement:

The email field is required.

If the email field is empty, the system displays a validation error.

Scenario:

Verify required email validation.

Expected:

Generate a negative test case.

Do not invent the exact error message.

---

## TC-GEN-05 — Traceability

Requirement ID:

REQ-LOGIN-001

Scenario ID:

TS-LOGIN-003

Requirement:

The system locks a user account after 5 consecutive failed login attempts.

The account remains locked for 15 minutes.

Scenario:

Verify account lockout after five consecutive failed login attempts.

Expected:

Preserve:

REQ-LOGIN-001

TS-LOGIN-003

Generate detailed test cases.

Do not invent additional security behavior.

---

## TC-GEN-06 — Missing Test Data

Requirement:

The system accepts a username between 5 and 20 characters.

Scenario:

Verify the minimum username length.

Expected:

Identify that a concrete username value was not provided.

Do not invent a username value unless a test-data placeholder is appropriate.

---

## TC-GEN-07 — Duplicate Prevention

Requirement:

The user can log in using a valid username and password.

Scenario:

Verify successful login.

Expected:

Do not generate several identical test cases with only superficial wording differences.

---

## TC-GEN-08 — Missing Expected Result

Requirement:

The system validates the email field.

Scenario:

Verify invalid email input.

Expected:

Identify that the expected validation behavior is not specified.

Do not invent:

- error message;
- validation format;
- field highlighting;
- submission blocking.

---

## TC-GEN-09 — Independent Test Case

Requirement:

A registered user can change their password.

Scenario:

Verify successful password change.

Expected:

Generate a test case with appropriate preconditions.

Do not make the test dependent on another generated test case unless explicitly required.

---

## TC-GEN-10 — Hallucination Stress Test

Requirement:

The system sends an email after registration.

Scenario:

Verify email notification after registration.

Expected:

Generate only behavior supported by the requirement.

Do not invent:

- email content;
- delivery time;
- verification link;
- email subject;
- expiration;
- retry logic.