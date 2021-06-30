# Chariot Frontend Interview Server

A Flask server that server some RESTful endpoints:

 - `GET /api/v1/vulnerability/`

Returns every vulnerability in the database.

 - `GET /api/v1/vulnerability/{vulnerabilityId}`

Returns the vulnerability with the given Id, or `null` otherwise.


## Vulnerability Format

 - `id`: String
    - Formatted as a UUID
 - `title`: String
 - `riskRating`: String
 - `file`: String
 - `lineNumber`: integer

### Example vulnerability:
```{"id": "3cb7f3d2-1d30-4ce0-8192-ce2043947183", "title": "SQL Injection", "riskRating": "CRITICAL", "file": "sql.py", "lineNumber": "34"}```

### Example vulnerability list:
```{"data": [{"id": "3cb7f3d2-1d30-4ce0-8192-ce2043947183", "title": "SQL Injection", "riskRating": "CRITICAL", "file": "sql.py", "lineNumber": "34"}, ...]}```