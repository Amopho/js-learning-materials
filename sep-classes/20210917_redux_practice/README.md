# redux-student-list :woman_student:

Small react app to practice redux state managment.

Clone of the Instagram made with ReactJS.

![Preview](./public/images/redux.png)

### Console work

#### clone repository

git clone https://github.com/amopho/redux-student-list.git

#### npm install

#### npm start

# Getting Started with Create React App

## ReactJs

A JavaScript library to build web apps
what makes React so special

- Components
- State

## To start React Project

```
 $ npx create-react-app <app-name>
 $ cd <app-name>
 $ npm start
```

You will obtain a boilerplate with default react styling and start a npm server (VSC live server won't work). You may remove things, you don't need.

You may add styles directory with css/style.css or style.scss. Images should land in the public directory inside the dedicated folder 'images'. The source path will stay the same <img className="pic" src="./images/image.png" alt="beutie">.

## To start Redux Project

```
$ npm i redux react-redux
$ npm i -d redux-npm devtools-extension
```

## Deploy React apps in GH pages

# step 1

Installing gh-pages package

```

$ npm install gh-pages

```

# step 2

Adding homepage into **package.json**

```

"homepage": "http://<your-gh-username>.github.io/<your-repo-name>"

```

# step 3

Adding some more scripts into **package.json**

```

"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
}

```

# step 4

Lastly run build script to generate build dir

```

$ npm rum build
$ npm run deploy

```

## In order to use sass styling in react project

```

$ npm i node-sass

```

## To install fontawesome icons packages

```

$ npm i --save @fortawesome/fontawesome-svg-core
$ npm install --save @fortawesome/free-solid-svg-icons
$ npm install --save @fortawesome/react-fontawesome
$ npm install --save @fortawesome/free-brands-svg-icons
$ npm install --save @fortawesome/free-regular-svg-icons

```

## To install react icons package

```

$ npm install react-icons --save

```

### To use fontawesome icons via Individual Use

Import icons into each component.

```

$ import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
$ import { faCoffee } from '@fortawesome/free-solid-svg-icons'
$ const element = <FontAwesomeIcon icon={faCoffee} />
$ ReactDOM.render(element, document.body)

```

## Installing Router to handle links

```

$ npm install react-router-dom

```

## Axios to fetch

```

npm i axios

```

## Installing Bootstrap to handle predefined styles

```

$ npm install react-bootstrap bootstrap@5.0.1

```

## Scss style

```

$ npm install normalize-scss

```

```

```
