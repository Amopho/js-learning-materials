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

## React componets

they always need to throw some js object. So it has to be initialized

## Local Storage

do I have a local storage already stored for this data- check if iyt is there- localStorage.getItem.
For the first round it wont be true, we will execute else- to initialize empty ...

## Items:

Functions from JAVASCRIPT:
setItem- to create an item for local storage,
removeItem("data")- remove specific data from local storage
getItem
item data-
item dateData- to know how old that DB is, maybe you will need to update if its too old.

## Button:

it will have varied values- sometimes GET DATA and sometimes UPDATE

## Upload

accesing the file- giving the actual location- actual place that you are having,
If I want ot acces that one- it is located in my local server and in UPLOADS. I dont need to creat app.get... app.post. As it is living under specific adress.

## bracket notation

to acces the key of the value [name]- grabbing an existing one

## restful api

I am able to read data from db or send to db
I will use axios to submit data.

## you always have to hold a wrap for backend

No matter what ypou dont need to know what is happening on the backround. You need to create a wrap taht will grab the frontend app and use it in backend later on.

## creating the object for backend people

## Workshops

- Typiscript
- React (States, Hooks, Lifecycle)

## ToDo

update is not saying - getData- where is the issue?

## Showing your password button
