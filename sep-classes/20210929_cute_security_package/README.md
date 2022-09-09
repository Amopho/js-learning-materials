## CORS Acces Control Allow Origin

API - Application Programming Interface

You are the only server able to change data on your server, other could just get and see data.

By defeault any server does not allow cross origin, so you coul mimic that and throw following code and make app more secure.

When building your own api always throw:
Normally you will allow all the methods
To the actual origin website (not the routes)

```javascript
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
```

Another case : news- will only let 'get'
npm i cors

Now my backend is an API

I need to fetch it. It is /users.
I will make those data into something understandable- json. And then store it as result

userItem- map around whats in there.

You specify what kind of methods an allowed server will have, get, post, delete... or could it send cookies.

## package json

```json
"name": "29-09",
  "version": "1.0.0",
  "description": "",
  "main": "server/server.js",
```

- description would be default grabbed from the README file

## Errors:

- 'has been blocked by CORS policy'- for security reason servers are allowed to speak only with itself, in ots private area. But if the same company/ server have different branches- we have a proble. If the req comews from the same server.
  Cors helps to locate other locations of server, a backend server talking weith frontend server- OK. Because normalyy to many adre. You are saying that adress is ok, it comeas from me. Or maybe you allow everyone- like weather . You can specify which kind of request are allowed- eg. only get or post.

Solving the problem of cors in backend (PORT 5000)

- Go to that app.js in server and create cors function
- cors function execution by app.use
  it will tell with which origin am I working with

* or star meaning everybody may get data (like weather app), otherwise with a name of a server it will block that server

```javascript
const cors = require("cors");
//origin: "http://127.0.0.1:3000",
// origin: "*",
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
```

## throwing OCRS into app.js of server

```javascript
const cors = require("cors");
// execute it after import app.use
app.use(
  cors({
    // which server is allowed to visit "*", origin: "http://localhost:5000" or  "http://127.0.0.1:3000" no slash at the end!
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
```

- credentials- allow cookies

## if not having a CORS

- throw a "proxy" in package.json which you consider as save, and the one you want to work with.

## the issue to solve

I would like to fetch an array from the react level,

1. require we need state, and useEffect from react
2. start state - const [users, setUsers]
3. trigger fetch => it will run on download app
   execute getData with function that will fetch them,
4. my API/ data are coming from
   now my backend is REST API - i build my own API - and I want to fetch from it- from frontend
5. Now i want to display all the users

```javascript
const [users, setUsers] = useState([]);
useEffect(() => {
  getData();
}, []);
const getData = () => {
  fetch("http://localhost:5000/users", {
    method: "GET",
    credentials: "include",
  })
    .then((data) => data.json())
    .then((result) => setUsers(result));
};
console.log(users);
```

## Other delete, post..

allow only some of them

- method/ methods (as an array)
- add credentials - meaning that any request should have credentials (anything that lives in a header (cookies, JWT...))
  Any request coming from that host, that has either get, post, delete can have cookies...

```javascript
 methods: ["GET", "POST", "DELETE"],
 credentials: true,
```

## credentials Sending something from my header

Sending cookies by "include"ing them in the request's header
credentials: "include"
"omit" - refuse to send to that server
"same-origin" do the same what server is doing

## API throwing an error of CORS

than it will make problems as their server is programmed that way.
But by building your own app you may decide and set it.

Or telling the app its proxy

200 -
201 -
304- not able to proceed
404- not there
