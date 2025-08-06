import React from 'react';


function Kite() {
    return (
        <>
            <div className='container kite'>
                <div className='row align-items-center'>
                    <div className='col-8 '>
                        <img src='images\images\kite.png' alt='imga' />
                    </div>
                    <div className='col-4'>
                        <h1>Kite</h1>
                        <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                        <a href='/'>Try demo <i class="fa-solid fa-arrow-right-long ms-2 me-4"></i></a>
                        <a href='/'>Learn more<i class="fa-solid fa-arrow-right-long ms-2"></i></a>
                        <div className='mt-5'>
                            <a href='/' className='me-5'><img src='images\images\appstoreBadge.svg' alt='aalt'/></a>
                            <a href='/'><img src='images\images\googlePlayBadge.svg' alt='aalt'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kite;
// eslint-disable-next-line
