import React from 'react'
import Mobiles_Tablets from './../Mobiles&Tablets/Mobiles_Tablets';
import SideFilter from './../SideFilter/SideFilter';
import Nav from './../Navbar/nav';
import Component_Header from './../Component_Header/Component_Header';

export default function Layout() {
  return (
    <>
    
    <div className='container-fulid'>
        <div className='row p-0 m-0'>
        <div className='d-flex flex-column'>
            <div className='col-12'>
                <Nav/>
            </div>
            <div>
                <Component_Header/>
            </div>

            <div className='container col-12 d-flex'>
                <div className='col-2'>
                    <SideFilter/>
                </div>
                <div className='col-10'>
                    <Mobiles_Tablets/>
                </div>
            </div>
            </div>
        </div>
        </div>
 
    
    
    </>
  )
}
