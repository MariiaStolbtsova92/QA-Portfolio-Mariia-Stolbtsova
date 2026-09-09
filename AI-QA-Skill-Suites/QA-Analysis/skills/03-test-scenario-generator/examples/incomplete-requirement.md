# Incomplete Requirement Example

## Requirement

REQ-UPLOAD-001:

Users can upload documents to their account.

## Expected Scenario Analysis

### Analysis Status

NEEDS CLARIFICATION

### Test Scenarios

| ID | Requirement | Priority | Type | Scenario | Expected Behavior |
|---|---|---|---|---|---|
| TS-001 | REQ-UPLOAD-001 | High | Positive | User uploads a document | Document should be uploaded according to the requirement |
| TS-002 | REQ-UPLOAD-001 | Medium | Negative | User attempts to upload an unsupported document | Requires clarification |

### Missing Information

- Supported file formats
- Maximum file size
- Maximum number of documents
- Expected behavior for unsupported files
- Expected behavior when upload fails
- User roles allowed to upload documents

### Clarification Questions

1. Which document formats are supported?
2. What is the maximum allowed file size?
3. Is there a maximum number of documents per account?
4. What should happen when an unsupported file is uploaded?
5. What should happen when the upload operation fails?
6. Which user roles can upload documents?

### QA Risk

Without these rules, negative, validation and boundary testing cannot be fully defined.

### Important Rule

Do not invent values such as "PDF only", "10 MB maximum" or "5 documents".