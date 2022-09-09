## MongoDB in Command line

In a document database such as MongoDB the smallest unit is a document. In MongoDB, documents are stored in a collection, which in turn make up a database. Documents are analogous to rows in a SQL table, but there is one big difference: not every document needs to have the same structure—each of them can have different fields. Another feature of MongoDB is that fields in a document can contain arrays and or sub-documents (sometimes called nested or embedded documents). Even though the two documents often represent different classes of objects, you can still construct a query that looks for all the items by e.g. an author, or for all the items with a specific title.

### Data Model

Each document in a collection in MongoDB can look totally different, and how you structure your documents is up to you. MongoDB doesn't enforce a schema, but your application still should. Although MongoDB is generally very fast, the way how you structure and index your documents and collections has a big influence on the performance of your application. While designing your schema you should focus more on how the data is inserted, updated and queried and less on how the data is structured.

```
mongosh
<!-- starting  mongoDb shell, a JS and node environment for interaction with MongoDB-->
```

Basic commands:

```
db
<!-- to tell you the name of the current database -->
show dbs
<!-- displays all available databases including defaults -->
use newDB
<!-- creates (if not yet created) and switches to new database, make sure you re in that database -->
db.dropDatabase()
<!-- Removes the current database, deleting the associated data files. -->
```

Collections

```
db.createCollection('people')
<!-- adds new collection ("row with data, however in comparision to SQL, notSQL will allow to add new variables (columns)to any single observation") -->
show collections
<!-- displays collections in the database -->
db.people.insertOne({name:"Ally", age:35, add:"Dresden", hobbys: ["sleep", "sleep", "sleep"], date: Date() })
<!-- inserts data in the form of .bson - looks like json but has a binary format -->
db.people.insertMany([{name:"Ally", age:35, add:"Dresden", hobbys:["sleep", "sleep", "sleep"], date: Date()}, {name:"Tollie", age:20, add:"NY", hobbys:["sleep", "crawl", "run"], date: Date()}, {name:"Tymie", age:27, add:"LA", hobbys:["sleep", "dance", "jump"], date: Date()}])
<!-- inserts many collections -->
```

Sorting

```
db.people.find()
<!-- shows the whole collection  -->
db.people.find().pretty()
<!-- brings order into the display-->
db.people.find({name: 'Tollie'})
<!-- displays collection according to criteria -->
db.users.find().sort({ name: 1 }).pretty()
<!-- sorting according to ascending order => Alphabetical order -->
db.people.find().sort({name:-1}).pretty()
<!-- - descending soring collections by their name, -->
db.people.remove({name: 'Ally'})
<!-- removes whole collection according to the given criteria) -->
```
