<!-- block always the same besides options depeding on machine -->

Difference between the mongoose and mongodb- none! Mongoose is a ODM - Object Data Modeling library for MongoDB and node.js.

MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases.

mongoose is being inspired from js object, form jason file, its just a library to handle database from Mongodb

- manages relationships of data
- schema validation
- tranlates between objects in code and represantation of them in MongoDB

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
