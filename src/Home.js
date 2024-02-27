import React from 'react';
import bird1 from './bird1.jpg';
import bird2 from './bird2.jpg';
import bird3 from './bird3.jpg';

export default function Home() {
  return (
    <div>

      <div id="demo" className="carousel slide" data-bs-ride="carousel">


        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bird1} alt="Bird1" className="d-block w-100 image" />
          </div>
          <div className="carousel-item">
            <img src={bird2} alt="Bird2" className="d-block w-100 image" />
          </div>
          <div className="carousel-item">
            <img src={bird3} alt="Bird2" className="d-block w-100 image" />
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className='text-white container-fluid p-5'>
        <h2>Birding</h2>
        <p>
        If BirdLife International didn’t exist, you’d have to invent us. </p>
        <p>
        People are destroying and consuming nature at a devastating rate. Birds are our early warning system.         </p>
        <p>
        Uniquely, we have also identified and documented more than 13,000 Important Bird and Biodiversity Areas (IBAs) which are places of global significance for the conservation of birds and other biodiversity, creating practical tools for conservation and a wider integrated approach to conservation and the sustainable use of the natural environment.        </p>
        <p>
        At BirdLife we work together with our local communities along these Flyways to protect birds and biodiversity in an integrated way for the greatest conservation outcomes.         </p>
        <p>
        Our network of over 2 million birders, scientists and local volunteers helps us to track, follow, analyse, conserve and understand every bird species in the world.        </p>
      </div>
    </div>
  )
}
