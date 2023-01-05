# KImóveis - TypeORM com Relacionamentos

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

## Representação: 
![image](https://user-images.githubusercontent.com/101838666/210680737-dfced207-47ec-4d63-9d5c-45c871a7d451.png)



### User
**Rotas de criação de usuario:**

### POST: /users

**Request**
```
{
    "name": "Joana",
    "email": "joana@kenzie.com",
    "password": "123456",
    "isAdm": false
}
```

**Response - 201 - Created**

```
{
	"name": "Jorge",
	"email": "jorge@kenzie.com",
	"isAdm": false,
	"id": "95de129b-fc96-4c70-b57e-49dc1cb9ffb6",
	"isActive": true,
	"createdAt": "2023-01-05T01:40:00.749Z",
	"updatedAt": "2023-01-05T01:40:00.749Z"
}
```


### POST: /login

**Request**

```
{
    
    "email": "jorge@kenzie.com",
    "password": "123456"
 
}
```

**Response - 200 - Ok**

````
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9yZ2UiLCJpZCI6Ijk1ZGUxMjliLWZjOTYtNGM3MC1iNTdlLTQ5ZGMxY2I5ZmZiNiIsImlhdCI6MTY3Mjg4Mjk5MywiZXhwIjoxNjcyOTY5MzkzLCJzdWIiOiI5NWRlMTI5Yi1mYzk2LTRjNzAtYjU3ZS00OWRjMWNiOWZmYjYifQ.H1QS3gcBspxP6G3ZIP-KqWUfrMEhQHiFM0C2CgS7kX0"
}
````


## Rotas que necessitam de autenticação:

### GET: /users

**Response - 200 - Ok**

````
[
	{
		"id": "7d00dedb-7ab6-4e04-b9b4-d3daef7085a7",
		"name": "Thiago",
		"email": "thiago@mail.com",
		"isAdm": true,
		"isActive": true,
		"createdAt": "2022-12-14T19:40:55.865Z",
		"updatedAt": "2022-12-14T19:40:55.865Z"
	},
	{
		"id": "69e02416-70f6-4478-9f0c-68d787c52a32",
		"name": "Lucas",
		"email": "lucas123@mail.com",
		"isAdm": true,
		"isActive": true,
		"createdAt": "2022-12-14T19:54:19.286Z",
		"updatedAt": "2022-12-14T19:54:19.286Z"
	},
	{
		"id": "e05c4067-1e5b-42b3-a4d3-d4bd47b1b1a4",
		"name": "Juliooooo",
		"email": "Ju520@mail.com",
		"isAdm": false,
		"isActive": true,
		"createdAt": "2022-12-15T01:22:05.647Z",
		"updatedAt": "2022-12-15T01:22:05.647Z"
	}
]
````
## Rota necessita que o usuario esteja logado como Adm

### PATCH: /users/:id

**Request**

````
{
    "email": "jorge2023@kenzie.com",
    "password": "novaSenha"
}
````

**Response - 200 - Ok**

````
[
	{
		"id": "95de129b-fc96-4c70-b57e-49dc1cb9ffb6",
		"name": "Jorge",
		"email": "jorge2023@kenzie.com",
		"password": "$2a$10$SYR.1C6aSWUSFQFejnDeaOuT2BXETD7S6O7n.nX3jL4JkOEvr3FDu",
		"isAdm": false,
		"isActive": true,
		"createdAt": "2023-01-05T01:40:00.749Z",
		"updatedAt": "2023-01-05T01:40:00.749Z"
	}
]
````

### DELETE: /users/:id

**Response - 204 - No Content**



## Categories
**Rotas de criação de categorias:**

## Rota necessita que o usuario esteja logado como Adm

### POST: /categories 

**Request**
````
{
    "name": "Terrenos"
}
````

**Response - 201 - Created**

````
{
    "name": "Terrenos",
    "id": "e5f1c308-0d74-4e2d-977b-83075cc4adb2"
}
````

### GET: /categories

**Response - 200 - Ok**

````
[
	{
		"id": "1a758f52-2080-46fd-a16d-558198856308",
		"name": "Apartamento"
	},
	{
		"id": "d1b38a29-0d73-48c7-8700-10614dc62b01",
		"name": "Casa"
	},
	{
		"id": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488",
		"name": "Terreno"
	}
]
````

## Propriedades
**Rotas de criação de propriedades:**

## Rota necessita que o usuario esteja logado como Adm

### POST: /properties

**Request**

````
{
    "value": 1000000,
    "size": 350,
    "address": {
        "district": "Rua Heleodo Pires de camargo",
        "zipCode": "18150000",
        "number": "67",
        "city": "Piedade",
        "state": "SP"
    },
    "categoryId": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488"
}
````

**Response - 201 - Created**

````
{
     "value": 1000000,
     "size": 350,
     "address": {
	  "id": "a310dbee-55fc-4daf-9541-3ecb1a9bcbe2",
	  "district": "Rua Heleodo Pires de camargo",
          "zipCode": "18150000",
	  "number": "67",
	  "city": "Piedade",
	  "state": "SP"
	},
     "category": {
	  "id": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488",
	  "name": "Terreno"
	},
     "id": "f7b71adc-4ee2-4a20-a861-ae7788b06d78",
     "sold": false,
     "createdAt": "2022-12-22T17:36:17.065Z",
     "updatedAt": "2022-12-22T17:36:17.065Z"
}
````



