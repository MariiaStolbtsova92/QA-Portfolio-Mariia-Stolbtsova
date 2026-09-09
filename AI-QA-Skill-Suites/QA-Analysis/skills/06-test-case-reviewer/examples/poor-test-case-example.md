# Poor Test Case Example

## Input

Requirement:

The user can log in using a valid username and password.

Test Case:

Title:

Check login.

Steps:

1. Open the application.
2. Do login.
3. Check everything.

Expected Result:

Login works correctly.

---

## Expected Review

Status:

NEEDS IMPROVEMENT

Issues include:

### Clarity

The steps "Do login" and "Check everything" are ambiguous.

### Testability

"Login works correctly" does not define a sufficiently observable expected result.

### Completeness

The test case does not specify:

- credentials;
- login page or relevant location;
- concrete login action.

Only identify missing information that materially affects execution.

---

## Important Rule

Do not invent:

- exact UI labels;
- error messages;
- redirect destinations;
- session behavior.

The reviewer should identify the problem rather than silently invent a solution.