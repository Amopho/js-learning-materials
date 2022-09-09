import React from "react";
import { add, display } from "./helpers";

// React Hooks
// function App() {
//   return <React.Fragment></React.Fragment>;
// }

// export default App;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "Licia", age: 34 },
    };
    this.sum = function () {
      console.log("I am a function built into constructor");
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // ES6 - doesnt need to be binded
  print = () =>
    console.log(
      "Hi I am ES6 style function, I dont have to be binded inside the constructor"
    );
  handleSubmit() {
    console.log("Please, bind me so I could work");
  }
  render() {
    console.log("I work inside any method of class component");
    this.newUser = () => console.log("i am inside render");

    this.newUser();

    return (
      <div>
        <h1>
          Hi, I am coming from class component {this.state.data.name}, I am{" "}
          {this.state.data.age}
        </h1>
        {this.print()}
        {this.handleSubmit()}
        {display("Hi, React")}
        {this.sum()}
      </div>
    );
  }
}
