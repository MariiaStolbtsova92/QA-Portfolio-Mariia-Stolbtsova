# Boundary Requirement Example

## Requirement

REQ-USERNAME-001:

A username must contain between 5 and 20 characters.

## Expected Scenario Analysis

### Analysis Status

READY

### Test Scenarios

| ID | Requirement | Priority | Type | Scenario | Expected Behavior |
|---|---|---|---|---|---|
| TS-001 | REQ-USERNAME-001 | High | Boundary | Username contains 4 characters | Username should not satisfy the stated requirement |
| TS-002 | REQ-USERNAME-001 | High | Boundary | Username contains exactly 5 characters | Username satisfies the stated length requirement |
| TS-003 | REQ-USERNAME-001 | High | Boundary | Username contains exactly 20 characters | Username satisfies the stated length requirement |
| TS-004 | REQ-USERNAME-001 | High | Boundary | Username contains 21 characters | Username should not satisfy the stated requirement |

### Coverage

- Boundary: Covered
- Positive: Covered
- Negative: Covered
- Validation: Covered

### Note

The requirement does not specify allowed characters, therefore scenarios for special characters, spaces or Unicode characters should not be invented.