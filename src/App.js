import { Route,Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import HomePage  from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import NavBar  from "./components/navbar/navbar";


function App() {
  return (
    <div className = "container p-5">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App;
