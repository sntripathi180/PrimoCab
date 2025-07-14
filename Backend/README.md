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
    "token": "<JWT-token>",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "password": "<hashed-password>",
        "__v": 0
    }
}
```

## 2. Login User
### Method: POST

### Endpoint: `/users/login`

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
    "token": "<JWT-token>",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "_id": "...",
        "email": "john@example.com",
        "password": "<hashed-password>",
        "__v": 0
    }
}

```

## 3. Get User Profile
### Method: GET

### Endpoint: `/users/profile`

### Description:
 Get the logged-in user's profile.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>

```

###  Sample Response:
```
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "_id": "...",
    "email": "john@example.com",
    "__v": 0
}

```
## 4. Logout User
### Method: GET

### Endpoint: `/users/logout`

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

# Captain API Documentation

 ## 1. Register Captain
### Method: POST

### Endpoint: `/captains/register`

### Description:
 Registers a new captain with personal and vehicle details.

### Sample Request Body:
```
{
  "fullname": {
    "firstname": "Raj",
    "lastname": "Kumar"
  },
  "email": "raj@example.com",
  "password": "captainPass123",
  "vehicle": {
    "color": "Red",
    "plate": "DL10AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}

```
###  Validations:
- email must be valid

- fullname.firstname at least 3 characters

- password at least 6 characters

- vehicle.color and vehicle.plate at least 3 characters

- vehicle.capacity must be numeric

- vehicle.vehicleType must be one of: "car", "bike", "auto"


###  Response:
```
{
    "token": "<JWT_TOKEN>",
    "captain": {
        "fullname": {
            "firstname": "Raj",
    "lastname": "Kumar",
        },
        "email": "aasdaa121@gmail.com",
        "password": "<hashed-password>",
        "status": "active",
        "vehicle": {
            "color": "red",
            "plate": "Xx UU NN",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "...",
        "__v": 0
    }
}
```

##  2. Login Captain
### Method: POST

### Endpoint: `/captains/login`

### Description: 
Login an existing captain using email and password.

### Request Body:
```
{
  "email": "raj@example.com",
  "password": "captainPass123"
}

```


###  Response:
```
{
    "token": "<JWT_TOKEN>",
    "captain": {
        "fullname": {
            "firstname": "Raj",
            "lastname": "Kumar"
        },
        "vehicle": {
            "color": "Red",
            "plate": "DL10AB1234",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "...",
        "email": "raj@example.com",
        "password": "<hashed-password>",
        "status": "active",
        "__v": 0
    }
}
```

## 2.Get Captain Profile
### Method: GET

### Endpoint: `/captains/profile`

### Description:
 Get the authenticated captain's profile information.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```
### Response:

```
{
    "captain": {
        "fullname": {
            "firstname": "Raj",
            "lastname": "Kumar"
        },
        "vehicle": {
            "color": "Red",
            "plate": "DL10AB1234",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "...",
        "email": "raj@example.com",
        "status": "active",
        "__v": 0
    }
}
```

## 4. Logout Captain
### Method: GET

### Endpoint: `/captains/logout`

### Description: 
Log out the currently authenticated captain by blacklisting their token.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>

```

### Response:

```
{
  "message": "Captain logged out successfully"
}
```