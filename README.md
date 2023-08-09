# BACKEND YOSO MEKATAMA

**Base url**
* `http://localhost:8080`

**Service Available**

* [User Service](#user-service)

**Tech Stack**

- [x] Node.js
- [x] Express.js
- [x] Nodemailer
- [x] jsonwebtoken

# User Service

**1. Register**

| HTTP Method | Endpoint | Usage |
| :---------: | -------- | ----- |
| POST | `/api/user/register` | Create new user |

Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
    "role" : "superadmin",
    "password" : "john123",
}
```

Response Success

```sh
{
    "status" : "Created",
    "data" : "Please check inbox on example@gmail.com to activate your account",
}
```

**2. Login**

**3. Current User**

**4. Check Password**

**5. Reset Password**

**6. Update Data User**

**7. Delete User**

> _developed by yusronab_