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
- **Description**: `Todo `is declared but its value is never read. Module '"../shared/types"' has no exported member 'Todo'.ts(2305)
- **Steps to Reproduce**: `Todo` in the database interface is never declared.
- **Expected Behavior**: It is unclear what functionality `Todo` was intended for. 
- **Actual Behavior**: Causing syntax error
- **File and Line Number**: `src/database/idatabase.ts:1`
- **Fix**: `Todo` does not seem to be utilized so it can be safely removed.
- **Date**: 03/30/2024

## Bug 2
- **Description**: Database does not follow Singleton Design Pattern
- **Steps to Reproduce**: `getInstance()` always returns a new instance of Database
- **Expected Behavior**: One instance of the Database throughout the application 
- **Actual Behavior**: New instances of the Databases being created every time `getInstance()` is called
- **File**: `src/modules/database/database.ts`
- **Fix**: Changed the `getInstance()` function to ensure only one instance of the database is used throughout the application  
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
- **Description**: `createPasswords()` is returning the incorrect value ('username') 
- **Steps to Reproduce**: Send POST Requests
- **Expected Behavior**: Want to return the id of the password
- **Actual Behavior**: Returns the username of the password
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Changed return value to 'id'
- **Date**: 04/05/2024

## Bug 5
- **Description**: `createPasswords()` is missing validation for 'website' in the request body 
- **Steps to Reproduce**: Leave website body requests empty send POST Request
- **Expected Behavior**: Return 400 Bad Request
- **Actual Behavior**: Returns 201 Created Response
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Added validation for 'website' 
- **Date**: 04/05/2024

## Bug 6
- **Description**: id query parameter in `getPasswords()` is unused in `database.ts`
- **Expected Behavior**: Filter passwords through id
- **Actual Behavior**: Not filtering passwords through id
- **File**: `src/modules/database/database.ts`
- **Fix**: Added filter function for 'id' query parameter
- **Date**: 04/05/2024

## Bug 7
- **Description**: `updatePassword()` does not validate for any of the body requests
- **Steps to Reproduce**: Leave body requests empty and send PATCH Request
- **Expected Behavior**: Return 404 Not Found Error
- **Actual Behavior**: Returns 204 No Content
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Added validation for body request
- **Date**: 04/05/2024

## Bug 8
- **Description**: Incorrect HTTP Response (204 No Content) for `deletePassword()` when 'id' parameter is absent 
- **Steps to Reproduce**: Leave id query parameter empty and send Delete Request
- **Expected Behavior**: Returns 404 Not Found Error
- **Actual Behavior**: Returns 204 No Content
- **File**: `src/modules/passwords/passwords.component.ts`
- **Fix**: Modified function to check if any password contains the 'id'  
- **Date**: 04/05/2024

## Bug 9
- **Description**: For any valid requests, `createPasswords()` is sending 200 OK Response 
- **Steps to Reproduce**: Send a valid POST Requests
- **Expected Behavior**: Returns 200 OK Response
- **Actual Behavior**: Returns 201 Created
- **File**: `src/modules/passwords/passwords.routehandler.ts`
- **Fix**: Modified function in `passwords.routehandler.ts` to send 201 Created Response  
- **Date**: 04/09/2024

