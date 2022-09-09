```javascript
/* 
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir model controller
 touch model/authorModel.js
 touch controller/bookController.js
 - json script
 "start": "nodemon server.js"
 - create new DB in mongo shell
 use library
 */
```

## Schema- work with reference

The idea is when i call the author document i will get his ID instead, and when referencing books document i ll get an array of ids.

Take an id into another document- referencing. Bunch of ids- every is referencing to other document
Creayinm two saparate schemas and then connect them each other.

```javascript
const Schema = mongoose.Schema;
```

grabbing an object and equal- thats a reference, not creating new one, just using reference.

Exporting two completely diffrent collections from model.

```javascript
module.exports = { Author, Book };
```

## new

kewyword to create a schema only for main documents with no relations.

## controller

id from creations- random
