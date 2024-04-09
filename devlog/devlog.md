# Devlog

## **Day 1 (03/29/2024): Learning NodeJS and Postman API**
I have implemented NodeJS in a project before but it was through Replit. I was unsure how to install the modules and load the server in VS Code, so I let Replit perform all these instructions for me. But, I realized that my terminal was in the wrong directory which was causing these issues. 

I will try to research and learn more about NodeJS. But, for now, I will face any server-side issue as I encounter them.

I am unfamiliar with Postman and API testing. I researched more about HTTP Requests and Responses and most of them are intuitive, but I do not know how to actually perform these tests. I set up the GET, POST, PATCH, and DELETE Requests to http://localhost:3000/passwords/ and I am currently facing 404 Not Found Errors on each one of them.

## **Day 2 (03/30/2024): Understanding the Codebase**
I hit a road block yesterday so I redirected my attention to the codebase. Even though I am new, I did not find understanding the codebase to be that difficult. From reading the codebase, I saw some possible errors: 

1. It seems like the `Todo` script is missing. I do not see any script using the `Todo` script so it is safe to remove.

2. I do not believe the Database is following the Singleton Design Pattern. Currently, the getInstance() function always returns a new instance of the Database which is not the correct functionality. 

3. Inconsistent stylistic choice for getPasswords() function? This does not result in any syntax issues, but for all the functions, their validation is done in the `passwords.component.ts`. 

4. We are told that the createPasswords() should return the 'id' of the newly generated password, not the username.

## **Day 3 (04/02/2024): Postman API**
I have sporadically worked on Postman since 03/30 to get the tests working. I spent most of the day debugging and printing different segments of code. I eventually got my tests running correctly. I added a route handler for /passwords in `express-config.ts:17` to specify the URL path the server should listen and respond to. Then, I changed the URL endpoints in `passwords.routehandler.ts` so the server can correctly respond to the requests. I am unsure whether if this was an intended bug or not, but I finally got the tests to give a different response. But now I am receiving the following responses:

1. GET: 200 OK Response
2. POST: 400 Bad Request
3. PATCH: 400 Bad Request
4. DELETE: 204 No Content

GET and DELETE seem to be working correctly, but POST and PATCH are sending 400 Bad Request regardless of the query parameters I pass.

## **Day 4 (04/05/2024): Getting things running**
I have been researching throughout the week on how to fix the POST and PATCH requests. I realized I was passing the requests as a query parameter when it is supposed to be in the body. I added the body request and PATCH and POST were finally giving me 200 OK and 204 No Content responses. 

Then I tested for more issues and found the following:

1. getPasswords does not validate for the id query parameter
2. createPasswords is missing validation for the 'website' in the body requests
3. updatePassword is missing validation for all 3 body requests
4. deletePassword does not validate for the id query parameter

## **Day 5 (04/04/2024): Review**





