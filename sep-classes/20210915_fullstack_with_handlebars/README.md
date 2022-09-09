## refgistration form as a fullstack project with use of handlebars.

- Passwords hashed -bcrypt.
- Cookies and sessions- implementing them= cokkie from client side, session from server side and compare them if this is the appropiate user that shoulkd have an acces.
- Express validator- to validate- password, email and more
- Multer - will allow to upload filr from client and keep it on server. Like avatars.

Full version of full stack project requires such a working directories:

- models,
- controllers,
- views,
- routes and their childer.
- Another directory Uploads- comes from multer.

```javascript
/* 
To start new express project
 npm init -y
 echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env
 echo "node_modules/" > .gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i bcrypt
 npm i cookie-parser
 npm i express-session
 npm i express-handlebars
 npm i express-validator
 npm i uuid
 npm i multer
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir models controllers views routes uploads
 mkdir views/layouts
 touch models/userModel.js
 touch models/sessionModel.js
 touch controllers/userController.js
 touch controllers/authController.js
 touch views/index.hbs views/login.hbs
 touch views/layouts/layout.hbs
 touch routes/auth.js routes/user.js routes/users.js 
 - json script
 "start": "nodemon server.js"
 - create new DB in mongo shell
 use users
 */
```

Views=> layouts
hbs's
layout.hbs

```javascript
<body>{
  {
    {
      body;
    }
  }
}</body>
```

three curly brackets to actually see something in that element. Two- to see the value.

login .hbs
to not showing login option while the user stays logged in. Only Log out option will be viewed.
if else - show login form /login

- bars to fill in
- submit
- or go to register page if yet not registered

index.hbs
Registration page as the main page

- if done - logged in - cool
- else 'error array' from last project
- form using POST method, action /registration, and method to upload img files "miltipart/formdata" - without this in your frontend tou wont be able to ulpoad data, even if you had multer in the background.
- avatar - I want to take the file from my machine and push it through interet to my database. input "file" will open filefinder

Or login if already registred

### Model

userModel.js
role: String,
avatar: String => file directory that is existing, link

Other possibility: to store files in the 'file server', storiung file on the other server.

sessionModel=> to create a session register.

- uuid - will be added by creating a new session, string, later will be a value uuid from react.
- user_id - proamry key for an object id, i don't execute it immediately, tahts why yhere us no "new Schema" in sessionSchema. That one will be executed by adding a new document. Reference = ref: "User" - when I register i will check the user and give him a new cookie. Every time i will submit a request from the client I will send the cookie to check on the server f it is the rigth person. Logout - remove that cookie and start fresh.

## hbs

### index.hbs

```html
<form enctype= multipart/form-data>
```

When you make a POST request, you have to encode the data that forms the body of the request in some way.

HTML forms provide three methods of encoding.

- application/x-www-form-urlencoded (the default)
- multipart/form-data
- text/plain

When you are writing client-side code:

use multipart/form-data when your form includes any <input type="file"> elements to allow send the file,
otherwise you can use multipart/form-data or application/x-www-form-urlencoded but application/x-www-form-urlencoded will be more efficient

### app.js

As we will use form in browser instead of a postman we need to be able to read form inputs.
To read any form inputs. Extended will allow nested object- true (default setup.)

```javascript
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(expressSession{
    secret: "shhh",
    resave: false,
});
```

resave false- start fresh everysingle time, new session starts. Kill the session- after some time, evethough client was logged in, for extra security.

### uploads

automatically generate the directory for uploaded files

### routes in app.js

- users - you would see all the data under the condition that you will be an admin
- auth
- user - dashboard only for that user, who wont be able to see others

### multer

Settings : where to store, which, how to name them.
Where - diskStorage functionS
The most often image or pdf.
cb - bank, helps to store file there,
name of file - time stamp and the actual name. Examples on npm multer

## Controllers

```javascript
const userControllers {};

userControllers.getAllUsers = async (req, res) => {
  try{
    const ... = await ...;
    res.status(200).json(users);
  } catch(err){
    res.status(500).json({message: err.message});
    }
};
```
