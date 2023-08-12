# BACKEND YOSO MEKATAMA

**Base url**
* `http://localhost:8080`

**Service Available**

<details>
<summary>Auth Service</summary>

* [Register](#1-register)
* [Login](#2-login)
* [Current user](#3-current-user)
* [Check password](#4-check-password)
* [Reset password](#5-reset-password)
* [Update data current user](#6-update-data-current-user)
* [Delete user](#7-delete-user)
</details>

<details>
<summary>User Service</summary>

* [Fetching list data user](#1-fetching-list-data-user)
* [Create new user](#2-create-new-user)
* [Update data user](#3-update-data-user)
* [Delete data user](#4-delete-data-user)
</details>

<details>
<summary>User Role Service</summary>

* [Fetching list data user-roles](#1-fetching-list-data-user-role)
* [Create new user-role](#2-create-new-user-role)
* [Update data user-role](#3-update-data-user-role)
* [Delete data user-role](#4-delete-data-user-role)
</details>

<details>
<summary>Profile Perusahaan Service</summary>

* [Fetching list data perusahaan](#1-fetching-list-data-customer)
* [Create new perusahaan](#2-create-new-customer)
* [Update data perusahaan](#3-update-data-customer)
* [Delete data perusahaan](#4-delete-data-customer)
</details>

<details>
<summary>Customer Service</summary>

* [Fetching list data customer](#1-fetching-list-data-customer)
* [Create new customer](#2-create-new-customer)
* [Update data customer](#3-update-data-customer)
* [Delete data customer](#4-delete-data-customer)
</details>

<details>
<summary>Divisi Service</summary>

* [Fetching list data divisi](#1-fetching-list-data-divisi)
* [Create new divisi](#2-create-new-divisi)
* [Update data divisi](#3-update-data-divisi)
* [Delete data divisi](#4-delete-data-divisi)
</details>

<details>
<summary>Subcont Service</summary>

* [Fetching list data subcont](#1-fetching-list-data-subcont)
* [Create new subcont](#2-create-new-subcont)
* [Update data subcont](#3-update-data-subcont)
* [Delete data subcont](#4-delete-data-subcont)
</details>

<details>
<summary>Suplier Service</summary>

* [Fetching list data suplier](#1-fetching-list-data-suplier)
* [Create new suplier](#2-create-new-suplier)
* [Update data suplier](#3-update-data-suplier)
* [Delete data suplier](#4-delete-data-suplier)
</details>

<details>
<summary>Ukuran Service</summary>

* [Fetching list data customer](#1-fetching-list-data-ukuran)
* [Create new customer](#2-create-new-ukuran)
* [Update data customer](#3-update-data-ukuran)
* [Delete data customer](#4-delete-data-ukuran)
</details>

**Tech Stack**

- [x] Node.js
- [x] Express.js
- [x] Nodemailer
- [x] jsonwebtoken
- [x] Sequelize

# User Service

#### 1. Register

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

#### 2. Login

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/login` |  |  |

Request Body

```sh
{
    "email" : "example@gmail.com",
    "password" : "example",
}
```

Response Success, this token will expire in 1 day;

```sh
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInJvbGUiOjQsInN0YXR1cyI6MSwiaWF0IjoxNjkxODE2NDQwLCJleHAiOjE2OTE5MDI4NDB9.vdf69obCAwTJ_CADNkoNp05Ywb8qrtvSLaVdBfEPwoI"
}
```

#### 3. Current user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/user/current` |  | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

Response Success

```sh
{
  "id": 27,
  "name": "Test 1",
  "email": "example@gmail.com",
  "bod": "1990-01-31",
  "email_verified_at": "2023-08-09T07:36:42.000Z",
  "password": "$2b$10$FohvdjCgEDX7hLktCrFQkeK9ffxSFaWA.KkUwy9X.a7LfwTFKXUSS",
  "id_user_role": 4,
  "two_factor_secret": null,
  "two_factor_recovery_codes": null,
  "remember_token": null,
  "current_team_id": null,
  "profile_photo_path": null,
  "status": 1,
  "created_at": "2023-08-09T07:36:05.000Z",
  "updated_at": "2023-08-09T07:36:05.000Z",
  "deleted_at": null
}
```

#### 4. Check password

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/check-password` |  | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

Request Body

```sh
{
    "password" : "example",
}
```

Response Success

```sh
{
  "message": "password correct"
}
```

#### 5. Reset password

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/reset-password` |  | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

Request Body

```sh
{
    "password" : "example",
}
```

Response Success

```sh
{
  "message": "Update password successfully"
}
```

#### 6. Update data current user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/user/update` |  | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
}
```

Response Success

```sh
{
  "message": "Update data successfully"
}
```

#### 7. Delete current user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/user/delete` |  | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

Response Success

```sh
{
  "message": "Delete account with id: 27 successfully"
}
```

# User Service

#### 1. Fetching list data user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/user` |  |  |

Response Success

```sh
{
  "message": "Success",
  "count": 12,
  "data": [
    {
      "id": 1,
      "name": "SUPERADMIN",
      "email": "superadmin@gmail.com",
      "bod": "1990-01-31",
      "email_verified_at": "2022-03-14T05:00:57.000Z",
      "password": "$2Y$10$InjsS3EOPzY4wU1F9QFdQu/xCHiPwDFvUpq0.raEB7wrs//MDCUDG",
      "id_user_role": 1,
      "two_factor_secret": null,
      "two_factor_recovery_codes": null,
      "remember_token": null,
      "current_team_id": null,
      "profile_photo_path": null,
      "status": 1,
      "created_at": "2022-03-14T05:01:24.000Z",
      "updated_at": "2022-03-14T04:49:50.000Z",
      "deleted_at": null,
      "user_role": {
        "code": "ADM",
        "name": "SUPERADMIN"
      },
      "user_status": {
        "name": "Aktif"
      }
    },
    {
      "id": 2,
      "name": "SLAMET WIDODO",
      "email": "slamet@gmail.com",
      "bod": "1990-03-31",
      "email_verified_at": null,
      "password": "$2y$10$uNdHvOz45wk5YxGgocjsNOOLLw6ZhH16zo2pmnBTFTBLUYdY.ffzy",
      "id_user_role": 1,
      "two_factor_secret": null,
      "two_factor_recovery_codes": null,
      "remember_token": null,
      "current_team_id": null,
      "profile_photo_path": null,
      "status": 1,
      "created_at": "2022-03-14T04:03:26.000Z",
      "updated_at": "2022-04-05T08:52:57.000Z",
      "deleted_at": null,
      "user_role": {
        "code": "ADM",
        "name": "SUPERADMIN"
      },
      "user_status": {
        "name": "Aktif"
      }
    },
  ]
}
```

#### 2. Create new user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user` |  |  |

Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
    "bod" : "2010-01-01",
    "status" : "aktif",
    "role" : "sales",
    "password" : "20100101",
}
```

Response Success

```sh
{
  "message": "Created",
  "data": 
  {
    "id": 28,
    "name": "John Doe",
    "email": "example@gmail.com",
    "bod": "2010-01-01",
    "status": 1,
    "password": "$2b$10$MFbbYGd5divBL74pP5ETCu6c8PwHlDJc9ncUp7JBVoG4udM0LrQ9C",
    "id_user_role": 3,
    "created_at": "2023-08-12T05:31:12.845Z",
    "updated_at": "2023-08-12T05:31:12.845Z"
  }
}
```

#### 3. Update data user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/user/update/:id` |  |  |

Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
    "bod" : "2010-01-01",
    "status" : "nonaktif",
    "role" : "sales",
}
```

Response Success

```sh
{
  "message": "Update data successfully"
}
```

#### 4. Delete data user

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/user/delete/:id` |  |  |

Response Success

```sh
{
  "message": "Delete data successfully"
}
```

# User Role Service

#### 1. Fetching list data user role

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/user/user-roles` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": [
    {
      "id": 1,
      "name": "SUPERADMIN",
      "code": "ADM",
      "description": "ADMIN SUPER",
      "module_access": "{\"angsuran\":[\"C\",\"R\",\"U\"],\"barang_jadi\":[\"C\",\"R\",\"U\"],\"barang_sj\":[\"C\",\"R\",\"U\"],\"barang_subcont\":[\"C\",\"R\",\"U\"],\"cek_permintaan\":[\"C\",\"R\",\"U\"],\"customers\":[\"C\",\"R\",\"U\",\"D\"],\"dashboard_card_gross\":[\"R\"],\"dashboard_card_limbah\":[\"R\"],\"dashboard_card_purchase_order\":[\"R\"],\"dashboard_card_sales_order\":[\"R\"],\"dashboard_grafic_sales_order\":[\"R\"],\"dashboard_list_produksi\":[\"R\"],\"dashboard_list_sales_order\":[\"R\"],\"dashboard_material_keluar\":[\"R\"],\"dashboard_material_masuk\":[\"R\"],\"divisi\":[\"C\",\"R\",\"U\",\"D\"],\"cek_item\":[\"C\",\"R\",\"U\"],\"formula_item\":[\"C\",\"R\",\"U\"],\"formula_utama\":[\"C\",\"R\",\"U\"],\"limbah\":[\"C\",\"R\",\"U\"],\"material\":[\"C\",\"R\",\"U\"],\"material_keluar\":[\"C\",\"R\",\"U\"],\"material_masuk\":[\"C\",\"R\",\"U\"],\"penjualan\":[\"C\",\"R\",\"U\",\"D\"],\"produk\":[\"C\",\"R\",\"U\",\"D\"],\"produksi\":[\"C\",\"R\",\"U\"],\"profile_perusahaan\":[\"R\",\"U\"],\"purchase\":[\"C\",\"R\",\"U\"],\"report_menu\":[\"R\"],\"statuses\":[\"C\",\"R\",\"U\"],\"subcont\":[\"C\",\"R\",\"U\",\"D\"],\"suplier\":[\"C\",\"R\",\"U\",\"D\"],\"surat_jalan_sales_order\":[\"R\"],\"tools\":[\"C\",\"R\",\"U\"],\"ukuran\":[\"C\",\"R\",\"U\",\"D\"],\"user_roles\":[\"C\",\"R\",\"U\"],\"users\":[\"C\",\"R\",\"U\",\"D\"]}",
      "created_at": "2022-01-10T15:41:47.000Z",
      "updated_at": "2022-06-09T04:07:47.000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "PPIC",
      "code": "PIC",
      "description": "OPERATOR PRODUKSI",
      "module_access": "{\"barang_jadi\":[\"C\",\"R\",\"U\",\"D\"],\"barang_sj\":[\"C\",\"R\",\"U\",\"D\"],\"barang_subcont\":[\"C\",\"R\",\"U\"],\"cek_permintaan\":[\"C\",\"R\",\"U\"],\"customers\":[\"R\"],\"dashboard_list_produksi\":[\"R\"],\"dashboard_list_sales_order\":[\"R\"],\"dashboard_material_keluar\":[\"R\"],\"dashboard_material_masuk\":[\"R\"],\"divisi\":[\"C\",\"R\",\"U\"],\"formula_item\":[\"C\",\"R\",\"U\"],\"formula_utama\":[\"C\",\"R\",\"U\"],\"limbah\":[\"C\",\"R\",\"U\",\"D\"],\"material\":[\"C\",\"R\",\"U\"],\"material_keluar\":[\"C\",\"R\",\"U\",\"D\"],\"material_masuk\":[\"C\",\"R\",\"U\",\"D\"],\"produk\":[\"C\",\"R\",\"U\",\"D\"],\"produksi\":[\"C\",\"R\",\"U\",\"D\"],\"profile_perusahaan\":[\"R\"],\"purchase\":[\"C\",\"R\",\"U\",\"D\"],\"subcont\":[\"C\",\"R\",\"U\",\"D\"],\"suplier\":[\"C\",\"R\",\"U\",\"D\"],\"surat_jalan_sales_order\":[\"R\"],\"tools\":[\"C\",\"R\",\"U\",\"D\"],\"ukuran\":[\"C\",\"R\",\"U\"]}",
      "created_at": "2022-01-10T15:41:47.000Z",
      "updated_at": "2022-04-16T03:17:39.000Z",
      "deleted_at": null
    },
  ]
}
```

#### 2. Create new user role

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/user-roles` |  |  |

Request Body

```sh
{
  "code": "SPD",
  "name": "Sarjana",
  "description": "Sarjana Pendidikan",
  "module": "{\"barang_jadi\":[\"C\",\"R\",\"U\",\"D\"],\"barang_sj\":[\"C\",\"R\",\"U\",\"D\"],\"barang_subcont\":[\"C\",\"R\",\"U\"],\"cek_permintaan\":[\"C\",\"R\",\"U\"],\"customers\":[\"R\"],\"dashboard_list_produksi\":[\"R\"],\"dashboard_list_sales_order\":[\"R\"],\"dashboard_material_keluar\":[\"R\"],\"dashboard_material_masuk\":[\"R\"],\"divisi\":[\"C\",\"R\",\"U\"],\"formula_item\":[\"C\",\"R\",\"U\"],\"formula_utama\":[\"C\",\"R\",\"U\"],\"limbah\":[\"C\",\"R\",\"U\",\"D\"],\"material\":[\"C\",\"R\",\"U\"],\"material_keluar\":[\"C\",\"R\",\"U\",\"D\"],\"material_masuk\":[\"C\",\"R\",\"U\",\"D\"],\"produk\":[\"C\",\"R\",\"U\",\"D\"],\"produksi\":[\"C\",\"R\",\"U\",\"D\"],\"profile_perusahaan\":[\"R\"],\"purchase\":[\"C\",\"R\",\"U\",\"D\"],\"subcont\":[\"C\",\"R\",\"U\",\"D\"],\"suplier\":[\"C\",\"R\",\"U\",\"D\"],\"surat_jalan_sales_order\":[\"R\"],\"tools\":[\"C\",\"R\",\"U\",\"D\"],\"ukuran\":[\"C\",\"R\",\"U\"]}",
}
```

Response Success

```sh
{
  "message": "Created",
  "data": 
  {
    "id": 8,
    "name": "SARJANA",
    "code": "SPD",
    "description": "SARJANA PENDIDIKAN",
    "created_at": "2023-08-12T05:42:30.504Z",
    "updated_at": "2023-08-12T05:42:30.504Z"
  }
}
```

#### 3. Update data user role

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| PUT | `/api/user/user-roles/:id` |  |  |

Request Body

```sh
{
  "code": "SPD",
  "name": "Sarjana Pendidikan",
  "description": "Pahlawan perlu tanda jasa",
  "module": "{\"barang_jadi\":[\"C\",\"R\",\"U\",\"D\"],\"barang_sj\":[\"C\",\"R\",\"U\",\"D\"],\"barang_subcont\":[\"C\",\"R\",\"U\"],\"cek_permintaan\":[\"C\",\"R\",\"U\"],\"customers\":[\"R\"],\"dashboard_list_produksi\":[\"R\"],\"dashboard_list_sales_order\":[\"R\"],\"dashboard_material_keluar\":[\"R\"],\"dashboard_material_masuk\":[\"R\"],\"divisi\":[\"C\",\"R\",\"U\"],\"formula_item\":[\"C\",\"R\",\"U\"],\"formula_utama\":[\"C\",\"R\",\"U\"],\"limbah\":[\"C\",\"R\",\"U\",\"D\"],\"material\":[\"C\",\"R\",\"U\"],\"material_keluar\":[\"C\",\"R\",\"U\",\"D\"],\"material_masuk\":[\"C\",\"R\",\"U\",\"D\"],\"produk\":[\"C\",\"R\",\"U\",\"D\"],\"produksi\":[\"C\",\"R\",\"U\",\"D\"],\"profile_perusahaan\":[\"R\"],\"purchase\":[\"C\",\"R\",\"U\",\"D\"],\"subcont\":[\"C\",\"R\",\"U\",\"D\"],\"suplier\":[\"C\",\"R\",\"U\",\"D\"],\"surat_jalan_sales_order\":[\"R\"],\"tools\":[\"C\",\"R\",\"U\",\"D\"],\"ukuran\":[\"C\",\"R\",\"U\"]}"
}
```

Response Success

```sh
{
  "message": "Update data successfully"
}
```

#### 4. Delete data user role

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/user/user-roles/:id` |  |  |

Response Success

```sh
{
  "message": "Update data successfully"
}
```

# Profile Perusahaan

#### 1. Fetching list data perusahaan

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| GET | `/api/user/company` |  |  |

Response Success

```sh
{
  "message": "Success",
  "data": 
  {
    "id": 1,
    "nama": "CV. YOSO MEKATAMA",
    "alamat": "Ruko Villa Mutiara Cikarang Blok R2 N. 16 & 17 Ciantara Cikarang Selatan - Bekasi",
    "kab_kota": "Cikarang Utara, Bekasi",
    "image": "CV. YOSO MEKATAMA.png",
    "telp": "02189901168",
    "fax": "02189901498",
    "created_at": null,
    "updated_at": "2022-04-05T07:41:55.000Z"
  }
}
```

#### 2. Create new perusahaan

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| POST | `/api/user/company` |  |  |

Request Body

```sh
{
    "nama" : "pt. adung international",
    "alamat" : "Pangkah Barat",
    "kab_kota" : "Cirebon",
    "telp" : "0852085212",
    "fax" : "021021",
    "image": ImageFile()
}
```

Response Success

```sh
{
  "message": "Created",
  "data": 
  {
    "id": 11,
    "nama": "PT. ADUNG INTERNATIONAL",
    "alamat": "Pangkah Barat",
    "kab_kota": "Tegal",
    "telp": "123",
    "fax": "123",
    "image": "image-1691819379856-629710665.jpeg",
    "created_at": "2023-08-12T05:49:39.902Z",
    "updated_at": "2023-08-12T05:49:39.902Z"
  }
}
```

#### 3. Update data perusahaan

| HTTP Method | Endpoint | Params | Authorization |
| :---------: | -------- | :----: | ------------- |
| DELETE | `/api/user/user-roles/:id` |  |  |

Request Body

```sh
{
    "name" : "John Doe",
    "email" : "example@gmail.com",
    "bod" : "2010-01-01",
    "status" : "nonaktif",
    "role" : "sales",
}
```

Response Success

```sh
{
  "message": "Update data succesfully",
  "prevImage": "image-1691819379856-629710665.jpeg",
  "currentImage": "Not send image"
}
```

# Customer Service

#### 1. Fetching list data customer

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

#### 2. Create new customer

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

#### 3. Update data customer

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

#### 4. Delete data customer

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

#### 1. Fetching list data divisi

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

#### 2. Create new divisi

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

#### 3. Update data divisi

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

#### 4. Delete data divisi

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

#### 1. Fetching list data subcont

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

#### 2. Create new subcont

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

#### 3. Update data subcont

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

#### 4. Delete data subcont

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

#### 1. Fetching list data suplier

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

#### 2. Create new suplier

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

#### 3. Update data suplier

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

#### 4. Delete data suplier

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

#### 1. Fetching list data ukuran

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

#### 2. Create new ukuran

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

#### 3. Update data ukuran

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

#### 4. Delete data ukuran

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