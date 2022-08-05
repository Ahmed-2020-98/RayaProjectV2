import React from 'react'

import Nav from './../Navbar/nav';

import Home from './../Home/home';

export default function HomeLayout() {
  return (
    <>
    
    <div className='container-fulid'>
        <div className='row p-0 m-0'>
        <div className='d-flex flex-column'>
            <div className='col-12'>
                <Nav/>
            </div>           

            <div className='container col-12 d-flex'>
                <div className='col-12'>
                    <Home/>
                </div>
                
            </div>
            </div>
        </div>
        </div>
 
    
    
    </>
  )
}
