# Todo List API



## Table of Contents

- [Todo List API](#todo-list-api)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
    - [Installation \& Usage](#installation--usage)
  - [Author](#author)

## About the Project

This is a RESTful API for a todo list. Part of an assessment for TryHackMe. It allows a user to:

-   Create a todo item 
-   List all todo items in paginated manner 
-   Update a todo item 
-   Delete a todo item 


```bash


### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

-   `200` `OK` The request was successful
-   `400` `Bad Request` There was a problem with the request (security, malformed)
-   `404` `Not Found` An attempt was made to access a resource that does not exist in the API
-   `500` `Server Error` An error on the server occurred

### Sample HTTP Response

The API response, to the best of my ability, is structure after JSEnd specifications.

-   For a `success` response, the server will return a response of this format:

```
{
  "status": "success",
  "message": "success message from the API server"
  "data": { ... }
}
```

-   For an `error` response, the server will return a response of this format. The `trace` key in the `error` object is returned if `NODE_ENV !== production`.

```
{
  "status": "error",
  "error": {
    "message": "error message from the API server",
    "trace": {
      "statusCode": <status-code>
    }
  }
}
```

## Getting Started

### Dependencies

This project uses [Express.js](https://expressjs.com/). It has the following dependencies:

-   [Node.js](https://nodejs.org/en/download)
-   [Typescript ](https://www.typescriptlang.org/download)
-   [MongoDB Database](https://www.mongodb.com/try/download/community)

### Getting the Source

This project is hosted on [Github](https://github.com/mykoman/tryHacKMe-nodeJs-todo). You can clone this project directly using this command:

```sh
git clone https://github.com/mykoman/tryHacKMe-nodeJs-todo.git
```

### Installation & Usage

-   Ensure that MongoDb is running on your local machine

- create database to store data eg todoList.
- Create an empty collection alongside. You can can call it todos
- use the .env.example file to create your own .env file and set the respective parameters to use 



-   Install the dependencies

```sh
npm install
```

-   Run Development server

```sh
npm start
```

## Author

-   **[Michael Ogbuma](https://github.com/mykoman)**
