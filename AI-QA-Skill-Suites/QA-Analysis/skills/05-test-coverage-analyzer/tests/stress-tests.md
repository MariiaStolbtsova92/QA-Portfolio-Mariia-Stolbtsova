# Test Coverage Analyzer — Stress Tests

## TEST 01 — Fully Covered Functional Requirement

### Input

Requirement:

The user can log in using a valid username and password.

Test Case:

Login with valid username and password.

### Expected

Status:

FULLY COVERED

The analyzer must not require:

- invalid credentials;
- MFA;
- CAPTCHA;
- password expiration;
- session timeout.

These behaviors are not defined by the requirement.

---

# TEST 02 — Missing Negative Coverage

### Input

Requirement:

If the password is incorrect, the system displays an error message.

Test Cases:

- Login with valid username and password.

### Expected

Status:

PARTIALLY COVERED

Missing coverage:

- incorrect password scenario.

The analyzer must not invent the exact error message.

---

# TEST 03 — Boundary Gap

### Input

Requirement:

A username must contain between 5 and 20 characters.

Test Cases:

- 5 characters;
- 20 characters.

### Expected

Status:

PARTIALLY COVERED

Missing boundary coverage:

- 4 characters;
- 21 characters.

The analyzer may identify these values based on the defined boundaries.

It must not invent validation behavior.

---

# TEST 04 — Complete Boundary Coverage

### Input

Requirement:

A username must contain between 5 and 20 characters.

Test Cases:

- 4 characters;
- 5 characters;
- 20 characters;
- 21 characters.

### Expected

Status:

FULLY COVERED

No boundary coverage gap should be reported.

---

# TEST 05 — Missing Requirement Information

### Input

Requirement:

Users can upload documents.

Test Case:

Upload a document.

### Expected

Status:

CANNOT BE DETERMINED

The analyzer must identify missing requirement information.

It must NOT invent:

- PDF;
- DOCX;
- 10 MB;
- 5 files;
- specific error messages.

---

# TEST 06 — Role Coverage

### Input

Requirement:

Only administrators can delete users.

Test Cases:

- Administrator deletes a user.

### Expected

Status:

PARTIALLY COVERED

Missing coverage:

- Non-administrator attempts to delete a user.

The analyzer must not invent additional roles.

---

# TEST 07 — State Transition Coverage

### Input

Requirement:

An order can move from Pending to Approved.

Test Cases:

- Pending → Approved.

### Expected

Status:

FULLY COVERED

Do not invent:

- Rejected;
- Cancelled;
- Returned;
- other states.

---

# TEST 08 — Traceability Gap

### Input

Requirement:

REQ-001 — User can reset their password.

Test Case:

TC-001 — Reset password using valid information.

No requirement reference is provided in the test case.

### Expected

The analyzer should identify a traceability gap.

It should NOT claim that the test does not cover the requirement solely because the reference is missing.

---

# TEST 09 — Duplicate Coverage

### Input

Requirement:

The user can log in using valid credentials.

Test Cases:

- Login with valid credentials.
- Successfully authenticate with valid credentials.

### Expected

Identify possible duplicate or overlapping coverage.

Do not automatically mark both tests as invalid.

---

# TEST 10 — Do Not Force Generic Testing Categories

### Input

Requirement:

The user can change their profile name.

Test Case:

Change profile name to a valid new name.

### Expected

Status:

FULLY COVERED

Do not automatically report missing:

- security testing;
- performance testing;
- compatibility testing;
- API testing;
- database testing.

These are not explicitly supported by the requirement.

---

# TEST 11 — Performance Requirement

### Input

Requirement:

The search results must be displayed within 2 seconds.

Test Case:

Search for a product and measure response time.

### Expected

Performance coverage is present.

Do not invent:

- concurrent users;
- throughput;
- load level;
- hardware;
- network conditions.

---

# TEST 12 — Multiple Requirements

### Input

Requirement 1:

The user can log in using valid credentials.

Requirement 2:

The user can log out.

Requirement 3:

Only administrators can delete users.

Test Cases:

- Login with valid credentials.
- Logout.

### Expected

Requirement 1:

FULLY COVERED

Requirement 2:

FULLY COVERED

Requirement 3:

NOT COVERED

The analyzer should identify Requirement 3 as uncovered.

---

# TEST 13 — Partial Validation Coverage

### Input

Requirement:

The email field is required and must contain a valid email format.

Test Cases:

- Submit the form with a valid email.

### Expected

Status:

PARTIALLY COVERED

Missing coverage may include:

- empty email;
- invalid email format.

Do not invent exact error messages.

---

# TEST 14 — No Boundary Without a Boundary

### Input

Requirement:

The username should be valid.

Test Case:

Enter a valid username.

### Expected

Do not invent:

- minimum length;
- maximum length;
- allowed characters;
- exact format.

Coverage should be assessed based on the information available.

---

# TEST 15 — Hallucination Resistance

### Input

Requirement:

The user can upload a profile picture.

Test Case:

Upload a profile picture.

### Expected

The analyzer must NOT claim that coverage is missing for:

- JPG;
- PNG;
- GIF;
- maximum file size;
- image dimensions;

unless these requirements are explicitly provided.

---

# TEST 16 — Coverage Percentage

### Input

Requirements:

REQ-001 — User can log in.
REQ-002 — User can log out.
REQ-003 — User can change password.
REQ-004 — User can delete their account.

Test Cases:

- Login.
- Logout.
- Change password.

### Expected

Assessable requirements:

4

Fully covered:

3

Not covered:

1

Coverage:

75%

The calculation must be shown clearly.

---

# TEST 17 — Cannot Be Determined

### Input

Requirement:

The system processes transactions correctly.

No acceptance criteria.

No test cases.

### Expected

Status:

INSUFFICIENT INFORMATION

The analyzer must not invent transaction types, amounts, currencies, validation rules, or expected results.

---

# TEST 18 — Test Case Without Requirement

### Input

Test Case:

User can export a report to PDF.

No requirement is provided.

### Expected

Identify that traceability and requirement coverage cannot be established.

Do not create a new requirement.

---

# TEST 19 — Requirement With Explicit Error Behavior

### Input

Requirement:

If the username is already registered, the system displays an error message and does not create the account.

Test Cases:

- Register with a new username.

### Expected

Status:

PARTIALLY COVERED

Missing coverage:

- registration using an already registered username;
- verification that the account is not created.

Do not invent the exact error message.

---

# TEST 20 — Final Hallucination Test

### Input

Requirement:

Users can search for products.

Test Case:

Search for a product.

### Expected

The analyzer must not automatically require:

- empty search;
- special characters;
- SQL injection;
- response time;
- pagination;
- sorting;
- filters;
- mobile testing;

unless such behaviors are explicitly defined in the provided requirements.

The analyzer should evaluate only supported coverage.