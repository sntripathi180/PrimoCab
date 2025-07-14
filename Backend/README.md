# User Endpoint Documentation

## 1. Register User
### Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JWT token along with the user details.

### Request Body:

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "securePass123"
}

```
### Example Response
```
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "64d3b1...",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com"
  }
}
```

## 2. Login User
### Method: POST

### Endpoint: `/login`

### Description: 

Login an existing user using email and password.

### Request Body (JSON):

```
{
  "email": "john@example.com",
  "password": "securePass123"
}

```

### Sample Response:
```
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "64d3b1...",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com"
  }
}

```

## 3. Get User Profile
### Method: GET

### Endpoint: `/profile`

### Description:
 Get the logged-in user's profile.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>

```

###  Sample Response:
```
{
  "_id": "64d3b1...",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com"
}

```
## 4. Logout User
### Method: GET

### Endpoint: `/logout`

### Description:
 Logs out the user by clearing the token and blacklisting it.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```
###  Sample Response:
```
{
  "message": "Logged out successfully"
}
```

