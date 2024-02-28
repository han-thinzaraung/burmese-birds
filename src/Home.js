import React from 'react';
import bird1 from './birds1.jpg';
import bird2 from './birds2.jpg';
import feather from './feather.png';
import pinterest from './pinterest.png';


export default function Home() {
  return (
    <div id="home">
      
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button> */}
        </div>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bird1} alt="Bird1" className="d-block w-100 image" />
          </div>
          {/* <div className="carousel-item">
            <img src={bird2} alt="Bird2" className="d-block w-100 image" />
          </div> */}
          <div className="carousel-item">
            <img src={bird2} alt="Bird2" className="d-block w-100 image" />
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className='text-white container-fluid p-5' data-aos="zoom-in" data-aos-duration="800">
        <h2 className='mb-3'>Birding</h2>
        <p>
          If BirdLife International didn’t exist, you’d have to invent us. </p>
        <p>
          People are destroying and consuming nature at a devastating rate. Birds are our early warning system.         </p>
        <p>
          Uniquely, we have also identified and documented more than 13,000 Important Bird and Biodiversity Areas (IBAs) which are places of global significance for the conservation of birds and other biodiversity, creating practical tools for conservation and a wider integrated approach to conservation and the sustainable use of the natural environment.        </p>
        <p>
          At BirdLife we work together with our local communities along these Flyways to protect birds and biodiversity in an integrated way for the greatest conservation outcomes.         </p>
      </div>
      <div className='container-fluid text-white p-5'>
        <div className='row'>
          <div className='col-md-8 mt-5'>
          <div data-aos="fade-right" data-aos-duration="800">
          <p>
            Our network of over 2 million birders, scientists and local volunteers helps us to track, follow, analyse, conserve and understand every bird species.
          </p>
          </div>
            <div class="row row-cols-1 row-cols-md-4 g-4"  data-aos="zoom-in">
              <div class="col">
                <div class="card bg-white rounded-5 shadow">
                  <div class="card-body text-center">
                    <h5 class="card-title">8600</h5>
                    <p class="card-text">Total Species</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-white rounded-5 shadow">
                  <div class="card-body text-center">
                    <h5 class="card-title">1600</h5>
                    <p class="card-text">Collective</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-white rounded-5 shadow">
                  <div class="card-body text-center">
                    <h5 class="card-title">155</h5>
                    <p class="card-text">Total Races</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-white rounded-5 shadow">
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">2</h5>
                    <p class="card-text">Generations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center mt-3 mb-3'  data-aos="zoom-in">
            <div className="row">
              <div className='col-md-6 mb-3'>
                <a href="https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA" style={{ textDecoration: 'none' }}>
                  <div className='card'>
                    <img src={feather} />
                    <h5>Wikipedia</h5>
                  </div>
                </a>
              </div>
              <div className='col-md-6'>
                <a href="https://www.pinterest.com/search/pins/?q=birds&rs=typed" style={{ textDecoration: 'none' }}>
                  <div className='card'>
                    <img src={pinterest} />
                    <h5>Pinterest</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
