 OpenCart UI Testing — Portfolio Project
1 part - Project Overview

This portfolio project focuses on testing the OpenCart Demo e-commerce website.
The main goal is to demonstrate practical skills in test design, UI testing, bug reporting, and working with Git using a real-world demo application.

 Project Goals

Evaluate key user flows of an e-commerce website

Identify UI and UX issues that may impact user experience

Demonstrate skills in creating clear and structured test documentation

Build a clean and understandable QA portfolio project

Test Object

Platform: OpenCart Demo

URL: https://demo.opencart.com/

Modules in Scope:

User registration

User login

Product page

Shopping cart

Checkout flow

2 part -API & SQL Testing — Portfolio Project (Part 2)
Project Overview

This part of the portfolio demonstrates basic skills in API testing and working with databases (SQL).
The goal is to show understanding of client–server interaction, request validation, and data verification on the backend level.

 Project Goals

Practice API testing fundamentals

Validate API responses and status codes

Verify system behavior using database queries

Demonstrate basic automation approach with simple API checks

Scope of Testing

API Testing:

REST API requests (GET, POST)

Response validation (status codes, response body)

Basic negative scenarios

Database (SQL):

Simple SELECT queries

3 part:
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

4part:
# Playwright Registration Tests — Portfolio Project

![Playwright Tests](https://github.com/MariiaStolbtsova92/QA-Portfolio-Mariia-Stolbtsova/actions/workflows/playwright-registration-tests.yml/badge.svg)

## Project Overview

This portfolio project focuses on automated testing of the sign-up (registration) flow on the QAuto demo website, covering both the UI and the underlying API.
The main goal is to demonstrate practical skills in test automation with Playwright, the Page Object Model, API testing, and CI integration.

## Project Goals

- Automate key validation scenarios of a registration form
- Validate both UI behavior and API responses for the same flow
- Demonstrate a clean, maintainable automation structure (POM)
- Integrate automated tests into a CI pipeline (GitHub Actions)

## Test Object

- **Platform:** QAuto Demo
- **URL:** https://qauto.forstudy.space/

**Modules in Scope:**
- User registration — UI (field validation, form state, happy path)
- User registration — API (`/api/auth/signup`: success, missing fields, password mismatch)

## Tech Stack

Playwright · TypeScript · Node.js · GitHub Actions

## Running Tests

```bash
npm install
npx playwright install
npm test              # all tests, headless
npm run test:ui       # interactive UI Mode
npm run report        # view last HTML report
```
