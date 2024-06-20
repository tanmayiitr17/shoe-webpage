import React from 'react'
import {useState} from 'react'
import { images } from './constant'
import Dropdown from './Dropdown';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faHeart,faCartShopping,faAnglesDown ,faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    const [open, setOpen] = useState(false);
   
    const handleOpen = () => {
      setOpen(!open);
    };
    
  return (
    <main className='content_section'>


      <div className='content_img'>
        <h3>Finion MonkStrap</h3>
        <p>Men Black Textured Dress Shoes</p>
        <div className='content_img_container'>
            <div className='content_img_box'><img src={images.overlapshoe} /></div>
            <div className='content_img_box'><img src={images.topshoe} /></div> 
        </div>
        <div className='content_img_container'>
            <div className='content_img_box'><img src={images.sideshoe} /></div>
            <div className='content_img_box'><img src={images.manshoe} /></div> 
        </div>

        <div className='content_price'>
          <h6>$157.15  <span>$200.15</span></h6>
          <p>Inclusive of all taxes</p>
          <p>Expected delivery in 1 week</p>
        <div className='btn'>
        <button className='btnCart' ><FontAwesomeIcon icon={faCartShopping} style={{marginRight:'0.7rem'}}/>ADD TO CART</button>
        <button className='btnWish'><FontAwesomeIcon icon={faHeart} style={{marginRight:'0.7rem'}}/>WISHLIST</button>
        </div>
        </div>
      </div>


      <div className='content_select'>
         <p>Select the shoe part to edit</p>
         <button onClick={handleOpen}>Vamp <FontAwesomeIcon icon={faChevronDown} /></button>
         <Dropdown open={open} />
         <button onClick={handleOpen}>Toe <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Tongue <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Saddle <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Apron <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>In Sole <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Out Sole <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Inner Line <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
         <button onClick={handleOpen}>Laces <FontAwesomeIcon icon={faChevronDown} /></button>
         {/* <Dropdown open={open} /> */}
      </div>
    </main>
  )
}

export default Content
