# Functional Test Case Example

## Input

Requirement ID: REQ-LOGIN-001

Requirement:

The user can log in using a valid username and password.

Scenario ID: TS-LOGIN-001

Scenario:

Verify successful login with valid credentials.

## Expected Test Case

### TC-LOGIN-001 — Login with valid credentials

**Requirement Reference:**
REQ-LOGIN-001

**Scenario Reference:**
TS-LOGIN-001

**Priority:**
Not specified

**Test Type:**
Functional

**Preconditions:**

- User has a registered account.

**Test Data:**

- Valid username
- Valid password

**Steps:**

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Submit the login form.

**Expected Results:**

1. The login form accepts the provided credentials.
2. The user is successfully logged in.

## Important Rules Demonstrated

The example demonstrates:

- clear test case title;
- requirement traceability;
- scenario traceability;
- preconditions;
- test data;
- sequential steps;
- observable expected results.

The example does NOT assume:

- MFA;
- CAPTCHA;
- password expiration;
- specific error messages;
- specific browsers;
- session timeout.