import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                <div className="container-fluid px-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/birds" className="nav-link">Birds</NavLink>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-outline-secondary rounded-pill" type="button"><NavLink to="/birds" className="nav-link">Let's Fly</NavLink></button>
                </div>
            </nav>
        </div>
    )
}
