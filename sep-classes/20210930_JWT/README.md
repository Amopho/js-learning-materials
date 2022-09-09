## To build Authentications full-stack project

### Form with react

```
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
npm i express-validator
npm i jsonwebtoken
npm i uuid
npm i multer
npm i concurrently
npm i nodemon --save-dev
mkdir server
touch server/server.js server/app.js
mkdir server/models server/controllers
touch server/models/userModel.js
touch server/controllers/userController.js
npx create-react-app client

```

- in your package.json we need to add the following scripts

```
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently  \"npm run server\" \"npm run client\""

```

## App.js

import BrowserRouter as Router, Route

Template

```javascript
<Router>
  <Route path="/" exact component={Home} />
  <Route path="/" exact render={Home} />
  <Route
    path="/"
    exact
    component={() => {
      <Home name="Hadi" />;
    }}
  />
</Router>
```

## JSON web Token

The best security package out there.
Submit request for
It is doing:

like encrypt it will hash specific data with adding a secret word to that hash. Now it will be on headers, on any request you will submit.
If somone will stole it, less possoble to happe. They can;t use it because it will be another ip, not allowed to open the data.

KEY: The code that is coded upon algorithm.

Algorithm: math way to convert text into hashed code.

Secret code:

iat- this is a key

Than generate the token
Red part is the heasder
Payload: purple, we mean data you are passing toyour token to
Secret word: any word, you should change for every application, dont share it, hide it in respective matter.

## If you dont know what specific function elaborates

check what kind og router is that- for example login- then it is a post methiod, you are getting data from there
In other case they will be reading data we are sending

## Token validation

we dont have it- we are saving time to not the handle any clients w/o the key / we have the wrong one or we have arrors

## Home.js

if i dont have token I will say "register" or if true=> authenticate
don't console.log a token!

req.headers.Authorization - you could have capital letter in backend and small one in frontend
submit tokens as headers

res.data. =>the last one is the object you have build

## token into state- to check whatever the token is ther, if no token- than rerender useEffect
