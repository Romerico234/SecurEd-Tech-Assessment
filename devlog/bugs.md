# Bugs

This is where you will keep track of all the bugs that you have found.

## Example Bug

- **Description**: The application crashes when I click the "Add Password" button.
- **Steps to Reproduce**:
  1. Go to the "Add Password" page.
  2. Click the "Add Password" button.
  3. The application crashes.
- **Expected Behavior**: The application should not crash when I click the "Add Password" button.
- **Actual Behavior**: The application crashes when I click the "Add Password" button.
- **File and Line Number**: `src/modules/passwords/passwords.routehandler.ts:23`
- **Fix**: I forgot to add a check to see if the password already exists in the database. I added a check to see if the password already exists in the database and return a 400 Bad Request response if it does.
- **Date**: 2021-01-01

Feel free to use this example as a template or create your own format for keeping track of bugs.

## Bug 1
- **Description**: 'Todo' is declared but its value is never read. Module '"../shared/types"' has no exported member 'Todo'.ts(2305)
- **Steps to Reproduce**: 'Todo' in the database interface is never declared.
- **Expected Behavior**: It is unclear what functionality 'Todo' was intended for. 
- **File and Line Number**: `src/database/idatabase.ts:1`
- **Fix**: 'Todo' does not seem to be utilized so it can be safely removed.
- **Date**: 03/30/2024

## Bug 2
- **Description**: Database does not follow Singleton Design Pattern
- **File**: `src/modules/database/database.ts`
- **Fix**: Changed the getInstance method to ensure only one instance of the database is used throughout the application  
- **Date**: 03/30/2024

## Bug 3
- **Description**: GET, POST, PATCH, and DELETE Requests result in 404 Not Found Errors
- **Steps to Reproduce**: Send GET, POST, PATCH, and DELETE Requests in Postman  
- **Expected Behavior**: GET: 200 OK, POST: 201 Created or 400 Bad Request, PATCH: 204 No Content or 400 Bad Request, DELETE: 204 No Content
- **Actual Behavior**: 404 Not Found Errors
- **File**: `src/modules/passwords/passwords.routehandler.ts` and `src/modules/config/express.config.ts`
- **Fix**: Adjusted the HTTP Request parametes and modified `express.config.ts`to handle /password route correctly 
- **Date**: 04/02/2024

## Bug 4
- **Description**: createPasswords is missing validation for 'website' in the request body and returning the incorrect value ('username') 
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Added validation for 'website' and changed return value to 'id'
- **Date**: 04/05/2024

## Bug 5
- **Description**: getPasswords does not validate for the id query parameter
- **File**: `src/modules/database/database.ts`
- **Fix**: Added validation for 'id' query parameter
- **Date**: 04/05/2024

## Bug 6
- **Description**: updatePassword does not validate for any of the body requests
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Added validation for body request
- **Date**: 04/05/2024

## Bug 7
- **Description**: Incorrect HTTP Response (204 No Content) for deletePassword when 'id' parameter is absent 
- **Expected Behavior**: Returns 404 Not Found Error
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Modified function to check if any password contains the 'id'  
- **Date**: 04/05/2024

