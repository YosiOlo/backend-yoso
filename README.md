# BACKEND YOSO MEKATAMA

**Base url**
* `http://localhost:8080`

**Service Available**

* [User Service](#user-service)
* [Customer Service](#customer-service)
* [Divisi Service](#divisi-service)
* [Subcont Service](#subcont-service)
* [Suplier Service](#suplier-service)
* [Ukuran Service](#ukuran-service)

**Tech Stack**

- [x] Node.js
- [x] Express.js
- [x] Nodemailer
- [x] jsonwebtoken

# User Service

**1. Register**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/register` |  |  |

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

**3. Current user**

**4. Check password**

**5. Reset password**

**6. Update data user**

**7. Delete user**

# Customer Service

**1. Fetching list data customer**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/customer` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "nama": "PT. KYOWA INDONESIA",
      "alamat": "East Jakarta Induatrial Park",
      "kota": "Bekasi",
      "tlp": "0218970332",
      "created_at": "2022-01-24T09:15:05.000Z",
      "updated_at": "2022-01-29T03:05:44.000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "nama": "PT CDG1",
      "alamat": "CIKARANG",
      "kota": "BEKASI",
      "tlp": "021887799",
      "created_at": "2022-01-26T05:13:00.000Z",
      "updated_at": "2022-03-19T02:35:35.000Z",
      "deleted_at": "2022-03-19T02:35:35.000Z"
    },
    {
      "id": 3,
      "nama": "PT. AISAN NASMOCO INDUSTRI",
      "alamat": "East Jakarta Industrial Park Plot 9L\nLemahabang, Bekasi",
      "kota": "Bekasi",
      "tlp": "0218971577",
      "created_at": "2022-03-12T02:48:13.000Z",
      "updated_at": "2022-03-12T02:48:13.000Z",
      "deleted_at": null
    },
  ]
}
```

**2. Create new customer**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/customer` |  |  |

Request Body

```sh
{
  "nama": "pt. adung international",
  "alamat": "Kecamatan Pangkah Barat",
  "kota": "Tegal",
  "tlp": "021021"
}
```

Response Success

```sh
{
  "message": "Create data successfully",
  "data": 
  {
    "id": 32,
    "nama": "PT. ADUNG INTERNATIONAL",
    "alamat": "Kecamatan Pangkah Barat",
    "kota": "Tegal",
    "tlp": "021021",
    "created_at": "2023-08-11T01:26:01.161Z",
    "updated_at": "2023-08-11T01:26:01.161Z"
  }
}
```

**3. Update data customer**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/customer/{id}` | * |  |

Request Body

```sh
{
  "nama": "pt. adung international",
  "alamat": "Kecamatan Pangkah Barat",
  "kota": "Tegal",
  "tlp": "021021"
}
```

Response Success

```sh
{
  "message": "Update data successfully",
}
```

**4. Delete data customer**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/customer/{id}` | * |  |

Response Success

```sh
{
  "message": "Delete data successfully",
}
```

# Divisi Service

**1. Fetching list data divisi**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/divisi` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "nama": "subcont",
      "created_at": "2022-01-24T09:48:37.000Z",
      "updated_at": "2022-01-24T09:48:37.000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "nama": "Cnc Milling",
      "created_at": "2022-01-24T09:48:56.000Z",
      "updated_at": "2022-01-24T09:48:56.000Z",
      "deleted_at": null
    },
  ]
}
```

**2. Create new divisi**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/divisi` |  |  |

Request Body

```sh
{
  "nama": "Developer"
}
```

Response Success

```sh
{
  "message": "Create data successfully",
  "data": 
  {
    "id": 32,
    "nama": "Developer",
    "created_at": "2023-08-11T01:26:01.161Z",
    "updated_at": "2023-08-11T01:26:01.161Z"
  }
}
```

**3. Update data divisi**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/divisi/{id}` | * |  |

Request Body

```sh
{
  "nama": "pt. adung international",
}
```

Response Success

```sh
{
  "message": "Update data successfully",
}
```

**4. Delete data divisi**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/divisi/{id}` | * |  |

Response Success

```sh
{
  "message": "Delete data successfully",
}
```

# Subcont Service

**1. Fetching list data subcont**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/subcont` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "nama": "PT.KANETSU",
      "alamat": "Delta 8",
      "kab_kota": "cikarang",
      "telp": "8991156",
      "fax": "8991157",
      "created_at": "2022-03-19T03:58:41.000Z",
      "updated_at": "2022-03-19T03:58:41.000Z"
    },
    {
      "id": 2,
      "nama": "Tarto Elektrical",
      "alamat": "Jababeka",
      "kab_kota": "Cikarang selatan",
      "telp": "081932175589",
      "fax": "081932175589",
      "created_at": "2022-04-16T02:51:14.000Z",
      "updated_at": "2022-04-16T02:51:14.000Z"
    },
  ]
}
```

**2. Create new subcont**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/subcont` |  |  |

Request Body

```sh
{
  "nama": "pt. adung international",
  "alamat": "Kecamatan Pangkah Barat",
  "kab_kota": "Tegal",
  "telp": "0897021",
  "fax": "021021"
}
```

Response Success

```sh
{
  "message": "Create data successfully",
  "data": 
  {
    "id": 6,
    "nama": "PT. ADUNG INTERNATIONAL",
    "alamat": "Kecamatan Pangkah Barat",
    "kab_kota": "Tegal",
    "telp": "0897021",
    "fax": "021021",
    "created_at": "2023-08-11T01:58:11.335Z",
    "updated_at": "2023-08-11T01:58:11.335Z"
  }
}
```

**3. Update data subcont**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/subcont/{id}` | * |  |

Request Body

```sh
{
  "nama": "pt. adung international",
  "alamat": "Kecamatan Pangkah Barat",
  "kab_kota": "Tegal",
  "telp": "0897021",
  "fax": "021021"
}
```

Response Success

```sh
{
  "message": "Update data successfully",
}
```

**4. Delete data subcont**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/subcont/{id}` | * |  |

Response Success

```sh
{
  "message": "Delete data successfully",
}
```

# Suplier Service

**1. Fetching list data suplier**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/suplier` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "nama": "Agung Tehnik",
      "fax": "tidak tersedia",
      "alamat": "Tidak ada keterangan",
      "kontak": "8971303",
      "created_at": "2022-01-24T08:54:16.000Z",
      "updated_at": "2022-01-24T09:43:43.000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "nama": "Alfa & Omega",
      "fax": "62311153",
      "alamat": "Tidak ada keterangan",
      "kontak": "6012162",
      "created_at": "2022-01-24T08:54:49.000Z",
      "updated_at": "2022-01-24T09:11:45.000Z",
      "deleted_at": null
    },
  ]
}
```

**2. Create new suplier**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/suplier` |  |  |

Request Body

```sh
{
  "nama": "Sane Pen",
  "alamat": "Kecamatan Pangkah Barat",
  "kontak": "0897021",
  "fax": "021021"
}
```

Response Success

```sh
{
  "message": "Create data successfully",
  "data": 
  {
    "id": 91,
    "nama": "SANE PEN",
    "alamat": "Kecamatan Pangkah Barat",
    "fax": "021021",
    "kontak": "0897021",
    "created_at": "2023-08-11T02:02:05.991Z",
    "updated_at": "2023-08-11T02:02:05.991Z"
  }
}
```

**3. Update data suplier**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/suplier/{id}` | * |  |

Request Body

```sh
{
  "nama": "Sane Pen",
  "alamat": "Kecamatan Pangkah Barat",
  "kontak": "0897021",
  "fax": "021021"
}
```

Response Success

```sh
{
  "message": "Update data successfully",
}
```

**4. Delete data suplier**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/suplier/{id}` | * |  |

Response Success

```sh
{
  "message": "Delete data successfully",
}
```

# Ukuran Service

**1. Fetching list data ukuran**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/ukuran` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "nama": "Milimeters",
      "created_at": "2022-01-24T09:12:09.000Z",
      "updated_at": "2022-01-24T09:12:09.000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "nama": "Unit",
      "created_at": "2022-01-24T09:12:16.000Z",
      "updated_at": "2022-01-24T09:12:16.000Z",
      "deleted_at": null
    },
  ]
}
```

**2. Create new ukuran**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/ukuran` |  |  |

Request Body

```sh
{
  "nama": "Mikrometer"
}
```

Response Success

```sh
{
  "message": "Create data successfully",
  "data": 
  {
    "id": 22,
    "nama": "Mikrometer",
    "created_at": "2023-08-11T02:04:52.287Z",
    "updated_at": "2023-08-11T02:04:52.287Z"
  }
}
```

**3. Update data ukuran**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/ukuran/{id}` | * |  |

Request Body

```sh
{
  "nama": "Mikrometer"
}
```

Response Success

```sh
{
  "message": "Update data successfully",
}
```

**4. Delete data ukuran**

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/ukuran/{id}` | * |  |

Response Success

```sh
{
  "message": "Delete data successfully",
}
```

> _developed by yusronab_