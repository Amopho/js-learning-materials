## Validations :cookie:

Every request is a question mark, we dont know with what it will come. IT doesnt tell whose that person is- who is sitting at the machine. My server would never know everything about me. Like in the groceries shop, the seller wont ever remember what I bougth yesterday, for example.

Collect the data. In req and res- we create cookies- my browser will have this cookie- is in my client, tells, when he was registered, what he bougth, recommendations.

Session lives on the server / while cookie on the client.

Session- other than server, send cookie from the client and compare it to the session. Stored in the client- normally in the browser.

Session on the server. Stored on database, on a server.
Sometimes cookies

When to use it?
Bank account- cookie being stolen, may be used by hackers- every 5 minutes are sent new cookies, too short to break in. Hack cookies on your machine- hacker will open one tab and see taht one you opened - cross tabs between each other.
Hackers may still your cookie while cross tabs are opened. Always log in from the new window. Windows machines are the easiest to get into them.

In the cookie there are just numbers from the client. If you don't have cookie while loging in the server would not know you anymore, and will sent the new cookie. Cleaning from the cookies, I have to log in everywhere again. Server is hungry - there is a session on the server but there is no incoming cookie- the new cookie

How long to store them?

Interacting through this cookie with server and approach a few steps valiations.

### Handlebars-

because of the curly bfrackets- it looks like mustach,
handlebars love curly brackets.
.hbs format- shortcut for handlebars

Install

```
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i morgan
 npm i express-validator
 npm i express-handlebars
 npm i express-session
 npm i cookie-parser
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir views
 mkdir views/layouts
 touch views/index.hbs
touch views/layouts/layout.hbs
```

And then :
in json script
"start": "nodemon server.js"

express (library from node) has a 'path'- dont need to install it but need to require it

Syntax for handlebars:

- to open the loop '#'
- to close the loop you use '/'

:white_check_mark:

JS engines list:
Hbs
Embadded JS
Babbel

Name , used for.

Focuse on handlebars
Read about documentation of libraries HAdi sent.
CookieParser
Express session, options especially

Custom -

- i grab the value i am able to read, start customize my validation. If statement will check if its similar to the actual password and thwow an erro if it is not rigth
