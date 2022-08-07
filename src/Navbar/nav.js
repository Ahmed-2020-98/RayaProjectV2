import React from 'react';
import { BsWallet2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";


import './nav.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <>
      
 <div className='row'>
 
        <div className='navbar navbar-expand-lg '>
          <div className='container-fluid flex items-center'>
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
           <div className='upperheader  '>
              <div className='oneLeft '>
                
                <p className="asmaa">The Easiest and Fastest instalment system.</p>
              </div>

              <div className='oneRight '>
                <ul>
                  <li><a className='mx-5' href='#'> <BsWallet2 size={18}/>  Pay Installment</a></li>
                  <li><a className='mx-2' href='#'> <FiPhoneCall size={18}/>  Call 19900</a></li>
                  <li><a className='mx-5' href='#'> <TbBuildingStore size={18}/>  Store Locator</a></li>
                  <li><a href='#'><TbWorld size={18}/>  العربية</a></li>
                </ul>
              </div>
           
             </div>
             </div>
              </div> 
              </div>
        
             <div className="navbar-header ">
              <div className='row'>

              

                <div className='col-2'>
                  <a href="path/to/Home">
                  <img className='Logo' src={require("../assets/Logo.jpg")}/> 
                  </a> 
                </div>                

            <form className="form-inline col-5">
  
        <span className="input-group-text text-dark px-3" id="basic-addon1"><BiSearchAlt size={30}/> <input className='search px-5' placeholder="Search Product" aria-label="Username" aria-describedby="basic-addon1"/>
  </span>
     
  </form> 

              
                 
                  {/* <a className='Login col-3 ml-3 text-sm hidden lg:block' href='#'>
                    <span className='ml-auto flex items-center'>Login or Register</span></a>
                  <a className='col-1 text-light ms-4 ' href='#'> <BsCart2 size={25}/> </a>
                 */}
                
                <div className='col-5 d-flex justify-content-end align-items-center'>
                  <a className='Login me-4' href='#'>Login or Register</a>
                  <a className='text-light ms-4 me-3' href='#'> <BsCart2 size={25}/> </a></div>
               
           </div>
    
        </div>
    
 <div className='secnav ps-5  align-items-center'>
<div class="navbarr">
  <a href="#home"><MdLocalOffer color='red'/>HotDeals</a>
  <div class="subnav ">

<button class="subnavbtn">Mobiles&Tablets<i class="fa fa-caret-down"></i></button>
   
    
    <div class=" subnav-content">
  
      <div className='row d-flex  gx-0  '>
      <div className='row'>
      <div className='col-8 ps-5 '>
       
      <a href="#company"><h4>Mobiles</h4>
     <ul className='sub2nav ms-4'>
     <li>Mobile Apple</li>
  <li>Mobile Samsung</li>
  <li>Mobile Xiaomi</li>
  <li>Mobile Oppo</li>
  <li>Mobile Realme</li>
  <li>Alcatel Phone</li>
    </ul>
  </a>
  
  <a href="#team"><h4>Mobile Accessories</h4>
  <ul className='sub2nav'>
        <li>Power Banks</li>
        <li> Chargers & Adapters</li>
        <li>Charging Cables</li>
        <li> Headphones & Headsets</li>
        <li>Screen Protectors</li>
        <li> Speakers</li>
        <li>Smart Watches Accessories</li>
        <li> Smart Watches</li>
        <li>Memory Cards</li>
        <li> Mobile Cases & Covers</li>
        </ul>
  </a>
  <a href="#caree"> <h4 className='ps-5'>Tablets</h4></a>
  <a href="#cares"><h4 className='ps-5'>Feature Phones</h4></a></div>
  <div className='col-4'>
   <div className='mobtext'>
    <h5>Great Deals</h5>
    <p>Meet Your deals and Enjoy cash and installment offers with best deals</p>
  </div>
    </div></div>
  
  <div className='row'>
    <div className='col-6'>
    <img src={require("../assets/oppo.webp")} /> 
    <img src={require("../assets/apple.webp")} /> 
    <img src={require("../assets/5.webp")} /> 
    <img src={require("../assets/sam.webp")} /> 
   </div>
  </div>
  <div>
    <ul className='mobfooter'>
    <li className='fs-1  px-5'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="moretext px-7">Shop All Mobiles & Tablets</h3></li>
    </ul>
  </div>
  </div> 
  </div></div>
  <div class="subnav">
    <button class="subnavbtn">Television <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row d-flex gx-0'>
      <div className='row'>
      <div className='col-8 '>
      <a href="#bring"><h4 className='ms-4'>TVs</h4>
      <ul className='sub2nav ms-4'>
  <li>Samsung TV</li>
  <li>LG</li>
  <li>Toshiba TV</li>
  <li>Sony TV</li>
  <li>SARY TV</li>
      </ul>
      </a>
      <a href="#deliver"><h4 >TV Accessories</h4></a>
       <a href="#package"><h4 className='ps-3'>Receivers</h4></a>
      <a href="#express"><h4 className='ps-3'>Home Theaters</h4></a>
      </div>
      <div className='col-4'>
   <div className='tvtext'>
    <h5 >Great Deals</h5>
    <p>Save up to 30% off and Enjoy best TV<br/> offers and qualities</p>
  </div>
  </div>
  </div>
  <div className='row d-flex'>
    <div className='col-6'>
    <img className='ps-2' src={require("../assets/lg.webp")} /> 
    <img className='ps-2' src={require("../assets/tor.webp")} /> 
    <img  className='ps-2' src={require("../assets/toa.webp")} /> 
    <img className='ps-2' src={require("../assets/sam.webp")} /> 
   
</div>
   </div>
  </div>
  <div>
    <ul className='mobfooter'>
    <li className='fs-1 px-5'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="moretext px-7">Shop All TVS</h3></li>
    </ul>
  </div>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Large Appliances <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row d-flex gx-0'>
      <div className='row'>
      <div className='col-8  ps-5'>
      <a href="#link1"><h4 >Air Conditioners</h4>
      <ul className='sub2nav mx-4'>
      <li>Unionaire Air Conditioner</li>
  <li>Carrier Air Conditioner</li>
  <li> LG Air Conditioner</li>
  <li> Midea Air Conditioner</li>
        </ul></a>
       
      <a href="#link2"><h4 >Cookers</h4>
      <ul className='sub2nav '>
      <li> Fresh Cookers</li>
  <li> La Germania Cookers</li>
  <li> UnionAire Cookers</li>
  <li>Zanussi Cookers</li>
      </ul>
      </a>
      <a href="#link3"><h4>Freezers</h4>
      <ul className='sub2nav '>
      <li>Beko Freezers</li>
  <li>W.Alaska Freezers</li>
  <li> Fresh Freezers</li>
  <li>Toshiba Freezers</li>
      </ul>
      </a>
      <a href="#link4"><h4 >Washing Machines</h4>
      <ul className='sub2nav '>
      <li>Zanussi washing Machines</li>
        <li> Fresh washing Machines</li>
        <li> Toshiba washing Machines</li>
        <li>LG washing Machines</li>
      </ul>
      </a>
      </div>
      <div className='col-4'>
   <div className='largetext'>
    <h5>Great Deals</h5>
    <p>Enjoy Installment up to 36 months</p>
  </div>
  </div>
  </div>
  <div></div>
    <ul className='mobfooter'>
    <li className='fs-1 px-5'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="moretext px-7">Shop All Large Appliances</h3></li>
    </ul>
  </div>
  </div>
    
  </div>
  <div class="subnav">
    <button class="subnavbtn">Small Appliances <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row d-flex gx-0'>
    <div className='row'>
      <div className='col-8 ps-5'>
      <a href="#link1"><h4>Vacuum Cleaners</h4>
      <ul className='sub2nav mx-4'>
      <li> Carpet Vacuum Cleaners</li>
  <li>Drum Vacuum Cleaners</li>
   <li>Handheld Vacuum Cleaners</li>
   <li>Steam Vacuum Cleaners</li> 
   <li> Stick Vacuum Cleaners</li>
  
        </ul></a>
      <a href="#link2"><h4>Irons</h4>
      <ul className='sub2nav '>
      <li> Garment Steamers</li>
  <li> Steam Generator</li>
  <li>Dry Irons</li>
      </ul>
      </a>
      <a href="#link3"><h4>Scales</h4>
      <ul className='sub2nav '>
      <li> Mechanical Kitchen Scale</li>
        <li>Body Scale </li> 
      </ul>
      </a>

      <a href="#link6"><h4>Heaters </h4>
      <ul className='sub2nav'>
      <li> Radiant Heaters</li>
      <li> Ceramic Heaters</li>
      <li>Quartz Heaters</li>

      </ul>
      </a> 
     

        </div>
       <div className='col-4'>
   <div className='smalltext'>
    <h5>Great Deals</h5>
    <p>Expect to see exclusive Offers with<br/> up to 36 monthly installment</p>

  </div>
  </div>
  </div>
  <div>
    <ul className='mobfooter'>
    <li className='fs-1 px-5'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="moretext px-7">Shop All Small Appliances</h3></li>
    </ul>
  </div></div>
      </div></div>
      <a href="#home"> Kitchen Applicances</a>
      <a href="#home">  Electronics</a>
      <a href="#home"> Labtop&PCS</a>
      <a href="#home"> Health&Beauty</a>
      <a href="#home"> Vehicles</a>
   
   </div>
   </div> 
 </div>
    </>
  )
}
export default Nav; 