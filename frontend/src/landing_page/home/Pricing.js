import React from 'react';


function Pricing() {
    return (
        <div className='container mb-5    pb-5  mt-5 pt-5 mb-5 pb-5' >
            <div className='row'>
                <div className='col-5 pricing-hd '>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' className='me-5 mt-5 text-decoration-none '>See pricing  <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col d-flex free'>
                            <img src='images\images\pricing0.svg' style={{width:"95px"}} alt='img'/>
                            <p> Free accountopening</p>
                        </div>
                        <div className='col d-flex free'>
                            <img src='images\images\pricing0.svg' style={{width:"95px"}} alt='img'/>
                            <p> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col d-flex free'>
                             <img src='images\images\intradayTrades.svg' style={{width:"95px"}} alt='img'/>
                            <p> Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;