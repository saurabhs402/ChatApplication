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
