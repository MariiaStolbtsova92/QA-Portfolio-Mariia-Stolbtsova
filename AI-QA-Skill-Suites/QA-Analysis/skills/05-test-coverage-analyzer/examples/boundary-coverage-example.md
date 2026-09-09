# Boundary Coverage Example

## Input

Requirement ID: REQ-USER-001

Requirement:

A username must contain between 5 and 20 characters.

Scenario ID: TS-USER-001

Scenario:

Verify username length boundaries.

Test Cases:

TC-USER-001:
Username containing 4 characters.

TC-USER-002:
Username containing 5 characters.

TC-USER-003:
Username containing 20 characters.

---

## Expected Coverage Analysis

### Requirement Coverage

REQ-USER-001:

**Status: PARTIALLY COVERED**

The provided tests cover:

- below minimum;
- minimum;
- maximum.

The test set does not include a value above the maximum.

### Boundary Coverage

Covered:

- 4 characters;
- 5 characters;
- 20 characters.

Missing:

- 21 characters.

### Coverage Gap

Gap ID:

GAP-001

Requirement:

REQ-USER-001

Coverage Area:

Boundary

Missing Coverage:

Username containing 21 characters.

Severity:

Medium

QA Risk:

The behavior immediately above the defined maximum length is not covered.

### Important Rule

The analyzer may identify 21 characters because the requirement explicitly defines a maximum of 20 characters.

It must not invent:

- validation messages;
- truncation behavior;
- rejection mechanism;
- allowed characters.

The analyzer identifies the missing input condition, not an invented system response.