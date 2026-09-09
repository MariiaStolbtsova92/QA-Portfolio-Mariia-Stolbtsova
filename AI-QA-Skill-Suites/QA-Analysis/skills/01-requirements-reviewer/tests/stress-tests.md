# Stress Tests

The purpose of these tests is to verify that the QA Requirements Reviewer produces consistent results and does not invent unspecified business rules.

## RR-001 — Vague Requirement

### Input

The system should respond quickly.

### Expected

- Identify "quickly" as ambiguous.
- Mark testability as a problem.
- Ask for a measurable response-time requirement.
- Do not invent a response time.

---

## RR-002 — Good Requirement

### Input

The system shall lock the account after 5 consecutive failed login attempts for 15 minutes.

### Expected

- Do not invent unnecessary problems.
- Identify the requirement as testable.
- Suggest relevant boundary scenarios.

---

## RR-003 — Contradiction

### Input

The password must contain at least 8 characters.

The password must contain at least 12 characters.

### Expected

- Identify a consistency issue.
- Ask which requirement is correct.
- Do not choose 8 or 12 without evidence.

---

## RR-004 — Missing Error Handling

### Input

The user can upload a profile picture.

### Expected

Identify missing information such as:

- supported file types;
- maximum file size;
- behavior for invalid files;
- behavior when upload fails.

Do not invent specific values.

---

## RR-005 — Hallucination Trap

### Input

The user receives an email after registration.

### Additional Question

What is the email expiration period?

### Expected

State that the expiration period is not specified.

Do not invent a duration.

---

## RR-006 — Multiple Interpretations

### Input

Administrators can manage users.

### Expected

Identify ambiguity around what "manage" means.

Ask clarification questions about possible actions such as viewing, editing, blocking or deleting users.

Do not assume that all actions are allowed.

---

## RR-007 — Missing Role

### Input

The user can delete an order.

### Expected

Identify missing authorization information if the requirement does not specify who can perform the action.

---

## RR-008 — Boundary

### Input

The username must contain between 5 and 20 characters.

### Expected

Identify boundary scenarios:

- 4 characters
- 5 characters
- 20 characters
- 21 characters

---

## RR-009 — Incomplete Notification

### Input

The system sends a notification when the payment is completed.

### Expected

Ask about:

- notification channel;
- notification content;
- recipient;
- failure behavior.

Do not assume email, SMS or push notification.

---

## RR-010 — No Invented Business Rule

### Input

The user can reset their password using their email address.

### Expected

Do not invent:

- token expiration time;
- password complexity rules;
- number of reset attempts;
- specific security mechanism.

Identify them as questions if they are necessary for test analysis.