
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
<<<<<<< HEAD
$ cd fair-trade-server
=======
$ cd fair-trade-client
>>>>>>> c75823322a753d1c5c914fc7e41abdfb0a276f90
$ npm install
$ npm start
```

<<<<<<< HEAD
## Models
#### User.model.js
```js
const userSchema = new Schema({
  commercename: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, unique: true, required: true, trim: true, },
  password: { type: String, required: true },
  role: { type: String, enum:["Artisan", "Commerce", "Admin"], required: true},
  cif: {type: String, required: true, unique: true},
  avatar: String,
  aboutme: String,
  location: String,
  posts:[ {type: Schema.Types.ObjectId, ref:"post" }]
});
```
#### Post.model.js
```js
const postSchema = new Schema({
        contract:{ type: String, required: true },
        image:{ type: String, required: true },
        description:{ type: String, required: true },
        bach:{ type: String, required: true },
        price:{ type: String, required: true },
         category:{ enum: ["Natural Cosmetics", "Home Deco", "Miscellaneous", "Fabric & Fashion" ],    require: true },
        available:{ type: Boolean, require: true },
        });
```



## User roles
| Role  | Capabilities                                                                                                                               | Property       |
| :---: | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| Artisan  | Can login/logout. Can read all the projects. Can create a new post.                                                                       | role: Artisan |
| Commerce | Can login/logout. Can read. Can read all user's post and contact them. | role: Commerce  |

## API Reference
| Method | Endpoint                    | Require                                             | Response (200)                                                        | Action                                                                    |
| :----: | --------------------------- | --------------------------------------------------- |---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| POST| /signup | const { username, email, password, role } = req.body | json({user: user}) | Registers the user in the database and returns the logged in user. |
| POST | /login | const { commercename, password } = req.body | json({authToken: authToken}) | Log in an user already registered.|
| GET| /verify | -| json ({profile}) | Navigate to user's profile|
| GET| /:userId| const { userId } = req.params | json ({ json.response })| Return to user's profile|
|PUT| /:userId/edit| const { userIs } = req.params| json ({ updatedProfile }) | Edits the User's profile|
|GET| /posts| const {posts} | json ({ posts })| Return a post's list|
|POST| /new| const {contract, description, image, bach, price, category, available} = req=body | json ({ post:post }) | Adds a new Post|
|GET| /:postId| const { postId } = req.params | Navigate to the selected post|
|PUT| /:postId/edit | const { postId, {post} } =req.params/req.body | Edits the selected post|
|DELETE| /:postId/delete| const { postId } = req.params | Delete a post|
=======
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
>>>>>>> c75823322a753d1c5c914fc7e41abdfb0a276f90
