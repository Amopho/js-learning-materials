// import under the name you choose, route is for each and every link
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";

function App() {
  return (
    <Router>
      <Menu />
      <h1 className="jumbotron">Online Store</h1>
      {/* putting a component inside switch to amke it appear first than when its clicked */}
      <Switch>
        {/* order matters home always at the top, than product, than product id, because they would not appear the middle point stuff */}
        {/* <Route path="/" exact component={Home} /> */}
        {/* local host/ other environment/ or just / - fix for servers not working - define the working environment */}
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route path="/soon" component={Soon} />
        <Route path="/about" exact component={About} />
        <Route
          path="/products"
          exact
          component={() => <Products data={Data} />}
        />
        {/* i<FAKE function trick when I want to pass component with a props to my child component, with a function with a property */}
        {/* to avoid taking me to every single component which has a slash / but name afterwards as well /soon, write 'exact'- only if you see slash- than take me home */}
        {/* <Route
          path="/products"
          exact
          <Products data={Data} />
        /> */}
        <Route path="/product/:id" component={({match})=><ProductInfo data={Data} id={match.params.id}}></Route>
        // TRICK It has to be AT THE VERY LAST TIME crate a fake function taht will check a random page will main or admin or any-other-word will activate soon page
        <Route path=""></Route>
      </Switch>
    </Router>
  );
}

export default App;
