Task Management REST APIs

A Simple RESTFul Task Management API build using Node.js and Express.js. 

Features :
 - Create a New Task
 - Retrieve all Tasks
 - Retrieve a Task by ID
 - Update an Existing Task
 - Delete a Task
 - Input Validation
 - HTTP Status Codes
 - Error Handling
 - Data Stored in In Memory Tasks

TechStack:
 - Node.js
 - Express.js
 - Javascript 
 - API Testing Tools: Thunder Client,Postman

Installetion And Setup :
1. Clone The Repository
   git clone https://github.com/bhagatbhutale/RESTFul-APIs
2. Navigate to project
   cd backend
3. Install Dependencies
   npm install
4. Start the Server 
   npm run dev  Otherwise nodemon


API Documentation :

Base URL: http://localhost:5000

1. Get All Tasks

GET : Endpoint: /api/tasks

2. Get Task By ID
GET : Endpoint: /tasks/:id

3. Create a Task
POST  : Endpoint: /tasks

{
  "id": 1,
  "title": "Task 1",
  "description": "Task 1 Description"
}

4. Update a Task
PUT : Endpoint: /tasks/:id

{
  "title": "Task 1 Updated",
  "description": "Task 1 Description Updated",
}

5. Delete a Task

DELETE : Endpoint: /tasks/:id

HTTP Status Codes
200 : Request Successful
201 : Resource Created Successfully
400 : Invalid ,Validation Error
404 : Resource or Route Not Found
500 : Internal Server Error

Data Storage : 
This Project Used a Array to Store a Data

Note: Task Data Is Temporary. All Stored Tasks Are Lost When The Server Restarts.

API Testing:
The API Endpoints Were Tested Using a Thunder Client , Postman.

Author :
Name : Bhagat Bhutale

 
