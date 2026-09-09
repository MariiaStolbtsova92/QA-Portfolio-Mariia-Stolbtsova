
---

# 3. `examples/good-bug-report-example.md`

```markdown
# Good Bug Report Example

## Input

Bug ID:

BUG-LOGIN-001

Title:

Login form accepts invalid password and logs the user in.

Requirement:

Users should be able to log in using valid credentials.

Preconditions:

- A registered user account exists.

Steps to Reproduce:

1. Open the login page.
2. Enter a registered username.
3. Enter an incorrect password.
4. Submit the login form.

Expected Result:

The user should not be logged in when an incorrect password is provided.

Actual Result:

The user is logged in despite entering an incorrect password.

Environment:

- Test environment
- Application version 2.4

Evidence:

Screenshot attached.

---

## Expected Review

Status:

APPROVED

The report contains:

- clear title;
- reproducible steps;
- precondition;
- expected result;
- actual result;
- environment;
- evidence;
- requirement context.

The report does not claim an unsupported technical root cause.