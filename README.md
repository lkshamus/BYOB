# BYOB
## About the API

BYOB is an API that provides data about the top 30 music artists and their albums. Users can add data to the API through POST requests, delete data with DELETE requests, and edit data with PUT requests.

## Installation

To get started, clone down this repo and run ````npm install````. Start the server with node ````server.js```` (or nodemon if you have it installed).

## Endpoints

## Get

**To return all artists:**

````GET /api/v1/artists````

Expect response to be:

````Status: 200````

````
{
  artist: 'Queen',
  genre: 'Classic Rock',
  albums: [
    {name: 'Queen', year: 1973},
    {name: 'Queen II', year: 1974},
    {name: 'Sheer Heart Attack', year: 1974},
    {name: 'A Night At The Opera', year: 1975},
    {name: 'A Day At The Races', year: 1976},
    {name: 'News Of The World', year: 1977},
    {name: 'Jazz', year: 1979},
    {name: 'The Game', year: 1980},
    {name: 'Flash Gordon', year: 1980},
    {name: 'Hot Space', year: 1982},
    {name: 'The Works', year: 1984},
    {name: 'A Kind Of Magic', year: 1986},
    {name: 'The Miracle', year: 1989},
    {name: 'Innuendo', year: 1991},
    {name: 'Made in Heaven', year: 1995}
  ]},
  ...
{
 ````

**To return a specific artist:**

````GET /api/v1/artists/:id````

Expect response to be:

````Status: 200````

```` 
{
    artist: 'Lady Gaga',
    genre: 'pop',
    albums: [
      {name: 'The Fame', year: 2008},
      {name: 'The Fame Monster', year: 2009},
      {name: 'The Remix', year: 2010},
      {name: 'Born This Way', year: 2011},
      {name: 'ARTPOP', year: 2013},
      {name: 'Cheek to Cheek', year: 2014},
      {name: 'Joanne', year: 2016},
      {name: 'A Star Is Born', year: 2018}
    ]
}
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

````GET /api/v1/artists````

Expect response to be: 

````Status: 200````

````
[
    {
        "id": 16,
        "name": "Travis Scott",
        "genre": "Hip-Hop",
        "created_at": "2018-12-05T15:46:25.746Z",
        "updated_at": "2018-12-05T15:46:25.746Z"
    }
]
````
## Post

**To add an artist:**

````POST /api/v1/artists````

Body of request must be in JSON format with the following propeties:

````
name[string],
genre[string]
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
title[string],
release_date[boolean]
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

You must pass the album id in as a parameter to the endpoin.

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
name[string],
genre[string]
````

Expect response to be:

````Status: 200```

````
{
  "id": 9
}
````

**To edit an album from an artist of your choice:**

````PUT /api/v1/albums/:id````

You must the album id in as a parameter to the endpoint.

Body of request must be in JSON format with the following properties:

````
title[string],
release_date[boolean]
````

Expect response to be:

````Status: 200```

````
{
  "id": 8
}
````
