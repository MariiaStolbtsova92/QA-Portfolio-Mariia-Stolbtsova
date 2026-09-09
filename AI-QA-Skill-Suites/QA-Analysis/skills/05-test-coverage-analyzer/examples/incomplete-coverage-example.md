# Incomplete Coverage Example

## Input

Requirement ID: REQ-UPLOAD-001

Requirement:

Users can upload documents.

Scenario ID: TS-UPLOAD-001

Scenario:

Verify document upload.

Test Case ID: TC-UPLOAD-001

Test Case:

Upload a document.

---

## Expected Coverage Analysis

### Requirement Coverage

**Status: CANNOT BE DETERMINED**

The requirement does not define enough information to determine complete expected behavior.

Missing information includes:

- supported document formats;
- maximum file size;
- maximum number of files;
- expected behavior for unsupported formats;
- expected behavior for oversized files.

### Coverage Gap vs Missing Information

This is primarily a missing requirement information issue.

The analyzer must not automatically report:

> Missing PDF upload test.

because PDF support was never specified.

It must not report:

> Missing 10 MB boundary test.

because no file size limit was provided.

### Missing Information

Questions include:

1. Which document formats are supported?
2. Is there a maximum file size?
3. Is there a maximum number of files?
4. What should happen when an unsupported file is uploaded?
5. What should happen when a file exceeds the allowed size?

### Important Rule

Do not confuse:

Missing test coverage

with:

Missing requirement definition.

The analyzer should not invent tests for behavior that is not defined.