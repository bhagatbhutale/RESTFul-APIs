Project Report – Task Management REST API

1. Introduction

This Task Management REST API is a Backend Application Developed Using Node.js and Express.js.

The Main Objective Of This Project is to Implement RESTful API Endpoints to Perform CRUD (Create, Read, Update, Delete) Operations on Tasks.

2. Project Approach

I Followed a Modular Project Structure.

The application is divided into the following parts:

- Data: Stores Tasks In a JavaScript Array.
- Controllers: Business Logic For CRUD Operations.
- Routes: Defines API Endpoints And Connects To Controllers.
- App: src/server.js

3. Data Structure

I Used a JavaScript Array To Store Task Objects In Memory.

Each Task Contains:

json Format
{
  "id": 1,
  "title": "Task 1",
  "description": "This is Task 1 description",
}


The Task ID is provided manually through the POST request.

Before creating a task, the application checks whether the ID already exists to prevent duplicate IDs.

4. Algorithm Choices

Create Task (POST)

1. Receive task details from the request body.
2. Validate ID, title, and description.
3. Check whether the ID already exists.
4. Create a New Task object.
5. Insert The Task into the array.
6. Return The Created Task With HTTP 201.

Get All Tasks (GET)

1. Access the tasks array.
2. Return all available tasks.
3. Return HTTP 200.

Get Task By ID (GET)

1. Receive the task ID from URL Parameters.
2. Validate the ID.
3. Search for the task using find() method.
4. Return the task if found; otherwise, return HTTP 404.

Update Task (PUT)

1. Receive the task ID from URL Parameters.
2. Search for the task using findIndex().
3. Validate the updated data.
4. Update the existing task.
5. Return the updated task with HTTP 200.

Delete Task (DELETE)

1. Receive the task ID.
2. Find the task index using findIndex().
3. Remove the task using splice().
4. Return a success response.

5. Validation and Error Handling
The application validates:

- Required task fields.
- Non-empty title and description.
- Positive integer task IDs.
- Duplicate task IDs.
- Boolean type for the completed field.

Appropriate HTTP status codes are returned for successful operations, invalid requests, missing resources, and unexpected server errors.

7. Storage Decision

I Selected An In-Memory JavaScript array because the assignment specifically requires temporary in-memory storage.
No external database was used.
One limitation is that all tasks are lost whenever the server restarts.

8. Testing
I tested all CRUD endpoints using Thunder Client / Postman.

Testing included:

- Successful task creation.
- Retrieving all tasks.
- Retrieving an existing task.
- Updating an existing task.
- Deleting an existing task.
- Missing required fields.
- Duplicate task IDs.
- Invalid task IDs.
- Requesting a non-existing task.

9 Conclusion

This project helped me understand REST API development using Node.js and Express.js, including routing, controllers, CRUD operations, input validation, HTTP status codes, error handling, and in-memory data storage.



















