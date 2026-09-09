# Incomplete Requirement Example

## Input

Requirement:

Users can upload documents.

Scenario:

Verify document upload.

## Problem

The requirement does not specify:

- supported file formats;
- maximum file size;
- maximum number of files;
- expected behavior for unsupported formats;
- expected behavior for oversized files;
- error messages;
- user roles;
- upload restrictions.

## Expected Skill Behavior

The Skill should generate all test cases that can be supported by the available information.

Missing information must not prevent generation of valid test cases when the available information is sufficient.

The Skill should identify clarification requirements only for test cases where the missing information affects:

- expected behavior;
- pass/fail determination;
- required preconditions;
- required input;
- test execution.

The Skill must not replace missing information with assumptions.

### Clarification Required

Missing information:

- Supported file formats
- Maximum file size
- Expected behavior for invalid files

Example questions:

1. Which document formats are supported?
2. What is the maximum allowed file size?
3. What should happen when an unsupported or oversized file is uploaded?

## Expected Status

Use NEEDS CLARIFICATION when important information is missing for the intended test coverage.

Use BLOCKED when the available information is insufficient to create any meaningful test case.

## Important Rule

Missing information must never be replaced with assumptions.