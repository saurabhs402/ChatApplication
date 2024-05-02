# ChatApplication

The chat application facilitates real-time communication between users, enabling them to exchange text messages seamlessly. Users can sign up, log in, and set their online status as 'available' or 'busy'. Upon login, users can view their contacts and initiate chats with online users.

 
Postman API Publish Link: https://documenter.getpostman.com/view/23398048/2sA3JFA44t


# API Documentation
## Auth
### POST login

    http://localhost:3001/api/auth/login
```

Body raw (json)
 {
    "username":"johnsingh", 
    "password":"123456"
}
```
```
Example Response
{
     "_id": "6632ea40697e049004349558",
      "fullName": "John Singh",
      "username": "johnsingh",
      "profilePic":"https://avatar.iran.liara.run/public/boy?username=johnsingh",
      "status": false,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyZWE0MDY5N2UwNDkwMDQzNDk1NTgiLCJpYXQiOjE3MTQ2MjM5MzgsImV4cCI6MTcxNTkxOTkzOH0.-gjVRV57qxBCDxy1Kdd0dcDrUqBPbyACcxPtF-4tTnM"
}
```

### POST logout
    http://localhost:3001/api/auth/logout
``` 
Example Response
{
  "message": "Logged out successfully"
}
``` 

### POST signup
      http://localhost:3001/api/auth/signup
```
Body raw (json)
{
    "fullName":"Robert Brown", 
    "username":"robertbrown", 
    "password":"123456", 
    "confirmPassword":"123456", 
    "gender":"male"
}
```
```
Example Response
{
  "_id": "663315e800148e2abab712d1",
  "fullName": "Robert Brown",
  "username": "robertbrown",
  "profilePic": "https://avatar.iran.liara.run/public/boy?username=robertbrown",
  "status": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMzMTVlODAwMTQ4ZTJhYmFiNzEyZDEiLCJpYXQiOjE3MTQ2MjM5NzYsImV4cCI6MTcxNTkxOTk3Nn0.KuDlzsCSJIhZs8wUNJJUbHSlwItUO2MNEnJ650sXbHQ"
}
```

## Messages

### POST Send Message

```   
http://localhost:3001/api/messages/send/6632ea40697e049004349558
```
```
Body raw (json)
{
    "message":"Hello, how are you "
}
```
```
Example Response
{
  "senderId": "6632ea40697e049004349558",
  "receiverId": "6632ea40697e049004349558",
  "message": "Hello, how are you ",
  "_id": "6633162a00148e2abab712d5",
  "createdAt": "2024-05-02T04:27:22.449Z",
  "updatedAt": "2024-05-02T04:27:22.449Z",
  "__v": 0
}
```

### GET Get Messages
```
http://localhost:3001/api/messages/6632ea40697e049004349558
```

```
AUTHORIZATION Bearer Token
Token <token>
```
```
Example Response
[
  {
    "_id": "6632ed6b55d22319462cc5f3",
    "senderId": "6632ea7b697e04900434955c",
    "receiverId": "6632ea40697e049004349558",
    "message": "abc",
    "createdAt": "2024-05-02T01:33:31.020Z",
    "updatedAt": "2024-05-02T01:33:31.020Z",
    "__v": 0
  },
  {
    "_id": "6632ed7855d22319462cc5f8",
    "senderId": "6632ea7b697e04900434955c",
    "receiverId": "6632ea40697e049004349558",
    "message": "def",
    "createdAt": "2024-05-02T01:33:44.121Z",
    "updatedAt": "2024-05-02T01:33:44.121Z",
    "__v": 0
  },
  {
    "_id": "6632ed8055d22319462cc5fd",
    "senderId": "6632ea7b697e04900434955c",
    "receiverId": "6632ea40697e049004349558",
    "message": "adb",
    "createdAt": "2024-05-02T01:33:52.689Z",
    "updatedAt": "2024-05-02T01:33:52.689Z",
    "__v": 0
  },
  {
    "_id": "6632ee3e55d22319462cc602",
    "senderId": "6632ea7b697e04900434955c",
    "receiverId": "6632ea40697e049004349558",
    "message": "abcd",
    "createdAt": "2024-05-02T01:37:02.066Z",
    "updatedAt": "2024-05-02T01:37:02.066Z",
    "__v": 0
  }
]
```
## User

### GET Get Users
```
http://localhost:3001/api/users
```
```
AUTHORIZATION Bearer Token
Token <token>
```

```
Example Response
[
  {
    "_id": "6632ea7b697e04900434955c",
    "fullName": "John Smith",
    "username": "johnsmith",
    "gender": "male",
    "profilePic": "https://avatar.iran.liara.run/public/boy?username=johnsmith",
    "status": true,
    "createdAt": "2024-05-02T01:20:59.518Z",
    "updatedAt": "2024-05-02T03:58:10.374Z",
    "__v": 0
  },
  {
    "_id": "6632eaca55d22319462cc5b1",
    "fullName": "John White",
    "username": "johnwhite",
    "gender": "male",
    "profilePic": "https://avatar.iran.liara.run/public/boy?username=johnwhite",
    "status": true,
    "createdAt": "2024-05-02T01:22:18.132Z",
    "updatedAt": "2024-05-02T01:22:18.132Z",
    "__v": 0
  },
  {
    "_id": "6632ead655d22319462cc5b4",
    "fullName": "John Karl",
    "username": "johnkarl",
    "gender": "male",
    "profilePic": "https://avatar.iran.liara.run/public/boy?username=johnkarl",
    "status": true,
    "createdAt": "2024-05-02T01:22:30.914Z",
    "updatedAt": "2024-05-02T01:22:30.914Z",
    "__v": 0
  },
  {
    "_id": "663315e800148e2abab712d1",
    "fullName": "Robert Brown",
    "username": "robertbrown",
    "gender": "male",
    "profilePic": "https://avatar.iran.liara.run/public/boy?username=robertbrown",
    "status": true,
    "createdAt": "2024-05-02T04:26:16.185Z",
    "updatedAt": "2024-05-02T04:26:16.185Z",
    "__v": 0
  }
]
```

### PATCH updateStatus

```
http://localhost:3001/api/users/6632ea40697e049004349558
```
```
AUTHORIZATION Bearer Token
Token <token>
```
```
Example Response
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```
### GET Get User
```
http://localhost:3001/api/users/6632ea7b697e04900434955c
```
```
AUTHORIZATION Bearer Token
Token <token>
```
```
Example Response
{
  "_id": "6632ea7b697e04900434955c",
  "fullName": "John Smith",
  "username": "johnsmith",
  "gender": "male",
  "profilePic": "https://avatar.iran.liara.run/public/boy?username=johnsmith",
  "status": true,
  "createdAt": "2024-05-02T01:20:59.518Z",
  "updatedAt": "2024-05-02T03:58:10.374Z",
  "__v": 0
}
```
## Gemini API
### POST geminiTestUsingCurl
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC0-r9LIbiCRKObXnJkD4l85PW_8jujdlI
```
```
Body raw
{"contents":[{"parts":[{"text":"A single sentence response that the user is busy please text him later"}]}]}
```
```
Example Response
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Sorry, I'm currently busy. Please text later."
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0,
      "safetyRatings": [
        {
          "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_HATE_SPEECH",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_HARASSMENT",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
          "probability": "NEGLIGIBLE"
        }
      ]
    }
  ]
}
```
### GET geminiResponse
```
http://localhost:3001/api/gemini
```

```
Example Response
{
  "status": "success",
  "text": "Sorry, I'm tied up right now, text me later."
}
```
