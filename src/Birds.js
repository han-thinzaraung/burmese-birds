import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Birds() {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch('https://birds-json.vercel.app//Tbl_Bird')
            .then(response => response.json())
            .then(data => setBirds(data))
            .catch(error => console.log('Error fetching bird data:', error));
    }, []);

    return (
        <div className="container-fluid px-5 py-3">
            <div className="row">
                {birds.map(bird => (
                    <div className="col-lg-4 mb-4" key={bird.Id}>
                        <div className="card bg-dark text-white">
                            <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} className="card-img-top" alt="Bird" />
                            <div className="card-body shadow rounded-5">
                                <h5 className="card-title">{bird.BirdEnglishName}</h5>
                                <p className="card-text">{bird.BirdMyanmarName}</p>
                                <Link to={`/birddetails/${bird.id}`} className="btn btn-primary">Detail</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Birds;