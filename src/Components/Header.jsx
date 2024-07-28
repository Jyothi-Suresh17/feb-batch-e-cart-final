import { faCartShopping, faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishListArray=useSelector((state)=>state.wishListreducer)
  const cartarray=useSelector((state)=>state.cartListReducer)
  return (
    <>
    <div className=" d-flex  bg-primary w-100" style={{top:'0px',position:'fixed',zIndex:"1"}}>
     <Link to={'/'} style={{textDecoration:'none'}}> <h3 className='text-light py-3 ms-2'>  <FontAwesomeIcon icon={faCartShopping} className='me-3'  />E-Cart</h3></Link>
     <div className="div ms-auto py-3">
      <Link  to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> <button className="btn btn-outline-light me-3"><FontAwesomeIcon icon={faHeart} style={{color: "#e30000",}} /> Wishlist<Badge className='ms-1' bg="secondary">{wishListArray?.length}</Badge></button></Link>

      <Link  to={'/cart'} style={{textDecoration:'none',color:'white'}}> <button className="btn btn-outline-light">  <FontAwesomeIcon icon={faBagShopping} className='me-1' />Cart <Badge className='ms-1' bg="secondary">{cartarray?.length}</Badge> </button></Link>

     </div>
    </div>
    </>
  )
}

export default Header