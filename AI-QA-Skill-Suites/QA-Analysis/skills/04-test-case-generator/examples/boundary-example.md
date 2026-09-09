# Boundary Test Case Example

## Input

Requirement ID: REQ-USER-001

Requirement:

A username must contain between 5 and 20 characters.

Scenario ID: TS-USER-001

Scenario:

Verify username length boundaries.

## Expected Test Cases

### TC-USER-001 — Username below minimum length

**Test Type:**
Boundary

**Test Data:**

Username containing 4 characters.

**Steps:**

1. Enter a username containing 4 characters.
2. Submit the form.

**Expected Result:**

The username does not satisfy the defined requirement because it contains fewer than 5 characters.

If the system behavior for an invalid username is not specified, do not invent a validation message, UI behavior, or other response.

Clarification may be required for the expected system behavior.

---

### TC-USER-002 — Username at minimum length

**Test Type:**
Boundary

**Test Data:**

Username containing 5 characters.

**Steps:**

1. Enter a username containing 5 characters.
2. Submit the form.

**Expected Result:**

The username satisfies the defined length requirement.

Do not invent additional UI behavior or confirmation messages.

---

### TC-USER-003 — Username at maximum length

**Test Type:**
Boundary

**Test Data:**

Username containing 20 characters.

**Steps:**

1. Enter a username containing 20 characters.
2. Submit the form.

**Expected Result:**

The username satisfies the defined length requirement.

Do not invent additional UI behavior or confirmation messages.

---

### TC-USER-004 — Username above maximum length

**Test Type:**
Boundary

**Test Data:**

Username containing 21 characters.

**Steps:**

1. Enter a username containing 21 characters.
2. Submit the form.

**Expected Result:**

The username does not satisfy the defined requirement because it contains more than 20 characters.

If the system behavior for an invalid username is not specified, do not invent a validation message, UI behavior, truncation, or rejection mechanism.

Clarification may be required for the expected system behavior.

## Important Rules Demonstrated

For a 5–20 character boundary, consider:

- 4;
- 5;
- 20;
- 21.

The Skill should distinguish between:

- whether the input satisfies the requirement;
- what the system does with that input.

Do not invent:

- allowed characters;
- exact validation messages;
- trimming behavior;
- automatic truncation;
- UI behavior;
- error handling behavior.

A requirement may define whether a value is valid without defining the exact system response.

Missing system behavior should be identified as a clarification only when that behavior is necessary to determine the test outcome.