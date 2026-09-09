# Incomplete Results Example

## Input

Build:

v5.0.0

Information:

Login testing was completed successfully.

---

## Expected Behavior

The Skill should report:

Test status:

Passed for the explicitly described login testing.

However:

- total test count is unknown;
- total coverage is unknown;
- environment is unknown;
- defect status is unknown;
- release readiness cannot be determined.

---

## Expected Release Status

CANNOT DETERMINE

---

## Important Rule

Do not convert:

"Login testing was completed successfully"

into:

"100% of tests passed."

Do not invent test counts or coverage.