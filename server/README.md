# Chariot Frontend Interview Server

A Flask server that server some RESTful endpoints:

 - `GET /api/v1/vulnerability/`

Returns every vulnerability in the database.

 - `GET /api/v1/vulnerability/{vulnerabilityId}`

Returns the vulnerability with the given Id, or `null` otherwise.
