# BYOB
## About the API

BYOB is an API that provides data about the top 30 music artists and their albums. Users can add data to the API through POST requests, delete data with DELETE requests, and edit data with PUT requests.

## Installation

To get started, clone down this repo and run ````npm install````. Start the server with ````node server.js```` (or ````nodemon```` if you have it installed).

## Endpoints

## Get

**To return all artists:**

````GET /api/v1/artists````

Expect response to be:

````Status: 200````

````
[
    {
        "id": 1,
        "name": "Queen",
        "genre": "Classic Rock",
        "created_at": "2018-12-05T15:41:01.994Z",
        "updated_at": "2018-12-05T15:41:01.994Z"
    },
    {
        "id": 3,
        "name": "Pentatonix",
        "genre": "Pop",
        "created_at": "2018-12-05T15:41:02.003Z",
        "updated_at": "2018-12-05T15:41:02.003Z"
    },
  ...
]
 ````
 
**To return a specific artist:**

````GET /api/v1/artists/:id````

You must pass the artist id in as a parameter to the endpoint.


Expect response to be:

````Status: 200````

```` 
[
    {
        "id": 17,
        "name": "Mariah Carey",
        "genre": "hip-hop",
        "created_at": "2018-12-05T15:41:02.011Z",
        "updated_at": "2018-12-05T15:41:02.011Z"
    }
]
````
**To search for a particular artist without having their id**

````GET /api/v1/artists?name= ```` write artist name next to the equal sign

example: 

````/api/v1/artists?name=Queen````

Expect response to be:

````Status: 200````

Your search result will return: 

```` 
[
    {
        "id": 27,
        "name": "Queen",
        "genre": "Classic Rock",
        "created_at": "2018-12-05T15:46:25.764Z",
        "updated_at": "2018-12-05T15:46:25.764Z"
    }
]
````

**To return all albums:**

````GET /api/v1/albums````

Expect response to be:

````Status: 200````

````   
    {
        "id": 80,
        "title": "Michael Buble",
        "release_date": "2003",
        "artist_id": 15,
        "created_at": "2018-12-05T15:46:25.797Z",
        "updated_at": "2018-12-05T15:46:25.797Z"
    },
    {
        "id": 81,
        "title": "Its Time",
        "release_date": "2005",
        "artist_id": 15,
        "created_at": "2018-12-05T15:46:25.798Z",
        "updated_at": "2018-12-05T15:46:25.798Z"
    },
````

**To return all albums from an artist of your choice:**

````GET /api/v1/albums/:id````

You must pass the album id in as a parameter to the endpoint.


Expect response to be: 

````Status: 200````

````
[
    {
        "id": 5,
        "title": "A Day At The Races",
        "release_date": "1976",
        "artist_id": 1,
        "created_at": "2018-12-05T15:41:02.021Z",
        "updated_at": "2018-12-05T15:41:02.021Z"
    }
]
````
## Post

**To add an artist:**

````POST /api/v1/artists````

Body of request must be in JSON format with the following propeties:

````
name:[string],
genre:[string]
````

Expect response to be:
````Status: 201````

````
{
  "id": 5
}
````

**To add an album to an artist of your choice:**

````POST /api/v1/albums````

Body of request must be in JSON format with the following properties:

````
title:[string],
release_date:[boolean]
````

Expect response to be:

````Status: 201````

````
{
  "id": 9
}
````

## Delete

**To delete an artist:**

````DELETE /api/v1/artists/:id````

You must pass the artist id in as a parameter to the endpoint.


Expect response to be:

````Status: 201````

````
{
  "id": 3
}
````

**To delete an album:**

````DELETE /api/v1/albums/:id````

You must pass the album id in as a parameter to the endpoint.


Expect response to be:

````Status: 201````

````
{
  "id": 4
}
````

## Put

**To edit an artist of your choice:**

````PUT /api/v1/artists/:id````

You must pass the artist id in as a parameter to the endpoint.


Body of request must be in JSON format with the following propeties:

````
name:[string],
genre:[string]
````

Expect response to be:

````Status: 200````

````
{
  "id": 9
}
````

**To edit an album of your choice:**

````PUT /api/v1/albums/:id````

You must the album id in as a parameter to the endpoint.


Body of request must be in JSON format with the following properties:

````
title:[string],
release_date:[boolean]
````

Expect response to be:

````Status: 200````

````
{
  "id": 8
}
````
