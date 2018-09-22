import React, {Component}from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MainLogin from "./MainLogIn.js";
import Login from "./components/logInComponent/Login.js";
//import Footer from "./components/item-page/footer.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import UploadProduct from "./components/UploadProduct.jsx";//client/src/components/UploadProduct.jsx
import Checkout from "./components/Checkout.jsx";
import Error from "./components/item-page/error.js";
import Navigation from "./components/item-page/navigation.js";
import MainPage from "./MainPage.jsx";
import fire from "./components/Fire";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={MainLogin} />
            <Route path = "/MainPage" component={MainPage} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/Upload" component={UploadProduct} />
              <Route path="/Checkout" component={Checkout} />
            <Route  component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
};


ReactDOM.render(<App />, document.getElementById("App"));
