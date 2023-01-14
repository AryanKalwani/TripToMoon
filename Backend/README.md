# API Documentation

## URL:/moons/

### Methods: 

#### GET

Get a list of moons can be traveled to.

```
Eg.
[
    {
        "name": "Pluto Moon",
        "imageUrl": "http://www.google.com",       
        "price": "13.99",
        "description": "This is Pluto Moon"
    },
    {
        "name": "Mercury Moon",
        "imageUrl": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/frames/730x730_1x1_30p/moon.0001.jpg",
        "price": "13.99",
        "description": "This is a moon of Mercury"
    }
]
```

#### POST

POST a new moon can be traveled to.

*name field is a primary key, which means duplicate moon should be a PUT action.
```
Eg.
{
    "name": "Pluto Moon",
    "imageUrl": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/frames/730x730_1x1_30p/moon.0001.jpg",
    "price": "Start from $1299",
    "description": "Go to the Moon of Pluto, even though it is not a planet."
}
```
**URL:/moons/<str:name>/

***Methods:

#### GET

Get a specific moon by the name of the moon
```
Eg.
{
    "name": "Pluto Moon",
    "imageUrl": "http://www.google.com",
    "price": "13.99",
    "description": "This is Pluto Moon"
}
```
#### PUT

Update a specific moon
```
Eg.
{
    "name": "Pluto Moon",
    "imageUrl": "http://www.google.com",   
    "price": "13.99",                      ----->"price":"21.99"
    "description": "This is Pluto Moon"
}
```
#### DELETE

Delete this moon from list


## URL:/grocerystores/

#### Methods: 

#### GET

Get a list of grocery stores can be traveled to.
```
Eg.
[
    {
        "name": "Safeway",
        "location": "Near UA",
        "price": "12.99",
        "distance": "100000km"
    }
]
```
#### POST

POST a new grocery stores can be traveled to.

*name field is a primary key, which means duplicate moon should be a PUT action.
```
Eg.
{
        "name": "Save on Food",
        "location": "Near Corona Station",
        "price": "121.99",
        "distance": "110000km"
}
```
## URL:/grocerystores/<str:name>/

### Methods:

#### GET

Get a specific grocery stores by the name of the moon
```
Eg.
{
        "name": "Safeway",
        "location": "Near UA",
        "price": "12.99",
        "distance": "100000km"
}
```

#### PUT

Update a specific grocery stores
```
Eg.
{
        "name": "Safeway",
        "location": "Near UA",
        "price": "12.99",   -------> "price": "123.99",
        "distance": "100000km"
}
```
#### DELETE

Delete this grocery stores from list




