
---

# 3. `examples/feature-change-example.md`

```markdown
# Feature Change Example

## Input

Change ID:

CHG-001

Change Type:

Requirement Change

Change:

The minimum password length is changed from 8 characters to 10 characters.

Affected functionality:

Login password validation.

Existing Tests:

- TC-LOGIN-001 — valid password
- TC-LOGIN-002 — invalid password
- TC-LOGIN-003 — empty password

---

## Expected Analysis

### Direct Impact

Password validation during login.

Confidence:

Confirmed.

### Recommended Regression Scope

- Login password validation
- Existing login tests related to password validation

### Existing Test Coverage

The provided login test cases should be reviewed for compatibility with the new 10-character requirement.

### Out of Scope

No unrelated functionality should be automatically included.

---

## Important Rule

Do not automatically add:

- registration;
- password reset;
- account security;
- API authentication;

unless the provided information explicitly connects these areas to the changed validation rule.