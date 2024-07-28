import { faBagShopping,faArrowLeft, faTrash,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Wishlist() {
  const wishListArray= useSelector((state)=>state.wishListreducer);
  console.log(wishListArray);

  //function for deleting contentt from  trash

  const dispatch=useDispatch()

  const handleCart=(item)=>{
    dispatch(addToCart(item));
    dispatch(removeFromWishList(item.id))
  }

  return (
    <>
    
    {wishListArray?.length>0?<Row className='w-100 p-3 my-5'>
      {wishListArray?.map((item)=>(<Col className='mt-3 d-flex justify-content-center p-3' key={item.id}  sm={12} md={4} lg={3} >

<Card className='border shadow rounded' style={{ width: '100%' }}>
<Card.Img  variant="top" src={item.thumbnail} className='w-100' style={{height:'250px'}} />
<Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>
  <h5>Category : {item.category}</h5>
   
   <h5>Rating : {item.rating}  <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></h5>
   <h4 className='text-warning ms-5 mt-4'>Price: ${item.price}</h4>
  </Card.Text>
  <div className="d-flex justify-content-between">
  <Button variant="danger" className='me-2' onClick={()=>dispatch(removeFromWishList(item.id))}><FontAwesomeIcon icon={faTrash}  /> </Button>
  <Button variant="success" onClick={()=>handleCart(item)}><FontAwesomeIcon icon={faBagShopping} /></Button>
  </div>
</Card.Body>
</Card>
</Col>))}
     </Row>:<div> <div style={{width:'100%',height:'90vh',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px',flexDirection:'column'}}>
      <img src="https://www.unboxindustry.com/assets/images/wishlistEmpty.png" className='img-fluid ' style={{height:'530px'}}  alt="emptywishist" />

      <Link to={'/'}>
      <button style={{marginBottom:'10px'}} className="btn btn-warning "><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button>
      </Link>
     </div></div>}

    
    </>
  )
}

export default Wishlist