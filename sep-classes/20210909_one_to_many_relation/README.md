In no sql are not the relations like in sql, tahts somethibn different

Type of relations

- 1 to 1
- 1 to many
- many to many

Subdocuments- dicuments created for one specifiv of interets

New module from mongoose

```javascript
new mongoose.Schema();
```

## USE

it will create a new databsase or grabb a datbase

## sub model, sub docs

It is just a sub data of another primary data of main documentso we don't need to acces it by itself. We don't need it so in model we write \_id: false, to not create it automatically and save data storage.

I export only my main module -main schema. mongoose.module will take collection and a schema and combine them togethet and allow to make CRUD on our database. Collection name is author

### REMEMBER

classes and models name start with Capital letter anything else, from lower case.
Every time you are taking data from database, you need to wait for them, dont let the user to wait.

200- everything ok
201- new succesfully registration added
500- internal server error
Collection author- filled with single authors documentation.

## middleware - when user not found

res 404 - return to break the process, not to let it to go to the next, and make the server listening unendlesly. Even if it is not returning anything, in this case it serves as stop of the function.

## update - entirely new document will be created at the place of the old one

changing every field of that id,

books aray- i will map through whatever I got from the client and asign it

$push function from mongoose will take a specific array and push new values,
