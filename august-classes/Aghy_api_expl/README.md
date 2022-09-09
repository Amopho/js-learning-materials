Node.js - javascript runtime environmetn, will combine the javascript into C++ or machine language. On your PC, instsalling it gives your device a possibility to understand JS. Translator, translation into C++ or machine code.

Framework vs library
React - is not a framework, it doesnt include DOM, state managment, Router, you have to install them one by one. And sometimes it is good because it depends on your project.
Exprees - minimal (doesnt have anything from putside the box, you need to install bodyParser to understand post request) unopinionated framework - it dictates how the directoreies should look like, same pronciples, same convection, same structure - "unopinionated". When you start projects you get a hint how to builg your dirre. Express is responsible for your server. But node translates whatever is writed in JS (without it it is like writing www.google.com in the .txt file)

node- machine understands js:

```javascript
var arr1 = ["aghy", "alllogie"];
```

controllers - functions taht may be imported from the controllers to the .

Moment.js - free build functions for time and, out of the box. To make harder things easier.
npm install moment --save

npm package manager of nodeit;s a

npx part of npm but only executable

Boilerplate - when you create an empty project and it has some files already in it.
Boilerplate for express. It is like a main street, where it start with

```
npx express-generator test-express
```

Compile fromreact into normal js code. It is called build. Any browser understands sass, express- you have to translate it to plain js. Minifying- get rid of all the empty spaces to prepare it for deployment.

## MongoDB

MongoDB - document DB- its just a json object, multiple cluster, collection, document - filled with field and value ...
Mongo Compass - to see the database that lives locally. File lkocally, i am going to upload it on the cloud.
Objects, arrays - dtaa type that JD understand. JSOn needs to be translataed.
mongoose - tools and functions so you dint have to write them from scratch. It lets for comunication between

## Model

Schema governs how the object looks like. Mongoose Models- grant acces to mongoose functions. Model stores schemas. Model is a blueprint of a MongoDb's document.
req.body- all the data you are sending to the body will be used to create a new car (let's say)ou have ypour code seperaterely- controllers, model, module.export - exporting as a seperate division.

## Routes

eg http://localhost/users/313412

http:// all methods CRUD + json as form of communication. In other cases XML- different protocols (Apollo, other methods)

## Shell

your linux terminal is a shell. Use to atimate bash- is a new version.

## Middleware

always have acces to req, res, next
you declare it as a normal function, and tahn making it work with app.use()
after that, you may

## Restful- adjective of Rest, REST represents tools, Restful actions.

Ingredients, all of them are REST:

- http protocol
- json as kformat of communication
- http Methods: GET, POST, PATCH...
  PAth is a '/' and following - eg. /users, client,
  /:id- like a placeholder - whatever you put after taht slash tag will be searched and treated as a params to send.
  othe, than the the functiomn taht contraauns the logic whar the route should do, jus a function
  middleware is as well
