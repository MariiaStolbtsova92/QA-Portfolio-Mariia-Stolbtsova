API Testing Portfolio — PetStore

This API testing project is based on the public Swagger PetStore API.
According to the business logic of the application, three main testing scenarios were designed and implemented:

1. Pet Lifecycle (CRUD operations)

This scenario, within the API, covers the full lifecycle of a pet, including creation, retrieval, update, and deletion operations.

During testing, the following validations were implemented:
- Validation that the status field contains only allowed business values (available, sold, pending) to prevent invalid pet states;
- Validation that the root-level name field represents the pet’s name and is a mandatory business field.

Category and tag names are treated as metadata and are not validated within this scenario.

Additionally, several negative test scenarios were implemented in a separate copy of the collection:
- Retrieving a pet using a non-existing ID;
- Deleting the same pet twice;
- Attempting to create a pet without the required status field.


2️. Store / Order Scenario

This scenario verifies the functionality related to placing and managing orders.

The following business rule validations were implemented:
- Order quantity must follow business rules and cannot be zero or negative.

Negative scenarios include:
- Retrieving an order with an invalid ID;
- Deleting a non-existing order.


3️. Pet Status Filtering

This scenario validates filtering pets by status using the findByStatus endpoint.

The following checks were implemented:
- Verification that the response is not empty for valid filter values;
- Validation of response structure by checking required fields (id, name, status) for array items;
- Validation that the status value of each pet in the response matches the requested filter parameter

In addition, filtering by multiple status values in a single request was tested.
A request with a non-existing status parameter was also tested. In this case, the API returned a 200 OK response, which was noted as an unexpected or inconsistent behavior of the demo API.



Environment & Technical Decisions

While working with PetStore API v3, the demo resource returned 500 Internal Server Error responses for requests related to the Store and Authorization blocks.
To continue working on the portfolio, a solution was implemented by creating a Postman Environment with a variable that points to the more stable PetStore API v2 base URL.

After switching the base URL via environment variables, the requests were successfully executed.

This approach reflects real-world practices, where:
- Base URLs are stored as environment variables;
- Switching between environments (e.g. staging, production) is required.


Dynamic variables were also created for:
- Base API URL;
- Pet IDs and Order IDs used across requests.



Summary

During the creation of this portfolio, several challenges related to demo API instability were encountered.
Instead of abandoning the project, alternative technical solutions were applied to continue testing and demonstrate problem-solving skills.

The portfolio focuses on:
- Positive and negative API scenarios;
- Business logic validation;
- Response structure and data integrity checks;
- Proper use of Postman environments and variables.
