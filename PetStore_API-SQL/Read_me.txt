Project 1: E-commerce Database Testing & Data Integrity (SQL)
Tech Stack: MS SQL Server, T-SQL.

Designed and implemented a relational database schema (5 tables) for an e-commerce platform, ensuring 3rd Normal Form (3NF) compliance.

Developed complex T-SQL queries (Joins, Subqueries, Aggregations) to validate business logic, such as order total calculations and customer segmentation.

Performed data integrity testing by identifying "orphan" records and "empty orders" using advanced JOIN techniques, simulating backend bug detection.

Applied constraints (Check, Unique, Default) to ensure data validity at the schema level.

Project 2: Automated API Testing — PetStore System (Postman)
Tech Stack: Postman, JavaScript (Chai.js), REST API, JSON.

Engineered a comprehensive API test suite covering the full Pet lifecycle (CRUD operations) and Store/Order management.

Demonstrated technical problem-solving by implementing a dynamic Postman Environment to bypass demo API instability (v3 to v2 migration), ensuring 100% test execution.

Implemented robust validation scripts for status-code verification, JSON schema validation, and business logic checks (e.g., mandatory fields and allowed enum values).

Executed negative testing scenarios, including duplicate deletions and invalid data inputs, to ensure system stability under edge-case conditions.

Project 3:
AI-QA-Skill-Suites — Portfolio Project (Part 3)

 Project Overview

This part of the portfolio demonstrates how AI can be integrated into the QA test design and analysis process — from requirements review to executable test cases, automation, and regression/API/SQL analysis.
The project combines a set of specialized AI Skills with an orchestration agent that connects several QA activities into one structured workflow.

 Project Goals

* Explore how AI can support manual and automated QA activities
* Demonstrate structured, risk-based test design (requirements → plan → scenarios → test cases)
* Show ability to design reusable, traceable AI-assisted QA workflows
* Extend AI-assisted QA into automation (Playwright), API testing, and SQL-based data validation
* Keep human QA judgment in control — AI generates, engineer validates

 Scope of Testing / Skills Included

Test Design & Documentation

* Requirements Reviewer — analyzes requirements for ambiguity, risks, and testability
* Test Plan Generator — builds scope, approach, and priorities
* Test Scenario Generator — high-level positive/negative/edge scenarios
* Test Case Generator — detailed executable manual test cases
* Test Coverage Analyzer — maps scenarios/cases to requirements, finds gaps
* Test Case Reviewer — reviews existing test cases for quality and completeness
* Bug Report Reviewer — checks bug reports for clarity, reproducibility, completeness
* Regression Scope Analyzer — identifies impacted areas after a change
* QA Test Report Generator — summarizes test execution results

Orchestration

 QA Test Design Agent — coordinates Requirements Reviewer → Test Plan → Scenarios → Test Cases into one workflow

Automation (Playwright)

* Playwright Test Generator — generates automated UI test scripts
* Playwright Test Reviewer — reviews generated/existing automation code
* Playwright Test Agent — orchestrates generation and review of automated tests

API Testing

* API Test Design Generator — designs test cases for REST API endpoints
* API Response Analyzer — validates actual responses against expected contracts

Database (SQL)

* SQL QA Query Generator — generates queries for backend data verification