
---

# 3. `examples/functional-coverage-example.md`

```markdown id="1b3hcf"
# Functional Coverage Example

## Input

Requirement ID: REQ-LOGIN-001

Requirement:

The user can log in using a valid username and password.

Scenario ID: TS-LOGIN-001

Scenario:

Verify successful login with valid credentials.

Test Case ID: TC-LOGIN-001

Test Case:

Login with valid username and password.

---

## Expected Coverage Analysis

### Requirement Coverage

REQ-LOGIN-001:

**Status: FULLY COVERED**

The provided scenario and test case verify the successful login behavior explicitly described by the requirement.

### Positive Coverage

Covered:

- Login using valid credentials.

### Negative Coverage

Not identified as a mandatory coverage gap because the requirement does not define invalid credentials or failure behavior.

### Boundary Coverage

Not applicable.

The requirement does not define a measurable boundary.

### Traceability

Covered:

REQ-LOGIN-001
↓
TS-LOGIN-001
↓
TC-LOGIN-001

No traceability gap is identified.

### Coverage Gaps

None.

### Important Rule

Do not report missing negative, security, performance, or compatibility tests automatically.

Those areas must be supported by the provided requirement.