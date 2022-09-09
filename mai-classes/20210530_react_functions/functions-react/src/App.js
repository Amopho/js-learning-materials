import logo from "./logo.svg";
import Data from "./data.json";
console.log(Data);
const users = Data.map((obj) => <h4 key={obj.id}>{obj.name}</h4>);
function App() {
  return <React.Fragment>{users}</React.Fragment>;
}

export default App;
