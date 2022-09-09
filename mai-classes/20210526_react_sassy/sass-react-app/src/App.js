import { Text, Hallo } from "./components/Text";
let name = "A11y";
const names = ["Tollie", "Tymie", "Alko"];
const listItems = names.map((name, i) => <li key={i}>{name}</li>);
// i built my array and then a var with map callback, i
function App() {
  return (
    <div>
      <h1>Hi I am React</h1>
      <Hallo userName={name} age="34" namesArr={names} />
      <Text />
      <Text />
      <Text />
      <Text />
      {/* than you put that variable where you want to use it */}
      <ul>{listItems}</ul>
      {/* other way names.map((name, i) => <li key={i}>{name}</li>); */}
    </div>
  );
}

export default App;
