import React from 'react';
import {  Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand col-3" to="/"><img src='\images\images\logo.svg' style={{width:"50%"}} alt='navbarimg'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link  className="nav-item nav-link active"  aria-current="page" to="/Signup">
                               Signup
                            </Link>
                              <Link   className="nav-item nav-link active"  to="/About">
                               About
                            </Link>
                                 <Link   className="nav-item nav-link active"  to="/Products">
                               Products
                            </Link>
                              <Link  className="nav-item nav-link active"  to="/Pricing">
                               Pricing
                            </Link>
                             <Link  className="nav-item nav-link active" to="/Support">
                               Support
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;