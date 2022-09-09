## To start new full-stack project

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
npm i express-handlebars
npm i express-validator
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

concurrently - to use two scripts together.
all the last directories will be living in the server dir,

node modules - backend

Backend files living in server:

- change main: server/server.js
- scripts: "server": "nodemon server/server.js" or "start":"node server/server.js",

Installing the react as a client directory

you will have two gitignires,

Combining it - it will be fullstack for local or github. Deploying will be something different.In this form yopu may push it, but not deploy it to github.

## Runniun g react app

npm start -

Than you run backend - another console, cd for root directory and run npm start for server

## Concureely - package, very handy,

another script:

- takes care for client application 'npm start',
  but it is not living in root directory, than go to client- dont run here, just in client
  npm start --prefix client
  npm run dev
  "dev
  avoid slashes:, I will run a server here

  ## installing from now -

  ALways be aware what do you need and where.
  axios - go to client and install there,
  two npm running node package managment running, omne for server and for cliend

## Remove the readme from react

and other stuff you dont need.

## to use react

capitalized App - react
small app - server

function App

## to run app

go to root dir and run
npm run dev

## fetch

two times- first time, comes back with json, second time you are rendering it into something understandable

## package json for react

at the end you add:
last peopertiy:
"proxy": "http:// - will take care for not writing the whole adress , just route. It saves us repeating all the time repeating the proxy- it will be automatically adding all the url against the route

Server: server.js, app.js

REACT, SASS, all the unfinished projects.
Send applications.
