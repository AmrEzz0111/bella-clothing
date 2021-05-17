import "bootstrap/dist/css/bootstrap.css";
import { Route,Switch } from "react-router";
import "./App.css";

import HomePage  from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";


function App() {
  return (
    <div className = "container p-5">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App;
