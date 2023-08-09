# BACKEND YOSO MEKATAMA

Base url:
* `http://localhost:8080`

## User Service

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

> developed by yusronab