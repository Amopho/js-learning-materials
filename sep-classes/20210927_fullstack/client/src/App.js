import { useState, useEffect } from "react";

// import AddForm

function App() {
  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch("/users")
      // http://localhost:5000/users
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getData();
  }, []);
  const usersLi = users.map((user, i) => <li key={i}>{user}</li>);
  return <div className="App"></div>;
}

export default App;
