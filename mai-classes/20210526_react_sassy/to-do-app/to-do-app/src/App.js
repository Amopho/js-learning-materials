import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  function changeHandle(e) {
    console.log(e.target.value);
    setUserInput(e.target.value.trim());
  }
  function add(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="type something"
        ></input>
        <input type="submit" value="Add"></input>
      </form>
      {userInput}
    </div>
  );
}

export default App;
