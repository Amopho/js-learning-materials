Embaded JAVASCRIPT

express
dotenv
morgan
mangoose express witrh mangodb connection
ejs
faker - to grab fake data, fake names, address, if you will ask for 10 nam3es you will gate 10 fake names
views - for full stack prokect every file i want to view, i want to present, how rto write emebedded js

no routers, no controllers

resolve where is this dorectory name coming from,

path.resolve
https://nodejs.org/api/path.html#path_path_resolve_paths

```javascript
path.resolve(__dirname, "views");
```

two services at the same time:

all-the-time

Both need server:
preserve - database
serve - server

I tell express- hey I have an engine for you (soon render- when renders, it will need an engine for that). Now its embadded JS

## app.set()

get, ppost
set limits for json file limits that comes back express.json()
express.urlencoded()
set: Title, env, view engine, strict routing - with it it will treat path routes very strictly

## Embeded js EJS <% %>

to put a small engine (w/o any heavy packages like react, vue) and make it work on the small of your app. React during rendering is very heavy to process for machine. embedded is very ligth.

I build here a frontend app with embedded js. No empty spaces

##

Always refer to documentation, any package you are working on, check if it contains everything and

```javascript
// FAKER examples
// console.log(path.resolve(__dirname, "views"));
// console.log(faker.firstName());
// console.log(faker.zipcode());
// console.log(faker.animal.dog());

app.set("view engine", "ejs");
app / set("view", path.resolve(__dirname, "views"));
// this dir will take care for any
// views- infinite directory, i dont want to confuse my app where to grab that
// in normal projec I didnt needed infinite directory because it was setted up in one place
// view comes from express
// I grab ,my home and I am passing
app.get("/", (req, res) => {
  // soon render
  res.render("home", { message: "Test" });
});
app.post("/");
```

Klicking two times: i need to reloafd to see my first thing.

Why is the picture for every input the same for all of them.
