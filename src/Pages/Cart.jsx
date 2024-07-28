import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice';

function Cart() {
  const cartArray=useSelector((state)=>state.cartListReducer);
  console.log(cartArray);

  const  dispatch=useDispatch()
//for navigation 
const navigate=useNavigate()

  //for finding total amount of cart

  const[total,setTotal]=useState(0)

  const getTotal=()=>{
    if(cartArray?.length>0){
      setTotal(cartArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
  }
  else{
    setTotal(0)
  }
}

//this total should be seen when loaded so we use useEffect
//if there is something inside useEffect dependancy then useEffect is called when changing state,or updating state
useEffect(()=>
  {getTotal()}
,[cartArray]);

//now for emptying the cart

const handleEmptyCart=()=>{
  alert('your order placed successfully!!');
  dispatch(emptyCart());
  navigate('/')

}

  return (
    <>
    {cartArray?.length>0?<div className='row '>
      <div className="col-md-1"></div>
      <div  className='col-md-6 mt-5'>
      <Table striped bordered hover className='my-5 shadow ms-4'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartArray?.map((item,index)=>(<tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img  src={item.thumbnail} alt=""  height={'120px'}/></td>
          <td>$ {item.price}</td>
          <td><button className="btn btn-danger" onClick={()=>dispatch(removeFromCart(item.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>))
        }
       
        
      </tbody>
    </Table>
      
      </div >
      
      <div  className=' col-md-4  ms-5 mt-5 align-item-center' >
      <Card style={{ width: '28rem' ,height:'18rem',marginTop:'40px'}}>
      <Card.Body className='mt-4 ms-5'>
        <h3 className='text-danger'>Cart Summary</h3>
        <h4>Total number of Products : {cartArray?.length} </h4>
        <h4>Total Price : $ {Math.round(total)} </h4>
        <Button className='btn btn-success w-100' onClick={()=>{handleEmptyCart()}}>CheckOut</Button>
      </Card.Body>
    </Card>
      
      </div>
    </div>:<div style={{width:'100%',height:'90vh',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px',flexDirection:'column'}}>
      <img src="https://bexcart.com/assets/images/empty-cart.gif" className='img-fluid ' style={{height:'430px'}} alt="emptywishist" />

      <Link to={'/'}>
      <button style={{marginBottom:'100px'}} className="btn btn-warning "><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Back to Home</button>
      </Link>
     </div>}

    
    </>
  )
}

export default Cart