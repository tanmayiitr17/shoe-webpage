import React from 'react';
import { images } from './constant';

const Dropdown = ({open}) => {
  return (
    <div>
      {open ? (
        <div>
           <div>
            <h6
            style={{marginBottom:'0.8rem'}}
            >
            Skin</h6>
            <img src={images.skin} 
              style={{
                width:'5rem',
                height:'4rem', 
              }}/>
            {/* <p>Croco</p> */}
            <img src={images.skin} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
            {/* <p>Croco</p> */}
            <img src={images.skin} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
            {/* <p>Croco</p> */}
           </div>
           <div>
            <h6 style={{marginBottom:'0.8rem'}}>Color</h6>
             <img src={images.blackColor} 
            style={{
                width:'5rem',
                height:'4rem', 
                borderRadius:'100px'
            }}/>
             <img src={images.blackColor} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
                borderRadius:'100px'
            }}/>
             <img src={images.blackColor} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
                borderRadius:'100px'
            }}/>
           </div>
           <div>
            <h6 style={{marginBottom:'0.8rem'}}>Brogue</h6>
            <img src={images.brogue} 
            style={{
                width:'5rem',
                height:'4rem', 
            }}/>
            <img src={images.brogue} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
            <img src={images.brogue} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
           </div>
           <div>
            <h6 style={{marginBottom:'0.8rem'}}>Kadhai</h6>
            <img src={images.kadhai} 
            style={{
                width:'5rem',
                height:'4rem', 
            }}/>
            <img src={images.kadhai} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
            <img src={images.kadhai} 
            style={{
                width:'5rem',
                height:'4rem',
                marginLeft:'0.5rem',
            }}/>
           </div>
           
        </div>
      ) : null} 
    </div>
  )
}

export default Dropdown
