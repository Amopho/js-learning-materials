# plantasitc

A gardening Diary

Here comes the README

# THE README comes from here

## Know-How Plantastic Project

### GitHub Workflow

1. Create a repo on GH

   - Create a directory which has exactly the same name.
   - Go to that directory.

   ```
   cd test
   echo "# plantastic" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/profilename/test.git
   git push -u origin main
   ```

2. Create a parallel branch and check the status of branches. Is it up to date? What changes are staged for that branch? Display all branches, and show which is your current.

   ```
   git checkout
   git status
   git branch
   ```

3. Create another branch and set upstream - another branch with remote tracking, associated with local branch

```
git checkout newbranch
git push --set-upstream origin newbranch
git add .
git commit -m "your branch"
```

4. after completing some changes, push them to the current branch and switch to the main.

   ```
   git push
   git checkout main
   ```

5. Update the main

   ```
   git pull
   git add .
   git commit -m "update to the main"
   ```

6. Switch to the newbranch and merge it with updated main

   ```
   git checkout newbranch
   git merge main newbranch
   git add .
   git commit -m "update from the main"
   ```

By this way your branch will get all the changes that were made to the main.

In order to merge changes from the other branch to the main, make sure that those changes are what you would like to introduce and there will be least conflicts possible.

    ```
    git checkout main
    git merge newbranch main
    git add .
    git commit -m "update from the newbranch"
    ```

## Setup

1. Environmnt setup
   NODEJS, npm, Expo CLI, emulator (android or OS)

2. Assets
   (data, images, icons)

3. Requirements:

You need Node version 12 or higher, kvm and virtual technology enabled (in BIOS).

### VS Extensions:

To make life easier:

React Native Tools
React-Native/React/Redux snippets
Material Icon Theme

### Expo

Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

## Dependencies:

### Emulator

Run instructions for Android:
• Have an Android emulator running (quickest way to get started), or a device connected.
• cd native && npx react-native run-android

    After initializing the project structure, 'expo start' opens metro bundler in browser automatically.
    ```
    expo start
    ```

    If you download 'expo go' app on your smartphone you will be able to see your app, live onyour mobile device. Start a simulator > go to metro bundler in browser and click "run on android device/emulator" > go to simulated phone, wait for app to open. Make sure that both devices on which you started the expo app, are connected to the same wi-fi.

#### Initialize expo project

```
expo init my-app
<!-- expo start or npm start -->
npm -g expo-cli
<!-- to install expo globally -->
npm i react-native
npm i axios
npm i react-router-native
npx react-native run-android
<!-- or go to home/android-studio/bin and run ./studio.sh -->
```

> .expo folder

The ".expo" folder is created when an Expo project is started using "expo start" command.
Don't share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine. Upon new project creation, the ".expo" folder is already added to your ".gitignore" file.

> packager-info.json

The "packager-info.json" file contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.

> settings.json file contain?

The "settings.json" file contains the server configuration that is used to serve the application manifest.

Scripts:

<!-- expo scripts -->

## Debugging

In order to see your console.log's:

```
npm i react-native-android-log
npm i react-native-log-ios
```

## Basic Express setup:

To start new express project

```
npm init -y
echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env
echo "node_modules/" > .gitignore
npm i express
npm i dotenv
npm i morgan
npm i mongoose
npm i bcrypt
npm i uuid
npm i multer
npm i nodemon --save-dev
touch server.js app.js
<!-- or server.js -->
npm i concurrently
npm i cors
mkdir models controllers routes uploads
<!-- and client? -->
touch models/userModel.js
touch models/sessionModel.js
touch controllers/userController.js
touch controllers/authController.js
touch routes/auth.js routes/user.js routes/users.js routes/plants.js
<!-- touch/middleware/... -->
```

Hint: You may change the link for the mongoDB database, by creating account on Mongo Atlas, and store your data in the cloud.

- json script to start project on npm run dev, without the need of starting Backend and Frontend seperately, which you achieve by installing 'concurrently' package:

```javascript
"scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix  client",
    "dev": " concurrently  \"npm run server\" \"npm run client\" "
  },
"dependencies": {
    "concurrently": "^6.2.2",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.0.8",
    "morgan": "^1.10.0"
  },
```

- script for global start of the server app:
  "start": "nodemon server.js"
- create new DB in mongo shell
  ```
  use users
  use plants
  ```
  Plants database was filled out directly from MongoDB Compass, and then stored on the Atlas by creating a link.

## Additional packages for more advanced backend work:

```
npm i bcrypt
npm i cookie-parser
npm i express-session
npm i express-validator
npm i uuid
npm i multer
```

## Fetching APIs with APIsauce

Inside the app create a api folder, with all the code taht is talking with the apis.

Install axios wrapper with standardized errors and req/res transformers. We will use the create function from apisauce.

```
npm i apisauce
```

## React-Native-Dotenv

Storing environmental variables in .env file

```
npm install react-native-dotenv
```

In babel.config.js add plugins:

```javascript
plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
```

## Open Weather Map API

Generate API_KEY

- Create an account at the [website](https://openweathermap.org/).
- Get your API KEY by email.
- Create `.env` file on the project root and insert yout key like this: `API_KEY=<open_weather_map_api_key>`

Weather API app developed in react-native with use of:

- geolocation,
- OpenWeather API,
- React-Native-Async-Storage - data of weather coming from API calling persisting in cache even if the gps, and internet connection connection goes down for a while.

You need to install:

```
npm install date-fns --save
npm install expo-localization
expo install expo-localization
npm install expo-location
npm install @react-native-async-storage/async-storage
```

Usage of react-native-async-storage at the [website](https://react-native-async-storage.github.io/async-storage/)

## Calendar

```
npm install --save moment react-moment
expo install expo-calendar
npm install react-native-calendar-strip
```
