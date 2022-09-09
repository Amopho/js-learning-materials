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
