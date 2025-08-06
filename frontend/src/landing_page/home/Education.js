import React from 'react';

function Education() {
    return (
        <>
            <div className='container mt-5 pt-5 mb-5 pb-5' >
                <div className='row justify-content-between align-items-center'>
                    <div className='col-4'>
                      <img src='images\images\education.svg' alt='image' />
                    </div>
                    <div className='col-6 edu-sec'>
                        <h1>Free and open market education</h1>
                        <div className='education-body mt-4'>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                               <a href='/' className='me-5 mt-5 text-decoration-none '> Varsity  <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
                        </div>
                         <div className='education-body mt-4'>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                               <a href='/' className='me-5 mt-5 text-decoration-none '> TradingQ&A  <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Education;