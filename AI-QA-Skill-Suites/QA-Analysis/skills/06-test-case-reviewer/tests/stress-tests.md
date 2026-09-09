# Test Case Reviewer — Stress Tests

## TEST 01 — Good Test Case

Requirement:

The user can log in using a valid username and password.

Test Case:

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Submit the login form.

Expected Result:

The user is successfully logged in.

Expected:

APPROVED

Do not require:

- exact credentials;
- MFA;
- CAPTCHA;
- specific redirect;
- session timeout.

---

## TEST 02 — Vague Expected Result

Requirement:

The user can log in using valid credentials.

Test Case:

Steps:

1. Open login.
2. Enter valid credentials.
3. Click Login.

Expected Result:

The login works correctly.

Expected:

NEEDS IMPROVEMENT

Issue:

Expected result is insufficiently observable.

Do not invent the missing expected behavior.

---

## TEST 03 — Ambiguous Step

Test Case:

1. Open the login page.
2. Do the login.
3. Check the result.

Expected:

Identify unclear steps.

Do not invent what "do the login" means.

---

## TEST 04 — Missing Requirement

Test Case:

1. Open the application.
2. Enter valid data.
3. Submit.

Expected Result:

The operation succeeds.

Expected:

The Skill may identify clarity and testability problems.

It must state that business correctness cannot be fully verified because no requirement is provided.

---

## TEST 05 — Generic Test Data

Requirement:

The user can log in using a valid username and password.

Test Data:

- Valid username
- Valid password

Expected:

Do NOT automatically report missing test data.

Generic data is acceptable if the test can use an available valid test account.

---

## TEST 06 — Requirement Contradiction

Requirement:

Only administrators can delete users.

Test Case:

Precondition:

User is not an administrator.

Steps:

1. Open user management.
2. Delete a user.

Expected:

The user is successfully deleted.

Expected:

Identify inconsistency with the requirement.

---

## TEST 07 — Scenario Contradiction

Scenario:

Verify successful login with valid credentials.

Test Case:

Enter an invalid password.

Expected:

Login is rejected.

Expected:

Identify inconsistency between scenario and test case.

---

## TEST 08 — Multiple Actions in One Step

Test Case:

1. Open the login page, enter username and password, click Login, and verify the dashboard.

Expected:

Identify that the step contains multiple actions and verification that may reduce clarity.

Do not automatically classify it as critical.

---

## TEST 09 — Missing Preconditions

Test Case:

Steps:

1. Open the order.
2. Approve the order.

Expected:

Order is approved.

No information is provided about the order state.

Expected:

Identify missing preconditions if the test cannot be meaningfully executed without knowing the initial state.

Do not invent the required state.

---

## TEST 10 — Incorrect Expected Result

Requirement:

The user can log out.

Test Case:

Steps:

1. Select Logout.

Expected Result:

The user remains logged in.

Expected:

Identify contradiction between requirement and expected result.

---

## TEST 11 — Unobservable Expected Result

Requirement:

The system saves the profile.

Expected Result:

The system behaves normally.

Expected:

Identify testability problem.

Do not invent the exact save behavior.

---

## TEST 12 — Duplicate Test Data

Test Case:

Test Data:

- username
- username
- password

Expected:

Identify unnecessary duplication if it does not serve a documented purpose.

Severity should not be exaggerated.

---

## TEST 13 — Traceability Gap

Requirement:

REQ-LOGIN-001

Scenario:

TS-LOGIN-001

Test Case:

TC-LOGIN-001

No references are included in the test case.

Expected:

Identify traceability issue.

Do not claim that the test case is functionally incorrect solely because references are missing.

---

## TEST 14 — Unsupported Behavior

Requirement:

The user can log in using valid credentials.

Test Case Expected Result:

The user is logged in and receives an email confirmation.

Expected:

Identify that email confirmation is not supported by the provided requirement.

Do not assume that the email behavior exists.

---

## TEST 15 — Good Boundary Test

Requirement:

Username must contain between 5 and 20 characters.

Test Case:

Test Data:

5 characters.

Expected Result:

The username is accepted.

Expected:

Review whether the test case is clear and consistent with the requirement.

Do not require additional boundaries as a Test Case Reviewer.

Coverage completeness belongs to the Coverage Analyzer.

---

## TEST 16 — Coverage vs Test Case Quality

Requirement:

Username must contain between 5 and 20 characters.

Test Case:

Username with 5 characters.

Expected:

The username is accepted.

Expected:

The Test Case Reviewer should review the quality of this test case.

It should NOT automatically report missing 4, 20, or 21 character tests.

That is the responsibility of the Test Coverage Analyzer.

---

## TEST 17 — Dependency

Test Case:

Precondition:

TC-LOGIN-001 must be executed first.

Expected:

Identify a dependency.

Do not automatically classify dependency as a defect if it is explicitly documented and necessary.

---

## TEST 18 — Maintainability

Test Case contains a long list of repeated setup instructions that are identical to other test cases.

Expected:

Identify possible maintainability improvement.

Do not require abstraction if it would reduce readability.

---

## TEST 19 — Requirement Missing Expected Behavior

Requirement:

The user submits a form.

Test Case:

Steps:

1. Submit the form.

Expected:

The form is successfully submitted and the user is redirected to the dashboard.

Expected:

Identify that the expected result may contain behavior not supported by the requirement.

Do not decide that the dashboard redirect is correct.

---

## TEST 20 — Hallucination Resistance

Requirement:

Users can upload documents.

Test Case:

Steps:

1. Upload a document.

Expected:

The PDF file is uploaded successfully within 2 seconds and a green success message appears.

Expected:

Identify unsupported behavior if PDF, response time, or success message are not defined by the provided requirement.

Do not invent what the correct behavior should be.