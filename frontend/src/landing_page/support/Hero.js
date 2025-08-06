import React from 'react';


function Hero() {
    return ( <>
    <div className='container-fluid pricingbackcolor'>
      <div className='container pricingsec pt-5'>
         <divv className="row pb-5 justify-content-center ">
            <div className='col-6'>
                <h3>Support Portal</h3>
            </div>
            <div className='col-6 text-end '>
                <a href='/'>Track tickets</a>
            </div>
         </divv>
       
        <div className='row'>
            <div className='col-8'>
                <h1>Search for an answer or browse help topics to create a <br></br> ticket</h1>
                <span className='searchbox'> <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' className='rounded'/> <i className="fa-solid fa-magnifying-glass  search" ></i></span> 
                <div className='mt-4 mb-5'>
                    <a href='/' className='me-3'>Track account opening</a>
                    <a href='/' className='me-3'> Track segment activation</a>
                    <a href='/' className='me-3 '>  Intraday margins</a>
                    <a href='/' className='d-block mt-3'> Kite user manual</a>
                </div>
            </div>
            <div className='col-4'>
                <h3>Featured</h3>
                <span>1. <a href='/'>Quarterly Settlement of Funds - July 2025</a></span>
                <span className='d-block mt-3'>2. <a href='/'>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></span>
            </div>
        </div>
      </div>
      </div>
    </> );
}

export default Hero;