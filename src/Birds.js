import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Birds() {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch('https://birds-json.vercel.app/Tbl_Bird')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBirds(data)
            })
            .catch(error => console.log('Error fetching bird data:', error));
    }, []);

    return (
        <div className="container-fluid px-5 py-3" id="birds">
            <div className="row">
                {birds.map(bird => (
                    <div className="col-lg-3 mb-4" key={bird.Id} data-aos="flip-down" data-aos-duration="1000">
                        <div className="card bg-dark text-white border-0">
                            <Link to={`/birddetails/${bird.id}`}> <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} className="card-img-top custom-card rounded-3" alt="Bird" /></Link>
                            <div className="card-body shadow rounded-5 border-0">
                                <h5 className="card-title mb-3">{bird.BirdEnglishName}</h5>
                                <p className="card-text mb-3">{bird.BirdMyanmarName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Birds;