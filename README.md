# client-directory-backend

# Backend Server Project

This is a simple backend server built using Node.js and Express. It provides basic API endpoints to manage user data.

## Features

- Create new users via POST request
- Retrieve a list of all users via GET request
- Delete a user by ID via DELETE request

## Getting Started

### Prerequisites

Before running the server, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)


## API Endpoints

### POST /api/users
Create a new user.

- **Request:**
  - Method: POST
  - Endpoint: `/api/users`
  - Request Body: JSON with user data

- **Response:**
  - Status Code: 201 Created
  - Content: JSON with the created user data

### GET /api/users
Retrieve a list of all users.

- **Request:**
  - Method: GET
  - Endpoint: `/api/users`

- **Response:**
  - Status Code: 200 OK
  - Content: JSON array of user data

### DELETE /api/users/:id
Delete a user by ID.

- **Request:**
  - Method: DELETE
  - Endpoint: `/api/users/:id` (replace `:id` with the actual user ID)

- **Response:**
  - Status Code: 204 No Content (or specify appropriate response)
