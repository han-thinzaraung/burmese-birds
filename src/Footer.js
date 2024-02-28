import React from 'react'
import bird from './bird.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
  return (
    <>
     
     <div class="container text-center">
            <img src={bird} style={{width: '30px'}} alt="Bird Image"  className='rounded-4 mb-3'/>
            <div class="footer-links">
                <Link to="/">Home</Link>
                <Link to="/birds">Birds</Link>
            </div>
            <p class="text-secondary p-3">© 2024 All rights reserved By WordPress River</p>
        </div>
    </>

  )
}
