# Rest API

Rest API example to practice

Create a Express server that handles:

- A `GET` request endpoint at `/` as a landing page for your API.
- A `GET` request endpoint at `/user` to display all users in DB.
- A `POST` request endpoint at `/user` to add new user to DB.
- A `PUT` request endpoint at `/user/:name` to update user from DB upon their name.
- A `PATCH` request endpoint at `/user/:name` to update some user data from DB upon their name.
- A `GET` request endpoint at `/display/:name` to display one user from DB upon their name.

New user endpoint should be able to accept a JSON object like the following:

```json
{
  "userName": "stEEel",
  "userPass": "123pass",
  "age": "32",
  "fbw": "48",
  "toolStack": ["Js", "Html5", "Css3", "Sass"],
  "email": "contact@steel.eu"
}
```

## For the endpoint `/user` that adds new user

- Create a middleware method that will make sure the object received contains `userName`, `userPass`, `age`, `fbw` and `email`.
- Create a middleware method that will check if the user is above 18 years old
- Create a middleware method that will check if the user belongs to our FBW
- If all the above is true, then you should send a response with a success message
- If any of the middleware fails, you should send a response with an error message that says why the user is not valid.

#### EXAMPLE RESPONSES

```json
// Success case
{
  "message" : "This user is valid!"
}


// Failure
{
  "message": "We can not validate your user. They are not a member of FBW48"
}
// Other case of Failure
{
  "message": "We nee some more info from you."
}


// Other case of Failure
{
  "message": "We can not validate your user. we don't accept pp that are below 18 years of age"
}

```

## For the `/display/:name` endpoint:

- Create a middleware that makes the `firstName` starts with a capital letter.
- Create a middleware that sorts the `toolStack` array alphabetically.
- Create a middleware that will turn `age` and `fbw` to numbers.

#### EXAMPLE RESPONSES

```json
{
  "userName": "Steel",
  "userPass": "123pass",
  "age": 32,
  "fbw": 48,
  "toolStack": ["Css3", "Html5", "Js", "Sass"],
  "email": "contact@steel.eu"
}
```

Make sure that you Organize (route, controller and module)
Ps: new our new Rest API needs new DB 😉

Happy codding ☘️

To use controller split youyr code in which you are getting the data:

```javascript
router.get("/", async (req, res) => {
  try {
    const usies = await UsiesData.find();
    res.status(200).json(usies);
  } catch {
    res.status(500).json({ message: err.message });
  }
});
```

Into:

```javascript
router.route("/").get();
```

+whatever was grabbed by async await in controller

```javascript
.get(userController.getAllUsers)
```

The same root route may you use to post the data by simply giving another .post+ controller with posting

and instead of this:

```javascript
router.post("/", async (req, res) => {
  const usie = new UsiesData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUsie = await usie.save();
    console.log(newUsie);
    res.status(201).json(newUsie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```

you add to the last router:

```javascript
.post(userController.addNewUsie);
```

## Middleware will work with user model first in order to grab just adjusted data

```javascript

try {
    if (!userByName) {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.user = userByName;
  next();
};
```
