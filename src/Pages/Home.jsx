import { faBagShopping, faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Home() {

  const data=useFetch('https://dummyjson.com/products');

  console.log(data);

  //for using actions

  const dispatch =useDispatch()


  
  return (
    <>
     <Row className='w-100 p-3 my-5'>
      {data?.length>0?data?.map((item)=>(
        <Col className='mt-3 d-flex justify-content-center p-3' key={item.id} sm={12} md={4} lg={3} >

<Card className='border shadow rounded' style={{ width: '100%' }}>
<Card.Img variant="top" src={item.thumbnail} className='w-100' style={{height:'250px'}} />
<Card.Body>
  <Card.Title style={{fontSize:'25px'}}>{item.title}</Card.Title>
  <Card.Text>
  <h5>Category : {item.category}</h5>
   
  <h5>Rating : {item.rating}  <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></h5>
  <h4 className='text-warning ms-5 mt-4'>Price: ${item.price}</h4>

  </Card.Text>
  <div className="d-flex justify-content-between">
  <Button variant="danger" className='me-2' onClick={()=>dispatch(addToWishList(item))}><FontAwesomeIcon icon={faHeart} /> </Button>
  <Button variant="success"  onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faBagShopping}/></Button>
  </div>
</Card.Body>
</Card>
</Col>
      )):<h3>Nothing to display</h3>}
     </Row>
    </>
  )
}

export default Home