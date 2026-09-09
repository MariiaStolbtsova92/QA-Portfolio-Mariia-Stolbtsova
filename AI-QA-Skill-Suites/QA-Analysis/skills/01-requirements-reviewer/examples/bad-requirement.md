# Bad Requirement Example

## Requirement

The user should be able to log in quickly and easily.

## Expected QA Assessment

### Overall Status

NEEDS CLARIFICATION

### Issues

| ID | Severity | Criterion | Issue | QA Impact |
|---|---|---|---|---|
| R-001 | High | Clarity | "quickly" is vague and not measurable | Expected performance cannot be verified |
| R-002 | High | Clarity | "easily" is subjective | Different users or testers may interpret the requirement differently |
| R-003 | High | Testability | No measurable acceptance criteria are provided | QA cannot objectively determine whether the requirement is satisfied |

### Missing Information

- Maximum acceptable login response time
- Definition of successful login
- Expected behavior for invalid credentials
- Authentication method

### Clarification Questions

1. What is the maximum acceptable login response time?
2. What authentication method should be used?
3. What should happen when the user enters invalid credentials?
4. What conditions define a successful login?

### Test Areas

- Successful login
- Invalid credentials
- Validation
- Error handling
- Performance
- Authentication