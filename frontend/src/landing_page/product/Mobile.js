import React from 'react';


function mobile() {
    return (<>
        <div className='container kite'>
            <div className='row align-items-center'>
                <div className='col-8  text-center pe-5'>
                    <img src='images\images\varsity.png' alt='imga' />
                </div>
                <div className='col-4'>
                    <h1>Varsity mobile</h1>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div className='mt-5'>
                        <a href='/' className='me-5'><img src='images\images\appstoreBadge.svg' alt='aalt' /></a>
                        <a href='/'><img src='images\images\googlePlayBadge.svg' alt='aalt' /></a>
                    </div>
                </div>
            </div>
            <div>
            <h1 className='techhd'>Want to know more about our technology stack? Check out the <a href='/'>Zerodha.tech </a>blog.</h1>
            </div>
        </div>
    </>);
}

export default mobile;