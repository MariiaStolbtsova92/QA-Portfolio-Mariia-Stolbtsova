# Dependency Impact Example

## Input

Change:

The authentication service was modified.

Provided dependency:

The checkout application uses the authentication service to verify the current user.

Existing Tests:

- TC-AUTH-001 — successful login
- TC-AUTH-002 — invalid credentials
- TC-CHECKOUT-001 — authenticated checkout

---

## Expected Analysis

### Direct Impact

Authentication functionality.

Confidence:

Confirmed.

### Supported Indirect Impact

Authenticated checkout.

Confidence:

Supported.

Reason:

The provided information explicitly states that checkout uses the authentication service.

### Existing Regression Tests

- TC-AUTH-001
- TC-AUTH-002
- TC-CHECKOUT-001

These tests should be considered for regression.

---

## Important Rule

Do not automatically include:

- profile;
- payments;
- reports;
- administration;

unless dependencies are explicitly provided.