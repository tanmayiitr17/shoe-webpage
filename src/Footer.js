import React from 'react';

const Footer = () => {
  return (
    <div className='footer_section'>
      <div>
        <h6>ABOUT</h6>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h6>HELP</h6>
        <ul>
          <li>Payment</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
        </ul>
      </div> 
      <div>
        <h6>SOCIAL</h6>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li> 
        </ul>
      </div> 
      <p className='footer_copywrite'>&copy; 2023 Milanese.com</p>
    </div>
  )
}

export default Footer
