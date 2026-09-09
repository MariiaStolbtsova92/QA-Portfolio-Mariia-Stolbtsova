# Complete Requirement Example

## Requirement

REQ-LOGIN-001:

The system shall lock a user account after 5 consecutive failed login attempts.

The account shall remain locked for 15 minutes.

After 15 minutes, the user may attempt to log in again.

## Expected Scenario Analysis

### Analysis Status

READY

### Test Scenarios

| ID | Requirement | Priority | Type | Scenario | Expected Behavior |
|---|---|---|---|---|---|
| TS-001 | REQ-LOGIN-001 | High | Positive | User enters valid credentials before reaching the failed-attempt limit | User can log in |
| TS-002 | REQ-LOGIN-001 | High | Boundary | User makes 4 consecutive failed login attempts | Account is not locked by the stated 5-attempt rule |
| TS-003 | REQ-LOGIN-001 | High | Boundary | User makes the 5th consecutive failed login attempt | Account is locked |
| TS-004 | REQ-LOGIN-001 | High | Boundary | User attempts to log in while the account is locked | Account remains locked according to the stated requirement |
| TS-005 | REQ-LOGIN-001 | High | Boundary | User attempts to log in after 15 minutes | User may attempt to log in again |

### Coverage

- Positive: Covered
- Negative: Partially covered
- Boundary: Covered
- State Transition: Covered
- Security: Not explicitly specified

### Note

Do not invent the exact error message, unlock mechanism, notification behavior or additional account security rules.