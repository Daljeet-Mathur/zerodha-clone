import React from 'react';


function Coin() {
    return ( <>
    <div className='container kite'>
                <div className='row align-items-center'>
                    <div className='col-8 '>
                        <img src='images\images\coin.png' alt='imga' />
                    </div>
                    <div className='col-4'>
                        <h1>Coin</h1>
                        <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                        <a href='/'>Coin<i class="fa-solid fa-arrow-right-long ms-2 me-4"></i></a>
                        <div className='mt-5'>
                            <a href='/' className='me-5'><img src='images\images\appstoreBadge.svg' alt='aalt'/></a>
                            <a href='/'><img src='images\images\googlePlayBadge.svg' alt='aalt'/></a>
                        </div>
                    </div>
                </div>
            </div>
    </> );
}

export default Coin;