# Три микросервиса
все сервисы стартуют через docker-compose
## Серивис юзеров
```
method: POST /api/user/register
body: {
    "email":"test@mail.ru",
    "password":"1234"
}
response: token     
method: POST /api/user/login
body: {
    "email":"test@mail.ru",
    "password":"1234"
}
response: token         
method: POST /api/user/update
body: {
    "email":"test@mail.ru",
    "password":"1234"
} 
response: true or false
method: POST /api/user/delete
body: {
    "email":"test@mail.ru",
}   
response: true or false
```
## Серивис записей
```
method: GET api/note/all
response: [
    {
        "id": 1,
        "title": "lorem ipsum dolor sit amet",
        "description": "qweasdasdasdasdqweqwe",
        "createdAt": "2022-06-03T13:18:41.308Z",
        "updatedAt": "2022-06-03T13:18:41.308Z"
    },
    ...
    {
        "id": 8,
        "title": "lorem ipsum dolor sit amet",
        "description": "qweasdasdasdasdqweqwe",
        "createdAt": "2022-06-03T13:18:45.845Z",
        "updatedAt": "2022-06-03T13:18:45.845Z"
    }
]
method: POST api/note/create
body: {
    "title":"lorem ipsum dolor sit amet",
    "description":"qweasdasdasdasdqweqwe"
}
method: POST api/note/update
body: {
    "id":1,
    "title":"lorem ipsum dolor sit amet",
    "description":"qweasdasdasdasdqweqwe"
}
response: true of false
method: POST api/note/delete
body: {
    "id":1
}
response: true or false
```

## Сервис рассылки
```
method: POST api/send_message
body: {
    "message":"anythink"
}
response: 200 or 500 status code
```

