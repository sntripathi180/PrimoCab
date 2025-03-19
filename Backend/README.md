# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JWT token along with the user details.

### Request Body:

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (required, min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (required, valid email format, min length: 5)",
  "password": "string (required, min length: 6)"
}
```
### Example Response
-`user`(object).
    -`fullname` (string):User's first name (minimum 3 character)
        -`firstname` (string):User's last name (minimum 3 characters).
        -`lastname` (string):User's last name (minimum 3 characters).
    -`email` (string) : User's email address(must be a valid email),
    -`password` (string) : User's password (minimum 6 characters)
-`token` (string) : JWT Token
