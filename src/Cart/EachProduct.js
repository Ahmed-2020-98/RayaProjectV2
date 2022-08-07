import React from 'react'
import './cart.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

export default function EachProduct() {
  return (
    <div className='eachProduct d-flex px-3 py-3 bs-4 shadow mx-5'>
    <img src='https://picsum.photos/128/128'/>
    <div className='d-flex flex-column '>
        <a href='#'>OPPO Reno 6 Dual SIM, 128GB, 8GB RAM, 4G , Black</a>
        <div>
            <h6>Select Qty</h6>
            <input className='form-control' value={1} type="number"/>
        </div>
        
    </div>
    <div className='d-flex flex-column justify-content-between'>
        <div className='d-flex justify-content-between'>
            <button className='btn AiOutlineHeart '><AiOutlineHeart/></button>
            <button className='btn BsTrash'><BsTrash/></button>
        </div>
        
        <div className='pb-4'><span>1000<span> EGP</span></span></div>
    </div>
</div>
  )
}
