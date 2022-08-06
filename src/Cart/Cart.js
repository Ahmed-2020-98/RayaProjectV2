import React from 'react'
import './cart.css'

export default function Cart() {
  return (
    <>
     <div className='cartComponent'>
        <div className='container'>
            <h2>MY CART</h2>
            <p>You have 2 products in your cart</p>
            <div className='paymentSummary'>
                <div className='px-4 py-4'>
                    <h2>Payment Summary</h2>
                    <div>
                        <div className=' d-flex  justify-content-between my-2'> 
                            <span>Subtotal</span>
                            <span>1000<span> EGP</span></span>
                            
                        </div>
                        <div className=' d-flex  justify-content-between my-2'> 
                            <span>Shipping Fees</span>
                            <span>To be calculated<span> EGP</span></span>
                            
                        </div>
                        <div className=' d-flex  justify-content-between my-2'> 
                            <span>Shipping Fees</span>
                            <span>To be calculated<span> EGP</span></span>
                            
                        </div>
                        <div></div>
                        <div className=' d-flex  justify-content-between my-2'> 
                            <span>Total VAT Included</span>
                            <span style={{color:"#006CB7",fontSize:"18px",fontWeight:"500"}}>4,428<span> EGP</span></span>
                            
                        </div>
                        <div><span> Installments Unavailable </span><p> This order does not qualify for Raya Installments. To use Raya Installments, all items in cart must apply.</p></div>
                        <button className='btn text-white '>Pay With Raya Installments</button>

                    </div>
                </div>
            </div>
        </div>
     </div>

    
    </>
  )
}
