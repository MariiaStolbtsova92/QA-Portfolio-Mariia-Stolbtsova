# Ambiguous Test Case Example

## Input

Requirement:

The user can change their profile name.

Test Case:

Title:

Change name.

Steps:

1. Open profile.
2. Change the name.
3. Save it.

Expected Result:

The name changes successfully.

---

## Expected Review

Status:

NEEDS IMPROVEMENT

Potential issues:

### Clarity

"Change the name" does not specify what input should be used.

"Open profile" may be understandable in context but does not identify the required navigation if the test case is intended to be independently executable.

### Test Data

No new profile name is provided.

The reviewer should determine whether execution requires a concrete test value.

### Expected Result

"The name changes successfully" may be acceptable at a high level if the changed name is directly observable.

However, if the expected final value is necessary to determine Pass/Fail, the test case should provide or reference the expected value.

---

## Important Rule

Do not invent:

- a specific name;
- navigation paths;
- validation rules;
- character limits;
- success messages.