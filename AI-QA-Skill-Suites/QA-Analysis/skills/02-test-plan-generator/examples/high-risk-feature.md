# High-Risk Feature Example

## Input

Feature:

The application processes customer payments through an external payment provider.

A successful payment creates an order.

The project information states that payment processing is business-critical.

## Expected Test Plan Characteristics

Status:

READY or NEEDS CLARIFICATION depending on available project information.

The plan should consider:

- functional testing;
- integration testing;
- negative payment scenarios;
- data integrity;
- security;
- regression testing;
- external service dependency;
- test environment;
- test payment data;
- high business impact.

The plan must not invent:

- payment provider name;
- API status codes;
- retry logic;
- transaction timeout;
- supported payment methods;
- numerical risk scores.