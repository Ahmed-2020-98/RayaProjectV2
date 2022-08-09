import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mobiles_Tablets from "./Mobiles&Tablets/Mobiles_Tablets";
import Televisions from "./Televisions/Televisions";
import Large_Appliances from "./Large Appliances/Large_Appliances";
import Small_Appliances from "./Small Appliances/Small_Appliances";
import Layout from "./Layout/Layout";
import Nav from "./Navbar/nav";
import Home from "./Home/home";
import HomeLayout from "./component_Home/component_Home";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import PayInstallment from "./PayInstallment/PayInstallment";
import Register from "./Register/Register";
import Cart from "./Cart/Cart";
import InternalHeader from "./InternalHeader/InternalHeader";
import StoreLocator from "./StoreLocator/StoreLocator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>

      {/* <HomeLayout /> */}
      {/* <Footer/> */}
      {/* <StoreLocator/> */}
      {/* <PayInstallment/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      {/* <Home/> */}
      {/* <Nav/> */}
      {/* <SliderShared/> */}
      <Router>
      
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/payinstallment"  component={PayInstallment} />
          <Route path="/storelocator"  component={StoreLocator} />
          <Route path="/cart"  component={Cart} />
          <Route path="/" exact component={Layout} />
        </Switch>
      </Router>

  

    </div>
  );
}

export default App;
