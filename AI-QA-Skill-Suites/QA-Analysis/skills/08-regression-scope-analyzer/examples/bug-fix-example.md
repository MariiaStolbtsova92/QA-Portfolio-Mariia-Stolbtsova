# Bug Fix Example

## Input

Bug:

BUG-123

Problem:

Users were unable to submit the checkout form when the shipping address contained a postal code.

Fix:

The postal code validation in the checkout form was corrected.

Affected functionality:

Checkout shipping address validation.

---

## Expected Analysis

### Direct Impact

- Checkout shipping address validation.

Confidence:

Confirmed.

### Regression Scope

- Postal code validation.
- Checkout form submission.
- Existing checkout scenarios related to shipping address.

### Potential Impact

Other address-related functionality may require clarification if it shares the same validation component.

The Skill must label this as Potential unless a dependency is explicitly provided.

---

## Important Rule

Do not claim that:

- registration is affected;
- profile address is affected;
- database validation is affected;
- API validation is affected;

unless evidence is provided.