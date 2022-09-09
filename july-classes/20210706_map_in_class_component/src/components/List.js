import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    // super - allows to use "this" word
    this.state = {
      userInput: "",
      list: [],
    };
  }
  changeHandle = (e) => {
    this.setState({ userInput: e.target.value });
    // to grab user input and set it up instead of state
  };
  submitHandle() (e) => {
    //   prev state list copy it, and new object- adding to the list insted of replacing
      const userText = this.state.userInput;
      this.useState({userInput:"", [...this.state.list, {id: , toDo: userText, done: false}]})
  }
  check = (itemToCheck)=> {
      const newArr = this.state.list.filter(item=>{
          if(item.id == itemToCheck){
              item.done= !item.done;
          }
          return item;
      });
      this.setState({list: newArr});
  };
  remove = (itemToRemove) => {
      const newArr = this.state.list.filter((item) => item.id !== itemToRemove);
      this.setState
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit>
          <input
            type="text"
            onChange={this.changeHandle}
            placeholder="type something"
          />
          <input type="submit" value="Add" />
        </form>
        <UserList />
      </React.Fragment>
    );
  }
}
