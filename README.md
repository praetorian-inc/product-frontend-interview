# Vulnerability Viewer

The vulnerability viewer uses a React/Redux frontend (defined in `client/vulnviewer/`) to pull vulnerabilities from a Python3/Flask backend (defined in `server/`) and display them in a Material UI table.

The product team wants us to add a "drill-down" feature, where a user can click on any row in the vulnerability table and be taken to a page that shows details about the vulnerability including the file name and line number. For now, we can just list out each attribute with a Material UI `<Typography>` tag:
 - `id`
 - `title`
 - `riskRating`
 - `file`
 - `lineNumber`
 
For now, what's more important is that we reorganize this directory to accomodate for future requests from the product team. Specifically, we need to:
 - Reorganize the redux structure to accomodate for our having to access multiple REST resources
 - Reorganize the page into components, and put those components in a scalable directory structure
