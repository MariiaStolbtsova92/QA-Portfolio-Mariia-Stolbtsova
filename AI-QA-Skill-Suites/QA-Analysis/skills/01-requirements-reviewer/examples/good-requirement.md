# Good Requirement Example

## Requirement

The system shall lock a user account after 5 consecutive failed login attempts.

The account shall remain locked for 15 minutes.

After 15 minutes, the user may attempt to log in again.

## Expected QA Assessment

### Overall Status

READY

### Why

The requirement specifies:

- the triggering condition;
- the exact number of failed attempts;
- the lock duration;
- the expected behavior after the lock period.

The requirement is clear, measurable and testable.

### Test Areas

- Successful login
- Failed login
- Boundary: 4 failed attempts
- Boundary: 5 failed attempts
- Boundary: 6 failed attempts
- Account lock behavior
- 15-minute lock duration
- Login attempt after lock expiration

### QA Note

No additional business rules should be invented unless they are provided by the requirements or requested as clarification.