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

```json
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

```json
{
  "email": "john@example.com",
  "password": "securePass123"
}
```

### Sample Response:

```json
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

### Sample Response:

```json
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

### Sample Response:

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

```json
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

### Validations:

- email must be valid

- fullname.firstname at least 3 characters

- password at least 6 characters

- vehicle.color and vehicle.plate at least 3 characters

- vehicle.capacity must be numeric

- vehicle.vehicleType must be one of: "car", "bike", "auto"

### Response:

```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "fullname": {
      "firstname": "Raj",
      "lastname": "Kumar"
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

## 2. Login Captain

### Method: POST

### Endpoint: `/captains/login`

### Description:

Login an existing captain using email and password.

### Request Body:

```json
{
  "email": "raj@example.com",
  "password": "captainPass123"
}
```

### Response:

```json
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

```json
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

# Map API Documentation

## 1. Get Coordinates by Address

### Method: GET

### Endpoint: `/maps/get-coordinates`

### Description:

Get latitude and longitude for a given address.

### Headers:

```
Authorization: Bearer <JWT_TOKEN>
```

### Query Parameters:

```
address	=> string(required)	=>	Valid location string
```

### Sample Request:

```
GET /maps/get-coordinates?address=Connaught Place
```

### Sample Response:

```
{
  "lat": 28.6315,
  "lng": 77.2167
}
```

## 2. Get Distance & Time

### Method: GET

### Endpoint: `/maps/get-distance-time`

### Description:

Returns estimated travel distance and duration between origin and destination.

### Headers:

`Authorization: Bearer <JWT_TOKEN>`

### Query Parameters:

```
origin => string(required)	=> Starting location
destination	=> string(required)	=> Destination location
```

### Sample Request:

GET `/maps/get-distance-time?origin=Connaught+Place&destination=India+Gate`

### Sample Response:

```
{
    "distance": 3565.47,
    "duration": 315.27
}
```

## 3. Get Autocomplete Suggestions

### Method: GET

### Endpoint: `/maps/get-suggestions`

### Description:

Returns a list of autocomplete suggestions for location input.

### Headers:

`
Authorization: Bearer <JWT_TOKEN>`

### Query Parameters:

```
input	=> string(required)	=> Partial location input
```

### Sample Request:

GET `/maps/get-suggestions?input=delhi`

### Sample Response:

```json
["Delhi University", "Delhi Cantt", "Delhi Airport", "Delhi Metro Station"]
```



# Ride API Documentation

## 1. Create Ride
### Method: POST

### Endpoint: `/rides/create`

### Description: 
Initiates a ride request by a user and notifies nearby captains.

### Headers:

`Authorization: Bearer <JWT_TOKEN>   // User Token`

### Request Body:
```json
{
  "pickup": "Connaught Place, Delhi",
  "destination": "India Gate, Delhi",
  "vehicleType": "auto"
}
```
### Sample Response:
```json
{
  {
    "user": "user_id",
    "pickup": "Connaught Place, Delhi",
    "destination": "India Gate, Delhi",
    "fare": 76,
    "status": "pending",
    "otp": "823088",
    "_id": "...",
    "__v": 0
}
}
```
## 2. Get Fare


### Method: GET

### Endpoint: `/rides/get-fare`

### Description: 
Estimate the ride fare for a given route.

### Headers:
`
Authorization: Bearer <JWT_TOKEN>
`
### Query Parameters:
```
pickup => string(required)	=> Connaught Place, Delhi
destination	=> string(required)	=> India Gate, Delhi
```
### Sample Request:

GET   `/rides/get-fare?pickup=Connaught+Place&destination=India+Gate`
### Sample Response:
```json
{
    "auto": 76,
    "car": 119,
    "moto": 56
}
```
## 3. Confirm Ride (by Captain)
### Method: POST

### Endpoint: `/rides/confirm`

### Description: 
Confirms a ride by an available captain.

### Headers:
`
Authorization: Bearer <JWT_TOKEN>  // Captain Token`

### Request Body:
```json

{
  "rideId": "64d8d9abc1234567890abcde"
}
```
### Sample Response:
```json

{
  {
    "_id": "..",
    "user": {
        "fullname": {
            "firstname": "sam",
            "lastname": "alt"
        },
        "_id": "user-id",
        "email": "a@gmail.com",
        "__v": 0
    },
    "pickup": "Connaught Place, Delhi",
    "destination": "India Gate, Delhi",
    "fare": 76,
    "status": "accepted",
    "otp": "823088",
    "__v": 0,
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
        "_id": "captain-id",
        "email": "raj@example.com",
        "status": "active",
        "__v": 0
    }
  }
}
```

## 4. Start Ride
### Method: GET

### Endpoint: `/rides/start-ride`

### Description: 
Starts the ride after OTP validation by the captain.

### Headers:
`
Authorization: Bearer <JWT_TOKEN>   // Captain Token`

### Query Parameters:
`
rideId	=> string(required)	=> MongoDB ObjectId
otp	=> string(required)	=> 6-digit OTP from user
`
### Sample Request:
`
GET /rides/start-ride?rideId=64d8d9abc1234567890abcde&otp=123456`
### Sample Response:
```json

{
    "_id": "....",
    "user": {
        "fullname": {
            "firstname": "sam",
            "lastname": "alt"
        },
        "_id": "...",
        "email": "a@gmail.com",
        "__v": 0
    },
    "pickup": "Connaught Place, Delhi",
    "destination": "India Gate, Delhi",
    "fare": 76,
    "status": "accepted",
    "otp": "823088",
    "__v": 0,
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

## 5. End Ride
### Method: POST

### Endpoint: `/rides/end-ride`

### Description:
 Ends the ride and marks it as completed.

### Headers:
```
Authorization: Bearer <JWT_TOKEN>  // Captain Token
```

### Request Body:
```json

{
  "rideId": "64d8d9abc1234567890abcde"
}
 ```
    
    
### Sample Response:
```json

{
    "_id": "...",
    "user": {
        "fullname": {
            "firstname": "sam",
            "lastname": "alt"
        },
        "_id": "...",
        "email": "a@gmail.com",
        "__v": 0
    },
    "pickup": "Connaught Place, Delhi",
    "destination": "India Gate, Delhi",
    "fare": 76,
    "status": "ongoing",
    "otp": "823088",
    "__v": 0,
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