# LocalArtCo - client side
Developed of our final proyect at IronHack. It's a MERN Stack application, check the frontend repository [here](https://github.com/eoGimenez/fair-trade-client).

## About
We are Lucas, Lucia and Eugenio we met each other at the web development Bootcamp of IronHack. 

![Project Image](# "Project Image")

## Deployment
You can check the app fully deployed [here](#). If you wish to view the API deployment instead, check [here](#).

## Work structure
We decide to use [Trello](https://trello.com/b/pWR9rkVU/app) to organize the workflow.

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd fair-trade-client
$ npm install
$ npm start
```

## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | Home.page                |
| /signup              | public          | Signup.page              |
| /login               | public          | Login.page               |
| /user/:userId        | private (user)  | ....                     |
| /post                | private (user)  | Posts.page               |
| /post/:postId.       | private (user)  | .....                    |
| /post/new            | private (user)  | .....                    |
| /contact             | private (user)  | ....                     |


## Components
- ArtisanSignupForm
- CommerceSignUpForm
- ArtisanProfile
- CommerceProfile
- Navbar
- PostCard


---
