
---

# 3. `examples/good-test-case-example.md`

```markdown
# Good Test Case Example

## Input

Requirement ID:

REQ-LOGIN-001

Requirement:

The user can log in using a valid username and password.

Scenario ID:

TS-LOGIN-001

Scenario:

Verify successful login with valid credentials.

Test Case ID:

TC-LOGIN-001

Title:

Login with valid username and password.

Preconditions:

- User has a registered account.

Test Data:

- Valid username
- Valid password

Steps:

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Submit the login form.

Expected Result:

The user is successfully logged in.

---

## Expected Review

Status:

APPROVED

The test case:

- has a clear objective;
- contains sequential steps;
- provides relevant test data;
- includes a required precondition;
- has requirement traceability;
- has scenario traceability;
- contains an observable expected result;
- does not introduce unsupported behavior.

---

## Important Rule

Do not require exact credential values automatically.

Generic test data such as "Valid username" and "Valid password" can be acceptable.