# BACKEND YOSO MEKATAMA

Base url:
* `http://localhost:8080`

## User Service

1. Register

| HTTP Method | Endpoint | Usage |
| :---------: | -------- | ----- |
| POST | `/api/user/register` | Create new user |

#### Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
    "role" : "superadmin",
    "password" : "john123",
}
```

#### Response Success

```sh
{
    "status" : "Created",
    "data" : "Please check inbox on example@gmail.com to activate your account",
}
```

2. Login

> developed by yusronab