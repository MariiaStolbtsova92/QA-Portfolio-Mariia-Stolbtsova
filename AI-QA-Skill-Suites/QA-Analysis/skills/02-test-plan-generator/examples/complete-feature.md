# Complete Feature Example

## Input

Feature:

Users can reset their password using their registered email address.

The password reset link is valid for 30 minutes.

The user must enter the new password twice.

The two password values must match.

Supported platform: web application.

## Expected Test Plan Characteristics

Status:

READY

The plan should include:

- functional testing;
- positive and negative testing;
- boundary testing for the 30-minute expiration;
- validation testing for password confirmation;
- web compatibility testing;
- test data for registered and unregistered users;
- dependency on email delivery;
- relevant security considerations.

The plan must not invent:

- supported browsers;
- password complexity rules;
- exact email content;
- specific error messages;
- additional authentication mechanisms.