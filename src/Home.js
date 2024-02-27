import React from 'react';
import bird1 from './bird1.jpg';
import bird2 from './bird2.jpg';
import bird3 from './bird3.jpg';

export default function Home() {
  return (
    <div className="container col-md-10 mx-auto bg-dark">

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
            <img src={bird2} alt="Bird2" className="d-block w-100 image"/>
          </div>
          <div className="carousel-item">
            <img src={bird3} alt="Bird2" className="d-block w-100 image"/>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}
