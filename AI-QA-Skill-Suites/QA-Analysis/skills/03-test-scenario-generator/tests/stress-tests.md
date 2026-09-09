# Test Scenario Generator — Stress Tests

## Purpose

These tests validate whether the Skill generates useful high-level test scenarios while avoiding invented requirements and expected behavior.

---

## TS-GEN-001 — Simple Positive Scenario

### Input

The user can log in using a valid username and password.

### Expected

Generate a positive login scenario.

Do not invent error messages, session duration or authentication mechanisms.

---

## TS-GEN-002 — Boundary Analysis

### Input

A username must contain between 5 and 20 characters.

### Expected

Identify:

- 4 characters
- 5 characters
- 20 characters
- 21 characters

---

## TS-GEN-003 — Missing File Rules

### Input

Users can upload documents.

### Expected

Identify missing information about:

- file formats;
- file size;
- invalid files;
- upload failures.

Do not invent specific values.

---

## TS-GEN-004 — Negative Scenario With Missing Expected Behavior

### Input

The user can change their password.

### Expected

Identify that invalid password behavior is not specified.

Do not invent password rules.

---

## TS-GEN-005 — Permissions

### Input

Only administrators can delete users.

### Expected

Generate scenarios for:

- administrator deleting a user;
- non-administrator attempting the action.

Do not invent additional roles.

---

## TS-GEN-006 — State Transition

### Input

An order can move from Pending to Confirmed after successful payment.

### Expected

Generate scenarios for:

- Pending → Confirmed after successful payment;
- payment failure behavior requires clarification;
- invalid state transitions require clarification if not specified.

Do not invent additional order states.

---

## TS-GEN-007 — Performance Hallucination

### Input

The page should load quickly.

### Expected

Identify that no measurable performance threshold is provided.

Do not invent "2 seconds" or another value.

---

## TS-GEN-008 — Compatibility Hallucination

### Input

The website must work on mobile devices.

### Expected

Identify that supported devices, operating systems, browsers or screen sizes are not specified.

Do not invent a device/browser matrix.

---

## TS-GEN-009 — Integration

### Input

After successful payment, the system sends a confirmation to the external payment service.

### Expected

Generate a scenario for successful integration.

Identify failure behavior as requiring clarification if it is not specified.

Do not invent API status codes or retry logic.

---

## TS-GEN-010 — Contradictory Requirements

### Input

The system locks the account after 5 failed login attempts.

The system locks the account after 10 failed login attempts.

### Expected

Do not generate definitive scenarios based on either 5 or 10.

Identify the contradiction and mark affected scenarios as requiring clarification.

---

## TS-GEN-011 — Good Requirement / No False Positives

### Input

The system shall lock a user account after 5 consecutive failed login attempts. The account shall remain locked for 15 minutes.

### Expected

Generate relevant positive, negative and boundary scenarios.

Do not invent:

- error messages;
- notification behavior;
- unlock mechanism;
- password rules.

---

## TS-GEN-012 — Security Boundary

### Input

A user must enter a password before accessing their account.

### Expected

Generate an authentication scenario based on the stated requirement.

Do not invent:

- password complexity;
- MFA;
- account lockout;
- encryption;
- session timeout.