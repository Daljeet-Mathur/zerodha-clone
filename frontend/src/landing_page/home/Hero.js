import React from 'react';
import "./HomePage.css"


function Hero() {
    return (
        <>
            <div className="container hero-section" >
                <img src="images/images/homeHero.png" className="card-img-top mt-5" alt="hero" />
                <div className='py-5 text-center'>
                    <h1 className='Hero-heading'>Invest in everything</h1>
                    <p className='py-2 Hero-text'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button type="button" className="btn btn-primary fs-5 px-4 cs-btn mt-4">Sign up for free</button>
                </div>
            </div>
        </>


    );
}

export default Hero;