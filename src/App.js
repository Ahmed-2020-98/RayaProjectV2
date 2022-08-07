import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Mobiles_Tablets from './Mobiles&Tablets/Mobiles_Tablets';
import Televisions from './Televisions/Televisions';
import Large_Appliances from './Large Appliances/Large_Appliances';
import Small_Appliances from './Small Appliances/Small_Appliances';
import Layout from './Layout/Layout';
import Nav from './Navbar/nav';
import Home from './Home/home';
import HomeLayout from './component_Home/component_Home';
import Footer from './AhmedComponent/Footer/Footer';
import Login from './AhmedComponent/Login/Login';
import Register from './AhmedComponent/Register/Register';
import Product_Details from './Product_Details/Product_Details';





function App() {
  return (
    <div>
{/* <Nav/> */}
{/* <Layout/> */}
{/* <HomeLayout /> */}
{/* <Footer/> */}
{/* <Register/> */}
{/* <Login/> */}
<Product_Details/>
    </div>
  );
}

export default App;
