import { faFacebook, faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <hr />
    <div className=" bg-primary">
      <div className="row w-100">
        <div className="col-md-4 p-4 ms-md-5">
          <h4 className='text-light' > <FontAwesomeIcon icon={faCartShopping} className='me-3'  size='xl'/>E-Cart</h4>
          <p className='text-light'>Lorem ipsum dolor sit amet consectetur provident dolores illum reiciendis unde omnis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aut provident dolorem blanditiis, harum adipisci nihil nisi atque error modi nam, iure culpa quam optio odio praesentium facilis laboriosam. Enim.</p>
        </div>

        <div className="col-md-2 p-4 justify-content-center d-md-flex">
         <div>
         <h4 className='text-light'> Links</h4>
        
          <p className='mt-4 text-light'> <Link to={'/'} style={{textDecoration:'none'}}>Home </Link></p>
          <p className='text-light'><Link to={'/wishlist'} style={{textDecoration:'none'}}> Wishlist</Link></p>
          <p className='text-light'><Link to={'/cart'} style={{textDecoration:'none'}}>Cart</Link></p>
         </div>
        </div>

        <div className="col-md-2 p-4 text-light">
          <h4>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootsrap</p>
        </div>

        <div className="col-md-3 p-4 text-light">
          <h4>Contact Us</h4>
          <div className="d-flex mt-4">
            <input type="text" className='form-control' placeholder='Email Id' />
            <button className="btn btn-warning ms-3">Subscribe</button>
            
          </div>

          <div className='d-flex justify-content-between mt-3 text-light'>
          <FontAwesomeIcon icon={faFacebook} size='2xl'/>
          <FontAwesomeIcon icon={faLinkedin}  size='2xl' />
          <FontAwesomeIcon icon={faGithub}  size='2xl' />
          <FontAwesomeIcon icon={faInstagram} size='2xl' />

          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Footer