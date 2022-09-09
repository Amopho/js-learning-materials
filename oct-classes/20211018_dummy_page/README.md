## full-stuck-native-app

1. Environmnt setup
   NODEJS, npm, Expo CLI, emulator (android or OS)

2. Assets
   (data, images, icons)

3. Requirements:

You need Node version 12 or higher, kvm and virtual technology enabled (in BIOS).

## Dependencies:

```
npx react-native init native
```

Run instructions for Android:
• Have an Android emulator running (quickest way to get started), or a device connected.
• cd native && npx react-native run-android

```
expo init my-app
<!-- expo start or npm start -->
npm i -g expo-cli
<!-- Updating Expo CLI -->
expo upgrade
<!-- Updating Your Existing Project -->
npm i react-native
npm i axios
npm i react-router-native
npx react-native run-android
<!-- or go to home/android-studio/bin and run ./studio.sh -->
```

## VS Extensions:

To make life easier:

React Native Tools
React-Native/React/Redux snippets
Material Icon Theme

Scripts:

<!-- expo deploy -->

## iOS, android Simulators

Open VSC and start your project by ... expo init my-app > expo start or npm start (opens metro bundler in browser automatically)

Second. open android studio by ... > go into dir with android studio package > go into androidstudio/bin > ./studio.sh (opens up android studio program)

Third. Make sure you have downloaded the phone simulators you want > start a simulator > go to metro bundler in browser and click "run on android device/emulator" > go to simulated phone, wait for app to open

## Basic express setup:

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

- json script:
<!-- how would "dev" script look like with expo as a client  -->

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
  use users
  use plants (this one you can fill out directly from MongoDB Compass, and then creating a link for it on Atlas)

## Additional packages for more advanced backend work:

```
npm i bcrypt
npm i cookie-parser
npm i express-session
npm i express-validator
npm i uuid
npm i multer
```
