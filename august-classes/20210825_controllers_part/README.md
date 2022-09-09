## Local MongoDB database speaking with local server

First local database created with mongodb and express.

To start new express project

```
npm init -y
```

Than create .env file to tell your server on which port to listen and what is the name of a database

```
echo "PORT=5000" > .env
echo "node_modules/" > .gitignore
```

Dependencies required for express handling database

```
npm i express
npm i dotenv
npm i morgan
npm i mongoose
npm i nodemon --save-dev
```

Now you can create some structure of your working directory. Server.js will start the server and ensure that ll be listening to the changes. App.js imports express to start to use .use() method and than grabs morgan library with its dev method, to create development mode additional infos. .json() method, originating from express will translate incoming json object into javascript.

```
touch server.js app.js
mkdir router model
touch router/employees.js
touch model/employeesModel.js
```

Let's take care for some scripts from package.json. Server.js will be a default file to start the app.

```
"start": "nodemon server.js"
```

Difference between the mongoose and mongodb- none! One is a library from express(?)
mongoose is being inspired from js object, form jason file, its just a library to handle database from Mongodb

MongoDB shell, allows you to work with local database so you don't have to be dependant on the cloud.

<!-- block always the same besides options depeding on machine -->

```javascript
const DB_URL = process.env.DB_URL; // mongo DB will tell me wehat to parse, you give them in the brackets after env
mongoose
  .connect(DB_URL, {})
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
```

<!-- CHecking the options -->

```javascript
.connect(DB_URL, {})
```

<!-- handling anything in root route, it has to be redirected thebre -->

```javascript
const employees = require("./)
```

Controllers- like helpers.js functions in the old days, js files with functions that will handle an acces to our database - get, post, patch, update, delete.
Patch - one specific part of the document, put- completely changing the document, any of them don't have an ability to change the id.
PUT - one update for all of the documents in database.
// i export them in controllers, and than I import them in router
// find one- to find one specific data, find to find all after given criteria

current date comes from mongodb and has to be treated differently than other entries

DB_URL

```javascript
.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
```

Connect comes from express and is a function that will be parsing individual device setups and where the data for database will be living in.

### Problems

#### Steps for restart if the mongo database would stop answering.

1. stop mongo:

```
sudo service mongod stop
```

(type in password for laptop if it asks) 2. start mongo:

```
sudo systemctl start mongod
sudo systemctl daemon-reload
```

3. check status of connection:

```
sudo systemctl status mongod
```

"active (running)" means it is good

```
sudo systemctl enable mongod
```

3. quit and reopen mongo app
