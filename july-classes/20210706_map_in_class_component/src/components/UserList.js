import React from "react";

const UserList = (props) => {
  const userToDos = props.list.map((obj, i) => <li key="i"><input type="checkbox" onClick={()=> props.check(obj.id)}checked={obj.done}>{obj.toDo}/></li>);
};

list={this.state.}
